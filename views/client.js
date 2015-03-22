
$( 'document' ).ready( function(){
	
	$.ajax({ url: "/api/tasks", success: function( data ) {
		 
		for( taskID in data ){
			
			var task = data[taskID];
			
			var card = $( '<div/>' );
			card.addClass( "card" );
			card.appendTo( '#taskslist' );
			
			var title = $( '<div/>' );
			title.addClass( 'title' );
			title.html( task.title );
			title.appendTo( card );
			
			var description = $( '<div/>' );
			description.addClass( 'description' );
			description.html( task.description );
			description.appendTo( card );
            
            var validBtn = $( '<div/>' );
            validBtn.addClass( 'button valid' );
            validBtn.on( "click", function( c ) { return function(){}});
            validBtn.html( "" );
			validBtn.appendTo( card );
			
			var deleteBtn = $( '<div/>' );
			deleteBtn.addClass( 'button delete' );
			deleteBtn.on( "click", function( c, t ) { return function(){
				$.ajax({
					url: "/api/tasks",
					type: "DELETE",
					data: { id: t._id },
					success: function( data ) {
						console.log(data)
					}
				});
				c.fadeOut( 200, function() {
					c.remove();
				});
			} }( card, task ) );
			deleteBtn.html( "X" );
			deleteBtn.appendTo( card );
			
		}
		
	}, dataType: "json", complete: null });
	
} );
	   

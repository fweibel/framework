
$( 'document' ).ready( function(){
	
	$.ajax({ url: "/api/tasks", success: function( data ) {
		 
		for( taskID in data ){
			
			var task = data[taskID];
			
			var card = $( '<div/>' );
			card.addClass( 'card' );
			if( task.status == 'DONE' ) card.addClass( 'done' );
			card.appendTo( '#taskslist' );
			
			var title = $( '<input/>' );
			title.val( task.title );
			title.addClass( 'title' );
			title.attr('readonly','readonly');
			title.appendTo( card );
			
			var description = $( '<textarea/>' );
			description.val( task.description );
			description.addClass( 'description' );
			description.attr('readonly','readonly');
			description.appendTo( card );
            
            var validBtn = $( '<div/>' );
            validBtn.addClass( 'button valid' );
			validBtn.on( 'click', function( c, t ) { return function(){
				if( t.status == 'DONE' ) {
					t.status = 'TODO';
					c.removeClass( 'done' );
				} else {
					t.status = 'DONE';
					c.addClass( 'done' );
				}
				$.ajax({
					url: "/api/tasks",
					type: 'PUT',
					data: t
				});
			} }( card, task ) );
            validBtn.html( "" );
			validBtn.appendTo( card );
			
			var deleteBtn = $( '<div/>' );
			deleteBtn.addClass( 'button delete' );
			deleteBtn.on( 'click', function( c, t ) { return function(){
				c.fadeOut( 200, function() {
					c.remove();
				});
				$.ajax({
					url: "/api/tasks",
					type: 'DELETE',
					data: { id: t._id }
				});
			} }( card, task ) );
			deleteBtn.html( 'X' );
			deleteBtn.appendTo( card );
			
		}
		
	}, dataType: "json", complete: null });
	
} );
	   

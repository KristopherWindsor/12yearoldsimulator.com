$('#send').click(function(){
	if($('#name').val() != '' || $('#email').val() != '' || $('#message').val() != ''){
		$('#send').val('sending...');
		var req = $.ajax({type: "POST",url: "send.php",data: { 'name': $('#name').val().replace(/'/g, 'QQQ').replace(/"/g, 'DDD'), 'email': $('#email').val().replace(/'/g, 'QQQ').replace(/"/g, 'DDD'), 'message': $('#message').val().replace(/'/g, 'QQQ').replace(/"/g, 'DDD') }});
		$.when( req ).done(function(){
			$('#send').val('sent!');
			setTimeout(function(){
				$('#send').val('send');
				$('#name').val('');
				$('#email').val('');
				$('#message').val('');
			},2000);
		});
	}else{
		$('#send').val('can\'t send an empty message!');
		setTimeout(function(){
			$('#send').val('send');
		},4000);
	}
});
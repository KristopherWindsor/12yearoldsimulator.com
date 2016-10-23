var chosen = false;
var id;
$('#input').bind("enterKey",function(e){
	slow = false;
	var replyTo = $('#input').val().toLowerCase().replace(/'/g, '');
	$('#input').val('');
	var req = $.ajax({type: "POST",url: "../chatting.php",data: { 'id': id, 'reply': replyTo, sender: '1' }});
	$.when( req ).done(function(){
		$('#chat').append('<p class="12">[TitsMcGeeAnal_69]: '+replyTo+'</p>');
	});
});
$('#input').keyup(function(e){if(e.keyCode == 13){ $(this).trigger('enterKey'); }});
$('#input').focus();
function refresh(){
	if(chosen){
		console.log('refreshing:'+id);
		$.ajax({type: "POST",url: '../refresh.php',data: { 'code': id, 'get': '0' },dataType: 'json',success: function(data){
			for(var i = 0;i < data.length; i++)
				$('#chat').append('<p class="12">[guest009]: '+data[i]+'</p>');
			setTimeout(function() {refresh();},1000);
		}});
	}
}
window.setInterval(function(){
	if($('#wait').html() == 'please wait')
		$('#wait').html('please wait_');
	else
		$('#wait').html('please wait');
}, 250);
window.setInterval(function(){
	if(!chosen){
		console.log('finding match...');
		$.ajax({type: "POST",url: '../chooseVictim.php',data: { old: old },dataType: 'json',success: function(data){
			if(data[0] != '0'){
				chosen = true;
				id = data[0];
				refresh();
				$('#wait').hide();
				$('#input').show();
				console.log('match found!:'+id);
			}else
				console.log('no match found');
		}});
	}
}, 1000);
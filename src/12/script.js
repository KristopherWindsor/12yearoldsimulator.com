$('#input').focus();
var slow = true,count = 0,tmp='',TAKEN=false;
var replies = ['faggot','i ought to fuk u up m8','1v1 me','do u evn lift','ur mom','consider urself trolld','ur mom iz gay','stfu fagget','omg nub','u hax i repert u','my dad works for this site so I would be nice if I were you','ill rek u','get rekt scrub','u r gay'];
setTimeout(function() {
	if(slow == true && TAKEN == false){
		$('#chat').append('<p class="12">[TitsMcGeeAnal_69]: i fukd ur mom</p>');
		tmp='i fukd ur mom';
}},10000);
$('#input').bind("enterKey",function(e){
	slow = false;
	var replyTo = $('#input').val().toLowerCase().replace(/'/g, '');
	if(replyTo != ''){
		$('#chat').append('<p class="user">[guest009]: '+replyTo+'</p>');
		$('#input').val('');
		$.ajax({
			type: "POST",
			url: "send.php",
			data: { saying: tmp, reply: replyTo }
		});
		if(TAKEN == false){
			setTimeout(function() {
				$('#chat').append('<p class="12">[TitsMcGeeAnal_69]: '+replies[count]+'</p>');
				tmp = replies[count];
				count++;
				if(count == replies.length)
					count = 0;
				$('#input').focus();
			}, 1300);
		}else{
			$.ajax({
				type: "POST",
				url: "chatting.php",
				data: { id: id, reply: replyTo, sender: '0' }
			});
		}
}});
$('#input').keyup(function(e){if(e.keyCode == 13){ $(this).trigger('enterKey'); }});
window.setInterval(function(){
	if(!TAKEN){
		$.ajax({type: "POST",url: 'isitme.php',data: { 'code': id },dataType: 'json',success: function(data){
			if(data[0] == '1'){
				TAKEN = true;
				refresh();
				console.log('found a match!');
			}
		}});
	}
}, 1000);
function refresh(){
	$.ajax({type: "POST",url: 'refresh.php',data: { 'code': id, 'get': '1' },dataType: 'json',success: function(data){
		for(var i = 0;i < data.length; i++)
			$('#chat').append('<p class="12">[TitsMcGeeAnal_69]: '+data[i]+'</p>');
		setTimeout(function() {refresh();},1000);
	}});
}
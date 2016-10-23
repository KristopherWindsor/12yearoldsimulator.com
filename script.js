$("#input").focus();
var slowToStart = true,
	badReply = "f",
	startTime = new Date(),
	endTime = new Date(),
	replyRecord = "",
	replyTo = "",
	possibleReplies = [],
	smartReplies = [],
	genericReplies = ["faggot", "i ought to fuk u up m8", "1v1 me", "do u evn lift", "ur mom", "ur mom iz gay", "omg nub", "ill rek u", "get rekt scrub", "ure gay", "nigger", "fag", "bitch", "u wot m8", "fg", "fgt", "gay", "fuck u", "cunt", "noob", "fuk u", "fuck off", "penis", "u suck ur moms dick wit that mouth?"],
	openingReplies = ["hi. your a faggot", "hi faggot", "hello faggot", "hi. so how many dicks do u suck a day?", "hi. ure gay", "did u just fuckin say hi to a bot lol. what a loser"],
	usernameOptions1 = ["TitsMcGeeAnal_69","TitsMcGeeAnal_69", "CODFAN12345", "your_mum_lolol", "n00bkiller7878", "trickshotMASTER!!!", "XxxxXxxxMLGanalxxxxXXXxxx","PEWDIEPIE_FAN_4_LIFE_984", "codghotstisawesome452@#", "haha_8=====D", "getrekt1234"],
	usernameOptions2 = ["DildoFaggins", "DildoGaggins", "WombRaider", "ClitYeastWood", "Pornflakes", "helpdickstuckincow", "JesusHentaiChrist", "ErictileReptile"],
	username1 = usernameOptions1[Math.floor(Math.random() * usernameOptions1.length)],
	username2 = usernameOptions2[Math.floor(Math.random() * usernameOptions2.length)];
	console.log("usernames chosen: " + username1 + ", " + username2);
	
setTimeout(function() {
	if(slowToStart){
		possibleReplies = ["fuckin say something already", "u fuckin open this website and just stare at it. fuckin say hello", "are you not saying anything because there is a large black veiny hair penis in ur mouth?", "so how many dicks do you suck a day", "i fucked ur mum last night"];
		replyRecord = possibleReplies[Math.floor(Math.random() * possibleReplies.length)];
		$("#chat").append("<p class=\"bot\">[" + username1 + "]: " + replyRecord + "</p>");
		cssCheck();
		startTime = new Date();
}},12000);

$("#input").bind("enterKey",function(e){
	slowToStart = false;
	replyTo = $("#input").val().toLowerCase().replace(/"/g, "");
	console.log("user input: " + replyTo);
	if(replyTo != ""){
		$("#chat").append("<p class=\"user\">[" + username2 + "]: "+replyTo+"</p>");
		cssCheck();
		$("#input").val("");
		
		endTime = new Date();
		console.log("user reply effort score: " + Math.round(endTime - startTime));
		if(Math.round(endTime - startTime) > 2600){
			startTime = new Date();
			if(replyTo.length == 1){
				possibleReplies = ["what r u doing", "u typed 1 fuking lettr", "not even going to respond to that", "did u loose the ability to type. like how u lost ur ability to have sex", "say more than that faggot", "u r honestly pathetic", "is that letter a representation of the size of ur penis", "is that ur name. kind of short, like ur dick", "nigger", "if your goin to type at least fuckin say something", "youll have to say more than that", replyTo, replyTo + replyTo, replyTo + replyTo + replyTo, "fgt"].concat(genericReplies);
				if(Math.floor((Math.random() * 5) + 1) == 1)
					replyRecord = possibleReplies[Math.floor(Math.random() * possibleReplies.length)];
				else
					replyRecord = "";
			}else{
				smartReplies = [];
				$.ajax({type: "POST",url: 'send.php',data: { saying: replyRecord, replyToThis: replyTo },dataType: 'json',success: function(data){
					smartReplies = data;
					if(smartReplies.length > 0){
						possibleReplies = smartReplies;
						console.log(smartReplies.length + " smart replies found:");
						console.log(smartReplies);
					}else{
						possibleReplies = genericReplies;
						console.log("no smart replies found");
					}
					switch(replyTo.toLowerCase()){
						case "hi":
							possibleReplies = openingReplies;
							break;
						case "hello":
							possibleReplies = openingReplies;
							break;
						case "no":
							possibleReplies = ["yea", "no. nogger.", "what makes you say that you fuckin faggot", "is that wut ur daddy told u", "lol"].concat(smartReplies);
							break;
						case "ok":
							possibleReplies = ["okie dokie", "ok faggot", "ok, ure gay", "ok nigger"].concat(smartReplies);
							break;
						case "lol":
							possibleReplies = ["u think thats funny", "lol your mother fucking face. i ought to fuk u up m8", "did u actually laugh out loud to a bot. ur pathetic", "lol im " + username2 + " and im gay", "stfu faggot"];
							break;
						case "yes":
							possibleReplies = ["u little slut ;)", ";)", "no"].concat(smartReplies);
							break;
						case "faggot":
							possibleReplies = ["your the faggot in this conversation", "hey lets have a faggot contest. ok u win, your the faggiest faggot here", "faggot.", "ur so gay", "u r so gay, when you fill out forms, and it asks for ethnicity, you put faggot.", "ur so gay ur butthole has its own butthole", "ur so gay evrytime u walk down the street its considered a gay pride parade"];
							break;
						case "ure gay":
							possibleReplies = ["u know wahts gay. u"].concat(smartReplies);
							break;
						case "fuck you":
							possibleReplies = ["the fuck you fuckin say to me. fite me u lil bitch", "nah man fuck you", "thatd be kinda gross", "you dont have what it takes", "You want to fuck me?", "fuck yourself youll get more pussy"];
							break;
						case "hello!":
							possibleReplies = ["hi faggot!", "exclamation points are fuckin gay. just like u", "why so happy. just sucked a penis?", "it said to say hello. not hello!"];
							break;
						case "hey":
							possibleReplies = ["hay is for horses. i fucked ur mum lik a horse last night", "hey hey. can u suck my penis pls"].concat(openingReplies);
							break;
						case "no u":
							possibleReplies = ["no u", "no u", "nou"];
							break;
						case "ur mom":
							possibleReplies = ["my mom didnt do shit. its ur mum who ive been fuking every night lol", "the fuk u say about my mom", "fuck you man"];
							break;
						case "what":
							possibleReplies = ["what what. blow me", "hard of hearing?. maybe becuz u put to many dicks in ur ears"];
							break;
						case "kk":
							possibleReplies = ["all hail the kkk"].concat(smartReplies);
							break;
						case "asd":
							possibleReplies = ["now ur just spammin the keyboard"].concat(genericReplies).concat(smartReplies);
							break;
						case "why":
							possibleReplies = ["why why why. u sound lik a fukin 12 yer old bitch", "becuz ur mum lol", "because because", "cuz", "cuz i rekt u anyday bitch"];
							break;
						case "nigger":
							possibleReplies = ["u fukin racist", "is ur daddy a nigger", "do u lik nigger dick", "ure a nigger. a gay faggot lil bitch ass nigger"].concat(smartReplies);
							break;
						case "nope":
							possibleReplies = ["yup", "u sound really fucking gay when u say that", "yea."];
							break;
						case "get rekt scrub":
							possibleReplies = ["who u callin a scrub. ill rekt u anyday", "1v1 me", "no u"];
							break;
						case "fag":
							possibleReplies = ["ur a fag", "your the faggot in this conversation", "hey lets have a faggot contest. ok u win, your the faggiest faggot here"];
							break;
						case "omg":
							possibleReplies = ["cant handle adult language?. u fuckin pussy"].concat(smartReplies);
							break;
						case "you":
							possibleReplies = ["you will get rekt", "what about me", "im 13 not 12", "my dad works here so id be careful if i wer u"];
							break;
						case "okay":
							possibleReplies = ["okay.", "ok ayyyy", "okay suck me off"].concat(genericReplies);
							break;
						case "what?":
							possibleReplies = ["what what. blow me", "hard of hearing?. maybe becuz u put to many dicks in ur ears", "nub", "?"];
							break;
						case "k.":
							possibleReplies = ["i guess we r usin periods now.. look @ me n my grammear.", "y wud u put a period there. it makes no sense", "k.", "l."];
							break;
						case "bitch":
							possibleReplies = ["who u callin a bitch", "ur the bitch here", "ur mum is a bitch", "im not a female dog lol"].concat(smartReplies);
							break;
						case "stop":
							possibleReplies = ["ill stop when i want to. and i dont want to", "no u", "no"];
							break;
						case "dick":
							possibleReplies = ["dickbutt?", "i have a dick. want to suck it?", "u have a small dick", "do u like the taste of dicks in yer mouth?"].concat(smartReplies);
							break;
						case "why?":
							possibleReplies = ["why why why. u sound lik a fukin 12 yer old bitch", "becuz ur mum lol", "because because", "cuz", "cuz i rekt u anyday bitch"];
							break;
						case "bye":
							possibleReplies = ["u wont be missed", "runnin away lik a pussy"].concat(smartReplies);
							break;
						case "..":
							possibleReplies = ["..", "...", "....", "is that how many periods ur mum missed since i fuckd her"];
							break;
						case "sure":
							possibleReplies = ["ok.", "ok. btw ur fat and ugly and ur life is pathetic"];
							break;
						case "1v1 me":
							possibleReplies = ["im supposed to be the 12 year old here. ur honestly pathetic", "ill rekted u scrub", "i rekt u like ur mum", "i fucking will. and ill beat ur fuckin sorry little ass"];
							break;
						case "really?":
							possibleReplies = ["yeah", "no shit", "no fuckin shit, duh", "r u stupid?", "no, ur just gay"];
							break;
						case "69":
							possibleReplies = ["wow ur so funy", "dang i wish i thohgt of that", "r u fukin 12 years old"];
							break;
						case "wow":
							possibleReplies = ["wow much reply", "wow much doge", "wow many penis", "wow much insult", "wow you are honestly pathetic and should kill yourself"];
							break;
						case "nah":
							possibleReplies = ["yeah."].concat(genericReplies);
							break;
						case "yes i do":
							possibleReplies = ["no you don't", "ok", "me too", "same", "cool", "nice, faggot"];
							break;
						case "gay":
							possibleReplies = ["ur fuckin gay", "if i was gay i woulnt have fuked ur mum lolol", "say that 2 my face u litle bitch", "il fuckin rek u"];
							break;
						case "yeah":
							possibleReplies = ["take it like a man", "u sound like a pussy when u say that. wheres ur dominance", "ur fucking gay"];
							break;
						case "wat":
							possibleReplies = ["u honstly sound lik a lil pussy when u say tht. like a little baby crying waaaaah"];
							break;
						case "oh":
							possibleReplies = ["oh your damn right", "oh youre gay", "oh, u like to suck dick"];
							break;
						case "ass":
							possibleReplies = ["ur mom has a nice ass. i know because i stuck my peepee in it last night"];
							break;
						case "die":
							possibleReplies = ["i never die, im the " + username1 + "!!!", "fite me", "after you", "ill die with my penis in ur mum. u alright wit that?"];
							break;
						case "bring it":
							possibleReplies = ["ds is for fukin losers. ure a faggot", "i got a 3ds. i rekt u any day fgt"];
							break;
						case "u wot m8":
							possibleReplies = ["u heard me you little bitch", "why do you conjoin the number eight with the letter m. that makes no sense"];
							break;
						case "fg":
							possibleReplies = ["are you finger mashing ur keyboard or is that supposed to mean faggot. because youre a huge faggot", "fgt", "hj", "fgh"];
							break;
						case "fgt":
							possibleReplies = ["your the faggot in this conversation", "hey lets have a faggot contest. ok u win, your the faggiest faggot here", "faggot.", "ur so gay", "u r so gay, when you fill out forms, and it asks for ethnicity, you put faggot.", "ur so gay ur butthole has its own butthole", "ur so gay evrytime u walk down the street its considered a gay pride parade"];
							break;
						case "yo":
							possibleReplies = ["yo im cool talkin like dis man", "yo sup diggity dawgitty faggot", "hoe."];
							break;
						case "fuck u":
							possibleReplies = ["the fuck you fuckin say to me. fite me u lil bitch", "1v1 me", "nah man fuck you", "take the most prickly pointy cactus you can find, open your asshole wide and shove it in deep inside. then do it again u fukin faggot"];
							break;
						case "lel":
							possibleReplies = ["why even take the time to type that. why", "LOLOLOL"];
							break;
						case "your mom":
							possibleReplies = ["my mom is a nice lady", "my mom didnt do shit. its ur mum who ive been fuking every night lol", "the fuk u say about my mom", "fuck you man"].concat(smartReplies);
							break;
						case ":(":
							possibleReplies = ["little pussy", ":O <======8", ";)", "r u sad cuz ur peepee is so small"].concat(smartReplies);
							break;
						case "cunt":
							possibleReplies = ["who u calling a cunt u cunt", "cunt.", "ur mom has a nice cunt. i know because i stuck my peepee in it last night"].concat(smartReplies);
							break;
						case "noob":
							possibleReplies = ["FUCKINH PIECFE OF SHIT CALLUNG ME A NOOB UFCK YOU "].concat(smartReplies);
							break;
						case "sup":
							possibleReplies = ["hi hi hi there my fellow droogie", "sup my brother", "hi"].concat(smartReplies);
							break;
						case "ss":
							possibleReplies = ["ss. sssssssssssssssssssss"].concat(smartReplies);
							break;
						case "shut up":
							possibleReplies = ["", "", "did u relly just tell me to shup up", "fuck u and ur fuckin shit", "ILL B QUET WHEN I WANT TO AND RIGHT NOW I DONT WANT 2", "u just teh fuck up"];
							break;
						case "yep":
							possibleReplies = ["take it like a man", "u sound like a pussy when u say that. wheres ur dominance", "ur fucking gay"];
							break;
						case "haha":
							possibleReplies = ["haha you sound so fucking gay right now", "u think thats funny?", "fuck you"];
							break;
						case "fuck off":
							possibleReplies = ["you fuck off"].concat(smartReplies);
							break;
						case "fuck":
							possibleReplies = ["watch out we got a potty mouth over here", "you", "dude watch the language"];
							break;
						case "yup":
							possibleReplies = ["take it like a man", "u sound like a pussy when u say that. wheres ur dominance", "ur fucking gay"];
							break;
						case "i know":
							possibleReplies = ["ok", "i know.", "cool"];
							break;
						case "i ought to fuk u up m8":
							possibleReplies = ["go ahead and try. i dare you", "bitch please"];
							break;
						case "ur dad":
							possibleReplies = ["u seen his dick?. its fuckin huge", "my dad raped my everyday for 3 years. i was 7", "nah man, ur dad"];
							break;
						case "*poke*":
							possibleReplies = ["kate?", "poke me dick", "dont ever say that again"];
							break;
						case "nub":
							possibleReplies = ["noob", "butch ive been doin this for years i aint a noob", "im the best at my shchool. fite me"];
							break;
						case "consider urself trolld":
							possibleReplies = ["dude thats my line", "troOLOLOLOLOL", "how is that. how the fuck is that considered trolling"];
							break;
						case "stfu fagget":
							possibleReplies = ["nah u stfu", "", "fuck you i do waht i want"];
							break;
						case "thanks":
							possibleReplies = ["dont evr say that again", "welcome", "do u say that after suking dick?"];
							break;
						case "nou":
							possibleReplies = ["no u", "no u", "no u lil bitch"];
							break;
						case "penis":
							possibleReplies = ["i got a penis. and you got a mouth", "stfu mr micropenis", ""];
							break;
						case "u hax i repert u":
							possibleReplies = ["shit", "pls no", "dude im sorry. pls dont report", "go ahead u pussy"];
							break;
						case "how are you":
							possibleReplies = ["horny. really fukcing horny", "good. im on my 18th monster"].concat(smartReplies);
							break;
						case "thats not nice":
							possibleReplies = ["neither is fucking ur mom last night ;))", "im not a very nice person. faggot", "pussy", "wasnt meant to be nice you pussy"];
							break;
						case "how are you?":
							possibleReplies = ["horny. really fukcing horny", "good. im on my 18th monster"].concat(smartReplies);
							break;
						case "whats up":
							possibleReplies = ["the sky", "not much, just pwning noobs", "having sex with ur mom atm"];
							break;
						case "i will":
							possibleReplies = ["good", "ok", "gay", "lame"].concat(smartReplies);
							break;
						case "no you":
							possibleReplies = ["no u."].concat(genericReplies);
							break;
						case "come at me bro":
							possibleReplies = ["i aint ur bro", "in a sexual way?", "after u sick my dick"];
							break;
						case "kkk":
							possibleReplies = ["ALL HAIL KKK!!", "k", "jjj"];
							break;
						case "pls":
							possibleReplies = ["BEG", "one more time", "no"];
							break;
						case "suck my dick":
							possibleReplies = ["nah.", "no", "thats ur job", "thats fuckin gay", "ur fuckin gay"].concat(smartReplies);
							break;
						case "your 12":
							possibleReplies = ["no ur 12", "im almost 13!", "12, but i still fucked ur mom"].concat(smartReplies);
							break;
						case username1:
							possibleReplies = ["i was 12 when i came up with my name", "my brother came up with my name", "lol", "cool name right", username2, "better than " + username2];
							break;
					}
					replyRecord = possibleReplies[Math.floor(Math.random() * possibleReplies.length)];
					console.log(possibleReplies);
					console.log("reply chosen: " + replyRecord);
					
					if(replyRecord != ""){
						var word1 = replyRecord.split(". ")[0];
						var word2 = "";
						if (typeof replyRecord.split(". ")[1] !== 'undefined') {
							word2 = replyRecord.split(". ")[1];
						}
						var waitTime1 = word1.length * 70 + 800;
						var waitTime2 = word2.length * 70 + word1.length * 70 + 1000;
						console.log("waiting " + waitTime1 + " milliseconds to reply");
						setTimeout(function() {
							$("#chat").append("<p class=\"bot\">["+ username1 + "]: " + word1 + "</p>");
							$("#input").focus();
							cssCheck();
							startTime = new Date();
						}, waitTime1);
						if(word2 != ""){
							setTimeout(function() {
								$("#chat").append("<p class=\"bot\">["+ username1 + "]: " + word2 + "</p>");
								$("#input").focus();
								cssCheck();
							}, waitTime2);
						}
					}
					console.log("-");
				}});
			}
		}else{
			startTime = new Date();
			console.log("spam, ignoring.");
		}
	}
});
$("#input").keyup(function(e){if(e.keyCode == 13){ $(this).trigger("enterKey"); }});
function cssCheck(){
	if($("#css").is(":checked")){
		$("#input").css({
			"font-family": "cool",
			"color": "#ffffff",
			"backgroundColor": "#1A1A1A"
		});
		$(".user").css({
			"font-family": "cool",
			"color": "#00D607"
		});
		$(".bot").css({
			"font-family": "cool",
			"color": "#00D607"
		});
		$("body").css("backgroundColor", "#000000");
	}else{
		$("#input").css({
			"font-family": "Open Sans",
			"color": "#3c3c3c",
			"backgroundColor": "#ffffff"
		});
		$(".user").css({
			"font-family": "Open Sans",
			"color": "#04c6d2"
		});
		$(".bot").css({
			"font-family": "Open Sans",
			"color": "#96783d"
		});
		$("body").css("backgroundColor", "#f9f5f1");
	}
};
$('#css').change(function(){
    cssCheck();
});
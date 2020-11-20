questiontext = document.getElementById('all').value;
document.getElementById("all").innerHTML="Your answers will be dislplayed here";
count=1;
text='';
document.getElementById("answers").innerHTML='';
var question = document.getElementById('question');
button=document.getElementById("button");
// Function begins here
function GetRandomAnswer() {
    document.getElementById('all').innerHTML='⬇️ Answers are displayed below ⬇️ '; 
    ran = Math.floor(Math.random() * 5);
    var question = document.getElementById('question').value;
    if (ran==0 || ran==2){
        var yesreps = ['As I see it, Yes', 'Yes','Definately','You may rely on it','without a doubt','signs point to yes','outlook yes','outlook good','Most likely','It is decidely so','it is certain']
       var yesran = Math.floor(Math.random() *yesreps.length);
        ans = (yesreps[yesran]);
        return ans
    }
         //No
     else if(ran==1 || ran==3){
        var noreps = ["Don't count on it","My reply is no","My sources say no","Outlook not so good","very doubtful","No"]
        noran = Math.floor(Math.random() *noreps.length);
         noans = noreps[noran];
          return noans
        }
         //Don't ask now
     else if(ran==4){
         var newreps = ["Better not tell you now","Ask again later","Cannot predict now","Concentrate and ask again","Reply hazy, Try again later"]
         newran = Math.floor(Math.random() *newreps.length);
         elans = newreps[newran];
        return elans
    }
         //Something's wrong
     else{alert("Whoops!, something's wrong, try again later")}
}
function random()
{
var question = document.getElementById('question').value;
 if(question.length == 0){
 return alert("Please Enter a question")}
c = 0;
for (q of question){
    c = c + 1;
    if (q=='?'){
    break}
    else if(c==question.length){
    question=question+'?';
    break}
}
var RandomAnswer = GetRandomAnswer();
text = text +'<br>Question'+count+'- '+question+'   Anwer- '+RandomAnswer;
        count=count+1;
        alert(RandomAnswer);
        document.getElementById('answers').innerHTML=text;


//Please just stop asking me so many questions!
if(count>30) {
    var question = document.getElementById('question');
    var askQuestionsText = document.getElementById('stopaskingtext');
    var sub = document.getElementById('subtitle');
    askQuestionsText.style.fontSize="150%"
    askQuestionsText.innerHTML="The magic 8ball is angry with you because you ask it way too many questions";
    sub.innerHTML="Click to reload";
    sub.id="sub";
    sub.title="Relading will get the program back to normal!";
    sub.onclick=function reloadpage() {
        if(confirm("Are you sure, want to refresh?")){
            alert("Welcome back")
			location.reload();
		}	
    }
    question.value="Please stop";
    question.disabled=true;
    question.onmouseover=question.style.fontSize="160%";
    question.onmouseover=question.style.width="40%";
    question.onmouseover=question.style.opacity="0.5";
    button.innerHTML = "You ask too many questions";
    button.disabled=true;
    button.id = "btasktomanyquestion";

}
}

//Enter is pressed, what shall I do?
function keycode(event){
var x = event.keyCode;
  if (x == 13) {
    button.click();
    button.innerHTML="Enter  was clicked.";
    button.disabled=true;
    document.getElementById("button").id="WhenEnterIsPressed";
    document.getElementById('question').value='';
    setTimeout(reset_button,2000);
  }

//Reset the button after the enter is over
}
function reset_button() {
    button=document.getElementById("WhenEnterIsPressed");
    button.id="button";
    button.disabled=false;
    button.innerHTML="Click this buttton to get the answer";
}

document.onkeydown = function(e) {
    if (e.altKey && e.which == 86) {
      speakbutton = document.getElementById('SpeakButton');
      speakbutton.click();

    } 
}

function speak() {
    speakButton = document.getElementById('SpeakButton');
    inputBox = document.getElementById('question');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.onstart = function() {
}
recognition.onresult = function(event) {
    const current=event.resultIndex;
    const transcript = event.results[current][0].transcript;
    inputBox.value = transcript;
    const speakrandomanswer = GetRandomAnswer();
    readOutLoud(speakrandomanswer);
    text = text +'<br>Question'+count+'- '+transcript+'   Anwser- '+speakrandomanswer;
        count=count+1;
        document.getElementById('answers').innerHTML=text;
};
speakButton.addEventListener('click',() => {
    recognition.start();
});
function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    speech.text=message;
    window.speechSynthesis.speak(speech);
}
}

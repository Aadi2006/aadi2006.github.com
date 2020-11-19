questiontext = document.getElementById('all').value;
document.getElementById("all").innerHTML="Your answers will be dislplayed here";
count=1;
text='';
document.getElementById("answers").innerHTML='';
var question = document.getElementById('question');
button=document.getElementById("button");
// Function begins here
function random()
{
    var question = document.getElementById('question').value;
 if(question.length == 0 || question == 'Enter here'){
 return alert("Please Enter a question")}
ran = Math.floor(Math.random() * 5);
c = 0;
for (q of question){
    c = c + 1;
    if (q=='?'){
    break}
    else if(c==question.length){
    question=question+'?';
    break}
}
document.getElementById('all').innerHTML='⬇️ Answers are displayed below ⬇️ '; 
//Yes

if (ran==0 || ran==2){
   var yesreps = ['As I see it, Yes', 'Yes','Definately','You may rely on it','without a doubt','signs point to yes','outlook yes','outlook good','Most likely','It is decidely so','it is certain']
  var yesran = Math.floor(Math.random() *yesreps.length);
   ans = (yesreps[yesran]);
   text = text +'<br>Question'+count+'- '+question+'   Anwer- '+ans;
   count=count+1;
   document.getElementById('answers').innerHTML=text;
    alert(ans)}
    //No
else if(ran==1 || ran==3){
   var noreps = ["Don't count on it","My reply is no","My sources say no","Outlook not so good","very doubtful","No"]
   noran = Math.floor(Math.random() *noreps.length);
    noans = noreps[noran];
    text = text +'<br>Question'+count+'- '+question+'   Anwer- '+noans
    count=count+1;
    document.getElementById('answers').innerHTML = text;
    alert(noans);}
    //Don't ask now
else if(ran==4){
    var newreps = ["Better not tell you now","Ask again later","Cannot predict now","Concentrate and ask again","Reply hazy, Try again later"]
    newran = Math.floor(Math.random() *newreps.length);
    elans = newreps[newran];
    text = text +'<br>Question'+count+'- '+question+'   Anwer- '+elans;
    count=count+1;
    document.getElementById('answers').innerHTML = text;
    alert(elans)}
    //Something's wrong
else{alert("Whoops!, something's wrong, try again later")}

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

//Enter is pressed, what shall I do?
}
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

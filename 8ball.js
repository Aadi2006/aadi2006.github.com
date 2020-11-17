questiontext = document.getElementById('all').value;
document.getElementById("all").innerHTML="Your answers will be dislplayed here";
count=1;
text='';
document.getElementById("answers").innerHTML='';
question = document.getElementById('question').value;
button=document.getElementById("button");
// Function begins here
function random(){
    question = document.getElementById('question').value;
 if(question.length == 0 || question == 'Enter here'){
 return alert("Please Enter a question")}
ran = Math.floor(Math.random() * 3);
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

if (ran==0){
   var yesreps = ['As I see it, Yes', 'Yes','Definately','You may rely on it','without a doubt','signs point to yes','outlook yes','outlook good','Most likely','It is decidely so','it is certain']
  var yesran = Math.floor(Math.random() *yesreps.length);
   ans = (yesreps[yesran]);
   text = text +'<br>Question'+count+'- '+question+'   Anwer- '+ans;
   count=count+1;
   document.getElementById('answers').innerHTML=text;
    alert(ans)}
    //No
else if(ran==1){
   var noreps = ["Don't count on it","My reply is no","My sources say no","Outlook not so good","very doubtful","No"]
   noran = Math.floor(Math.random() *noreps.length);
    noans = noreps[noran];
    text = text +'<br>Question'+count+'- '+question+'   Anwer- '+noans
    count=count+1;
    document.getElementById('answers').innerHTML = text;
    alert(noans);}
    //Don't ask now
else if(ran==2){
    var newreps = ["Better not tell you now","Ask again later","Cannot predict now","Concentrate and ask again","Reply hazy, Try again later"]
    newran = Math.floor(Math.random() *newreps.length);
    elans = newreps[newran];
    text = text +'<br>Question'+count+'- '+question+'   Anwer- '+elans;
    count=count+1;
    document.getElementById('answers').innerHTML = text;
    alert(elans)}
    //Something's wrong
else{alert("Whoops!, something's wrong, try again later")}



}
function keycode(event){
var x = event.keyCode;
  if (x == 13) {
    button.click();
    button.disabled=true;
    button.innerHTML="Enter is pressed";
    document.getElementById("button").id="WhenEnterIsPressed";
    document.getElementById('question').value='';
    setTimeout(reset_button,2000);
  }
}
function reset_button() {
    button=document.getElementById("WhenEnterIsPressed");
    button.id="button";
    button.disabled=false;
    button.innerHTML="Click this buttton to get the answer";
}

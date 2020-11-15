var myname="Aadi";
document.getElementById("name").innerHTML = "My name is "+myname;
sen="";
food=["Pizza","dominos","burger","kfc"];
for(i=0;i<food.length;i++){
sen=sen+"\n"+food[i];
}
document.getElementByid("se").innerHTML=sen;

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 110) {
    document.getElementById("topnav").style = "display: block;position: fixed;height: 10vh;width: 100%;z-index:1;background-color: white;";
  } else {
    document.getElementById("topnav").style = "display:none;";
  }
}


function scrollFun(){
  let rbtn=document.getElementsByClassName("cls1");
  rbtn.scrollIntoView({block:"end",behavior:"smooth",inline:"center"});
}


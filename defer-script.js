var firstName = prompt("What is your First name?");
		if(firstName == "" || firstName == null) 
		{
		alert("You did not enter your First name..");
		}
		else {
		alert("Good day! " + firstName + ", welcome to Henritek");
		}



var state = false;
 
function toggle() {
    var body = document.getElementById('body');
    //let div = document.getElementsByClassName('box');
    var mode = document.getElementById('btn1');
    
 
    if (state) {
        body.style.background="rgba(128,128,128,0.1)";
        //div.style.background="rgba(192,192,192,0.3)";
        mode.innerText="Dark";
        mode.style.background="black";
        mode.style.color="white";
        mode.style.border="3px inset silver";
        

 
        state = false ;
    }
 
    else{
        body.style.background="rgba(0,0,0,0.84)";
        //div.style.background="rgba(173, 216, 230, 0.3)";
        mode.innerText="Light" ;
        mode.style.background="white";
        mode.style.color="black";
        mode.style.border="3px outset silver";
        

 
        state = true ;
    }
}

const toTop = 
document.querySelector(".btnScrollToTop");

window.addEventListener("scroll", () => { 
    if (window.pageYOffset > 100)
{ toTop.classList.add("active"); }

    else 
{ toTop.classList.remove("active");

}})

btnScrollToTop.addEventListener("click", function() {
		//window.scrollTo(0, 0);
		
		/*window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
			
			
		});*/
		
		$("html, body").animate({scrollTop: 0 }, "slow");
});
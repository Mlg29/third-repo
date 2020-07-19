const slides=document.querySelector(".sct3-d1").children;
let hambdiv = document.querySelector("nav ul");


const tl= new TimelineMax();


function toggleClass() {
	
	hambdiv.classList.toggle("togglecls");
	tl.fromTo(hambdiv,0.5,{x:"-300px"},{x:"0px",width:"50%"});
}



function active(){
	for(let i=0;i<slides.length;i++){
		slides[i].onclick=function clickslide(){
			for(let index=0;index<slides.length;index++){
				slides[index].classList.remove("active");
			}
			slides[i].classList.add("active");
		
		}
	}
}
active();


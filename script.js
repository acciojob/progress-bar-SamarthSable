//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let current=0;

circles[current].classList.add("active");
next.addEventListener("click", function () {
	if(current < circles.length){
	circles[current+1].classList.add("active");
	circles[current].classList.remove("active");
	current++;
	}

})

prev.addEventListener("click", function () {
	if(current > 0){
	circles[current-1].classList.add("active");
	circles[current].classList.remove("active");
	current--;
	}

})



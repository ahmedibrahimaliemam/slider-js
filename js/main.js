//slider item
 let sliderImages=Array.from(document.querySelectorAll(".slider-container img")) ;
//get number of slides 
let slideCount=sliderImages.length ;
console.log(slideCount) ;
//set current slide 
let currentSlide=2 ;
//slide number 
let slideNumberElement=document.querySelector(".slide-number") ;
//previous and next buttons
let nextBtn=document.querySelector(".next") ;
let previousBtn=document.querySelector(".prev") ;
//add events
nextBtn.addEventListener("click",nextSlide) ;
previousBtn.addEventListener("click",prevSlide) ;
//creat ul elements 
let paginationElement=document.createElement('ul') ;
//set id on bagination element
paginationElement.setAttribute("id","pagination-ul") ;
//creat li 
for(let i=1 ; i<=slideCount ;i++){
    let paginationItem=document.createElement('li') ;
    //set id
    paginationItem.setAttribute('index',i) ;
    //set item content 
    paginationItem.appendChild(document.createTextNode(i)) ;
    //append item to element
    paginationElement.appendChild(paginationItem) ;
}
//add the created ul to indicator
let indicator=document.querySelector(".indicator") ;
indicator.appendChild(paginationElement) ;
// get the new created ul 
let paginationElementUl=document.querySelector("#pagination-ul") ;
//get pagination bullets
let paginationBullets=Array.from(document.querySelectorAll("#pagination-ul li")) ;
//loop through all bullets
for(let i=0 ; i<paginationBullets.length ;i++){
    paginationBullets[i].addEventListener('click',function(){
        currentSlide=parseInt(this.getAttribute('index')) ;
        checker();
    })
}
//trigger function
checker()
//function next slide
function nextSlide(){
    if(currentSlide!=slideCount){
        currentSlide+=1 ;
        checker() ;
    }
}
//function previous slide
function prevSlide(){
    if(currentSlide!=1){
        currentSlide-=1 ;
        checker() ;
    }
}
//creat the checker function
function checker(){
    //set the slide number
    slideNumberElement.textContent=`slider# ${currentSlide} of ${slideCount}` ;
    //remove class active
    removeActive() ;
    //set active class on current slide
    sliderImages[currentSlide-1].classList.add('active') ;
    //set active in pagination li
    paginationElementUl.children[currentSlide-1].classList.add('active') ;
}
//check if the current class is the first
if(currentSlide==1){
    previousBtn.classList.add('prev-disabled') ;
}
else{
    previousBtn.classList.remove('prev-disabled') ;
}
//check if the current slide is the last 
if(currentSlide==slideCount){
    nextBtn.classList.add('next-disabled') ;
}
else{
    nextBtn.classList.remove('next.disabled') ;
}
//remove all active
function removeActive(){
    sliderImages.forEach((img)=>{img.classList.remove('active')}) ;
    //loop pagination bullets
    paginationBullets.forEach((li)=>{li.classList.remove('active')}) ;
}
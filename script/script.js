/** Animation typign home  pas encore marché*/
var typed = new Typed(".typing",{
    strings:[" ","Data analysis ","web Desiger","Web Developper","Graphic Designer", "Influenceur"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
    
})

function showSectionAbout(){
   
    document.getElementById("about").classList.remove("hidden");
    document.getElementById("about").classList.add("active");  
    document.getElementById("home").classList.add("hidden");
    document.getElementById("home").classList.remove("active");
    document.getElementById("service").classList.add("hidden");
    document.getElementById("portfolio").classList.add("hidden");
    document.getElementById("contact").classList.add("hidden");
    
 
}

function toggleSections(sectionToShow,sectionToHide){
    var sectionToShowElement = document.getElementById(sectionToShow);
    sectionToShowElement.classList.remove("hidden");
    var sectionToHideElement = document.getElementById(sectionToHide);
    sectionToHideElement.classList.add("hidden");

}



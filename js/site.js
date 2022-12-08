// WHAT YOU WANT CHANGED
const navLinks = document.querySelectorAll(".navbar__menu-link");
// WHAT YOU ARE LISTENING FOR
const sectionHero = document.querySelector(".content__hero");
const sectionAbout = document.querySelector(".content__about");
const sectionProgram = document.querySelector(".content__program");
// OPTIONS
const sectionHeroOptions = {
    threshold: .80
}
const sectionAboutOptions = {
    threshold: .80
};
const sectionProgramOptions = {
    threshold: .95
}
// INTERSECTION OBSERVERS
const sectionHeroObserver = new IntersectionObserver(function(entries, sectionHeroObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            navLinks[2].classList.remove("active");            navLinks[2].classList.add("notActive");
        } else {
            navLinks[2].classList.remove("notActive");
            navLinks[2].classList.add("active");
        }
    })
}, sectionHeroOptions);
const sectionAboutObserver = new IntersectionObserver(function(entries, sectionAboutObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            navLinks[0].classList.remove("active");
            navLinks[0].classList.add("notActive");
        } else {
            navLinks[0].classList.remove("notActive");
            navLinks[0].classList.add("active");
        }
    })
}, sectionAboutOptions);
const sectionProgramObserver = new IntersectionObserver(function(entries, sectionProgramObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            navLinks[1].classList.remove("active");
            navLinks[1].classList.add("notActive");
        } else {
            navLinks[1].classList.remove("notActive");
            navLinks[1].classList.add("active");
        }
    })
}, sectionProgramOptions);
// LINK COLOR CHANGE
sectionHeroObserver.observe(sectionHero);
sectionAboutObserver.observe(sectionAbout);
sectionProgramObserver.observe(sectionProgram);
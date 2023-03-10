// Start Global Variables
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

//create and build a navigation menu.

const navBar = document.getElementById("navbar__list");
const createNav = () => {
    navBar.innerHTML = "";
    document.querySelectorAll("section").forEach((section) => {
        const list = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
        navBar.insertAdjacentHTML("beforeend", list);
    });
};

createNav();

//active the viewport/closest & distinguished. 

function activeSection (){
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
        const sectionBond = section.getBoundingClientRect();
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            section.classList.add("your-active-class");
            navActive[i].classList.add("active_button");
        } else{
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}

window.addEventListener("scroll",(event)=>{
    activeSection();
    toggleNavBar();
})

//functionality to scroll to sections.

navBar.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (ev.target.dataset.nav) {
        document
            .getElementById(`${ev.target.dataset.nav}`)
            .scrollIntoView({behavior: "smooth"});
    }
});
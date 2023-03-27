
const mainMenu = document.querySelectorAll("section");
const navMenu = document.getElementById("main-menu");

// Build the navigation menu dynamically using the section ids and data-nav attributes
const navigationBuilder = () => {
    let navMenuItems = "";
    mainMenu.forEach(section => {
        const sectionName = section.id;
        const sectionTitle = section.dataset.nav;
        navMenuItems += `<li><a class="nav__link" id="nav-${sectionName}" href="#${sectionName}">${sectionTitle}</a></li>`;
    });

    navMenu.innerHTML = navMenuItems;
};

// Call the navigationBuilder function to build the navigation menu
navigationBuilder();

// Add "active" class to section when near top of viewport
const offsetSection = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// Remove active class
const removeActiveClass = (section) => {
    section.classList.remove("active-class");
    const sectionId = section.id;
    const navLink = document.getElementById(`nav-${sectionId}`);
    navLink.classList.remove("active");
};

// Add active class
const addActiveClass = (conditional, section) => {
    if (conditional) {
        section.classList.add("active-class");
        sectionScroll = section.id.slice(7) - 1;
        const sectionId = section.id;
            const navLink = document.getElementById(`nav-${sectionId}`);
            navLink.classList.add("active");
        };
        console.log(mainMenu[sectionScroll]);
    
};

// Implement the above functions
const activeSection = () => {
    mainMenu.forEach(section => {
        const elementOffset = offsetSection(section);
        const inViewport = () => elementOffset < 150 && elementOffset >= -150;
        removeActiveClass(section);
        addActiveClass(inViewport(), section);
    });
};

const scroll = () => {
    const navLinks = document.querySelectorAll("#main-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            for(let i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.remove("active-class");
            }
            link.classList.add("active-class");
        });
    });
};

window.addEventListener("scroll", activeSection);
scroll();

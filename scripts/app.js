/*============== Theme Switch dark/light ==================*/
const themeButton = document.getElementById('theme-button')
const changeIcon = document.getElementById('toggle-icon')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
const textTheme = 'Light Mode'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const selectedMode = localStorage.getItem('selected-mode')

//Validating user preference
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => changeIcon.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
const getCurrentMode = () => themeButton.innerText.replace(textTheme) ? 'Dark Mode' : 'Light Mode';

//Check previously selected Theme and icon
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    changeIcon.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

    if (selectedMode === textTheme) {
        themeButton.innerText = 'Dark Mode'
    } else {
        themeButton.innerText = 'Light Mode'
    }
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme);
    changeIcon.classList.toggle(iconTheme);

    if (themeButton.innerText === textTheme) {
        themeButton.innerText = 'Dark Mode'
    } else {
        themeButton.innerText = 'Light Mode'
    }


    //Store user preference
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    localStorage.setItem('selected-mode', getCurrentMode())
})

// add an event listener to the file input 
// and reflect the name and size of the file below the label
const inputFile = document.getElementById('file');
const chatDoc = document.querySelector('.chatRoom__name');
const toggleFile = document.getElementById('show');
const removeFile = document.getElementById('chatRoom__remove');

inputFile.addEventListener('change', (e) => {

    //Get selected files
    const [file] = e.target.files;
    // Get the file name and size
    const {
        name: fileName,
        size
    } = file;

    const fileSize = (size / 1000).toFixed(2);
    const displayFile = `${fileName} - ${fileSize}KB`;

    chatDoc.textContent = displayFile;
    toggleFile.classList.add('show__fileName')
});

//Remove File 
removeFile.addEventListener('click', () => {
    toggleFile.classList.remove('show__fileName')
})

//ChatRoom
const chatRoom__icon = document.getElementById('chatRoom__icon');
const chatRoom = document.getElementById('chatRoom');
const closeRoom = document.getElementById('close');

chatRoom__icon.addEventListener('click', () => {
    chatRoom.classList.add('show__room');
    chatRoom__icon.classList.add('close__icon')
})

closeRoom.addEventListener('click', () => {
    chatRoom.classList.remove('show__room');
    chatRoom__icon.classList.remove('close__icon')
})

//Hamburger
const hamburger = document.getElementById('nav-icon2');
const menu = document.getElementById('menu')
const menuTransform = document.getElementById('transform')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    menu.classList.toggle('show__menu')
})

//Menu Accordion
const acc = document.getElementById("accordion");
const menuAccordion = document.getElementById("menu__accordion")

acc.addEventListener('click', () => {
    acc.classList.toggle("menu__active");
    let panel = acc.nextElementSibling;
    if (panel.style.maxHeight) {

        panel.style.maxHeight = null;
    } else {

        panel.style.maxHeight = panel.scrollHeight + "px";
    }
})

menuAccordion.addEventListener('click', () => {
    menuAccordion.classList.toggle("menu__active");
    let panel = menuAccordion.nextElementSibling;
    if (panel.style.maxHeight) {

        panel.style.maxHeight = null;
    } else {

        panel.style.maxHeight = panel.scrollHeight + "px";
    }
})
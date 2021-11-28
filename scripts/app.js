/*============== Theme Switch dark/light ==================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon =  localStorage.getItem('selected-icon')

//Validating user preference
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

//Check previously selected Theme and icon
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme)

    //Store user preference
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//Donation
const donateBtn = document.getElementsByClassName('donation__gridContainer')

for (let index = 0; index < donateBtn.length; index++) {
    donateBtn[index].addEventListener('click', () => {

        const number = document.getElementById('number');
        const output = document.getElementById('output')
        const getBtnValue = donateBtn[index].innerText
    
        number.value = getBtnValue;
        output.innerText = `Donate ${number.value}` 
    })
    
}


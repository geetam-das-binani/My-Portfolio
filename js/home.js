
document.querySelector('.cross').style.display = "none"


const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main');
hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('opacity_width');
    main.classList.toggle('main_small_width');
    if (sidebar.classList.contains('opacity_width') && main.classList.contains('main_small_width')) {
        document.querySelector('.ham').style.display = "block"
        document.querySelector('.cross').style.display = "none"

    }
    else {
        document.querySelector('.ham').style.display = "none"
        setTimeout(() => {
            document.querySelector('.cross').style.display = "block"

        }, 400)

    }


})


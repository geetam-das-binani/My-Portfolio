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

const infocontainer = Array.from(document.getElementsByClassName('infocontainer'))
let buttons = document.getElementsByClassName('btn');
for (element of buttons) {
    element.addEventListener('click',(e)=> {
        let index = parseInt(e.target.id)
        infocontainer[index].getElementsByClassName('moreinfo')[0].classList.toggle('dnone')
           console.log(this.id)

    })
}








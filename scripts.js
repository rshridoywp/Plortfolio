const changer = document.querySelectorAll('.navLink')
const about = document.querySelector('.about')
const project = document.querySelector('.project')
const contact = document.querySelector('.contact')
about.style.display = 'flex'
project.style.display = 'none'
contact.style.display = 'none'

changer.forEach((item) => {
    console.log(item.className);
    item.addEventListener('click', () => {
        if (item.id=== 'aboutSec') {
            about.style.display = 'flex'
            project.style.display = 'none'
            contact.style.display = 'none'
        } else if (item.id=== 'projectSec') {
            about.style.display = 'none'
            project.style.display = 'block'
            contact.style.display = 'none'
        } else if (item.id=== 'contactSec') {
            about.style.display = 'none'
            project.style.display = 'none'
            contact.style.display = 'block'
        }
    }
    )
    
}
)


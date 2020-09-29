// Your code goes here

// 1        mouseenter - a pointing device is moved onto the element that has the listener attached.
const logoHead = document.querySelector('.logo-heading')
logoHead.addEventListener('mouseenter', (event) => {
    logoHead.style.borderBottom = '5px dotted black'
})

// 2        mouseleave - a pointing device is moved off the element that has the listener attached.
logoHead.addEventListener('mouseleave', (event) => {
    logoHead.style.borderBottom = 'none'
})

// 3        select - some text is being selected
const h2Tags = document.querySelectorAll('body h2')

document.querySelectorAll('body h2')
    .forEach(elem => elem.addEventListener('select', event => {
        event.style.color = 'pink'
    }))




// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

// Stop the navigation items from refreshing the page by using preventDefaul()  kljkldjaf 

document.querySelectorAll('a')
    .forEach(link => link.addEventListener('click', event => {
        event.preventDefault()
    }))
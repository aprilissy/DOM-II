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

// 3        click - a pointing device button has been pressed and released on an element
const h2Tags = document.querySelectorAll('h2')

Array.from(h2Tags).forEach(elem => {
    elem.addEventListener('click', event => {
        elem.style.color = 'pink'
    })
})

// 4        dblclick - a pointing device button is clicked twice on an element

document.querySelectorAll('a')
    .forEach(link => link.addEventListener('dblclick', event => {
        link.style.color = 'pink'
    }))

// 5        pointerleave - Pointing device is moved out of the hit-testing boundary.
const body = document.querySelector('body')

// body.addEventListener('pointerleave', (event) => {
//     alert(`Don't go!`)
// })

// 6        mouseover - A pointing device is moved onto the element that has the listener attached or onto one of its children.
const introImg = document.querySelector('.intro img')
console.log(introImg)

introImg.addEventListener('mouseover', (event) => {
    introImg.style.opacity = '0.5'
})

// 7        mouseout - A pointing device is moved off the element that has the listener attached or off one of its children.
introImg.addEventListener('mouseout', (event) => {
    introImg.style.opacity = '1'
})

// 8        contextmenu - The right button of the mouse is clicked (before the context menu is displayed).
body.addEventListener('contextmenu', (event) => {
    body.style.backgroundColor = 'slategrey'
})

// 9        copy - The selection has been copied to the clipboard
const pTags = document.querySelectorAll('p').forEach(link => link.addEventListener('copy', event => {
    link.style.color = 'pink'
}))

// 10       keydown - any key is pressed
const page = document.querySelector('html')

page.addEventListener('keydown', (event) => {
    page.style.backgroundColor = 'powderblue'
})

// Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

// Stop the navigation items from refreshing the page by using preventDefaul()  kljkldjaf 

document.querySelectorAll('a')
    .forEach(link => link.addEventListener('click', event => {
        event.preventDefault()
    }))
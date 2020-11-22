const zmien = document.querySelectorAll('.zmien');
const box = document.querySelector('.box');
const galeria = ['img/city1.jpg', 'img/city2.jpg', 'img/city3.jpg',
    'img/city4.jpg'
]
let i = 0

zmien.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.id === 'zmiennikL') {
            if (i <= 0 || i > 3) {
                i = 3
            } else {
                i = i - 1
            }
            box.style.backgroundImage = `url(${galeria[i]})`
        } else {
            if (i < 0 || i >= 3) {
                i = 0;
            } else {
                i = i +1
            }
           
            box.style.backgroundImage = `url(${galeria[i]})`
        }

    })
})
const items = document.querySelectorAll('.acordeon .item .header button');

items.forEach(item => {
    item.addEventListener('click', e =>{
        const content = e.target.parentElement.nextElementSibling; //accedemos al padre(header) y luego al hermano del padre(content)
        content.classList.toggle('show'); //togle aáde un token o lo elimina dando true o false
    });
})
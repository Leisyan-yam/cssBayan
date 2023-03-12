const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', ()=> {
        item.childNodes[1].checked = true
    })
})
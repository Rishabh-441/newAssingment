let add = document.getElementsByClassName('add')[0];
// alert(add);
let create = document.getElementsByClassName('create')[0];
create.style.display = 'none';
add.addEventListener('click', function() {
    if (create.style.display == 'none') {
        create.style.display = 'flex';
        // alert(create.style.display);
    }
    else {
        create.style.display = 'none';
        // alert(create.style.display);
    }
})

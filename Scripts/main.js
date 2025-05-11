function openForm(){
    document.getElementById("AddProduct_Form").style.display = "flex";
    document.getElementById("mob_nav").style.display="none";
}
function closeForm(){
    document.getElementById("AddProduct_Form").style.display = "none";
    document.getElementById("mob_nav").style.display="flex";
}

window.onclick = function(event){
    const modal = document.getElementById("AddProduct_Form");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//
function openMenu(){
    document.getElementById("page_menu").style.display = "block";
}
function closeMenu(){
    document.getElementById("page_menu").style.display = "none";
}
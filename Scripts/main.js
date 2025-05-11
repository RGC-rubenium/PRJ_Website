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
    const background_menu = document.getElementById("background_menu");
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("mob_nav").style.display="flex";
    }
    if (event.target == background_menu) {
        background_menu.style.display = "none";
        document.getElementById("mob_nav").style.display="flex";
    }
}


function openMenu() {
    // Disable the open button during animation
    const openButton = document.getElementById("open_menu_button");
    openButton.disabled = true;
    
    document.getElementById("background_menu").style.display = "flex";
    var close_nav = document.getElementById("mob_nav");
    close_nav.classList.add("closing_nav");
    close_nav.addEventListener("animationend", ()=>{
        close_nav.classList.remove("closing_nav");
        close_nav.style.display = "none";
        document.getElementById("page_menu").style.display = "block";
        openButton.disabled = false;
    }, {once: true});
}

function closeMenu() {
    const closeButton = document.getElementById("close_menu_button");
    closeButton.disabled = true;
    
    var close_element = document.getElementById("page_menu");
    close_element.classList.add("closing_menu");
    close_element.addEventListener("animationend", ()=>{
        close_element.classList.remove("closing_menu");
        document.getElementById("background_menu").style.display = "none";
        close_element.style.display = "none";
        document.getElementById("mob_nav").style.display = "flex";
        
        closeButton.disabled = false;
    }, {once: true});
}
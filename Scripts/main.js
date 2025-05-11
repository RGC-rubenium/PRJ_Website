function openForm(){
    document.getElementById("AddProduct_Form").style.display = "flex";
}
function closeForm(){
    document.getElementById("AddProduct_Form").style.display = "none";
}

window.onclick = function(event){
    const modal = document.getElementById("AddProduct_Form");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
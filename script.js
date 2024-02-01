let objbox = document.querySelector(".object_box");
function changetorelative(){
    objbox.style = "position: relative; top: 50px; left: 50px;transition: all .5s linear;";
}

function changetostatic(){
    objbox.style = "position: static; top: 0; left: 0; transition: all .5s linear;";
}
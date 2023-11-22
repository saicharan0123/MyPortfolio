
function showVertical() {
    let ver = document.getElementById("ver");
    let cross = document.getElementById("menu");
    let demo = document.getElementsByClassName("demo");
    var i;
    if ( cross.className == "ri-menu-fill"){
        ver.style.display = "flex";
        cross.className = "ri-close-line";
        for (i = 0; i < demo.length; i++) {
            demo[i].style.display = 'none';
        }
    }
    else{
        ver.style.display = "none";
        cross.className = "ri-menu-fill";
        for (i = 0; i < demo.length; i++) {
            demo[i].style.display = 'flex';
        }
    }
}
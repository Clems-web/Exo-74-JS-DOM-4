let catPic = document.getElementById("cat-pic");
let onCatClick = function(e) {
    var stashePic = document.getElementById("mustache-pic");
    stashePic.style.top = e.clientY - 10 + "px";
    stashePic.style.left = e.clientX - 50 + "px";

};

catPic.addEventListener("click", onCatClick);









let libButton = document.getElementById('lib-button');
let libIt = function() {
    let storySpan = document.getElementById("story");
    let noun = document.getElementById("noun").value;
    let adj = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    storySpan.innerHTML = noun + " est " + adj + " il a vu " + person;
};
libButton.addEventListener('click', libIt);









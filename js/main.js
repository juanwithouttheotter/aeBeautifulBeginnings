let myIndex = 0;
carousel();

function carousel() {
    
    let x = document.getElementsByClassName("slideshow__slide");
    for(let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}

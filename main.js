var typed = new Typed(".text", {
    strings: ["Fullstack Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.oncontextmenu = () => {
    return false
}

document.onkeydown = e => {
    if(e.key == "F12") {
        return false
    }
}

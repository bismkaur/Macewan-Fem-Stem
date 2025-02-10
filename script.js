document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").textContent = "Yay! We can't wait to see you there!";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * window.innerWidth + "px";
    this.style.top = Math.random() * window.innerHeight + "px";
});

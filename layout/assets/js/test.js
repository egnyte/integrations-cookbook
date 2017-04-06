var testRoot = document.querySelector("[data-title='Taste test'] ul>li>ul");

if (testRoot) {
    testRoot.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName == "LI" && !e.target.parentNode.parentNode.classList.contains("selected-option")) {
            e.target.classList.toggle("selected-option")
            e.stopPropagation()
        }
    })
}

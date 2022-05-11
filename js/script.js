const item1 = document.getElementById ("item1")
const item2 = document.getElementById ("item2")
const item3 = document.getElementById ("item3")
const item4 = document.getElementById ("item4")

item1.addEventListener("click", () => {

    window.scroll ({top: 690, behavior: "smooth"})

})

item2.addEventListener("click", () => {

    window.scroll ({top: 1330, behavior: "smooth"})

})

item3.addEventListener("click", () => {

    window.scroll ({top: 2000, behavior: "smooth"})

})

item4.addEventListener("click", () => {

    window.scroll ({top: 10000, behavior: "smooth"})

})


let yesBtn = document.querySelector(".yes-btn");
let noBtn = document.querySelector(".no-btn");
let title = document.querySelector(".menu-title");
let imgEl = document.querySelector(".img-menu");
let questionEl = document.querySelector(".question-container");

let string = [
    "images/cute anime GIF.gif",
    "images/happy GIF.gif",
    "images/I Love You Heart GIF by MESA My Emotional Support Animal.gif",
    "images/I Love You Kiss GIF by ShibuyaStation.gif",
    "images/naruto jutsu GIF.gif"
]


yesBtn.addEventListener("click", () => {

    title.innerHTML = "Let's play, hehe"

    imgEl.src = string[2];
    questionEl.innerHTML = "Do you love me?"

    yesBtn.addEventListener("click", () => {
        imgEl.src = string[3]
        questionEl.innerHTML = "Hehe"
    })

    noBtn.addEventListener("click", () => {
        imgEl.src = string[0]
        questionEl.innerHTML = "Please, think about it again. Do you love me?"

        yesBtn.addEventListener("click", () => {
            imgEl.src = string[3]
            questionEl.innerHTML = "Hehe"
        })

        noBtn.addEventListener("mousemove", () => {
            hor  = Math.floor((Math.random() * window.innerHeight) + 1) / 2;
            ver  = Math.floor((Math.random() * window.innerWidth) + 1);
    

            noBtn.style.top = hor + "px"
            noBtn.style.left = ver + "px"

            console.log(hor);
            
        })

    })

});

noBtn.addEventListener("click", () => {
    noBtn.addEventListener("click", () => {
        imgEl.src = string[0]
        questionEl.innerHTML = "Please, think about it again. Do you love me?"

        yesBtn.addEventListener("click", () => {
            imgEl.src = string[3]
            questionEl.innerHTML = "Hehe"
        })

        noBtn.addEventListener("mousemove", () => {
            hor  = Math.floor((Math.random() * window.innerHeight) + 1) / 2;
            ver  = Math.floor((Math.random() * window.innerWidth) + 1);
    

            noBtn.style.top = hor + "px"
            noBtn.style.left = ver + "px"
            
        })

    })
});

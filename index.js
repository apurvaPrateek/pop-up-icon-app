const submit = document.querySelector(".container button");

// const popUp = document.querySelector(".pop-up-icon");
const container =document.querySelector(".container");
const body = document.querySelector("body");

submit.addEventListener("click",()=>{
    let div = document.createElement("div");
    div.innerHTML=`
    <img src="./images/404-tick.png" alt="tick-image"/>
    <h2>Thank You!</h2>
    <p>Your details have been successfully submitted. Thanks!</p>
    <button>OK</button`;
    div.classList.add("pop-up-icon", "animate");

    body.appendChild(div);

    const OK = document.querySelector(".pop-up-icon button");
    OK.addEventListener("click",()=>{
        div.remove();
    })

})


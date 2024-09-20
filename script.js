const TheModal = document.getElementById("modal")
const Button = document.getElementById("open-modal-btn")
const closebutton = document.getElementById("close-modal-btn")


Button.addEventListener("click", () =>{
    TheModal.classList.add('open')

    
})

closebutton.addEventListener("click", () =>{
    TheModal.classList.remove('open')
})
   

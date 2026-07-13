const Modal = document.getElementById("termsModal")
const closeModal = document.getElementById("closeModal")
const openModal = document.getElementById("termsBtn")
const acceptTerms = document.getElementById("acceptTerms");
const termsError = document.getElementById("termsError");

closeModal.addEventListener("click",function(){
Modal.classList.remove("active")
})

openModal.addEventListener("click",function(){
    Modal.classList.add("active")
})

function validateModalCheckBox(){
    if(!acceptTerms.checked){
        termsError.textContent="You must accept the terms and conditions";
        return false;
    }
     termsError.textContent = "";

    return true;
}
acceptTerms.addEventListener("change", ()=>{

    if(acceptTerms.checked){

        termsError.textContent="";

    }

});
const form =  document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const results = document.querySelector("#results")

 if (height == "" || height == 0 || isNaN(height) ||weight == "" || weight == 0 || isNaN(weight)) {
    results.innerHTML="please give a  valid value"
 }else
 {

     results.innerHTML=height*weight
 }


})
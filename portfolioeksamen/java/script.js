
const emailForm = document.getElementById("emailForm");
const responseMessage = document.getElementById("responseMessage");


emailForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  
  const emailInput = document.getElementById("emailInput").value.trim();


  responseMessage.style.color = "green";
  responseMessage.textContent = `Tak! Emailen er sendt til: ${emailInput}`;
  responseMessage.style.display = "block";

 
  document.getElementById("emailInput").value = "";
});
console.log("JAVA ER FORBUNDET");
let ratingNumber = ""
function changeButtonBg(button) {

  let allSiblings = Array.from(button.parentElement.children);
  for (let sibling of allSiblings) {
    sibling.classList.remove('active');
  }
  button.classList.add('active');
  ratingNumber = button.id[3]
}


function submitFunction() {
    if (ratingNumber!== "") {
    let card = document.getElementById("rating-card")
    card.classList.add("thank-you")
    card.innerHTML = `
    <img src="images/illustration-thank-you.svg" alt="thank-you">
    <p class="sR">You selected ${ratingNumber} out of 5</p>
    <h1>Thank you!</h1>
    <p style="text-align: center"> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p> 
  `}
  else{
    alert("Please select any number")
  }
}
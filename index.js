
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const formModal = document.querySelector('#formModal')

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

formModal.addEventListener('submit', e => {
  e.preventDefault()
  e.target.elements.fullName.value = ''
  e.target.elements.email.value = ''
  e.target.elements.message.value = ''
  modal.style.display = "none"
})
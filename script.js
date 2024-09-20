// This is for responsive NavBar
const toggleButton = document.getElementById('togglebutton');
const toggleMenu = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
  toggleMenu.classList.toggle('hidden');
});

// js for slider using the Owl Crouser
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      animateOut: 'slideOutDown',
animateIn: 'flipInX',
animateOut: 'fadeOut',
items:1,
loop:true,
margin:30,  
stagePadding:30,
smartSpeed:450
  });
});

// Toggler stuff

const toggler = document.getElementById('toggler');
const toggleContent = document.getElementById('toggle_item');

const toggler_01 = document.getElementById('toggler_01');
const toggleContent_01 = document.getElementById('toggle_item_01');

const toggler_02 = document.getElementById('toggler_02');
const toggleContent_02 = document.getElementById('toggle_item_02');
// Add event listener for toggling visibility
toggler.addEventListener('click', () => {
  if (toggleContent.style.display === 'none') {
    toggleContent.style.display = 'block';  // Show the content
  } else {
    toggleContent.style.display = 'none';  // Hide the content
  }
});

toggler_01.addEventListener('click', () => {
  if (toggleContent_01.style.display === 'none') {
    toggleContent_01.style.display = 'block';  // Show the content
  } else {
    toggleContent_01.style.display = 'none';  // Hide the content
  }
});

toggler_02.addEventListener('click', () => {
  if (toggleContent_02.style.display === 'none') {
    toggleContent_02.style.display = 'block';  // Show the content
  } else {
    toggleContent_02.style.display = 'none';  // Hide the content
  }
});


// Now it is the section of add profile image 








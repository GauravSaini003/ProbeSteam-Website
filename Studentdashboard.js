
document.addEventListener('DOMContentLoaded', function () {
    // All element selected
    const profileImgs = document.querySelectorAll('.profile_img'); 
    const addBtn = document.getElementById('Add_profile');
    const fileInput = document.getElementById('file_input');

    // Trigger file input when 'Complete my profile' is clicked
    addBtn.addEventListener('click', function(event) {
        event.preventDefault();
        fileInput.click();
    });

    // Update profile images when a file is selected
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // We have to loop through the image to get update all the place image up dated
                profileImgs.forEach(function(img) {
                    img.src = e.target.result; 
                });
            };
            reader.readAsDataURL(file);
        }
    });
});

// Update the instuution and Designination

let Institution = document.getElementById('update_Institution');
let Designation= document.getElementById('update_Designation');
let Ins= document.getElementById('update_Ins');
let pos= document.getElementById('update_pos');

// For Updating the instiution
Institution.addEventListener('click',()=>{
    let intial  = Institution.innerHTML;
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = ' Enter your Institution ';
    Institution.innerHTML = ''; 
    Institution.appendChild(input); 
    input.focus();
input.addEventListener('keydown',(event)=>{
if(event.key ==='Enter')
{
Ins.innerHTML = input.value;
Institution.removeChild(input);
Institution.innerHTML = intial;
}

})  
})
//for updating the position
Designation.addEventListener('click',()=>{
    let intial  = Designation.innerHTML;
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = ' Enter your Institution ';
    Designation.innerHTML = ''; 
    Designation.appendChild(input); 
    input.focus();
input.addEventListener('keydown',(event)=>{
if(event.key ==='Enter')
{
    pos.innerHTML = input.value;
    Designation.removeChild(input);
    Designation.innerHTML = intial;
}

})  
})
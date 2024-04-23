// PROJECT 3 CODE

document.addEventListener("DOMContentLoaded", function() {
  initValidation("my-form", "success");
});


document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.menuBtn'); // Select all menu buttons

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const sectionId = this.getAttribute('name'); // Get the value of the 'name' attribute of the clicked button
          const section = document.getElementById(sectionId); // Find the corresponding section by its id
          
          if (section) {
              // Hide all sections
              document.querySelectorAll('section').forEach(sec => {
                  sec.style.display = 'none';
              });

              // Show the corresponding section
              section.style.display = 'block';
          }
      });
  });
});



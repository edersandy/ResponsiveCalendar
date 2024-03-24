
// let contentSections=["home", "about","mo","tu","we","th","fr","sa","su"];
// let navElements=document.querySelectorAll('nav > button')

// for (let i = 0; i < navElements.length; ++i) {
      
//     navElements[i].addEventListener("click", function(ev){  
//       //remove selected class from all menu items
//       for (let i = 0; i < navElements.length; i++) {
//         navElements[i].classList.remove("selected");
//       }
//       //add selected class to menu item that was clicked
//       let el = ev.currentTarget;
//       el.classList.add('selected');

//       //now hide all content sections
//       for(section of contentSections){
//         let el = document.getElementById(`${section}Section`);
//         el.classList.remove("show");
//         el.classList.add("hide");
//       }

//       //now show the one content section
//       let name=`${el.name}Section`
      
//       let showEl=document.getElementById(name);
//       showEl.classList.add('show');
//       //showEl.classList.remove("hide");

  
//   });
    
//   }
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

function saveEntry() {
  var entry = document.getElementById("message").value;
  localStorage.setItem("journalEntry", entry);
  alert("Entry saved successfully")
}

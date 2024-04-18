
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
// Function that saves entries to local storage
function saveEntry(name) {
  var entry = document.getElementById(name).value;
  localStorage.setItem(name, entry);
  // alert(`Successfully saved ${entry} to ${name}`);
  // alert(localStorage.getItem(name))
}
// Funciton that displays saved entries
function uploadEntries() {
  let criteria = ["Work", "Events", "Purchases", "Foods"];
  let day = ["mon", "tue","wed","thu","fri","sat", "sun"]
  for (let i = 0; i < day.length; i++) {
    for (let j = 0; j < criteria.length; j++) {
      let option = `${day[i]}${criteria[j]}`;
      let entry = localStorage.getItem(option);
      if (entry !== null) {
        document.getElementById(option).value = entry;
      }
    }
  }
}

//Clears local storage when needed in testing
// function clearLocal() {
//   localStorage.clear();
// }
// document.addEventListener("DOMContentLoaded", clearLocal)

// test function
// function upload() {
//   alert("Upload run");
//   let entry = localStorage.getItem("satWork");
//   if (entry !== null) {
//     alert("Not null")
//     document.getElementById("satWork").value = entry;
//   }
// }


// Event Listener to upload previous saved entries
document.addEventListener("DOMContentLoaded", uploadEntries);
/*
Event listener that changes the style of the screen based on the state of the button
*/
let toggle = document.getElementById("toggle");
toggle.addEventListener("click", function() {
  let link = document.querySelector("link");

  if (toggle.getAttribute("value") == "on") {
    link.setAttribute("href", "css/main.css")
    toggle.setAttribute("value", "off");
  }
  else {
    link.setAttribute("href", "css/theme.css")
    toggle.setAttribute("value", "on")
  }
});


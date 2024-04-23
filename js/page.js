// PROJECT 4 CODE


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
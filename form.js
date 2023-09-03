


function checkInternetConnection() {
    // Create a new XMLHttpRequest object.
    var xhr = new XMLHttpRequest();
  
    // Open the request.
    xhr.open("HEAD", "https://www.google.com");
  
    // Send the request.
    xhr.send();
  
    // Check the status code.
    if (xhr.status == 200) {
      // The internet connection is available.
      return true;
    } else {
      // The internet connection is not available.
      return false;
    }
  }
  
  // On click of the submit button, check the internet connection and submit the form if available.
  document.getElementById("submit").onclick = function() {
    if (checkInternetConnection()) {
      document.getElementById("form").submit();
      window.open("www.google.com");
    } else {
      alert("Please check your internet connection.");
    }
  };
 
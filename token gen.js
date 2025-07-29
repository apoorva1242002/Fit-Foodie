document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var number = document.querySelector("#number").value;
    var token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    document.querySelector("#token").value = token;
    
    // Send the token to the provided mobile number
    // Note: You would need to implement the logic to actually send the token to the number
    console.log("Sending token " + token + " to " + number);
  });
function setCookie(cookie_name, cookie_value, cookie_validity_in_days) {
  /* sets the 'expires' value to the value of cookie_validity_in_days from now
    it is done in milliseconds
  */

  const d = new Date();
    
  let now = d.getTime()

  d.setTime(now + (cookie_validity_in_days * 24 * 60 * 60 * 1000));
    
  let expires = "expires=" + d.toUTCString();
    
  document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";

  console.log("ok, I'm setting:", cookie_name, "=", cookie_value);
}
  
function getCookie(cname) {

  let name = cname + "=";
  
  let ca = document.cookie.split(';');
  
  for(let i = 0; i < ca.length; i++) {
    
    let c = ca[i];
    
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    
    if (c.indexOf(name) == 0) {

      return c.substring(name.length, c.length);
    }
  }
  
  return "";
}
  

function checkCookie() {

  console.log("Now, the available cookies are:", document.cookie);

  let user = getCookie("username");

  if (user != "") {
    document.getElementById('salutation').innerText = 'Hello ' + user + ', good to see you again!'
    document.getElementById('salutation').style.backgroundColor = "antiquewhite";

  } else {

    user = prompt("Thanks for visiting! Please enter your name:", "");

    if (user != "" && user != null) {

      setCookie("username", user, 1);

      let their_location = prompt("Great, and where are you today?", "In the lab");
      setCookie("last_self_localised_at", their_location, 0.5);


      document.getElementById('salutation').innerText = 'Hello ' + user + ', welcome to Webcomm!'

      document.getElementById('salutation').style.backgroundColor = "antiquewhite";
    }
  }
} 

checkCookie();
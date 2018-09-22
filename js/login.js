// LOGIN COMPONENT

'use strict';


// Vue.component('login', {
//   template: `
//               <form class="login-form middle">
//                 <h2>Login</h2>
//                 <input v-on:click="focus" type="text" id="username" placeholder="Username">
//                 <input v-on:click="scream" type="password" id="password" placeholder="Password">
//                 <input v-on:click="checkpass" type="submit" value="Login" class="btn success">
//                 <a href="#" class="forgot-link">Forgot Password?</a>
//               </form>
//             `,
//   methods: {
//     checkpass: function() {
//       event.preventDefault();

//       var pass = document.getElementById('password').value; 
//       var user = document.getElementById('username').value; 

//       if(user === 'andrew' && pass === '123456') {
//         alert('Username and password correct!');

//         window.location = "./dashboard.html";
        
//       } else {
//         alert('You shall not pass!');
//       }
//     },
    
//     focus: function() {
//       var input = document.getElementById('username');
      
//       input.style.borderColor = "#ff0000";
      
//     },
//     scream: function() {
//         alert("AAAAAAAAAHHHHHHHHHHHHHH!!!!!!!");
      
//     }
//   }
// });

Vue.component('login', {
    template: `
                <form class="login-container">
                    <img src="img/aon-logo.png"> 
                    <h1>Log In</h1>

                    <input id="userName" type="text" placeholder="User Name">

                    <input id="userPassword" type="password" placeholder="User Password">
                     
                    <input id="submitBtn" type="submit" value="submit">

                      
                    <a href="#">Forgot Password?</a>

                    
                
                </form>

              `,
});



var login = new Vue({
  el: '#login'
});



let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    checkPassword();
});

   function checkPassword() {
            
            event.preventDefault();
            
            let chadName = "chad89";
            let chadPassword = "braveheart";
            let password = document.getElementById('userPassword').value;
            let username = document.getElementById('userName').value;
            
            if(password == chadPassword && username == chadName) {
                window.location.replace('dashboard.html');
            }else {
                alert('DO NOT PANNIC, here are the login details: chad89, braveheart')
            }
            
        };
    

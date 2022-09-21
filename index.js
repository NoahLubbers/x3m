let usersguess = window.prompt("whats the password");
console.log(usersguess);
let password = "this is a password";
if (password === usersguess) {
   window.location.replace("https://noahlubbers.github.io/x3m/index.html");
   document.cookie = "passright";
}
else {
let Usersguess = window.prompt("last try before i smack you");
}

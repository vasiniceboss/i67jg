function adduser(){
    username = document.getElementById("usertext").innerHTML;
    localStorage.setItem("username", username);
    window.location="kwitterroom.html";
}
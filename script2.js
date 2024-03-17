let passwords = [
    Mama = {
        password: "mnspoens*WÜa!j972)jndv",
        name: "Mama"
    },
    Papa = {
        password: "kjdszsvk*HFä!j893)hjds",
        name: "Papa"
    },
    Ich = {
        password: "admin@Jason.Web!",
        name: "Jason"
    }
]
function checkPassword(){
for (let i = 0; i < passwords.length; i++){
    if (document.querySelector(".passwordfield").value == passwords[i].password){
        document.querySelector(".Codefenster").style.display = "none"
        document.querySelector(".Webseitencontent").style.display = "block"
    }
}
}
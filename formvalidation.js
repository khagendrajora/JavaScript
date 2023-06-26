// const displayMsg=(msg,id,colorName)=>{
//     document.getElementById(id).innerHTML=msg
//     document.getElementById(id).style.color=colorName
// }
function validFname() {
    const first_name = document.getElementById('firstname').value
    if (first_name == "") {
        displayMsg('first name is mandatory', 'fnameMsg','red')
        return false
    }
    else if (!first_name.match(/^([a-zA-Z])+$/)) {
        displayMsg('numbers are not allowed', 'fnameMsg', 'red')
        return false

    }
    else if (first_name.length < 3) {
        displayMsg('firstname must be more than 2 words', 'fnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid firstname', 'fnameMsg','green')
    }
}

function validlname() {
    const last_name = document.getElementById('lastname').value
    if (last_name == "") {
        displayMsg('last name is needed', 'lnameMsg', 'red')
        return false
    }
    else if (last_name.length < 1) {
        displayMsg('last name lenth must be more than 2', 'lnameMsg', 'red')
        return false
    }
    else if (!last_name.match(/^([a-zA-Z])+$/)) {
        displayMsg('numbers are not allowed', 'lnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid lastname', 'lnameMsg', 'green')
    }
}
function validemail() {
    const email = document.getElementById('email').value
    if (email == "") {
        displayMsg('email is needed', 'emailmsg', 'red')
        return false
    }
    else if (!email.match(/^([a-z])[a-z0-9\_\.]+\@+([a-z])+\.+(com)+$/)) {
        displayMsg('email is invalid', 'emailmsg', 'red')
    }
    // else if (email.length < 2) {
    //     displayMsg('email length must be more than 11', 'emailmsg', 'red')
    //     return false
    // }
    else {
        displayMsg('valid email', 'emailmsg', 'green')
    }
}
function validpassword() {
    const password = document.getElementById('password').value
    if (password == "") {
        displayMsg('password is needed', 'passwordMsg', 'red')
        return false
    }
    else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%.]).{8,}$/)) {        //?=position dosnt matters,.means atleast once,
        displayMsg('password is invalid', 'passwordMsg', 'red')
    }
    else {
        displayMsg('valid password', 'passwordMsg', 'green')
    }
}
function Cvalidpassword() {
    const Cpassword = document.getElementById('Cpassword').value
    if (Cpassword == "") {
        displayMsg('password is needed', 'passwordMsg', 'red')
        return false
    }
    else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%.]).{8,}$/)) {        //?=position dosnt matters,.means atleast once,
        displayMsg('password is invalid', 'passwordMsg', 'red')
    }
    else {
        displayMsg('valid password', 'passwordMsg', 'green')
    }
}

function displayMsg(message, idName, color) {
    document.getElementById(idName).innerHTML = message
    document.getElementById(idName).style.color = color
    document.getElementById(idName).style.fontWeight = 'bold'
}
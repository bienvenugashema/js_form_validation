const email = document.querySelector('.email')
const password = document.querySelector('.password')
const names = document.querySelector('.names')
const btn = document.querySelector('.btn')

btn.addEventListener('click', e => {
    e.preventDefault();

    if(email.value == "" || password.value == "" || names.value == ""){
        alert("Fill all fields")
    } else {
        console.log("Good")
    }
})
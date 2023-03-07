const loginr= document.querySelector('.login-section')
const Loginlink= document.querySelector('.login-link')
const registerlink= document.querySelector('.register-link')
Loginlink.addEventListener('click',()=>{
  loginr.classList.add('active')
})

registerlink.addEventListener('click',()=>{
  loginr.classList.remove('active')
})
const emailInput = document.querySelector('#email')
const form = document.querySelector('form')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = emailInput.value.trim()
    
   if(email === '' || !emailRegex.test(email))
    form.classList.add('error')
   else
    form.classList.remove('error')
        
})
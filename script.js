const btn = document.querySelector('button')
const error = document.querySelector('.error')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
   if(!email.includes('@'))
    error.classList.add('active')
   else
    error.classList.remove('active')
        
})
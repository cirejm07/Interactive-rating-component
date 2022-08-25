const card = document.querySelector('.card')
const error = document.querySelector('.error')
const thankYou = document.querySelector('.thank-you')
const result = document.getElementById('result')
const rates = document.querySelectorAll('.btn')
const el = document.activeElement


rates.forEach(item => {
    item.addEventListener('click', () => {
        // console.log(item.innerText)
        result.innerHTML = item.innerText
    })
})

document.getElementById('submit').addEventListener('click', () => {


  

    if(result.innerHTML === null || result.innerHTML === '' || result.innerHTML === undefined) {

        TweenMax.fromTo(card,0.15, {x:-20},{x:20,repeat:5,yoyo:true,ease:Sine.easeInOut,onComplete:function(){TweenMax.to(card,1.5,{x:0,ease:Elastic.easeOut})}})

        error.innerHTML = 'Please select a rating'

        return false
    } else {
        thankYou.classList.remove('hidden')
    // GSAP
    gsap.from(".thank-you", {y: 100, duration: 1});
    card.classList.add('hidden')
    }
    
})



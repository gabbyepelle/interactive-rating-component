
// update span with value of rating
let rating;
const choices = document.querySelectorAll('.number');
const res = document.querySelector('#result'); 
const submit = document.querySelector('#submit');
const ratingCard = document.querySelector('.card-1')
const thankyouCard = document.querySelector('.card-2')

choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        rating= choice.dataset.rating
        // console.log(rating)

    })
})

submit.addEventListener('click', ()=>{
    if(rating){
        ratingCard.classList.add('hidden');
        thankyouCard.classList.remove('hidden');
        res.innerText = rating;
    }

    

})
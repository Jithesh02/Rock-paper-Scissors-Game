let yourchoicedisplay = document.getElementById('yourchoice')
let computerchoicedisplay = document.getElementById('computerchoice')
let resultdisplay = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')
let userchoice
let computerchoice
possiblechoices.forEach(possiblechoice=>possiblechoice.addEventListener('click',(e)=>{
userchoice = e.target.id
yourchoicedisplay.innerHTML = userchoice
computerchoicee()
resultdisplay.innerHTML=Result()
}))

function computerchoicee()
{
    let random = Math.floor(Math.random()*possiblechoices.length+1)
    if(random == 1)
    {
        computerchoice = 'rock'
    }
    if(random == 2)
    {
        computerchoice = 'paper'
    }
    if(random == 3)
    {
        computerchoice = 'scissors'
    }
    computerchoicedisplay.innerHTML = computerchoice
}

function Result()
{
    if(computerchoice === userchoice)
    {
        return "It's draw"
    }
    else if(computerchoice ==='rock' && userchoice==='scissors')
    {
        return "you lose!!"
    }
    else if(computerchoice ==='rock' && userchoice==='paper')
    {
        return "you win!!"
    }
    else if(computerchoice ==='paper' && userchoice==='rock')
    {
        return "you lose!!"
    }
    else if(computerchoice ==='paper' && userchoice==='scissors')
    {
        return "you win!!"
    }
    else if(computerchoice ==='scissors' && userchoice==='rock')
    {
        return "you lose!!"
    }
    else if(computerchoice ==='scissors' && userchoice==='paper')
    {
        return "you win!!"
    }
}
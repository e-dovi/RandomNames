
let view = document.getElementById('try')
let firstElt=document.getElementById('first')
let secElt = document.getElementById('second-img')
let tryAgain=document.getElementById('try-again')
const randMessage = () => {
    firstElt.style.display="none";
    view.style.display='none';
    secElt.style.display="block";
    document.body.style.backgroundColor="white";
    tryAgain.style.display='block';
}


const message=()=>{
    let ar=['Matthew', 'Simon-Peter', 'James', 'Simon'];
    return ar[Math.floor(Math.random()*4)];
}

const returnName=()=>{
    let obj={
        'Matthew':'He was a tax collector before Jesus Called him to be his disciple.',
        'Simon-Peter':'He was a fisherman before the Lord called him.',
        'James':'He was the son of Alphaeus',
        'Simon':'Also referred to as the zealot.'
    }
    document.getElementById('name').style.display='block';
    let result=message();
    document.getElementById('name').innerHTML=result +': '+ obj[`${result}`]
}
view.addEventListener('click', randMessage)
view.addEventListener('click', returnName)
tryAgain.addEventListener('click', returnName)
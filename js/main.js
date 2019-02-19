let alphabet = 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz';
let alphabetArray = alphabet.split(' ');
console.log(alphabetArray);
function randomLetter(){
    let randomNumber = Math.floor(Math.random()*26);
    console.log(randomNumber);
    document.getElementById('letter').innerHTML=`${alphabetArray[randomNumber]}`;
}
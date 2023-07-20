const getcolor = () =>{
    //hex code
    const randomNumber=Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);
    const randomcode = "#"+randomNumber.toString(16); //16 stand for hexadecimal code
    // console.log(randomNumber, randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById('color-code').innerText=randomcode;

    // navigator.clipboard.writeText(randomcode);  //clip board pe auto  copy ho jayega
}

//event call 
 document.getElementById('btn').addEventListener("click", getcolor)

 //initial call
 getcolor();//js load ho jayega page pe
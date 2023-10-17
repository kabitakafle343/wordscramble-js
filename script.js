


    const btn=document.getElementById('btn');
    const inp=document.querySelector('input');
    const msg=document.getElementById('msg');
    let neww='';
    let scramble=';'
    let play=false;

    let arr=['python','es6','javascript','java','django','nodejs','kabita','kapil','expressjs','keshav','html']

     let createwords=()=>{
        let ind=Math.floor(Math.random()*arr.length);
        let word=arr[ind];
        return word;
    //   console.log(word.split(''));

     }

     let scramblewords=(arry)=>{
        for(let i=arry.length-1; i>=0; i--){
          let temp=arry[i];
       
          let j=Math.floor(Math.random()*(i));
       arry[i]=arry[j];
       arry[j]=temp;
        }
        return arry;
     }
    btn.addEventListener('click',()=>{
if(!play){
    play=true;
    btn.innerHTML='Guess';
    inp.classList.toggle('hidden');
    neww=createwords();
    scramble=scramblewords(neww.split('')).join('');
  msg.innerHTML=`Guess the word "${scramble}"`;
}else{
    play=false;
    let g=inp.value;
    if(g===neww){
        msg.innerHTML=`its correct`;
        btn.innerHTML='start gain'; 
        inp.classList.toggle('hidden'); 
        inp.value='';
      
    }else{
        play=true;
        btn.innerHTML='guess';  
        msg.innerHTML=`its incorrect,guess again " ${  scramble}"`;
        inp.value='';
    }
}



    })
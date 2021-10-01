const firstPromise=document.getElementById('firstPromise');
const secondPromise=document.querySelector('#secondPromise');/*igual a la linea anterior solo que se le debe poner # para obtener el id*/ 
const output=document.querySelector('output');

function getRandomNumer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let result=Math.floor(Math.random() * 100);
            if (result > 50){
                resolve(result);
            } else{
                reject(result);
            }
        },3000);
    });
}
firstPromise.onclick=function() {
    console.log('creando promesa');
    const numberPromise= getRandomNumer();
    numberPromise.then=(
        (result)=>{
            console.log(`Exito! ${result}  `)
        },
        (result)=>{
            console.log(`Fail! ${result} `)
        }
    );
    console.log('Promesa lista');
}

secondPromise.onclick= function(){
   /* fetch('https://www.javascripttutorial.net/sample/promise/api.json').then( */
        fetch('https://www.fobeso.com').then( 
   
    (response) => {
           response.json().then((data) =>{
               output.innerHTML=data.message;
           },
           (error)=>{
               console.error('json crash');
               output.innerHTML=error;
           }
           )
        }, 
        (error) => {
            output.innerHTML=error;
        }
    );
}
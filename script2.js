
// using strict mode help us to find the error or  the bug easily

let Hasdrive = false ;

const Test = true ;

if (Test)  Hasdrive= true ;

if (Hasdrive ) console.log (' You are eligiable');



 // function declartion

  function calage (birthyear){
      const age = 2021 - birthyear ;
      return age ;
    }

    const result = calage( 1981);

        console.log ( ` OK so the birthyear is ${result} `);


 //Arrow Function
        //doesnot require Bracket and return value
   

        
        const greek =() =>"Good Morning" ;
    console.log(greek());

        


    const greek = (game , device ) => "I play " + game + " in " + device  + " device";

    console.log ( greek('coc' ,'realme' ));


//Functing calling other Function


    function fruitcutting ( fruit){
        return fruit * 4;
    };

    const FruitFcn = function appleorange (apples , orange){
        const applepieces = fruitcutting(apples);
        const orangepieces = fruitcutting (orange);

        const ans =` There are ${applepieces} piece of apple and ${orangepieces} piece of orange  `;
        return ans ;


    }

    console.log ( FruitFcn(2 , 3));


  

        
       






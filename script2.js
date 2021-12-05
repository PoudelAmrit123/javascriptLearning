
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


  
    //challenge no   4


    const calcavg = (a,b,c) => (a+ b + c)/3 ;
    
    const scoredolphins = calcavg(41 , 23 , 71);
    const scorekoals = calcavg(65 , 54 , 59);
    
    const checkwinner = function ( avgdolphin , avgkoals ){

          if ( avgdolphin >= 2*avgkoals){
              console.log(`   Dolphins win the trophy  (${avgdolphin} vs.  ${avgkoals} )`);

          } else if ( avgkoals >= 2*avgdolphin){
            console.log(` Koalas win the trophy  (${avgkolas} vs.  ${avgdolphin} )`);

        } else (
            console.log ( 'No one won the trophy ')
        )


    }
    checkwinner(scoredolphins ,scorekoals );




        

    
  // Basic Arry

  const friends = [ 'Harry' , 'Jonas ' , 'simly' ,  'geey'];
  console.log(friends);

  console.log(friends[0]);
  console.log(friends[2]);
 console.log ( friends.length);
 console.log ( friends[friends.length-1]);


   friends[1] ='Amrit';
   console.log( friends);


    const firstname = ' amrit';
    const amu = [firstname , 'poudel ' , 1300-300  , friends];

    console.log(amu);


    const agecalc = function ( birthyear){

        return 2021 -birthyear ;
    }
    const years = [1990 , 1995 , 2000 , 2005];

      const age1 = agecalc(years[0]);
      const age2 = agecalc(years[1]);
      const age3 = agecalc(years[years.length-1]);

      console.log(age1 , age2 , age3);
 

       

  //Basic Arry Operator


const friends = [ 'Harry' , 'Jonas ' , 'simly' ,  'geey'];
 friends.push('subedi');//push in arry
console.log(friends);


friends.unshift ('Kafle');//psuh but in first element

console.log (friends);

friends.pop(); // remove last arry element
console.log(friends);

friends.shift(); // remove first arry element
console.log(friends);

console.log( friends.indexOf('Harry'));// finding the postion of the element from the arry







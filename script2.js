
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


   //Coding Challenge 2 Arry

const calctip = function (bill){

    return bill >= 50 && bill <= 300 ? bill *.15 : bill * .20 ;
}

const bills = [225 , 555 , 44];

 const tips = [calctip(bills[0])  , calctip(bills[1]) , calctip(bills[2])];

   
const totals = [ bills[0] + tips[0] , bills[1] + [2] + tips[2] ];tips[1]  , bills

   console.log ( bills , tips , totals);




// Introduction to object

  const amrit = {
      firstname: 'Amrit' , 
      lastname : 'Poudel' ,
      age :'20',
      job : ' Student' ,
      Friends : [ 'Subedi' , 'Ashwin' , 'Joshi'] , 


  }
  


 console.log (amrit.lastname);
 console.log(amrit.age);
     

 console.log(amrit['lastname']);
 console.log(amrit['age']);

//  const interested1 = prompt('Choose Between Job first and last name  , age');

//  console.log(amrit[interested1]);

  // simple Challenge
console.log (`${amrit.firstname} has ${amrit.Friends.length} friends and his best friend is ${amrit.Friends[0]} .`);

   

 //Object Method

const amrit = {
    firstname: 'amrit' ,
    lastname : 'poudel' ,
    age :'20',
    birthyear :  1991 , 
    job : ' Student' ,
    Friends : [ 'Subedi' , 'Ashwin' , 'Joshi'] , 
    calcage : function (birthyear){
        console.log(this);
        return 2021- this.birthyear;
    }
};

 console.log(amrit.calcage());
//  console.log(amrit.calcage(1991));
//  console.log(amrit['calcage'](1991));
console.log (amrit.firstname);


   // Coding Challenge 4


   const mark = {

    firstname : 'mark' ,
    lastname : ' Miller' , 
    mass : 90 , 
    height : 1.69 ,
    calcbmi : function (){
        this.bmi = this.mass / this.height **2;
        return this.bmi ;
    }
   };

      const john = {

    firstname : 'John' ,
    lastname : ' Dolphins' , 
    mass : 180 , 
    height : 1.69 ,
    calcbmi : function (){
        this.bmi = this.mass / this.height **2;
        return this.bmi ;
    }
   };
   
       mark.calcbmi();
       john.calcbmi();

       console.log(mark.bmi , john.bmi);

       if(mark.bmi>john.bmi){
           console.log(`${mark.firstname} ${mark.lastname} (${mark.bmi}) bmi is higher than john `);

       }
       else{
        console.log(`${john.firstname} ${john.lastname} (${john.bmi}) bmi is higher than mark `);
       }

  

           // Control Structures (LOOP)

           for ( let  i=1 ; i <=2 ; i++){
               console.log(` Lest Repite it for ${i} times `);
           }  //simple Loop structure
 

           const amrit = [
           'Amrit' ,
           'Poudel' ,
          '20',
           ' Student' ,
           [ 'Subedi' , 'Ashwin' , 'Joshi'] 
           ];

             const types = [] ;

        for  ( let i=0 ; i<=amrit.length; i++){
           console.log(amrit[i]);

             types[i] = typeof amrit[i]; //filling the types arry from jonas
       }
console.log ( types);


      const ages = [ 1990 , 2004 , 2015 , 2012];

    const birthdate = [];

      for ( let i=0 ; i<ages.length ; i++) {
          birthdate.push( 2021-ages[i]);

      } 

       console.log (birthdate);

       
   //  BAckward in loop

       const amrit = [
        'Amrit' ,
        'Poudel' ,
       '20',
        ' Student' ,
        [ 'Subedi' , 'Ashwin' , 'Joshi'] 
        ];


        for ( let i= amrit.length-1 ; i>=0 ; i--){

            console.log(amrit[i]);
        };

        







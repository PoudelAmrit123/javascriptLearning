//    values and variable
 /*
let js= "Hello";
if (js=== "Hello") alert (" Javascript is fun!");
console.log ( 60+15-56*4);
 console.log (" Jonas");
 console.log ( "Amrit");
 let Name = "Amu1";
 console.log( "js");
 
 console.log (Name);        
 console.log (Name);
 console.log (Name);
 console.log (Name);

 let years = "3";
 console.log (years);
 console.log ("years");

 let jonashello= "27";
 console.log ( jonashello);
 */

    // data type 

   /*
    true;
    console.log (true);

     let java = true;
     console.log (java);
     console.log (typeof true);
     console.log (typeof java);
     console.log (typeof 23);
     console.log (typeof false);
     console.log (typeof 'Amrit');

      java = 'Yes!';
      console.log (java);
      console.log (typeof java);


       let un;
       console.log (un);
       console.log (typeof un);

        un= 1991;
        console.log (un);
        console.log ("un");

        console.log ( typeof null);

        */

      
      
      /*
        // constant variable 
      
        const birthyear = "1991";
         console.log (birthyear);

         birthyear = 1992;

         */


        //  operaters In javascript
/*
     let now = "1900";
      let  agejonas = now - 1800 ;

       console.log ( agejonas);
       console.log ( agejonas *20 -1200 , 2 **3 );
  
       const firstname = "Amrit";
       const lastname = "Poudel";

        console.log ( firstname + ' ' + lastname);

        let x= 10+5;
         x += 10; // x= x+10
          x *= 4 ; // x= x*4 
        console.log(x);

        console.log (now < agejonas );


         let  z, y;
          z=y= 25-10-5 ;
          console.log (z , y , z+y);


           now =100;
           agejonas=100;
          const average = (now + agejonas)/2;

          console.log ( now , agejonas, average );

          */

        //   Coding Challenge 1

        
  /*
          
            const markmass = 78;
            const markheight = 1.69 ;
            const johnmass = 92 ;
            const johnheight = 1.95 ;

            const markBMI =  markmass / markheight ** 2 ;

            const johnBMI =  johnmass / johnheight ** 2 ;
 
             const compare = markBMI > johnBMI ;
            console.log ( markBMI , johnBMI ,compare );
            

*/

     //string

    
     /*
     const name = "Amrit" ;
      const job = ' student' ;
      const Birthdate = '2002';
      const year = ' 2021';

      const game = `I'm ${name} , a ${ year - Birthdate} year old ${job} .`;
      
      console.log ( game);

     const lame = ` Hello ${job} , How are You all . Especially ${name}`;

          console.log ( lame);


         console.log ( ` Just The random string ` ) ;
         console.log ( ` Just The \n\
          random \n\
           string ` ) ;


  */

        //    if Else statement 

          /*
        
        const age = 14 ;

        if ( age >= 18) {
          console.log ( " Sarah can drive .");
          
        }
  else {
  const  rage = 18- age ;
  console.log ( ` srah is to young , She can drive after ${rage} year .
   ` );

  }


   const birthdate = 1998;
   let century;

   if ( birthdate <=2000){
      century =19;

   }
   else {
     century=20;
   }

   console.log (` ${century}th Century
   `  );




              */


      //  coding Challenge 2


        /*  


   const markmass = 78;
   const markheight = 1.69 ;
   const johnmass = 92 ;
   const johnheight = 1.95 ;

   const markBMI =  markmass / markheight ** 2 ;

   const johnBMI =  johnmass / johnheight ** 2 ;

    console.log ( markBMI , johnBMI);
 if ( markBMI > johnBMI){
   console.log (`  MArk BMI (${markBMI}) is Higher than John BMI (${johnBMI}).
   `  );
 }
 else {
   console.log ( ` JOhn BMI (${johnBMI} )is Higher Than Mark  ( ${markBMI} )
   `  );
 }

    */


    // Type Conversion 
/*
    const Birthyear = '1991';
  console.log ( Number(Birthyear)); // Changing string to number using Number function but implies to only this type not in below line
   
    console.log ( Birthyear + 18);  // doesnot imply to this one 

    // Type Coercion 

    console.log ( 'I Am' +   23 + ' years Old')
    ; // is same as writing this as an below line due to java script type coercion
    console.log ( ' I Am ' + String(23) + ' years old');

    let n= '1' + 1 ;
     n=n-1 ;
     console.log (n);

        // First addtion sign make 1 behaves as the string so 1 + 1 = 11 and subtraction sign behaves made n behaves aS THER NUMBER so 11-1 = 10 

        //+ = Number to the string
        //- = string to the Number 



     */


          

  // Truthy and Falsy Conversion

      // zero(0) , '' , undefined , null , NaN are Falsy value and triger the false statement in the if else statement . Even though if we addign the value as 0 it also even consider this is an falsy statement i.e height =0 is also an falsy value even though it is assign as the value .
      
      
      

       // Equality Operator

       /*
       
       const age=18;

       if( age===18) console.log ( ' You Become an adult ( strict)');
        
        //  === Doesnot do type coercion 

       if( age==18) console.log ( ' You Become an adult ( loose)');

       //  ==  do type coercion 

       // i.e

       const ageold='18';

       if( ageold===18) console.log ( ' You Become an adult ( strict)');
        
        //  === Doesnot do type coercion 

       if( ageold==18) console.log ( ' You Become an adult ( loose)');

          //  === Does type coercion 


          const favourite = Number( prompt(" Whats your Number "));
          console.log(favourite);
          console.log ( typeof favourite );

         
          
          if(favourite===23){
            console.log(' Cool! Thats the good number ');
          }
          else if( favourite == 15) {
            console.log ( ' 15! is not a cool number ');
          }
          else {
            console.log ( ` ${favourite} ! is the cool Number.
   `  )
          }

    
           */








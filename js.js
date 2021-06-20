if (review1 ===5 ) {
    document.getElementById("systemResponse").innerHTML = "Thank you for giving us a 5 star rating. Have a good day"
} else if(review1 === 4){
    document.getElementById("systemResponse").innerHTML = "Thank you for giving us a 4 star rating. We'll work harder to give you a better experience"    
} else if(review === 3){
    document.getElementById("systemResponse").innerHTML = "Thank you for reviewing our site. We will work harder to make your experience better"
} else if (review === 2) { 
    document.getElementById("systemResponse").innerHTML = "Sorry for the inconvenience. Plz mail us at support.petShop@mail.com for queries"
} else{
    document.getElementById("systemResponse").innerHTML = "Sorry for the incovenience. Plz mail us at support.petShop@gmail.com for queries"
    }

   if(review1 > 3 ){
       if (review1 === 4) {
        document.getElementById("systemResponse").innerHTML = "Thank you for giving us a 4 star rating. We'll work harder to give you a better experience"
       } else {
           if (review1 ===5) {
            document.getElementById("systemResponse").innerHTML = "Thank you for giving us a 5 star rating. Have a good day"    
           } else {
            document.getElementById("systemResponse").innerHTML = "Error. Please choose a number between 1 to 5"
           }
       }
   } else {
       if (review1 === 2) {
        document.getElementById("systemResponse").innerHTML = "Sorry for the inconvenience. Plz mail us at support.petShop@mail.com for queries"
       } else {
          if (review1 === 1) {
            document.getElementById("systemResponse").innerHTML = "Sorry for the incovenience. Plz mail us at support.petShop@gmail.com for queries"
          } else {
              if (review1 ===3) {
                document.getElementById("systemResponse").innerHTML = "Thank you for reviewing our site. We will work harder to make your experience better"
              } else {
                document.getElementById("systemResponse").innerHTML = "Error. Please choose a number between 1 to 5"
              }
          } 
       }
   }
   
   if (review1 ===5 ) {
    document.getElementById("systemResponse").innerHTML = "Thank you for giving us a 5 star rating. Have a good day"
} else if(review1 === 4){
    document.getElementById("systemResponse").innerHTML = "Thank you for giving us a 4 star rating. We'll work harder to give you a better experience"    
} else if(review === 3){
    document.getElementById("systemResponse").innerHTML = "Thank you for reviewing our site. We will work harder to make your experience better"
} else if (review === 2) { 
    document.getElementById("systemResponse").innerHTML = "Sorry for the inconvenience. Plz mail us at support.petShop@mail.com for queries"
} else{
    document.getElementById("systemResponse").innerHTML = "Sorry for the incovenience. Plz mail us at support.petShop@gmail.com for queries"
    }




   switch (review1) {
       case value: 1;
       document.getElementById("systemResponse").innerHTML = "Sorry for the incovenience. Plz mail us at support.petShop@gmail.com for queries"           
           break;

       case value: 2;
       document.getElementById("systemResponse").innerHTML = "Sorry for the inconvenience. Plz mail us at support.petShop@mail.com for queries"
       break;

       case value: 3;
       document.getElementById("systemResponse").innerHTML = "Thank you for reviewing our site. We will work harder to make your experience better"
       break;
       
       case value: 4;
       document.getElementById("systemResponse").innerHTML = "Thank you for giving us a 4 star rating. We'll work harder to give you a better experience"

        case value: 5;
        document.getElementById("systemResponse").innerHTML = "Thank you for giving us a 5 star rating. Have a good day"
       default:
        document.getElementById("systemResponse").innerHTML = "Enter a number between 1 and 5"
           break;
   }
























   
var reply= ;

function rating() {
 review1 = document.getElementById("review1").value;
 document.getElementById("systemResponse").innerHTML = review1; 
 switch (review1) {
    case 1:
    reply = "Sorry for the incovenience. Plz mail us at support.petShop@gmail.com for queries"           
        break;

    case 2:
    reply = "Sorry for the inconvenience. Plz mail us at support.petShop@mail.com for queries"
    break;

    case 3:
    reply = "Thank you for reviewing our site. We will work harder to make your experience better"
    break;
    
    case 4:
    reply = "Thank you for giving us a 4 star rating. We'll work harder to give you a better experience"

    case 5:
     reply = "Thank you for giving us a 5 star rating. Have a good day"
    default:
     reply = "Enter a number between 1 and 5"
        break;
}
    document.getElementById("systemResponse").innerHTML = reply;
}
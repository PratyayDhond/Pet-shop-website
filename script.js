
 function rating() {
var review1 = document.getElementById("review1").value;
document.getElementById("systemResponse").innerHTML = review1;
const a = Number(review1);

switch (a) {
    case 1:
    reply = "Sorry for the inconvenience. Plz mail us at support.petShop@mail.com for queries";
    break;

    case 2:
    reply = "Sorry for the inconvenience. Plz mail us at support.petShop@mail.com for queries";
    break;

    case 3:
    reply = "Thank you for reviewing our site. We will work harder to make your experience better";
    break;
    
    case 4:
    reply = "Thank you for giving us a 4 star rating. We'll work harder to give you a better experience";
    break;

    case 5:
     reply = "Thank you for giving us a 5 star rating. Have a good day!";
     break;

    default:
     reply = "Enter a number between 1 and 5";
        break;
}
document.getElementById("systemResponse").innerHTML = reply;
}
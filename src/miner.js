
//this function will perform a click event on given DOM object
function minerClick( domObject,  value){
try{
  switch (domObject) {
    case "id"    : document.getElementById(value).click();
                   console.log("button clicked : status pass ",domObject,value);
                   break;
    case "class" : document.getElementsByClassName(value).click();
                   console.log("button clicked : status pass ",domObject,value);
                   break;
    case "xpath" : var iterator = document.evaluate( value,
                   document, null, XPathResult.ANY_TYPE, null );
                   try {
                      var thisNode = iterator.iterateNext();
                      thisNode.click();
                   }
                   catch (e) {
                      console.log( 'Error: Document tree modified during iteration ' + e );
                   }
                   break;
    case "css"   : document.getElementById(value).click();//ToDo-must impliment
                   console.log("button clicked : status pass ",domObject,value);
                   break;
    case "tag"   :   document.getElementById(value).click();//ToDo-much more detailed implimentation
                   console.log("button clicked : status pass ",domObject,value);
                   break;
    default      : console.log("Error: domObject type not supported");
}
}catch(err){
  console.log(err);
}
}

//this function will wait until given specific time (miliseconds)
function wait(time){
  try{
  var e = new Date().getTime() + time;
  while (new Date().getTime() <= e) {}
}catch(err){
  console.log(err);
}
}

//Function will inspect the given dom element and notify that element is present
//or not in side the page

function isElementPresent(domObject, value){
  try{
    switch (domObject) {
      case "id"    : var present = document.getElementById(value);
                     return check(present);
                     break;
      case "class" : var present = document.getElementsByClassName(value);
                     return check(present);
                     break;
      case "xpath" : var present = document.getElementById(value);//toDo-must impliment
                     return check(present);
                     break;
      case "css"   : var present = document.getElementById(value);//ToDo-must impliment
                     return check(present);
                     break;
      case "tag"   : var present = document.getElementById(value);//ToDo-much more detailed implimentation
                     return check(present);
                     break;
      default      : console.log("Error: domObject type not supported");
                     return false;
  }
  }catch(err){
    console.log(err);
  }
  function check(present){
    if(present!= null){
         console.log("Element present : status pass ",domObject,value);
         return true;
     }
    else {
      console.log("Element not present : status fail ",domObject,value);
      return false;
    }
  }

}

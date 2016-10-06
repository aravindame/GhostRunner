/*
This file is part of the MinnerJS project by Aravinda Meewalaarachchi.

Copyright (C) 2016 Aravinda Meewalaarachchi <aravinda.mailbox@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/


//this function will perform a click event on given DOM object
function minerClick( domObject,  value){
try{
  switch (domObject) {
    case "id"    : document.getElementById(value).click();
                   console.log("status pass : button clicked ",domObject,value);
                   break;
    case "class" : document.getElementsByClassName(value).click();
                   console.log("status pass : button clicked",domObject,value);
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
                   console.log("status pass : button clicked",domObject,value);
                   break;
    case "css"   : document.getElementById(value).click();//ToDo-must impliment
                   console.log("status pass : button clicked",domObject,value);
                   break;
    case "tag"   : document.getElementById(value).click();//ToDo-much more detailed implimentation
                   console.log("status pass : button clicked",domObject,value);
                   break;
    default      : console.log("status fail : domObject type not supported");
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
      default      : console.log("status fail : domObject type not supported");
                     return false;
  }
  }catch(err){
    console.log(err);
  }
  function check(present){
    if(present!= null){
         console.log("status pass : Element present",domObject,value);
         return true;
     }
    else {
      console.log("status fail : Element not present ",domObject,value);
      return false;
    }
  }

}

//This function will handle the browser navigations

function navagateTo(url){
  try{
    window.location.href=url;
    console.log("status pass : Navigated to " + url);
  }catch(err){
    console.log("status fail : Broken link  or no network connection");
  }
}

//This function will navigate one step back from current position in recent history
function navigateBack(){
  try{
    window.history.back();
    console.log("status pass : Navigated one step back from current position in recent history" + url);
  }catch(err){
    console.log("status fail : Broken link  or no network connection");
  }
}

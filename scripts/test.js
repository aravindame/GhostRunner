/*
This file is part of the GhostRunner project by Aravinda Meewalaarachchi.

Copyright (C) 2016 Aravinda Meewalaarachchi <aravinda.mailbox@gmail.com>
Licensed under the MIT License, Permission is hereby granted, free of charge,
to any person obtaining a copyof this software and associated documentation
files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

*/

function main(){
console.log("Test Suiet is Running");
wait(2000);
if(isElementPresent('id','textbox'))
    runnerType('id','textbox','Hello');
wait(5000);
if(isElementPresent('id','btn'))
    runnerClick('xpath','//button[@id=\'btn\']');
  wait(2000);
  navagateTo("https://www.google.com");
  wait(2000);
}

$.getScript("http://127.0.0.1/file/Test/connectors/miner.js",main);
function myFunction() {
    document.getElementById("demo").innerHTML = "Its works";
}

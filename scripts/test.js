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

function main(){
console.log("Test Suiet is Running");
wait(2000);
if(isElementPresent('id','btn'))
    minerClick('xpath','//button[@id=\'btn\']');
  wait(2000);
  navagateTo("http://www.googl.com");
  wait(2000);
  navigateBack();
}

$.getScript("http://127.0.0.1/file/Test/connectors/miner.js",main);
function myFunction() {
    document.getElementById("demo").innerHTML = "Its works";
}

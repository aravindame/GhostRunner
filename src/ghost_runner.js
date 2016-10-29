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
//this function will perform a click event on given DOM object
function runnerClick(domObject, value) {
    try {
        switch (domObject) {
            case "id":
                document.getElementById(value).click();
                console.log("status pass : button clicked ", domObject, value);
                break;
            case "class":
                document.getElementsByClassName(value).click();
                console.log("status pass : button clicked", domObject, value);
                break;
            case "xpath":
                var iterator = document.evaluate(value,
                    document, null, XPathResult.ANY_TYPE, null);
                try {
                    var thisNode = iterator.iterateNext();
                    thisNode.click();
                } catch (e) {
                    console.log('Error: Document tree modified during iteration ' + e);
                }
                console.log("status pass : button clicked", domObject, value);
                break;
            case "css":
                document.getElementById(value).click(); //ToDo-must impliment
                console.log("status pass : button clicked", domObject, value);
                break;
            case "tag":
                document.getElementById(value).click(); //ToDo-much more detailed implimentation
                console.log("status pass : button clicked", domObject, value);
                break;
            default:
                console.log("status fail : domObject type not supported");
        }
    } catch (err) {
        console.log(err);
    }
}

function runnerType(domObject, value, text) {
    try {
        switch (domObject) {
            case "id":
                document.getElementById(value).value = text;
                console.log("status pass : string " + text + " typed on.", domObject, value);
                break;
            case "class":
                document.getElementsByClassName(value).value = text;
                console.log("status pass : string " + text + " typed on.", domObject, value);
                break;
            case "xpath":
                var iterator = document.evaluate(value,
                    document, null, XPathResult.ANY_TYPE, null);
                try {
                    var thisNode = iterator.iterateNext();
                    thisNode.value = text;
                } catch (e) {
                    console.log('Error: Document tree modified during iteration ' + e);
                }
                console.log("status pass : string " + text + " typed on.", domObject, value);
                break;
            case "css":
                document.getElementById(value).value = text;
                console.log("status pass : string " + text + " typed on.", domObject, value);
                break;
            case "tag":
                document.getElementById(value).value = text;
                console.log("status pass : string " + text + " typed on.", domObject, value);
            default:
                console.log("status fail : domObject type not supported");
        }
    } catch (err) {
        console.log(err);
    }
}

//this function will wait until given specific time (miliseconds)
function wait(time) {
    try {
        var e = new Date().getTime() + time;
        while (new Date().getTime() <= e) {}
    } catch (err) {
        console.log(err);
    }
}

//Function will inspect the given dom element and notify that element is present
//or not in side the page

function isElementPresent(domObject, value) {
    try {
        switch (domObject) {
            case "id":
                var present = document.getElementById(value);
                return check(present);
                break;
            case "class":
                var present = document.getElementsByClassName(value);
                return check(present);
                break;
            case "xpath":
                var present = document.getElementById(value); //toDo-must impliment
                return check(present);
                break;
            case "css":
                var present = document.getElementById(value); //ToDo-must impliment
                return check(present);
                break;
            case "tag":
                var present = document.getElementById(value); //ToDo-much more detailed implimentation
                return check(present);
                break;
            default:
                console.log("status fail : domObject type not supported");
                return false;
        }
    } catch (err) {
        console.log(err);
    }

    function check(present) {
        if (present != null) {
            console.log("status pass : Element present", domObject, value);
            return true;
        } else {
            console.log("status fail : Element not present ", domObject, value);
            return false;
        }
    }

}

//This function will handle the browser navigations

function navagateTo(url) {
    try {
        window.location.href = url;
        console.log("status pass : Navigated to " + url);
    } catch (err) {
        console.log("status fail : Broken link  or no network connection");
    }
}

//This function will navigate one step back from current position in recent history
function navigateBack() {
    try {
        window.history.back();
        console.log("status pass : Navigated one step back from current position in recent history" + url);
    } catch (err) {
        console.log("status fail : Broken link  or no network connection");
    }
}
//This function will return the title of the web page

function getTitle() {
    try {
        var title = document.title;
        console.log("status pass : Current page title is ", title);
        return title;
    } catch (err) {
        console.log(err);
    }
}
//This function is used to retrieve the inner text of a web page. it is
//can be used commands for verification of messages, labels, errors etc displayed
//on the web pages.


function getText(domObject, value) {
    var text = null;
    try {
        switch (domObject) {
            case "id":
                text = document.getElementById(value).innerHTML;
                console.log("status pass : Inner Text = ", text);
                break;
            case "class":
                text = document.getElementsByClassName(value).innerHTML;
                console.log("status pass : Inner Text = ", text);
                break;
            case "xpath":
                var iterator = document.evaluate(value,
                    document, null, XPathResult.ANY_TYPE, null);
                try {
                    var thisNode = iterator.iterateNext();
                    text = thisNode.innerHTML;
                } catch (e) {
                    console.log('Error: Document tree modified during iteration ' + e);
                }
                console.log("status pass : Inner Text = ", text);
                break;
            case "css":
                document.getElementById(value).click(); //ToDo-must impliment
                console.log("status pass : button clicked", domObject, value);
                break;
            case "tag":
                document.getElementById(value).click(); //ToDo-much more detailed implimentation
                console.log("status pass : button clicked", domObject, value);
                break;
            default:
                console.log("status fail : domObject type not supported");
        }
    } catch (err) {
        console.log(err);
    }
    return text;
}
//The command is used to retrieve the URL of the webpage the user is currently accessing.

function getCurrentUrl() {
    try {
        var url = window.location.href;
        console.log("status pass : Current url is ", url);
        return url;
    } catch (err) {
        console.log(err);
    }
}
//This command is use to select a value from a drop Down List

function selectFromDropDown(domObject, value, valueToSet) {
    try {
        switch (domObject) {
            case "id":
                var dropDownList = document.getElementById(value);
                setSelectedValue(dropDownList, valueToSet);
                console.log("status pass : value " + valueToSet + " is selected from drop down list");
                break;
            case "class":
                var dropDownList = document.getElementsByClassName(value);
                setSelectedValue(dropDownList, valueToSet);
                console.log("status pass : value " + valueToSet + " is selected from drop down list");
                break;
            case "xpath":
                var iterator = document.evaluate(value,
                    document, null, XPathResult.ANY_TYPE, null);
                try {
                    var dropDownList = iterator.iterateNext();
                } catch (e) {
                    console.log('Error: Document tree modified during iteration ' + e);
                }
                setSelectedValue(dropDownList, valueToSet);
                console.log("status pass : value " + valueToSet + " is selected from drop down list");
                break;
            case "css":
                var dropDownList = document.getElementById(value);
                setSelectedValue(dropDownList, valueToSet);
                console.log("status pass : value " + valueToSet + " is selected from drop down list");
                break;
            case "tag":
                var dropDownList = document.getElementById(value);
                setSelectedValue(dropDownList, valueToSet);
                console.log("status pass : value " + valueToSet + " is selected from drop down list");
                break;
            default:
                console.log("status fail : domObject type not supported");
        }
    } catch (err) {
        console.log("status fail : " + err);
    }

    function setSelectedValue(dropDownList, valueToSet) {
        for (var i = 0; i < dropDownList.options.length; i++) {
            if (dropDownList.options[i].text.trim() == valueToSet) {
                dropDownList.options[i].selected = true;
                break;
            }
        }
    }
}

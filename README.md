##GhostRunner

Ghost Runner is a testing framework (experimental) for web application testing, written in JavasScript that has the ability to automates the process of script generation for software testing. Ghost Runner  has the capabilities to automating web page navigation by DOM Manipulation, data driven testing, jQuery support, taking screenshots and automate script generation.

##Features

- Page automation, Access and manipulate web of pages.
- Easy to capture web element objects using ghostRunner Chrome plugin just only by clicking that element.
- Ability to read and write files like excel, json and connect to the databases
- Screen capture, Programmatically capture screanshots of failed test cases.

## Code example

Here we are documentating a simple test case written by using RoadRunner framework.

```javascript
function TestDriver() {
    getText('css', '#btn');
    wait(2000);
    if (isElementPresent('css', '#textbox'))
        runnerType('css', '#textbox', 'Hello');
    wait(5000);
    if (isElementPresent('id', 'btn'))
        runnerClick('css', '#btn');
    selectFromDropDown('id', 'testDropDown', '10');
    wait(2000);
}

$.getScript("http://127.0.0.1/file/Test/connectors/miner.js",TestDriver);

```
Run the script:

![](https://photos.google.com/photo/AF1QipP-tGzMcWMETbFoZ_okNYVfdJ60B-xp7Ij0ylR3)

## Contribution

Please read the [CONTRIBUTING.md](https://github.com/aravindame/GhostRunner/CONTRIBUTING.md) file contents.

## Team

- Aravinda Meewalaarachchi (https://github.com/aravindame)
- Sadeepa Diluk Jayatissa  (https://github.com/SadeepaDiluk)
- Lahiru Prabodha Wickramarathne (https://github.com/LahiruPrabodha)

## License

MIT

## Learning  process of 《JavaScript》is guided by Youtube chanel《CodeWithHarry》[JavaScript for Beginners in Hindi](https://youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR)
<br/>

### For execute JavaScript code in vs code install node.js and execute your js file run this command in terminal
```bash
 node filename.js
```
### For execute "prompt()" function in node js install [prompt-sync](https://www.npmjs.com/package/prompt-sync) package by running this command in terminal
```bash
npm install prompt-sync
``` 
### and then declare it in your js file
```js
const prompt = require("prompt-sync")({ sigint: true });// declare prompt function at the top of your js file
```
<br/>

### or you can install [code runner extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) in vs code and run your code by pressing ctrl+alt+n
<br/>

### If you want to run your code in browser then 
- create a html file and link your js file in it
```html
<!DOCTYPE html>
<html lang="en">
<head>
    
</head>
<body>
    <script src="filename.js"></script>
</body>
</html>
```
- open your html file and go live by installing [live server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in vs code and run your code by pressing alt+l+o

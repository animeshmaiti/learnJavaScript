const path = require('path');
const fs = require('fs');
const currentName = process.argv[2] || "work";
const newName = process.argv[3] || "newWork";
const preview = process.argv[4] === "true" || false;
const folder = __dirname;
try {
  const data = fs.readdir(folder,(err,data)=>{
    // console.log(data);
    for(let i = 0; i < data.length; i++){
        const item = data[i];
        let oldFile = path.join(folder, item);
        let newFile =  path.join(folder,item.replaceAll(currentName,newName));
        if (!preview) {
            fs.rename(oldFile, newFile, ()=>{
                console.log("rename success",item,newFile);
            });
        }
        else{
            if (oldFile !== newFile) console.log(oldFile + " will be rename to: " + newFile);
        }
    }
  });
} catch (err) {
  console.error(err);
}

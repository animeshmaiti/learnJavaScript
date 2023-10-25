const path = require('path');
const fs = require('fs');
const currentName = process.argv[2] || "work";
const newName = process.argv[3] || "newWork";
const preview = process.argv[4] === "true" || false;
const directory = process.argv[5] || __dirname;

try {
  fs.readdir(directory, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      let oldFile = path.join(directory, item);
      let newFile = path.join(directory, item.replace(currentName, newName)); // Use replace, not replaceAll

      if (!preview) {
        fs.rename(oldFile, newFile, (renameErr) => {
          if (renameErr) {
            console.error("Error renaming file:", renameErr);
          } else {
            console.log("Rename success", item, newFile);
          }
        });
      } else {
        if (oldFile !== newFile) {
          console.log(oldFile + " will be renamed to: " + newFile);
        }
      }
    }
  });
} catch (err) {
  console.error(err);
}

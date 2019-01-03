const fs = require('fs');
const path = require('path');

const folderpath = './images/';

fs.readdir(folderpath, (err, items) => {
  let rest_counter = 0;
  let photo_counter = 0;
  let i = 0

  while (rest_counter < 100) {
    while (photo_counter < 20) {
      const old_path = path.join(__dirname, folderpath, items[i]);
      const new_path = path.join(__dirname, folderpath, `restID${rest_counter}_photo${photo_counter}.jpg`);
      fs.rename(old_path, new_path, (err) => {
        if (err) throw err;
      });

      photo_counter += 1;
      i+=1;
    }
    photo_counter = 0;
    rest_counter += 1;
    console.log('finished restaurant number: ' + rest_counter);
  }

  // console.log(old_path);
  // console.log(new_path)
});

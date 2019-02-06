const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllMenuItems = (rest_id, callback) => {
  const sql_query = 'SELECT * from `menus` WHERE `rest_id` = ?';
  connection.query(sql_query, rest_id, (err, data) => {
    if (err) { console.error(err); }
    else {
      callback(data);
    }
  });
};

const getAllPhotos = (rest_id, callback) => {
  const sql_query = 'SELECT * from `photos` WHERE `rest_id` = ?';
  connection.query(sql_query, rest_id, (err, data) => {
    if (err) { console.error(err); }
    else {
      callback(data);
    }
  });
};


module.exports = {
  getAllMenuItems,
  getAllPhotos,
};

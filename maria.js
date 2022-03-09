/* MariaDB connection
------------------------------------------------------------------*/

const mariadb = require('mariadb/callback');

const pool = mariadb.createPool({
    host: '172.17.0.4', 
    user:'root', 
    password: 'my-secret-pw',
    //port: '3306',
    //database: “todo”
    //connectionLimit: 5
  });
 


  const conn = mariadb.createConnection({
    host: '172.17.0.4', 
    user:'root',
    password: 'my-secret-pw'
  });

  conn.connect(err => {
    if (err) {
      console.log("not connected due to error: " + err);
    } else {
      console.log("connected ! connection id is " + conn.threadId);
    }
  });

  // conn.query("SELECT 2 as val", (err, rows) => {
  //     console.log(rows); //[ {val: 1}, meta: ... ]
  //     conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"], (err, res) => {
  //       console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  //       conn.end();
  //     }); 
  // });

// Expose a method to establish connection with MariaDB SkySQL
// module.exports = Object.freeze({
  
//   pool: pool
// });


// pool.getConnection((err, conn) => {
//   if (err) {
//      console.log("Error in obtaining connection: " + err);
//   } else {
//      console.log("Connected. Connection id is " + conn.threadId);
//      conn.end()
//   }
// });


// function main() {
//   try {
//      pool.getConnection((err, conn) => {
//         if (err) {
//            console.log("Error in obtaining connection: " + err);
//         } else {
//            console.log("Connected. Connection id is " + conn.threadId);
//            conn.query(
//               "SELECT first_name, last_name, email from test.contacts",
//               (err,res,meta) => {
//                  if (err) {
//                     console.error("Error querying data: ", err);
//                  } else {
//                     console.log(res);
//                     console.log(meta);
//                  }
//               }
//            );
//            // release connection to pool
//            conn.end(err => {if(err){console.error("Error releasing connection to pool   : ", err);}});
//          }
//       });

//    } catch (err) {

//       // Manage Errors
//       console.log(err);

//    } finally {

//       Return Connection to the Pool
//       if (conn) conn.end(err => {
//          if(err) {
//             console.log("SQL error in closing connection: ", err);
//          }
//       })
//    }
//  }

//  main();


// pool.getConnection()
// .then(conn => {
//   var sql2 = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  
//   conn.query(sql2)
//   .then((rows) => {
//     console.log(rows); //[ {val: 1}, meta: ... ]
//     //Table must have been created before 
//     // " CREATE TABLE myTable (id int, val varchar(255)) "
//     return conn.query("INSERT INTO customers value (nico, montpellier)", [1, "mariadb"]);
//     console.log('connect to maria db')
//   })
//   .then((res) => {
//     console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
//     console.log('connect to maria db')
//     conn.end();
//         })
//         .catch(err => {
//           //handle error
//           console.log(err); 
//           conn.end();
//         })
        
//     }).catch(err => {
//       //not connected
//     });
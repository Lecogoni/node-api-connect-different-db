const sqlite3 = require('sqlite3').verbose();


// open database in memory en RAM - pas de chemin 
// disparaît a fermeture de machine
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

 

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});


    
// version avec fichier sur disque 
const sqlite3 = require('sqlite3').verbose();


// open the database
// avec stockage dans un fichier local - avec un chemin d'accès
// persiste a fermeture de connection
let db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {​​​​​​
  if (err) {​​​​​​
    console.error(err.message);
  }​​​​​​
  console.log('Connected to the chinook database.');
}​​​​​​);


db.serialize(() => {​​​​​​
  db.each(`SELECT PlaylistId as id,
                  Name as name
           FROM playlists`, (err, row) => {​​​​​​
    if (err) {​​​​​​
      console.error(err.message);
    }​​​​​​
    console.log(row.id + "\t" + row.name);
  }​​​​​​);
}​​​​​​);


db.close((err) => {​​​​​​
  if (err) {​​​​​​
    console.error(err.message);
  }​​​​​​
  console.log('Close the database connection.');
}​​​​​​);






# NODE JS

- API nodejs réunissant les différentes possibilités de connection à des DB SQL, No SQL ...
- local webserver avec le module HTTP 

# CONNECTION AU DIFFERENT TYPE DE DB


### JSON API

CRUD - api-json request le fichier parking.json

### MySQL

npm i mysql
use the container : tuto-phb-db

### sqlite3

npm i sqlite3
=> stockage en mémoire sur machine client


### MariaDB

-p7799:3306
container name : some-mariadb
MARIADB_USER=example-user
MARIADB_PASSWORD=my_cool_secret
MARIADB_ROOT_PASSWORD=my-secret-pw


### Mongo DB

npm install mongodb
- connect to container mongo : 
docker run -d -p 555:27017 --name mongodb mongo:latest
- db : db

`https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/`


### Triscost

- API - mongodb
- npm install mongodb
- trip cost calculator app

- connect to container mongo : 
docker run -d -p 555:27017 --name mongodb mongo:latest

const url = "mongodb://172.17.0.5:555"

- connect to compass : 
mongodb://localhost:<numerodeport>
mongodb://localhost:555



`https://flaviocopes.com/rest-api-express-mongodb/`

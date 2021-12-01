<!--- REMOVE THIS COMMENT --->

# ShareCare User API

In order to run the API you'll need to set the following environment variables.

## Environment variables

| Variable name | Value |
| --- | --- |
|DATABASE_HOST|database hostname|
|DATABASE_PORT|database port|
|DATABASE_NAME|name of the database
|DATABASE_USERNAME|username of the database user|
|DATABASE_PASSWORD|password of the database user|

docker run -p 3000:3000 --network=<whateveryouwant> <user api container name>

docker run -d -p 5432:5432 --name=postgres --network=georgenetwork --rm --env=POSTGRES_PASSWORD=foo --volume=$(pwd)/schema.sql:/docker-entrypoint-initdb.d/schema.sql --volume=$(pwd):/repo postgres:latest -c log_statement=all

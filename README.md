# MeanPosts

This project uses Angular and Node.js to make a posts management app. Users have to create account/login inorder manage posts.  
As a prerequisite, have node.js installed; as well as a database cluster from [Mongodb Atlas](https://www.mongodb.com/cloud/atlas). Take the connection string from the cluster and paste as environment variable in the config.env file. (See environment variable below)

## Installation
After cloning the project, On the root directory, run `npm i`   

**Environment Variable**  
Navigate to backend/config, create a file config.env and assign the following variables:
* DB_CONN_URI = connection_string_from_atlas
* JWT_KEY = secret_key_for_signing_jwt_tokens


## Angular server

Run `ng serve` on the root directory for a angular server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Backend server

Run `npm run dev` on the root directory to launch the development node server.

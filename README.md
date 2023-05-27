# MultiUse-PSQL-be

This is a PSQL back end which is used for multiple different front end projects.

Front end projects used on:
To-Do-List-fe
FireBaseGame-fe
Recipe-Project-fe

# Multi Use BE API

## Summary

This API will allow you to view data for multiple different projects I have worked on and the relevant information that comes with them.

# Hosted Version

<https://calm-gold-angelfish-wig.cyclic.app/api>

# Set-up for self-hosting.

To begin using this API hosted on your own machine you must first, **Clone** this respository.

To clone you must first:

- Click the green Code button at the top of the repo.
- Copy the link.
- Open the terminal where ever you would like to store the files and type the following.

  ```sh
  git clone https://github.com/EddySafc/MultiUse-PSQL-be.git
  ```

- Once that has completed you must install the dependencies by typing.
  ```sh
  npm install
  ```
- Create the environment variables for accessing the DATABASE

  - First create 2 files one named `.env.test` and another named `.env.development`.
  - Second populate these files with `PGDATABASE=multi_use_db_test` for test and `PGDATABASE=multi_use_db` for development (Reference .env-example for structure).

    This will allow you to test the functionality of the API with a much smaller database saving you time.

- next we must initialise the databse with these commands.

  ```sh
  npm run setup-dbs; npm run seed
  ```

  This will first create the Databases called `nc_games` and `nc_games_test`. Then populate those with data from the seed file.

- I have provided a full test suite to confirm the functionality of this API and if you chose to edit the code this will be helpful to make sure everything is still working.

- Finally to host locally you can run the script 'start' like this.
  ```sh
  npm start
  ```

# Requirements

- NodeJS - v14.21.1 or Higher.
- PostgreSQL - 11.18 or Higher.

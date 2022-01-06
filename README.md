# Cincy_FireRescue_Analysis
Visual Analysis of fire and rescue data in the city of Cincinnati (Project 2 Group 4)

## Prerequisites
1. You must have pgadmin installed
1. You must have a mapbox public api key

## Instructions
### Prepare the Database
1. Open pgAdmin
1. Create a new database called cincinnatifire
1. Import and run cincinnati.sql in pgAdmin to create the tables for the database.
1. Open data_cleaning.ipynb and locate Cell 32 and this line: "postgres:bootcamp@localhost:5432/cincinnatifire". Replace the following:
   - bootcamp with your pgadmin password
   - 5432 with the port you have set up in your pgadmin settings
1.  Run the jupyter notebook to clean the data and load onto SQL database. It will load the data into the 3 tables.

### Prepare API endpoint
1. Locate the config.js file under the static folder
1. Replace YOUR-KEY-HERE with your api key from mapbox


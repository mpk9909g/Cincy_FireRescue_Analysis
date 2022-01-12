# Cincy_FireRescue_Analysis
Visual Analysis of fire and rescue data in the city of Cincinnati (Project 2 Group 4)

## Prerequisites
1. You must have pgadmin installed
1. You must have a mapbox public api key

## Instructions
### Prepare the Database
1. Clone this repository to your desktop.
1. Open pgAdmin.
1. Create a new database called ``cincinnatifire``.
1. Open terminal in repository folder, type ``source activate PythonData38`` then type  ``jupyter notebook``.
1. Import and run ``cincinnati.sql`` in pgAdmin to create the tables for the database.
   - Note: If there are existing tables in the ``cincinnatifire`` database, include the **DROP** tables SQL code.
1. Open ``data_cleaning.ipynb``, locate **Cell 32** and this line: "postgres:bootcamp@localhost:5432/cincinnatifire". Replace the following:
   - bootcamp with your pgadmin password
   - 5432 with the port you have set up in your pgadmin settings
1.  Run the ``data_cleaning.ipynb`` jupyter notebook to clean the data and load into SQL database. It will load the data into the 3 tables. Please be patient as this will take a couple of minutes to load.
   - Please note that the ``Reducing the original data`` jupyter notebook was created to reduce the original data file size to load onto Github-you will not need to run this notebook. The code has also been commented out for review in the ``data_cleaning`` jupyter notebook.

### Prepare API endpoint
1. Locate the ``config.js`` file under the **static/js** folder.
1. Replace YOUR-KEY-HERE with your api key from mapbox.
1. Locate the ``config.py`` file under the same folder as app.py
1. Replace ``pg_id`` and ``pg_pw`` repsectively with your PgAdmin username and password.

### Load the website
1. Navigate to the folder that contains ``app.py`` and launch a GitBash (Windows) or Terminal (Mac).
1. Type ``source activate PythonData38`` and then hit `ENTER`.
1. Type ``python app.py`` and then hit `ENTER`.
1. Observe that the Flask server starts and tells you which port it's running on. Don't close this window.
1. With the Flask server running, enter the address shown in the GitBash window into your Chrome browser (e.g. http://127.0.0.1:5000/). You'll see that it loads the landing page of the Cincinnati Rescue Dashboard.
1. Navigate to the "Routes" page to get the available apis.
1. Navigate to the "Architecture" page to learn about the architecture.
1. Dom, Chris, Erin, and Shalesh are awesome!
1.  **You're learning this at a good time.**
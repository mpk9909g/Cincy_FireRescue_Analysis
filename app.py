import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, render_template, jsonify


#################################################
# Database Setup
#################################################
# engine = create_engine("sqlite:///titanic.sqlite")
connection_string = "postgres:bootcamp@localhost:5432/cincinnatifire"
engine = create_engine(f'postgresql://{connection_string}')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
# Passenger = Base.classes.passenger
neighborhood_incidents = Base.classes.neighborhood_incidents
neighborhood_incidents_grouped = Base.classes.neighborhood_incidents_grouped
incidents_time_duration = Base.classes.incidents_time_duration

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    return render_template("index.html")


# def welcome():
#     """List all available api routes."""
#     return (
#         f"Available Routes:<br/><br/><br/>"
#         f"/api/v1.0/neighborhood_incidents<br/><br/>"
#         f"/api/v1.0/neighborhood_incidents_grouped<br/><br/>"
#         f"/api/v1.0/incidents_time_duration"
#     )



# FIRST ENDPOINT....for the MAP (?)

@app.route("/api/v1.0/neighborhood_incidents")
def map():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all columns
    results = session.query(neighborhood_incidents.EVENT_NUMBER, neighborhood_incidents.NEIGHBORHOOD, neighborhood_incidents.LATITUDE_X, neighborhood_incidents.LONGITUDE_X, neighborhood_incidents.INCIDENT_TYPE_DESC).all()

    session.close()

    # Create a dictionary from the row data and append to a list 
    map_json = []
    for EVENT_NUMBER, NEIGHBORHOOD, LATITUDE_X, LONGITUDE_X, INCIDENT_TYPE_DESC in results:
        map_dict = {}
        map_dict["event_number"] = EVENT_NUMBER
        map_dict["neighborhood"] = NEIGHBORHOOD
        map_dict["latitude"] = LATITUDE_X
        map_dict["longitude"] = LONGITUDE_X
        map_dict["incident_type"] = INCIDENT_TYPE_DESC
        map_json.append(map_dict)

    return jsonify(map_json)



# SECOND ENDPOINT....for the PIE chart (?)

@app.route("/api/v1.0/neighborhood_incidents_grouped")
def pie():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    
    # Query all columns
    results = session.query(neighborhood_incidents_grouped.NEIGHBORHOOD, neighborhood_incidents_grouped.INCIDENT_TYPE_DESC, neighborhood_incidents_grouped.counts).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    pie_json = []
    for NEIGHBORHOOD, counts, INCIDENT_TYPE_DESC in results:
        pie_dict = {}
        pie_dict["neighborhood"] = NEIGHBORHOOD
        pie_dict["incident_type"] = INCIDENT_TYPE_DESC
        pie_dict["counts"] = counts
        pie_json.append(pie_dict)

    return jsonify(pie_json)




# THIRD ENDPOINT....for the ARRIVAL TIME TREND CHART (?)

@app.route("/api/v1.0/incidents_time_duration")
def trend():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all columns
    results = session.query(incidents_time_duration.EVENT_NUMBER, incidents_time_duration.ARRIVAL_DURATION, incidents_time_duration.CREATE_TIME_INCIDENT, incidents_time_duration.NEIGHBORHOOD, incidents_time_duration.INCIDENT_TYPE_DESC).all()

    session.close()

    # Create a dictionary from the row data and append to a list 
    trend_json = []
    for EVENT_NUMBER, ARRIVAL_DURATION, CREATE_TIME_INCIDENT, NEIGHBORHOOD, INCIDENT_TYPE_DESC in results:
        trend_dict = {}
        trend_dict["event_number"] = EVENT_NUMBER
        trend_dict["arrival_duration"] = ARRIVAL_DURATION
        trend_dict["create_time_incident"] = CREATE_TIME_INCIDENT
        trend_dict["neighborhood"] = NEIGHBORHOOD
        trend_dict["incident_type"] = INCIDENT_TYPE_DESC
        trend_json.append(trend_dict)

    return jsonify(trend_json)






if __name__ == '__main__':
    app.run(debug=True)

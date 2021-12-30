

DROP TABLE incidents_time_duration;
DROP TABLE neighborhood_incidents_grouped;
DROP TABLE neighborhood_incidents;
-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "neighborhood_incidents" (
    "EVENT_NUMBER" VARCHAR(255)   NOT NULL,
    "NEIGHBORHOOD" VARCHAR(255)   NOT NULL,
    "LATITUDE_X" FLOAT   NOT NULL,
    "LONGITUDE_X" FLOAT   NOT NULL,
    "INCIDENT_TYPE_DESC" VARCHAR(255)   NOT NULL,
    CONSTRAINT "pk_neighborhood_incidents" PRIMARY KEY (
        "EVENT_NUMBER"
     )
);

CREATE TABLE "incidents_time_duration" (
    "EVENT_NUMBER" VARCHAR(255)   NOT NULL,
    "ARRIVAL_DURATION" FLOAT   NOT NULL,
    "CREATE_TIME_INCIDENT" VARCHAR(255)   NOT NULL,
    "NEIGHBORHOOD" VARCHAR(255)   NOT NULL,
    "INCIDENT_TYPE_DESC" VARCHAR(255)   NOT NULL,
    CONSTRAINT "pk_incidents_time_duration" PRIMARY KEY (
        "EVENT_NUMBER"
     )
);

CREATE TABLE "neighborhood_incidents_grouped" (
    "NEIGHBORHOOD" VARCHAR(255)   NOT NULL,
    "INCIDENT_TYPE_DESC" VARCHAR(255)   NOT NULL,
    "counts" INT   NOT NULL,
    CONSTRAINT "pk_neighborhood_incidents_grouped" PRIMARY KEY (
        "NEIGHBORHOOD","INCIDENT_TYPE_DESC"
     )
);



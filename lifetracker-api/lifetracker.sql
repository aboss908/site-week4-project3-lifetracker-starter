\echo 'Delete and recreate lifetracker.sql?'

\prompt 'Return for yes, CTRC+C for cancel' answer

DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker;

\i lifetracker-schema.sql
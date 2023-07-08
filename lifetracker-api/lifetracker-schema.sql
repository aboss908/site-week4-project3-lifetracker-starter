CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE CHECK(POSITION('@' IN email) > 1),
    date TIMESTAMP NOT NULL DEFAULT ((NOW() - interval '3 hours') AT TIME ZONE 'EST')
);

CREATE TABLE nutrition_log (
    UserID INT REFERENCES users(id),
    id SERIAL,
    food_name TEXT NOT NULL,
    calories FLOAT NOT NULL,
    quantity FLOAT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT ((NOW() - interval '3 hours') AT TIME ZONE 'EST')
);

CREATE TABLE exercise_log (
    UserID INT REFERENCES users(id),
    id SERIAL,
    exercise_name TEXT NOT NULL,
    duration FLOAT NOT NULL,
    intensity FLOAT NOT NULL CHECK(intensity <= 10),
    date TIMESTAMP NOT NULL DEFAULT ((NOW() - interval '3 hours') AT TIME ZONE 'EST')
);

CREATE TABLE sleep_log (
    UserID INT REFERENCES users(id),
    id SERIAL,
    sleep_date TEXT NOT NULL,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,
    total_time FLOAT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT ((NOW() - interval '3 hours') AT TIME ZONE 'EST')
);
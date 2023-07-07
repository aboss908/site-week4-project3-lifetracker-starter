CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE CHECK(POSITION('@' IN email) > 1),
    date TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition_log (
    UserID INT REFERENCES users(id),
    id SERIAL,
    food_name TEXT NOT NULL,
    calories INT NOT NULL,
    quantity INT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE exercise_log (
    UserID INT REFERENCES users(id),
    id SERIAL,
    exercise_name TEXT NOT NULL,
    duration INT NOT NULL,
    intensity INT NOT NULL CHECK(intensity <= 10),
    date TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE sleep_log (
    UserID INT REFERENCES users(id),
    id SERIAL,
    sleep_date TEXT NOT NULL,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,
    total_time INT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW()
);
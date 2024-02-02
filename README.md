# Strapi Backend for Quiz Page

Welcome to the Strapi Backend for the Quiz Page! 🌐

## Overview

This repository contains the backend logic powered by [Strapi](https://strapi.io/), a versatile headless CMS for efficient backend content management. It manages user data, content, and everything needed to make the Quiz Page dynamic and engaging.

## Main API Routes:

- **Quizzes:**
    - Manages quiz data efficiently. Retrieve quiz data, add new quizzes, and update existing ones.

- **Groups:**
    - Handles the creation, updating, and retrieval of group information for collaborative quiz experiences. Create quiz groups, manage group details, and retrieve group information.

- **Friendships:**
    - Facilitates connections between users, enabling them to make friends within the platform. Add friends, view friend lists, and manage friend connections.

- **Played Games:**
    - Keeps track of the number of quizzes played by users. Retrieve data on played quizzes and track user activity.



## Getting Started

1. Clone this repository.
1. Install dependencies using ```npm install```.
1. Set up a ```.env``` file in the root of the project. You can use the ```.env.example``` file as the reference.
1. Install demo data using ```npm run import```.
1. Run the app locally with ```npm run develop```.
1. Connect to the [Quiz Frontend](https://github.com/DeimanteDav/Quiz-react).
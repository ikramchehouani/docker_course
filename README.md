:D

# Docker Course Project

This project is a Dockerized full-stack application that consists of three containers: MongoDB, client (React), and server (Node.js). Below are instructions on how to set up and run these containers.

## Prerequisites

Before you begin, ensure you have the following tools installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1.  Clone this repository to your local machine:

    git clone https://github.com/ikramchehouani/docker_course.git

2.  Navigate to the project directory:

    cd docker_course

3.  Running the Containers

- MongoDB Container
  Start the MongoDB container: docker-compose up -d mongodb

- Server Container
  Build and start the server container: docker-compose up -d server
  You can access the server at http://localhost:8080

- Client Container
  Build and start the client container: docker-compose up -d client
  You can access the client at http://localhost:3000.

To stop the containers, run: docker-compose down

If you want to change the port mappings or container configurations, modify the docker-compose.yml file.

-- Server code can be found in the server directory.

-- Client code can be found in the client directory.

Troubleshooting:

If you encounter any issues or errors, check the container logs using the following command:

    docker-compose logs <service_name>

Replace <service_name> with mongodb, server, or client, depending on the service you want to inspect.

:D

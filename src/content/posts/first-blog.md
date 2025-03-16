---
title: Docker Basics Command
published: 2025-03-15
updated: 2025-03-15
description: Docker Basics command list
image: ../../assets/images/docker_log.webp
tags: ["Docker"]
category: Development
draft: false
---
# Essential Docker Commands and Concepts

Docker is a powerful containerization platform. Here's a comprehensive guide to essential Docker commands and concepts.

## Basic Container Operations

### Running Containers
```bash
# Run a container from an image
docker run nginx

# Run container with a specific name
docker run --name my_container nginx

# Run container in background (detached mode)
docker run -d nginx

# Run container with interactive shell
docker run -it ubuntu bash

# Run container with sleep command
docker run ubuntu sleep 5
```

### Container Management
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop container_name

# Remove a container
docker rm container_name

# Execute command in running container
docker exec -it container_name /bin/bash

# Attach to a running container
docker attach container_id

# View container logs
docker logs container_name
```

## Image Management

### Basic Image Operations
```bash
# Download an image without running
docker pull image_name

# Remove an image
docker rmi image_name

# Remove all images
docker rmi $(docker images -a -q)

# View image history and layers
docker history image_name
```

### Building and Publishing Images
```bash
# Build image from Dockerfile
docker build . -t username/image_name

# Login to Docker Hub
docker login

# Push image to Docker Hub
docker push username/image_name
```

## Networking and Ports

### Port Mapping
```bash
# Map host port 80 to container port 5000
docker run -p 80:5000 image_name
```

### Network Inspection
```bash
# Get container IP address
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name

# Note: Default internal Docker IP range starts at 172.17.0.2
```

## Data Persistence

### Volume Management
```bash
# Run container with volume mapping
docker run -v /host/path:/container/path mysql

# List all volumes
docker volume ls

# Remove specific volume
docker volume rm volume_name

# Remove unused volumes
docker volume prune
```

## Environment Variables
```bash
# Run container with environment variable
docker run -e APP_COLOR=green image_name
```

## System Management

### Resource Monitoring
```bash
# View container resource usage
docker stats container_name

# Remove all unused resources
docker system prune -a
```

## ENTRYPOINT vs CMD

### Key Differences

#### ENTRYPOINT
- Defines the executable that runs when container starts
- Cannot be overridden without --entrypoint flag
- Used for consistent container behavior
- Primary process definition

#### CMD
- Provides default arguments for ENTRYPOINT
- Easily overridden at runtime
- More flexible than ENTRYPOINT
- Sets default commands

### Combined Usage
When used together:
- ENTRYPOINT defines the main command
- CMD provides default parameters
- Runtime commands override CMD but not ENTRYPOINT

## Important Notes

- Containers need a running process to stay alive
- Check Ubuntu version: `cat /etc/*release*`
- Storage drivers manage Docker's layered architecture
- Use cgroups for CPU and memory management
- Docker Compose: Use `docker compose up` to run multi-container applications

## Docker Compose
```bash
# Start services defined in docker-compose.yml
docker compose up

# Run in detached mode
docker compose up -d
```

This guide covers the fundamental Docker commands and concepts needed for container management and deployment. For more detailed information, refer to the [official Docker documentation](https://docs.docker.com/).
# Web app with built-in proxy

- serve a frontend while using seemlessly different backend as a unique endpoint (with the proxy)

# Steps
- enable access from 0.0.0.0 in the backend and frontend servers startup parameters
- behind the scene (in the Docker network) : use their respective Domain names to access their endpoint
- call relative domain paths on the client
- use the proxy to redirect the request from the frontend to another endpoint

# Run
- `docker compose build`
- `docker compose up`

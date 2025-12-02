# Deployment Guide: TrustMed Application

This documentation outlines the step-by-step process for deploying the TrustMed application. The architecture consists of:
* **Frontend:** Node.js application deployed to **Google Cloud Run** (Port 3000).
* **Backend:** FastAPI service deployed on a **Google Compute Engine (VM)** instance (Port 8000), managed by `systemd`.

---


## Part 1: Backend Deployment (VM Instance)

The backend runs directly on the GCP Compute Engine VM Instance. We will use `systemd` to ensure the server starts automatically on boot and restarts if it crashes.


### 1. System Preparation & Python Setup
Update the package list and install Python 3, pip, and virtualenv tools.

```bash
sudo apt-get update
sudo apt-get install -y python3 python3-pip python3-venv git
```

### 2. Application Setup
Clone your repository or upload your backend code to the server.

```bash
# Create a directory
mkdir -p ~/backend
cd ~/backend

# (Transfer your files here via git clone or scp)

```

### 3. Virtual Environment & Dependencies
Install dependencies and run Python apps in a virtual environment.

```bash

python3 -m venv venv

source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 4. Test the Server Manually
Run the below command to ensure the backend server starts correctly.

```bash

python3 trustmed_api.py
```
*Verify that the server starts on Port 8000. 

### 5. Configure Systemd (Auto-start Service)
We will create a systemd service file to keep the backend running in the background.

1.  **Create the service file:**
    ```bash
    sudo nano /etc/systemd/system/trustmed-backend.service
    ```

2.  **Paste the following configuration** 

    ```ini
    [Unit]
    Description=TrustMed FastAPI Backend Service
    After=network.target

    [Service]
    # Replace 'your-username' with your actual VM username
    User=<your-username>
    Group=<your-username>

    WorkingDirectory=/home/<your-username>/backend

    # Command to run the app using python 
    ExecStart=/home/<your-username>/backend/venv/bin/python3 trustmed_api.py

    # Restart automatically if the service crashes
    Restart=always

    [Install]
    WantedBy=multi-user.target
    ```

3.  **Start and Enable the Service:**

    ```bash
    # Reload systemd to recognize the new file
    sudo systemctl daemon-reload

    # Start the service
    sudo systemctl start trustmed-backend

    # Enable it to run on boot
    sudo systemctl enable trustmed-backend
    ```

4.  **Check Status:**
    ```bash
    sudo systemctl status trustmed-backend
    ```
    *You should see `Active: active (running)`.*

### 6. Firewall Rules (VM)
Ensure port 8000 is open on the GCP Firewall to allow the Frontend to communicate with it.


---

## Part 2: Frontend Deployment (Google Cloud Run)

The frontend uses Docker image and is deployed to a serverless Cloud Run environment.

### 1. Verify Dockerfile
The `Dockerfile` is present in the root of your frontend folder 

```dockerfile
# Note: While CMD is "npm run dev", for running the frontend application in the docker container
CMD ["npm", "run", "dev"]
```

### 2. Build and Push the Docker Image
You can use Google Cloud Build to build and push the image to Google Container Registry (GCR) or Artifact Registry without needing Docker running locally.


**Local Docker Build**
```bash

docker build -t gcr.io/PROJECT_ID/trustmed-frontend:v1 .

# Push to Google Artifact Registry
docker push gcr.io/PROJECT_ID/trustmed-frontend:v1
```

### 3. Deploy to Cloud Run
Deploy the container to Cloud Run, ensuring Port 3000 is exposed. This will give the URL for the frontend application.

```bash
gcloud run deploy trustmed-frontend \
    --image gcr.io/PROJECT_ID/trustmed-frontend:v1 \
    --platform managed \
    --region us-central1 \
    --port 3000 
```

* **`--port 3000`**: Tells Cloud Run the container listens on port 3000.


---

## Logging and Troubleshooting

| **Backend Logs** | VM Instance | `sudo journalctl -u trustmed-backend -f` | 
Frontend specific Readme file is present in /frontend folder
Backend Model implementation specific Readme file is present in /backend folder
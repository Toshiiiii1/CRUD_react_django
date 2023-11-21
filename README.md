
### A simple student management web application with CRUD operations developed in Django and React Js


## Project Setup
- Open terminal and verify python version
  ```sh
    python --version
    ```
- Verify if node and npm are installed
  ```sh
    node --version
    npm -version
    ```

## Setup Backend
- Navigate to cloned project directory
  ```sh
    cd CRUD_react_django
    ```
- Create a python virtual environment for backend
  ```sh
    python3 -m venv myvenv
    ```
- Activate the virtual environment
  ```sh
    source myvenv/bin/activate
    ```
- Install python libraries
  ```sh
   cd backend
   pip install -r requirements.txt
    ```
- Start Django server
  ```sh
   python manage.py runserver
    ```
- Django backend server will start on [http://localhost:8000/](http://localhost:8000/)

## Setup Frontend
- Open a new terminal and navigate to frontend directory
  ```sh
   cd CRUD_react_django/frontend/frontend
    ```
- Install frontend libraries using npm
  ```sh
   npm install
    ```
- Start Node server
  ```sh
   npm run dev
    ```
- Once node is started you can access the application on [http://localhost:5173/](http://localhost:5173/)

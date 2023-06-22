# Test Dago Engineering

## Database & Application
- npm install
- File **dago_engineering.sql** terdapat didalam folder **docs**
- Setting database dan aplikasi di file **.env**

## Running Project
- **npm run start**

## Endpoint
### Sign In
   - url : v1/signin
   - method : post
   - content-type : application/json
   - request : 
   ```
    {
	    "username": "donsal",
	    "password": "123456"
    }
   ```
   - response :
   ```
   {
	    "status": 200,
	    "message": "login successfully",
	    "data": {
		    "id": 1,
		    "name": "Doni Salmanan",
		    "email": "ds@gmail.com",
		    "phone": "083485739845",
		    "address": "bandung"
	    }
    }
   ```

### Sign Up
    - url : v1/signup
    - method : post
    - content-type : application/json
    - request : 
    ```
    {
        "name": "Indra Kenz",
        "email": "ik@gmail.com",
        "phone": "083485739846",
        "address": "medan",
        "username": "inken",
        "password": "123456"
    }
    ```
    - response :
    ```
    {
	    "status": 200,
	    "message": "sign up successfully",
	    "data": {
		    "name": "Ujang Sumantri",
		    "email": "us@gmail.com",
		    "phone": "083485739847",
		    "address": "jakarta"
	    }
    }
    ```

### Get All User
    - url : v1/users
    - method : get
    - response : 
    ```
    {
	    "status": 200,
	    "message": "user already exist",
	    "data": [
		    {
                "id": 1,
                "name": "Doni Salmanan",
                "email": "ds@gmail.com",
                "phone": "083485739845",
                "address": "bandung"
		    },
		    {
			    "id": 2,
			    "name": "Indra Kenz",
			    "email": "ik@gmail.com",
			    "phone": "083485739846",
			    "address": "medan"
		    }
	    ]
    }
    ```

### Get User By Id
    - url : v1/users/:id
    - method : get
    - response : 
    ```
    {
	    "status": 200,
	    "message": "user already exist",
	    "data": [
		    {
                "id": 1,
                "name": "Doni Salmanan",
                "email": "ds@gmail.com",
                "phone": "083485739845",
                "address": "bandung"
		    },
	    ]
    }
    ```

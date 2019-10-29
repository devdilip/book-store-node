## API Documentation

- ### Create User
In this api, we are checking empty email and password and user duplication after all checks we are sending the appropriate response.

    
	Method: POST
	Url: "/create/user"
	content-type: application/json
	body = {
        name: string ,
        email: string ,
        password: string
    }
	

- ### Login

In this api, we are matching a password with a stored hashing password. if password and email are correct then we are sending a jwt token for API call validation.

    
	Method: POST
	Url: "/login"
	content-type: application/json
	body = {
        email: string ,
        password: string
    }
	

- ### Add Book in Store
We can add a book in store using this API.

    
	Method: POST
	Url: "/store/add-book"
	Authorization: "Bearer jwt-token"
	content-type: application/json
	body = {
        title: string ,
        price: number,
		description: string
    }
	


- ### Get List Of Book

Ths api will give all book details from database.
    
	Method: GET
	Url: "/store/list-of-book"
	Authorization: "Bearer jwt-token"
	content-type: application/json
	



- ### Purchase Book

  This API will store the purchase collection with appropriate information.

	
	Method: GET
	Url: "/store/purchase/books?----params------"
	Authorization: "Bearer jwt-token"
	content-type: application/json
	params={
        book_id=<book_id>,
        email=<user_email>
    }
	
	





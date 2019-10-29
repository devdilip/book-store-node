## API Documentation

- ### Create User

-------------

    
	Method: POST
	Url: "/create/user"
	content-type: application/json
	body = {
        name: string ,
        email: string ,
        password: string
    }
	

- ### Login

-------------
    
	Method: POST
	Url: "/login"
	content-type: application/json
	body = {
        email: string ,
        password: string
    }
	

- ### Add Book in Store

-------------
    
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

-------------
    
	Method: GET
	Url: "/store/list-of-book"
	Authorization: "Bearer jwt-token"
	content-type: application/json
	

- ### Purchase Book

-------------
    
	Method: GET
	Url: "/store/purchase/books?----params------"
	Authorization: "Bearer jwt-token"
	content-type: application/json
	params={
        book_id=<book_id>,
        email=<user_email>
    }
	


# Babysitter Coding Challenge Back End

In order to fire up the server, please download the package and run 'npm install'

Then in the terminal run 'node index'

The api will be running on localhost:4000

# POST /api/payment

Make a post request to localhost:4000/api/payment with the following JSON format:

{
    "amount": (amount * 100),
    "id": id
}

The amount in the post request will need to be multiplied by 100 in order to be turned from a cent value into a dollar value for
Stripe's API.

The id will be a JSON value assigned from Stripes createPaymentMethod function within the front end, which is a random string
of characters that cannot be duplicated in postman or other testing platforms. 
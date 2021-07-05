// set up express object
const express = require('express');

// set up app object
const app = express();

// set up env config
require('dotenv').config();

// set up Stripe and require the test secret key from secrets.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

// Endpoints

// Create Stripe Payment Method

// Payment method needs to have an amount, a currncy set, and a payment method to function
// The amount and payment method will from from the front end via request body
// the description will show us on the Stripe dashboard where the payment went through
// if there is no error from the front end, the payment will create a payment intent and post to stripe
// if there is an error, the payment intent will not be created and will get rejected
app.post('/', async (req, res) => {
    let {amount, id} = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount, 
            currency: 'USD',
            description: 'babysitter fee',
            payment_method: id,
            confirm: true
        })
        console.log('Payment: ', payment);
        res.json({
            message: 'Payment successful.',
            success: true
        })
    } catch (error) {
        console.log('Payment Error: ', error);
        res.json({
            message: 'Payment failed',
            success: false
        })
    }
});

// export

module.exports = app;
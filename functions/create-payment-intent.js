// access this with url -> domain/.netlify/functions/create-payment-intent
require('dotenv').config()

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function(event,context){
  console.log("..................****************** event : ",event)
  console.log("..................****************** event : ",event.path)
  console.log("..................****************** event.httpMethod : ",event.httpMethod)
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body)
  console.log(cart)

  const calculateOrderAmount = () => {
    // here is where you call to your own API and iterate through each item in a cart and calculate total
    return shipping_fee + total_amount;
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'usd',
    })
    return {
      statusCode: 200,
      body: JSON.stringify({clientSecret:paymentIntent.client_secret})
    }
  } catch (error) {
    return {
      statusCode:200,
      body: "Create Payment Intent (using URL creates a GET, your need a POST)"
    }
  }
}
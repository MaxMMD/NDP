import { loadStripe } from "@stripe/stripe-js"
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IGP2SJfmnuXKifSlgny1PAVS1DmSW4yv0Ttn75q89lwwrVW7f17cVrtpVZi7vyYJKyhOsOzR98VbHnke7tSLQaZ00a3XMzAAX"
)

export async function handleGoToCheckout(
  event: React.MouseEvent<HTMLButtonElement>
) {
  event.preventDefault()
  // When the customer clicks on the button, redirect them to Checkout.
  const stripe = await stripePromise

  if (!stripe) {
    return
  }

  const { error } = await stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1IGP42JfmnuXKifS0nJDFXA1", // Replace with the ID of your price
        quantity: 1,
      },
    ],
    mode: "subscription",
    successUrl: "http://localhost:8000/?r=success",
    cancelUrl: "http://localhost:8000/?r=cancel",
  })

  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
  console.log(error)
}

import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I2LAhBe4diC8Nx0NuIUxdOJAJNbkN6BlmJ1fT0eyLR3emN2xbT2udmLmnkhTAO4ooq4DNta7r3P0rRoNUw27EcF00hkLlhbEh";

  const onToken = (token) => {
    console.log("token :", token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
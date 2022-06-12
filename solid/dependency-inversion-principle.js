/*
The dependency injection principle states that high level code should never depend on low level interfaces,
and should instead use abstractions. 
It’s all about decoupling code.
*/

// Example :

/*
The issue with below example is it's completely depends on paypal api's.
*/
class Checkout {
  processPayment(paymentDetails, amount) {
    const paymentSuccess = PayPal.makeRequest(paymentDetails, amount);
    if (paymentSuccess) {
      console.log("shopping successful");
    }
    console.warn("oops! something went wrong");
  }
}

// Solution //
class Checkout {
  processPayment(paymentDetails, amount) {
    const paymentSuccess = PaymentHandler.requestPayment(
      paymentDetails,
      amount
    );
    if (paymentSuccess) {
      console.log("shopping successful");
    }
    console.warn("oops! something went wrong");
  }
}

class PaymentHandler {
  makeRequest(paymentDetails, amount) {
    return PayPal.requestPayment(paymentDetails, amount);
  }
}

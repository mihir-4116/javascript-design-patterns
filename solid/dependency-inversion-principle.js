/*
The dependency injection principle states that high level code should never depend on low level interfaces,
and should instead use abstractions. 
It’s all about decoupling code.
*/

// Example :

/*
Let’s say we have a piece of software that runs an online store, and within that software one of the classes (PurchaseHandler) handles the final purchase. This class is capable of charging the user’s credit card, and does so by using a PayPal API:
*/

class PurchaseHandler {
    processPayment(paymentDetails, amount) {
        // Complicated, PayPal specific logic goes here
        const paymentSuccess = PayPal.requestPayment(paymentDetails, amount);

        if (paymentSuccess) {
            // Do something
            return true;
        }

        // Do something
        return false;
    }
}

/*
The problem here is that if we change from PayPal to Square (another payment processor) in 6 months time, this code breaks. We need to go back and swap out our PayPal API calls for Square API calls. But in addition, what if the Square API wants different types of data? Or perhaps it wants us to “stage” a payment first, and then to process it once staging has completed?

That’s bad, and so we need to abstract the functionality out instead.

Rather than directly call the PayPal API from our payment page, we’ll instead create another class called PaymentHandler. The interface for this class will remain the same no matter what underlying payment system we use, even if the two systems are completely different. We’ll still need to make changes to the PaymentHandler interface if we change payment processor, but our higher level interface remains unchanged
*/

class PurchaseHandler {
    processPayment(paymentDetails, amount) {
        const paymentSuccess = PaymentHandler.requestPayment(
            paymentDetails,
            amount
        );

        if (paymentSuccess) {
            // Do something
            return true;
        }

        // Do something
        return false;
    }
}

class PaymentHandler {
    requestPayment(paymentDetails, amount) {
        // Complicated, PayPal specific logic goes here
        return PayPal.requestPayment(paymentDetails, amount);
    }
}
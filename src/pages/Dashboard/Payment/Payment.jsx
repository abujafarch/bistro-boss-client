import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div className="mt-16">
            <div className='mb-12'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---Payment to eat---</h5>
                <h3 className='uppercase border-y-4 border-[#cecece] py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>PAYMENT</h3>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
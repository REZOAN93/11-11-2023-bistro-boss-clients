import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCards from "../../../Hooks/useCards";

const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY_KEY);

const Payment = () => {
    const axiosSecure = useAxiosSecure()
    const [cart] = useCards()
    const [clientSecret, setClientSecret] = useState("");
    const totalPrice = cart.reduce((total, items) => total + items.price, 0)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then((res) => setClientSecret(res.data.clientSecret));
    }, [axiosSecure, totalPrice]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <div className=" my-20">
            <SectionTitle heading="Payment" subheading="Please Pay"></SectionTitle>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};

export default Payment;
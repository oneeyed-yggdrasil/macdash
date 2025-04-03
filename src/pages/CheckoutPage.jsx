import { useState } from "react";
import AddressForm from "../components/AddressForm";
import PaymentOptions from "../components/PaymentOptions";

export default function CheckoutPage() {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
  });

  const [payment, setPayment] = useState("card");
  const [submitted, setSubmitted] = useState(false);

  const handlePlaceOrder = () => {
    if (!address.name || !address.street || !address.city || !address.zip) {
      alert("Please fill in your address");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    const trackingNumber = Math.floor(Math.random() * 1000000);
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Order Confirmed!
        </h1>
        <p>Thank you for your purchase. 🎉</p>
        <p className="mt-2">Tracking Number: <b>MAC-{trackingNumber}</b></p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <AddressForm address={address} setAddress={setAddress} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
        <PaymentOptions selected={payment} setSelected={setPayment} />
      </div>

      <div className="mt-6 text-lg">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <p>Items Total: $3000.00</p>
        <p>Shipping: Free</p>
        <p className="font-bold text-xl">Total: $3000.00</p>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Place Order
      </button>
    </div>
  );
}

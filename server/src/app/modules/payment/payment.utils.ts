import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const initiatePayment = async (paymentData: any) => {
  try {
    const response = await axios.post(process.env.PAYMENT_URL!, {
      store_id: process.env.STORE_ID,
      signature_key: process.env.SIGNATURE_KEY,
      tran_id: paymentData.transactionId,
      success_url: `http://localhost:8000/api/v1/payment/confirmation?transactionId=${paymentData.transactionId}&status=success`,
      fail_url: `http://localhost:8000/api/v1/payment/confirmation?status=failed`,
      cancel_url: "http://localhost:5173/",
      amount: paymentData.totalPrice,
      currency: "BDT",
      desc: "N/A",
      cus_name: paymentData.customerName,
      cus_email: paymentData.customerEmail,
      cus_add1: paymentData.customerAddress,
      cus_add2: "N/A",
      cus_city: "N/A",
      cus_state: "N/A",
      cus_postcode: "N/A",
      cus_country: "N/A",
      cus_phone: paymentData.customerPhone,
      type: "json",
    });

    return response.data;
  } catch (err) {
    throw new Error("Payment initiation failed!");
  }
};

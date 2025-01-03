"use client";

import axios from "axios";
import { useState } from "react";
import Confirmation from "../components/Confirmation";

export default function page() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    contact: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingConfirm, setBookingConfirm] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkAvailability = async () => {
    // console.log(formData);
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.PUBLIC_URL}/api/checkAvailability`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      console.log("This is data", data);
      setMessage(data.message);

    } catch (error) {
      console.error("Error checking availability:", error);
    }
    setIsLoading(false);
  };

  const submitBooking = async (e) => {
    // console.log(formData);
    e.preventDefault();
   

    if (!formData.date || !formData.time || !formData.name || !formData.contact || formData.guests <= 0) {
      setMessage("All fields are required!.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.PUBLIC_URL}/api/bookTable`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      console.log("This is data", data);
      setBookingConfirm(true);
      setMessage(data.message);
   

    } catch (error) {
      if (error.response?.status === 409) {
        setMessage("The selected time slot is already booked. Please choose another slot.");
      } else {
        setMessage("Error occured while booking. Try again...");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-lg flex flex-col items-center mx-16 md:text-3xl font-bold text-orange mb-3">Book Your table or check available Slots by date and time</h1>
      <h2>*Ensure all the fields must be correct.</h2>
      <form
        className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg space-y-4"
        onSubmit={submitBooking}
      >
        <div>
          <label className="block font-medium">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Guests:</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Contact:</label>
          <input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            pattern="^\d{10}$"
            title="Contact must be exactly 10 digits."
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <h2 className="flex flex-col items-center text-sm" >Check table availability by date and time. </h2>
        <button
          type="button"
          onClick={checkAvailability}
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 rounded-full"
        >
          {isLoading ? "Checking..." : "Check Availability"}
        </button>
        <h2 className="flex flex-col items-center text-sm">Book your table here...</h2>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 rounded-full"
          onClick={submitBooking}
        >
          {isLoading ? "Booking..." : "Book Table"}
        </button>
        {
          bookingConfirm === true && (
            <Confirmation
              name={formData.name}
              date={formData.date}
              time={formData.time}
              guests={formData.guests}
              contact={formData.contact}
              
            />
          )
        }

       
        {message && <p className="flex flex-col items-center mx-24 text-lg text-green-500">{message}</p>}


      </form>



    </div>
  );
}

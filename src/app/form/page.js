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
  const [availability, setAvailability] = useState(null);
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
      const response = await axios.post('http://localhost:3000/api/checkAvailability', formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      console.log("This is data", data);

      setAvailability(data.available);
    } catch (error) {
      console.error("Error checking availability:", error);
      setAvailability(null);
    }
    setIsLoading(false);
  };

  const submitBooking = async (e) => {
    // console.log(formData);
    e.preventDefault();

    // checking the validation of input
    if (!formData.date || !formData.time || !formData.name || !formData.contact || formData.guests <= 0) {
      setMessage("All fields are required!.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/bookTable', formData, {
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
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Restaurant Table Booking</h1>
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
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="button"
          onClick={checkAvailability}
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {isLoading ? "Checking..." : "Check Availability"}
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-500 text-white py-2 rounded"
          onClick={submitBooking}
        >
          {isLoading ? "Booking..." : "Book Table"}
        </button>
      </form>
      {availability !== null && (
        <p className="mt-4">
          {availability ? "Slot is available!" : "Slot is not available!"}
        </p>
      )}
      {message && <p className="mt-4 text-lg text-green-500">{message}</p>}
      {
        bookingConfirm === true && (
          <Confirmation />
        )
      }
    </div>
  );
}

// models/Booking.js
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

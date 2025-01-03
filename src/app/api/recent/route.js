import dbConnect from '../../lib/connectDB.js';
import Booking from '../../models/Booking.js';

export default async function GET(req) {
  try {

    await dbConnect();
    const booking = await Booking.find();
    return new Response(JSON.stringify({booking}), {
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server error', error: error.message }), {
      status: 500,
    })

  }
}

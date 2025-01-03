import dbConnect from '../../lib/connectDB.js';
import Booking from '../../models/Booking.js';

export async function POST(req) {
    try {

        const body = await req.json();
        const { date, time } = body;

        if (!date || !time) {
            return new Response(JSON.stringify({ message: 'Date and time are required' }), {
                status: 400,
            })

        }


        await dbConnect();

        const existingBooking = await Booking.findOne({ date, time });

        if(existingBooking){
            return new Response(JSON.stringify({ available: false, message: "Slot not available." }), {
                status: 200,
            })
        }
        // const isAvailable = !existingBooking;

        return new Response(JSON.stringify({ available: true, message: "Slot available." }), {
            status: 200,
        })

    } catch (error) {
        console.error('Error in checking availability:', error);
        return new Response(JSON.stringify({ message: 'Server error', error: error.message }), {
            status: 500,
        })

    }
}

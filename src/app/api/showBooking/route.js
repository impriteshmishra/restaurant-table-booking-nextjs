import dbConnect from '../../lib/connectDB.js';
import Booking from '../../models/Booking.js';

export async function POST(req) {

    try {

        const body = await req.json();
        const { date } = body;
        if (!date) {
            return new Response(JSON.stringify({ message: 'Date are required' }), {
                status: 400,
            })

        }
        await dbConnect();

        const selectedDate = new Date(date);
        const startOfDay = new Date(selectedDate.setUTCHours(0, 0, 0, 0));
        const endOfDay = new Date(selectedDate.setUTCHours(23, 59, 59, 999));

        // Query for bookings within the date range
        const bookings = await Booking.find({
            date: { $gte: startOfDay, $lte: endOfDay },
        });
        return new Response(JSON.stringify({ success: true, data: bookings }), {
            status: 200,
        })

    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 200,
        })
    }
}

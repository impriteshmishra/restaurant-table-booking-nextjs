import dbConnect from '../../lib/connectDB.js';
import Booking from '../../models/Booking';

    function generateCustomerId() {

    let upperChar = "ABCDEFGHIJKLMONOPQRSTUVWXYZ";
    let allNumbers = "0123456789";
    let Id = "";
    let allChars = "";

    allChars += upperChar;
    allChars += allNumbers;

    let i = 1;
    while (i <= 5) {
      Id += allChars.charAt(Math.floor(Math.random() * allChars.length));
      i++;
    }
    return Id;
  }

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, contact, date, time, guests } = body;


        if (!date || !time || !guests || !name || !contact) {
            return new Response(JSON.stringify({ message: 'All fields are required' }), {
                status: 400,
            });
        }

        await dbConnect();

        const uniqueCustomerId = generateCustomerId();

        const existingBooking = await Booking.findOne({ date, time });
        if (existingBooking) {
            return new Response(JSON.stringify({ message: 'Time slot is already booked, check another slot' }), {
                status: 409,
            });

        }
        else {
            const newBooking = new Booking({ name, contact, date, time, guests,customerId: uniqueCustomerId });
            await newBooking.save();

            return new Response(JSON.stringify({ message: 'Booking Successfull!', customerId: uniqueCustomerId }), {
                status: 201,
            })
        }

    } catch (error) {
        console.error('Error in booking:', error);
        return new Response(JSON.stringify({ message: 'Error in booking', error: error.message }), {
            status: 501,
        })
    }
}

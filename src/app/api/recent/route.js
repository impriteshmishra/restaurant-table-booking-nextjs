import { NextResponse } from 'next/server.js';
import dbConnect from '../../lib/connectDB.js';
import Booking from '../../models/Booking.js';


export async function GET(req) {

  try {
    await dbConnect();
    const items = await Booking.find().sort({ createdAt: -1 });
    
    return NextResponse.json({
      success:true,
      message:'items get successfully',
      data:items,
    })
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({
      success:false,
      message:'error while getting',
    },
  {
    status:500
  })
  }
}


"use client"


import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/recent'); // Replace with your API route
        const data = await response.json();

        console.log(data);

        if (data.success) {
          setBookings(data.data);
        } else {
          console.error('Failed to fetch bookings:', data.message);
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recent Bookings</h1>
      {bookings.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {bookings.map((booking) => (
              <li key={booking._id} className="p-4 border rounded shadow">
                <div className="relative p-2">
                  {/* <button className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-white hover:text-black">
                    Delete
                  </button> */}
                  <h2 className="text-lg font-semibold">{booking.name}</h2>
                  <p>Time: {booking.time}</p>
                  <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                  <p>Booked At: {new Date(booking.createdAt).toLocaleString()}</p>
                </div>


              </li>
            ))}
          </ul>
        </div>

      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}
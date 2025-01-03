"use client"

import { useEffect, useState } from "react";

export default function Recent() {
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("/api/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Booking Details</h1>
        {booking.length > 0 ? (
          <ul>
            {users.map((data) => (
              <li key={data.id}>
                <strong>{data.name}</strong> - {data.contact} - {data.guests} 
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
  );
}

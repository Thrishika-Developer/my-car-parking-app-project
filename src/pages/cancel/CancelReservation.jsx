import { useState } from 'react'
import './CancelReservation.css'
export default function CancelReservation({ bookings, onCancel }) {
    const [message, setMessage] = useState("")
    return (
        <div className='cancel_container'>
            <h1 className='cancel_title'>Cancel Reservation</h1>
            {message && <p className='success_message'>{message}</p>}
            <table className='cancel_table'>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Vehicle Number</th>
                        <th>Slots</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.customerName}</td>
                            <td>{booking.vehicleNumber}</td>
                            <td>{booking.parkingSlot}</td>
                            <td>{booking.bookingDate}</td>
                            <td><button className="cancel_btn"
                                onClick={() => {
                                    onCancel(booking);
                                    setMessage("Booking Cancelled Successfully!");
                                    setTimeout(() => setMessage(""), 3000);
                                }}>Cancel</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
import { useState } from 'react'
import './BookingHistory.css'
export default function BookingHistory({ bookings }) {
    const [searchName, setSearchName] = useState("")
    const [searchVehicle, setSearchVehicle] = useState("")

    const filteredBookings = bookings.filter(booking =>
        booking.customerName.toLowerCase().includes(searchName.toLowerCase()) &&
        booking.vehicleNumber.toLowerCase().includes(searchVehicle.toLowerCase())
    )
    return (
        <div className='history_container' >
            <h1 className='history_title'>Booking History</h1>
            <div className="search_container">
                <input type="text" placeholder='Seach by Customer Name' value={searchName} onChange={e => setSearchName(e.target.value)} />
                <input type="text" placeholder='Search by Vehicle Number' value={searchVehicle} onChange={e => setSearchVehicle(e.target.value)} />
            </div>
            <table className='history_table'>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Vehicle Number</th>
                        <th>Slot Number</th>
                        <th>Booking Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.customerName}</td>
                            <td>{booking.vehicleNumber}</td>
                            <td>{booking.parkingSlot}</td>
                            <td>{booking.bookingDate}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}
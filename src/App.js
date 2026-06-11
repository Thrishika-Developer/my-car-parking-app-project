import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Navbar from "./Navbar"
import Dashboard from "./pages/dashboard/Dashboard"
import ParkingSlots from './pages/slots/ParkingSlots'
import BookingParking from "./pages/book/BookingParking"
import BookingHistory from "./pages/history/BookingHistory"
import CancelReservation from "./pages/cancel/CancelReservation"

export default function App() {
    const [slots, setSlots] = useState([
        { id: 'P101', status: 'available' },
        { id: 'P102', status: 'available' },
        { id: 'P103', status: 'available' },
        { id: 'P104', status: 'available' },
        { id: 'P105', status: 'available' },

    ]);
    const [bookings, setBookings] = useState([])
    const handleBook = (formData) => {
        setSlots(slots.map(slot => slot.id === formData.parkingSlot
            ?
            { ...slot, status: "booked" }
            : slot));
        setBookings([...bookings, formData])
    }
    const handleCancel = (booking) => {
        setBookings(bookings.filter(b => b.parkingSlot !== booking.parkingSlot))
        setSlots(slots.map(slot => slot.id == booking.parkingSlot ? { ...slot, status: "available" } : slot))
    }
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard slots={slots} />} />
                <Route path="/slots" element={<ParkingSlots slots={slots} />} />
                <Route path="/book" element={<BookingParking slots={slots} onBook={handleBook} />} />
                <Route path="/history" element={<BookingHistory bookings={bookings} />} />
                <Route path="/cancel" element={<CancelReservation bookings={bookings} onCancel={handleCancel} />} />
            </Routes>
        </BrowserRouter>
    )
}
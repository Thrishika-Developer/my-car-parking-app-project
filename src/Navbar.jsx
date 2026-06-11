import { Link } from "react-router-dom";
import './Navbar.css'
import { FaParking } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2><FaParking />ParkZone</h2>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/slots">Parking Slots</Link>
            <Link to="/book">Book Parking</Link>
            <Link to="/history">Booking History</Link>
            <Link to="/cancel">Cancel Reservation</Link>
        </nav>
    )
}
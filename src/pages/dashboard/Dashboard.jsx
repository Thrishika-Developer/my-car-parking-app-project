import "./Dashboard.css"
export default function Dashboard({ slots }) {

    const totalSlots = slots.length;
    const bookedSlots = slots.filter(s => s.status === "booked").length;
    const availableSlots = totalSlots - bookedSlots;
    const occupancyRate = (bookedSlots / totalSlots) * 100;

    return <div className="dashboard_container">
        <h1 className="dashboard_title">Dashboard</h1>
        <div className="cards_wrapper">
            <div className="cards_container">
                <div className="card card_total">
                    <h3>Total Slots</h3>
                    <h2>{totalSlots}</h2>
                </div>
                <div className="card card_available">
                    <h3>Available Slots</h3>
                    <h2>{availableSlots}</h2>
                </div>
                <div className="card card_booked">
                    <h3>Booked Slots</h3>
                    <h2>{bookedSlots}</h2>
                </div>
                <div className="card card_occupancy">
                    <h3>Occupancy Rate</h3>
                    <h2>{occupancyRate}%</h2>
                </div>
            </div>
        </div>
    </div>
}
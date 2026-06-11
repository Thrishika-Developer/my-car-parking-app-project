import "./ParkingSlots.css"
export default function ParkingSlots({ slots }) {

    return <div className="slots_container">
        <h1 className="slots_title">Parking Slots</h1>
        <div className="slots_grid">
            {slots.map(slot => (<div key={slot.id} className={`slot ${slot.status}`}>
                <h3>{slot.id}</h3>
                <p className="status_badge">{slot.status}</p>
            </div>
            ))}
        </div>
    </div>

}
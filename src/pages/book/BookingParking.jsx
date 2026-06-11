import { useState } from 'react'
import './BookingParking.css'
export default function BookingParking({ slots, onBook }) {
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        customerName: "",
        vehicleNumber: "",
        mobileNumber: "",
        parkingSlot: "",
        bookingDate: "",
        entryTime: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            onBook(formData)
            setFormData({
                customerName: "",
                vehicleNumber: "",
                mobileNumber: "",
                parkingSlot: "",
                bookingDate: "",
                entryTime: "",
            })
            setErrors({})
        }
    }

    const validate = () => {
        const newErrors = {};
        if (formData.customerName.length < 3) {
            newErrors.customerName = "Minimum 3 characters required!"
        }

        if (!/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(formData.vehicleNumber)) {
            newErrors.vehicleNumber = "Enter valid vehicle number!(ex : TN09AB1234)"
        }
        if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = "Mobile number must be exactly 10 digits!"
        }
        if (formData.parkingSlot === "") {
            newErrors.parkingSlot = "Please select a slot!"
        }
        return newErrors;
    }


    return (
        <div className='book_container'>
            <h1 className='book_title'>Book Parking</h1>
            <div className="book_form_card">
                <form onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label>Customer Name</label>
                        <input type="text"
                            value={formData.customerName}
                            placeholder='Enter your name'
                            onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                            onBlur={() => {
                                if (formData.customerName.length < 3) {
                                    setErrors({ ...errors, customerName: "Minimum 3characters required!" })
                                }
                                else {
                                    setErrors({})
                                }
                            }} />
                        <p className='error'>{errors.customerName}</p>
                    </div>
                    <div className="form_group">
                        <label>Vehicle Number</label>
                        <input
                            type="text"
                            value={formData.vehicleNumber}
                            placeholder='Enter vehicle number'
                            onChange={e => setFormData({ ...formData, vehicleNumber: e.target.value })}
                            onBlur={() => {
                                if (!/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(formData.vehicleNumber)) {
                                    setErrors({ ...errors, vehicleNumber: "Enter valid vehicle number!(ex : TN09AB1234)" })
                                }
                                else {
                                    setErrors({})
                                }
                            }} />
                        <p className='error'>{errors.vehicleNumber}</p>
                    </div>
                    <div className='form_group'>
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            value={formData.mobileNumber}
                            placeholder='Enter your mobile number'
                            onChange={e => setFormData({ ...formData, mobileNumber: e.target.value })}
                            onBlur={() => {
                                if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
                                    setErrors({ ...errors, mobileNumber: "Mobile number must be exactly 10 digits!" })
                                }
                                else {
                                    setErrors({})
                                }
                            }} />
                        <p className='error'>{errors.mobileNumber}</p>
                    </div>
                    <div className="form_group">
                        <label>Parking Slots</label>
                        <select
                            value={formData.parkingSlot}
                            onChange={e => setFormData({ ...formData, parkingSlot: e.target.value })}
                            onBlur={() => {
                                if (formData.parkingSlot === "") {
                                    setErrors({ ...errors, parkingSlot: "Please select a slot!" })
                                }
                                else {
                                    setErrors({})
                                }
                            }}>
                            <option value="">Select slot</option>
                            {slots.filter(s => s.status === "available").map(slot => (
                                <option key={slot.id} value={slot.id}>{slot.id}</option>
                            ))}
                        </select>
                        <p className='error'>{errors.parkingSlot}</p>
                    </div>
                    <div className="form_group">
                        <label>Booking Date</label>
                        <input type="date" value={formData.bookingDate} onChange={e => setFormData({ ...formData, bookingDate: e.target.value })} />
                    </div>
                    <div className="form_group">
                        <label>Entry Time</label>
                        <input type="time" value={formData.entryTime} onChange={e => setFormData({ ...formData, entryTime: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit">Book Slot</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../ui/Input'

const timeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'];

export default function SimpleBookingForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    designation: '',
  });

  const formatDate = (date) =>
    date ? date.toISOString().split('T')[0] : '';

  useEffect(() => {
    if (selectedDate) {
      const dateKey = formatDate(selectedDate);
      const stored = JSON.parse(localStorage.getItem('bookedSlots') || '{}');
      const bookedForDate = stored[dateKey] || [];
      const available = timeSlots.filter(slot => !bookedForDate.includes(slot));
      setAvailableTimes(available);
      setSelectedTime('');
    }
  }, [selectedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateKey = formatDate(selectedDate);
    const stored = JSON.parse(localStorage.getItem('bookedSlots') || '{}');
    if (!stored[dateKey]) stored[dateKey] = [];
    stored[dateKey].push(selectedTime);
    localStorage.setItem('bookedSlots', JSON.stringify(stored));
    alert('Booking submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="p-6 bg-white shadow-2xl rounded-xl space-y-4">
      <h2 className="text-xl font-bold text-center mb-4">Book a Time Slot</h2>

      <label className="block font-medium">
        {!selectedDate ? "Select a Date" : `Selected Date is ${formatDate(selectedDate)}`}
      </label>

      {!selectedDate && (
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          minDate={new Date()}
          className="w-full p-2 border rounded"
          placeholderText="Choose a date"
          dateFormat="dd/MM/yy"
        />
      )}

      <label className="block font-medium mt-4">
        {selectedTime ? `Selected time is: ${selectedTime}` : "Select Time"}
      </label>

      {(selectedDate && selectedTime) ? null : (
        <div className="grid grid-cols-2 gap-2">
          {availableTimes.length > 0 ? (
            availableTimes.map(time => (
              <button
                key={time}
                type="button"
                className={`border p-2 rounded ${
                  selectedTime === time
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))
          ) : (
            <p className="col-span-2 text-red-600">No time slots available</p>
          )}
        </div>
      )}

      {selectedTime && (
        <form
          onSubmit={handleSubmit}
          className="space-y-3 pt-4"
        >
          <input type="hidden" name="date" value={formatDate(selectedDate)} />
          <input type="hidden" name="time" value={selectedTime} />

          <Input
            type="text"
            name="name"
            required
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <Input
            type="text"
            name="designation"
            required
            placeholder="Designation"
            value={formData.designation}
            onChange={e => setFormData({ ...formData, designation: e.target.value })}
          />
          <textarea
            name="message"
            required
            placeholder="Your message"
            className="w-full p-2 border rounded"
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Submit Booking
          </button>
        </form>
      )}
    </div>
  );
}

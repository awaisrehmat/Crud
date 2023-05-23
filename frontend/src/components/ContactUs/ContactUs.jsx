import React, { useState } from 'react';
import './ContactUsForm.css'; // Import the CSS file for styling

const ContactUsForm = () => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation

    // Save the data to MongoDB or perform other actions
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNumber);
    console.log('Message:', message);

    // Reset the form fields
    setEmail('');
    setMobileNumber('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">

      <label>
        Email:
        <input className='text-body' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input className='text-body' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Mobile Number:
        <input className='text-body' type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea className='text-body' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </label>
      <button className='submit-btn' type="submit">Submit</button>
    </form>
  );
};

export default ContactUsForm;

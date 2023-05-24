import React, { useEffect, useState } from 'react';
import './ContactUsForm.css'; // Import the CSS file for styling

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState(Number);
  const [messagebody, setMessageBody] = useState('');
  const [error, setError] = useState("");

  
    // Perform any necessary validation

    // Save the data to MongoDB or perform other actions
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Mobile Number:', mobileNumber);
    // console.log('Message:', messagebody);



    const handleSubmit = async (e) => {
            
      e.preventDefault();
      const Message = {name, email, mobileNumber, messagebody}

      const response = await fetch("http://localhost:4000/api/contactUs", {

      method:"POST",
      body: JSON.stringify(Message),
      headers: {
          "Content-type" : "application/json",
      }

      });

      const result = await response.json();
      if(!result.ok){
          console.log(result.error);
          setError(result.error)
      }
      if(result.ok){
          console.log(result);
          setName("");
          setEmail("");
          setMobileNumber(0);
          setMessageBody("");
          console.log("sb theek chl rha hy")
          window.alert("massege sent")
          // navigate("/all-posts");
      }

  }

//   useEffect(() => {

//     handleSubmit();

// }, []);

    // Reset the form fields

    // setEmail('');
    // setMobileNumber('');
    // setMessageBody('');
  

  return (
    <>
    
    {
                error && <div className='alert alert-danger'>
                    {error}
                </div>


            }
    

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
  <input className='text-body no-spin' type="number" inputmode="numeric" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
</label>
<label>
  Message:
  <textarea className='text-body' value={messagebody} onChange={(e) => setMessageBody(e.target.value)}></textarea>
</label>
<button className='submit-btn' type="submit">Submit</button>
</form>
    
    </>

  );
};

export default ContactUsForm;

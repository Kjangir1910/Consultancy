import React from "react";
import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    phone:''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev =>({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData)
    alert('Thank you for contacting us. We will get back to you')
    setFormData({name:'', email:'', phone:'' })
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <h2 className="mb-4 text-center">Contact Us</h2>
            <div className="mb-3">
              <p><strong>Email:</strong>example@consultancy.com</p>
              <p><strong>Phone:</strong>+91 1234567890</p>
              <p><strong>Address:</strong>Mansarovar, Jaipur</p>           
               </div>

               <h4 className="mt-4">Send us a message</h4>
               <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input 
                type="text" 
                className="form-control" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input 
                type="email" 
                className="form-control" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number:</label>
              <input 
                type="tel" 
                className="form-control" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>

               </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

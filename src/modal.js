import React, { useState } from 'react';
import './modal.css';


function Modal() {
    const [showModal, setShowModal] = useState(false);
  

    const openModal = () => {
        setShowModal(true);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.elements.email.value.trim();
        const phone = event.target.elements.phone.value.trim();
        const dob = event.target.elements.dob.value.trim();

        if (!isValidEmail(email)) {
            alert("Invalid email. Please check your email address.");
            return;
        }

        if (phone.length !== 10) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }

        if (new Date().getTime() - new Date(dob).getTime() < 0) {
            alert("Invalid date of birth. Date of birth cannot be in the future.");
            return;
        }

        alert("Form submitted successfully!");
        setShowModal(false);
    };

    return (
        <div className="container">
            <h1>User Details Modal</h1>
            <button onClick={openModal}>Open Form</button>
            {showModal && (
                <div className="modal" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Fill Details</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" required />
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" required />
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" />
                            <label htmlFor="dob">Date of Birth:</label>
                            <input type="date" id="dob" required />
                            <div className='btn'>
                                <button type="submit" className="submit-button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;

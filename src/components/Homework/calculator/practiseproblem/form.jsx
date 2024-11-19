import React, { useState } from 'react';
export default function Form()
 {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      setIsSubmitting(true); 
      const response = await fetch('https://www.greatfrontend.com/api/questions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert('Congratulations! Your message has been sent successfully.');
      } else {
        alert('There was an error with your submission. Please try again.');
      }
    
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
        </div>
        <div>
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div>
          Message:
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
            
          </button>
        </div>
      </form>
    </div>
  );
};


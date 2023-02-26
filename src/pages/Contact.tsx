import React from 'react';

interface ContactProps {
  name: string;
  email: string;
  message: string;
}

function Contact({ name, email, message }: ContactProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={message} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

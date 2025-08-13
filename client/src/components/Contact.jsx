import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Have a question or want to work together?</p>
      <form
        action="https://formspree.io/f/your_form_id" // Replace with your Formspree or form handler URL
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

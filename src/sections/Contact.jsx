import { useRef, useState } from 'react';
import './contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = () => {
    e.preventDefault();
    setSubmitted(true);

    if (formRef.current) {
      formRef.current.submit
      formRef.current.reset();
    }

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container" id='contact'>
      <div className="contact-heading-text">
        <h1>GET IN TOUCH</h1>
      </div>

      <form
        ref={formRef}
        action="https://formsubmit.co/abayomidannon10@gmail.com"
        method="POST"
        className="contact-form"
        onSubmit={handleSubmit}
        target="_blank"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name *"
          className="name-field"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email *"
          className="email-field"
          required
        />
        <textarea
          name="message"
          placeholder="Your message *"
          className="msg-field"
          required
        ></textarea>

        <div className="btn-container">
          <button type="submit" className="btn-send">
            Send it
          </button>
        </div>
      </form>

      {submitted && <p className="success-msg">Message sent! ✅</p>}
    </div>
  );
}

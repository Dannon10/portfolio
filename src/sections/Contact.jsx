import { useRef, useState } from 'react';
import './contact.css';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(formRef.current);
    formData.append('access_key', '72037115-139f-445d-b769-1f2f93f5d364');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Web3Forms error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-heading-text">
        <h1>GET IN TOUCH</h1>
      </div>

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn-send" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send it'}
          </button>
        </div>
      </form>

      {status === 'success' && <p className="success-msg">Message sent!</p>}
      {status === 'error' && <p className="error-msg">Something went wrong, try again.</p>}
    </div>
  );
}
import { useState, useEffect } from 'react'
import './footer.css';

export default function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = dateTime.toLocaleString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dannon10' },
    { label: 'Github', href: 'https://github.com/Dannon10' },
    {
      label: 'Whatsapp',
      href: 'https://wa.me/2348106624869?text=Hello%20Dannon%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!'
    },
    { label: 'Twitter', href: 'https://twitter.com/Dannon10' },
  ];

  return (
    <footer>
      <div className="foot">
        <div className="foot-text">
          <h4>2025 &copy; Edition.</h4>
          <div className="live-update">
            <p>{formatted}</p>
          </div>
        </div>

        <div className="socials">
          <h4>Socials</h4>
          <div className="social-link">
            {socials.map((item) => (
              <div className="social-links-wrapper" key={item.label}>
                <a href={item.href} className="social-links" target="_blank" rel="noopener noreferrer">
                  <span className="slide">
                    <span className="text">{item.label}</span>
                    <span className="text dub">{item.label}</span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

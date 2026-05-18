import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <div className="subscribe-form">
        <input 
          type="email" 
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </section>
  );
}
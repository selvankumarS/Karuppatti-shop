import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (name === "" || phone === "" || email === "") {
      alert("Ella details um fill pannunga");
    } else {
      alert(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`
      );

      // clear inputs
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div className="container">
    <div className="contact-container">
      <h2>Contact Us – Karuppatti Shop</h2>

      <label>  Name</label>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>  Phone</label>
      <input
        type="tel"
        placeholder="8870759044"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label>Gmail / Email</label>
      <input
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleClick}>Submit</button>
    </div>
    </div>
  );
}

export default Contact;
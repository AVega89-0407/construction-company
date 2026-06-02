import { useState } from "react";
import emailjs from "@emailjs/browser";
import NavButtons from "../ui/NavButtons";

export default function ContactStep({ answers, onBack }) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    try {
      await emailjs.send(
        "SERVICE_ID",
        "TEMPLATE_ID",
        {
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          message: contact.message,

          tjanst: answers.tjanst,
          fastighet: answers.fastighet,
          yta: answers.yta,
          standard: answers.standard,
          timing: answers.timing,
        },
        "PUBLIC_KEY"
      );

      alert("Tack! Din offertförfrågan har skickats.");
    } catch (error) {
      console.error(error);
      alert("Något gick fel.");
    }
  }

  return (
    <section className="step">
      <h2>Kontaktuppgifter</h2>

      <input
        type="text"
        name="name"
        placeholder="Namn"
        value={contact.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="E-post"
        value={contact.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Telefon"
        value={contact.phone}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Övrig information"
        value={contact.message}
        onChange={handleChange}
      />

      <NavButtons
        onBack={onBack}
        onNext={handleSubmit}
        nextLabel="Skicka offertförfrågan"
      />
    </section>
  );
}
import useContactForm from "../hooks/useContactForm";

Contact.route = {
  path: '/kontakt',
  label: 'Kontakt',
  index: 4
};

export default function Contact() {
  const { formData, handleChange, handleSubmit } = useContactForm();

    return (
      <>
        <section className="contact-card">
          <h2>Kontakta oss</h2>
          <p>Har du frågor eller behov av mer information? Fyll i formuläret nedan så kontaktar vi dig så snart som möjligt.</p>
          <form onSubmit={handleSubmit} >
            <label>Namn</label>
            <input value={formData.name} type="text" name="name" onChange={handleChange} required />
            <label>Email</label>
            <input value={formData.email} type="email" name="email" onChange={handleChange} required />
            <label>Meddelande</label>
            <textarea value={formData.message} name="message" placeholder="Berätta kort om ditt projekt..." onChange={handleChange} required></textarea>
            <button type="submit">Skicka</button>
          </form>
        </section>
      </>
    );
  }

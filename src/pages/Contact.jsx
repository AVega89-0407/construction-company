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
        <section className="widget">
          <h2>Kontakt</h2>
          <form onSubmit={handleSubmit} >
            <label>Namn</label>
            <input value={formData.name} type="text" name="name" onChange={handleChange} required />
            <label>Email</label>
            <input value={formData.email} type="email" name="email" onChange={handleChange} required />
            <label>Meddelande</label>
            <textarea value={formData.message} name="message" onChange={handleChange} required></textarea>
            <button type="submit">Skicka</button>
          </form>
        </section>
      </>
    );
  }

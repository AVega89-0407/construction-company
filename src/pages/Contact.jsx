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
        <section className="contact">
          <section className="map">
          <h2>Vårt kontor</h2>
          <p>Besök oss på vår adress eller ring oss för att boka ett möte.</p>
          <p><strong>Adress:</strong> Byggvägen 123, 123 45 Byggstad</p>
          <p><strong>Telefon:</strong> 012-345 6789</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2056.0352793743828!2d17.881950576405902!3d58.981118138845396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f678cd6816fff%3A0xe7660d1ba219b5eb!2zSHVnaW5zIHbDpGcgOSwgMTQ4IDMzIMOWc21v!5e0!3m2!1ssv!2sse!4v1776280809159!5m2!1ssv!2sse" width="600" height="450" title="Karta till vårt kontor" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>
          
        <section className="contact-card">
          <h2>Kontakta oss</h2>
          <p>Har du frågor eller behov av mer information? Fyll i formuläret nedan så kontaktar vi dig så snart som möjligt.</p>
          <form onSubmit={handleSubmit} >
            <label>Namn:</label>
            <input value={formData.name} type="text" name="name" placeholder="Namn" onChange={handleChange} required />
            <label>Email:</label>
            <input value={formData.email} type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <label>Meddelande:</label>
            <textarea value={formData.message} name="message" placeholder="Berätta kort om ditt projekt..." onChange={handleChange} required></textarea>
            <button type="submit">Skicka</button>
          </form>
        </section>
        </section>
      </>
    );
  }

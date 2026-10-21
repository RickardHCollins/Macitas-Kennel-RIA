import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Kontakt() {
  return (
    <>
      <Header />
      <main>
        <h1>Kontakta oss</h1>
        <div className="contact-wrapper">
          <form action="mailto:rickard@exempel.se" method="post" encType="text/plain" className="contact-form">
            <label htmlFor="fname">Namn:</label>
            <input type="text" id="fname" name="name" required placeholder="Ditt namn" />

            <label htmlFor="email">E-post:</label>
            <input type="email" id="email" name="email" required placeholder="Din e-post" />

            <label htmlFor="subject">Ärende:</label>
            <textarea id="subject" name="message" style={{ height: '150px' }} placeholder="Skriv ditt meddelande..."></textarea>

            <input type="submit" value="Skicka" />
          </form>

          <div id="contact-info" className="contact-details">
            <h2>Kontaktuppgifter</h2>
            <p>Telefon: 070-123 45 67</p>
            <p>E-post: info@macitas.se</p>
            <p>Adress: Kennelstigen 1, 123 45 Skogsby</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
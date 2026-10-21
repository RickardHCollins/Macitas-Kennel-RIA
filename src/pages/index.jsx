import { Component } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="hero">
            <video controls poster="image.png">
              <source src="labradoodle.mp4" type="video/mp4" />
              Din webbläsare stödjer inte videoelementet.
            </video>
            <h1>Välkommen till Macita's Kennel</h1>
          </section>

          <div className="info-container">
            <section className="info-card">
              <h2>Nyheter</h2>
              <p>Vår senaste kull efter Brasse har nu flyttat till sina nya hem. Vi planerar nästa parning under våren 2026.</p>
            </section>
            <section className="info-card">
              <h2>Valpar</h2>
              <p>Är du intresserad av en valp från oss? Läs mer om våra krav på valpköpare under "Om oss" eller kontakta oss direkt.</p>
            </section>
            <section className="info-card">
              <h2>Om oss</h2>
              <p>Vi finns i en naturnära miljö där våra hundar får utlopp för sin naturliga arbetsvilja och energi.</p>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
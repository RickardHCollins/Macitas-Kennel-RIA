import { Component, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function RandomDog() {
  const dogs = [
    { name: "Brasse", img: "brasse.jpeg", desc: "Trygg och stabil hane som älskar apportering." },
    { name: "Boss", img: "Boss.jpg", desc: "Vår yngsta förmåga, tränas aktivt i viltspår." },
    { name: "Jasmine", img: "JasmineNoir.jpeg", desc: "Svart tik med bruna anlag. Född 2016." }
  ];

  const [currentDog, setCurrentDog] = useState(dogs[0]);

  const pickRandomDog = () => {
    const availableDogs = dogs.filter(dog => dog.name !== currentDog.name);
    
    const randomIndex = Math.floor(Math.random() * availableDogs.length);
    
    setCurrentDog(availableDogs[randomIndex]);
  };

  return (
    <div className="featured-dog-section">
      <h2>Bekanta dig med en av våra hundar</h2>
      <div id="random-dog-container">
        <img src={currentDog.img} alt={currentDog.name} className="random-dog-img" />
        <div>
          <h3>{currentDog.name}</h3>
          <p>{currentDog.desc}</p>
          <button className="js-btn" onClick={pickRandomDog}>
            Slumpa ny hund
          </button>
        </div>
      </div>
    </div>
  );
}

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

          {}
          <RandomDog />

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
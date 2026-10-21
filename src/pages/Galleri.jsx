import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Galleri() {
  return (
    <>
      <Header />
      <main>
        <h1>Galleri</h1>
        <p>Här kan du se bilder från vår vardag på kenneln.</p>
        
        <ul className="gallery-info">
          <li>Träning och jakt</li>
          <li>Tävlingar</li>
          <li>Allmänna bilder</li>
        </ul>

        <div className="gallery-grid">
          <img src="g1.jpg" alt="Labrador som hämtar en kråka" />
          <img src="g2.jpg" alt="Labradorerna Bailey och Higgins" />
          <img src="g3.jpg" alt="Vinnande labradorer" />
          <img src="g4.jpg" alt="Hund som flämtar i värmen" />
          <img src="g1.jpg" alt="Labrador hämtar kråka igen" />
          <img src="g2.jpg" alt="Bailey och Higgins igen" />
          <img src="g3.jpg" alt="Vinnare igen" />
          <img src="g4.jpg" alt="Hund flämtar igen" />
          <img src="g1.jpg" alt="Hund med kråka kopia" />
          <img src="g2.jpg" alt="Hundar som kollar kopia" />
          <img src="g3.jpg" alt="Vinnare kopia" />
          <img src="g4.jpg" alt="Flämtande hund kopia" />
        </div>
      </main>
      <Footer />
    </>
  );
}
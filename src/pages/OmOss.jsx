import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function OmOss() {
  return (
    <>
      <Header />
      <main className="text-content">
        <h1>Om oss</h1>
        <p>Macita's Kennel startades med en vision om att föda upp sunda, arbetsglada och rastypiska labradorer. Vi tror på att hälsa och mentalitet går hand i hand.</p>
        <p>Våra hundar lever med oss som familjemedlemmar och får följa med på allt vi gör. Vi lägger stor vikt vid att matcha rätt valp med rätt köpare för att säkerställa ett livslångt och lyckligt samarbete.</p>
      </main>
      <Footer />
    </>
  );
}
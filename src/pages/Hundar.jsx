import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Hundar() {
  return (
    <>
      <Header />
      <main>
        <h1>Våra Hundar</h1>
        <div className="dog-grid">
          <section className="dog-card">
            <img src="brasse.jpeg" alt="Svart labrador hane vid namn Brasse" className="dog-img" />
            <h2>"Brasse"</h2>
            <p>En trygg och stabil hane som älskar apportering och skogspromenader. Han är en viktig del av vår avel.</p>
            <table>
              <tbody>
                <tr><th>Undersökning</th><th>Resultat</th></tr>
                <tr><td>Höfter (HD)</td><td>Grad A</td></tr>
                <tr><td>Armbågar (ED)</td><td>0 (ua)</td></tr>
              </tbody>
            </table>
          </section>

          <section className="dog-card">
            <img src="Boss.jpg" alt="Svart labrador hane vid namn Boss" className="dog-img" />
            <h2>"Boss"</h2>
            <p>Boss är vår yngsta förmåga, med mycket energi och ett hjärta av guld. Han tränas aktivt i viltspår.</p>
            <table>
              <tbody>
                <tr><th>Undersökning</th><th>Resultat</th></tr>
                <tr><td>Höfter (HD)</td><td>Grad B</td></tr>
                <tr><td>Armbågar (ED)</td><td>0 (ua)</td></tr>
              </tbody>
            </table>
          </section>

          <section className="dog-card">
            <img src="JasmineNoir.jpeg" alt="Svart labrador tik Jasmine Noir" className="dog-img" />
            <h2>"Jasmine"</h2>
            <p><strong>Jasmine Noir</strong> (Svart tik m. bruna anlag)<br />
            SE57290/2016 | Född: 2016-10-25</p>
            <table>
              <tbody>
                <tr><th>Undersökning</th><th>Resultat</th></tr>
                <tr><td>Höfter (HD)</td><td>Grad B</td></tr>
                <tr><td>Armbågar (ED)</td><td>0/0 (clear)</td></tr>
                <tr><td>Ögon</td><td>Clear/UA (2022-12-08)</td></tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
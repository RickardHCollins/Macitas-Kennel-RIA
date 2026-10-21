export function Hundar() {
    return (
      <main>
        <h1>Våra Hundar</h1>
        <div className="dog-grid">
          <section className="dog-card">
            <img src="brasse.jpeg" alt="Svart labrador hane vid namn Brasse" className="dog-img" />
            <h2>"Brasse"</h2>
            <p>En trygg och stabil hane som älskar apportering och skogspromenader.</p>
            <table>
              <tbody>
                <tr><th>Undersökning</th><th>Resultat</th></tr>
                <tr><td>Höfter (HD)</td><td>Grad A</td></tr>
                <tr><td>Armbågar (ED)</td><td>0 (ua)</td></tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    );
  }
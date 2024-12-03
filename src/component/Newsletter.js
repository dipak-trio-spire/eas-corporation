import Link  from 'next/link';
export default function Newsletter() {
    return (
      <section className="news-latter">
        <div className="container">
          <div className="ns-latter">
            <div className="ns-content">
              <div className="ns-title">
                <h2>Termin vereinbaren</h2>
                <p>Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz oder <br/>
                einem persönlichen Termin vor.</p>
              </div>
              <Link href="/kontakt" aria-label="">VEREINBAREN SIE EINEN TERMIN</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
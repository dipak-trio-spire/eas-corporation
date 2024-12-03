import Image from 'next/image';
import Link from 'next/link';
import img1 from "../../public/img/s-1.svg"
import img2 from "../../public/img/s-2.svg"
import img3 from "../../public/img/s-3.svg"
import img4 from "../../public/img/s-4.svg"
import img5 from "../../public/img/s-5.svg"

const services = [
  {
    imgSrc: img1,
    text: 'Produkt des Kunden wird zur zentralen Organisationseinheit',
    hoverText: 'Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz vor',
  },
  {
    imgSrc:img2,
    text: 'Vollumfängliche Transparenz in „Realtime“ über alle Daten und alle relevanten Einflussgrößen des Produktes; von der Einzelteil-Ebene bis zum Gesamtprodukt',
    hoverText: 'Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz vor',
  },
  {
    imgSrc: img3,
    text: 'Durchgängiges Monitoring des gesamten Produkt-Entwicklungsprozesses bis zur Serienfertigung',
    hoverText: 'Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz vor',
  },
  {
    imgSrc: img4,
    text: 'Software von EAS durchforstet mit virtuellen, auf Basis neuronaler künstlicher Intelligenz (NKI) programmierten Agenten,alle im Unternehmen und im World Wide Web vorhandenen Datenbanken und identifiziert alle produktrelevanten Daten.',
    hoverText: 'Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz vor',
  },
  {
    imgSrc: img5,
    text: 'Aufbereitung und Strukturierung der Daten nach allen relevanten Themengebieten auf allen bestehenden Ebenen (Bauteil, Stückliste, Baugruppe, Gesamtprodukt, Organisationseinheit) durch das EAS-Dashboard®',
    hoverText: 'Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz vor',
  },
  {
    imgSrc: img1,
    text: 'Produkt des Kunden wird zur zentralen Organisationseinheit',
    hoverText: 'Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz vor',
  }
];

export default function ServiceSection() {
  return (
    <>
    <section className="service py">
      <div className="container">
        <div className="service-wrapper">
          <div className="com-title">
            <span>WAS WIR BIETEN</span>
            <h2>Leistungsbeschreibung EAS Cockpit</h2>
          </div>
          <div className="service-boxs">
            {services.map((service, index) => (
              <div className="service-box" key={index}>
                <div className="service-img">
                  <Image src={service.imgSrc} alt="service image" width={100} height={100} />
                </div>
                <div className="service-text">
                  <p>{service.text}</p>
                </div>
                <div className="service-hover">
                  <p>{service.hoverText}</p>
                  <Link href="/kontakt" aria-label="">VEREINBAREN SIE EINEN TERMIN</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
}


import Image from "next/image";
import productBG from "../../../public/img/portfolio-bg.jpeg";
import product1 from "../../../public/img/portfolio-bg2.jpeg";
import pr1 from "../../../public/img/pr-1.jpg";
import pr12 from "../../../public/img/12.jpg";
import pr2 from "../../../public/img/portfolio-bg4.jpg";
import product2 from "../../../public/img/portfolio-bg3.jpeg";
import Portfolio_Caraousel from "@/component/Portfolio_Caraousel";
import Link from "next/link";
import Newsletter from "@/component/Newsletter";

const page = () => {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={productBG} alt="hero" />
          </div>
          <div className="hero-content">
            <h1>PRODUKT UND LEISTUNGS-PORTFOLIO </h1>
          </div>
        </div>
      </section>

      <section className="section product-dec py py-b">
        <div className="container">
          <div className="product-dec-wrapper py">
            <div className="com-title">
              <span> KAPITEL : 1 </span>
              <h2>TECHNISCHER LÖSUNGSANSATZ</h2>
            </div>
            
            <div className="product-title">
              <p>
                <strong>
                  A) In der heutigen technologischen Landschaft sind die Verwendung künstlicher Intelligenz (KI) und neuronaler Netzwerke von zentraler Bedeutung, da diese die Voraussetzung für den zeitgemäßen Abbau von organisatorischen Hürden und Schnittstellen darstellen. 
              </strong>
             </p>

             <ul>
                <li>Es werden digitale EAS-KI-Agenten® eingesetzt, welche unterschiedliche Aufgaben zu lösen haben (z.B. Projekt-Agent, Einkaufsagent, Qualitäts-Agent, Duplikats-Agent uvm.)</li>
                <li>Die Agenten sind darauf ausgerichtet, effizient und präzise zu arbeiten, um die gewünschten Ergebnisse zu erzielen</li>
                <li>Die EAS-KI-Agenten® kommunizieren selbstständig und permanent im EAS-Neuronal-Netzwerk® untereinander</li>
              </ul>
            </div>
            <div className="product-img">
              <Image src={product1} alt="product image" />
            </div>
            <div className="product-title">
            <p>
                <strong>
                B) Dabei sind folgende Aufgabenstellungen im neuronalen Netzwerk umzusetzen: 
              </strong>
             </p>
             <ul>
                <li>Darstellung / Vergleiche verschiedener Zustände aus der Vergangenheit und die Entwicklung über den Zeitablauf hinweg</li>
                <li>Plan-/ Ist-Vergleiche</li>
                <li>Reifegradspiegel (z.B. 53% Stand bei der Datenpflege, Voraussichtlicher Ist-Preis ggü. Contract-Price oder Target-Preis uvm.)</li>
                <li>Präzise Simulationen für Prognosen, Szenarien, Sensitivitätsanalysen und Stresstests von Änderungen von Einflussgrößen des Produktes (wie z.B. Währungsentwicklung,    Rohstoffpreis-Veränderungen, Teuerungszuschläge etc.)</li>
              </ul>

              <div className="dami-text">
              <p>
              Die EAS-Lösungen können durch die Verwendung fortschrittlicher Algorithmen und „Machine-Learning-Technologies“ komplexe Zusammenhänge erkennen und prognostizieren, um ihr Unternehmen, ihre Geschäftsbereiche, Produkte, Projekt, Baugruppen und Teile optimal zu planen und zu steuern. Damit schafft EAS die Basis für fundierte Entscheidungen auf der Grundlage objektiver Echt-Daten des Ist-Zustands. Insgesamt zeigt die Vision von KI-Agenten, die kooperativ und intelligent agieren, um komplexe Aufgaben zu bewältigen, ungeahnte und nicht überschaubare Potenziale. Die Symbiose von KI, neuronalen Netzwerken und Big-Data Analysen gibt es nur in den EAS Lösungen.
              </p>
              </div>

            </div>
             
            <div className="product-blog">
              <p>
              Ein neuronales Netzwerk ist ein Modell, das dem menschlichen Gehirn nachempfunden ist. Es besteht aus Schichten von Neuronen, die miteinander verbunden sind. Diese Schichten verarbeiten Informationen und lernen aus den bereitgestellten Daten. Mathematische Operationen und Lernalgorithmen ermöglichen es dem Netzwerk, komplexe Muster und Zusammenhänge in den Daten zu erkennen und zu verstehen. Ähnlich wie Ameisen in einer Kolonie müssen die KI-Agenten effizient miteinander kommunizieren. Dies kann über digitale Signale, Nachrichtenübertragung oder andere Mechanismen erfolgen. Die transparente Informationsübertragung zwischen den Agenten ist entscheidend, um die Gesamtleistung des Systems zu optimieren.
              </p>
              <Portfolio_Caraousel/>
            </div>
            <div className="product-title">
              <p>
                <strong>
             C) EAS KI-AGENTEN® kommunizieren selbstständig und permanent im lernenden EAS NEURONALEN NETZWERK® untereinander : 
              </strong>
             </p>
              <ul>
                <li>
                verschiedene Zustände aus der Vergangenheit und die Entwicklung über den Zeitablauf hinweg
                </li>
                <li>Plan-/ Ist-Vergleiche</li>
                <li>
                  Reifegradspiegel (z.B. 53% Stand Datenpflege,
                  Voraussichtlicher Ist-Preis ist heute 3,7% über Target-Preis
                  uvm.)
                </li>
                <li>
                Präzise Simulationen für Prognosen, Szenarien, Sensitivitätsanalysen und Stresstests von Änderungen von Einflussgrößen des Produktes (wie z.B. Währungsentwicklung, Rohstoffpreisveränderungen)
                </li>
              </ul>
              <div className="dami-text">
              <p>
              Die EAS-Lösungen können durch die Verwendung fortschrittlicher Algorithmen und „Machine-Learning-Technologies“ komplexe Zusammenhänge erkennen und prognostizieren, um Ihre Projekte und Produkte optimal zu planen und zu steuern. Das ist wiederum die Voraussetzung um fundierte Entscheidungen auf Basis objektiver Ist-Daten zu treffen. Insgesamt zeigt die Vision von KI-Agenten, die kooperativ und intelligent agieren, um komplexe Aufgaben zu bewältigen, großes Potenzial.
              </p>
              </div>
            </div>
            <div className="unter-analy-box product-analy-box">
              <div className="com-title">
                <span> KAPITEL : 2 </span>
                <h2>USER INTERFACE AND DASHBOARD </h2>
              </div>
              <div className="product-texts">
                <div className="pr-text">
                  <p>Das Dashboard bietet zwei Analyse-Ebenen: </p>

                  <ul>
                    <li>Geschäftsebene :</li>
                  </ul>
                  <p>
                  Auf Geschäftsebene ermöglicht das Dashboard eine umfassende Bewertung der gesamten Unternehmenssituation, indem es alle relevanten Daten von verschiedenen der Einzelteile, Baugruppen, Produkte pro Geschäftsbereich, Segment, Business Unit zusammenführt und aggregiert. Es können gezielt organisatorische Einheiten identifiziert werden, die nicht optimal bzw. ausreichend funktionieren. Hier ermöglicht die Software eine Visualisierung aller denkbaren Ebenen des Unternehmens.
                  {" "}
                  </p>
                </div>
                <div className="pr-text">
                <ul>
                  <li>Prozessebene :</li>
                </ul>
                <p>
                Auf Prozessebene ermöglicht die EAS-Cockpit Software eine detaillierte Analyse bis auf Einzelprozessebene und ist auch hier in der Lage, ablauftechnische Defizite herauszuarbeiten.<br/>
                Beide Analyse-Perspektiven schaffen für das Top-Management die Voraussetzungen, schnell Schwachstellen identifizieren und zielgerichtet eliminieren zu können. 

                </p>
              </div>
              </div>
                <Image src={pr1} className="interface_image" alt="product analy" />
            </div>
            <div className="product-line">
              <div className="com-title">
                <span> KAPITEL : 3 </span>
                <h2>ENTWICKLUNG EAS SOFTWARE UND DASHBOARD </h2>
              </div>
              <div className="analytics-text">
                <p>
                Bei den Herstellern besteht zunehmend die Notwendigkeit, die Gewinnmarge der eigenen Produktpalette sicherstellen zu können. Mit diversen Analysen kann eindeutig nachgewiesen werden, dass das für das (Neu-) Produkt vorgesehene Material und die Vorprodukte unvorhersehbaren Einflüssen und damit Risiken unterliegen, die sich häufig schon auf das wirtschaftliche Produktergebnis auswirken, bevor das Produkt in Serie ist.
                </p>
                <p>EAS sieht das Produkt- & Leistungsspektrum und das Portfolio des Unternehmens als elementarste Unternehmensgröße an und fokussiert sich aus diesem Grund ausschließlich auf diese Betrachtungsperspektive 
                </p>
                <Image src={product2} alt="product blog" />
                <p>
                  <strong>
                  Die Wirtschaftskrisen und Phasen der extremen Abkühlung (2009, 2012, 2019 und 2020) haben in immer kürzer werdenden Abständen die Unternehmenslandschaft existenziell belastet. Viele Produktportfolios sind flächendeckend nicht mehr wirtschaftlich und sichern somit nicht mehr die Existenz des Unternehmens ab 
                  </strong>
                </p>
              </div>
            </div>

            <div className="product-line">
              <div className="com-title">
                <span> KAPITEL : 4 </span>
                <h2>DEFIZITE AKTUELLER MARKTLÖSUNGEN </h2>
              </div>
              <div className="pr-blog-boxs">
                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Fehlender Produkt- / Projektbezug Einzelkomponenten</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      Bestehende Lösungen bilden die Einzelbauteilebene ab; der
                      Bezug zum Produkt ist nicht vorhanden.
                    </p>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Nur isolierte Lösungen einzelner Prozessschritte (z.B. Einkauf)</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      Die eingesetzte Software bietet nur Lösungen für einzelne
                      Prozesschritte des mehrstufigen Projekteinkaufsprozesses,
                      was eine vollumfängliche Digitalisierung und schnelle
                      Reaktionen in kritischen Phasen erschwert.
                    </p>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Daten verlassen das Unternehmen</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      Hochsensible Einkaufsdaten müssen durch den Anwender auf
                      teilweise cloudbasierten Servern (China) an die
                      Dienstleister übertragen werden.
                    </p>
                  </div>
                </div>
              </div>
              {/* <Image src={pr2} alt="product blog" /> */}
            </div>
            <div className="product-line">
              <div className="com-title">
                <span> KAPITEL : 5 </span>
                <h2>INTEGRATIION KUNDENSYSTEME</h2>
                <Image src={pr12} alt="product blog" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Newsletter/>
    </>
  );
};

export default page;

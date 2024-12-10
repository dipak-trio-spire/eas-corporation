import unterBG from "../../../public/img/unter-bg.jpeg";
import unter1 from "../../../public/img/unter-1.png";
import unter2 from "../../../public/img/unter-2.png";
import unter3 from "../../../public/img/unter-3.png";
import unter4 from "../../../public/img/unter-4.png";
import unter5 from "../../../public/img/unter-5.png";
import unter6 from "../../../public/img/unter-6.png";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/component/Newsletter";

const page = () => {
  return (
    <>
    <section className="hero-banner">
        <div className="hero-wrapper">
            <div className="hero-img">
                <Image src={unterBG} alt="hero"/>
            </div>
            <div className="hero-content">
                <h1>ENTWICKLUNG IN DEN UNTERNEHMEN </h1>
            </div>
        </div>
    </section>
    <div className="unter-analytes py py-b">
        <section className="unter-analy py py-b">
            <div className="container">
                <div className="analytics-wrapper">
                    <div className="com-title">
                        <span> WER WIR ALS UNTERNEHMEN SIND </span>
                        <h2>Komplexität nimmt an allen Stellen überproportional und weitergehend zu </h2>
                    </div>
                    <div className="unter-analy-box">
                        <ul>
                            <li>Marktanforderungen (Innovation, KI, politische Anforderungen, Umwelt,
                                Nachhaltigkeit)
                            </li>
                            <li>Steigende Produktkomplexität und Variantenvielfalt bei kürzeren Produktlebens- und Innovations-Zyklen</li>
                            <li>Immer mehr unvorhersehbare und unkalkulierbare Einflussgrößen mit Wechselwirkungen
                                in
                                der Wertschöpfungskette und im Stakeholder-Netzwerk</li>
                            <li>Permanent wechselnde Rahmenbedingungen</li>
                            <li>Abschätzung und Antizipierung von künftigen Serienpreisen von Beschaffungsumfängen
                                zunehmend schwieriger</li>
                        </ul>
                        <Image src={unter1} alt="unter image"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="unter-analy py py-b">
            <div className="container">
                <div className="analytics-wrapper">
                    <div className="com-title">
                        <span> RESSOURCENVERBRAUCH </span>
                        <h2>Der Ressourcenverbrauch steigt in allen Unternehmensbereichen, über die gesamte Wertschöpfungskette hinweg und auch im Stakeholder-Netzwerk</h2>
                    </div>
                    <div className="unter-analy-box">
                        <div className="analytics-text">
                            <p>Volumen an Daten, Anzahl an IT-Systeme</p>
                        </div>
                        <div className="analytics-text">
                            <p>Anzahl und Umfang an Organisationseinheiten - vor allem in den „indirekten Bereichen“ nimmt stetig zu</p>
                        </div>
                        <div className="analytics-text">
                            <p>Administrationsaufwand steigt überproportional</p>
                        </div>
                        <div className="analytics-text">
                            <p>Anzahl an „Dupletten“, Redundanzen und Fehlerpotenzial nimmt spürbar zu (z.B. Standardkomponente wird mit unterschiedlichen Artikelnummern in verschiedenen Systemen verwaltet)</p>
                        </div>
                        <div className="unter-img">
                        <Image src={unter2} alt="unter image"/>
                        <Image src={unter3} alt="unter image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="unter-analy py">
            <div className="container">
                <div className="analytics-wrapper py py-b">
                    <div className="com-title">
                        <span> VERBRAUCH </span>
                        <h2>Entscheidungen in komplexen Organisationseinheiten mit vielen Ebenen, Prozessen und
                            Schnittstellen, werden auf Grundlage unvollständiger, falscher und manchmal
                            widersprüchlicher
                            Informationen getroffen</h2>
                    </div>
                    <div className="unter-analy-box">
                    <div className="analytics-text">
                            <p>Objektivierte Subjektivität“ als Entscheidungsgrundlage produktwirtschaftlicher Überlegungen</p>
                        </div>
                        <div className="analytics-text">
                            <p>Entscheidungszeiten und Abstimmungsschleifen werden immer länger bzw. größer</p>
                        </div>
                        <div className="analytics-text">
                            <p>Es stehen nie alle möglichen Alternativen “sauber bewertet“ als Entscheidungsgrundlage zur Verfügung</p>
                        </div>
                        <Image src={unter4} alt="unter image"/>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <section className="unter-about py">
        <div className="container">
            <div className="unter-about-wrapper">
                <div className="unter-about-title">AUSWIRKUNGEN DER GENANNTEN ENTWICKLUNG IN UNTERNEHMEN </div>
                <div className="unter-about-boxs">
                    <div className="unter-about-box">
                        <div className="unter-about-no">
                            01
                        </div>
                        <div className="unter-about-text">
                            <p>Die Gewinnmarge erodiert im Zeitablauf und kann bis zu Beginn der Serienfertigung
                                nicht aufrechterhalten werden</p>
                        </div>
                    </div>
                    <div className="unter-about-box">
                        <div className="unter-about-no">
                            02
                        </div>
                        <div className="unter-about-text">
                            <p>Zulieferumfänge (Material, Bauteile, Baugruppen etc.) stehen
                                nicht rechtzeitig zum SOP / für die Serienfertigung zur Verfügung </p>
                        </div>
                    </div>
                    <div className="unter-about-box">
                        <div className="unter-about-no">
                            03
                        </div>
                        <div className="unter-about-text">
                            <p>Keine Lösung für den Produktentwicklungsprozess (PLC), den
                                aktuellen Status aller produktrelevanten Informationen
                                jederzeit darstellen zu können (z.B. Material- oder Teilepreis, Marge,
                                Teileverfügbarkeit, Terminabweichungen, fehlende Zertifizierungen, Freigaben u.v.m.)
                            </p>
                        </div>
                    </div>
                    <div className="unter-about-box">
                        <div className="unter-about-no">
                            04
                        </div>
                        <div className="unter-about-text">
                            <p>Vielzahl an Systemen, Softwares, Schnittstellenprobleme, Zugriffsberechtigungen,
                                nicht durchgängige Prozesse, Daten- und Informationsverluste</p>
                        </div>
                    </div>
                </div>
                <div className="unter-content">
                    <p>Bisher gibt es keine vollintegrierte und prozessübergreifende Software-Lösung, welche alle
                        das Produkt betreffenden Informationen bündelt, aggregiert / darstellt und einen sicheren
                        und reibungslosen Durchlauf der erforderlichen Entwicklungsprozesse gewährleistet, obschon
                        zahlreiche Krisen, wie z.B. die Wirtschaftskrise 2009 oder Corona 2020 gezeigt haben, dass
                        es dringend erforderlich wäre, hier systematische Absicherungsmaßnahmen einzuleiten und
                        umzusetzen
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="unter-analy py py-b">
        <div className="container">
            <div className="analytics-wrapper">
                <div className="unter-analy-box">
                    <div className="com-title">
                        <span> WISSEN ÜBER UNSER UNTERNEHMEN </span>
                        <h2 className="unter">DAS UNTERNEHMEN </h2>
                    </div>
                    <div className="unter-img">
                        <Image src={unter5} alt="unter image"/>
                        <div className="unter-text">
                            <ul>
                                <li>Dr. Nicolae Tudor und Volker P. Zimmerer MBA beschließen 2024 eine gemeinsame Zusammenarbeit zur Entwicklung neuronaler, KI-gestützter, integrativer Software Analyse Lösungen auf der Basis des „Big-Data-Ansätzes“
                                </li>
                                <li>Eine bestehende Gesellschaft wird zur Enterprise Analytics Software GmbH umbenannt, die A&A Tudor Systems s.r.l. in Hermannstadt (Sibiu) Rumänien, firmiert nun als gemeinsame Entwicklungsgesellschaft Enterprise Analytics Software GmbH Romania s.r.l.
                                </li>
                                <li>Die deutsche Vertriebsgesellschaft hat ihre Büroräume – zusammen mit den Räumlichkeiten der Unternehmensberatung Z management consulting von Volker P. Zimmerer –  in der Stuttgarter Innenstadt im Collection Business Center
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="unter-analy unter-analy-ti py py-b">
        <div className="container">
            <div className="analytics-wrapper">
                <div className="com-title">
                    <span> WER WIR ALS UNTERNEHMEN SIND </span>
                    <h2 className="unter">KUNDEN UND MÄRKTE </h2>
                </div>
                <p><strong>Unsere Softwarelösungen sind für Kunden unterschiedlichster Märkte geeignet. Grundsätzlich gilt: Je komplexer die nachfolgenden Punkte ausgeprägt sind, desto größer ist der potenzielle Hebel:</strong></p>

                <ul>
                    <li>Produkte selbst sind hinreichend komplex (bestehen aus vielen Baugruppen und Bauteilen)</li>
                    <li>Vielzahl an Produktvarianten oder Derivaten</li>
                    <li>Komplexe Beschaffungsstruktur (Vielzahl von Lieferanten und verschiedenste Beschaffungsumfänge)</li>
                    <li>Produkte entstehen im Rahmen eines typischen, mehrstufigen Produktentwicklungs- / Produktentstehungsprozesses. Das Produkt wird zumindest im Wertschöpfungskettennetzwerk – gemeinsam mit dem Kunden und dem Lieferanten – zur Serienreife hin, oder bis zur Fertigstellung der Anlage, entwickelt</li>
                    <li>Produkt kann im Zuge einer Auftragsfertigung oder einer Serienfertigung erstellt werden (z.B. Kreuzfahrtschiff, Großanlage, Nutzfahrzeug, Kraftfahrzeuge, Baugruppen oder Bauteile von 0,5-Tier-, 1st-Tier- oder 2nd-Tier-Lieferanten)
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section className="unter-analy py">
        <div className="container">
            <div className="analytics-wrapper">
                <div className="unter-analy-box">
                    <div className="unter-img">
                        <div className="unter-img-text">
                            <div className="com-title">
                                <span> WER WIR ALS UNTERNEHMEN SIND </span>
                                <h2 className="unter">BRANCHEN </h2>
                            </div>
                            <ul>
                                <li>Automobilindustrie</li>
                                <li>Automobilzulieferindustrie</li>
                                <li>Nutzfahrzeugindustrie</li>
                                <li>Luft- & Raumfahrt-Industrie</li>
                                <li>Baumaschinen- und Landmaschinenindustrie</li>
                                <li>Rüstungsindustrie</li>
                                <li>Schiffahrtsindustrie</li>
                                <li>Maschinen- und Anlagenbau</li>
                                <li>Pharma-, Chemieindustrie und Medizintechnik</li>
                                <li>Lebensmittelindustrie</li>
                                <li>Bauindustrie</li>
                                <li>Bahnindustrie</li>
                            </ul>
                        </div>

                        <div className="unter-postion-img">
                            <Image src={unter6} alt="unter image"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <Newsletter/>
</>
  )
}

export default page
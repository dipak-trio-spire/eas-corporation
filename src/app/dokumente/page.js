import Link from "next/link";
import Image from "next/image";
import dokumentBg from "../../../public/img/dokument-bg.png";
import Download_svg from "../../../public/img/downloand.svg";

import Newsletter from "@/component/Newsletter";
const page = () => {
  return (
    <>
    <section className="hero-banner docu-banner">
        <div className="hero-wrapper">
            <div className="hero-img">
                <Image src={dokumentBg} alt="hero"/>
            </div>
            <div className="hero-content">
                <h1>DOKUMENT UND WEITERFÜHRENDE INFORMATIONEN </h1>
            </div>
        </div>
    </section>
    <section className="dokument py py-b">
        <div className="container">
            <div className="dokument-wrapper py">
                <div className="doc-box">
                    <div className="docs-bg">
                        <div className="doc-title">
                            <h2>Allgemeine Geschäftsbedingungen (AGB)</h2>
                        </div>
                        <div className="doc-dec">
                            <p>Mit den AGB regeln wir die grundsätzlichen, vertraglichen Rahmenbedingungen der
                                Zusammenarbeit zwischen dem Kunden und Enterprise Analytic Software GMBH.</p>
                        </div>
                    </div>
                    <Link href="/" aria-label="">HERUNTERLADEN <Image src={Download_svg} alt="download_svg"/>
                    </Link>
                </div>
                <div className="doc-box">
                    <div className="docs-bg">
                        <div className="doc-title">
                            <h2>Allgemeines Einkaufsbedingungen (AEB)</h2>
                        </div>
                        <div className="doc-dec">
                            <p>Die allgemeinen Einkaufsbedingungen skizzieren die vertraglichen Eckpunkte, die wir
                                für eine funktionierende und zielorientierte Beschaffung unserer Produkte und
                                Dienstleistungen bei unseren Netzwerkpartnern und anderen Lieferanten benötigen</p>
                        </div>
                    </div>
                    <Link href="/" aria-label="">HERUNTERLADEN <Image src={Download_svg} alt="download_svg"/>
                    </Link>
                </div>
                <div className="doc-box">
                    <div className="docs-bg">
                        <div className="doc-title">
                            <h2>EAS Flyer / One Pager Deutsch</h2>
                        </div>
                        <div className="doc-dec">
                            <p>Hier kommt in Kürze ein weiteres Dokumente hinzu</p>
                        </div>
                    </div>
                    <Link href="/" aria-label="">HERUNTERLADEN <Image src={Download_svg} alt="download_svg"/>
                    </Link>
                </div>
                <div className="doc-box">
                    <div className="docs-bg">
                        <div className="doc-title">
                            <h2>EAS Flyer / One Pager Englisch</h2>
                        </div>
                        <div className="doc-dec">
                            <p>Hier kommt in Kürze ein weiteres Dokumente hinzu</p>
                        </div>
                    </div>
                    <Link href="/" aria-label="">HERUNTERLADEN <Image src={Download_svg} alt="download_svg"/>
                    </Link>
                </div>
                <div className="doc-box">
                    <div className="docs-bg">
                        <div className="doc-title">
                            <h2>EAS Flyer / One Pager Englisch</h2>
                        </div>
                        <div className="doc-dec">
                            <p>Hier kommt in Kürze ein weiteres Dokumente hinzu</p>
                        </div>
                    </div>
                    <Link href="/" aria-label="">HERUNTERLADEN <Image src={Download_svg} alt="download_svg"/>
                    </Link>
                </div>
                <div className="doc-box">
                    <div className="docs-bg">
                        <div className="doc-title">
                            <h2>EAS Produktpräsentation EAS Cockpit® Englisch</h2>
                        </div>
                        <div className="doc-dec">
                            <p>Hier kommt in Kürze ein weiteres Dokumente hinzu</p>
                        </div>
                    </div>
                    <Link href="/" aria-label="">HERUNTERLADEN <Image src={Download_svg} alt="download_svg"/>
                    </Link>
                </div>
                <div className="doc-box">
                    <div className="docs-bg">
                        <div className="doc-title">
                            <h2>EAS Flyer / Einkaufsplattform VOENICS Deutsch</h2>
                        </div>
                        <div className="doc-dec">
                            <p>Hier kommt in Kürze ein weiteres Dokumente hinzu</p>
                        </div>
                    </div>
                    <Link href="/" aria-label="">HERUNTERLADEN <Image src={Download_svg} alt="download_svg"/>
                    </Link>
                </div>
                <div className="doc-box">
                    <div className="docs-bg">
                        <div className="doc-title">
                            <h2></h2>
                        </div>
                        <div className="doc-dec">
                            <p></p>
                        </div>
                    </div>
                    <Link href="/" aria-label="">HERUNTERLADEN <Image src={Download_svg} alt="download_svg"/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    <Newsletter/>
</>
  )
}

export default page

export function generateMetadata() {
    return {
        title: "Dokumente – Wichtige Informationen bei EAS Corporation herunterladen",
        description: "Laden Sie wichtige Dokumente, Anleitungen und Unternehmensinformationen der EAS Corporation bequem herunter. Aktuelle Informationen jederzeit verfügbar.",
        openGraph: {
            title: "Dokumente – Wichtige Informationen bei EAS Corporation herunterladen",
            description: "Laden Sie wichtige Dokumente, Anleitungen und Unternehmensinformationen der EAS Corporation bequem herunter. Aktuelle Informationen jederzeit verfügbar.",
            images: [
                {
                    url: "/img/logo.png", // Update to the correct relative path
                    alt: "EAS Corporation Dokumentensammlung", // Updated alt tag
                    description: "Sammlung wichtiger Dokumente, die Kunden und Partner der EAS Corporation zur Verfügung stehen." // Updated image description
                }
            ],
        },
    };
}
import Image from 'next/image'
import team_bg from "../../../public/img/team-bg.png";
import team_1 from "../../../public/img/team-2.jpeg";
import team_2 from "../../../public/img/team-1.jpeg";
import team_Call from "../../../public/img/call.svg";
import team_mail from "../../../public/img/mail.svg";
import Link from 'next/link';
import Newsletter from '@/component/Newsletter';

const page = () => {
  return (
    <>
         <section className="hero-banner">
            <div className="hero-wrapper">
                <div className="hero-img">
                    <Image src={team_bg} alt="hero"/>
                </div>
                <div className="hero-content">
                    <h1>Geschäftsführung / Board of Management</h1>
                </div>
            </div>
        </section>
        <div className="team py py-b">
            <div className="container">
                <div className="team-wrapper py">
                    <div className="team-box">
                        <div className="team-img">
                            <Image src={team_1} alt="team pepole"/>
                        </div>
                        <div className="team-content">
                            <div className="team-title">
                                <h2>Nicolae Tudor</h2>
                                <span>Dipl.-Ing. (univ.), Dr.-Ing.</span>
                            </div>
                            <div className="team-text">
                                <p>Geschäftsführender Gesellschafter</p>
                            </div>
                            <div className="team-text">
                                <p>Mathematiker, Software-Entwickler, Wissenschaftler, Autor und Projektmanager</p>
                            </div>
                            <div className="team-call">
                            <Image src={team_Call} alt="team_Call"/>
                                <Link href="tel:+491746145760" aria-label=""><span>Telefon:</span> +49 174 614 57 60</Link>
                            </div>
                            <div className="team-call">
                            <Image src={team_mail} alt="team_mail"/>
                                <Link href="mailto:nt@eas-corporation.com" aria-label=""><span>E-Mail:</span>
                                    nt@eas-corporation.com</Link>
                            </div>
                            <div className="team-text-cont">
                                <p>20 Jahre Automotive-Erfahrung als Führungskraft und Projektleiter in großen Automobilunternehmen 15 Jahre Einkauf-und Supply-Chain-Management (SQM) Projekte in der Organisations-, System- und Prozesslandschaft Produktentwicklung und Produkt-Management-Systeme</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-box">
                        <div className="team-img">
                        <Image src={team_2} alt="team pepole"/>
                        </div>
                        <div className="team-content">
                            <div className="team-title">
                                <h2>Volker P. Zimmerer</h2>
                                <span>Dipl.-Betriebswirt (FH), <br/>Master of Business Administration – MBA (univ.)</span>
                            </div>
                            <div className="team-text">
                                <p>Geschäftsführender Gesellschafter</p>
                            </div>
                            <div className="team-text">
                                <p>Unternehmer, Unternehmensberater, Interims-Manager, Investor, Coach & Mediator</p>
                            </div>
                            <div className="team-call">
                            <Image src={team_Call} alt="team_Call"/>
                                <Link href="tel:+491732448376" aria-label=""><span>Telefon:</span> +49 173 244 83 76</Link>
                            </div>
                            <div className="team-call">
                            <Image src={team_mail} alt="team_mail"/>

                                <Link href="mailto:vpz@eas-corporation.com" aria-label=""><span>E-Mail:</span>
                                    vpz@eas-corporation.com</Link>
                            </div>
                            <div className="team-text-cont">
                                <p>20 Jahre Umsetzungserfahrung in über 40 leistungs-und finanzwirtschaftlichen Projekten als Interim CEO, CRO, CFO, CHRO in der Automobilindustrie, im Maschinen-und Anlagenbau, in der Metallverarbeitung, im Stahlbau, in der Holzindustrie und in der Texilindustrie <br/>
                                Begleitung von Unternehmern und Unternehmen in ausgeprägten Sondersituationen; vor allem in Krisen-Phasen (Stakeholder-Krise bis zur Umsetzung von Insolvenzverfahren)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Newsletter/>
    </>
  )
}

export default page
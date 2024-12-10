"use client";
import React, { useState } from "react";
import Image from "next/image";
import kotacktBG from "../../../public/img/kotackt-bg.png";
import call from "../../../public/img/call.svg";
import mail from "../../../public/img/mail.svg";
import location from "../../../public/img/location.svg";
import map from "../../../public/img/map.png";
import Link from "next/link";
import Newsletter from "@/component/Newsletter";

const Page = () => {
  const [formData, setFormData] = useState({
    subject: "New Contact",
    name: "",
    email: "",
    phone: "",
    message: "",
    betreff: "",
  });

  const [success, setSuccess] = useState(false); // State to track submission success
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false); // Reset success state on new submission
    setErrorMessage("");
    setLoading(true); // Set loading to true when submission starts

    const endpoint = process.env.NEXT_PUBLIC_SENDER_MAIL || 'https://formspree.io/f/mdkonqvw';

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true); // Show success message if submission is successful
        setFormData({
          subject: "New Contact",
          name: "",
          email: "",
          phone: "",
          message: "",
          betreff: "",
        });
      } else {
        setErrorMessage(`Nachricht konnte nicht gesendet werden.: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-banner docu-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={kotacktBG} alt="hero" />
          </div>
          <div className="hero-content">
            <h1>STANDORTE UND KONTAKT</h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py py-b">
        <div className="container">
          <div className="contact-wrapper py py-b">
            <div className="contact-text">
              <div className="com-title">
                <span>Kontaktieren Sie uns</span>
                <h2>
                  Wir freuen uns auf Ihre Fragen und vereinbaren gerne einen
                  Termin mit Ihnen
                </h2>
              </div>
              <div className="contact-detail">
                {/* Contact Details - Call */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={call} alt="call" />
                  </div>
                  <div className="cd-title">
                    <p>Rufen Sie uns an</p>
                    <Link href="tel:+8551044444">
                      Tel: + 49 711 – 490 50 391
                    </Link>
                    <Link href="/">Fax: + 49 711 – 490 50 25</Link>
                  </div>
                </div>

                {/* Contact Details - Email */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={mail} alt="email" />
                  </div>
                  <div className="cd-title">
                    <p>E-Mail-Informationen</p>
                    <Link href="mailto:contact@eas-corporation.com">
                      contact@eas-corporation.com
                    </Link>
                  </div>
                </div>

                {/* Contact Details - Address */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={location} alt="location" />
                  </div>
                  <div className="cd-title">
                    <p>Adresse</p>
                    <p>
                      Königstraße 27 <br />
                      70173 Stuttgart
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Kontaktieren Sie uns</h3>
              <form onSubmit={handleSubmit} method="POST">
                <div className="in-filds">
                  <div className="in-fild">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="in-fild">
                    <input
                      type="email"
                      name="email"
                      placeholder="Ihre E-Mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="in-fild">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Ihre Telefonnummer"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="in-fild">
                  <input
                    type="text"
                    name="Betreff"
                    placeholder="Betreff"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="in-fild">
                  <textarea
                    name="message"
                    placeholder="Nachricht"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="in-fild privacy-container">
                  <p>
                    Informationen zum Datenschutz in Bezug auf Ihre Anfrage finden Sie hier: :{" "}
                    <a href="/datenschutzerklaerung" className="cookie_a"  target="_blank">
                      Datenschutzrichtlinie.
                    </a>
                  </p>
                </div>

                <div className="in-button">
                  <input
                    type="submit"
                    value={loading ? "Senden..." : "SENDEN"}
                    disabled={loading} // Disable the button while loading
                  />
                </div>
              </form>

              {/* Success Message */}
              {success && (
                <div className="success-message">
                  <p>Ihre Nachricht wurde erfolgreich gesendet!</p>
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="error-message">
                  <p>{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map py">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-img">
              <Image src={map} alt="google map" />
            </div>
            <div className="maping-text">
              <p>BLICK AUF UNSERE GESCHÄFTSRÄUME IN STUTTGART</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Page;

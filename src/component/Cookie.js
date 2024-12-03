'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('EAS-cookie');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    Cookies.set('EAS-cookie', 'Alle akzeptieren', { expires: 1 });
    setIsVisible(false); // Close the popup
  };

  const handleAcceptEssentials = () => {
    Cookies.set('EAS-cookie', 'Nur essenzielle Cookies akzeptieren', { expires: 1 });
    setIsVisible(false); // Close the popup
  };

  return (
    <>
      {isVisible && (
        <div className="cookie-main">
            <div className="cookie">
            <div className="cookie-wrapper">
                <div className="cookie-text">
                <p>
                    Wir verwenden Cookies, um Ihnen ein optimales Erlebnis auf unserer Website zu bieten. 
                    Einige Cookies sind notwendig, um die grundlegenden Funktionen der Website zu gewährleisten, 
                    während andere uns helfen, Ihr Nutzerverhalten zu analysieren und unsere Dienstleistungen zu verbessern. 
                    Sie können auswählen, welche Cookies Sie zulassen möchten. Weitere Informationen finden Sie in unserer 
                    <a href="/datenschutzerklaerung" aria-label="" className="cookie_a"> Datenschutzerklärung</a>.
                </p>
                </div>
                <div className="cookie-btn">
                <button onClick={handleAcceptAll} className="btn cookie-allow">Alle akzeptieren</button>
                <button onClick={handleAcceptEssentials} className="btn cookie-close">Nur essenzielle Cookies akzeptieren</button>
                </div>
            </div>
            </div>
        </div>
       
      )}
    </>
  );
};

export default Cookie;

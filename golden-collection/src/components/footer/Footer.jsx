import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import './Footer.css';

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>Golden Collection</h4>
          <p>
            {language === 'en'
              ? "The home of Arabia's finest perfumes since 1852."
              : 'موطن أفضل عطور العربية منذ 1852.'}
          </p>
        </div>
        <div className="footer-col">
          <h5>{t('quickLinks', language)}</h5>
          <ul>
            <li>
              <a href="/about">{t('aboutUs', language)}</a>
            </li>
            <li>
              <a href="/contact">{t('contact', language)}</a>
            </li>
            <li>
              <a href="/blog">{t('blog', language)}</a>
            </li>
            <li>
              <a href="/privacy">{t('privacyPolicy', language)}</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>{t('followUs', language)}</h5>
          <div className="social-links">
            <a href="#">{t('instagram', language)}</a>
            <a href="#">{t('facebook', language)}</a>
            <a href="#">{t('twitter', language)}</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('copyright', language)}</p>
      </div>
    </footer>
  );
}

import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className="footer__content">
        <div className="footer__statistics">
          <span>Статистика</span>: каждые 60 секунд врачи диагностируют опасные поражения внутренних органов,
          вызванные грибком, у 1-го пациент
        </div>
      </div>
    </footer>
  );
}

export default Footer;

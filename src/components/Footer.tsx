import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>{t('footer.title')}</h3>
          <p className={styles.subtitle}>{t('footer.subtitle')}</p>
        </div>

        <nav className={styles.nav}>
          <a href="#">{t('nav.features')}</a>
          <a href="#">{t('nav.pricing')}</a>
          <a href="#">{t('nav.howItWorks')}</a>
          <a href="#">{t('nav.reviews')}</a>
          <a href="#" className={styles.navWithBadge}>
            {t('footer.nav.training')}
            <span className={styles.badge}>{t('footer.nav.new')}</span>
          </a>
          <a href="#">{t('footer.nav.contacts')}</a>
          <a href="#">{t('footer.nav.about')}</a>
          <a href="#">{t('nav.login')}</a>
        </nav>

        <div className={styles.residents}>
          <p className={styles.residentsText}>{t('footer.residents')}</p>
          <div className={styles.residentsLogo}>
            <div className={styles.hubCard}>
              <img alt="Astana Hub" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnY4602nm0CevajudSmdJ4Hj-8J6IdsTwtLXRHEVxq9tNbSgzPiRz8dk7zSbwDylkNOscjaWXvc-s5n78qKaTOSxFeP533TbrcLxX6KBBsBSoNnLJHtmQbKTs-iUEULjllAVtzdg3hEJCxyrd4xGBpqOoWXPZE5ju53UPFGTaN9t9rP8GFRLSsn8irLtMtZ_fbe48QIleTzabjviV-GhwJz_zNvAEuCFXYoIuMLz55W4mU2lYs7rQSMHUXKYg9WVgVZPtx4tJcHVe2" />
              <div className={styles.hubText}>
                <span className={styles.hubName}>astana hub</span>
                <span className={styles.hubRole}>{t('footer.participant')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.appLinks}>
          <p className={styles.appText}>{t('footer.app')}</p>
          <div className={styles.appLogos}>
            <a href="#"><img alt="Google Play" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8b6etJzUKP2EG52oYZHznMeH5wY6GIPKDS6ZAxzZXGuabqWEgeoRi1i7HOPA8OzwWU0V_2BhthHoFLpsMeLAqp4vJQp6YTTIC78XNBf4BpYkqKPwTHn4cf2YLg7wfiJDQPC-F5BmiSI_unZhZFBobedsNukbZ5iugVOb4vRxPHOpxGVexR7cxbUqTvalJ2gNMGhiMmzuvs2Ovx26lhQQuevZvUP4EoyQ52nqNnMFUC6sE3e_qBnKL048YhZMMuk152oubKytwhzz" /></a>
            <a href="#"><img alt="App Store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHagt9jPmoSvlf1n41-pRp8wY9rMGPXuS5Lj4IkNipQYxSNCZtQL0aAD_q8VWyuGFv0RiT4F-rRLch1Jd816Inu1Rc2ToZVG7bzAOAu2sS-krmHFp3lgIGESJVujh3a_ZkougcIkRdFnXCahJeUl25lz8pCj9-X60WJEXpRYYyM1SYP2krSBlZPRPhxdBIEf5FlNhMnW_DRHReqj7atnciuDTRPgsmK71I2AtDa06M4CC8lly6kJjDvt1QG1XZi-n2B5f2dVdmI_b9" /></a>
          </div>
        </div>

        <p className={styles.disclaimer}>{t('footer.disclaimer')}</p>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p className={styles.copyrightYear}>© 2025 PriceFeed</p>
            <p className={styles.company}>{t('footer.company')}</p>
            <a href="#" className={styles.terms}>{t('footer.terms')}</a>
          </div>

          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}>
              <img alt="Instagram" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbt6x40I8DdrwW2m51t6gqyintgNk-YCBUEHCLfjg6kC9D7Qfa8XC3zaeLA27e7-XJJFa21ZZqG6X7JxumbKBzyZz67XwAeK2_X53x22rnwY2P7ezaXLAYQvIR5Mlns38RObFwbdRpUWshFrE6V1LNq0W3AQVZSMv6ErnnC-ByY_sBZgoQAa7c1Ck6XHLSq6RXm7CSLny39x8j86Um8_p8zNcRmkImgcF0QCLmJo-x2jm02e-ze_50dSUavAFnJTmRLM1MXQUJ50wE" />
            </a>
            <a href="#" className={styles.socialLink}>
              <img alt="YouTube" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxHeT5XV3Q8VDbKaT-WfOW9KF38Q1z9GQJ6MUoYge1h7Jh0eBlnhhGZeaNt3Zu2E5p67gYgxZJcPTq-8_dTZJA7_sVc0EjPC2y0c4-_xcuXBoXwbMfO7NIiToirGLYPdj3PYl7EQQwWrIe1iETFiaqmXw1i09GLIlulDCgP1Bw_325lhL2pnAV8bwupBB9tXRUi8S7zR6hq97p3M_OtZ4qe1F4-RWTtsO2z5b5FCxOhB8C0hz12-ryIyl1VxQGJIOpI13apuOQVTKH" />
            </a>
            <a href="#" className={styles.socialLink}>
              <img alt="Telegram" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNkEaXK12_BoFZEQ0m-dJvYouJdrEdlcvTjLEXYSI7QBJ0m14IMrIGpl7DUSeJKk6VgSr6m8U7TpRif5Yzqzp298O3KbSoHPUzVczn196s9O3kEvwk60qPhpGwEHXmxBntAI5Mr6QMUCUW8ZGxq-imeZ7pzk3QB_8LFgK8mOdlLeo_eQp8qWG6TfFhl2iWYrfwk0qvLIeUTa61MeaRWhV9wEhqWGUIBYFMQu9SCB1ZqS_beSCTxWLg45ffhJWh35lz6yBBRTNbz42Q" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

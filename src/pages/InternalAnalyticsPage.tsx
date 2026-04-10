import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './InternalAnalyticsPage.module.css';

const InternalAnalyticsPage: React.FC = () => {
  const { t } = useTranslation();

  const tariffs = [
    {
      key: 'month1',
      featured: false,
    },
    {
      key: 'month3',
      featured: true,
    },
    {
      key: 'month6',
      featured: false,
    },
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>
                <Trans i18nKey="internalAnalytics.hero.title">
                  Оцифруйте ваш магазин на Kaspi: <span className={styles.highlight}>точная юнит-экономика</span> и аналитика продаж
                </Trans>
              </h1>
              <p className={styles.subtitle}>
                {t('internalAnalytics.hero.subtitle')}
              </p>
              <div className={styles.ctaGroup}>
                <a href="#tariffs" className={styles.btnPrimary}>
                  {t('internalAnalytics.hero.ctaConsult')}
                </a>
                <button className={styles.btnSecondary}>
                  {t('internalAnalytics.hero.ctaDemo')}
                </button>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow}></div>
              <div className={styles.imageContainer}>
                <img
                  src="https://lh3.googleusercontent.com/aida/ADBb0uj0TZj2sQGjTAs1i_40rR6Lvj_2vaLrmHqZrXkCNqzuHy5Cs9ThYy1E_4BoCrlF_9SV0gvJkuFeIN-KLXFirCmWyqL_XCHV-ELXvicL9RJAu6Uia1uux7tktvZ-LwkFLauoQcfn5Fj2BGYEjAnkKmwYpq_YaFK2mD1DzrYUc9zpVZTYn0i9r_Dsil0EKhoV1joR8aB2jND1v8tgJ5P7HeRUcbFcMYVXwZxX5S1YJ1AfUmSjxYc42sDBJ5V2afftY3hKJgWeYjNdzIU"
                  alt="Internal Analytics Infographic"
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className={styles.advantages}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('internalAnalytics.advantages.title')}</h2>
            <p className={styles.sectionSubtitle}>{t('internalAnalytics.advantages.subtitle')}</p>
          </div>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantageCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.materialIcons}>admin_panel_settings</span>
              </div>
              <h3 className={styles.advantageTitle}>{t('internalAnalytics.advantages.control.title')}</h3>
              <p className={styles.advantageDesc}>{t('internalAnalytics.advantages.control.desc')}</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.materialIcons}>precision_manufacturing</span>
              </div>
              <h3 className={styles.advantageTitle}>{t('internalAnalytics.advantages.precision.title')}</h3>
              <p className={styles.advantageDesc}>{t('internalAnalytics.advantages.precision.desc')}</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.materialIcons}>bolt</span>
              </div>
              <h3 className={styles.advantageTitle}>{t('internalAnalytics.advantages.automation.title')}</h3>
              <p className={styles.advantageDesc}>{t('internalAnalytics.advantages.automation.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className={styles.bentoSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('internalAnalytics.bento.title')}</h2>
            <p className={styles.sectionSubtitle}>{t('internalAnalytics.bento.subtitle')}</p>
          </div>
          <div className={styles.bentoGrid}>
            {/* Unit Economics Card */}
            <div className={`${styles.bentoCard} styles.largeCard`}>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <span className={styles.materialIcons}>calculate</span>
                </div>
                <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.unit.title')}</h3>
                <p className={styles.cardDesc}>{t('internalAnalytics.bento.unit.desc')}</p>
              </div>
              <div className={styles.cardVisual}>
                <div className={styles.phoneMockup}>
                  <div className={styles.phoneNotch}></div>
                  <div className={styles.phoneContent}>
                    <div className={styles.skeletonLine} style={{ width: '75%' }}></div>
                    <div className={styles.skeletonLine} style={{ width: '50%' }}></div>
                    <div className={styles.skeletonBox}>12 400 ₸</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className={styles.bentoCard}>
              <div className={styles.badge}>{t('internalAnalytics.bento.summary.badge')}</div>
              <div className={styles.cardIcon}>
                <span className={styles.materialIcons}>dashboard</span>
              </div>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.summary.title')}</h3>
              <ul className={styles.featureList}>
                {(t('internalAnalytics.bento.summary.features', { returnObjects: true }) as string[]).map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={`${styles.materialIcons} ${styles.checkIcon}`}>check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* ABC Analysis Card */}
            <div className={styles.bentoCard}>
              <div className={styles.cardIcon}>
                <span className={styles.materialIcons}>bar_chart</span>
              </div>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.abc.title')}</h3>
              <p className={styles.cardDesc}>{t('internalAnalytics.bento.abc.desc')}</p>
            </div>

            {/* Margin Card */}
            <div className={`${styles.bentoCard} styles.overflowHidden`}>
              <div className={styles.cardIcon}>
                <span className={styles.materialIcons}>trending_up</span>
              </div>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.margin.title')}</h3>
              <p className={styles.cardDesc}>{t('internalAnalytics.bento.margin.desc')}</p>
              <div className={styles.relativeIcon}>
                <span className={styles.materialIcons} style={{ fontSize: '120px' }}>attach_money</span>
              </div>
            </div>

            {/* Advanced Card */}
            <div className={styles.bentoCard}>
              <div className={styles.cardIcon}>
                <span className={styles.materialIcons}>construction</span>
              </div>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.advanced.title')}</h3>
              <div className={styles.tagGroup}>
                {(t('internalAnalytics.bento.advanced.features', { returnObjects: true }) as string[]).map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.whatsappNote}>
                {t('internalAnalytics.bento.advanced.whatsappNote')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className={styles.ecosystem}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('internalAnalytics.more.title')}</h2>
            <p className={styles.sectionSubtitle}>{t('internalAnalytics.more.subtitle')}</p>
          </div>
          <div className={styles.ecosystemGrid}>
            {(t('internalAnalytics.more.items', { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => {
              const icons = ['account_balance_wallet', 'assignment', 'inventory_2', 'sell', 'cached', 'web'];
              return (
                <div key={i} className={styles.ecosystemCard}>
                  <div className={styles.ecosystemIcon}>
                    <span className={styles.materialIcons}>{icons[i]}</span>
                  </div>
                  <h3 className={styles.ecosystemTitle}>{item.title}</h3>
                  <p className={styles.ecosystemDesc}>{item.desc}</p>
                  <a href="#" className={styles.learnMore}>
                    {t('ecosystem.more')} <span className={styles.arrow}>→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section className={styles.tariffs} id="tariffs">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('internalAnalytics.tariffs.title')}</h2>
            <p className={styles.sectionSubtitle}>{t('internalAnalytics.tariffs.subtitle')}</p>
          </div>
          <div className={styles.tariffsGrid}>
            {tariffs.map((tariff) => {
              const data = t(`internalAnalytics.tariffs.${tariff.key}`, { returnObjects: true }) as any;
              return (
                <div key={tariff.key} className={`${styles.tariffCard} ${tariff.featured ? styles.tariffFeatured : ''}`}>
                  {tariff.featured && <div className={styles.featuredBadge}>{data.badge}</div>}
                  <div className={styles.tariffHeader}>
                    <h3 className={styles.tariffTitle}>{data.title}</h3>
                    <div className={styles.priceWrapper}>
                      <span className={styles.tariffPrice}>{data.price}</span>
                      {data.unit && <span className={styles.priceUnit}>{data.unit}</span>}
                      {data.discount && <span className={styles.discountBadge}>{data.discount}</span>}
                    </div>
                    {data.oldPrice && <div className={styles.oldPrice}>{t('pricing.instead') || 'Вместо'} {data.oldPrice}</div>}
                  </div>
                  <ul className={styles.tariffFeatures}>
                    {(t('internalAnalytics.tariffs.features', { returnObjects: true }) as string[]).map((feature, i) => (
                      <li key={i} className={styles.tariffFeature}>
                        <span className={`${styles.materialIcons} ${styles.checkIcon}`} style={{ fontSize: '18px' }}>check</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={styles.tariffBtn}>
                    {t('internalAnalytics.tariffs.connect')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>{t('internalAnalytics.cta.title')}</h2>
              <p className={styles.ctaSubtitle}>{t('internalAnalytics.cta.subtitle')}</p>
              <div className={styles.testimonial}>
                <p className={styles.testimonialText}>{t('internalAnalytics.cta.testimonial')}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>SA</div>
                  <div>
                    <div className={styles.authorName}>{t('internalAnalytics.cta.author')}</div>
                    <div className={styles.authorRole}>{t('internalAnalytics.cta.role')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ctaFormWrapper}>
              <div className={styles.ctaForm}>
                <h3 className={styles.formTitle}>{t('internalAnalytics.cta.formTitle')}</h3>
                <p className={styles.formDesc}>{t('internalAnalytics.cta.formDesc')}</p>
                <button className={styles.formBtn}>
                  {t('internalAnalytics.cta.formBtn')}
                  <span className={`${styles.materialIcons} ${styles.btnArrow}`}>arrow_forward</span>
                </button>
                <p className={styles.formNote}>{t('internalAnalytics.cta.note')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternalAnalyticsPage;

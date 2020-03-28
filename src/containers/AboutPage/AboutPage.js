import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1200-elena-mozhvilo.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Us',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <img className={css.coverImage} src={image} alt="Artwork by Elena Mozhvilo" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Don't be shy to send us your feedback and suggestions.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Time to help is a non-profit initiative by a group of sharing economy enthusiasts from Barcelona, Málaga and Paris. 
              </h2>

              <p>
                Aiming to quickly set up a directory of people who can help others remotely for free during the covid-19 pandemic, this project has been implemented using <a href="http://sharetribe.com" target="_blank">Sharetribe Flex</a> and <a href="http://meet.jit.si" target="_blank">Jitsi</a>.<br/><br/> The project will be deactivated when the pandemic ends, and all its users and data will be deleted.<br/><br/> The site does not review or verify the information provided by users, so please use it at your own discretion and risk.
              </p>

              <h3 id="contact" className={css.subtitle}>
                Contact us
              </h3>
              <p>
               You can contact us at the email address <a href="mailto:timetohelp2020@gmail.com">timetohelp2020@gmail.com</a>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;

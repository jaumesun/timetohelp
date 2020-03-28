import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: March 28, 2020</p>
      <p>
      Time to help is a non-profit initiative that aims to be a directory of people who can help others remotely for free during the covid-19 pandemic. The project will be deactivated when the pandemic ends, and all its users and data will be deleted.
      </p>
      <p>
      You must be 18 years or older to use this site. The site does not review or verify the information provided by users, so please use it at your own discretion and risk.
      </p>
      <p>
      You can contact the project at the email address timetohelp2020@gmail.com.
      </p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import heaImage from './images/hea.jpg';
import eduImage from './images/edu.jpg';
import bzlImage from './images/bzl.jpg';
import tecImage from './images/tec.jpg';
import othImage from './images/oth.jpg';


class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <a>{name}</a>
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Health',
          heaImage,
          '?pub_CatSp=Health'
        )}
        {locationLink(
          'Education',
          eduImage,
          '?pub_CatSp=Education'
        )}
        {locationLink(
          'Business & Law',
          bzlImage,
          '?pub_CatSp=Business & Law'
        )}
        {locationLink(
          'Technical',
          tecImage,
          '?pub_CatSp=Technical'
        )}
        {locationLink(
          'Others',
          othImage,
          '?pub_CatSp=Others'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;

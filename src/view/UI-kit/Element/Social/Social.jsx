import React from 'react';
import PropTypes from 'prop-types';

import {
  SocialWrapper,
  SocialItem,
} from './Social.styled';

export default function Social({
  className,
  links,
}) {
  const allClasses = ['social-wrapper'];

  if (className) {
    allClasses.push(className);
  }

  return (
    <SocialWrapper
      className={allClasses.join(' ')}
    >
      {links.map((item, index) => (
          <SocialItem
            href={item.url}
            key={`social_id-${index}`}
            aria-label={item.icon}
          >
            <item.icon color="white" opacity={1} />
          </SocialItem>
      ))}
    </SocialWrapper>
  );
}

Social.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

Social.defaultProps = {
  links: ['#'],
};

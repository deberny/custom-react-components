import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  container: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string,
  color: PropTypes.string,
  object: PropTypes.bool,
  text: PropTypes.bool,
  inverse: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const MediaBadge = (props) => {
  const {
    container,
    size,
    color,
    object,
    text,
    inverse,
    tag,
    className,
    cssModule,
    ...attributes,
  } = props;

  let defaultTag;
  if (container) {
    defaultTag = 'span';
  } else if (object) {
    defaultTag = 'img';
  } else if (text) {
    defaultTag = 'h2';
  } else {
    defaultTag = 'div';
  }
  const Tag = tag || defaultTag;

  const classes = mapToCssModules(classNames(
    className,
    {
      'media-badge' : className,
      'media-badge-container' : container,
    },
    size ? `media-badge-${size}` : false,
    `media-badge{inverted ? '-inverted' : ''}-${color}`
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

MediaBadge.propTypes = propTypes;

export default MediaBadge;

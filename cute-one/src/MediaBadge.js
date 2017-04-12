import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div'
};

const MediaBadge = (props) => {
  const {
    className,
    tag: Tag,
    size,
    color,
    cssModule,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    color ? `media-badge-${color}` : false,
    size ? `media-badge-${size}` : false,
    'media-badge'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

MediaBadge.propTypes = propTypes;
MediaBadge.defaultProps = defaultProps;

export default MediaBadge;

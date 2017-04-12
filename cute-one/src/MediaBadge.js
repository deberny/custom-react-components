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
    tag: Tag,
    size,
    color,
    className,
    ...attributes,
  } = props;

  const classes = classNames(
    'media-badge',
    color ? `media-badge-${color}` : false,
    size ? `media-badge-${size}` : false,
    className
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

MediaBadge.propTypes = propTypes;
MediaBadge.defaultProps = defaultProps;

export default MediaBadge;

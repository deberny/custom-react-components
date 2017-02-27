import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object
}

const defaultProps = {
  color: 'default',
}

const Icon = (props) => {
  const {
    name,
    size,
    tag,
    className,
    cssModule,
    ...attributes,
  } = props;

  const Tag = 'i';

  const classes = mapToCssModules(classNames(
    'fa',
    'fa-' + name,

  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;

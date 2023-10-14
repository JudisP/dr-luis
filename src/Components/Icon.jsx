import React from 'react';
import clsn from 'classnames';

const defaultSize = '0.5rem';

const Icon = ({ icon: IconSvg, size, color, className, ...props }) => {
  const finalSize = `calc(${defaultSize} * ${size || 2})`;
  return (
    <IconSvg
      {...props}
      style={{ width: finalSize, height: finalSize }}
      className={clsn(className, { [`text-${color}`]: color })}
    />
  );
};

Icon.propTypes = {};
Icon.defaultProps = {};

export default Icon;

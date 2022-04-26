import React, { FC } from 'react';

interface BadgeProps {
  color: 'action' | 'danger'
}

const Badge: FC<BadgeProps> = ({
  color,
  children
}) => {
  return (
    <span className={`badge badge-` + color}>
      {children}
    </span>
  );
}

export default Badge;
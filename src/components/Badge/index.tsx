import React, { FC } from 'react';

interface BadgeProps {
  color: 'action' | 'danger',
  onClick?: () => void;
}

const Badge: FC<BadgeProps> = ({
  color,
  children,
  onClick
}) => {
  return (
    <span onClick={onClick} className={`badge badge-` + color}>
      {children}
    </span>
  );
}

export default Badge;
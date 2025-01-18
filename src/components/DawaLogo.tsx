import React from 'react';
import dawaLogo from '../dawa_logo.svg';

interface DawaLogoProps {
  width?: string;
  height?: string;
  className?: string;
  alt?: string;
}

export const DawaLogo: React.FC<DawaLogoProps> = ({ 
  width = '150px', 
  height = 'auto', 
  className = '',
  alt = 'Dawa Logo'
}) => {
  return (
    <img 
      src={dawaLogo} 
      alt={alt} 
      width={width} 
      height={height} 
      className={`dawa-logo ${className}`}
    />
  );
};
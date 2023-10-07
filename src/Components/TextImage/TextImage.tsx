type TextImageProps = {
  text: string;
};
import React, { CSSProperties } from 'react';
import { getRandomColorCombo } from '../../Utils/converter';

const TextImage: React.FC<TextImageProps> = ({
  text,
  width,
  height,
  textSize,
}: any) => {
  const initials =
    text.length >= 2 ? text.substring(0, 2).toUpperCase() : text.toUpperCase();
  const color = getRandomColorCombo();
  const style: CSSProperties = {
    width: width || '50px',
    height: height || '50px',
    gap: '2px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
    color: color.textColor,
    fontWeight: 500,
    fontSize: textSize || '20px', // Adjust as needed
  };

  return <div style={style}>{initials}</div>;
};

export default TextImage;

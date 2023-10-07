import React from 'react';

interface RowShimmerLoaderProps {
  height?: string;
  width?: string;
}

const shimmerAnimation = `
  shimmer linear 1.5s infinite
`;

const shimmerGradient = `
  linear-gradient(90deg, #f6f7f8 25%, #edeef1 50%, #f6f7f8 75%)
`;

const UserShimmerLoader: React.FC<RowShimmerLoaderProps> = ({
  height = 'h-12',
  width = 'w-24',
  count = 1,
}) => {
  const shimmerStyle = {
    backgroundImage: shimmerGradient,
    animation: shimmerAnimation,
  };
  return <div className={`shimmer ${width} ${height}`} style={shimmerStyle} />;
};

export default UserShimmerLoader;

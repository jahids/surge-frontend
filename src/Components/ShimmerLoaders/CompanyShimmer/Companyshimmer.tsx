import React from 'react';
// import './companyshimmer.styles.css';

// const CompanyShimmerLoader: React.FC = () => {
//     return (
//         <div className="user-shimmer-container">
//             <div className="profile-shimmer"></div>
//             <div className="details-shimmer">
//                 <div className="company-name-shimmer"></div>
//                 <div className="company-ticker-shimmer"></div>
//             </div>
//         </div>
//     );
// }
// ShimmerLoader.tsx



const shimmerAnimation = `
  shimmer linear 1.5s infinite
`;

const shimmerGradient = `
  linear-gradient(90deg, #f6f7f8 25%, #edeef1 50%, #f6f7f8 75%)
`;

const CompanyShimmerLoader: React.FC = () => {
    const shimmerStyle = {
        backgroundImage: shimmerGradient,
        animation: shimmerAnimation
    };

    return (
        <div className="">
            <div className="flex items-center justify-between mb-4">
                < div className="flex items-center" >
                    <div className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain" style={shimmerStyle}></div>
                    <div className="mx-5">
                        <div className="w-20 h-4 bg-gray-100" style={shimmerStyle}></div>
                        <div className="w-16 h-3 mt-2 bg-gray-100 text-sm" style={shimmerStyle}></div>
                    </div>
                </div >
                <div>
                    <div className="w-16 h-6 bg-gray-100 rounded-full" style={shimmerStyle}></div>
                </div>
            </div >
        </div >
    );
}

// export default ShimmerLoader;

export default CompanyShimmerLoader;

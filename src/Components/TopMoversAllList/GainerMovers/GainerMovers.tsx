/* eslint-disable react/prop-types */
import SingleGainer from './SingleGainer';

const GainerMovers = ({ gainers }: any) => {
  console.log('gainers', gainers);

  return (
    // <div>
    //   <div className="flex items-center justify-between mb-4">
    //     <div className="flex items-center">
    //       <div>
    //         <img
    //           className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
    //           src={rocketPharma}
    //           alt=""
    //         />
    //       </div>
    //       <div className="mx-5">
    //         <p className="font-bold">Nikola</p>
    //         <p className="text-gray-400 text-sm">NKLA</p>
    //       </div>
    //     </div>
    //     <div>
    //       <div>
    //         <button className="bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold">
    //           +60.00%
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-between mb-4">
    //     <div className="flex items-center">
    //       <div>
    //         <img
    //           className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
    //           src={ptc}
    //           alt=""
    //         />
    //       </div>
    //       <div className="mx-5">
    //         <p className="font-bold">Nikola</p>
    //         <p className="text-gray-400 text-sm">NKLA</p>
    //       </div>
    //     </div>
    //     <div>
    //       <div>
    //         <button className="bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold">
    //           +60.00%
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="mt-8">
      {gainers?.length > 0 &&
        gainers?.map((item: any) => (
          <>
            <SingleGainer key={Math.random()} data={item} />
          </>
        ))}
    </div>
  );
};

export default GainerMovers;

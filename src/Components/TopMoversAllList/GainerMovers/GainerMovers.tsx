/* eslint-disable react/prop-types */
import SingleGainer from './SingleGainer';

const GainerMovers = ({ gainers }: any) => {
  console.log('gainers', gainers);

  return (
    <div className="mt-8">
      {gainers?.length > 0 &&
        gainers?.map((item: any) => (

          <SingleGainer key={Math.random()} data={item} />

        ))}
    </div>
  );
};

export default GainerMovers;

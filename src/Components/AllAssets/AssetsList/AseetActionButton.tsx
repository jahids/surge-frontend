import { useState } from 'react';
import { BiPlus, BiCheck } from 'react-icons/bi';
import { instance } from '../../../lib/AxiosInstance';

function AssetActionButton({
  symbol,
  selected = false,
}: {
  symbol: string;
  selected: boolean;
}) {
  const [isPlusIcon, setIsPlusIcon] = useState(selected);
  //   // --- btn toggle ---

  const handleClick = () => {
    console.log(`symbold = ${symbol}`);
    setIsPlusIcon(prevState => !prevState);
    instance.get(`/watchlist/update?name=${symbol}`).catch(er => {
      setIsPlusIcon(prevState => !prevState);
    });
  };
  return (
    <div>
      <div>
        <button
          onClick={handleClick}
          className="py-2 px-2 rounded-full text-3xl font-extrabold"
        >
          {isPlusIcon ? (
            <BiCheck className="text-gray-400" />
          ) : (
            <BiPlus className="text-indigo-600" />
          )}
        </button>
      </div>
    </div>
  );
}

export default AssetActionButton;

import Sheet from 'react-modal-sheet';
import { useState } from 'react';

import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { truncateText } from '../../../Utils/converter';

const StockAbout = ({ allspecificdata }: any) => {
  // console.log(`🎗🎀🎗🎁🎗`, allspecificdata)
  const [isOpen, setOpen] = useState(false);
  const description = allspecificdata?.data?.description
    ? allspecificdata?.data?.description
    : allspecificdata?.description;
  console.log('check 🍖', allspecificdata);

  return (
    <div className="my-6">
      <p className="text-xl font-bold">About</p>
      <div className="my-4">
        <p className="">
          {truncateText(description, 230)}
          <button
            onClick={() => setOpen(true)}
            className="text-blue-500 font-medium"
          >
            See all
          </button>
        </p>
      </div>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <div className="px-5 ">
                <p className="text-xl font-bold">{allspecificdata?.name}</p>
                <p className="mt-10 mb-8 ">{truncateText(description, 500)}</p>
                <div>
                  <ul>
                    {/* <li className="flex items-center justify-between my-4">
                      <p className="text-gray-400">CEO</p>
                      <p className="font-bold">Timothy D. Cook</p>
                    </li>
                    <li className="flex items-center justify-between my-4">
                      <p className="text-gray-400">Employees</p>
                      <p className="font-bold">164k</p>
                    </li> */}
                    <li className="flex items-center justify-between my-4">
                      <p className="text-gray-400">Sector</p>
                      <p className="font-bold">
                        {allspecificdata?.ysector ||
                          allspecificdata?.data?.sector[0]}
                      </p>
                    </li>
                    <li className="flex items-center justify-between my-4">
                      <p className="text-gray-400">links</p>
                      <button className="flex items-center space-x-1 font-bold text-sm text-indigo-600 bg-indigo-100 p-1 rounded-md">
                        <a
                          href={allspecificdata?.data?.weburl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Website
                        </a>{' '}
                        <BsFillArrowUpRightCircleFill />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};

export default StockAbout;

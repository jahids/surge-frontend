import Sheet from 'react-modal-sheet';
import { useState } from 'react';

import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const StockAbout = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="my-6">
      <p className="text-xl font-bold">About</p>
      <div className="my-4">
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          sapiente minus maxime architecto iusto voluptatibus quibusdam suscipit
          temporibus nesciunt voluptatem{' '}
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
                <p className="text-xl font-bold">About AAPL</p>
                <p className="mt-10 mb-8 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptates et quaerat exercitationem deserunt in fugiat
                  impedit, accusamus mollitia repellat debitis ex ipsa officiis
                  maxime laborum iste saepe laboriosam excepturi cum!
                </p>
                <div>
                  <ul>
                    <li className="flex items-center justify-between my-4">
                      <p className="text-gray-400">CEO</p>
                      <p className="font-bold">Timothy D. Cook</p>
                    </li>
                    <li className="flex items-center justify-between my-4">
                      <p className="text-gray-400">Employees</p>
                      <p className="font-bold">164k</p>
                    </li>
                    <li className="flex items-center justify-between my-4">
                      <p className="text-gray-400">Sector</p>
                      <p className="font-bold">Consumer Goods, Technology</p>
                    </li>
                    <li className="flex items-center justify-between my-4">
                      <p className="text-gray-400">links</p>
                      <button className="flex items-center space-x-1 font-bold text-sm text-indigo-600 bg-indigo-100 p-1 rounded-md">
                        <span>Website</span> <BsFillArrowUpRightCircleFill />
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

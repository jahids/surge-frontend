import './News.css';
import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import earthIcon from '../../../assets/img/earth.png';

const News = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">News</h1>
      <p className="mt-1 text-sm text-gray-400">Explore the latest news</p>
      {/* --- news card start --- */}
      <div className="card_wrapper mt-5 max-h-full flex overflow-x-auto">
        <div
          onClick={() => setOpen(true)}
          aria-hidden="true"
          className="card_item flex-col items-baseline p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm"
        >
          <p className="text-xs text-gray-400 font-medium">Market news</p>
          <div className="my-4">
            <p className="font-bold text-sm">
              Onion Global Ltd: Mio HO Debuts SYLPH and SEXROSE in Vegas,
              Inspiring Customer...
            </p>
          </div>
          <div className="flex items-center text-xs text-gray-400 font-medium">
            <p>Finaz Nachrichten</p>
            <p className="mx-2">. 9m ago</p>
          </div>
          {/* --- modal sheet --- */}
          <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container>
              <Sheet.Header />
              <Sheet.Content>
                <div className="p-5 mt-3 h-screen">
                  <div>
                    <img
                      className="rounded-3xl"
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt="news_image"
                    />
                  </div>
                  <div className="px-2">
                    <div>
                      <h1 className="my-5 text-2xl font-semibold">
                        The Lindsell Train Investment Trust Plc - Mongthly
                        Report as at 31 August 2023
                      </h1>
                      <p className="text-md font-semibold text-gray-500">
                        Author Name : Jakir Js
                      </p>
                    </div>
                    <div className="my-5 flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <img className="p-2" src={earthIcon} alt="earth" />
                      </div>
                      <div>
                        <h5 className="mx-5 font-bold text-md">Market News</h5>
                      </div>
                    </div>
                    <div>
                      <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Commodi reprehenderit odio dolores vel. Est vel
                        praesentium maiores hic sequi consequatur.
                      </p>
                    </div>
                    <div className="flex items-center justify-center my-10 pb-[100px]">
                      <a
                        href="https://react-icons.github.io/react-icons/search?q=earth"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="px-10 py-3 bg-gray-200 rounded-full font-bold">
                          Read full article
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
          </Sheet>
          {/* --- modal sheet --- */}
        </div>
      </div>
      {/* --- news card end --- */}
    </div>
  );
};

export default News;

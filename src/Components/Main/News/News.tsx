import './News.css';
const News = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">News</h1>
      <p className="mt-1 text-sm text-gray-400">Explore the latest news</p>
      {/* --- news card start --- */}
      <div className="card_wrapper mt-5 max-h-full flex overflow-x-auto">
        <div className="card_item h-auto p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm">
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
        </div>
        <div className="card_item h-auto p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm">
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
        </div>
      </div>
      {/* --- news card end --- */}
    </div>
  );
};

export default News;

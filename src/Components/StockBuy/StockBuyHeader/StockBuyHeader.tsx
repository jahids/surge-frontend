const StockBuyHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <p className="text-sm font-semibold">AAPL</p>
        <p className="text-3xl font-bold">
          {/* Revance <br /> Therapeutics */}
          Apple
        </p>
        <p className="text-3xl font-bold">$175.48</p>
      </div>
      <div className="bg-gray-100 rounded-full">
        <img
          className="w-12 h-12 rounded-full object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmBKxL0Gti8rMPYegHYJ5wKqX6niYWb8hFvBwuEeAM9tCypmuRHlAQFUgpdwSwzxPPVY&usqp=CAU"
          alt="revance"
        />
      </div>
    </div>
  );
};

export default StockBuyHeader;

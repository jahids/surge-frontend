import AllStockItems from './AllStockItems/AllStockItems';
import AllStockSearch from './AllStockSearch/AllStockSearch';

const AllStockLists = () => {
  return (
    <div className="p-5">
      <section>
        <AllStockSearch />
      </section>
      <section>
        <AllStockItems />
      </section>
    </div>
  );
};

export default AllStockLists;

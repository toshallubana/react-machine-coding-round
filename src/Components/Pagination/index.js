import { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
      const data = await res.json();
      
      if(data && data.products) {
        setProducts(data.products);
        setTotalPages(data.total / 10);
      }
    })();
  }, [page]);

  const onSelectedHandler = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <= Math.round(totalPages) && selectedPage !== page) {
        setPage(selectedPage)
    }
  }

  console.log(totalPages ,' page < (products.length / 10)')

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-5 p-4">
        {/* {products.slice(page * 10 - 10, page * 10).map((product) => { */}
        {products.map((product) => {
          return (
            <div className="cursor-pointer bg-slate-400 p-4 rounded-md">
              <img src={product.thumbnail} alt={product.title} height={150} />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
      <div>
        {products.length > 0 && (
          <div className="[&>*]:p-4 [&>*]:border mt-5 [&>span]:cursor-pointer">
            <span className={`${page == 1 ? 'opacity-0' : ''}`} onClick={() => onSelectedHandler(page - 1)}>Previous</span>
            {[...Array(Math.round(totalPages))].map((_, i) => {
              return <span className={`${page === i + 1 ? 'bg-slate-500' : ''}`} key={i} onClick={() => onSelectedHandler(i+1)}>{i + 1}</span>
            })}
            <span className={`${page < Math.round(totalPages) ? '' : 'opacity-0'}`} onClick={() => onSelectedHandler(page + 1)}>Next</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Pagination;

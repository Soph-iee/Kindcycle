import kindCycleItems from "../data/products";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <>
      <header>
        <nav className="nav-bar flex flex-row text-sm capitalize gap-5 p-3 border-b-1 border-gray-400 items-center">
          <div className="logo">
            <h1 className="uppercase text-signup-btn font-mono font-bold">
              <Link to="/"> kindcycle</Link>
            </h1>
          </div>
          <input
            type="text"
            className="border text-sm border-gray-400 rounded py-1 px-2 outline-gray-400"
            placeholder="Search items"
          />
          <div >
            <p className="hidden"> Welcome, User </p>

            <button className=" px-2 py-1 text-xs text-white capitalize bg-signup-btn border border-signup-btn rounded ">
              logout
            </button>
          </div>
        </nav>
      </header>
      <section className="flex flex-col justify-center items-center">
        <main className="max-w-10/12 flex flex-col items-center justify-center">
          <h1 className="text-lg font-semibold py-2">Product page</h1>
          <section className="grid grid-cols-3 text-xs gap-4  ">
            {kindCycleItems.map((item) => {
              return <Product {...item} key={item.id} />;
            })}
          </section>
        </main>
      </section>
    </>
  );
}

function Product({ name, location, condition, image, id }) {
  return (
    <div className="product-card flex flex-col py-1  shadow-lg rounded  items-center justify-between ">
      <div className="img-container">
        <img src={image} alt={id} className="rounded" />
      </div>
      <div className="product-info grid justify-items-center text-center">
        <h4 className="font-bold ">{name}</h4>
        <p className="font-light shadow-2xs p-1 text-gray-700">{condition}</p>
        <p className="text-gray-400 shadow-2xs p-1">{location}</p>
        <button className="font-mono text-gray-200 uppercase font-semibold text-xs place-self-baseline  p-1 bg-signup-btn border border-signup-btn  rounded ">
          I want😍
        </button>
      </div>
    </div>
  );
}

export default ProductPage;

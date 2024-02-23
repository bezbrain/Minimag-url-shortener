import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Products</h2>
      <ul>
        <li>
          <Link to="/my-urls/short-urls">Link Management</Link>
        </li>
        <li>
          <Link to="/my-urls/short-urls">QR Codes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;

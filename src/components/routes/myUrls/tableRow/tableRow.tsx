import { BsThreeDots } from "react-icons/bs";

const TableRow = () => {
  return (
    <tr className="border-b-2">
      <td className="py-4 px-2 border-2 w-[10%]">Date test</td>
      <td className="py-4 px-2 border-2 w-[35%]">
        <a
          href="https://medium.com/bithubph/payment-integration-with-node-js-express-request-and-paystack-api-8cebf51c1f52"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://medium.com/bithubph/payment-integration-with-node-js-express-request-and-paystack-api-8cebf51c1f52
        </a>
      </td>
      <td className="py-4 px-2 border-2 w-[25%]">
        <a
          href="https://minimag.onrender.com/X9MJSv_"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://minimag.onrender.com/X9MJSv_
        </a>
      </td>
      <td className="py-4 px-2 border-2 w-[25%]">
        <a
          href="https://minimag.onrender.com/checking"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://minimag.onrender.com/checking
        </a>
      </td>
      <td className="py-4 px-2 border-2 w-[5%]">
        <BsThreeDots className="cursor-pointer text-2xl ml-auto" />
      </td>
    </tr>
  );
};

export default TableRow;

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface PriceCardProps {
  type: string;
  price: string;
  title: string;
  planOne: string;
  planTwo: string;
  planThree: string;
  planFour: string;
  planFive: string;
}

const listStyle = "flex items-center gap-1 mt-4";
const textSize = "text-sm";

const PriceCard = ({
  type,
  price,
  title,
  planOne,
  planTwo,
  planThree,
  planFour,
  planFive,
}: PriceCardProps) => {
  return (
    <div className="w-full pt-4 pb-8 rounded-md cursor-pointer border-2 border-[#bdd3f4cc] px-[2vw] lg:hover:scale-[1.20] iPad:hover:scale-[1.10] md:hover:scale-[1.10] iPad:px-12 md:hover:bg-[#1E3448] md:hover:border-0 md:hover:text-white transition-transform surfaceDuo:w-fit">
      <p>{type}</p>
      <h2 className="text-3xl font-semibold mt-8">{price}</h2>
      <h4 className="my-2">{title}</h4>

      <ul>
        <li className={listStyle}>
          <span>
            <IoMdCheckmarkCircleOutline />
          </span>
          <span className={textSize}>{planOne}</span>
        </li>
        <li className={listStyle}>
          <span>
            <IoMdCheckmarkCircleOutline />
          </span>
          <span className={textSize}>{planTwo}</span>
        </li>
        <li className={listStyle}>
          <span>
            <IoMdCheckmarkCircleOutline />
          </span>
          <span className={textSize}>{planThree}</span>
        </li>
        <li className={listStyle}>
          <span>
            <IoMdCheckmarkCircleOutline />
          </span>
          <span className={textSize}>{planFour}</span>
        </li>
        <li className={listStyle}>
          <span>
            <IoMdCheckmarkCircleOutline />
          </span>
          <span className={textSize}>{planFive}</span>
        </li>
      </ul>
    </div>
  );
};

export default PriceCard;

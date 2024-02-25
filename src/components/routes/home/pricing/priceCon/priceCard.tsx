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
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const listStyle = "flex items-center gap-1 mt-1 surfaceDuo:mt-4";
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
  setIsComingSoon,
}: PriceCardProps) => {
  return (
    <div
      className="w-full p-2 rounded-md cursor-pointer border-2 border-[#bdd3f4cc] px-[2vw] shadow-md shadow-slate-700 lg:hover:scale-[1.20] iPad:hover:scale-[1.10] md:hover:scale-[1.10] iPad:px-10 md:hover:bg-[#1E3448] md:hover:border-0 md:hover:text-white transition-transform surfaceDuo:w-fit surfaceDuo:pt-4 surfaceDuo:pb-8"
      onClick={() => setIsComingSoon(true)}
    >
      <p>{type}</p>
      <h2 className="text-xl font-semibold mt-2 surfaceDuo:mt-8 surfaceDuo:text-3xl">
        {price}
      </h2>
      <h4 className="my-1 surfaceDuo:my-2">{title}</h4>

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

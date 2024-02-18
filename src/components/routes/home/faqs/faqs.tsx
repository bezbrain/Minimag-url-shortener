import { useDispatch, useSelector } from "react-redux";
import { FaqCard } from "..";
import { faqData } from "../../../../utils/data";
import { AppDispatch, RootState } from "../../../../store";
import { openFaq } from "../../../../management/features/faq/faqSlice";

const Faqs = () => {
  const { openIndex } = useSelector((store: RootState) => store.faqStore);
  const dispatch = useDispatch<AppDispatch>();

  const handleFaqClick = (id: number) => {
    dispatch(openFaq(openIndex === id ? null : id));
  };

  return (
    <section className="max-w-[850px] mx-auto my-20 py-12 px-[5vw] bg-white rounded-lg space-y-6 surfaceDuo:p-12">
      <h2 className="text-3xl font-semibold text-center">FAQs</h2>

      {faqData.map((each) => {
        const { id } = each;
        return (
          <FaqCard key={id} {...each} handleClick={() => handleFaqClick(id)} />
        );
      })}
    </section>
  );
};

export default Faqs;

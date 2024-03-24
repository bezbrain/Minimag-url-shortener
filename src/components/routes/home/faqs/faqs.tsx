import { useDispatch, useSelector } from "react-redux";
import { FaqCard } from "..";
import { faqData } from "../../../../utils/data";
import { AppDispatch, RootState } from "../../../../store";
import { openFaq } from "../../../../management/features/faq/faqSlice";
import { useEffect } from "react";

const Faqs = () => {
  const { openIndex } = useSelector((store: RootState) => store.faqStore);
  const dispatch = useDispatch<AppDispatch>();

  const handleFaqClick = (id: number) => {
    dispatch(openFaq(openIndex === id ? null : id));
  };

  // HANDLE SCROLL TO SECTION WHEN ON ANOTHER PAGE OTHER THAN HOME
  useEffect(() => {
    // Scroll to the specified section when the page mounts
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section
      className="max-w-[850px] mx-auto my-20 py-12 px-[5vw] bg-white rounded-lg space-y-6 surfaceDuo:p-12"
      id="faq"
      data-testid="faq-section"
    >
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

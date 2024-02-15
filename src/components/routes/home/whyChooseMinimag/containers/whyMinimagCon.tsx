interface WhyMinimagConProps {
  icon: any;
  title: string;
  summary: string;
}

const iconStyles =
  "text-[#005ae2cc] bg-[#b7d0f4cc] w-[45px] h-[45px] text-xl rounded-full flex justify-center items-center mb-4";

const WhyMinimagCon = ({ icon, title, summary }: WhyMinimagConProps) => {
  return (
    <div>
      <span className={iconStyles}>{icon}</span>
      <h2 className="font-semibold text-2xl mb-2">{title}</h2>
      <p className="text-sm lg:text-[16px]">{summary}</p>
    </div>
  );
};

export default WhyMinimagCon;

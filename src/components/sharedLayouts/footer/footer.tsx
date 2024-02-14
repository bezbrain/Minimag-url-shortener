import {
  Company,
  Features,
  Legal,
  Media,
  Products,
  Resources,
  Solutions,
  WhyMinimag,
} from "..";

const Footer = () => {
  return (
    <section className="max-w-[1400px] p-4 mx-auto my-12 lg:px-8">
      <Media />

      <div>
        <WhyMinimag />
        <Solutions />
        <Products />
        <Company />
        <Resources />
        <Features />
        <Legal />
      </div>
    </section>
  );
};

export default Footer;

import AboutBg from "../assets/about.jpg";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section
      className="p-8 flex-1 flex flex-col gap-16 items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(20, 184, 166, 0.1)), url(${AboutBg})`,
      }}
    >
      <div className="w-3/4 lg:w-1/2 flex flex-col text-3xl lg:text-5xl">
        <p>
          “What man actually needs is not a tensionless state but rather the{" "}
          <span className="text-teal-500">
            striving and struggling for some goal
          </span>{" "}
          worthy of him.”
        </p>
        <p className="self-end"> - Viktor Frankl</p>
      </div>
      <div className="flex gap-8">
        <span className="hover:text-teal-500 cursor-pointer">
          <FaEnvelope size={50} />
        </span>
        <span className="hover:text-teal-500 cursor-pointer">
          <FaInstagram size={50} />
        </span>
        <span className="hover:text-teal-500 cursor-pointer">
          <FaTwitter size={50} />
        </span>
      </div>
    </section>
  );
};

export default About;

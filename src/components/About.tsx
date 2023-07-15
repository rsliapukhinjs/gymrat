import AboutBg from "../assets/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section
      className="p-8 flex-1 flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(20, 184, 166, 0.1)), url(${AboutBg})`,
      }}
    >
      <div className="w-2/3 flex flex-col gap-2 text-3xl lg:text-5xl">
        <h2>
          “What man actually needs is not a tensionless state but rather the{" "}
          <span className="text-teal-500">
            striving and struggling for some goal
          </span>{" "}
          worthy of him.”
        </h2>
        <h2 className="self-end">- Viktor Frankl</h2>
      </div>
    </section>
  );
};

export default About;

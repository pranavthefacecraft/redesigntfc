import Title from "./Title.jsx";
import Text from "./Text.jsx";

const Section = ({ title, text, expanded = true }) => {
  return (
    <div
      className={`flex flex-col gap-y-4 lg:w-[55%] lg:gap-y-6 ${expanded ? "lg:py-24" : "lg:py-4"}`}
    >
      <Title {...title} />

      <Text content={text} />
    </div>
  );
};

export default Section;

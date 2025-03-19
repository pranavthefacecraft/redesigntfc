const classes = {
  sm: "text-sm text-white",
  md: "font-secondary text-white font-light text-[#3F3F3F] text-[18px] leading-[27px]",
  lg: "text-2xl text-white lg:text-5xl xl:text-5xl xl:leading-20",
};

const Text = ({ content, size = "md" }) => {
  return <p className={`font-secondary ${classes[size]}`}>{content}</p>;
};
export default Text;

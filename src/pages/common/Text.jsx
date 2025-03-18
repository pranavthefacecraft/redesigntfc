const classes = {
  sm: "text-sm",
  md: "text-white font-secondary font-light text-[#3F3F3F] text-[18px] leading-[27px]",
  lg: "text-white text-2xl lg:text-5xl xl:text-5xl xl:leading-20",
};

const Text = ({ content, size = "md" }) => {
  return <p className={`font-secondary ${classes[size]}`}>{content}</p>;
};
export default Text;

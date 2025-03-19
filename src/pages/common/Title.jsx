const styles = {
  sm: "text-xl text-white",
  md: "Futura-PT-Medium text-[50px] text-white leading-none lg:text-[40px] xl:text-[40px] 2xl:text-[48px]",
  lg: "font-primary text-white text-2xl md:text-[50px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]",
};

const Title = ({ content, size = "md", centered = false }) => {
  return (
    <h3 className={`${styles[size]} ${centered ? "text-center" : "text-left"}`}>
      {content}
    </h3>
  );
};
export default Title;

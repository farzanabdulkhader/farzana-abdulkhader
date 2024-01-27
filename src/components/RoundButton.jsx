const buttonVariants = {
  orange:
    "bg-[#FF914D] hover:ring-2 hover:ring-[#FF914D] hover:ring-offset-2 hover:ring-offset-neutral-900 text-neutral-900",
  dark: "bg-neutral-900 hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 hover:ring-offset-neutral-100 text-neutral-100",
};

const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function RoundButton({ children, color }) {
  return (
    <>
      <button
        onClick={color === "dark" && scrollUp}
        className={`${buttonVariants[color]} text-center transition-all duration-500 h-24 w-24 border-none rounded-full font-[700] text-xs`}
      >
        {children}
      </button>
    </>
  );
}

export default RoundButton;

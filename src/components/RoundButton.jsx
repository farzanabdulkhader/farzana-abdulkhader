function RoundButton({ children }) {
  return (
    <button className="hover:scale-105 transition-all duration-300 h-24 w-24 border-none rounded-full bg-neutral-900 text-white font-[500] text-xs ">
      {children}
    </button>
  );
}

export default RoundButton;

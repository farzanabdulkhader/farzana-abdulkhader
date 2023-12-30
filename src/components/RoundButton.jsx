function RoundButton({ children }) {
  return (
    <button className="hover:scale-105 transition-all duration-300 h-20 w-20 sm:h-24 sm:w-24 border-none rounded-full bg-neutral-900 text-white font-[500] sm:text-xs text-[10.8px]">
      {children}
    </button>
  );
}

export default RoundButton;

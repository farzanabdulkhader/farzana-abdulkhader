function Logo({ imageUrl }) {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollUp}>
      <img
        className="w-[50px] cursor-pointer z-1000 opacity-95"
        src={imageUrl}
      />
    </button>
  );
}

export default Logo;

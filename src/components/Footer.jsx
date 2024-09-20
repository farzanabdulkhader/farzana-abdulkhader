import Logo from "./Logo";

function Footer() {
  return (
    <footer className="md:px-36 lg:px-40 sm:px-24 px-4 py-12 bg-neutral-900 h-20 border-t-[0.2px] border-neutral-800 text-neutral-100 text-xs  flex items-center justify-between">
      <p>&copy; farzana.abdulkhader.{new Date().getFullYear()}</p>

      <Logo imageUrl="logo-white.png" />
    </footer>
  );
}

export default Footer;

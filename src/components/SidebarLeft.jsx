import Logo from "./Logo";

function SidebarLeft() {
  return (
    <div className="sm:fixed absolute py-10 h-screen w-20 flex flex-col items-center justify-between">
      <Logo imageUrl="logo.png" />
      <div className="top-0 left-0 bottom-0 text-sm">
        <p className="text-vertical">&copy;farzana.abdulkhader</p>
      </div>
    </div>
  );
}

export default SidebarLeft;

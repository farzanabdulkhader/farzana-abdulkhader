import Logo from "./Logo";

function SidebarLeft({ page = null }) {
  return (
    <div className="sm:fixed top-0 absolute py-10 h-screen w-20 flex flex-col items-center justify-between">
      <Logo imageUrl="logo.png" page={page} />
      <div className="top-0 left-0 xs:block hidden bottom-0 md:self-center self-start md:ml-0 ml-4 text-sm">
        <p className="text-vertical text-sm text-dark">
          &copy;farzana.abdulkhader
        </p>
      </div>
    </div>
  );
}

export default SidebarLeft;

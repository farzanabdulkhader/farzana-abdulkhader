import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

function Sidebars({ page = null }) {
  return (
    <>
      <SidebarLeft page={page} />
      <SidebarRight page={page} />
    </>
  );
}

export default Sidebars;

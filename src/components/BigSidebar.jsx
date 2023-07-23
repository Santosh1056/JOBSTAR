import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/BigSidebar";
import { Logo, NavLinks } from "../components";
const BigSidebar=()=> {
  const { isSideBarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;

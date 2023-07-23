import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { toggleSidebar } from "../features/user/userSlice";
import { Logo, NavLinks } from ".";
import { useSelector, useDispatch } from "react-redux";

function SmallSidebar() {
  const { isSideBarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
}

export default SmallSidebar;

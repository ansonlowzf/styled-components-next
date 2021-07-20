import { CloseIcon, Icon, SidebarContainer } from "./Sidebar01Element";

const Sidebar01 = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
    </SidebarContainer>
  );
};

export default Sidebar01;

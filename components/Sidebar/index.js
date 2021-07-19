import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import Link from "next/link";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <Link href="/" passHref>
          <SidebarLink>Pizzas</SidebarLink>
        </Link>
        <Link href="/" passHref>
          <SidebarLink>Dessert</SidebarLink>
        </Link>
        <Link href="/" passHref>
          <SidebarLink>Full Menu</SidebarLink>
        </Link>
        <SideBtnWrap>
          <Link href="/" passHref>
            <SidebarRoute>Order Now</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default SideBar;

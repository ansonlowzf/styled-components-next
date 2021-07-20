import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./Sidebar02Element";
import { MainMenu } from "../../const/navlinks";
import Link from "next/link";

const Sidebar02 = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        {MainMenu.map(({ name, path, id }) => (
          <Link href={path} key={id} passHref>
            <SidebarLink>{name}</SidebarLink>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar02;

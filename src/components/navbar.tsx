import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const currentPath = window.location.pathname;
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  const isLoggedIn = !!token;

  const filteredNavItems = siteConfig.navItems.filter((item) => {
    if (isLoggedIn && item.label === "Login") return false;
    if (!isLoggedIn && item.label !== "Login") return false;

    return true;
  });

  const filteredMenuItems = siteConfig.navMenuItems.filter((item) => {
    if (isLoggedIn && item.label === "Login") return false;
    if (!isLoggedIn && item.label !== "Login") return false;

    return true;
  });

  const handleLogout = () => {
    Cookies.remove("accessToken");
    navigate("/");
  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {filteredNavItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  currentPath === item.href && "text-purple-500 font-medium",
                )}
                data-active={currentPath === item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          {isLoggedIn && (
            <NavbarItem>
              <Link
                className={clsx(linkStyles({ color: "danger" }), "font-medium")}
                href="/"
                onPress={handleLogout}
              >
                Logout
              </Link>
            </NavbarItem>
          )}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {filteredMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {isLoggedIn && (
            <NavbarMenuItem>
              <Link color="danger" href="/" size="lg" onPress={handleLogout}>
                Logout
              </Link>
            </NavbarMenuItem>
          )}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

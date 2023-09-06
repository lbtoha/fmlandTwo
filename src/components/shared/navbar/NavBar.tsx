"use client";
import { navbarItems } from "@/../public/data/navbar";
import logo from "@/../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";

const NavBar = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | number | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [multiHomeNavbar, setMultiHomeNavbar] = useState(true);

  // open mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      // mobile device scroll control
      document.body.classList.add("overflow-hidden");
    } else {
      // mobile device scroll control
      document.body.classList.remove("overflow-hidden");
    }
  };

  // close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    if (!multiHomeNavbar) {
      handleMultiHomeNavbar();
    }
    document.body.classList.remove("overflow-hidden");
  };

  const toggleSubMenu = (index: string | number | null) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const navBar = document.querySelector(".main-navbar");

      if (st < lastScrollTop) {
        navBar?.classList.remove("navbar-active");
        navBar?.classList.add("navbar-scroll-bg");
      } else {
        navBar?.classList.add("navbar-active");
        navBar?.classList.remove("navbar-scroll-bg");
      }

      setLastScrollTop(st);

      if (st < 50) {
        navBar?.classList.remove("navbar-scroll-bg");
      }

      const scrollButton = document.querySelector(".scroll-top");
      if (st > 250) {
        scrollButton?.classList.add("scroll-top-active");
      } else {
        scrollButton?.classList.remove("scroll-top-active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // this function handle the ".multi-home-navbar" class only for mobile deive
  const handleMultiHomeNavbar = () => {
    setMultiHomeNavbar(!multiHomeNavbar);
  };

  return (
    //   navbar start
    <nav
      className={`navbar main-navbar navbar-expand-xl ${
        multiHomeNavbar ? "multi-home-navbar" : ""
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image width={151} height={42} src={logo} alt="site logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => {
            handleMultiHomeNavbar();
            toggleMobileMenu();
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav site-menu m-auto mb-2 mb-lg-0">
            {navbarItems.map(({ id, item, linkURL, dropDown }) => (
              <li
                key={id}
                className={`menu-item ${
                  dropDown !== undefined &&
                  dropDown.length > 1 &&
                  " menu-item-has-children"
                }`}
              >
                <Link
                  onClick={() => {
                    closeMobileMenu(); // Close mobile menu when a menu item is clicked
                  }}
                  className={`${pathname === linkURL && "active"}`}
                  href={linkURL}
                >
                  {item}
                </Link>

                {openSubMenu == id && (
                  <AnimateHeight
                    key={id}
                    id={`example-panel-${id}`}
                    duration={5000}
                    height={openSubMenu == id ? "auto" : 0}
                  >
                    <ul className="sub-menu" style={{ display: "block" }}>
                      {dropDown !== undefined &&
                        dropDown.map(({ id, dropDownItem, dropDownLink }) => (
                          <li
                            onClick={() => {
                              closeMobileMenu(); // Close mobile menu when a menu item is clicked
                            }}
                            key={id}
                            className="menu-item"
                          >
                            <Link href={dropDownLink}>{dropDownItem}</Link>
                          </li>
                        ))}
                    </ul>
                  </AnimateHeight>
                )}
                {dropDown !== undefined && dropDown.length > 1 && (
                  <button
                    onClick={() => toggleSubMenu(id)}
                    className="menu-item-button"
                    type="button"
                  >
                    {openSubMenu === id ? "-" : "+"}
                  </button>
                )}

                {dropDown !== undefined && dropDown.length > 1 && (
                  <ul className="sub-menu">
                    {dropDown.map(({ id, dropDownItem, dropDownLink }) => (
                      <li key={id} className="menu-item">
                        <Link href={dropDownLink}>{dropDownItem}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href="sponsor" className="btn btn-rounded btn-main">
            Make Sponsor
          </Link>
        </div>
      </div>
    </nav>
    //     navbar end
  );
};

export default NavBar;

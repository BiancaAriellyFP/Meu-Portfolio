import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // scroll para baixo → esconde
        setShow(false);
      } else {
        // scroll para cima → mostra
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
      <ul>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre mim</a></li>
        <li><a href="#stacks">Stacks</a></li>
        <li><a href="#projetos">Projetos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

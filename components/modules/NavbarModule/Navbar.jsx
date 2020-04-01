import style from "./Navbar.scss";


const NavbarModule = ({ link }) => {
  console.log(NavbarModule);
  return (
    <div className={style.link}>
      <a href="/home">HOME</a>
      <a href="/about">ABOUT</a>
      <a href="/projects">PROJECTS</a>
    </div>
  );
};

export default NavbarModule;

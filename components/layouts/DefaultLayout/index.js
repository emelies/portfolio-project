/* styles */
import style from "./index.scss";
import resets from "./styleReset.scss";
import NavbarModule from "../../modules/NavbarModule/Navbar";

/* components */
import Head from "../../common/Head";

const DefaultLayout = props => {
  const title = "Portfolio";
  const description = "Emelie Sabel";

  return (
    <div className={(resets, style.root)}>
      <div className={style.pageWrapper}>
        <Head title={title} description={description} />
        <NavbarModule />
        {props.children}
      </div>
    </div>
  );
};

export default DefaultLayout;

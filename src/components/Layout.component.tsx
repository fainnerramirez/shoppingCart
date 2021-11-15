import Navbar from "./Navbar.component";
import Footer from "./Footer.component";

const Layout: React.FC = ({ children }) => {
  return (
    <span>
      <Navbar brand="SHOPPING CART" />
      {children}
      {/*<Footer footer="Fainner Ramirez | Carlos Borrego" />*/}
    </span>
  );
};

export default Layout;

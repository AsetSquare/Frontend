import logo from "@/assets/logo/logo.svg";
import { Link } from "react-router-dom";

interface LogoProps {
  className: string;
}

const Logo = ({ className, ...props }: LogoProps) => {
  const styles = "h-[26px] " + className;
  return (
    <Link to="/">
      <img src={logo} {...props} className={styles} />
    </Link>
  );
};

export default Logo;

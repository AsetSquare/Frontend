import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  to?: string;
  typeoF?: "button" | "submit" | "reset";
  disabled?: boolean;
  type: string;
  onClick?: any;
  external?: boolean;
}

function Button({
  className,
  to,
  type,
  typeoF,
  disabled = false,
  external,
  children,
  ...props
}: ButtonProps) {
  const base =
    "text-body-4 md:text-body-4 text-white-1 !py-2 md:!py-2.5 !px-3 md:px-6 rounded text-center transition-all !outline-none disabled:cursor-not-allowed duration-700 " +
    className;

  let style;

  if (type === "primary") {
    style =
      base +
      " bg-green-light-6 border border-transparent hover:border-green-light-8 hover:bg-green-light-7 ";
  } else if (type === "secondary") {
    style =
      base +
      " bg-transparent border border-[#FFFFFF29] hover:bg-[#4f4f4f] hover:border-transparent";
  }

  //BUTTON IS A LINK TYPE
  if (to) {
    if (external) {
      return (
        <a
          href={to}
          className={style}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={style} {...props}>
        {children}
      </Link>
    );
  }

  //BUTTON IS A BUTTON TYPE
  return (
    <button className={style} disabled={disabled} {...props} type={typeoF}>
      {children}
    </button>
  );
}

export default Button;

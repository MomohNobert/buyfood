import React, { useState } from "react";
import { Style } from "./button.styles";

const Button = React.forwardRef(
  ({ clickHandler, className, href, children, ...props }, ref) => {
    const [clicked, setClicked] = useState(false);

    function handleClick(e) {
      e.preventDefault();
      clickHandler();
      setClicked(true);
    }

    return (
      <Style.Container
        className={className}
        href={href}
        onClick={(e) => handleClick(e)}
        ref={ref}
        {...props}
        clicked={clicked}
      >
        {children}
      </Style.Container>
    );
  }
);

Button.displayName = "Button";

export default Button;

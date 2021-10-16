import Button from "../../../atoms/Button/button.atom";
import { Style } from "./header.styles";
import toast from "react-hot-toast";

function OnboardingHeader() {
  const fail_notify = (str) => toast.error(str);

  function errorMessage() {
    fail_notify("No current logout functionality.");
  }

  return (
    <Style.Container>
      <Button second clickHandler={errorMessage}>
        Logout
      </Button>
    </Style.Container>
  );
}

export default OnboardingHeader;

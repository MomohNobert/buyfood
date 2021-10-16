import { useState } from "react";
import FormInput from "../../../molecules/FormInput/formInput.component";
import { Style } from "./socialHandles.styles";
import Button from "../../../atoms/Button/button.atom";
import toast from "react-hot-toast";

function SocialHandles({ setStep }) {
  const fail_notify = (str) => toast.error(str);
  const [formInputs, setFormInputs] = useState({
    abeg: "",
    instagram: "",
    twitter: "",
  });

  function inputHandler({ target }) {
    const { name, value } = target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  }

  function nextStep() {
    if (formInputs.abeg.trim().length <= 3) {
      fail_notify("A correct Abeg tag is required.");
    } else {
      setStep(3);
    }
  }

  return (
    <Style.Container>
      <h2>Social Handles</h2>
      <p>Enter your business social media handles</p>
      <div className="sh-forms">
        <div className="sh-form-first">
          <FormInput
            label={"Choose your Abeg Tag(required)"}
            value={formInputs.abeg}
            width={"100%"}
            name={"abeg"}
            inputHandler={inputHandler}
            placeholder="@"
          />
        </div>
        <div className="sh-form-second">
          <FormInput
            label={"Instagram"}
            value={formInputs.instagram}
            width={"45%"}
            name={"instagram"}
            inputHandler={inputHandler}
            placeholder="@"
          />
          <FormInput
            label={"Twitter"}
            value={formInputs.twitter}
            width={"45%"}
            name={"twitter"}
            inputHandler={inputHandler}
            placeholder="@"
          />
        </div>
      </div>
      <hr></hr>
      <Button className="sh-continue" onClick={nextStep}>
        Confirm Social Handles
      </Button>
    </Style.Container>
  );
}

export default SocialHandles;

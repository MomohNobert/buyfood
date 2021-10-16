import { Style } from "./businessCategory.styles";
import { useState } from "react";
import FormSelect from "../../../molecules/FormSelect/formSelect.component";
import Button from "../../../atoms/Button/button.atom";
import toast from "react-hot-toast";

function BusinessCategory() {
  const success_notify = (str) => toast.success(str);
  const [formInputs, setFormInputs] = useState({
    type: "",
    business: "",
  });
  const [pos, setPos] = useState(false);

  function inputHandler({ target }) {
    const { name, value } = target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  }

  function checkPos(bool) {
    if (bool === pos) {
      return;
    }

    bool !== true ? setPos(false) : setPos(true);
  }

  function nextStep() {
    success_notify("You've successfully completed Nobert's application.");
  }

  return (
    <Style.Container>
      <h2>Business category</h2>
      <div className="bc-form">
        <FormSelect
          label={"Type of your business"}
          value={formInputs.type}
          width={"45%"}
          name={"type"}
          inputHandler={inputHandler}
          default_option="What type of business do you have?"
        />
        <FormSelect
          label={"Business Category"}
          value={formInputs.business}
          width={"45%"}
          name={"business"}
          inputHandler={inputHandler}
          default_option="What category does your business belong to?"
        />
      </div>
      <div className="bc-pos">
        <p>Do you use POS machines for your business?</p>
        <div className="bc-pos-buttons">
          <Style.Button onClick={() => checkPos(true)} active={pos}>
            Yes
          </Style.Button>
          <Style.Button onClick={() => checkPos(false)} active={!pos}>
            No
          </Style.Button>
        </div>
      </div>
      <hr></hr>
      <Button className="bc-continue" onClick={nextStep}>
        Complete
      </Button>
    </Style.Container>
  );
}

export default BusinessCategory;

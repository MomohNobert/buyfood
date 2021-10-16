import { useState } from "react";
import BVNPrompt from "../../../molecules/BVNPrompt/bvnPrompt.component";
import FormInput from "../../../molecules/FormInput/formInput.component";
import FormSelect from "../../../molecules/FormSelect/formSelect.component";
import Button from "../../../atoms/Button/button.atom";
import { Style } from "./verifyAccount.styles";
import toast from "react-hot-toast";

const bank_options = ["GT-BANK", "WEMA-BANK", "ACCESS-BANK"];

function VerifyAccount({ setStep }) {
  const fail_notify = (str) => toast.error(str);
  const [mode, setMode] = useState("bvn");

  const [formInputs, setFormInputs] = useState({
    bvn: "",
    acc_no: "",
    bank: "",
  });

  function changeMode(str) {
    if (str === mode) {
      return;
    }
    str === "bvn" ? setMode("bvn") : setMode("pan");
  }

  function inputHandler({ target }) {
    const { name, value } = target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  }

  function nextStep() {
    if (mode === "bvn") {
      formInputs.bvn.trim().length !== 11
        ? fail_notify("Please check your BVN number.")
        : setStep(2);
    } else {
      if (formInputs.acc_no.trim().length !== 10) {
        fail_notify("Please check your Account number.");
        return;
      } else {
        formInputs.bank
          ? setStep(2)
          : fail_notify("Make sure you've selected a bank.");
      }
    }
  }

  return (
    <Style.Container>
      <h2>Verify Account</h2>
      <span className="va-current-span">Select a verification method</span>
      <div className="va-buttons">
        <Style.Button active={mode === "bvn"} onClick={() => changeMode("bvn")}>
          BVN
        </Style.Button>
        <Style.Button active={mode === "pan"} onClick={() => changeMode("pan")}>
          Personal Account Number
        </Style.Button>
      </div>
      <div className="va-form">
        {mode === "bvn" ? (
          <FormInput
            label={"Bank Verification Number (11-digits)"}
            value={formInputs.bvn}
            width={"100%"}
            name={"bvn"}
            inputHandler={inputHandler}
          />
        ) : (
          <>
            <FormInput
              label={"Account Number"}
              value={formInputs.acc_no}
              width={"45%"}
              name={"acc_no"}
              inputHandler={inputHandler}
            />
            <FormSelect
              label={"Select Bank"}
              value={formInputs.bank}
              width={"45%"}
              name={"bank"}
              inputHandler={inputHandler}
              options={bank_options}
              default_option={"choose a bank"}
            />
          </>
        )}
      </div>
      {mode === "bvn" && <BVNPrompt />}
      <hr></hr>
      <Button className="va-continue" onClick={nextStep}>
        Continue
      </Button>
    </Style.Container>
  );
}

export default VerifyAccount;

import React, {useState} from "react";

import UserDetailsForm from "../UserDetailsForm/UserDetailsForm";
import UserEducationForm from "../UserEducationForm/UserEducationForm";
import UserExperienceForm from "../UserExperienceForm/UserExperienceForm";

const UserForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <UserDetailsForm nextStep={nextStep}/>;
    case 2:
      return <UserEducationForm nextStep={nextStep} prevStep={prevStep}/>;
    case 3:
      return <UserExperienceForm nextStep={nextStep} prevStep={prevStep}/>;
  }
}

export default UserForm

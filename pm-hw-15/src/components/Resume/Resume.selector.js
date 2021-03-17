import {createStructuredSelector} from "reselect";

import infoSelector from "../UserDetailsForm/UserDetails.selector";
import educationSelector from "../UserEducationForm/UserEducation.selector";
import experienceSelector from "../UserExperienceForm/UserExperience.selector";

const selector = createStructuredSelector({
  info: infoSelector,
  education: educationSelector,
  experience: experienceSelector
})

export default selector;

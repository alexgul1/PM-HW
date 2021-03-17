import * as Yup from "yup";

const UserExperienceSchema = Yup.object().shape({
  companies: Yup.array()
    .of(
      Yup.object().shape({
        position: Yup.string()
          .min(3, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        company: Yup.string()
          .min(3, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        startDate: Yup.date().typeError("Invalid Date").required('Required'),
        endDate: Yup.date()
          .when(
            'startDate',
            (startDate, schema) => (startDate && schema.min(startDate, "End date must be greater"))
          )
      })
    )
    .required("Must have experience")
    .min(1, "Minimum of 1 company")
});

export default UserExperienceSchema;

import * as Yup from "yup";

const UserEducationSchema = Yup.object().shape({
  schools: Yup.array()
    .of(
      Yup.object().shape({
        school: Yup.string()
          .min(5, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        speciality: Yup.string()
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
    .required("Must have education")
    .min(1, "Minimum of 1 school")


});

export default UserEducationSchema;

import React from "react";
import {Field, FieldArray, Form, Formik} from "formik";

const UserEducationForm = ({nextStep, prevStep}) => {
  const onSubmit = (values) => {
    console.log(values)
    nextStep();
  }

  return (
    <div>
      <h1>User Education</h1>
      <Formik initialValues={{
        schools: [
          {
            schoolName: '',
            specialityName: '',
            startDate: '',
            endDate: ''
          },
          {
            schoolName: '',
            specialityName: '',
            startDate: '',
            endDate: ''
          }
        ]
      }} onSubmit={onSubmit}>
        {({values}) => (
          <Form>
            <FieldArray name="schools">
              {({remove, push}) => (
                <div>
                  {values.schools.length > 0 &&
                  values.schools.map((school, index) => (
                    <div key={index}>

                      <label htmlFor={`schools.${index}.schoolName`}>School Name</label>
                      <Field name={`schools.${index}.schoolName`} placeholder="School Name"/>

                      <label htmlFor={`schools.${index}.specialityName`}>Speciality Name</label>
                      <Field name={`schools.${index}.specialityName`} placeholder="Speciality Name"/>

                      <label htmlFor={`schools.${index}.startDate`}>Start Date</label>
                      <Field name={`schools.${index}.startDate`} placeholder="Start date" type="date"/>

                      <label htmlFor={`schools.${index}.endDate`}>End Date</label>
                      <Field name={`schools.${index}.endDate`} placeholder="End date" type="date"/>
                      <button type="button" onClick={() => remove(index)}>x</button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push({
                    schoolName: '',
                    specialityName: '',
                    startDate: '',
                    endDate: ''
                  })}>add new
                  </button>


                </div>
              )}
            </FieldArray>
            <button type="button" onClick={prevStep}>Prev Step</button>
            <button type="submit">Next Step</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserEducationForm;

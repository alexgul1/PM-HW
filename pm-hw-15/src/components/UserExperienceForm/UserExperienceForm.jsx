import React from "react";
import {Field, FieldArray, Form, Formik} from "formik";

const UserExperienceForm = ({nextStep, prevStep}) => {
  const onSubmit = (values) => {
    console.log(values)
    nextStep()
  }

  return (
    <div>
      <h1>User Experience</h1>
      <Formik initialValues={{
         companies: [
           {
             position: '',
             company: '',
             startDate: '',
             endDate: '',
           }
         ]
      }} onSubmit={onSubmit}>
        {({values}) => (
          <Form>
            <FieldArray name="companies">
              {({remove, push}) => (
                <div>
                  {values.companies.length > 0 &&
                  values.companies.map((company, index) => (
                    <div key={index}>
                      <label htmlFor={`companies.${index}.position`}>Position</label>
                      <Field name={`companies.${index}.position`} placeholder="Position"/>

                      <label htmlFor={`companies.${index}.company`}>Company</label>
                      <Field name={`companies.${index}.company`} placeholder="Company"/>

                      <label htmlFor={`companies.${index}.startDate`}>Start Date</label>
                      <Field name={`companies.${index}.startDate`} placeholder="Start date" type="date"/>

                      <label htmlFor={`companies.${index}.endDate`}>End Date</label>
                      <Field name={`companies.${index}.endDate`} placeholder="End date" type="date"/>
                      <button type="button" onClick={() => remove(index)}>x</button>
                    </div>
                  ))}

                  <button type="button" onClick={() => push({
                    position: '',
                    company: '',
                    startDate: '',
                    endDate: '',
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

export default UserExperienceForm;

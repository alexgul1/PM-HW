import React from "react";
import {Formik, Field, Form} from "formik";

const UserDetailsForm = ({nextStep}) => {
  const onSubmit = (values) => {
    console.log(values)
    nextStep();
  }

  return (
    <div>
      <h1>User details</h1>
      <Formik initialValues={{
        firstName: '',
        lastName: '',
        position: '',
        phone: '',
        email: ''
      }} onSubmit={onSubmit}>
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" placeholder="first name" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" placeholder="last name" />

          <label htmlFor="position">Position</label>
          <Field name="position" placeholder="position" />

          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="phone" placeholder="phone" />

          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="email" />

          <button type="submit">Next Step</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserDetailsForm;

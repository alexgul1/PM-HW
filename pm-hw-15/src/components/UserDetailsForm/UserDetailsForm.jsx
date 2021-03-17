import React from "react";
import {Formik, Field, Form} from "formik";
import classNames from 'classnames';

import styles from '../UserForm/UserForm.module.css';

const UserDetailsForm = ({nextStep}) => {
  const onSubmit = (values) => {
    console.log(values)
    nextStep();
  }

  return (
    <div>
      <h1 className={styles.title}>User details</h1>
      <div className={styles.formContainer}>
        <Formik initialValues={{
          firstName: '',
          lastName: '',
          position: '',
          phone: '',
          email: ''
        }} onSubmit={onSubmit}>
          <Form>
            <div className={styles.form}>
              <div className={styles.fieldBoxRow}>
                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel} htmlFor="firstName">First Name</label>
                  <Field className={styles.field} name="firstName" placeholder="first name" />
                </div>

                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel} htmlFor="lastName">Last Name</label>
                  <Field className={styles.field} name="lastName" placeholder="last name" />
                </div>
              </div>

              <div className={styles.fieldBoxRow}>
                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel} htmlFor="phone">Phone</label>
                  <Field className={styles.field} name="phone" type="phone" placeholder="phone" />
                </div>

                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel} htmlFor="email">Email</label>
                  <Field className={styles.field} name="email" placeholder="email" />
                </div>
              </div>

              <div className={styles.fieldBox}>
                <label className={styles.fieldLabel} htmlFor="position">Position</label>
                <Field className={styles.field} name="position" placeholder="position" />
              </div>

              <div className={styles.btnBoxRow}>
                <button className={classNames(styles.btn, styles.nextBtn)} type="submit">Next Step</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>

    </div>
  )
}

export default UserDetailsForm;

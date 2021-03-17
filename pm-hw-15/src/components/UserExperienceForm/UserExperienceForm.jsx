import React from "react";
import {Field, FieldArray, Form, Formik} from "formik";
import classNames from 'classnames';

import styles from '../UserForm/UserForm.module.css';

const UserExperienceForm = ({nextStep, prevStep}) => {
  const onSubmit = (values) => {
    console.log(values)
    nextStep()
  }

  return (
    <div>
      <h1 className={styles.title}>User Experience</h1>
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
                <div className={styles.formContainer}>
                  {values.companies.length > 0 &&
                  values.companies.map((company, index) => (
                    <div className={styles.form} key={index}>
                      <div className={styles.fieldBoxRow}>
                        <div className={styles.fieldBox}>
                          <label className={styles.fieldLabel} htmlFor={`companies.${index}.position`}>Position</label>
                          <Field className={styles.field} name={`companies.${index}.position`} placeholder="Position"/>
                        </div>

                        <div className={styles.fieldBox}>
                          <label className={styles.fieldLabel} htmlFor={`companies.${index}.company`}>Company</label>
                          <Field className={styles.field} name={`companies.${index}.company`} placeholder="Company"/>
                        </div>
                      </div>
                      <div className={styles.fieldBoxRow}>
                        <div className={styles.fieldBox}>
                          <label className={styles.fieldLabel} htmlFor={`companies.${index}.startDate`}>Start Date</label>
                          <Field className={styles.field} name={`companies.${index}.startDate`} placeholder="Start date" type="date"/>
                        </div>

                        <div className={styles.fieldBox}>
                          <label className={styles.fieldLabel} htmlFor={`companies.${index}.endDate`}>End Date</label>
                          <Field className={styles.field} name={`companies.${index}.endDate`} placeholder="End date" type="date"/>
                        </div>
                        <button type="button" className={classNames(styles.btn, styles.removeBtn)}
                                onClick={() => remove(index)}>Remove
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className={styles.btnBoxRow}>
                    <button className={classNames(styles.btn, styles.addMoreBtn)} type="button" onClick={() => push({
                      schoolName: '',
                      specialityName: '',
                      startDate: '',
                      endDate: ''
                    })}>Add more
                    </button>
                  </div>
                </div>
              )}
            </FieldArray>
            <div className={styles.btnBoxRow}>
              <button className={classNames(styles.btn, styles.prevBtn)} type="button" onClick={prevStep}>Prev Step
              </button>
              <button className={classNames(styles.btn, styles.nextBtn)} type="submit">Next Step</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserExperienceForm;

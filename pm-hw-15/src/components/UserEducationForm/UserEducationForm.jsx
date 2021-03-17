import React from "react";
import {Field, FieldArray, Form, Formik} from "formik";
import classNames from 'classnames';

import styles from '../UserForm/UserForm.module.css';

const UserEducationForm = ({nextStep, prevStep}) => {
  const onSubmit = (values) => {
    console.log(values)
    nextStep();
  }

  return (
    <div>
      <h1 className={styles.title}>User Education</h1>
      <Formik initialValues={{
        schools: [
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
                <div className={styles.formContainer}>
                  {values.schools.length > 0 &&
                  values.schools.map((school, index) => (
                    <div className={styles.form} key={index}>
                      <div className={styles.fieldBoxRow}>
                        <div className={styles.fieldBox}>
                          <label className={styles.fieldLabel} htmlFor={`schools.${index}.schoolName`}>School
                            Name</label>
                          <Field className={styles.field} name={`schools.${index}.schoolName`}
                                 placeholder="School Name"/>
                        </div>
                        <div className={styles.fieldBox}>
                          <label className={styles.fieldLabel} htmlFor={`schools.${index}.specialityName`}>Speciality
                            Name</label>
                          <Field className={styles.field} name={`schools.${index}.specialityName`}
                                 placeholder="Speciality Name"/>
                        </div>
                      </div>
                      <div className={styles.fieldBoxRow}>
                        <div className={styles.fieldBox}>
                          <label className={styles.fieldLabel} htmlFor={`schools.${index}.startDate`}>Start Date</label>
                          <Field className={styles.field} name={`schools.${index}.startDate`} placeholder="Start date"
                                 type="date"/>
                        </div>
                        <div className={styles.fieldBox}>
                          <label className={styles.fieldLabel} htmlFor={`schools.${index}.endDate`}>End Date</label>
                          <Field className={styles.field} name={`schools.${index}.endDate`} placeholder="End date"
                                 type="date"/>
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

export default UserEducationForm;

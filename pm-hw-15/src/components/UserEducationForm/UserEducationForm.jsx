import React from "react";
import {FieldArray, Form, Formik, getIn} from "formik";
import classNames from 'classnames';

import styles from '../UserForm/UserForm.module.css';
import UserEducationSchema from "./UserEducationSchema";
import UserEducation from "./UserEducation";
import FieldBox from "../FieldBox/FieldBox";
import {useDispatch, useSelector} from "react-redux";
import selector from "./UserEducation.selector";
import {setEducation} from "../../ducks/education";

const UserEducationForm = ({nextStep, prevStep}) => {
  const dispatch = useDispatch();
  const educations = useSelector(selector);

  const onSubmit = (values) => {
    dispatch(setEducation(values))
    nextStep();
  }

  return (
    <div>
      <h1 className={styles.title}>User Education</h1>
      <Formik
        initialValues={{
          schools: educations
        }}
        validationSchema={UserEducationSchema}
        onSubmit={onSubmit}>
        {({values, touched, errors}) => (
          <Form>
            <FieldArray name="schools">
              {({remove, push}) => (
                <div className={styles.formContainer}>
                  {values.schools.length > 0 &&
                  values.schools.map((school, index) => (
                    <div className={styles.form} key={index}>
                      <div className={styles.fieldBoxRow}>
                        <FieldBox name={`schools.${index}.school`} value={values.schools[index].school}
                                  label="School Name" error={getIn(errors, `schools[${index}].school`)}
                                  isTouched={getIn(touched, `schools[${index}].school`)}/>

                        <FieldBox name={`schools.${index}.speciality`} value={values.schools[index].speciality}
                                  label="Speciality Name" error={getIn(errors, `schools[${index}].speciality`)}
                                  isTouched={getIn(touched, `schools[${index}].speciality`)}/>
                      </div>
                      <div className={styles.fieldBoxRow}>
                        <FieldBox name={`schools.${index}.startDate`} value={values.schools[index].startDate}
                                  type="date"
                                  label="Start Date" error={getIn(errors, `schools[${index}].startDate`)}
                                  isTouched={getIn(touched, `schools[${index}].startDate`)}/>

                        <FieldBox name={`schools.${index}.endDate`} value={values.schools[index].endDate} type="date"
                                  label="End Date" error={getIn(errors, `schools[${index}].endDate`)}
                                  isTouched={getIn(touched, `schools[${index}].endDate`)}/>

                        <button type="button" className={classNames(styles.btn, styles.removeBtn)}
                                onClick={() => remove(index)}>Remove
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className={styles.btnBoxRow}>
                    <button className={classNames(styles.btn, styles.addMoreBtn)} type="button"
                            onClick={() => push(new UserEducation())}>Add more
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

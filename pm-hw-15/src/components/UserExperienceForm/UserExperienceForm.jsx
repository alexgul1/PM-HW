import React from "react";
import {FieldArray, Form, Formik, getIn} from "formik";
import classNames from 'classnames';

import styles from '../UserForm/UserForm.module.css';
import {useHistory} from "react-router-dom";
import FieldBox from "../FieldBox/FieldBox";

import UserExperienceSchema from "./UserExperienceSchema";
import UserExperience from "./UserExperience";
import {useDispatch, useSelector} from "react-redux";
import selector from "./UserExperience.selector";
import {setExperience} from "../../ducks/experience";

const UserExperienceForm = ({prevStep}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const experiences = useSelector(selector);

  const onSubmit = (values) => {
    dispatch(setExperience(values));
    history.push('/resume');
  }

  return (
    <React.Fragment>
      <h1 className={styles.title}>User Experience</h1>
      <Formik
        initialValues={{
          companies: experiences
        }}
        validationSchema={UserExperienceSchema}
        onSubmit={onSubmit}>
        {({values, touched, errors}) => (
          <Form>
            <FieldArray name="companies">
              {({remove, push}) => (

                <div className={styles.formContainer}>
                  {values.companies.length > 0 &&
                  values.companies.map((company, index) => (
                    <div className={styles.form} key={index}>
                      <FieldBox name={`companies.${index}.company`} value={values.companies[index].company}
                                label="Company" error={getIn(errors, `companies[${index}].company`)}
                                isTouched={getIn(touched, `companies[${index}].company`)}/>

                      <FieldBox name={`companies.${index}.position`} value={values.companies[index].position}
                                label="Position" error={getIn(errors, `companies[${index}].position`)}
                                isTouched={getIn(touched, `companies[${index}].position`)}/>

                      <FieldBox name={`companies.${index}.startDate`} value={values.companies[index].startDate}
                                type="date" label="Start Date" error={getIn(errors, `companies[${index}].startDate`)}
                                isTouched={getIn(touched, `companies[${index}].startDate`)}/>

                      <FieldBox name={`companies.${index}.endDate`} value={values.companies[index].endDate}
                                type="date" label="End Date" error={getIn(errors, `companies[${index}].endDate`)}
                                isTouched={getIn(touched, `companies[${index}].endDate`)}/>

                      <button type="button" className={classNames(styles.btn, styles.removeBtn)}
                              onClick={() => remove(index)}>Remove
                      </button>
                    </div>
                  ))}

                  <div className={styles.btnBoxRow}>
                    <button className={classNames(styles.btn, styles.addMoreBtn)} type="button"
                            onClick={() => push(new UserExperience())}>Add more
                    </button>
                  </div>
                </div>
              )}
            </FieldArray>
            <div className={styles.btnBoxRow}>
              <button className={classNames(styles.btn, styles.prevBtn)} type="button" onClick={prevStep}>Prev Step
              </button>
              <button className={classNames(styles.btn, styles.nextBtn)} type="submit">Create Resume</button>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

export default UserExperienceForm;

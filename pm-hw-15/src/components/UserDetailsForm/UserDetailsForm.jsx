import React from "react";
import {Formik, Field, Form} from "formik";
import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";

import FieldBox from "../FieldBox/FieldBox";
import UserDetailsSchema from "./UserDetailsSchema";
import selector from "./UserDetails.selector";

import styles from '../UserForm/UserForm.module.css';
import {setInfo} from "../../ducks/info";

const UserDetailsForm = ({nextStep}) => {
  const dispatch = useDispatch();
  const info = useSelector(selector)

  const onSubmit = (values) => {
    dispatch(setInfo(values))
    nextStep();
  }

  return (
    <div>
      <h1 className={styles.title}>User details</h1>
      <div className={styles.formContainer}>
        <Formik
          initialValues={info}
          validationSchema={UserDetailsSchema}
          onSubmit={onSubmit}>
          {({values, errors, touched}) => (
            <Form>
              <div className={styles.form}>
                <div className={styles.fieldBoxRow}>
                  <FieldBox name="firstName" label="First Name" value={values.firstName}
                            error={errors.firstName} isTouched={touched.firstName}/>
                  <FieldBox name="lastName" label="Last Name" value={values.lastName}
                            error={errors.lastName} isTouched={touched.lastName}/>
                </div>

                <div className={styles.fieldBoxRow}>
                  <FieldBox name="phone" label="Phone" value={values.phone}
                            error={errors.phone} isTouched={touched.phone}/>
                  <FieldBox name="email" label="Email" value={values.email}
                            error={errors.email} isTouched={touched.email}/>
                </div>

                <FieldBox name="position" label="Position" value={values.position}
                          error={errors.position} isTouched={touched.position}/>

                <div className={styles.btnBoxRow}>
                  <button className={classNames(styles.btn, styles.nextBtn)} type="submit">Next Step</button>
                </div>
              </div>
            </Form>
          )}

        </Formik>
      </div>

    </div>
  )
}

export default UserDetailsForm;

import React from 'react';
import {Field} from "formik";
import classNames from "classnames";

import styles from "../UserForm/UserForm.module.css";

const FieldBox = ({name, value, error, isTouched, label, type}) => {
  return (
    <div className={styles.fieldBox}>
      <label className={styles.fieldLabel} htmlFor={name}>{label}</label>
      <Field className={classNames(styles.field, {[styles.invalid]: error && isTouched})} value={value} name={name}
             placeholder={label} type={type}/>
      {error && isTouched && <div className={styles.errorMsg}>{error}</div>}
    </div>
  )
}

FieldBox.defaultProps = {
  type: 'input'
}

export default FieldBox;

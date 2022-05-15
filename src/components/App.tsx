import { useState, useEffect } from 'react';
/** Styles */
import styles from './App.module.scss';
/** Components */
import Input from 'components/Layouts/FormComponents/Input/Input';
import Label from 'components/Layouts/FormComponents/Label/Label';
import Select from 'components/Layouts/FormComponents/Select/Select';
import RequiredField from 'components/Layouts/FormValidation/RequiredField/RequiredField.component';
import InvalidValue from './Layouts/FormValidation/InvalidValue/InvalidValue';
import InfoField from './Layouts/FormValidation/InfoField/InfoField';
/** Types and constants */
import { initialUser, initialValidation } from 'components/App.types';
import { EMAIL_MAX, PASSWORD_MAX, PASSWORD_MIN, userRoles } from './App.constants';
/** Utils */
import { validate, validatePassword } from "components/Layouts/FormValidation/FormValidation.utils";

function App() {

  const [user, setUser] = useState(initialUser);
  const [validation, setValidation] = useState(initialValidation);
  const [isFormValid, setIsformValid] = useState(false);
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  const handleSubmit = () => {
    console.log("Action after form submit");
  }

  /** Check if the form is valid on user change */
  useEffect(() => {
    const isValid = validation.email.valid && validation.password.valid && !validation.password.min
      && user.email.length > 0 && user.password.length > 0 && user.role > 0 && user.username.length > 0;
      setIsformValid(isValid);
  }, [validation, isFormValid, user]);

  return (
    <div className={styles.wrapper}>
      <div className={styles["form-wrapper"]}>
        <div className={styles.heading}>
          <div>{"Sign Up"}</div>
          <div>{"Let's create your account"}</div>
        </div>  
        <form id="likeminded-form" onClick={handleSubmit} autoComplete="off" className={styles.form}>   
          {/* Email */}
          <div className={styles["form-group"]}>
            <Label className={styles["form-label"]}>
              {"Email"}
            </Label>
              <Input
                type="text"
                name="email"
                value={user.email}
                onChange={(e:any) => {
                  setUser({...user, [e.target.name]: e.target.value });
                  setValidation(Object.assign({}, validation, { email: {
                    required: validate("required", e),
                    valid: validate("email", e)
                  }}))
                }}
                className={`${validation.email.required || !validation.email.valid ? `${styles["form-field-invalid"]}` : `${styles["form-field"]}`}`}
                max={EMAIL_MAX}
              />
            <div style={{height: 4}}>
              {validation.email.required && <RequiredField className={styles["required-field"]}/>}
              {!validation.email.required && !validation.email.valid && <InvalidValue name={"Email"} className={styles["required-field"]}/>}
            </div>
          </div>
          {/* Password */}
          <div className={styles["form-group"]} style={{marginBottom: 50}}>
            <Label className={styles["form-label"]}>
              {"Password"}
            </Label>
            <div className={styles.password}>
              <Input
                id="password-field"
                type={passwordFieldType}
                name="password"
                value={user.password}
                onChange={(e:any) => {
                  setUser({...user, [e.target.name]: e.target.value });
                  setValidation(Object.assign({}, validation, { password: {
                    required: validate("required", e),
                    valid: validatePassword(e.target.value, user.role === 2)
                  }}))
                }}
                className={`${validation.password.required || !validation.password.valid ? `${styles["form-field-invalid"]}` : `${styles["form-field"]}`}`}
                style={{borderRadius: "8px 0 0 8px", width: "86%"}}
                max={PASSWORD_MAX}
                min={PASSWORD_MIN}
              />
              <div 
                className={styles.eye} 
                onClick={() => setPasswordFieldType(passwordFieldType === "password" ? "text" : "password")}
              >
                <div>
                 {passwordFieldType === "text"
                    ? <svg xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  } 
                </div>
              </div>
            </div>
            <div style={{height: 8, display: "flex", flexDirection: "column"}}>
              {validation.password.required && <RequiredField className={styles["required-field"]}/>}
              {!validation.password.required && !validation.password.valid && <InvalidValue name={"Password"} className={styles["required-field"]}/>}
              {user.role === 2 // is a user Mentor?
                ? <InfoField className={styles["info-field"]} message={`Minimum 8 characters with 1 number, 1 uppercase letter and 2 symbols`}/>
                : <InfoField className={styles["info-field"]} message={`Minimum 8 characters with 1 number and one uppercase letter`}/>
              }
            </div>
          </div>

          {/* Username */}
          <div className={styles["form-group"]}>
            <Label className={styles["form-label"]}>
              {"Username"}
            </Label>
            <Input
              type="text"
              name="username"
              value={user.username}
              onChange={(e:any) => {
                setUser({...user, [e.target.name]: e.target.value });
                setValidation(Object.assign({}, validation, { username: {
                  required: validate("required", e)}}))}
              }
              className={`${validation.username.required ? `${styles["form-field-invalid"]}` : `${styles["form-field"]}`}`}
              max={30}
              min={2}
            />
            <div style={{height: 4}}>
              {validation.username.required && <RequiredField className={styles["required-field"]}/>}
            </div>
          </div>
          {/* User role */}
          <div className={styles["form-group"]}>
            <Label className={styles["form-label"]}>
              {"User role"}
            </Label>
            <Select 
              name="role"
              value={user.role}
              options={userRoles}
              onChange={(e:any) => {
                setUser({...user, [e.target.name]: parseInt(e.target.value) });
                setValidation(Object.assign({}, 
                  validation, { 
                    role: {required: validate("role", e)},
                    password: {valid: validatePassword(user.password, parseInt(e.target.value) === 2)}
                  }
                ))}
              }
              className={`${validation.role.required ? `${styles["form-field-invalid"]}` : `${styles["form-field"]}`}`}
              style={{width: "100%"}}
            />
            <div style={{height: 4}}>
              {validation.role.required && <RequiredField className={styles["required-field"]}/>}
            </div>
          </div>
          <button 
            className={styles["create-action"]} 
            disabled={!isFormValid}
          >
            {"Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

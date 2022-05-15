import { useState } from 'react';
/** Components */
import Input from 'components/Layouts/FormComponents/Input/Input';
import Label from 'components/Layouts/FormComponents/Label/Label';
import Select from 'components/Layouts/FormComponents/Select/Select';
/** Styles */
import styles from './App.module.scss';
/** Types and constants */
import { initialUser } from 'components/App.types';
import { userRoles } from './App.constants';

function App() {

  const [user, setUser] = useState(initialUser);
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  const handleSubmit = () => {
    console.log('Action after form submit');
  }

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
                }}
                className={styles["form-field"]}
              />
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
                }}
                className={styles["form-field"]}
                style={{borderRadius: "8px 0 0 8px", width: "86%"}}
              />
              <div className={styles.eye} onClick={() => setPasswordFieldType(passwordFieldType === "password" ? "text" : "password")}>
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
                setUser({...user, [e.target.name]: e.target.value })
              }}
              className={styles["form-field"]}
            />
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
              }}
              className={styles["form-field"]}
              style={{width: "100%"}}
            />
          </div>
          <button 
            className={styles["create-action"]} 
          >
            {"Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

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
                type={"password"}
                name="password"
                value={user.password}
                onChange={(e:any) => {
                  setUser({...user, [e.target.name]: e.target.value });
                }}
                className={styles["form-field"]}
              />
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

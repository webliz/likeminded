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
          <div>
            <Label>
              {"Email"}
            </Label>
              <Input
                type="text"
                name="email"
                value={user.email}
                onChange={(e:any) => {
                  setUser({...user, [e.target.name]: e.target.value });
                }}
              />
          </div>
          {/* Password */}
          <div style={{marginBottom: 50}}>
            <Label>
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
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <Label>
              {"Username"}
            </Label>
            <Input
              type="text"
              name="username"
              value={user.username}
              onChange={(e:any) => {
                setUser({...user, [e.target.name]: e.target.value })
              }}
            />
          </div>
          {/* User role */}
          <div>
            <Label>
              {"User role"}
            </Label>
            <Select 
              name="role"
              value={user.role}
              options={userRoles}
              onChange={(e:any) => {
                setUser({...user, [e.target.name]: parseInt(e.target.value) });
              }}
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

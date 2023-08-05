//imports
import styles from '../styles/homepage.module.css';
import textstyles from '../styles/texts.module.css';
import Link from 'next/link';

//export default 
export default function HomePage(){
  return(
    <>
      <div className={styles.body}>
        <div className={styles.centerbox}>
          <div className={styles.loginside}>
            <div className={styles.login}>
              <div className={styles.loginheading}>
                <text className={textstyles.heading}>Log In</text>
              </div>
              <input type="text" className={styles.input} placeholder='username'></input>
              <input type="password" className={styles.input} placeholder='password'></input>
              <button className={styles.signinbutton}>Log In</button>
            </div>
          </div>
          <div className={styles.signinside}>
            <div className={styles.login}>
              <div className={styles.loginheading}>
                <span className={textstyles.heading}>Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
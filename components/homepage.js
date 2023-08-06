//imports
import styles from '../styles/homepage.module.css';
import textstyles from '../styles/texts.module.css';
import Link from 'next/link';
import {useState} from 'react';

//export default 
export default function HomePage(){
  //Event listeners
  const login = () => {
    console.log("Looking for username/password pair");
    //Check database for u/p pair
    console.log("Button clicked");
  }
  const enterusername = (event) => {
    console.log("Username changed");
    setUsername(event.target.value);
  }
  const enterpassword = (event) => {
    console.log("Password changed");
    setPassword(event.target.value);
    console.log(password);
  }
  const handleSUHover = () => {
    setSUHoverState(true);
    console.log("Mouse Entered Sign Up Box");
  }
  const handleSULeave = () => {
    setSUHoverState(false);
    console.log("Mouse Left Sign Up Box");
  }
  //useStates
  const [signuphover,setSUHoverState] = useState(false);
  const [username,setUsername] = useState(0);
  const [password,setPassword] = useState(0);
  //variable CSS states
  const logindiv = {
    display: signuphover?"flex":"none"
  };
  const signindiv = {
    display: signuphover?"none":"flex"
  }

  return(
    <>
      <div className={styles.body}>
        <div onMouseLeave={handleSULeave} className={styles.centerbox}>
          <div className={styles.loginside}>
            <div className={styles.login}>
              <div className={styles.loginheading}>
                <span className={textstyles.heading}>Log In</span>
              </div>
              <input onChange={enterusername} name="username" type="text" className={styles.input} placeholder='username'></input>
              <input onChange={enterpassword} name="password" type="password" className={styles.input} placeholder='password'></input>
              <button type="submit" className={styles.signinbutton} onClick={login}>Log In</button>
            </div>
          </div>
          <div onMouseEnter={handleSULeave} style={logindiv} className={styles.loginsidecover}><span className={textstyles.h1}>Log In</span></div>
          <div className={styles.signinside}>
            <div className={styles.login}>
              <div className={styles.loginheading}>
                <span className={textstyles.heading}>Sign Up</span>
              </div>
              <div className={styles.namediv}>
                <input type="text" className={styles.input3} placeholder="first name"></input>
                <input type="text" className={styles.input3} placeholder="last name"></input>
              </div>
              <input type="text" className={styles.input2} placeholder='username'></input>
              <input type="password" className={styles.input2} placeholder='password'></input>
              <button className={styles.yellowsigninbutton}>Sign Up</button>
            </div>
          </div>
          <div onMouseEnter={handleSUHover} style={signindiv} className={styles.signinsidecover}><span className={textstyles.h1}>Sign Up</span></div>
        </div>
      </div>
    </>
  );
}
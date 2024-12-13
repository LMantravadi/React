import classes from "./auth.module.css";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import { FormEvent, useRef } from "react";

const Auth = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  // const authState = useSelector((state) => state.auth);
  // const isLoggedIn = authState.isAuthenticated;

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    // const userAuth = {
    //   email: emailRef.current,
    //   password: passwordRef.current,
    //   isAuthenticated: authState.isAuthenticated,
    // };
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

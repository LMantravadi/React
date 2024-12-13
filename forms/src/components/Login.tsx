import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";

interface UserCredentialProps {
  email: string;
  password: string;
}

export default function Login() {
  const [userCredentials, setUserCredentials] = useState<UserCredentialProps>({
    email: "",
    password: "",
  });

  function handleSubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      `Sumitted Input:  ${userCredentials.email} & ${userCredentials.password}`
    );
  }

  function handleUserInputChange(
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) {
    setUserCredentials((prevCredentials) => {
      return { ...prevCredentials, [key]: event.target.value };
    });
  }

  function handleInputLostFocus(
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) {
    
  }

  return (
    <form onSubmit={(e) => handleSubmission(e)}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={userCredentials.email}
            onBlur={(e) => handleInputLostFocus(e, "email")}
            onChange={(e) => handleUserInputChange(e, "email")}
          />
          <div className="control-error">
            {isEmailValid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={userCredentials.password}
            onChange={(e) => handleUserInputChange(e, "password")}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

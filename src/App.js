import "./App.css";
import Meme from "./components/Meme";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    wantToJoin: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up!");
    } else {
      console.log("Passwords do not match!");
      return;
    }
    if (formData.wantToJoin) {
      console.log("Thanks for signing up for our newsletter!");
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Meme />
          {/* <form className="sign-form" onSubmit={submitHandler}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => {
                setFormData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }))
              }
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Conform password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  confirmPassword: e.target.value,
                }))
              }
            />
            <div className="checkbox-controllers">
              <Input
                className="checkbox"
                type="checkbox"
                name="wantToJoin"
                placeholder=""
                checked={formData.wantToJoin}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    wantToJoin: e.target.checked,
                  }))
                }
              />
              <label htmlFor="wantToJoin">I want to join the newsletter</label>
            </div>
            <button className="button" type="submit">
              Sign up
            </button>
          </form> */}
        </div>
      </main>
    </div>
  );
}

export default App;

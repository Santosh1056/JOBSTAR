import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const toogleValues = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const onSumbit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!name && !isMember)) {
      toast.error("Please Fill Out All Fields!");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name: name, email: email, password: password }));
  };
  return (
    <Wrapper className="full-page">
      <form onSubmit={onSumbit} className="form">
        <Logo />
        <h3>{values.isMember ? "login" : "register"}</h3>
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading..." : "sumbit"}
        </button>
        <button
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          type="button"
          onClick={() =>
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            )
          }
        >
          {isLoading ? "loading..." : "demo"}
        </button>
        <p>
          {values.isMember ? "Not a member yet ?" : "Already a member ?"}
          <button type="button" onClick={toogleValues} className="member-btn">
            {!values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;

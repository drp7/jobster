import React, { useEffect, useState } from "react";
import { Logo, FormRow } from "../components";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export default function Register() {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ email, password, name }));
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000);
    }
  }, [navigate, user]);
  if (user) {
    return (
      <div className="min-h-screen  bg-gradient-to-tr from-blue-900 to-slate-900 grid place-items-center">
        <h1 className="animate-blue-pulse bg-gradient-to-tr from-pink-500 via-teal-500 to-green-500 text-5xl font-semibold text-transparent bg-clip-text">
          Hello, <span className="capitalize ">{user?.name}</span> <br />
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen   bg-gradient-to-tr from-blue-900 to-slate-900 grid place-items-center ">
      <form
        onSubmit={onSubmit}
        className="bg-gradient-to-bl   w-3/4 sm:max-w-sm  flex flex-col items-center px-4 md:px-8 py-4   gap-3 rounded-2xl shadow-2xl text-lg shadow-violet-500 text-neutral-200 border-t-4 border-blue-600"
      >
        <Logo />
        <h3 className="text-3xl font-semibold text-blue-500">
          {values.isMember ? "Login" : "Register"}
        </h3>
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            handleChange={handleChange}
            value={values.name}
          />
        )}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        />
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-gradient-to-r from-blue-600 to-violet-800  duration-300 ease-in-out hover:bg-gradient-to-b  my-2  w-full px-4 py-2 rounded-md ${
            isLoading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "loading" : "submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member"}
          <button
            className="member-btn ml-3 text-blue-400 hover:underline"
            type="button"
            onClick={toggleMember}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}

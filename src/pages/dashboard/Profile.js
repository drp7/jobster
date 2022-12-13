import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FormRow } from "../../components";
import { updateUser } from "../../features/user/userSlice";
export default function Profile() {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const [userData, setUserData] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    lastName: user?.lastName ?? "",
    location: user?.location ?? "",
  });
  const { name, email, lastName, location } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      toast.error("please fill out all fields");
      return;
    }
    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="p-5 lg:px-16 lg:py-8">
      <form
        onSubmit={handleSubmit}
        className="w-auto   bg-white p-4 lg:py-8   rounded-lg shadow-lg "
      >
        <fieldset className="grid sm:grid-cols-2 lg:grid-cols-3  grid-rows-none gap-3 lg:gap-5 ">
          <legend className="text-4xl mb-4 text-sky-600 ">Profile</legend>
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="last Name"
            value={lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />

          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={handleChange}
          />
          <button
            className="bg-blue-500 text-slate-300 self-end p-1.5 rounded-lg disabled:cursor-not-allowed disabled:opacity-30"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Please wait..." : "save changes"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

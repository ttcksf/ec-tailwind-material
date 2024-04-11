import React, { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "pass") {
      setPass(value);
    }
  };
  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
      <div className="flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-8 md:w-[40%] w-[90%]">
        <text className="text-2xl ">Log in</text>

        <div className="flex mt-8">
          <input
            className="input mt-4 w-[100%]"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            required
          />
        </div>
        <div className="flex mt-7">
          <input
            className="input w-[100%]"
            name="pass"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={pass}
            required
          />
        </div>
        <input
          type="button"
          className="mt-4 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-4 hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] ease-linear duration-200"
          value="ログイン"
          disabled
        />
      </div>
    </div>
  );
};

export default LogIn;

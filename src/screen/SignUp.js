import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    pass: "",
    confirm: "",
    errors: {
      confirm: "",
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#FFC4DD]">
      <div className="flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 w-[90%]">
        <text className="text-2xl ">会員登録</text>

        <div className="flex md:flex-row flex-col mt-8 w-auto">
          <input
            className="input md:mr-4 md:mb-0 mr-0 mb-8"
            name="first"
            type="text"
            placeholder="姓"
            onChange={handleChange}
            value={formData.first}
            required
          />
          <input
            className="input"
            name="last"
            type="text"
            placeholder="名"
            onChange={handleChange}
            value={formData.last}
          />
        </div>

        <input
          className="input mt-8 w-[100%]"
          name="email"
          type="email"
          placeholder="メールアドレス"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <div className="flex md:flex-row flex-col mt-8">
          <input
            className="input md:mr-4 md:mb-0 mr-0 mb-8"
            name="pass"
            type="password"
            placeholder="パスワード"
            onChange={handleChange}
            value={formData.pass}
            required
          />
          <input
            className="input"
            name="confirm"
            type="password"
            placeholder="パスワード(確認)"
            onChange={handleChange}
            value={formData.confirm}
            required
          />
        </div>
        <div className="flex justify-center">
          <span className="flex-1 mr-3"></span>
        </div>

        <input type="button" className="ableBtn activeBtn" value="会員登録" />
      </div>
    </div>
  );
};

export default SignUp;

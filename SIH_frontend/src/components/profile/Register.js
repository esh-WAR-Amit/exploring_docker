import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { HiEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../common";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const name = firstName + " " + lastName;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [err, seterr] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateFirstName = (value) => {
    // You can add more complex validation rules here
    if (!value) {
      setFirstNameValid(false);
      return false;
    }
    setFirstNameValid(true);
    return true;
  };

  const validateEmail = (value) => {
    if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
      setEmailValid(false);
      return false;
    }
    setEmailValid(true);
    return true;
  };

  const validatePassword = (value) => {
    if (!value || value.length < 6) {
      setPasswordValid(false);
      return false;
    }
    setPasswordValid(true);
    return true;
  };

  const handleRegister = async () => {
    // Check if first name is valid and passwords match
    if (!validateEmail(email) || !validateFirstName(firstName)) {
      return;
    } else if (!validatePassword(password) || password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/api/v1/register`, {
        name,
        email,
        password,
      });
      // console.log(response);
      if (response.data.success === false) {
        seterr(response.data.message);
        return;
      }
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[50vh]">
        <div className="sm:pl-4 flex sm:w-[480px] h-fit w-[340px] bg-gray-100 flex-col mt-52 p-3 justify-center rounded-md">
          {/* <div className="flex justify-center items-center sm:w-[440px]  mt-4 mb-3">
					<Image
						width={20}
						height={20}
						src={'/images/NameLogo.svg'}
						className="ml-[-100px] sm:w-[260px] w-[210px] h-[47px] sm:ml-0 sm:h-[60px] sm:justify-center sm:items-center"
						alt="Logo"
					/>
				</div> */}
          <div className="flex w-full flex-col sm:max-w-[450px]  justify-between">
            <div className="flex w-full flex-col mb-2">
              <p className="flex-wrap text-xl text-center items-center font-semibold mb-4 my-2">
                Create Account
              </p>
              <p className="flex-wrap text-xs mb-2 text-center text-gray-500">
                One last step to know about your disease
              </p>
            </div>
            <div className="flex w-full flex-col">
              <input
                type="email"
                placeholder="Email or Mobile number"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className={`w-full h-[47px] py-1 px-2 border border-gray-400 rounded-md ${
                  !emailValid ? "border-red-500" : ""
                }`}
              />
              {!emailValid && (
                <p className="text-red-500 text-xs">Invalid email address</p>
              )}
            </div>
            <div className="flex grid-flow-row my-3 gap-4 justify-between">
              <input
                type="text"
                placeholder="First-name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  validateFirstName(e.target.value);
                }}
                className={`flex border h-[47px] w-1/2 max-md:mr-3 border-gray-400 py-1 px-2 rounded-md ${
                  !firstNameValid ? "border-red-500" : ""
                }`}
              />
              <input
                type="text"
                placeholder="Last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="flex border h-[47px] w-1/2 border-gray-400 py-1 px-2 rounded-md"
              />
            </div>
            {!firstNameValid && (
              <p className="text-red-500 text-xs">First name is required</p>
            )}
            <div className="grid-flow-col max-md:gap-3 justify-between">
              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  className={`flex border w-full h-[47px] border-gray-400 py-1 px-2 rounded-md my-2 ${
                    !passwordValid ? "border-red-500" : ""
                  }`}
                />
                <HiEye
                  name="eye-fill"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
                />
              </div>
              {!passwordValid && (
                <p className="text-red-500 text-xs">
                  Password must be of atleast 6 characters
                </p>
              )}
              <div className="relative flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`flex border w-full h-[47px] border-gray-400 py-1 px-2 rounded-md my-2 ${
                    !passwordsMatch ? "border-red-500" : ""
                  }`}
                />
                <HiEye
                  name="eye-fill"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
                />
              </div>
            </div>
            {!passwordsMatch && (
              <p className="text-red-500 text-xs">Passwords do not match</p>
            )}
            <button
              className="w-full flex flex-col my-1"
              type="submit"
              onClick={handleRegister}
            >
              <div className="w-full text-white my-2 bg-orange-400  rounded-md h-[48px] p-1 text-center flex items-center justify-center">
                Create Account
              </div>
            </button>
          </div>
          <div className="text-center mb-1">
            <p className="text-red-500 text-xs">{err}</p>
          </div>
          <div className="w-full">
            <p className="text-xs mb-1 text-center text-gray-400 font-semibold">
              Already have a Kritrim_Tatav ID?
              <Link
                to="/login"
                className="font-semibold hover:font-fontBold text-sm mb-2 text-orange-400"
              >
                {" "}
                Log In{" "}
              </Link>
            </p>
          </div>
          <div className="flex flex-row justify-center mb-1">
            <button className="text-[14px] mb-1 text-gray-600 mx-2 hover:font-semibold">
              {" "}
              Help
            </button>
            <button className="text-[14px] mb-1 text-gray-600 mx-2 hover:font-semibold">
              Privacy
            </button>
            <button className="text-[14px] mb-1 text-gray-600 mx-2 hover:font-semibold">
              Terms
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

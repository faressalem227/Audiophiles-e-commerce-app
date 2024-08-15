import { useState } from "react";
import { Link } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateLoginForm = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      // Perform login logic here
      console.log("Form is valid. Email:", email, "Password:", password);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
              {emailError && (
                <p id="email-error" className="text-red-500 text-sm mt-2">
                  {emailError}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
              />
              {passwordError && (
                <p id="password-error" className="text-red-500 text-sm mt-2">
                  {passwordError}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              Already have an account?{" "}
              <a className="text-orange-500 hover:underline">Sign Up here</a>
            </p>

            <p className="text-black w-fit mx-auto my-4 hover:text-main_orange relative cursor-pointer">
              <Link to="/">Join as a guest </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../pages/Spinner/Spinner";

function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

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
      const user = {
        Email: email,
        Password: password
      }

      const url = 'https://localhost:44355/api/AudioAuth/login';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then((res) => {
        return res.json();
      }).then((response) => {
        if(response.isAuthenticated === true) {
          // Store The JWT Token in the Localstorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('fullname', response.fullName);
          localStorage.setItem('username', response.userName);
          localStorage.setItem('roles', response.roles);
          localStorage.setItem('greeting', false);
          // Check the user Role here
          if(response.roles.includes('User')) {
            return navigate('/');
          } else {
            return navigate('/Admin');
          }
        } else {
          toast.error(`${response.message}`);
        }
      }).catch((err) => {
        toast.error(`Something went wrong: ${err}`);
      });
    }
  };

  return (
    <>{ loading ? <Spinner /> : 
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <ToastContainer />
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
              <Link to='/Register' className="text-orange-500 hover:underline">Sign Up here</Link>
            </p>

            <p className="text-black w-fit mx-auto my-4 hover:text-main_orange relative cursor-pointer">
              <Link to="/">Join as a guest </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default LoginForm;

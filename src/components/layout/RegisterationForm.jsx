import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../pages/Spinner/Spinner";

function RegistrationForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const validateRegisterForm = (formData) => {
    const errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberPattern = /^\d{11}$/;
    const passwordPattern = /^(?=.[A-Z])(?=.\d)[A-Za-z\d]{8,}$/;

    const email = formData.get("email");
    const username = formData.get("username");
    const phoneNumber = formData.get("phone-number");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      errors.email = "Invalid email format. Example: name@example.com";
    }

    if (!username) {
      errors.username = "Username is required";
    } else if (username.length < 3 || username.length > 15) {
      errors.username = "Username must be between 3 and 15 characters";
    }

    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!phoneNumberPattern.test(phoneNumber)) {
      errors.phoneNumber = "Phone number must be 11 digits";
    }

    // if (!password) {
    //   errors.password = "Password is required";
    // } else if (!passwordPattern.test(password)) {
    //   errors.password =
    //     "Password must be at least 8 characters long, include at least one uppercase letter and one number";
    // }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const validationErrors = validateRegisterForm(formData);

    // Handling Register API
    if (Object.keys(validationErrors).length === 0) {
      // Invoke the data into an boject 
      const newUser = {
        FullName: fullName,
        Email: email,
        PhoneNumber: phone,
        Password: password
      }
      
      const url = 'https://localhost:44355/api/AudioAuth/register';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
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

          return navigate('/');
        } else {
          toast.error(`${response.message}`);
        }
      }).catch((err) => {
        toast.error(`Something went wrong: ${err}`);
      });

    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <main>
    {
      loading ? <Spinner /> : 
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <ToastContainer />
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your username"
              />
              {errors.username && (
                <p id="username-error" className="text-red-500 text-sm mt-2">
                  {errors.username}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="reg-email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="reg-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p id="reg-email-error" className="text-red-500 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone-number" className="block text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phone-number"
                name="phone-number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p
                  id="phone-number-error"
                  className="text-red-500 text-sm mt-2"
                >
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="reg-password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="reg-password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p
                  id="reg-password-error"
                  className="text-red-500 text-sm mt-2"
                >
                  {errors.password}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p
                  id="confirm-password-error"
                  className="text-red-500 text-sm mt-2"
                >
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    }
    </main>
  );
}

export default RegistrationForm;

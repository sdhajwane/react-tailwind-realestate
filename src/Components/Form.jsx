// FormComponent.js
import {useState} from 'react';
import countryCodes from './CountryCodes';


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // ✅ success or error

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus(null);
    } else {
      setErrors({});

      try {
        const res = await fetch("https://formspree.io/f/xvgkeowz", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: new FormData(e.target),
        });

        const data = await res.json();
        if (res.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", countryCode: "+91", phone: "" });
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Form submit error:", error);
        setStatus("error");
      }
    }
  };
  return (
<div className="bg-white p-4 rounded-b-xl">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Get the Best Quote
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border-b-2 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-black"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border-b-2 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4 flex items-center">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="mr-2 px-2 py-2 border-b-2 border-gray-300 text-black focus:outline-none focus:ring-0 focus:border-black w-[70px]"
          >
            {countryCodes.map((country, index) => (
              <option key={index} value={country.code}>
                {country.code}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full px-3 py-2 border-b-2 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-black"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1 -mt-3 mb-2">{errors.phone}</p>
        )}

        <div className="flex justify-center px-4 pb-4">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 text-white font-semibold px-8 py-2 rounded-md bg-gradient-to-r from-primary via-pink-500 to-purple-500"
          >
            Submit to proceed
          </button>
        </div>
      </form>

      {/* ✅ Show response messages */}
      {status === "success" && (
        <p className="text-green-600 text-center mt-2">Thank you! Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center mt-2">Oops! Something went wrong. Please try again.</p>
      )}
    </div>
  );
};
export default Form;

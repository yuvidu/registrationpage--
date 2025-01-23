import React, { useState } from "react";
import logo from "./assets/Logo.png";
import background from "./assets/r27.jpg";


const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false, // Added to track the checkbox state
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("You must agree to the Terms and Conditions to continue.");
      return;
    }

    console.log("Form Submitted:", formData);
    // Here, send `formData` to your backend using fetch/axios.
  };

  return (
    
    <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Adjust the height as needed
      }}>
      <div id="box" className="background">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <p style={{ fontSize: "28px" }}>Nice to meet you :)</p>
          <p>just register to join with us</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div id="box2">
            <div className="heading">
              <h1>Register</h1>
              <a href="" target="" rel="" id="Login_link">
              &rarr; Already have an account?
              </a>
            </div>

            {/* Social Media Buttons */}
            <div className="social-buttons">
              <button className="social-button facebook" > <i className="fab fa-facebook-f"></i>Facebook</button>
              <button className="social-button twitter"> <i className="fab fa-twitter"></i>Twitter</button>
              <button className="social-button google"><i className="fab fa-google"></i>Google</button>
            </div>
            <div className="text1">
              <p>———— Or register with email ————</p>
            </div>

           
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Name"
            />

            <div style={{
                
                marginTop: "20px",
              }}>
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>

            <div className="password">
              <div style={{ marginRight: "14%" }}>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                />
              </div>
              <div>
                
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="repeate Password"
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              {/* Checkbox and Label */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  style={{
                    transform: "scale(1.5)", // Increase checkbox size
                    marginRight: "10px", // Space between checkbox and label
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontSize: "14px" , color:"black"}} >
                  I agree to the <a  id="agrrement" href="http://" style={{textDecoration:"none"}}>terms and Conditions</a> 
                </span>
              </label>

              {/* Continue Button */}
              <button
              id="submit"
                type="submit"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                  width: "auto",
                  
                  borderRadius: "16px"
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

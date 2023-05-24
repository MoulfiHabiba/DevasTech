import React from "react";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [err, setError] = useState(null);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImgChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {

      await axios.post('/auth/register', {
        username,
        email,
        password,
        img: file ? imgUrl : "",
      });

      // Registration successful, redirect or display success message
      navigate("/login")
    } catch (error) {
      // Handle registration error
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="UserName" value={username} onChange={handleUserNameChange} />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <input type="file" accept="image/*" onChange={handleImgChange} />

      <button type="submit">Register</button>
      {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
    </form>
    </div>
  );
};

export default Register;

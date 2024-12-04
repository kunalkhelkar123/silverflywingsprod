'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token); // Store JWT token
        router.push("/admin-dashboard"); // Navigate to dashboard
      } else {
        console.error("Login failed:", data.message);
        setError(data.message || "Invalid credentials"); // Display error to the user
      }
    } catch (err) {
      console.error("Error during login request:", err);
      setError("Something went wrong. Please try again.");
    }
  };




  return (
    <>
      {error && (
        <p className="text-red-500 text-center mb-4" role="alert">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit} className="row y-gap-20">
        <div className="col-12">
          <h1 className="text-22 fw-500">Welcome back</h1>
          <p className="mt-10">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup" className="text-blue-1">
              Sign up for free
            </Link>
          </p>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input value={email}
              onChange={(e) => setEmail(e.target.value)} type="email" required />
            <label className="lh-1 text-14 text-light-1">Email</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input value={password}
              onChange={(e) => setPassword(e.target.value)} type="password" required />
            <label className="lh-1 text-14 text-light-1">Password</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <a href="#" className="text-14 fw-500 text-blue-1 underline">
            Forgot your password?
          </a>
        </div>
        {/* End .col */}

        <div className="col-12">
          <button
            type="submit"
            href="#"
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          >
            Sign In <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End .col */}
      </form></>
  );
};

export default LoginForm;

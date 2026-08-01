import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../../features/apis/apiSlice";
import {
  loadUserPreferences,
  syncUserPreferences,
} from "../../features/toggleProductsInfo/toggleProductsInfoSlice";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AuthModal({ onClose }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateInputs = () => {
    const nextErrors = {};
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedName = userName.trim();

    if (!trimmedEmail) {
      nextErrors.email = "Email is required.";
    } else if (!emailRegex.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (activeTab === "register") {
      if (!trimmedName) {
        nextErrors.name = "Name is required.";
      }

      if (!trimmedPassword) {
        nextErrors.password = "Password is required.";
      } else if (trimmedPassword.length < 8) {
        nextErrors.password = "Password must be at least 8 characters.";
      }
    } else if (!trimmedPassword) {
      nextErrors.password = "Password is required.";
    }

    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setFeedback({
        type: "error",
        message: nextErrors[Object.keys(nextErrors)[0]],
      });
      return false;
    }

    return true;
  };

  const updateField = (setter, fieldName, value) => {
    setter(value);
    if (fieldErrors[fieldName]) {
      setFieldErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
    if (feedback) {
      setFeedback(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);

    if (!validateInputs()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (activeTab === "login") {
        const result = await dispatch(
          loginApi({ email: email.trim(), password: password.trim() }),
        ).unwrap();

        setFeedback({
          type: "success",
          message: result?.message || "Signed in successfully",
        });
        setEmail("");
        setPassword("");
        setFieldErrors({});
        await dispatch(syncUserPreferences());
        await dispatch(loadUserPreferences());

        setTimeout(() => {
          onClose?.();
          navigate("/profile");
        }, 700);
      } else {
        const result = await dispatch(
          registerApi({
            userName: userName.trim(),
            email: email.trim(),
            password: password.trim(),
          }),
        ).unwrap();

        setFeedback({
          type: "success",
          message: result?.message || "Account created successfully",
        });
        setUserName("");
        setEmail("");
        setPassword("");
        setFieldErrors({});
        setActiveTab("login");
      }
    } catch (error) {
      setFeedback({ type: "error", message: error || "Something went wrong." });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen overflow-hidden font-sans">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .blur-backdrop {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .auth-card-transition {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        input:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(111, 52, 41, 0.1);
        }
      `}</style>

      <div className="fixed inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="w-full h-full opacity-60 grayscale-[0.2] blur-[4px]">
          {/* Background Placeholder */}
        </div>
      </div>

      <main
        className="fixed inset-0 z-[100] flex items-center justify-center p-margin-mobile overflow-y-auto blur-backdrop bg-on-background/20"
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) onClose();
        }}
      >
        <div
          id="auth-container"
          className="bg-surface-bright w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden auth-card-transition opacity-100 translate-y-0 animate-fade-in relative"
        >
          <div className="h-32 w-full relative overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAO_qwBIoETEx_9J3JGugZgZ7X8ayFRD8oD8dBF-D8_GxF_7XrEesuDQ9_P78GjwCu81sUbq30vEyXwggt4PZ55hnMrZ87cvduGgxM8pVvuvMp7W6W-8BAp5BhBhHzXIg85hxlaO16tJoWzvfUCqlnTeSNKbUskrHKhahoFRZJBY66_Y1qmu8pjzzs9gzcVJyBcsx9jt1z99dWwTC5QZdc9QqX-Yf7u69ohsLPBJUhRJEbG1Pe-HEs')",
              }}
              data-alt="Minimalist still life of handcrafted ceramic vessels"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-bright to-transparent" />

            <button
              type="button"
              onClick={() => {
                window.history.state?.idx > 0 ? navigate(-1) : navigate("/");
                onClose?.();
              }}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2 text-on-surface-variant/70 hover:text-primary transition-colors rounded-full hover:bg-surface-bright/30 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div className="px-8 pb-10 -mt-6 relative z-10">
            <div className="text-center mb-8">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
                Welcome Home
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Sign in to your curated space
              </p>
            </div>

            <div
              className="flex p-1 bg-surface-container rounded-full mb-8"
              role="tablist"
            >
              <button
                id="tab-login"
                role="tab"
                aria-selected={activeTab === "login"}
                onClick={() => {
                  setActiveTab("login");
                  setFeedback(null);
                  setFieldErrors({});
                }}
                className={`flex-1 py-2 rounded-full font-label-md text-label-md transition-all duration-300 ${
                  activeTab === "login"
                    ? "bg-primary-container text-on-primary-container shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Login
              </button>
              <button
                id="tab-register"
                role="tab"
                aria-selected={activeTab === "register"}
                onClick={() => {
                  setActiveTab("register");
                  setFeedback(null);
                  setFieldErrors({});
                }}
                className={`flex-1 py-2 rounded-full font-label-md text-label-md transition-all duration-300 ${
                  activeTab === "register"
                    ? "bg-primary-container text-on-primary-container shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Register
              </button>
            </div>

            {feedback && (
              <div
                role="alert"
                className={`mb-5 rounded-2xl border px-4 py-3 text-sm ${
                  feedback.type === "error"
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-emerald-200 bg-emerald-50 text-emerald-700"
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-base">
                    {feedback.type === "error" ? "error" : "check_circle"}
                  </span>
                  <span>{feedback.message}</span>
                </div>
              </div>
            )}

            <div className="relative overflow-hidden">
              {activeTab === "login" && (
                <form
                  id="form-login"
                  onSubmit={handleSubmit}
                  className="space-y-5 block transition-all duration-300 animate-fade-in"
                >
                  <div className="space-y-1">
                    <label
                      htmlFor="login-email"
                      className="font-label-sm text-label-sm text-on-surface-variant ml-1"
                    >
                      Email
                    </label>
                    <input
                      id="login-email"
                      type="email"
                      value={email}
                      placeholder="hello@example.com"
                      onChange={(e) =>
                        updateField(setEmail, "email", e.target.value)
                      }
                      className={`w-full px-4 py-3 bg-surface-container-low border-none rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 transition-all ${
                        fieldErrors.email ? "ring-2 ring-red-300" : ""
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="ml-1 text-sm text-red-600">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center ml-1">
                      <label
                        htmlFor="login-password"
                        className="font-label-sm text-label-sm text-on-surface-variant"
                      >
                        Password
                      </label>
                      <a
                        href="#"
                        className="font-label-sm text-label-sm text-primary hover:underline transition-all"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <input
                      id="login-password"
                      type="password"
                      value={password}
                      placeholder="••••••••"
                      onChange={(e) =>
                        updateField(setPassword, "password", e.target.value)
                      }
                      className={`w-full px-4 py-3 bg-surface-container-low border-none rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 transition-all ${
                        fieldErrors.password ? "ring-2 ring-red-300" : ""
                      }`}
                    />
                    {fieldErrors.password && (
                      <p className="ml-1 text-sm text-red-600">
                        {fieldErrors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-primary text-on-primary py-4 rounded-xl font-label-md text-label-md shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin material-symbols-outlined">
                        progress_activity
                      </span>
                    ) : (
                      <>
                        Sign In
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {activeTab === "register" && (
                <form
                  id="form-register"
                  onSubmit={handleSubmit}
                  className="space-y-5 block transition-all duration-300 animate-fade-in"
                >
                  <div className="space-y-1">
                    <label
                      htmlFor="reg-name"
                      className="font-label-sm text-label-sm text-on-surface-variant ml-1"
                    >
                      Name
                    </label>
                    <input
                      id="reg-name"
                      type="text"
                      value={userName}
                      placeholder="Elias Thorne"
                      onChange={(e) =>
                        updateField(setUserName, "name", e.target.value)
                      }
                      className={`w-full px-4 py-3 bg-surface-container-low border-none rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 transition-all ${
                        fieldErrors.name ? "ring-2 ring-red-300" : ""
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="ml-1 text-sm text-red-600">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="reg-email"
                      className="font-label-sm text-label-sm text-on-surface-variant ml-1"
                    >
                      Email
                    </label>
                    <input
                      id="reg-email"
                      type="email"
                      value={email}
                      placeholder="hello@example.com"
                      onChange={(e) =>
                        updateField(setEmail, "email", e.target.value)
                      }
                      className={`w-full px-4 py-3 bg-surface-container-low border-none rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 transition-all ${
                        fieldErrors.email ? "ring-2 ring-red-300" : ""
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="ml-1 text-sm text-red-600">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="reg-password"
                      className="font-label-sm text-label-sm text-on-surface-variant ml-1"
                    >
                      Password
                    </label>
                    <input
                      id="reg-password"
                      type="password"
                      value={password}
                      placeholder="Minimum 8 characters"
                      onChange={(e) =>
                        updateField(setPassword, "password", e.target.value)
                      }
                      className={`w-full px-4 py-3 bg-surface-container-low border-none rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 transition-all ${
                        fieldErrors.password ? "ring-2 ring-red-300" : ""
                      }`}
                    />
                    {fieldErrors.password && (
                      <p className="ml-1 text-sm text-red-600">
                        {fieldErrors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-primary text-on-primary py-4 rounded-xl font-label-md text-label-md shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin material-symbols-outlined">
                        progress_activity
                      </span>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="relative my-8 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/30"></div>
              </div>
              <span className="relative px-4 bg-surface-bright font-label-sm text-label-sm text-on-surface-variant">
                Or continue with
              </span>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center py-3 px-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.27.81-.57z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </button>
              <button className="flex-1 flex items-center justify-center py-3 px-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container transition-all">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="px-8 py-4 bg-surface-container-low text-center">
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Handcrafted curated collection © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

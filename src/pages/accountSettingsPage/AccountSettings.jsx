import { useState } from "react";
import { Link } from "react-router-dom";
export default function AccountSettings() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed min-h-screen">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-50 bg-surface shadow-sm shadow-primary/5 flex items-center justify-between px-margin-mobile h-16">
        <Link
          to={"/profile"}
          type="button"
          className="active:scale-95 duration-200 text-primary p-1 rounded-full hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined" data-icon="arrow_back">
            arrow_back
          </span>
        </Link>
        <h1 className="font-headline-md text-headline-md dark:text-on-surface">
          Settings
        </h1>
        <div className="w-10" />
      </header>

      <main className="max-w-md mx-auto px-margin-mobile pt-stack-sm pb-12">
        {/* Profile Header/Summary */}
        <section className="flex flex-col items-center mb-stack-md py-6">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden mb-4 shadow-sm">
              <span
                className="material-symbols-outlined text-outline opacity-40"
                style={{ fontSize: "48px" }}
                data-icon="person"
              >
                person
              </span>
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg active:scale-90 transition-transform"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="edit"
              >
                edit
              </span>
            </button>
          </div>
          <h2 className="font-headline-md text-headline-md">Guest User</h2>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">
            Premium Member
          </p>
        </section>

        {/* Personal Information Section */}
        <div className="mb-stack-lg">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-4 opacity-70">
            Personal Information
          </h3>
          <div className="space-y-1">
            <div className="flex items-center justify-between py-4 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded-lg cursor-pointer active:scale-[0.98]">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Full Name
                </span>
                <span className="font-body-md text-body-md mt-0.5">
                  Not set
                </span>
              </div>
              <span
                className="material-symbols-outlined text-outline"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </div>
            <div className="flex items-center justify-between py-4 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded-lg cursor-pointer active:scale-[0.98]">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Email Address
                </span>
                <span className="font-body-md text-body-md mt-0.5">
                  Add Email
                </span>
              </div>
              <span
                className="material-symbols-outlined text-outline"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </div>
            <div className="flex items-center justify-between py-4 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded-lg cursor-pointer active:scale-[0.98]">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Phone Number
                </span>
                <span className="font-body-md text-body-md mt-0.5">
                  Add Phone Number
                </span>
              </div>
              <span
                className="material-symbols-outlined text-outline"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-stack-lg">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-4 opacity-70">
            Security
          </h3>
          <div className="space-y-1">
            <div className="flex items-center justify-between py-4 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded-lg cursor-pointer active:scale-[0.98]">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="lock"
                >
                  lock
                </span>
                <span className="font-body-md text-body-md">
                  Change Password
                </span>
              </div>
              <span
                className="material-symbols-outlined text-outline"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </div>
            <div className="flex items-center justify-between py-4 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded-lg">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="verified_user"
                >
                  verified_user
                </span>
                <div className="flex flex-col">
                  <span className="font-body-md text-body-md">
                    Two-Factor Authentication
                  </span>
                  <span
                    className={`font-label-sm text-label-sm ${twoFactor ? "text-primary" : "text-on-surface-variant"}`}
                  >
                    {twoFactor ? "On" : "Off"}
                  </span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only custom-toggle"
                  checked={twoFactor}
                  onChange={(e) => setTwoFactor(e.target.checked)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors duration-200 ${twoFactor ? "bg-primary" : "bg-surface-variant"}`}
                >
                  <div
                    className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ${twoFactor ? "translate-x-6" : "translate-x-1"}`}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="mb-stack-lg bg-surface-container-low p-6 rounded-3xl">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-6 opacity-70 text-center">
            Notifications
          </h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-body-md text-body-md">
                Email Notifications
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only custom-toggle"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors duration-200 ${emailNotifications ? "bg-primary" : "bg-surface-variant"}`}
                >
                  <div
                    className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${emailNotifications ? "translate-x-6" : "translate-x-1"}`}
                  />
                </div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body-md text-body-md">
                Push Notifications
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only custom-toggle"
                  checked={pushNotifications}
                  onChange={(e) => setPushNotifications(e.target.checked)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors duration-200 ${pushNotifications ? "bg-primary" : "bg-surface-variant"}`}
                >
                  <div
                    className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${pushNotifications ? "translate-x-6" : "translate-x-1"}`}
                  />
                </div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body-md text-body-md">SMS Alerts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only custom-toggle"
                  checked={smsAlerts}
                  onChange={(e) => setSmsAlerts(e.target.checked)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors duration-200 ${smsAlerts ? "bg-primary" : "bg-surface-variant"}`}
                >
                  <div
                    className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${smsAlerts ? "translate-x-6" : "translate-x-1"}`}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy & Legal */}
        <div className="mb-stack-lg">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-4 opacity-70">
            Privacy &amp; Legal
          </h3>
          <div className="space-y-1">
            <a
              href="#privacy"
              className="flex items-center justify-between py-4 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded-lg"
            >
              <span className="font-body-md text-body-md">Privacy Policy</span>
              <span
                className="material-symbols-outlined text-outline"
                data-icon="open_in_new"
              >
                open_in_new
              </span>
            </a>
            <a
              href="#terms"
              className="flex items-center justify-between py-4 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded-lg"
            >
              <span className="font-body-md text-body-md">
                Terms of Service
              </span>
              <span
                className="material-symbols-outlined text-outline"
                data-icon="open_in_new"
              >
                open_in_new
              </span>
            </a>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mb-stack-lg border border-error/20 bg-error/5 p-6 rounded-3xl">
          <h3 className="font-label-md text-label-md text-error uppercase tracking-widest mb-2 opacity-80">
            Danger Zone
          </h3>
          <p className="font-label-sm text-label-sm text-on-surface-variant mb-6">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <button
            type="button"
            className="w-full py-4 rounded-xl border border-error text-error font-label-md text-label-md hover:bg-error hover:text-on-primary transition-all duration-300 active:scale-95"
          >
            Delete Account
          </button>
        </div>

        <div className="text-center py-12 opacity-40">
          <p className="font-label-sm text-label-sm">
            Modern Organic Home v2.4.0
          </p>
        </div>
      </main>
    </div>
  );
}

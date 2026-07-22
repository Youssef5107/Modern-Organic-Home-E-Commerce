import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 mt-2 animate-page-enter ">
        {/* Profile Header */}
        <section className="flex flex-col items-center justify-center py-8 translate-y-[10px] animate-[fade-in_0.6s_cubic-bezier(0.2,0.8,0.2,1)_0s_forwards] reveal-on-scroll">
          <div className="relative group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-[0_4px_20px_rgba(111,52,41,0.04)] ring-4 ring-[#f5f3ee]">
              <div className="w-full h-full bg-[#eae8e3] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#534340] text-[48px] md:text-[64px]">
                  person
                </span>
              </div>
            </div>
            <button className="absolute bottom-0 right-0 bg-[#6f3429] text-white p-2 rounded-full shadow-lg active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[18px]">
                photo_camera
              </span>
            </button>
          </div>
          <div className="text-center mt-6">
            <h2 className="font-headline-lg text-headline-lg text-[#1b1c19]">
              Your Name
            </h2>
            <p className="font-label-sm text-label-sm text-[#534340] uppercase tracking-widest mt-1">
              Member
            </p>
          </div>
          <button className="mt-6 px-6 py-2 border border-[#d8c2bd] rounded-full font-label-md text-label-md text-[#6f3429] hover:bg-[#f5f3ee] transition-colors active:scale-95">
            Edit Profile
          </button>
        </section>

        {/* Active Orders Section */}
        <section className="mt-8 translate-y-[10px] animate-[fade-in_0.6s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_forwards] reveal-on-scroll">
          <h3 className="font-label-sm text-label-sm text-[#534340] uppercase tracking-widest mb-4 px-1">
            Active Orders
          </h3>
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(111,52,41,0.04)] border border-[#f0eee9] flex items-center gap-4 group cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Close up of a handcrafted ceramic vase"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8_m1vihBejTY8TtKxtHLpFgv-qN6cQFjA0UxmDrNCHS4J2tv4q351-rumIspoKkV-2aQsJIy1piOFbCGGtI8ExCFGn3oVzOXsWD9FNQf5ePhuTmBFBVwtMYXzANRgYXE7Xg6TJlIJqhE7iNOyDEkk4CeifAZSR6FyzpAEDiPud-56M35XA51QI_dxFLB4-VepJKdhdOE6OZrkhHS1RNUqkQkJadBnQdDGhYHoseRIOuJ9ylc2Gno"
              />
            </div>
            <div className="flex-1">
              <p className="font-label-sm text-label-sm text-[#7c552c] mb-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  local_shipping
                </span>
                In Transit
              </p>
              <h4 className="font-label-md text-label-md text-[#1b1c19]">
                Handcrafted Ceramic Vase
              </h4>
              <p className="font-body-md text-label-sm text-[#534340] mt-1">
                Order # — Status
              </p>
            </div>
            <span className="material-symbols-outlined text-[#534340]">
              chevron_right
            </span>
          </div>
        </section>

        {/* Account Menu List */}
        <section className="mt-16 space-y-2 translate-y-[10px] animate-[fade-in_0.6s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_forwards] reveal-on-scroll">
          <h3 className="font-label-sm text-label-sm text-[#534340] uppercase tracking-widest mb-4 px-1">
            Account &amp; Preferences
          </h3>

          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(111,52,41,0.04)] border border-[#f0eee9]">
            <Link
              className="flex items-center justify-between p-5 hover:bg-[#f5f3ee] transition-colors border-b border-[#f0eee9] group"
              to="/orders"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#8c4b3e]">
                  receipt_long
                </span>
                <span className="font-label-md text-label-md text-[#1b1c19]">
                  Order History
                </span>
              </div>
              <span className="material-symbols-outlined text-[#d8c2bd] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </Link>

            <Link
              className="flex items-center justify-between p-5 hover:bg-[#f5f3ee] transition-colors border-b border-[#f0eee9] group"
              to="/profile/saved-items"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#8c4b3e]">
                  favorite
                </span>
                <span className="font-label-md text-label-md text-[#1b1c19]">
                  My Saved Items
                </span>
              </div>
              <span className="material-symbols-outlined text-[#d8c2bd] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </Link>

            <Link
              className="flex items-center justify-between p-5 hover:bg-[#f5f3ee] transition-colors border-b border-[#f0eee9] group"
              to="/addresses"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#8c4b3e]">
                  location_on
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-[#1b1c19]">
                    Shipping Addresses
                  </span>
                  <span className="text-label-sm text-[#534340]">
                    Add or manage your addresses
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#d8c2bd] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </Link>

            <Link
              className="flex items-center justify-between p-5 hover:bg-[#f5f3ee] transition-colors border-b border-[#f0eee9] group"
              to="/payment"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#8c4b3e]">
                  credit_card
                </span>
                <span className="font-label-md text-label-md text-[#1b1c19]">
                  Payment Methods
                </span>
              </div>
              <span className="material-symbols-outlined text-[#d8c2bd] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </Link>

            <Link
              className="flex items-center justify-between p-5 hover:bg-[#f5f3ee] transition-colors group"
              to="/profile/account-settings"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#8c4b3e]">
                  manage_accounts
                </span>
                <span className="font-label-md text-label-md text-[#1b1c19]">
                  Account Settings
                </span>
              </div>
              <span className="material-symbols-outlined text-[#d8c2bd] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </Link>
          </div>
        </section>

        {/* Log Out */}
        <section className="mt-16 mb-12 flex justify-center translate-y-[10px] animate-[fade-in_0.6s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_forwards] reveal-on-scroll">
          <button className="flex items-center gap-2 text-[#ba1a1a] font-label-md text-label-md hover:underline active:scale-95 transition-transform px-8 py-4">
            <span className="material-symbols-outlined">logout</span>
            Log Out
          </button>
        </section>
      </div>
    </>
  );
}

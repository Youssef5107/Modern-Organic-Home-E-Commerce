import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser, setLogoutConfirmOpen } from "../../features/apis/apiSlice";
import { Link } from "react-router-dom";

export default function LogoutConfirm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.apis.isLogoutConfirmOpen);

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    dispatch(setLogoutConfirmOpen(false));
    window.dispatchEvent(new Event("auth-state-changed"));
    navigate("/profile");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-on-background/20 px-4 backdrop-blur-sm animate-page-enter"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(setLogoutConfirmOpen(false));
        }
      }}
    >
      <div className="w-full max-w-md rounded-[2rem] bg-surface-bright p-8 shadow-2xl animate-fade-in">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Log out?
        </h3>
        <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
          You&apos;ll need to sign in again to view your saved items and cart.
        </p>
        <div className="mt-8 flex justify-end gap-3">
          <Link
            to={"/profile"}
            onClick={() => dispatch(setLogoutConfirmOpen(false))}
            className="rounded-full border border-outline-variant/30 px-5 py-2.5 font-label-md text-label-md text-primary hover:bg-surface-container transition-colors"
          >
            Cancel
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-full bg-primary px-5 py-2.5 font-label-md text-label-md text-on-primary hover:opacity-90 active:scale-95 transition-all"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

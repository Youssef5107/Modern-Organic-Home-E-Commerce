import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "../features/toggleProductsInfo/toggleProductsInfoSlice";

export const ToastNotification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ProductsInfo.notification);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!notification) return;

    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    let hideTimer;
    let clearTimer;

    hideTimer = setTimeout(() => {
      setIsVisible(false);
      clearTimer = setTimeout(() => {
        dispatch(hideNotification());
      }, 300);
    }, 2000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(clearTimer);
    };
  }, [notification, dispatch]);

  if (!notification && !isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "88px",
        left: "20px",
        backgroundColor: "#FFFFFF",
        color: "#5A3228",
        padding: "8px 14px",
        borderRadius: "10px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)",
        fontSize: "13px",
        fontFamily: "'Georgia', serif",
        letterSpacing: "0.01em",
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        whiteSpace: "nowrap",
        transition:
          "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(10px) scale(0.95)",
      }}
    >
      {/* Small Checkmark Icon Container */}
      <div
        style={{
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          backgroundColor: "#5A3228",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg
          width="9"
          height="7"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 5L4.5 8L11.5 1"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span>{notification?.message}</span>
    </div>
  );
};

export default ToastNotification;

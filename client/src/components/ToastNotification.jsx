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
        bottom: "96px",
        left: "20px",
        backgroundColor: "#5A3228",
        color: "#FDFBF7",
        padding: "8px 16px",
        borderRadius: "9999px",
        boxShadow: "0 4px 14px rgba(90, 50, 40, 0.25)",
        fontSize: "12px",
        fontFamily: "'Georgia', serif",
        letterSpacing: "0.01em",
        zIndex: 9999,
        pointerEvents: "none",
        transition:
          "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(10px) scale(0.95)",
        maxWidth: "240px",
        lineHeight: "1.3",
      }}
    >
      {notification?.message}
    </div>
  );
};

export default ToastNotification;

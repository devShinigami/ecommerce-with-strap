import React from "react";

function Drawer({ isOpen, onClose, children }) {
  const overlayClasses = isOpen
    ? "fixed inset-0 bg-black opacity-50"
    : "hidden";
  const drawerClasses = isOpen
    ? "fixed inset-y-0 right-0 max-w-full w-64 bg-white shadow-lg transform transition duration-300 ease-in-out"
    : "hidden";

  return (
    <div className="z-50">
      <div className={overlayClasses} onClick={onClose} />
      <div className={drawerClasses}>{children}</div>
    </div>
  );
}

export default Drawer;

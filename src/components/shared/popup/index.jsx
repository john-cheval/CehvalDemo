"use client";

export default function ExitIntentPopup({ onClose, show, children }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black- bg-opacity-50- flex items-center justify-center overflow-y-scroll "
      style={{
        background: "rgba(255, 255, 255, 0.64)",
        backdropFilter: "blur(4.4px)",
        WebkitBackdropFilter: "blur(4.4px)",
        zIndex: "99995555513", // Safari support
      }}
    >
      <div className="bg-white- p-8- rounded-lg- shadow-lg- max-w-sm- w-fit relative px-5">
        <button
          onClick={onClose}
          className="absolute top-3 md:-top-2 right-10 md:-right-3 text-[#101763] text-4xl font-medium"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

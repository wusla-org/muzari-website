"use client";

export default function FloatingWhatsApp({ phoneNumber = "1234567890" }: { phoneNumber?: string }) {
  const handleClick = () => {
    const text = encodeURIComponent(
      "Hello Muzari Exports, I'm interested in discussing wholesale agricultural export solutions."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="hidden md:flex rounded-full bg-white px-5 py-2.5 text-xs font-bold shadow-[0_12px_40px_rgba(25,28,24,0.1)] border border-[#e6f5ed] text-[#1a2e1e] animate-fade-in-left">
        Trade Inquiries Chat
      </div>
      <button
        onClick={handleClick}
        className="group relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,0.3)] transition-all hover:scale-110 hover:shadow-[0_16px_48px_rgba(37,211,102,0.4)]"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="relative z-10"
        >
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.912 6.55L.178 24l5.63-1.468A11.944 11.944 0 0 0 11.944 24 12 12 0 0 0 24 12a12 12 0 0 0-12.056-12zM11.944 22A9.957 9.957 0 0 1 6.84 20.672l-.367-.216-3.716.97.994-3.593-.243-.385a9.923 9.923 0 0 1-1.503-5.32 10.021 10.021 0 0 1 10.038-10 10.021 10.021 0 0 1 10.039 10 10.021 10.021 0 0 1-10.138 9.873zm5.405-7.25c-.297-.148-1.758-.853-2.028-.95-.27-.098-.466-.148-.661.148-.195.297-.762.95-.935 1.148-.173.195-.347.22-.644.072-2.09-.98-3.328-2.317-4.137-3.69-.086-.148.077-.25.22-.395.148-.148.297-.348.441-.523.148-.173.195-.296.297-.493.1-.197.05-.37-.024-.52-.074-.148-.661-1.572-.907-2.148-.24-.56-.484-.486-.66-.495-.17-.008-.368-.008-.564-.008s-.515.074-.784.37c-.27.297-1.025.98-1.025 2.39 0 1.412 1.05 2.775 1.196 2.973.148.196 2.053 3.088 4.966 4.316.691.291 1.232.464 1.654.595.696.216 1.33.185 1.83.111.562-.083 1.758-.707 2.003-1.39.245-.683.245-1.267.17-1.39-.071-.122-.267-.195-.561-.345z" />
        </svg>
      </button>
    </div>
  );
}

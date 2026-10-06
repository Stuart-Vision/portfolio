import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { useSfx } from "utils/use-sfx";
import SoundBar from "./SoundBar/SoundBar";
import { METADATA } from "../../constants";

const Header = ({ children }) => {
  const inputRef = useRef(null);
  const sfx = useSfx();

  const handleClick = useCallback(
    (e) => {
      sfx.play(e.target.checked ? "pop" : "pop-down");
    },
    [sfx],
  );

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape" && inputRef.current?.checked) {
      inputRef.current.checked = false;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <nav className="site-header w-full fixed top-0 py-4 md:py-6 z-50 select-none bg-gradient-to-b from-black shadow-black transition-all duration-300">
      <div className="flex justify-between section-container">
        <a href="#home" className="link min-w-[44px] min-h-[44px] flex items-center">
          <Image
            src="/logo.svg"
            alt={`Logo - ${METADATA.author}`}
            width={25}
            height={25}
            priority
            style={{ width: 25, height: 25 }}
          />
        </a>
        <div className="outer-menu relative flex items-center gap-8 z-[1]">
          <SoundBar />
          <input
            ref={inputRef}
            aria-label="menu"
            className="checkbox-toggle link absolute top-0 -right-2 w-[44px] h-[44px] opacity-0"
            type="checkbox"
            onClick={handleClick}
          />
          <div className="hamburger w-6 h-6 flex items-center justify-center">
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center" />
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Header;

import { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PublicIcon from "@mui/icons-material/Public";
import ShareIcon from "@mui/icons-material/Share";
import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [matches, setMatches] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(-1);

  const searchInputRef = useRef(null);
  const location = useLocation();
  const pathname = location.pathname;

  const muiIconStyle = { color: "inherit", fontSize: "24px" };

  const getActiveLink = () => {
    if (location.pathname + location.hash === "/home#New-Arrivals")
      return "new-arrivals";
    if (pathname === "/home") return "home";
    if (pathname === "/home/our-story") return "our-story";
    if (pathname === "/shop") return "shop";
    if (pathname === "/profile/saved-items") return "saved-items";
    if (pathname === "/profile/account-settings") return "account-settings";
    return "home";
  };
  const activeLink = getActiveLink();

  const navItems = [
    { id: "home", pathName: "home", name: "Home" },
    { id: "shop", pathName: "shop", name: "Shop All" },
    { id: "new-arrivals", pathName: "home#New-Arrivals", name: "New Arrivals" },
    { id: "our-story", pathName: "home/our-story", name: "Our Story" },
    { id: "saved-items", pathName: "profile/saved-items", name: "Saved Items" },
    {
      id: "account-settings",
      pathName: "profile/account-settings",
      name: "Account Settings",
    },
  ];

  // Helper: Clear active CSS highlights from previous search matches
  const clearHighlights = () => {
    window.getSelection()?.removeAllRanges();
    document.querySelectorAll(".in-page-highlight").forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ""), el);
        parent.normalize();
      }
    });
    setMatches([]);
    setCurrentMatchIndex(-1);
  };

  // Perform In-Page Search matching against page text nodes
  const performInPageSearch = (query) => {
    clearHighlights();
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return;

    const matchedNodes = [];
    const walkTextNodes = (node) => {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        (node.tagName === "SCRIPT" ||
          node.tagName === "STYLE" ||
          node.isContentEditable ||
          node.getAttribute("role") === "dialog")
      ) {
        return;
      }
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.toLowerCase() || "";
        if (text.includes(trimmed)) {
          matchedNodes.push(node);
        }
      } else {
        node.childNodes.forEach(walkTextNodes);
      }
    };

    walkTextNodes(document.body);

    const highlights = [];
    matchedNodes.forEach((node) => {
      const parent = node.parentNode;
      if (!parent) return;

      const text = node.textContent || "";
      const regex = new RegExp(
        `(${trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi",
      );
      const parts = text.split(regex);

      const fragment = document.createDocumentFragment();
      parts.forEach((part) => {
        if (part.toLowerCase() === trimmed) {
          const mark = document.createElement("mark");
          mark.className =
            "in-page-highlight bg-amber-300 text-black px-0.5 rounded-xs transition-all duration-150";
          mark.textContent = part;
          fragment.appendChild(mark);
          highlights.push(mark);
        } else if (part) {
          fragment.appendChild(document.createTextNode(part));
        }
      });

      parent.replaceChild(fragment, node);
    });

    setMatches(highlights);
    if (highlights.length > 0) {
      setCurrentMatchIndex(0);
      focusMatch(highlights, 0);
    }
  };

  // Scroll to targeted match on page
  const focusMatch = (nodesList, index) => {
    if (!nodesList.length || index < 0 || index >= nodesList.length) return;

    nodesList.forEach((el, idx) => {
      if (idx === index) {
        el.classList.add("ring-2", "ring-primary", "bg-amber-400");
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        el.classList.remove("ring-2", "ring-primary", "bg-amber-400");
      }
    });
  };

  const handleNextMatch = () => {
    if (!matches.length) return;
    const nextIdx = (currentMatchIndex + 1) % matches.length;
    setCurrentMatchIndex(nextIdx);
    focusMatch(matches, nextIdx);
  };

  const handlePrevMatch = () => {
    if (!matches.length) return;
    const prevIdx = (currentMatchIndex - 1 + matches.length) % matches.length;
    setCurrentMatchIndex(prevIdx);
    focusMatch(matches, prevIdx);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (matches.length > 0) {
      handleNextMatch();
    } else {
      performInPageSearch(searchQuery);
    }
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    clearHighlights();
  };

  // Keyboard shortcut binding for Cmd+F / Ctrl+F
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "f") {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      if (e.key === "Escape" && isSearchOpen) {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  // Execute continuous search as user types
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSearchOpen && searchQuery.trim()) {
        performInPageSearch(searchQuery);
      } else if (!searchQuery.trim()) {
        clearHighlights();
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [searchQuery, isSearchOpen]);

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
        }}
      />

      {/* Backdrop for Navigation Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side Navigation Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[400px] bg-surface z-[70] transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/30">
          <h2 className="font-headline-md text-primary text-xl">
            Modern Organic
          </h2>
          <button
            className="text-primary p-2 hover:bg-surface-container-low rounded-full transition-colors flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon style={muiIconStyle} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-6 flex-grow overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeLink === item.id;
            return (
              <Link
                key={item.id}
                className={`font-headline-lg py-3 px-2 rounded-lg hover:bg-primary/5 transition-colors ${
                  isActive ? "text-primary" : "text-on-surface"
                }`}
                to={`/${item.pathName}`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-8 bg-surface-container-low/50 mt-auto border-t border-outline-variant/20">
          <p className="font-headline-md text-sm text-primary mb-6 italic">
            Built by Hand, Inspired by Earth
          </p>
          <div className="flex gap-6 items-center text-primary">
            <a
              className="hover:scale-110 transition-transform flex items-center"
              href="#"
            >
              <PublicIcon style={muiIconStyle} />
            </a>
            <a
              className="hover:scale-110 transition-transform flex items-center"
              href="#"
            >
              <ShareIcon style={muiIconStyle} />
            </a>
            <a
              className="hover:scale-110 transition-transform flex items-center"
              href="#"
            >
              <MailIcon style={muiIconStyle} />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-label-sm text-on-surface-variant">
              © 2024 Modern Organic Home
            </p>
            <p className="text-label-sm text-on-surface-variant mt-1">
              Ethically sourced, thoughtfully made.
            </p>
          </div>
        </div>
      </aside>

      {/* In-Page Search Overlay Bar */}
      <div
        className={`fixed top-0 left-0 w-full bg-surface z-[70] shadow-md transition-all duration-300 ease-in-out border-b border-outline-variant/30 ${
          isSearchOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-4">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-3"
          >
            <SearchIcon style={muiIconStyle} className="text-primary" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Find on page..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent font-body-lg text-on-surface placeholder:text-on-surface-variant/60 outline-none py-2"
              autoFocus={isSearchOpen}
            />

            {/* Match Counter Display */}
            {searchQuery.trim() !== "" && (
              <span className="text-xs text-on-surface-variant shrink-0 font-medium px-2">
                {matches.length > 0
                  ? `${currentMatchIndex + 1} of ${matches.length}`
                  : "No matches"}
              </span>
            )}

            {/* Stepper Navigation Buttons */}
            {matches.length > 0 && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevMatch}
                  className="text-on-surface-variant hover:text-primary p-1 rounded-full flex items-center justify-center hover:bg-surface-container-low"
                  title="Previous match (Shift+Enter)"
                >
                  <KeyboardArrowUpIcon style={{ fontSize: "20px" }} />
                </button>
                <button
                  type="button"
                  onClick={handleNextMatch}
                  className="text-on-surface-variant hover:text-primary p-1 rounded-full flex items-center justify-center hover:bg-surface-container-low"
                  title="Next match (Enter)"
                >
                  <KeyboardArrowDownIcon style={{ fontSize: "20px" }} />
                </button>
              </div>
            )}

            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  clearHighlights();
                }}
                className="text-on-surface-variant hover:text-primary p-1 rounded-full flex items-center justify-center"
              >
                <CloseIcon style={{ fontSize: "18px" }} />
              </button>
            )}

            <button
              type="button"
              className="text-primary p-2 hover:bg-surface-container-low rounded-full transition-colors flex items-center justify-center ml-2"
              onClick={closeSearch}
            >
              <CloseIcon style={muiIconStyle} />
            </button>
          </form>
        </div>
      </div>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-50 bg-background/80 backdrop-blur-md shadow-sm shadow-primary/5 h-16 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-4">
          <button
            className="text-primary hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200 flex items-center justify-center"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon style={muiIconStyle} />
          </button>
          <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md tracking-tight text-primary">
            Modern Organic Home
          </h1>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <button
            className="hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200 flex items-center justify-center"
            onClick={() => {
              setIsSearchOpen(true);
              setTimeout(() => searchInputRef.current?.focus(), 100);
            }}
          >
            <SearchIcon style={muiIconStyle} />
          </button>
          <Link
            to={"/cart"}
            className="hidden md:flex hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200 items-center justify-center"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
          >
            <ShoppingBagIcon style={muiIconStyle} />
          </Link>
        </div>
      </header>
    </>
  );
}

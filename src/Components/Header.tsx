import React, { useRef, useState, useEffect } from "react";
import { FaAirbnb } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { TbBalloon } from "react-icons/tb";
import { MdRoomService } from "react-icons/md";
// @ts-ignore-next-line
import { DateRange } from "react-date-range";
import { format, addMonths } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import CircularSlider from "@fseehawer/react-circular-slider";

const navItems = [
  {
    label: "Homes",
    icon: <MdOutlineHome className="text-2xl" />,
    active: true,
  },
  {
    label: "Experiences",
    icon: <TbBalloon className="text-2xl" />,
    badge: "NEW",
    active: false,
  },
  {
    label: "Services",
    icon: <MdRoomService className="text-2xl" />,
    badge: "NEW",
    active: false,
  },
];

interface SearchOptionProps {
  label: string;
  subLabel: string;
  divider: boolean;
  onClick?: () => void;
  active?: boolean;
}

const SearchOption = ({ label, subLabel, divider, onClick, active }: SearchOptionProps) => (
  <div
    className={`flex flex-col justify-center px-6 py-2 cursor-pointer ${divider ? "border-r border-gray-200" : ""} ${active ? "bg-white shadow font-semibold rounded-full" : ""}`}
    onClick={onClick}
    style={active ? { zIndex: 20, position: "relative" } : {}}
  >
    <span className="font-semibold text-sm text-gray-900">{label}</span>
    <span className="text-gray-500 text-base font-normal">{subLabel}</span>
  </div>
);

const TABS = ["Dates", "Months", "Flexible"] as const;
type TabType = typeof TABS[number];

function CompactHeader({ whenLabel }: { whenLabel: string }) {
  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-white shadow transition-all duration-300 flex items-center justify-between px-12 py-3" style={{ minHeight: 64 }}>
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 cursor-pointer" aria-label="Airbnb Home">
        <FaAirbnb className="text-[#FF385C] text-3xl" />
        <span className="text-[#FF385C] font-bold text-xl tracking-tight">airbnb</span>
      </a>
      {/* Compact Search Bar */}
      <div className="flex items-center bg-white rounded-full shadow px-2 py-1 min-w-[350px] max-w-[500px] border border-gray-200">
        <div className="flex items-center gap-2 px-4">
          <MdOutlineHome className="text-xl text-gray-700 mr-2" />
          <span className="font-semibold text-base text-gray-900">Anywhere</span>
        </div>
        <div className="border-l border-gray-200 h-6 mx-2" />
        <span className="text-base text-gray-700 px-4">Anytime</span>
        <div className="border-l border-gray-200 h-6 mx-2" />
        <span className="text-base text-gray-700 px-4">Add guests</span>
        <button className="ml-2 bg-[#FF385C] hover:bg-[#e11d48] text-white rounded-full p-3 flex items-center justify-center shadow-md transition-all">
          <CiSearch className="text-lg" />
        </button>
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-4">
        <span className="font-medium text-base hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer transition">Become a host</span>
        <span className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
          <IoGlobeOutline className="text-xl text-gray-700" />
        </span>
        <span className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
          <FaBars className="text-xl text-gray-700" />
        </span>
      </div>
    </div>
  );
}

function Header() {
  const [datePickerOpen, setDatePickerOpen] = useState<null | "checkin" | "checkout">(null);
  const [activeTab, setActiveTab] = useState<TabType>("Dates");
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const [months, setMonths] = useState(1);
  const pickerRef = useRef<HTMLDivElement>(null);
  const [showCompact, setShowCompact] = useState(false);

  // Format dates for display
  const checkIn = dateRange[0].startDate;
  const checkOut = dateRange[0].endDate;
  const checkInLabel = checkIn ? format(checkIn, "MMM d, yyyy") : "Add dates";
  const checkOutLabel = checkOut ? format(checkOut, "MMM d, yyyy") : "Add dates";

  // For months tab display
  const today = new Date();
  const monthsStart = format(today, "MMM d, yyyy");
  const monthsEnd = format(addMonths(today, months), "MMM d, yyyy");
  const monthsLabel = `${monthsStart} – ${monthsEnd}`;

  // Show "When" field if months tab is active
  const whenLabel =
    activeTab === "Months"
      ? monthsLabel
      : checkIn && checkOut
      ? `${format(checkIn, "MMM d, yyyy")} – ${format(checkOut, "MMM d, yyyy")}`
      : "Add dates";

  // Close picker on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setDatePickerOpen(null);
      }
    }
    if (datePickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [datePickerOpen]);

  // Listen for scroll to toggle compact header
  useEffect(() => {
    const handleScroll = () => {
      setShowCompact(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Compact Header (shows on scroll) */}
      <div className={`transition-all duration-300 ${showCompact ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed top-0 left-0 w-full z-[100]`}> 
        <CompactHeader whenLabel={whenLabel} />
      </div>
      {/* Main Header (shows at top) */}
      <header className={`w-full bg-white font-sans transition-all duration-300 ${showCompact ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`} style={{ minHeight: 120 }}>
        {/* Top Row */}
        <div className="flex items-center justify-between px-12 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 cursor-pointer" aria-label="Airbnb Home">
            <FaAirbnb className="text-[#FF385C] text-4xl" />
            <span className="text-[#FF385C] font-bold text-2xl tracking-tight">airbnb</span>
          </a>
          {/* Nav */}
          <nav className="flex gap-8 items-center">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center cursor-pointer relative group">
                <div className="flex items-center gap-1">
                  {item.icon}
                  <span className={`ml-1 text-base font-medium ${item.active ? 'text-black' : 'text-gray-600'}`}>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 bg-gray-800 text-white text-xs px-2 py-0.5 rounded-full font-bold">{item.badge}</span>
                  )}
                </div>
                {item.active && <div className="h-1 w-8 bg-black rounded-full mt-2" />}
              </div>
            ))}
          </nav>
          {/* Right Side */}
          <div className="flex items-center gap-4">
            <span className="font-medium text-base hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer transition">Become a host</span>
            <span className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
              <IoGlobeOutline className="text-xl text-gray-700" />
            </span>
            <span className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
              <FaBars className="text-xl text-gray-700" />
            </span>
          </div>
        </div>
        {/* Search Bar */}
        <div className="flex justify-center w-full mt-2 mb-4 relative">
          <div className="flex items-center bg-white rounded-full shadow-lg px-2 py-1" style={{ minWidth: 600, maxWidth: 800 }}>
            <SearchOption label="Where" subLabel="Search destinations" divider={true} />
            <SearchOption
              label={activeTab === "Months" ? "When" : "Check in"}
              subLabel={whenLabel}
              divider={true}
              onClick={() => setDatePickerOpen("checkin")}
              active={datePickerOpen === "checkin"}
            />
            {activeTab !== "Months" && (
              <SearchOption
                label="Check out"
                subLabel={checkOutLabel}
                divider={true}
                onClick={() => setDatePickerOpen("checkout")}
                active={datePickerOpen === "checkout"}
              />
            )}
            <SearchOption label="Who" subLabel="Add guests" divider={false} />
            <button className="ml-4 mr-2 bg-[#FF385C] hover:bg-[#e11d48] text-white rounded-full p-4 flex items-center justify-center shadow-md transition-all" style={{ boxShadow: '0 2px 8px rgba(255,56,92,0.15)' }}>
              <CiSearch className="text-xl" />
            </button>
          </div>
          {/* Date Picker Popup */}
          {datePickerOpen && (
            <div
              ref={pickerRef}
              className="absolute left-1/2 -translate-x-1/2 top-20 z-50 bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center"
              style={{ minWidth: 500 }}
            >
              {/* Tabs */}
              <div className="flex justify-center gap-4 mb-6">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-2 rounded-full font-semibold text-base transition-all ${activeTab === tab ? "bg-gray-200 shadow" : "bg-gray-100 hover:bg-gray-200"}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* Tab Content */}
              {activeTab === "Dates" && (
                <DateRange
                  ranges={dateRange}
                  onChange={(item: any) => {
                    setDateRange([item.selection]);
                  }}
                  moveRangeOnFirstSelection={false}
                  editableDateInputs={true}
                  months={2}
                  direction="horizontal"
                  rangeColors={["#FF385C"]}
                  showDateDisplay={false}
                  minDate={new Date()}
                />
              )}
              {activeTab === "Months" && (
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-xl font-semibold">When's your trip?</div>
                  <CircularSlider
                    width={260}
                    min={1}
                    max={12}
                    data={Array.from({ length: 12 }, (_, i) => `${i + 1}`)}
                    dataIndex={months - 1}
                    label="months"
                    labelColor="#222"
                    valueFontSize="3rem"
                    progressColorFrom="#FF385C"
                    progressColorTo="#FF385C"
                    knobColor="#fff"
                    trackColor="#f3f3f3"
                    progressSize={24}
                    trackSize={24}
                    onChange={(val) => setMonths(Number(val))}
                    renderLabelValue={
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-5xl font-bold">{months}</div>
                        <div className="text-lg font-semibold">months</div>
                      </div>
                    }
                  />
                  <div className="mt-6 text-lg font-medium">{monthsLabel}</div>
                </div>
              )}
              {activeTab === "Flexible" && (
                <div className="flex flex-col items-center justify-center min-h-[200px] text-gray-400">Flexible (coming soon)</div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;

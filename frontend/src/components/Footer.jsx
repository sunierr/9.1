import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    return (
        <div className="flex gap-2 border-t border-[#f5f4f0] bg-white px-4 pb-3 pt-2 fixed bottom-0 left-0 right-0">
        {[
           
            {
                to: "/",
                label: "List",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"
                        ></path>
                    </svg>
                ),
                match: (location.pathname === "/list" || location.pathname === "/"), // adjust as needed
                activeColor: "text-[#181711]",
                inactiveColor: "text-[#8a8360]",
            },
            {
                to: "/new",
                label: "New",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                        ></path>
                    </svg>
                ),
                match: (location.pathname === "/new"),
                activeColor: "text-[#181711]",
                inactiveColor: "text-[#8a8360]",
            },
            {
                to: "/messages",
                label: "Messages",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"
                        ></path>
                    </svg>
                ),
                match: location.pathname.startsWith("/messages"),
                activeColor: "text-[#181711]",
                inactiveColor: "text-[#8a8360]",
            },
            {
                to: "/profile",
                label: "Profile",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                        ></path>
                    </svg>
                ),
                match: location.pathname.startsWith("/profile"),
                activeColor: "text-[#181711]",
                inactiveColor: "text-[#8a8360]",
            },
        ].map((item, idx) => {
            const isActive = item.match;
            return (
                <Link
                    key={item.label}
                    to={item.to}
                    className={`just flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${
                        isActive ? item.activeColor : item.inactiveColor
                    }`}
                >
                    <div
                        className={`flex h-8 items-center justify-center ${
                            isActive ? item.activeColor : item.inactiveColor
                        }`}
                        data-icon={item.label}
                        data-size="24px"
                        data-weight={isActive && item.label === "Home" ? "fill" : "regular"}
                    >
                        {item.icon}
                    </div>
                    <p
                        className={`text-xs font-medium leading-normal tracking-[0.015em] ${
                            isActive ? item.activeColor : item.inactiveColor
                        }`}
                    >
                        {item.label}
                    </p>
                </Link>
            );
        })}
    </div>
    )
}


export default Footer;
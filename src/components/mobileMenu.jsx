export const MobileMenu = ({sidebarOpen, setSidebarOpen}) => {

    return (
        <div className={`md:hidden fixed top-0 right-0 w-4/5 h-screen bg-base/80 z-40 border-l border-accents/80 ${sidebarOpen ? "flex flex-col items-center justify-center" : "hidden"}`}>
            <div className="cursor-pointer absolute top-6 right-6 text-secondary text-3xl" onClick={() => setSidebarOpen(false)}>
                &times;
            </div>

            <ul class="text-2xl flex flex-col justify-center uppercase text-secondary/80 font-bold">
                <li className="p-4"><a href="#home" className="menu-underline cursor-help" onClick={() => setSidebarOpen(false)}>Home</a></li>
                <li className="p-4"><a href="#about" className="menu-underline cursor-help" onClick={() => setSidebarOpen(false)}>About</a></li>
                <li className="p-4"><a href="#projects" className="menu-underline cursor-help" onClick={() => setSidebarOpen(false)}>Projects</a></li>
            </ul>
        </div>
    )
}
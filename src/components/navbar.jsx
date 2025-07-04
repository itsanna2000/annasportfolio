import { useEffect } from "react"

export const Navbar = ({sidebarOpen, setSidebarOpen}) => {

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "";
    }, [sidebarOpen])
    
    return (
        <nav className="w-full h-12 bg-base/80 fixed top-0 left-0 z-40 backdrop-blur-lg border-b-[1px] border-borders/10">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-12">
                    <div className="title text-2xl">
                        <span className="text-primary">anna</span><span className="text-accents">'s</span> <span className="text-secondary">portfolio</span>
                    </div>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-primary text-xl" onClick={() => setSidebarOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex">
                        <ul class="flex space-x-8 p-4 uppercase text-secondary/80 font-bold">
                            <li><a href="#home" className="menu-underline cursor-help">Home</a></li>
                            <li><a href="#about" className="menu-underline cursor-help">About</a></li>
                            <li><a href="#projects" className="menu-underline cursor-help">Projects</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
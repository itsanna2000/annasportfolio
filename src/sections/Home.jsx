export const Home = () => {

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div>
                <h1 className="text-9xl text-primary title">Hello World!</h1>
                <p className="text-3xl text-accents">I'm <span className="title text-secondary">anna</span>, a passionate
                and adaptable <span className="title text-secondary">developer</span> with hands-on experience in full-stack
                web development and a solid understanding of AWS cloud technologies. I enjoy solving problems, learning new things, and
                collaborating with teams to build meaningful digital solutions.</p>
                <div className="mt-2">
                <a href="https://www.linkedin.com/in/anna-lista/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile"
                    className="uppercase text-secondary/60 font-bold bg-secondary/15 px-3 rounded-full
                    hover:bg-secondary/30 hover:text-secondary transition-all cursor-help">LinkedIn</a>
                <a href="https://github.com/itsanna2000" target="_blank" rel="noopener noreferrer" aria-label="Visit my Github profile"
                    className="uppercase text-secondary/60 font-bold bg-secondary/15 px-3 rounded-full
                    hover:bg-secondary/30 hover:text-secondary transition-all cursor-help">Github</a>
                    </div>
            </div>
        </section>
    )
}
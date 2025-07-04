export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center relative">
            <h2 className="title text-7xl text-primary">projects</h2>
            
            <div className="flex flex-wrap gap-x-8 items-center justify-center mt-6">
                <h2 className="title text-4xl text-secondary">instagram clone</h2>
                <p className="text-2xl text-accents">
                    A full-stack social media app with React for the frontend and Firebase backend, featuring Google
                    Authentication, post uploads, likes, and comments. Users can sign in with their Google account
                    and interact in real time with posts and comments.</p>
                    <a href="https://github.com/itsanna2000/ig-clone" target="_blank" rel="noopener noreferrer" aria-label="See code on Github"
                        className="uppercase text-secondary/60 font-bold bg-secondary/15 px-3 rounded-full
                        hover:bg-secondary/30 hover:text-secondary transition-all cursor-help">See code on Github</a>
            </div>
            <div className="flex flex-wrap gap-x-8 items-center justify-center mt-6">
                <h2 className="title text-4xl text-secondary">livechat app</h2>
                <p className="text-2xl text-accents">
                    A full-stack real-time chat application built with React frontend and Firebase backend. Users sign in with
                    their Google account, join or create chat rooms, and communicate instantly with other participants.</p>
                    <a href="https://github.com/itsanna2000/livechat" target="_blank" rel="noopener noreferrer" aria-label="See code on Github"
                        className="uppercase text-secondary/60 font-bold bg-secondary/15 px-3 rounded-full
                        hover:bg-secondary/30 hover:text-secondary transition-all cursor-help">See code on Github</a>
            </div>
            <div className="flex flex-wrap gap-x-8 items-center justify-center mt-6">
                <h2 className="title text-4xl text-secondary">portfolio</h2>
                <p className="text-2xl text-accents">
                    A responsive personal portfolio website built with React and styled using Tailwind CSS. Showcases projects,
                    skills, and professional experience with a clean and simple design.</p>
                    <a href="https://github.com/itsanna2000/annasportfolio" target="_blank" rel="noopener noreferrer" aria-label="See code on Github"
                        className="uppercase text-secondary/60 font-bold bg-secondary/15 px-3 rounded-full
                        hover:bg-secondary/30 hover:text-secondary transition-all cursor-help">See code on Github</a>
            </div>
        </section>
    )
}
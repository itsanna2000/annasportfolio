export const About = () => {

    const skills = ["Javascript", "Node.js", "React", "Express", "HTML&CSS", "SQL", "Typescript", "MySQL", "Git",
        "Prisma", "Visual Studio Code", "MongoDB", "TailwindCSS"
    ]

    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center relative fade-in">
            <div className="flex flex-wrap gap-x-8 items-center justify-center">
                <h2 className="title text-7xl text-primary">skills</h2>
                    {skills.map((skill, index) => (
                            <span key={index} className={`text-accents text-3xl uppercase ${index % 2 === 0 ? "text-secondary text-4xl" : "text-accents"}`}>{skill} </span>
                      ))}
            </div>

            <div className="flex flex-wrap gap-x-8 items-center justify-center mt-6">
                <h2 className="title text-7xl text-primary">experience</h2>
                    <span className="text-secondary text-3xl uppercase">Front-end Developer @ Pelom</span> <span className="text-accents text-3xl uppercase">(May - August 2024)</span>
                    <ul className="text-accents text-2xl list-square pl-5 text-left">
                        <li>Collaborated remotely with a distributed team to improve web applications.</li>
                        <li>Identified, diagnosed, and fixed bugs to enhance user experience and application stability.</li>
                        <li>Assisted in developing new features and refining existing functionalities.</li>
                        <li>Worked in a Linux environment using WSL to stramline the development workflow.</li>
                        <li>Gained practical experience in debugging and team communication.</li>
                    </ul>
                    <span className="text-accents text-3xl">Some of the technologies used were React, Typescript, Git.</span>
            </div>
        </section>
    )
}
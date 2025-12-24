export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS"
    ];

    const backendSkills = [
        "PHP",
        "MySQL",
        "Java",
    ];

    return(
    <section 
    id="about" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
            from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center "
            >About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I'm Drew Devs, a passionate junior web developer with a strong foundation in PHP and a growing expertise in React.js. 
                    My journey in web development began with PHP, where I've built robust backend systems and integrated them with modern frontend technologies.
                    Currently, I'm expanding my skill set by mastering React.js to create more dynamic and interactive user experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover translate-y-1 transition-all">
                        <h3 className =" text-xl font-bold mb-4">Frontend</h3>
                        <div className=" flex flex-wrap gap-2">
                            {frontendSkills.map((skill, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) ] transition">{skill}</span>
                            ))}
                        </div>

                    </div>

                    <div className="rounded-xl p-6 hover translate-y-1 transition-all">
                        <h3 className =" text-xl font-bold mb-4">Backend</h3>
                        <div className=" flex flex-wrap gap-2">
                            {backendSkills.map((skill, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) ] transition">{skill}</span>
                            ))}
                        </div>

                    </div>
                </div>

                

               
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all"> 
                    <h3 className="text-xl font-bold mb-4 ">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Bachelor of Science in Information Technology</strong> - PHINMA-University of Pangasinan(2024 - present)
                        </li>

                    </ul>

                </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all"> 
                        <h3 className="text-xl font-bold mb-4 ">🏢 Work Experience</h3>
                        <div className ="space-y-4 text-gray-300">
                            <div>
                                <h4>
                                    Web Developer at PHINMA-University of Pangasinan (SHS Work Immersion - 2024-2024)
                                </h4>
                                <p>
                                    Developed and maintained the school's website using HTML CSS JS  enhancing user experience and site performance.
                                </p>
                            </div>

                        </div>

                </div>

            </div>

        </div>
        
    </section>
    );
}
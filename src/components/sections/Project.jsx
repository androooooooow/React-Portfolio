export const Project =() =>{
    return( <section 
    id="project" className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-5xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
            from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border bordder-white/10 hover:translate-y hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">CareSync</h3>
                    <p className="text-gray-400 mb-4" >CareSync is a school clinic website that shares health-related 
                        essential information and services with students and staff. 
                    </p>
                    <div>
                        {["HTML", "CSS"].map((skill, key) => (
                        <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) ] transition">{skill}</span>
                        
                    ))}
                    </div>

                </div>

                <div className="p-6 rounded-xl border bordder-white/10 hover:translate-y hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">B-DAG.PH</h3>
                    <p className="text-gray-400 mb-4" >The primary objective of this system is to modernize Dagupan City's public transportation system by introducing a 
                        technology-driven solution
                    </p>
                    <div>
                        {["PHP", "TailwindCSS" ,"MySQL"].map((skill, key) => (
                        <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) ] transition">{skill}</span>
                        
                    ))}
                    </div>

                    

                </div>

                <div className="p-6 rounded-xl border bordder-white/10 hover:translate-y hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">TaskWise</h3>
                    <p className="text-gray-400 mb-4" >TaskWise is a to-do list application that helps users organize, prioritize, and manage tasks efficiently. 
                        It allows users to create tasks, set deadlines, mark tasks as completed, and track daily progress. 
                    </p>
                    <div>
                        {["Python"].map((skill, key) => (
                        <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) ] transition">{skill}</span>
                        
                    ))}
                    </div>

                    

                </div>

            </div>

        </div>

    </section>
    );
}
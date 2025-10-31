const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML/CSS", "JavaScript", "React.js/Next.js", "Angular/TypeScript", "Tailwind/Bootstrap", "Redux/Context API"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "RESTful APIs", "GraphQL APIs", "JWT/OAuth", "Python"]
    },
    {
      category: "Database",
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Tools & Others",
      skills: ["Git/GitHub", "Jira", "ORM"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-2xl animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-secondary/50 px-4 py-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

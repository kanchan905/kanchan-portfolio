import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code is my priority"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and delivering exceptional user experiences"
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate web developer with a focus on creating impactful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-effect p-8 md:p-12 rounded-2xl animate-fade-up">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            With expertise in modern web technologies, I transform complex problems into elegant 
            solutions. My journey in web development has equipped me with a diverse skill set 
            spanning frontend frameworks, backend systems, and cloud infrastructure. I'm passionate 
            about writing clean, efficient code and continuously learning new technologies to stay 
            at the forefront of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import Image from "next/image";

const About = () => {
    return (
        <div>
            <div id="about">Sobre mim:</div>
            <div>
                <p>
                    Olá, meu nome é <span className="text-nosferatu-500">Guilherme</span> e sou desenvolvedor{" "}
                    <span className="text-nosferatu-500">Fullstack</span>.
                </p>
                <p>
                    Atualmente trabalho na area utilizando principalmente a tecnologia{" "}
                    <span className="text-nosferatu-500">React</span>.
                </p>
                <p>
                    Possuo conhecimentos em <span className="text-nosferatu-500">Typescript</span>,{" "}
                    <span className="text-nosferatu-500">Python</span>, <span className="text-nosferatu-500">Java</span>{" "}
                    e <span className="text-nosferatu-500">Go</span>, alem disso sou aberto a novos conhecimentos e
                    experiencias.
                </p>
            </div>
        </div>
    );
};

export default About;

import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center">À propos de moi</h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <Image
              width={500}
              height={500}
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="/images/lee-campbell-DtDlVpy-vvQ-unsplash (1).jpg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto my-3">
            <div className="md:pr-12">
              <p className=" text-lg ">
                Je suis un développeur web Next.js avec de l&apos;expérience
                acquise à travers plusieurs projets. Mes compétences
                s&apos;étendent à <b>Node.js</b>, <b>Nest</b>, et <b>MongoDB</b>
                . J&apos;adore construire des applications web interactives et
                performantes en utilisant <b>Next.js</b>. De plus, j&apos;ai des
                connaissances en développement backend avec <b>Node.js</b> et
                j&apos;ai travaillé avec <b>MongoDB</b> pour les besoins de
                bases de données. Je mets continuellement à jour mes
                connaissances pour rester à jour avec les dernières tendances en
                développement web. J&apos;aime collaborer avec les autres et je
                m&apos;épanouis dans un environnement positif et collaboratif.
                Si vous avez un projet ou des questions, n&apos;hésitez pas à me
                contacter.
                <b>Créons quelque chose d&apos;incroyable ensemble !</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

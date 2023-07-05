import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center">About Me</h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <Image
              width={500}
              height={500}
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="	https://brad-portfolio.netlify.app/images/about.jpeg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto my-3">
            <div className="md:pr-12">
              <p className=" text-lg ">
                I&apos;m a Next.js web developer with experience gained through
                multiple projects. My skills extend to <b>Node.js</b>,{" "}
                <b>NestJS</b>, and <b>MongoDB</b>. I love building interactive and
                performant web applications using <b>Next.js</b>. Additionally,
                I have knowledge in backend development with <b>Node.js</b> and
                have worked with <b>MongoDB</b> for database needs. I
                continuously update my knowledge to stay current with the latest
                trends in web development. I enjoy collaborating with others and
                thrive in a positive and collaborative environment. If you have
                a project or any questions, feel free to reach out. Let&apos;s
                create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

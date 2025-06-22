import React from "react";

const About = () => {
  return (
    <div className="relative h-full flex justify-center w-full flex-col">
      <div className="relative z-0 overflow-scroll  ">
        <div className="absolute top-0 left-0 w-[calc(1340/1920*100*1vw)] border-r border-gray-700 border-l border-dashed overflow-hidden m-[0_calc(290/1920*100*1vw)] h-full " />
        <section className="relative flex justify-center items-center w-screen h-screen ">
          <div className="relative w-screen mt-[calc(-15/1920*100*1vw)] font-silkscreen  text-[calc(180/1920*100*1vw)] leading-[calc(150/1920*100*1vw)] uppercase -tracking-[0.08em]">
            <div className="block ml-[calc(95/1920*100*1vw)]">
              <span>I'm a Tushar</span>
              <span> </span>
              <p className="ml-[calc(580/1920*100*1vw)]">Bawane</p>
              <p className="ml-[calc(280/1920*100*1vw)]">Web Developer</p>
              <div className="absolute top-[calc(289/1920*100*1vw)] text-[calc(15/1920*100*1vw)] font-sans left-[calc(78/1920*100*1vw)] w-[calc(200/1920*100*1vw)] leading-[calc(30/1920*100*1vw)] tracking-[0.09em]">
                <p className="text-gray-500 ">Profile</p>
                <div className="mt-[calc(30/1920*100*1vw)]">
                  <p className="text-gray-500 ">23</p>
                  <p className="text-gray-500 mt-[calc(10/1920*100*1vw)]">09</p>
                </div>
              </div>
              <div className="absolute top-[calc(10/1920*100*1vw)] text-[calc(15/1920*100*1vw)] font-sans right-[calc(78/1920*100*1vw)] w-[calc(200/1920*100*1vw)] leading-[calc(190/1920*100*1vw)] tracking-[0.09em]">
                <p className="text-gray-500 ">2022</p>
                <p className="text-gray-500 ">2023</p>
                <p className="text-gray-500 ">2024</p>
                <p className="text-gray-500 ">2025</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative flex justify-center items-center w-[calc(1320/1920*100*1vw)] m-[0_calc(305/1920*100*1vw)] mt-[calc(-15/1920*100*1vw)]  ">
          <p className="text-[calc(30/1920*100*1vw)] font-mono">
            I'm a passionate Full-Stack Developer with over 3 years of
            experience building scalable and high-performance web applications.
            I specialize in modern JavaScript technologies like React, Next.js,
            Tailwind CSS, and Redux Toolkit on the frontend, and Node.js,
            Express.js, PostgreSQL, and DynamoDB on the backend. Currently, I'm
            working at Zithara, where I’ve developed real-time chat systems,
            WhatsApp automation flows, and user dashboards that support over
            100K active users. I enjoy solving complex problems and transforming
            them into clean, efficient solutions. I'm deeply interested in
            automation, system design, and intuitive UI/UX. Outside of work, I'm
            constantly exploring new tools in AI, workflow automation, and
            modern developer experience to stay ahead in the tech space.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

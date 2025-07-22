const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/portfolio/files/Renuka_Phoubol_CV.pdf";
    link.download = "renuka_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    window.location.href =
      "mailto:renuka.phoubol@gmail.com?subject=Job%20Opportunity%20from%20Your%20Portfolio%20Site";
  };

  return (
    <section className="flex flex-col items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mx-12 sm:mx-24 md:mx-32 lg:mx-48 xl:mx-60 my-8 sm:my-12 md:my-16 lg:my-20 xl:my-24">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
        Hi! I’m Renuka Phoubol
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-semibold text-center">
        Frontend developer
      </h2>
      <p className="text-xs sm:text-base text-center">
        I'm a Developer with hands-on experience in building web applications
        using React, Next, and Node.js. I’ve also worked with data-driven
        systems and GIS solutions, and I’m currently exploring Microsoft Power
        Platform to expand into low-code development that solves real business
        problems. I enjoy learning new technologies and turning complex
        requirements into practical, user-friendly solutions.
      </p>

      <div className="flex gap-4">
        <button
          onClick={handleDownload}
          className="btn btn-outline btn-xs sm:btn-md rounded-lg"
        >
          Download CV
        </button>
        <button
          onClick={handleHireMe}
          className="btn btn-primary btn-xs sm:btn-md rounded-lg"
        >
          Hire Me Now
        </button>
      </div>
    </section>
  );
};

export default Hero;

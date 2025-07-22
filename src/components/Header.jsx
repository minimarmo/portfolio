const navItems = ["Projects", "Skills", "My Journey"];

const Header = () => {
  const handleScrollTo = (id, offset = 80) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-2">
      <div className="flex justify-between items-center">
        <img
          src="/portfolio/smileghost.svg"
          alt="smile-ghost"
          className="w-4 sm:w-8 h-4 sm:h-8 object-cover rounded-t-2xl"
        />

        <div className="flex flex-row gap-1 sm:gap-2 md:gap-6 lg:gap-8 xl:gap-12">
          {navItems.map((label) => (
            <button
              key={label}
              onClick={() =>
                handleScrollTo(label.toLowerCase().replace(/\s+/g, "-"))
              }
              className={`btn btn-ghost btn-xs sm:btn-md rounded-lg`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleScrollTo("contact-me")}
          className="btn btn-primary btn-xs sm:btn-md rounded-lg"
        >
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;

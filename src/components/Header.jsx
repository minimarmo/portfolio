const navItems = ["Showcase", "Skills", "About", "Project"];

const Header = () => {
  return (
    <header className="w-full bg-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-2">
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
              className={`btn btn-ghost btn-xs sm:btn-md rounded-lg ${
                label === "Project" ? "hidden sm:inline-flex" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button className="btn btn-outline btn-xs sm:btn-md rounded-lg">
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;

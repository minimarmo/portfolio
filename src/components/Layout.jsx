import PropTypes from "prop-types";
import Header from "./Header";
import Hero from "./Hero";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col min-h-screen items-center">
      <Header />
      <Hero />

      {/* Main content */}
      <main className="flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 mx-12 sm:mx-24 md:mx-32 lg:mx-40 xl:mx-48">
        {children}
      </main>

      <ScrollToTopButton />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

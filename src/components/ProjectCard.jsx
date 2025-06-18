import PropTypes from "prop-types";
const ProjectCard = ({
  id,
  title,
  description,
  stack,
  imageUrl,
  demoUrl,
  sourceUrl,
}) => {
  return (
    <div
      id={id}
      className="w-full flex flex-col gap-4 rounded-xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24"
    >
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 ">{description}</p>

      {/* Stack */}
      <p className="text-sm sm:text-base font-semibold">Built with:</p>
      <p className="text-sm sm:text-base text-gray-700">{stack.join(", ")}</p>

      {/* Image preview */}
      <div className="rounded-xl bg-gray-300 h-48 sm:h-60 w-full overflow-hidden">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`${title} preview`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Links */}
      {(demoUrl || sourceUrl) && (
        <div className="flex justify-center gap-4 text-sm text-gray-500">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Preview Demo
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Source Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  stack: PropTypes.array,
  imageUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
};

export default ProjectCard;

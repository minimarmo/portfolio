import PropTypes from "prop-types";
const ProjectCard = ({
  title,
  description,
  stack,
  imageUrl,
  demoUrl,
  sourceUrl,
}) => {
  return (
    <div className="w-full flex flex-col gap-4 rounded-xl">
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 text-center">
        {description}
      </p>

      {/* Stack */}
      <div className="text-center">
        <p className="text-sm font-semibold">Built with:</p>
        <p className="text-sm text-gray-700">{stack.join(", ")}</p>
      </div>

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
        <div className="text-center flex justify-center gap-4 text-sm text-gray-500">
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
  title: PropTypes.string,
  description: PropTypes.string,
  stack: PropTypes.array,
  imageUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
};

export default ProjectCard;

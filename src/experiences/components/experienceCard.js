import React from "react";

const ExperienceCard = ({ experience, index }) => {
  if (index % 2 == 0) {
    return (
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mb-10 timeline-start md:text-end">
          <time className="font-mono italic">{experience.time}</time>
          <div className="text-lg font-black">{experience.company}</div>
          {experience.description}
        </div>
        <hr />
      </li>
    );
  } else {
    return (
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mb-10 timeline-end  ">
          <time className="font-mono italic">{experience.time}</time>
          <div className="text-lg font-black">{experience.company}</div>
          {experience.description}
        </div>
        <hr />
      </li>
    );
  }
};

export default ExperienceCard;

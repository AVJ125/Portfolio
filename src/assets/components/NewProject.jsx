import { useRef } from "react";
import "./NewProject.css";
 

export default function NewProject({
  // content props
  project
}) {

const {imageSrc,altText,name,techStack,pointsk,githubLink ,liveLink ,hasLive,containerHeight,containerWidth,scaleOnHover,rotateAmplitude}=project
  const ref = useRef(null);


  return (
    <div 
      ref={ref}
      className="project-card indiProject zilla-slab-light"
      style={{
        height: containerHeight,
        width: containerWidth,
        
      }}
     
    >
      {/* LEFT: Image */}
      <div className="project-card__media">
        <img src={imageSrc} alt={altText} className="project-card__img" />
      </div>

      {/* RIGHT: Content */}
      <div className="project-card__content">
        <p className="project-card__title">{name}</p>

        {techStack?.length > 0 && (
          <p className="project-card__stack">
            <strong>Tech:</strong> {techStack.join(", ")}
          </p>
        )}

        {pointsk?.length > 0 && (
          <ul className="project-card__bullets">
            {pointsk.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}

        <div className="project-card__actions">
          {hasLive && liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--live"
            >
              Live
            </a>
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--github"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

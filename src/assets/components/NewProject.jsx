import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import "./NewProject.css";

const springValues = { damping: 30, stiffness: 100, mass: 2 };

export default function NewProject({
  // content props
  project
}) {

const {imageSrc,altText,name,techStack,pointsk,githubLink ,liveLink ,hasLive,containerHeight,containerWidth,scaleOnHover,rotateAmplitude}=project
  const ref = useRef(null);

  // motion values
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.section
      ref={ref}
      className="project-card indiProject zilla-slab-light"
      style={{
        height: containerHeight,
        width: containerWidth,
        rotateX,
        rotateY,
        scale,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
    </motion.section>
  );
}

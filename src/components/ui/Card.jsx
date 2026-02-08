// Card.jsx
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Button from "./Button";

export default function Card({
  title,
  description,
  image,
  link,
  tags,
  githubLink,
}) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden transition-all 
        duration-500 hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm 
        bg-(--bg-primary) border border-(--border-color) hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative w-full h-50 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-linear-to-br from-(--gradient-from) 
        to-(--gradient-to) opacity-20 group-hover:opacity-40 transition-opacity duration-300"
        ></div>
      </div>

      {/* Content Section */}
      <div
        className="p-6 flex flex-col gap-4 bg-(--bg-primary) 
      backdrop-blur-md border-t border-(--border-color)"
      >
        {/* Title */}
        <h3
          className="text-2xl font-bold bg-linear-to-r from-(--gradient-from) 
        to-(--gradient-to) bg-clip-text text-transparent"
        >
          {title}
        </h3>

        {/* Description - Pas de coupure */}
        <p
          className="text-(--text-secondary) text-sm leading-relaxed 
        line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
        >
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3.5 py-1.5 text-xs font-medium 
                rounded-full bg-(--bg-secondary) border border-(--border-color) 
                text-(--accent-color) backdrop-blur-sm transition-all duration-300 
                hover:border-(--accent-color) hover:-translate-y-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2 items-center justify-between">
          {link && (
            <Button 
              href={link} 
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="w-4 h-4" />
              Démo
            </Button>
          )}
          {githubLink && (
            <Button 
              href={githubLink} 
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

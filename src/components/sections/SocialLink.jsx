import { DiGithubBadge } from "react-icons/di";
import { SiLinkedin, SiFacebook } from "react-icons/si";
import "./SocialLinks.css";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mamitiana-antonio-ratolojanahary-460a75384",
      icon: SiLinkedin,
      color: "#333",
      hoverColor: "#00a0dc",
    },
    {
      name: "GitHub",
      url: "https://github.com/MamitianaAntonio",
      icon: DiGithubBadge,
      color: "#333",
      hoverColor: "#6e5494",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/antonio.mamitiana.ratolojanahary",
      icon: SiFacebook,
      color: "#333",
      hoverColor: "#4267B2",
    },
  ];

  return (
    <div className="social-links-container">
      <div className="social-links">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                "--social-color": social.color,
                "--social-hover": social.hoverColor,
              }}
              aria-label={social.name}
            >
              <Icon className="social-icon" />
              <span className="social-name">{social.name}</span>
            </a>
          );
        })}
      </div>
      <p className="social-text">Connect with me</p>
      <div className="social-divider"></div>
    </div>
  );
}

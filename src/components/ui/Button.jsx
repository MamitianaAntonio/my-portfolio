import './Button.css';

export default function Button({
  children,
  href,
  target,
  variant = "primary",
  classname = "",
  rel
}) {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
  };


  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseClasses} ${variantClasses[variant]} ${classname}`}
    >
      {children}
    </a>
  );
}

import './Button.css';

export default function Button({
  children,
  href,
  variant = "primary",
  classname = "",
}) {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
  };


  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${classname}`}
    >
      {children}
    </a>
  );
}

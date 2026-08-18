import { useState } from "react";
import { Link } from "react-router-dom";

interface SecretNavLinkProps {
  to: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
  onInteract?: () => void;
}

const CLICKS_TO_UNLOCK = 3;

export default function SecretNavLink({
  to,
  label,
  className,
  style,
  onInteract,
}: SecretNavLinkProps) {
  const [clicks, setClicks] = useState(0);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onInteract?.();

    if (clicks + 1 >= CLICKS_TO_UNLOCK) {
      return;
    }

    e.preventDefault();
    setClicks((c) => c + 1);

    const margin = 60;
    const top = margin + Math.random() * (window.innerHeight - margin * 2);
    const left = margin + Math.random() * (window.innerWidth - margin * 2);
    setPosition({ top, left });
  }

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      style={
        position
          ? { ...style, position: "fixed", top: position.top, left: position.left, zIndex: 60 }
          : style
      }
    >
      {label}
    </Link>
  );
}

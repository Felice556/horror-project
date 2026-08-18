import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

interface SecretNavLinkProps {
  to: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
  onInteract?: () => void;
}

const CLICKS_TO_UNLOCK = 3;
const MARGIN = 60;

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

    const pageHeight = document.documentElement.scrollHeight;
    const pageWidth = document.documentElement.scrollWidth;
    const top = MARGIN + Math.random() * (pageHeight - MARGIN * 2);
    const left = MARGIN + Math.random() * (pageWidth - MARGIN * 2);
    setPosition({ top, left });
  }

  const link = (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      style={
        position
          ? { ...style, position: "absolute", top: position.top, left: position.left, zIndex: 60 }
          : style
      }
    >
      {label}
    </Link>
  );

  return position ? createPortal(link, document.body) : link;
}

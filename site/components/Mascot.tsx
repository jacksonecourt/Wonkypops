// Inline version of /brand/pop-mascot.svg so it can be recoloured per flavour.
type Props = {
  className?: string;
  body?: string;
  top?: string;
  onDark?: boolean;
  face?: boolean;
  title?: string;
};

const shape =
  "M52 72 C46 40 72 20 96 24 C112 14 146 24 150 58 C156 76 150 92 154 110 L156 158 C158 184 140 194 118 192 L82 194 C60 196 46 184 46 162 L48 118 C44 100 54 88 52 72 Z";

export default function Mascot({
  className = "",
  body = "#F2762E",
  top = "#C23B5A",
  onDark = false,
  face = true,
  title,
}: Props) {
  const line = onDark ? "#FFF6EA" : "#3B1F2B";
  return (
    <svg
      viewBox="0 0 200 260"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g transform="rotate(-8 100 130)">
        <rect x="87" y="168" width="26" height="80" rx="13" fill="#E3B27A" stroke={line} strokeWidth="6" />
        <path d={shape} fill={body} />
        <path
          d="M50 80 C60 70 68 98 80 86 C90 74 98 106 110 90 C120 78 130 100 140 86 C146 78 150 80 153 86 L150 58 C146 24 112 14 96 24 C72 20 46 40 52 72 Z"
          fill={top}
        />
        <path d={shape} fill="none" stroke={line} strokeWidth="6" strokeLinejoin="round" />
        <path
          d="M64 108 C62 124 63 140 67 154"
          stroke="#FFF6EA"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        {face && (
          <>
            <circle cx="90" cy="130" r="6" fill="#3B1F2B" />
            <circle cx="120" cy="126" r="6" fill="#3B1F2B" />
            <path d="M92 148 Q106 162 122 144" stroke="#3B1F2B" strokeWidth="5" strokeLinecap="round" fill="none" />
          </>
        )}
        <ellipse cx="78" cy="150" rx="8" ry="5" fill="#D5561A" opacity="0.8" />
        <ellipse cx="134" cy="142" rx="5" ry="4" fill="#D5561A" opacity="0.8" />
        <circle cx="126" cy="170" r="4" fill="#D5561A" opacity="0.8" />
        <path
          d="M98 25 C94 10 104 2 120 0 C128 12 120 26 102 28 Z"
          fill="#3C8D4F"
          stroke={line}
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

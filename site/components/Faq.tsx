import faq from "@/data/faq.json";

// Turns "[PLACEHOLDER...]" fragments in FAQ copy into visible placeholder badges.
function renderAnswer(text: string) {
  return text.split(/(\[PLACEHOLDER[^\]]*\])/g).map((part, i) =>
    part.startsWith("[PLACEHOLDER") ? (
      <span key={i} className="placeholder">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function Faq() {
  return (
    <div className="space-y-4">
      {faq.faqs.map((item, i) => (
        <details key={i} className="card group open:bg-white">
          <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 min-h-[56px] font-display font-bold text-xl [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="shrink-0 h-9 w-9 rounded-full border-[3px] border-wp-plum bg-wp-peach grid place-items-center text-2xl leading-none transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-5 pb-5 -mt-1">{renderAnswer(item.a)}</p>
        </details>
      ))}
    </div>
  );
}

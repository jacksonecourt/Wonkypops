import Mascot from "./Mascot";

export type Nutrition = {
  energy: number;
  protein: number;
  fat: number;
  satFat: number;
  carbs: number;
  sugars: number;
  sodium: number;
};

export type Flavour = {
  slug: string;
  name: string;
  fruitName: string;
  blurb: string;
  fruit: string;
  ingredients: string;
  tags: string[];
  body: string;
  top: string;
  allergens: string;
  nutrition: Nutrition;
};

export default function FlavourCard({ f, i, detailed = false }: { f: Flavour; i: number; detailed?: boolean }) {
  return (
    <article className={`card overflow-hidden flex flex-col ${i % 2 ? "wonky-r" : "wonky-l"}`}>
      <div
        className="relative h-52 grid place-items-center border-b-[3px] border-wp-plum overflow-hidden"
        style={{ background: `${f.body}33` }}
      >
        <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute w-64 h-64 opacity-60">
          <path
            d="M44 40 C80 6 150 14 172 56 C196 100 178 160 128 178 C76 196 22 168 16 116 C12 82 20 60 44 40 Z"
            fill={f.body}
            opacity="0.35"
          />
        </svg>
        <Mascot body={f.body} top={f.top} className="relative h-44 w-auto drop-shadow-sm" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-2xl">{f.name}</h3>
        <p className="eyebrow text-xs mt-1">{f.fruitName}</p>
        <p className="mt-3">{f.blurb}</p>
        {detailed && (
          <dl className="mt-4 space-y-2 text-sm">
            <div>
              <dt className="font-display font-bold inline">Fruit rescued: </dt>
              <dd className="inline">{f.fruit}</dd>
            </div>
            <div>
              <dt className="font-display font-bold inline">Ingredients: </dt>
              <dd className="inline">{f.ingredients}</dd>
            </div>
            <div>
              <dt className="font-display font-bold inline">Allergens: </dt>
              <dd className="inline">{f.allergens}</dd>
            </div>
          </dl>
        )}
        <ul className="mt-auto pt-4 flex flex-wrap gap-2" aria-label="Tags">
          {f.tags.map((t) => (
            <li
              key={t}
              className={`text-sm font-display font-medium px-3 py-0.5 rounded-full border-2 border-wp-plum ${
                t === "Seasonal" ? "bg-[#d9eedd]" : "bg-wp-peach"
              }`}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

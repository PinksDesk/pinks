import type { BookId } from "@/data/slate";

export type ParlayPreset = {
  legs: number;
  gameIds: string[];
  title: string;
  safe: string;
  risk: string;
  hedge: string;
  book: BookId;
  bookWhy: string;
};

export const PRESETS: ParlayPreset[] = [
  {
    legs: 3,
    gameIds: ["mia-sf", "no-bal", "cle-tb"],
    title: "Three-teamer · chalk core",
    safe: "SF −12.5, BAL −8.5, TB −8.5. Three of the widest home (or functional home) mismatches on the Week 2 board. Combined desk win rate north of 70% independent. LAC is OFF this naked ladder — hedge that Chargers ticket separately.",
    risk: "Big favorites still lose outright in Week 2. SF laying 12.5 can look ugly if Miami hangs around. Independence is a lie — variance clusters.",
    hedge: "None required on the core three. If you must, a small MIA moneyline only if the Dolphins get a surprise healthy WR stack Friday.",
    book: "southpoint",
    bookWhy: "South Point / Rampart same sheet. Stations (Red Rock, GVR, Durango, Palace…) is closer for most of the valley — different book, shop the card.",
  },
  {
    legs: 4,
    gameIds: ["mia-sf", "no-bal", "cle-tb", "phi-ten"],
    title: "Four-teamer · add the Birds",
    safe: "Eagles −7 on the road at Tennessee after a one-score Week 1 escape. Still a roster mismatch. Four of the desk's strongest Week 2 sides.",
    risk: "PHI laying a touchdown on the road. Titans can slog. Four legs of heavy juice eats the ticket if any favorite lays an egg.",
    hedge: "TEN moneyline at Circa, ~30% of the parlay stake, if you only fear Philadelphia.",
    book: "southpoint",
    bookWhy: "South Point / Rampart same sheet. Stations is closer for most of the valley — different book, shop the 4-leg card.",
  },
  {
    legs: 5,
    gameIds: ["mia-sf", "no-bal", "cle-tb", "phi-ten", "det-buf"],
    title: "Five-teamer · TNF Bills",
    safe: "BUF −3 at home Thursday. Highest total on the slate (53.5) helps a ML more than a cover. Lions are good; Bills at home in September still the side.",
    risk: "TNF variance. Detroit just survived OT in Week 1 and can steal one in Orchard Park. First real 'favorite can lose outright' on the ticket.",
    hedge: "DET moneyline at Circa or Pinnacle. Size: 25–30% of parlay stake. Do not naked-ladder LAC — that ticket gets its own hedge.",
    book: "southpoint",
    bookWhy: "Five-leg juice is why South Point still beats the apps. Stations: walk in, read their card.",
  },
  {
    legs: 6,
    gameIds: ["mia-sf", "no-bal", "cle-tb", "phi-ten", "det-buf", "min-chi"],
    title: "Six-teamer · Bears home · Murray OUT",
    safe: "CHI −5.5 at home with Kyler Murray OUT. Still all desk leans. No LAC on this naked ladder — Chargers are hedged off-board.",
    risk: "Six independent ~70% coins is ~12–15% after juice. Bears home opener can still be a slog. This is a flyer, not a mortgage.",
    hedge: "MIN moneyline at Circa is the clean single-team hedge. Alternate: if Friday's report flips Murray to Expected, drop CHI and stop at 5. LAC stays off the ladder.",
    book: "southpoint",
    bookWhy: "Best posted 6-leg ML at South Point / Rampart. Bovada if you are not in Nevada. Stations is not this sheet.",
  },
];

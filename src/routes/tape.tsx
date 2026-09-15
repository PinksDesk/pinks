import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatSpread, formatTotalDiff, gradeWord, week1Tape } from "@/lib/tape";
import type { Grade } from "@/lib/engine";

export const Route = createFileRoute("/tape")({ component: TapePage });

function tone(g: Grade): "win" | "risk" | "neutral" {
  if (g === "W") return "win";
  if (g === "L") return "risk";
  return "neutral";
}

function TapePage() {
  const rows = week1Tape();
  const mlW = rows.filter((r) => r.ml === "W").length;
  const mlL = rows.filter((r) => r.ml === "L").length;
  const atsW = rows.filter((r) => r.ats === "W").length;
  const atsL = rows.filter((r) => r.ats === "L").length;
  const atsP = rows.filter((r) => r.ats === "P").length;

  return (
    <main className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Week 1 · graded</p>
        <h1 className="font-display text-3xl tracking-tight">Last week</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Who we wrote wins, the number on that side, the score we wrote, what actually happened, and
          how you would have done if you followed us — moneyline and against the spread.
        </p>
        <p className="text-sm text-muted">
          Follow-us moneyline {mlW}–{mlL}. Against the spread {atsW}–{atsL}
          {atsP ? `–${atsP}` : ""}.
        </p>
      </header>

      <ul className="flex flex-col gap-3">
        {rows.map((r) => (
          <li key={r.id} className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-xl">
                {r.away} @ {r.home}
              </h2>
              <p className="font-mono text-xs text-muted">{r.final}</p>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="text-sm">
                <p>
                  <span className="text-muted">PinksDesk said </span>
                  <span className="font-medium">{r.ourPick}</span>
                  <span className="font-mono text-muted"> {formatSpread(r.pickSpread)}</span>
                </p>
                <p className="mt-1">
                  <span className="text-muted">We wrote </span>
                  <span className="font-mono tabular-nums">{r.ourScore}</span>
                </p>
                <p className="mt-1">
                  <span className="text-muted">Final total </span>
                  <span className="font-mono tabular-nums">
                    {r.actualTotal != null ? r.actualTotal : "—"}
                  </span>
                  {r.predictedTotal != null ? (
                    <span className="text-muted">
                      {" "}
                      · predicted {r.predictedTotal} · {formatTotalDiff(r.totalDiff)}
                    </span>
                  ) : null}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={tone(r.ml)}>ML {gradeWord(r.ml, "ml")}</Badge>
                <Badge tone={tone(r.ats)}>Spread {gradeWord(r.ats, "ats")}</Badge>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <Button variant="outline" size="sm" asChild>
          <Link to="/">Back to desk</Link>
        </Button>
      </div>
    </main>
  );
}

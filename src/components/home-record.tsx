import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { deskMe, listDeskTickets, type DeskTicket } from "@/lib/desk-auth";
import { formatPct } from "@/lib/odds";
import { Button } from "@/components/ui/button";

type Props = {
  deskPct: number;
  deskW: number;
  deskL: number;
};

export function HomeRecord({ deskPct, deskW, deskL }: Props) {
  const [user, setUser] = useState<{ email: string; name: string } | null | undefined>(undefined);
  const [tickets, setTickets] = useState<DeskTicket[] | null>(null);

  useEffect(() => {
    void (async () => {
      const me = (await deskMe()) as { ok: true; user: { email: string; name: string } | null };
      setUser(me.user);
      if (!me.user) {
        setTickets(null);
        return;
      }
      const out = (await listDeskTickets()) as
        | { ok: true; tickets: DeskTicket[] }
        | { ok: false; error: string };
      if (!out.ok) {
        setTickets([]);
        return;
      }
      setTickets(out.tickets);
    })();
  }, []);

  const wins = tickets?.filter((t) => t.result === "win").length ?? 0;
  const losses = tickets?.filter((t) => t.result === "lose").length ?? 0;
  const yourN = wins + losses;
  const yourPct = yourN ? wins / yourN : 0;

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">PinksDesk picks</p>
        <p className="mt-1 font-display text-5xl tabular-nums">{formatPct(deskPct)}</p>
        <p className="mt-1 text-sm text-muted">
          {deskW} right · {deskL} wrong. Misses stay up.
        </p>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Your picks</p>
        {user === undefined ? (
          <p className="mt-1 text-sm text-muted">Checking…</p>
        ) : !user ? (
          <>
            <p className="mt-1 text-sm text-muted">Sign in to see your record.</p>
            <Button className="mt-3" size="sm" asChild>
              <Link to="/login">Sign in</Link>
            </Button>
          </>
        ) : yourN === 0 ? (
          <>
            <p className="mt-1 font-display text-3xl tabular-nums">—</p>
            <p className="mt-1 text-sm text-muted">
              No graded tickets yet. Save a slip, then mark win or lose.
            </p>
            <Button className="mt-3" size="sm" variant="outline" asChild>
              <Link to="/history">Your tickets</Link>
            </Button>
          </>
        ) : (
          <>
            <p className="mt-1 font-display text-5xl tabular-nums">{formatPct(yourPct)}</p>
            <p className="mt-1 text-sm text-muted">
              {wins} won · {losses} lost from your tickets.
            </p>
            <Button className="mt-3" size="sm" variant="outline" asChild>
              <Link to="/history">Your tickets</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

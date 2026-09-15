import { createFileRoute, redirect } from "@tanstack/react-router";

/** Proprietary homework — not a public scoreboard. */
export const Route = createFileRoute("/engine")({
  beforeLoad: () => {
    throw redirect({ to: "/learn" });
  },
});

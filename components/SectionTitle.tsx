import type { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-bold text-cyan-400 text-xl text-center">{children}</h2>
  );
}

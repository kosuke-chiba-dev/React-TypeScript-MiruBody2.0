import React from "react";
import Foods from "./Foods";
type Props = {
  onToggle: (id: string) => void;
  selectedIds: string[];
};
export default function Section({ onToggle, selectedIds }: Props) {
  return (
    <>
      <section className="section" data-group="good">
        <h2>プラス（体に良い）</h2>
        <Foods group="good" onToggle={onToggle} selectedIds={selectedIds} />
      </section>
      <section className="section mt-16" data-group="bad">
        <h2>マイナス（控えたい）</h2>
        <Foods group="bad" onToggle={onToggle} selectedIds={selectedIds} />
      </section>
    </>
  );
}

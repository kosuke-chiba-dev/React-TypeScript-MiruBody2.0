import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SCORE_BY_ID } from "./data/items";
import Section from "./components/Section";
import { useState, useEffect, useMemo } from "react";

const STORAGE_KEY = "mirubody:selectedIds";
function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const toggle = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds));
    } catch {}
  }, [selectedIds]);

  const score = useMemo(() => {
    return selectedIds.reduce((acc, id) => acc + (SCORE_BY_ID[id] ?? 0), 0);
  }, [selectedIds]);

  const handleReset = () => {
    setSelectedIds([]);
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="brand">
            <div className="brand-text">
              <h1 className="title title-rich">MiruBody</h1>
              <p className="tagline">食べる、整える、しなやかに。</p>
            </div>
          </div>

          <div className="scoreArea">
            <div className="score-wrap">
              <div className="score-label">今日のスコア</div>
              <div className="score">
                <div className="score__circle">
                  <div className="score__number">{score}</div>
                </div>
              </div>
            </div>
            <div className="resetBtn-container">
              <button
                className="resetBtn"
                onClick={handleReset}
                disabled={selectedIds.length === 0}
              >
                リセット
              </button>
            </div>
          </div>
        </header>
        <Section onToggle={toggle} selectedIds={selectedIds} />
      </div>
    </>
  );
}

export default App;

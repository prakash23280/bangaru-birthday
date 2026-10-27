import { useState } from "react";
import { Heart, LockKeyhole, ArrowRight } from "lucide-react";

const PASSWORD = "2823";

export default function PasswordGate({ children }) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("That's not the secret. Try again, Bangaru ❤️");
      setPassword("");
    }
  };

  if (unlocked) return children;

  return (
    <main className="gate-page">
      <div className="gate-glow gate-glow-one" />
      <div className="gate-glow gate-glow-two" />

      <div className="gate-particles">
        <span>✦</span>
        <span>♡</span>
        <span>✦</span>
        <span>·</span>
        <span>♡</span>
        <span>✦</span>
      </div>

      <section className="gate-card">

        <div className="gate-top">
          <span className="gate-status">
            <span className="status-dot" />
            PRIVATE
          </span>

          <span className="gate-number">01 / 01</span>
        </div>

        <div className="gate-heart">
          <div className="heart-ring ring-one" />
          <div className="heart-ring ring-two" />
          <Heart size={34} fill="currentColor" strokeWidth={1.5} />
        </div>

        <p className="eyebrow">A PRIVATE LITTLE WORLD</p>

        <h1>
          For my
          <span> Bangaru</span>
        </h1>

        <p className="gate-description">
          I made something special for you.
          <br />
          But first, I need to know it's really you.
        </p>

        <form onSubmit={handleSubmit} className="gate-form">
          <label htmlFor="password">
            <LockKeyhole size={14} />
            ENTER THE SECRET
          </label>

          <div className="password-input-wrap">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="••••"
              autoFocus
              maxLength={20}
            />

            <button type="submit" aria-label="Unlock">
              <ArrowRight size={20} />
            </button>
          </div>

          {error && <p className="gate-error">{error}</p>}
        </form>

        <div className="gate-bottom">
          <span>MADE WITH LOVE</span>
          <Heart size={12} fill="currentColor" />
          <span>ONLY FOR YOU</span>
        </div>

      </section>

      <p className="gate-footer">
        28 · 10 · 2026 &nbsp;—&nbsp; YOUR SPECIAL DAY
      </p>
    </main>
  );
}

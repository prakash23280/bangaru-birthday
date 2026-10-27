import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CalendarHeart,
  Camera,
  ChevronDown,
  Clock3,
  Heart,
  Infinity,
  Mail,
  Sparkles,
  Star,
  Quote,
} from "lucide-react";

const memories = [
  {
    image: `${import.meta.env.BASE_URL}images/memory-01.jpg`,
    number: "01",
    title: "That Moment",
    text: "A little moment that became a beautiful memory.",
  },
  {
    image: `${import.meta.env.BASE_URL}images/memory-02.jpg`,
    number: "02",
    title: "Us",
    text: "Some moments don't need a reason to become special.",
  },
  {
    image: `${import.meta.env.BASE_URL}images/memory-03.jpg`,
    number: "03",
    title: "Always",
    text: "A memory I would choose to live again and again.",
  },
];

const reasons = [
  "The way you make ordinary days feel special.",
  "Your smile that somehow makes everything better.",
  "The comfort I feel when I'm with you.",
  "The little things you do without even realizing.",
  "Simply because you are you — my Bangaru.",
];

const journey = [
  {
    number: "01",
    title: "The Beginning",
    text: "Somewhere along the way, you became more than just someone in my life.",
  },
  {
    number: "02",
    title: "The Little Things",
    text: "The conversations, laughs, memories and tiny moments slowly became my favourites.",
  },
  {
    number: "03",
    title: "Us",
    text: "And now, when I think about happiness, somehow you are always part of the picture.",
  },
  {
    number: "04",
    title: "Forever",
    text: "I don't know everything the future holds, but I know who I want beside me.",
  },
];

function Countdown() {
  const calculate = () => {
    const target = new Date("2026-10-28T00:00:00").getTime();
    const now = Date.now();
    const difference = Math.max(target - now, 0);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="time-box">
        <strong>{String(time.days).padStart(2, "0")}</strong>
        <span>DAYS</span>
      </div>

      <div className="time-separator">:</div>

      <div className="time-box">
        <strong>{String(time.hours).padStart(2, "0")}</strong>
        <span>HOURS</span>
      </div>

      <div className="time-separator">:</div>

      <div className="time-box">
        <strong>{String(time.minutes).padStart(2, "0")}</strong>
        <span>MINUTES</span>
      </div>

      <div className="time-separator">:</div>

      <div className="time-box">
        <strong>{String(time.seconds).padStart(2, "0")}</strong>
        <span>SECONDS</span>
      </div>
    </div>
  );
}

function SectionTitle({ number, eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <div className="section-meta">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </div>
  );
}

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {/* FLOATING BACKGROUND */}
      <div className="background-noise" />

      <div className="floating-heart heart-a">♡</div>
      <div className="floating-heart heart-b">♡</div>
      <div className="floating-heart heart-c">✦</div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">
          <span className="nav-logo-icon">♡</span>
          <span>for bangaru</span>
        </div>

        <div className="nav-links">
          <button onClick={() => scrollTo("memories")}>Memories</button>
          <button onClick={() => scrollTo("letter")}>Letter</button>
          <button onClick={() => scrollTo("journey")}>Our Story</button>
        </div>

        <button
          className="nav-heart"
          onClick={() => scrollTo("final")}
          aria-label="Go to final message"
        >
          <Heart size={17} fill="currentColor" />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />

        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={13} />
            <span>A LITTLE SOMETHING FOR YOU</span>
          </div>

          <p className="hero-small">HAPPY BIRTHDAY TO</p>

          <h1>
            My
            <em> Bangaru</em>
          </h1>

          <p className="hero-subtitle">
            If I could give you one thing in life,
            <br />
            I would give you the ability to see yourself
            <br className="desktop-break" />
            through my eyes.
          </p>

          <button
            className="hero-button"
            onClick={() => scrollTo("message")}
          >
            <span>ENTER OUR LITTLE WORLD</span>
            <ArrowRight size={17} />
          </button>

        </div>

        <div className="hero-bottom">
          <span>28.10.2026</span>

          <div className="scroll-line">
            <span />
          </div>

          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="message-section section" id="message">
        <div className="message-layout">

          <div className="message-label">
            <span>01</span>
            <span>THE MESSAGE</span>
          </div>

          <div className="message-content">
            <Quote className="quote-icon" size={38} />

            <h2>
              You are one of the
              <br />
              <span>best things</span>
              <br />
              that ever happened to me.
            </h2>

            <p>
              I wanted to create something that isn't just another birthday
              wish. Something that stays with you for a little while.
              Something that reminds you how loved you are.
            </p>

            <p>
              So this little corner of the internet is just for you,
              Bangaru.
            </p>

            <div className="signature">
              <span>Always yours,</span>
              <strong>Mama ♡</strong>
            </div>
          </div>

        </div>
      </section>

      {/* MEMORIES */}
            <section className="her-section her-editorial" id="her">
  <div className="her-editorial-bg">BANGARU</div>

  <div className="her-editorial-glow her-editorial-glow-one" />
  <div className="her-editorial-glow her-editorial-glow-two" />

  <div className="her-editorial-grid">
    <div className="her-editorial-photo">
      <div className="her-editorial-frame">
        <img
          src={`${import.meta.env.BASE_URL}images/bangaru.jpeg`}
          alt="My Bangaru"
        />
      </div>

      <div className="her-editorial-photo-meta">
        <span>01</span>
        <span>THE GIRL BEHIND MY SMILE</span>
      </div>
    </div>

    <div className="her-editorial-copy">
      <div className="her-editorial-top">
        <span>02 / HER</span>
        <span>OCT 28 / 2026</span>
      </div>

      <div className="her-editorial-heading">
        <p>SHE WASN'T JUST</p>
        <p>A MOMENT...</p>

        <h2>
          SHE BECAME MY
          <br />
          <em>FAVOURITE CHAPTER.</em>
        </h2>
      </div>

      <div className="her-editorial-bottom">
        <div className="her-editorial-line" />

        <p className="her-editorial-name">
          MY BANGARU <span>♥</span>
        </p>

        <p className="her-editorial-quote">
          Somewhere between all the ordinary days,
          <br />
          you became my favourite one.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="section memories-section" id="memories">
        <SectionTitle
          number="02"
          eyebrow="OUR MEMORIES"
          title="Little Moments"
          text="The moments may look small, but they mean everything to me."
        />

        <div className="memory-grid">
          {memories.map((memory) => (
            <article className="memory-card" key={memory.number}>

              <div className="memory-image">
                <img
                  src={memory.image}
                  alt={memory.title}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="image-placeholder">
                  <Camera size={28} />
                  <span>YOUR MEMORY</span>
                </div>

                <div className="memory-number">
                  {memory.number}
                </div>
              </div>

              <div className="memory-info">
                <span>{memory.title}</span>
                <p>{memory.text}</p>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* WHY I LOVE YOU */}
      <section className="reasons-section section">
        <div className="reasons-layout">

          <div className="reasons-left">
            <SectionTitle
              number="03"
              eyebrow="THE REAL REASON"
              title={
                <>
                  Why I
                  <br />
                  Love You
                </>
              }
              text="I could write a thousand reasons. These are just a few."
            />

            <div className="love-meter">
              <div className="love-meter-top">
                <span>LOVE STATUS</span>
                <span>100%</span>
              </div>

              <div className="meter">
                <div className="meter-fill" />
              </div>

              <div className="love-meter-bottom">
                <span>START</span>
                <Heart size={13} fill="currentColor" />
                <span>NO END</span>
              </div>
            </div>
          </div>

          <div className="reason-list">
            {reasons.map((reason, index) => (
              <div className="reason-item" key={reason}>
                <div className="reason-number">
                  0{index + 1}
                </div>

                <p>{reason}</p>

                <Heart
                  className="reason-heart"
                  size={17}
                  fill="currentColor"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* JOURNEY */}
      <section className="section journey-section" id="journey">
        <SectionTitle
          number="04"
          eyebrow="OUR STORY"
          title="A Journey Called Us"
          text="And somehow, I would choose every chapter again."
        />

        <div className="journey-line">
          {journey.map((item) => (
            <div className="journey-item" key={item.number}>

              <div className="journey-marker">
                <span>{item.number}</span>
              </div>

              <div className="journey-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* LOVE LETTER */}
      <section className="letter-section section" id="letter">

        <div className="letter-card">

          <div className="letter-decoration">
            <span>♡</span>
            <span>✦</span>
            <span>♡</span>
          </div>

          <div className="letter-top">
            <span>05 / LOVE LETTER</span>
            <Mail size={18} />
          </div>

          <div className="letter-body">

            <p className="letter-hi">
              Dear Bangaru,
            </p>

            <h2>
              There are some things
              <br />
              I don't say enough.
            </h2>

            <p>
              Thank you for being part of my life. Thank you for every laugh,
              every conversation, every little memory and every moment that
              somehow became important because it was with you.
            </p>

            <p>
              On your birthday, I don't just want to wish you happiness.
              I want you to know that I will always be cheering for you,
              believing in you and wishing the very best for you.
            </p>

            <p>
              I hope this new year of your life gives you everything your
              heart deserves.
            </p>

            <p>
              And if life ever gets difficult, I hope you remember that
              somewhere in this world, there is someone who will always
              look at you and think...
            </p>

            <div className="letter-highlight">
              <Heart size={20} fill="currentColor" />
              <span>
                "That's my favourite person."
              </span>
            </div>

            <div className="letter-sign">
              <span>With all my heart,</span>
              <strong>Mama ❤️</strong>
            </div>

          </div>
        </div>

      </section>

      {/* COUNTDOWN */}
      <section className="countdown-section section">

        <div className="countdown-icon">
          <CalendarHeart size={28} />
        </div>

        <p className="eyebrow">COUNTING DOWN TO YOUR DAY</p>

        <h2>
          Your birthday
          <span> is coming.</span>
        </h2>

        <p className="countdown-date">
          WEDNESDAY · OCTOBER 28 · 2026
        </p>

        <Countdown />

      </section>

      {/* FINAL */}
      <section className="final-section" id="final">

        <div className="final-stars">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <Infinity className="infinity-icon" size={50} />

        <p className="eyebrow">ONE LAST THING</p>

        <h2>
          Some people
          <br />
          become a chapter.
          <br />
          <span>You became my story.</span>
        </h2>

        <p className="final-text">
          Happy Birthday, Bangaru.
          <br />
          Here's to this year, the next one,
          <br />
          and all the beautiful ones after that.
        </p>

        <div className="forever">
          <Heart size={16} fill="currentColor" />
          <span>FOREVER YOURS</span>
          <Heart size={16} fill="currentColor" />
        </div>

        <button
          className="back-top"
          onClick={() => scrollTo("home")}
        >
          <ChevronDown size={18} />
          BACK TO THE BEGINNING
        </button>

      </section>

      {/* FOOTER */}
      <footer>
        <span>MADE WITH LOVE</span>
        <Heart size={12} fill="currentColor" />
        <span>FOR BANGARU</span>
        <span className="footer-year">© 2026</span>
      </footer>

    </div>
  );
}

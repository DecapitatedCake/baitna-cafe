import Image from "next/image";
import Link from "next/link";
import HomeClient from "./components/HomeClient";

const CAFE = {
  hours: "Daily • 4:00 PM – 2:00 AM",
  phoneDisplay: "+971 XX XXX XXXX",
  phoneTel: "+971000000000",
  address: "Sharjah, UAE (Rooftop)",
  mapsUrl: "https://www.google.com/maps",
};

export default function Home() {
  return (
    <>
      <div className="bg">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="grain" />
      </div>

      <header className="nav">
        <div className="navInner">
          <Link className="brand" href="/">
            <Image src="/logo.png" alt="Baitna Cafe Logo" width={44} height={44} className="brandLogo" priority />
            <div className="brandText">
              <span className="brandTitle">Baitna Cafe</span>
              <span className="brandSub">بيتنا كافيه</span>
            </div>
          </Link>

          <nav className="links">
            <a href="#about">About</a>
            <a href="#explore">Explore</a>
            <a href="#visit">Visit</a>
            <Link className="pill" href="/menu">Menu</Link>
            <Link className="pill" href="/merch">Merch</Link>
            <Link className="pill" href="/login">Login</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="badge">
                <span className="dot" />
                Famous rooftop café in Sharjah
              </div>

              <h1 className="h1">
                Your rooftop <span className="accent">coffee escape</span>
                <br />— بيتنا، مثل بيتك
              </h1>

              <p className="subhead">
                Chill, creamy, sunrise vibes. Enjoy specialty coffee, cozy seating, and a calm atmosphere you’ll want to return to.
              </p>

              <div className="ctaRow">
                <Link className="btn primary" href="/menu">View Menu →</Link>
                <a className="btn secondary" href="#visit">Find Us</a>
                <Link className="btn tertiary" href="/merch">Shop Merch</Link>
              </div>
            </div>

            {/* Client Component with onClick */}
            <HomeClient cafe={CAFE} />
          </div>
        </section>

        {/* keep your other sections as-is */}
        <section className="section" id="about">
          <div className="container">
            <div className="sectionHead">
              <h2>About Baitna</h2>
              <p>More than coffee — it’s a rooftop mood.</p>
            </div>

            <div className="grid3">
              <div className="feature">
                <div className="icon">☕</div>
                <h3>Warm, relaxed, local</h3>
                <p>A cozy rooftop space in Sharjah built for comfort, calm conversations, and good coffee.</p>
              </div>
              <div className="feature">
                <div className="icon">🌙</div>
                <h3>Rooftop nights</h3>
                <p>Perfect evening vibe with relaxed seating and a clean, cozy atmosphere.</p>
              </div>
              <div className="feature">
                <div className="icon">🛍️</div>
                <h3>Merch shop</h3>
                <p>Let fans take the brand home — mugs, hoodies, and more, directly from the website.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="explore">
          <div className="container">
            <div className="sectionHead">
              <h2>Explore</h2>
              <p>Designed to feel like sunrise, coffee, and calm.</p>
            </div>

            <div className="grid3">
              <div className="feature">
                <div className="icon">✨</div>
                <h3>Clean modern design</h3>
                <p>Premium look that matches the café’s vibe and feels “expensive” on first glance.</p>
              </div>
              <div className="feature">
                <div className="icon">📱</div>
                <h3>Mobile-first</h3>
                <p>Most customers open it on phones — this layout is built for that.</p>
              </div>
              <div className="feature">
                <div className="icon">⚡</div>
                <h3>Fast</h3>
                <p>Next.js on Vercel is quick, reliable, and scalable for future features.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="visit">
          <div className="container">
            <div className="sectionHead">
              <h2>Visit us</h2>
              <p>One branch — easy to find. Add the exact address + map embed later.</p>
            </div>

            <div className="card">
              <div className="cardBody" style={{ paddingTop: 18 }}>
                <div className="row">
                  <div className="label">Hours</div>
                  <div className="value">{CAFE.hours}</div>
                </div>
                <div className="row">
                  <div className="label">Phone</div>
                  <a className="value" href={`tel:${CAFE.phoneTel}`}>{CAFE.phoneDisplay}</a>
                </div>
                <div className="row">
                  <div className="label">Location</div>
                  <div className="value">{CAFE.address}</div>
                </div>

                <div className="grid2">
                  <a className="btn primary full" href={CAFE.mapsUrl} target="_blank" rel="noreferrer">
                    Open in Maps ↗
                  </a>
                  {/* no onClick here (server component) */}
                  <div className="btn secondary full" style={{ opacity: 0.6 }}>
                    Copy Address (from card above)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Image src="/logo.png" alt="Baitna Cafe Logo" width={40} height={40} className="brandLogo" />
              <div>
                <div style={{ fontWeight: 900 }}>Baitna Cafe</div>
                <div className="small">بيتنا كافيه • Sharjah</div>
              </div>
            </div>
            <div className="small">© {new Date().getFullYear()} Baitna Cafe. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* WOW background (from globals.css) */}
      <div className="baitna-bg">
        <div className="baitna-blob" style={{ left: "-160px", top: "-180px" }} />
        <div className="baitna-blob two" style={{ right: "-180px", top: "40px" }} />
        <div className="baitna-noise" />
      </div>

      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="rounded-xl border border-white/10 bg-white/90 p-2 shadow-sm">
              <Image
                src="/logo.png"
                alt="Baitna Cafe"
                width={34}
                height={34}
                priority
              />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">BAITNA CAFE</p>
              <p className="text-xs text-white/70">بيتنا كافيه</p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Link
              href="/menu"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              Menu
            </Link>
            <Link
              href="/shop"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Merch
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:pb-16 sm:pt-20">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            Rooftop • Sharjah • Calm coffee vibes
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            Baitna Cafe
            <span className="mt-2 block text-white/75">بيتنا كافيه</span>
          </h1>

          {/* Subtle “steam line” accent */}
          <div className="mt-4 h-[2px] w-40 rounded-full bg-gradient-to-r from-white/0 via-white/35 to-white/0" />

          <p className="mt-5 text-base text-white/70 sm:text-lg">
            Minimal. Warm. Rooftop. View the cafe menu, find us instantly, and shop
            Baitna merch for delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
            >
              View Cafe Menu
            </Link>

            <a
              href="https://maps.app.goo.gl/szJgJy3g8GCtatiz6"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
            >
              Open Location
            </a>

            <a
              href="tel:+971565463774"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
            >
              Call 056 546 3774
            </a>
          </div>
        </div>

        {/* Info cards */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <InfoCard title="Hours" value="8AM – 2AM" sub="Fri: 8AM–12PM, 2PM–2AM" />
          <InfoCard title="Cafe Orders" value="View-only menu" sub="No food ordering on the site" />
          <InfoCard title="Merch Delivery" value="Online store" sub="Order merch for delivery" />
        </div>
      </section>

      {/* Feature strip */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <Feature
              title="Premium vibe"
              text="Warm, clean, and calm — designed to feel like the space."
            />
            <Feature
              title="Everything clear"
              text="Hours, location, and menu — fast access, no clutter."
            />
            <Feature
              title="Merch store"
              text="A dedicated shop section with delivery for merch items."
            />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
            >
              Explore Merch
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact & Hours
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Baitna Cafe | بيتنا كافيه</p>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-white" href="/menu">Menu</Link>
            <Link className="hover:text-white" href="/shop">Merch</Link>
            <a
              className="hover:text-white"
              href="https://maps.app.goo.gl/szJgJy3g8GCtatiz6"
              target="_blank"
              rel="noreferrer"
            >
              Location
            </a>
            <a className="hover:text-white" href="tel:+971565463774">
              Call
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function InfoCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <p className="text-xs uppercase tracking-wider text-white/50">{title}</p>
      <p className="mt-1 text-base font-semibold text-white">{value}</p>
      {sub ? <p className="mt-1 text-xs text-white/60">{sub}</p> : null}
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm text-white/70">{text}</p>
    </div>
  );
}

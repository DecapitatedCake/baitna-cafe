import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <div className="baitna-bg">
        <div className="baitna-blob" style={{ left: "-120px", top: "-140px" }} />
        <div className="baitna-blob two" style={{ right: "-140px", top: "40px" }} />
        <div className="baitna-noise" />
      </div>

      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="leading-tight">
            <p className="text-lg font-semibold">Baitna Cafe</p>
            <p className="text-sm text-white/70">بيتنا كافيه</p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/menu"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              View Menu
            </Link>
            <a
              href="https://maps.app.goo.gl/szJgJy3g8GCtatiz6"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Location
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          Rooftop cafe • Sharjah
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Baitna Cafe
          <span className="block text-white/70">بيتــــنا كافيه</span>
        </h1>

        <p className="mt-4 max-w-2xl text-white/70">
          Explore our menu, find our location, and shop Baitna merch — all in one
          place.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <InfoCard title="Hours" value="8AM – 2AM" sub="Fri: 8AM–12PM, 2PM–2AM" />
          <InfoCard title="Phone" value="056 546 3774" sub="Tap to call" href="tel:+971565463774" />
          <InfoCard title="Pickup" value="Cafe orders are view-only" sub="Merch delivery via the store" />
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/menu"
            className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
          >
            View Cafe Menu
          </Link>
          <Link
            href="/shop"
            className="rounded-2xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
          >
            Shop Merch
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Baitna Cafe | بيتنا كافيه</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href="tel:+971565463774">Call</a>
            <a
              className="hover:text-white"
              href="https://maps.app.goo.gl/szJgJy3g8GCtatiz6"
              target="_blank"
              rel="noreferrer"
            >
              Location
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
  href,
}: {
  title: string;
  value: string;
  sub?: string;
  href?: string;
}) {
  const card = (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-wider text-white/50">{title}</p>
      <p className="mt-1 text-base font-semibold text-white">{value}</p>
      {sub ? <p className="mt-1 text-xs text-white/60">{sub}</p> : null}
    </div>
  );

  return href ? (
    <a href={href} className="block rounded-2xl hover:bg-white/10">
      {card}
    </a>
  ) : (
    card
  );
}

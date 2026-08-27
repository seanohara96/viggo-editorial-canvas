import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "../assets/viggo-portrait.jpg.asset.json";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Viggo — Artist & Songwriter" },
      {
        name: "description",
        content:
          "Viggo is a New York-based artist and songwriter writing emotionally driven pop music about love, loss, identity, and everyday life.",
      },
      { property: "og:title", content: "Viggo — Artist & Songwriter" },
      {
        property: "og:description",
        content:
          "Viggo is a New York-based artist and songwriter writing emotionally driven pop music about love, loss, identity, and everyday life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground/10">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
        {/* Hero */}
        <section className="mb-24 md:mb-32">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-8">
            <div className="md:pt-6">
              <h1 className="text-4xl font-normal tracking-tight md:text-5xl">
                viggo
              </h1>
              <p className="mt-3 text-base text-muted-foreground">
                artist / songwriter
              </p>
            </div>
            <figure className="md:mt-16">
              <img
                src={portraitAsset.url}
                alt="Candid editorial portrait of Viggo"
                width={1024}
                height={1280}
                className="w-full object-cover md:w-11/12"
              />

            </figure>
          </div>
        </section>

        {/* About */}
        <section className="mb-24 md:mb-32">
          <h2 className="mb-8 text-sm text-muted-foreground">about</h2>
          <div className="max-w-prose space-y-4 text-base leading-relaxed">
            <p>
              i’m viggo, a new york-based artist and songwriter. i write songs
              because it’s the closest thing i’ve found to making sense of the
              world - or at least of my own place in it. my writing tends to
              circle love, loss, identity, relationships, and the small everyday
              moments that end up meaning more than the big ones.
            </p>
              <p>
                over the past few years i’ve had the chance to work
                internationally with artists across different scenes and
                languages. i love the puzzle of it: finding the right melody, the
                right phrase, the right feeling in a room where no one speaks the
                same first language. i’m drawn to emotionally driven pop, big
                atmosphere, melody that sticks, and lyrics that take you on a
                journey. i write both for myself and for other artists, and i’m
                happiest when i’m not entirely sure whose song it is yet. this
                site is a small window into that process.
              </p>
          </div>
        </section>

        {/* Selected Experience */}
        <section className="mb-24 md:mb-32">
          <h2 className="mb-10 text-sm text-muted-foreground">
            selected experience
          </h2>
          <dl className="space-y-8">
            <div>
              <dt className="text-base font-medium">north macedonia</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                internal selection 2017
              </dd>
              <dd className="text-sm text-muted-foreground">
                internal selection 2018 — 2nd place
              </dd>
            </div>
            <div>
              <dt className="text-base font-medium">czechia</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                internal selection 2025 — 2nd place
              </dd>
            </div>
            <div>
              <dt className="text-base font-medium">luxembourg</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                luxembourg song contest 2026
              </dd>
            </div>
            <div>
              <dt className="text-base font-medium">ukraine</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                english-language consultant for artists and labels
              </dd>
              <dd className="text-sm text-muted-foreground">2020–2022</dd>
            </div>
          </dl>
        </section>

        {/* Upcoming */}
        <section className="mb-24 md:mb-32">
          <h2 className="mb-8 text-sm text-muted-foreground">upcoming</h2>
          <p className="text-lg font-medium md:text-xl">debut ep · 2027</p>
          <p className="mt-3 max-w-prose text-base text-muted-foreground">
            i’m currently working on my debut ep, planned for release in 2027.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-24 md:mb-32">
          <h2 className="mb-8 text-sm text-muted-foreground">say hello</h2>
          <p className="mb-4 max-w-prose text-base text-muted-foreground">
            for songwriting, artist collaborations, and creative inquiries:
          </p>
          <a
            href="mailto:hello@viggomusic.com"
            className="text-base text-foreground underline underline-offset-4 decoration-border transition-colors hover:decoration-foreground"
          >
            hello@viggomusic.com
          </a>
        </section>

        {/* Footer */}
        <footer>
          <p className="text-sm text-muted-foreground">© viggo</p>
        </footer>
      </div>
    </main>
  );
}

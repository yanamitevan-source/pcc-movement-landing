import React from "react";
import {
  ArrowRight,
  Music2,
  Users,
  MapPin,
  Clock,
  HeartHandshake,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";

export default function App() {
  const missions = [
    {
      title: "Music Against Loneliness",
      purpose:
        "Create a small musical encounter for older adults or people experiencing social isolation.",
      value: "Audience sensitivity · care-context musicianship · social responsibility",
    },
    {
      title: "First Instrument",
      purpose:
        "Design a two-hour workshop where children can try, create, sing, improvise, and play together.",
      value: "Teaching practice · leadership · workshop design",
    },
    {
      title: "Songs of Arrival",
      purpose:
        "Co-create sound stories around belonging, home, movement, and identity with local communities.",
      value: "Intercultural collaboration · co-creation · ethical practice",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#171717]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f6f1ea]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111] text-white">
              <Music2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                Prins Claus Conservatorium
              </p>
              <p className="text-xs text-black/60">PCC Movement</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#missions" className="hover:underline">
              Missions
            </a>
            <a href="#commitment" className="hover:underline">
              Time commitment
            </a>
            <a href="#apply" className="hover:underline">
              Apply
            </a>
            <a href="#partners" className="hover:underline">
              Partners
            </a>
          </nav>

          <Button className="rounded-full bg-[#111] px-5 text-white hover:bg-black/80">
            Apply now
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-medium">
              12-week student-led pilot · Groningen
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Use your music where it matters.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/75 md:text-xl">
              PCC Movement is a student-led music-for-social-change programme.
              Students form small cross-programme teams and create musical missions
              with local partners in Groningen.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 rounded-full bg-[#111] px-6 text-base text-white hover:bg-black/80">
                Apply for the pilot <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="h-12 rounded-full border-black/20 bg-transparent px-6 text-base hover:bg-black/5"
              >
                View the missions
              </Button>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#d7c7b7] shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.7),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.13),transparent_30%)]" />

            <div className="absolute inset-x-8 top-8 rounded-3xl bg-[#f6f1ea]/80 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-black/55">
                From attendance to contribution
              </p>
              <p className="mt-3 text-2xl font-semibold leading-tight">
                Not another event. A mission shaped by your musicianship.
              </p>
            </div>

            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/85 p-4">
                <p className="text-3xl font-semibold">3</p>
                <p className="mt-1 text-xs text-black/60">missions</p>
              </div>
              <div className="rounded-2xl bg-white/85 p-4">
                <p className="text-3xl font-semibold">12–18</p>
                <p className="mt-1 text-xs text-black/60">students</p>
              </div>
              <div className="rounded-2xl bg-white/85 p-4">
                <p className="text-3xl font-semibold">1</p>
                <p className="mt-1 text-xs text-black/60">Movement Night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-black/50">
              Why this exists
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              A learning community for music in society.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-black/75">
            <p>
              PCC Movement translates the conservatorium’s social and professional
              vision into a concrete student opportunity. It invites students to
              develop as musicians who can perform, collaborate, teach, listen, and
              create in real social contexts.
            </p>
            <p>
              The programme is designed for students who want their artistic work to
              be visible beyond the classroom, studio, or stage: in care contexts,
              youth arts settings, and community spaces across Groningen.
            </p>
          </div>
        </div>
      </section>

      <section
        id="missions"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-20"
      >
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-black/50">
              The pilot missions
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Choose one mission. Build it with others.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-black/65">
            Each mission is small, supported, and partner-based. Students work in
            teams of four to six and shape the artistic response together.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {missions.map((mission, index) => (
            <Card
              key={mission.title}
              className="rounded-[1.75rem] border-black/10 bg-white shadow-sm"
            >
              <CardContent className="p-7">
                <p className="mb-10 text-sm font-semibold text-black/45">
                  Mission {index + 1}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {mission.title}
                </h3>
                <p className="mt-4 min-h-[96px] text-base leading-7 text-black/70">
                  {mission.purpose}
                </p>
                <div className="mt-8 rounded-2xl bg-[#f6f1ea] p-4 text-sm leading-6 text-black/70">
                  <span className="font-semibold text-black">Student value:</span>{" "}
                  {mission.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="commitment" className="bg-[#171717] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1fr] md:px-8 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Designed around student reality
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Clear commitment. Real contribution.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              The pilot is deliberately limited. It should feel substantial enough
              to matter, but realistic enough to join alongside lessons, practice,
              work, rehearsals, and performances.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              [
                Clock,
                "One preparation session",
                "Meet the team, partner context, and ethical boundaries.",
              ],
              [
                Music2,
                "Two or three creation moments",
                "Develop the musical form together.",
              ],
              [
                Users,
                "One mission delivery moment",
                "Bring the musical encounter into a real setting.",
              ],
              [
                GraduationCap,
                "One reflection and documentation moment",
                "Translate the experience into learning and portfolio evidence.",
              ],
            ].map(([Icon, title, text]) => (
              <div
                key={title}
                className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/65">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-20">
        <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-black/50">
              Who can join
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              For students who want to test music in context.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-[1.5rem] border-black/10 bg-white shadow-sm">
              <CardContent className="p-6">
                <HeartHandshake className="h-7 w-7" />
                <h3 className="mt-5 text-xl font-semibold">
                  You want social relevance
                </h3>
                <p className="mt-3 leading-7 text-black/65">
                  You want to understand how music can create connection, care,
                  learning, and belonging.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[1.5rem] border-black/10 bg-white shadow-sm">
              <CardContent className="p-6">
                <MapPin className="h-7 w-7" />
                <h3 className="mt-5 text-xl font-semibold">
                  You want Groningen experience
                </h3>
                <p className="mt-3 leading-7 text-black/65">
                  You want to work with local partners and understand the city as
                  part of your professional field.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="apply" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1fr_0.9fr] md:px-8 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-black/50">
              Apply for the first pilot
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Tell us what your music could contribute.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
              Applications are open to PCC students from classical music, jazz,
              composition, music production, music education, voice, and master
              routes. Selection will aim for mixed teams across programmes.
            </p>
          </div>

          <Card className="rounded-[2rem] border-black/10 bg-[#f6f1ea] shadow-sm">
            <CardContent className="p-7">
              <h3 className="text-2xl font-semibold">Application focus</h3>
              <ul className="mt-5 space-y-4 text-base leading-7 text-black/70">
                <li>• Which mission are you interested in?</li>
                <li>• What musical skills can you bring?</li>
                <li>• What would you like to learn?</li>
                <li>• Can you commit to the pilot structure?</li>
              </ul>
              <Button className="mt-7 h-12 w-full rounded-full bg-[#111] text-base text-white hover:bg-black/80">
                Start application <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="partners" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-[2rem] bg-[#d7c7b7] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-black/50">
            Partner-based by design
          </p>
          <div className="mt-4 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <h2 className="text-4xl font-semibold tracking-tight">
              PCC enables. Students contribute. Partners guide.
            </h2>
            <p className="text-lg leading-8 text-black/70">
              Missions should be developed with local organisations that understand
              the social context. This keeps the programme feasible, ethical, and
              connected to Groningen’s cultural and social ecosystem.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-lg font-semibold">PCC Movement</p>
            <p className="mt-2 text-sm text-black/60">
              Music that Matters · A pilot for student contribution
            </p>
          </div>
          <p className="text-2xl font-semibold tracking-tight">
            share your talent. move the world
          </p>
        </div>
      </footer>
    </main>
  );
}
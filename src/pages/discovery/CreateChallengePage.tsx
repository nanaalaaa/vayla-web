import { useState } from "react";
import { ArrowLeft, Save, Rocket, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PageId } from "@/types/navigation";

interface Props {
  onNavigate: (id: PageId) => void;
}

const STEPS = [
  "Basic Info",
  "Participation Rules",
  "Reward Settings",
  "Preview & Publish",
];
const GENRES = [
  "K-POP",
  "EDM",
  "Hip-Hop",
  "R&B",
  "Pop",
  "Dance",
  "Soul",
  "Rock",
  "Tropical",
  "Jazz",
];

export default function CreateChallengePage({ onNavigate }: Props) {
  const [step, setStep] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState<string[]>(["K-POP"]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    startDate: "2026-05-15T00:00",
    endDate: "2026-06-15T23:59",
    submitCost: 10,
    maxSubmits: 3,
    voteCost: 1,
    nftBasis: 5,
    maxTracks: 100,
    rank1: 100,
    rank2: 50,
    rank3: 25,
  });

  const toggleGenre = (g: string) =>
    setSelectedGenres((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g],
    );

  const [published, setPublished] = useState(false);

  if (published) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-[480px] border-[#00C9A7]">
          <CardContent className="p-10 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E6FAF5] mx-auto mb-5">
              <CheckCircle2 size={40} className="text-[#00C9A7]" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#1A2332] mb-2">
              Challenge Published!
            </h2>
            <p className="text-gray-400 mb-6">
              The challenge will go LIVE on the scheduled start date.
            </p>
            <div className="rounded-xl bg-gray-50 p-4 text-left mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Challenge</span>
                <span className="font-semibold">
                  {form.name || "Summer Music Challenge"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Status</span>
                <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-500">
                  Upcoming
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">LIVE Start</span>
                <span className="font-semibold text-[#00A88A]">
                  {form.startDate.replace("T", " ")}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Reward Pool</span>
                <span className="font-semibold text-[#00A88A]">
                  {form.rank1 + form.rank2 + form.rank3} VAYLA
                </span>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => onNavigate("discovery-challenge-detail")}
              >
                View Challenge
              </Button>
              <Button onClick={() => onNavigate("discovery")}>
                Back to Discovery
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <button
        onClick={() => onNavigate("discovery")}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Discovery
      </button>

      <div className="flex items-center gap-0 mb-6 px-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold transition-all ${
                  i < step
                    ? "border-[#00C9A7] bg-[#E6FAF5] text-[#00A88A]"
                    : i === step
                      ? "border-[#00C9A7] bg-[#00C9A7] text-white"
                      : "border-gray-200 text-gray-400"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </div>
              <span
                className={`text-sm font-semibold ${i === step ? "text-[#1A2332]" : i < step ? "text-[#00A88A]" : "text-gray-400"}`}
              >
                {s}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 mx-3 h-0.5 ${i < step ? "bg-[#00C9A7]" : "bg-gray-200"}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-5">
          {step === 0 && (
            <Card>
              <CardHeader className="px-6 pt-5 pb-0">
                <CardTitle>Basic Info</CardTitle>
                <p className="text-sm text-gray-400 mt-1">Step 1 / 4</p>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Challenge Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Summer Music Challenge 2026"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    rows={4}
                    placeholder="Describe the challenge..."
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#00C9A7] resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      value={form.startDate}
                      onChange={(e) =>
                        setForm({ ...form, startDate: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#00C9A7]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      End Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      value={form.endDate}
                      onChange={(e) =>
                        setForm({ ...form, endDate: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#00C9A7]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Allowed Genres <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {GENRES.map((g) => (
                      <button
                        key={g}
                        onClick={() => toggleGenre(g)}
                        className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${selectedGenres.includes(g) ? "bg-[#E6FAF5] text-[#00A88A] border border-[#00C9A7]" : "bg-gray-50 text-gray-500 border border-gray-200 hover:border-gray-300"}`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 1 && (
            <Card>
              <CardHeader className="px-6 pt-5 pb-0">
                <CardTitle>Participation Rules</CardTitle>
                <p className="text-sm text-gray-400 mt-1">Step 2 / 4</p>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Submission Cost (VAYLA){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={form.submitCost}
                      onChange={(e) =>
                        setForm({ ...form, submitCost: +e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#00C9A7]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Max Submissions Per User
                    </label>
                    <input
                      type="number"
                      value={form.maxSubmits}
                      onChange={(e) =>
                        setForm({ ...form, maxSubmits: +e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#00C9A7]"
                    />
                  </div>
                </div>
                <div className="rounded-xl bg-gray-50 border-2 border-[#00C9A7] p-5">
                  <p className="text-sm font-bold text-[#1A2332] mb-2">
                    📹 YouTube Embed
                  </p>
                  <p className="text-sm text-gray-500">
                    Participants submit YouTube links that are automatically
                    embedded.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vote Cost
                  </label>
                  <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
                    <div>
                      Default Vote Cost: <strong>1 VAYLA</strong>
                    </div>
                    <div>
                      Network Fee: <strong>0.1 VAYLA</strong>
                    </div>
                    <div className="text-gray-400 mt-1">
                      Total: <strong>1.1 VAYLA / Vote</strong>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader className="px-6 pt-5 pb-0">
                <CardTitle>Reward Settings</CardTitle>
                <p className="text-sm text-gray-400 mt-1">Step 3 / 4</p>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      NFT Reward Basis (min votes){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={form.nftBasis}
                      onChange={(e) =>
                        setForm({ ...form, nftBasis: +e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#00C9A7]"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Tracks reaching this vote count get NFT
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      NFT Type
                    </label>
                    <select className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#00C9A7]">
                      <option>Badge</option>
                      <option>Reward</option>
                      <option>Event</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Top Rank Rewards
                  </label>
                  <table className="w-full rounded-xl border border-gray-200 overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        {["Rank", "VAYLA Reward", "NFT Publish"].map((h) => (
                          <th
                            key={h}
                            className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          label: "🥇 1st",
                          key: "rank1" as const,
                          val: form.rank1,
                        },
                        {
                          label: "🥈 2nd",
                          key: "rank2" as const,
                          val: form.rank2,
                        },
                        {
                          label: "🥉 3rd",
                          key: "rank3" as const,
                          val: form.rank3,
                        },
                      ].map((r) => (
                        <tr
                          key={r.key}
                          className="border-b border-gray-100 last:border-0"
                        >
                          <td className="px-4 py-3 text-sm font-semibold">
                            {r.label}
                          </td>
                          <td className="px-4 py-3">
                            <input
                              type="number"
                              value={r.val}
                              onChange={(e) =>
                                setForm({ ...form, [r.key]: +e.target.value })
                              }
                              className="w-28 rounded-md border border-gray-200 px-2 py-1.5 text-sm outline-none focus:border-[#00C9A7]"
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="h-4 w-4 accent-[#00C9A7]"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-2 rounded-lg bg-blue-50 px-4 py-2 text-sm text-blue-600">
                    Total Reward Pool:{" "}
                    <strong>
                      {form.rank1 + form.rank2 + form.rank3} VAYLA
                    </strong>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader className="px-6 pt-5 pb-0">
                <CardTitle>Preview & Publish</CardTitle>
                <p className="text-sm text-gray-400 mt-1">
                  Step 4 / 4 – Review before publishing
                </p>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="rounded-xl bg-gray-50 p-5 space-y-2">
                  {[
                    {
                      label: "Challenge Name",
                      value: form.name || "(untitled)",
                    },
                    { label: "Genres", value: selectedGenres.join(", ") },
                    {
                      label: "Period",
                      value: `${form.startDate.split("T")[0]} ~ ${form.endDate.split("T")[0]}`,
                    },
                    { label: "Submit Cost", value: `${form.submitCost} VAYLA` },
                    { label: "Vote Cost", value: `${form.voteCost} VAYLA` },
                    { label: "NFT Basis", value: `${form.nftBasis} votes` },
                    {
                      label: "Total Reward Pool",
                      value: `${form.rank1 + form.rank2 + form.rank3} VAYLA`,
                    },
                  ].map((s) => (
                    <div key={s.label} className="flex justify-between text-sm">
                      <span className="text-gray-400">{s.label}</span>
                      <span className="font-semibold text-[#1A2332]">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-600">
                  <strong>⚠ Note:</strong> Vote method, submit method, and NFT
                  reward basis cannot be changed after publishing.
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-4">
          <Card className="border-[#00C9A7]">
            <CardContent className="p-0 overflow-hidden rounded-2xl">
              <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] p-8 text-white text-center">
                <span className="text-5xl">🎸</span>
                <div className="mt-2 inline-block rounded-md bg-black/30 px-3 py-1 text-xs font-semibold">
                  ACTIVE
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-[#1A2332] mb-1">
                  {form.name || "Challenge Name"}
                </h3>
                <p className="text-xs text-gray-400 mb-3">
                  {selectedGenres[0] ?? "Genre"} ·{" "}
                  {form.startDate.split("T")[0]} ~ {form.endDate.split("T")[0]}
                </p>
                <div className="space-y-1.5 text-sm">
                  <p className="text-gray-500">
                    📤 Submit:{" "}
                    <strong className="text-[#1A2332]">
                      {form.submitCost} VAYLA
                    </strong>
                  </p>
                  <p className="text-gray-500">
                    🗳️ Vote:{" "}
                    <strong className="text-[#1A2332]">1.1 VAYLA</strong>
                  </p>
                  <p className="text-gray-500">
                    🥇 1st:{" "}
                    <strong className="text-[#1A2332]">
                      {form.rank1} VAYLA
                    </strong>
                  </p>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
                  <div className="h-full w-0 rounded-full bg-[#00C9A7]" />
                </div>
                <div className="mt-3 rounded-lg bg-[#00C9A7] py-2 text-center text-sm font-bold text-white cursor-pointer">
                  Participate
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <p className="text-sm font-bold text-[#1A2332] mb-3">
                Input Checklist
              </p>
              {[
                { label: "Basic Info", done: step > 0 || !!form.name },
                { label: "Participation Rules", done: step > 1 },
                { label: "Reward Settings", done: step > 2 },
                { label: "Review & Preview", done: step === 3 },
              ].map((c) => (
                <div
                  key={c.label}
                  className={`flex items-center gap-2 py-1.5 text-sm ${c.done ? "text-[#00A88A]" : "text-gray-400"}`}
                >
                  <span>{c.done ? "✓" : "○"}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="sticky bottom-0 -mx-8 bg-white border-t border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          Auto-saved at {new Date().toLocaleTimeString()}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => onNavigate("discovery")}>
            Cancel
          </Button>
          <Button variant="outline">
            <Save size={14} /> Save Draft
          </Button>
          {step < 3 ? (
            <Button onClick={() => setStep((s) => s + 1)}>Next Step →</Button>
          ) : (
            <Button onClick={() => setPublished(true)} className="gap-2">
              <Rocket size={14} /> Publish Challenge
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

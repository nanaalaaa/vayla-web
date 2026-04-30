import { useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const STATUS_FILTERS = ["All", "Active", "Inactive"];

const GENRES = [
  {
    id: "GN-1001",
    name: "Pop",
    desc: "Mainstream pop music Genre",
    challenges: 5,
    tracks: 94,
    order: 1,
    active: true,
    editor: "Kai",
    lastEdit: "2026.04.19\n10:30",
  },
  {
    id: "GN-1002",
    name: "Hip-Hop / Rap",
    desc: "Rap and beat-driven rhythm Genre",
    challenges: 4,
    tracks: 72,
    order: 2,
    active: true,
    editor: "Jay",
    lastEdit: "2026.04.19\n09:40",
  },
  {
    id: "GN-1003",
    name: "R&B / Soul",
    desc: "Soulful vocals and groove-centered Genre",
    challenges: 3,
    tracks: 48,
    order: 3,
    active: true,
    editor: "Tony",
    lastEdit: "2026.04.18\n18:10",
  },
  {
    id: "GN-1004",
    name: "Rock",
    desc: "Guitar-driven band sound Genre",
    challenges: 2,
    tracks: 35,
    order: 4,
    active: true,
    editor: "Kai",
    lastEdit: "2026.04.18\n17:25",
  },
  {
    id: "GN-1005",
    name: "Alternative",
    desc: "Experimental and independent alternative Genre",
    challenges: 2,
    tracks: 22,
    order: 5,
    active: true,
    editor: "Jay",
    lastEdit: "2026.04.18\n15:50",
  },
  {
    id: "GN-1006",
    name: "Electronic",
    desc: "Synth-based Electronic Music Genre",
    challenges: 3,
    tracks: 41,
    order: 6,
    active: true,
    editor: "Tony",
    lastEdit: "2026.04.18\n14:30",
  },
  {
    id: "GN-1007",
    name: "Dance / EDM",
    desc: "Club-oriented dance electronic music Genre",
    challenges: 3,
    tracks: 58,
    order: 7,
    active: true,
    editor: "Jay",
    lastEdit: "2026.04.18\n13:20",
  },
  {
    id: "GN-1008",
    name: "House",
    desc: "4/4 Beat based House Music",
    challenges: 2,
    tracks: 29,
    order: 8,
    active: true,
    editor: "Kai",
    lastEdit: "2026.04.17\n20:10",
  },
  {
    id: "GN-1009",
    name: "Techno",
    desc: "Repetitive rhythm and mechanical sound Genre",
    challenges: 1,
    tracks: 16,
    order: 9,
    active: true,
    editor: "Tony",
    lastEdit: "2026.04.17\n19:20",
  },
  {
    id: "GN-1010",
    name: "Jazz",
    desc: "Improvisation-centered jazz Genre",
    challenges: 1,
    tracks: 12,
    order: 10,
    active: true,
    editor: "Jay",
    lastEdit: "2026.04.17\n16:40",
  },
  {
    id: "GN-1011",
    name: "Classical",
    desc: "Orchestra and classical music Genre",
    challenges: 1,
    tracks: 8,
    order: 11,
    active: true,
    editor: "Kai",
    lastEdit: "2026.04.17\n15:10",
  },
  {
    id: "GN-1012",
    name: "Blues",
    desc: "Blues scale-based vibe Genre",
    challenges: 1,
    tracks: 7,
    order: 12,
    active: true,
    editor: "Tony",
    lastEdit: "2026.04.17\n14:30",
  },
  {
    id: "GN-1013",
    name: "Funk",
    desc: "Groovy bassline-centered Genre",
    challenges: 1,
    tracks: 11,
    order: 13,
    active: true,
    editor: "Jay",
    lastEdit: "2026.04.17\n13:50",
  },
  {
    id: "GN-1014",
    name: "Punk",
    desc: "High-energy aggressive punk Genre",
    challenges: 1,
    tracks: 6,
    order: 14,
    active: true,
    editor: "Tony",
    lastEdit: "2026.04.16\n20:40",
  },
  {
    id: "GN-1015",
    name: "Metal",
    desc: "Heavy and intense metal sound Genre",
    challenges: 1,
    tracks: 5,
    order: 15,
    active: true,
    editor: "Kai",
    lastEdit: "2026.04.16\n19:10",
  },
  {
    id: "GN-1016",
    name: "Latin",
    desc: "Latin Rhythm based Music Genre",
    challenges: 1,
    tracks: 9,
    order: 16,
    active: true,
    editor: "Jay",
    lastEdit: "2026.04.16\n17:30",
  },
  {
    id: "GN-1017",
    name: "Reggae",
    desc: "Offbeat-centered reggae Genre",
    challenges: 1,
    tracks: 6,
    order: 17,
    active: true,
    editor: "Tony",
    lastEdit: "2026.04.16\n16:00",
  },
  {
    id: "GN-1018",
    name: "Country",
    desc: "American country and folk genre",
    challenges: 1,
    tracks: 4,
    order: 18,
    active: true,
    editor: "Kai",
    lastEdit: "2026.04.16\n14:20",
  },
  {
    id: "GN-1019",
    name: "Folk",
    desc: "Acoustic folk and storytelling Genre",
    challenges: 1,
    tracks: 8,
    order: 19,
    active: true,
    editor: "Jay",
    lastEdit: "2026.04.16\n12:30",
  },
  {
    id: "GN-1020",
    name: "Indie",
    desc: "Independent alternative indie Genre",
    challenges: 2,
    tracks: 15,
    order: 20,
    active: true,
    editor: "Tony",
    lastEdit: "2026.04.15\n18:00",
  },
  {
    id: "GN-1021",
    name: "K-POP",
    desc: "Korean pop music and idol genre",
    challenges: 5,
    tracks: 86,
    order: 21,
    active: true,
    editor: "Kai",
    lastEdit: "2026.04.15\n16:40",
  },
  {
    id: "GN-1022",
    name: "Lo-Fi",
    desc: "Mellow low-fidelity chill Genre",
    challenges: 2,
    tracks: 19,
    order: 22,
    active: true,
    editor: "Jay",
    lastEdit: "2026.04.15\n14:50",
  },
  {
    id: "GN-1023",
    name: "Ambient",
    desc: "Atmospheric soundscape Genre",
    challenges: 0,
    tracks: 3,
    order: 23,
    active: false,
    editor: "Tony",
    lastEdit: "2026.04.10\n11:00",
  },
  {
    id: "GN-1024",
    name: "Gospel",
    desc: "Sacred and religious music Genre",
    challenges: 0,
    tracks: 2,
    order: 24,
    active: false,
    editor: "Kai",
    lastEdit: "2026.04.08\n09:30",
  },
];

type GenreRow = (typeof GENRES)[number];

const genreColumns: ColumnDef<GenreRow, unknown>[] = [
  { accessorKey: "id", header: "Genre ID", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332]">{getValue() as string}</span> },
  { accessorKey: "name", header: "Genre Name", cell: ({ getValue }) => <span className="font-bold text-[#1A2332] text-sm">{getValue() as string}</span> },
  { accessorKey: "desc", header: "Description", cell: ({ getValue }) => <span className="text-xs text-gray-500 max-w-[200px] block">{getValue() as string}</span> },
  { accessorKey: "challenges", header: "Challenge", cell: ({ getValue }) => <span className="font-bold text-blue-500 cursor-pointer hover:underline">{getValue() as number}</span> },
  { accessorKey: "tracks", header: "Track", cell: ({ getValue }) => <span className="font-bold text-blue-500 cursor-pointer hover:underline">{getValue() as number}</span> },
  { accessorKey: "order", header: "Order", cell: ({ getValue }) => <span className="inline-flex items-center justify-center w-7 h-7 bg-[#1A2332] text-white rounded-[6px] text-sm font-extrabold">{getValue() as number}</span> },
  { accessorKey: "active", header: "Status", cell: ({ getValue }) => <StatusBadge variant={(getValue() as boolean) ? "active" : "inactive"} label={(getValue() as boolean) ? "Active" : "Inactive"} /> },
  { accessorKey: "editor", header: "Editor", cell: ({ getValue }) => <span className="text-xs">{getValue() as string}</span> },
  { accessorKey: "lastEdit", header: "Final Edit", cell: ({ getValue }) => <span className="text-xs whitespace-pre-line">{getValue() as string}</span> },
  {
    id: "action",
    header: "Action",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-1 flex-nowrap">
        <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">Edit</button>
        {row.original.active
          ? <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-500 hover:bg-gray-50">Inactive화</button>
          : <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600">Active화</button>
        }
        <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">Details</button>
      </div>
    ),
  },
];

export default function GenreManagementPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mb-6">
        <KpiCard
          color="mint"
          label="All Genre"
          value="24"
          sub="Registered Genre수"
        />
        <KpiCard
          color="green"
          label="Active Genre"
          value="21"
          sub="Current In Use"
          valueColor="text-emerald-500"
        />
        <KpiCard
          color="gray"
          label="Inactive Genre"
          value="3"
          sub="Inactive Status"
          valueColor="text-gray-400"
        />
        <KpiCard
          color="blue"
          label="Connect Challenge"
          value="12"
          sub="Genre Used Challenges"
        />
        <KpiCard
          color="purple"
          label="Connect Track"
          value="482"
          sub="Genre type track"
          valueColor="text-purple-500"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
            🏷️ Genre List
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-[7px] rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50">
              📥 Export
            </button>
            <button className="px-3 py-[7px] rounded-lg bg-[#00C9A7] text-white text-sm font-semibold hover:bg-[#00A88A]">
              + 새 Add Genre
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2.5 px-6 py-4 border-b border-gray-100 flex-wrap">
          <div className="flex gap-1">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-[6px] rounded-full border text-xs font-semibold cursor-pointer transition-all ${
                  activeFilter === f
                    ? "bg-[#1A2332] text-white border-[#1A2332]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#00C9A7] hover:text-[#00C9A7]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>Sort: Display Order순</option>
            <option>Sort: Name순</option>
            <option>Sort: By Usage</option>
            <option>Sort: Recent Edit순</option>
          </select>
          <input
            type="text"
            placeholder="Genre Name / Description / ID Search..."
            className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none w-64 focus:border-[#00C9A7]"
          />
        </div>

        <DataTable
          columns={genreColumns}
          data={GENRES}
          rowClassName={(row) => !row.original.active ? "opacity-55 hover:opacity-75" : ""}
        />
      </div>
    </div>
  );
}

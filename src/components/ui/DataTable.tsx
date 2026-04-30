import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type Row,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface DataTableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  pageSize?: number;
  minWidth?: number;
  rowClassName?: (row: Row<TData>) => string;
  totalLabel?: string;
}

const TH_CLS =
  "px-3.5 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-100 bg-gray-50 whitespace-nowrap select-none";

const TD_CLS = "px-3.5 py-3.5 text-[13px] border-b border-gray-50";

function SortIcon({ dir }: { dir: "asc" | "desc" | false }) {
  if (!dir) return <span className="ml-1 text-gray-300 text-[10px]">⇅</span>;
  return (
    <span className="ml-1 text-[#00C9A7] text-[10px]">
      {dir === "asc" ? "↑" : "↓"}
    </span>
  );
}

function Pagination({
  pageIndex,
  pageCount,
  canPrev,
  canNext,
  onPage,
  totalLabel,
  pageSize,
  totalRows,
}: {
  pageIndex: number;
  pageCount: number;
  canPrev: boolean;
  canNext: boolean;
  onPage: (i: number) => void;
  totalLabel?: string;
  pageSize: number;
  totalRows: number;
}) {
  const start = pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, totalRows);

  const pages: (number | "…")[] = [];
  if (pageCount <= 7) {
    for (let i = 0; i < pageCount; i++) pages.push(i);
  } else {
    pages.push(0);
    if (pageIndex > 2) pages.push("…");
    for (
      let i = Math.max(1, pageIndex - 1);
      i <= Math.min(pageCount - 2, pageIndex + 1);
      i++
    ) {
      pages.push(i);
    }
    if (pageIndex < pageCount - 3) pages.push("…");
    pages.push(pageCount - 1);
  }

  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
      <span className="text-[13px] text-gray-400">
        {totalLabel ?? `${start} - ${end} / ${totalRows} items`}
      </span>
      <div className="flex gap-1">
        <button
          disabled={!canPrev}
          onClick={() => onPage(pageIndex - 1)}
          className={cn(
            "w-[34px] h-[34px] rounded-lg border text-[13px] font-medium flex items-center justify-center transition-all",
            canPrev
              ? "border-gray-200 text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]"
              : "border-gray-100 text-gray-300 cursor-not-allowed",
          )}
        >
          ‹
        </button>
        {pages.map((p, i) =>
          p === "…" ? (
            <span
              key={`ellipsis-${i}`}
              className="w-[34px] h-[34px] flex items-center justify-center text-gray-400 text-[13px]"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPage(p as number)}
              className={cn(
                "w-[34px] h-[34px] rounded-lg border text-[13px] font-medium flex items-center justify-center transition-all",
                p === pageIndex
                  ? "bg-[#00C9A7] border-[#00C9A7] text-white"
                  : "border-gray-200 text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]",
              )}
            >
              {(p as number) + 1}
            </button>
          ),
        )}
        <button
          disabled={!canNext}
          onClick={() => onPage(pageIndex + 1)}
          className={cn(
            "w-[34px] h-[34px] rounded-lg border text-[13px] font-medium flex items-center justify-center transition-all",
            canNext
              ? "border-gray-200 text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]"
              : "border-gray-100 text-gray-300 cursor-not-allowed",
          )}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export function DataTable<TData>({
  columns,
  data,
  pageSize,
  minWidth,
  rowClassName,
  totalLabel,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: pageSize ? getPaginationRowModel() : undefined,
    initialState: pageSize ? { pagination: { pageSize } } : undefined,
  });

  const { pageIndex } = table.getState().pagination;
  const pageCount = table.getPageCount();
  const showPagination = !!pageSize && pageCount > 1;

  return (
    <>
      <div className="overflow-x-auto">
        <table
          className="w-full border-collapse"
          style={minWidth ? { minWidth } : undefined}
        >
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  return (
                    <th
                      key={header.id}
                      className={cn(
                        TH_CLS,
                        canSort && "cursor-pointer hover:text-gray-600",
                      )}
                      onClick={
                        canSort
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {canSort && (
                        <SortIcon dir={header.column.getIsSorted()} />
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  "hover:bg-gray-50 last:border-0",
                  rowClassName?.(row),
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={TD_CLS}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPagination && (
        <Pagination
          pageIndex={pageIndex}
          pageCount={pageCount}
          canPrev={table.getCanPreviousPage()}
          canNext={table.getCanNextPage()}
          onPage={(i) => table.setPageIndex(i)}
          totalLabel={totalLabel}
          pageSize={pageSize!}
          totalRows={data.length}
        />
      )}
    </>
  );
}

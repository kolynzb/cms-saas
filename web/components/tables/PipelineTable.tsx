"use client";
import Card from "@components/card";
import CardMenu from "@components/card/CardMenu";
import { ILead } from "@interfaces/kanban.interface";
import React, { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  ColumnDef,
} from "@tanstack/react-table";
// import { DateTime } from "luxon";

type Props = {
  pipelineData: ILead[];
};

const PipelineTable: React.FC<Props> = ({ pipelineData }) => {
  const data = useMemo(() => pipelineData as any, []);

  // const columns = useMemo<ColumnDef<ILead, any>[]>(
  const columns = useMemo<ColumnDef<any, any>[]>(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "Name",
        accessorKey: "name",
        // accessorFn: (row:any) => `${row.firstName} ${row.lastName}`,
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Phone",
        accessorKey: "phone",
      },
      {
        header: "Priority",
        accessorKey: "priority",
      },
      {
        header: "Status",
        accessorKey: "status",
      },
      {
        header: "Company",
        accessorKey: "company",
      },
      {
        header: "Created",
        accessorKey: "created",
        // cell: (info: any) =>
        //   DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
      },
      {
        header: "Last Contacted",
        accessorKey: "lastContacted",
      },
      {
        header: "Expected Close",
        accessorKey: "expectedClose",
      },
      {
        header: "Estimated Value",
        accessorKey: "estimatedValue",
      },
    ],
    []
  );

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto mt-4"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="flex mt-4  h-[45px] w-[355px]  items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400" />
          </p>
          <input
            type="text"
            value={filtering}
            placeholder="Search all Columns..."
            onChange={(e) => setFiltering(e.target.value)}
            className="block h-full w-full  rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-gray-100 sm:w-fit border-none "
          />
        </div>

        <CardMenu />
      </div>

      <div className="mt-8 overflow-x-scroll ">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700 ${
                      header.column.getCanSort() && "cursor-pointer select-none"
                    } `}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      {header.isPlaceholder ? null : (
                        <div className="flex">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: "▵",
                            desc: "▿",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="pt-[14px] pb-[18px] sm:text-[14px] border border-gray-900 px-2"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="relative flex items-center justify-between pt-4">
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-3.5 h-3.5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing Page
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            {table.getState().pagination.pageIndex + 1}{" "}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {table.getPageCount()}
          </span>{" "}
          with{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {table.getRowModel().rows.length}
          </span>{" "}
          Entries
        </span>

        <span className="flex items-center gap-1">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>{" "}
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
      </div>
    </Card>
  );
};

export default PipelineTable;

/* eslint-disable react/jsx-key */
"use client";
import Card from "@components/card";
import CardMenu from "@components/card/CardMenu";
import { ILead } from "@interfaces/kanban.interface";
import React, { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
  SortingState,
} from "@tanstack/react-table";
import { FiSearch } from "react-icons/fi";

type Props = {
  pipelineData: ILead[];
};

const PipelineTable: React.FC<Props> = ({ pipelineData }) => {
  const data = useMemo(() => pipelineData as any, []);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const columns = useMemo<ColumnDef<any,any>[]>(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "Name",
        accessorKey: "name",
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

  const table = useReactTable({
    data,
    columns,
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
        <div className="flex h-12 items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder="Search To Columns..."
            className="block h-full w-full  rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit border-none "
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
                    onClick={header.column.getToggleSortingHandler()}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700 cursor-pointer"
                  >
                    {header.isPlaceholder ? null : (
                      <div className="text-xs tracking-wide text-gray-600">
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
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="pt-[14px] pb-[18px] sm:text-[14px] border pl-[10px]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="relative flex items-center justify-between pt-4">
          <div className="inline-flex  mt-2 xs:mt-0">
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
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
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
            Showing Page{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {table.getState().pagination.pageIndex + 1}{" "}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {table.getPageCount()}
            </span>{" "}
            with{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {table.getPrePaginationRowModel().rows.length}{" "}
            </span>{" "}
            Entries
          </span>

        <span className="flex items-center gap-1">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <span className="flex items-center gap-1">
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
        </span>
      </div>
    </Card>
  );
};

export default PipelineTable;

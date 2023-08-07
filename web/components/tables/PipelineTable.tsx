"use client";
import Card from "@components/card";
import CardMenu from "@components/card/CardMenu";
import { ILead } from "@interfaces/kanban.interface";
import React, { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SlidersHorizontal } from 'lucide-react';


import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnResizeMode,
  useReactTable,
  SortingState,
  ColumnDef,
  RowData,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/AIChat/dropdown-menu";
// import { DateTime } from "luxon";

type Props = {
  pipelineData: ILead[];
};

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

// Give our default column cell renderer editing superpowers!
const defaultColumn: Partial<ColumnDef<any>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue();
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue);

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {
      table.options.meta?.updateData(index, id, value);
    };

    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <input
        className="bg-transparent outline-primary/25 border-none "
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    );
  },
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
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>("onChange");

  const table = useReactTable({
    columns,
    data,
    defaultColumn,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
      columnVisibility,
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,

    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // // Skip page index reset until after next rerender
        // skipAutoResetPageIndex()
        // setData(old =>
        //   old.map((row, index) => {
        //     if (index === rowIndex) {
        //       return {
        //         ...old[rowIndex]!,
        //         [columnId]: value,
        //       }
        //     }
        //     return row
        //   })
        // )
      },
    },
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
        {/* toogle start */}
        {/* <CardMenu /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="hover:bg-gray-50/5 px-2 py-2 rounded-md cursor-pointer transition-all duration-30 ease-in-out ">
            <span className="flex items-center justify-center space-x-2">
          <SlidersHorizontal className="opacity-60" />  <p>Filter Columns</p>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={8}
            align="start"
            className="w-[180px] backdrop-blur-lg "
          >
            <DropdownMenuItem>
              <label>
                <input
                  {...{
                    type: "checkbox",
                    checked: table.getIsAllColumnsVisible(),
                    onChange: table.getToggleAllColumnsVisibilityHandler(),
                  }}
                />
                Show All
              </label>
            </DropdownMenuItem>

            {table.getAllLeafColumns().map((column) => {
              return (
                <DropdownMenuItem key={column.id} className="px-1">
                  <label>
                    <input
                      {...{
                        type: "checkbox",
                        checked: column.getIsVisible(),
                        onChange: column.getToggleVisibilityHandler(),
                      }}
                    />{" "}
                    {column.id}
                  </label>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* toogle end */}
      </div>

      <div className="mt-8 overflow-x-scroll ">
        <table
          {...{
            style: {
              width: table.getCenterTotalSize(),
            },
          }}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="w-fit " key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    {...{
                      key: header.id,
                      colSpan: header.colSpan,
                      style: {
                        width: header.getSize(),
                      },
                    }}
                    className="group relative border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-600"
                  >
                    <p
                      onClick={header.column.getToggleSortingHandler()}
                      className={`text-sm  tracking-wide text-gray-600 ${
                        header.column.getCanSort() &&
                        "cursor-pointer select-none"
                      } `}
                    >
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
                      <div
                        {...{
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `cursor-col-resize touch-none select-none bg-primary/60 w-[6px] h-full origin-right absolute right-0 top-0 opacity-0 transition-all duration-30 ease-in-out  group-hover:opacity-100 ${
                            header.column.getIsResizing()
                              ? "bg-brandLinear opacity-100"
                              : ""
                          }`,
                          style: {
                            transform:
                              columnResizeMode === "onEnd" &&
                              header.column.getIsResizing()
                                ? `translateX(${
                                    table.getState().columnSizingInfo
                                      .deltaOffset
                                  }px)`
                                : "",
                          },
                        }}
                      />
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
                      {...{
                        key: cell.id,
                        style: {
                          width: cell.column.getSize(),
                        },
                      }}
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
        <div className="inline-flex  mt-2 xs:mt-0">
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white  bg-gray-800/20 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:cursor-default "
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
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800/20 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:cursor-default"
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
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            {table.getPrePaginationRowModel().rows.length}{" "}
          </span>{" "}
          entries on Page{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {table.getState().pagination.pageIndex + 1}{" "}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {table.getPageCount()}
          </span>
        </span>

        <span className="flex items-center gap-1">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

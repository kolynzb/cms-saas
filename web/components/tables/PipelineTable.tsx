/* eslint-disable react/jsx-key */
"use client";
import Card from "@components/card";
import CardMenu from "@components/card/CardMenu";
import { ILead } from "@interfaces/kanban.interface";
import React, { useMemo } from "react";
import { useTable } from "react-table";

type Props = {
  pipelineData: ILead[];
};

const PipelineTable: React.FC<Props> = ({ pipelineData }) => {
  const data = useMemo(() => pipelineData as any, []);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Priority",
        accessor: "priority",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Created",
        accessor: "created",
      },
      {
        Header: "Last Contacted",
        accessor: "lastContacted",
      },
      {
        Header: "Expected Close",
        accessor: "expectedClose",
      },
      {
        Header: "Estimated Value",
        accessor: "estimatedValue",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {/* Complex Table */}
        </div>
        <CardMenu />
      </div>
      <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, headerIndex) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, colIndex) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default PipelineTable;

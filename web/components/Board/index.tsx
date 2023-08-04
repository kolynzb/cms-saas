"use client";
import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./Column";

type Props = {
  title: string;
  columnData: any;
  leadData: any;
};

const Board: React.FC<Props> = ({ title, leadData, columnData }) => {
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination || source?.droppableId === destination.droppableId) return;
    // code to move the card logically (change the status)
  };
  return (
    <div className="flex flex-col w-full h-full overflow-auto dark:text-gray-700">
      {/* <div className="px-10 mt-6">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div> */}
      <div className="flex flex-grow lg:px-10 mt-4 space-x-6 overflow-auto">
        <DragDropContext onDragEnd={handleDragEnd}>
          {columnData.map((column: any) => (
            <Column
              colIndex={column.id.toString()}
              leads={leadData?.filter(
                (lead: any) => lead.status == column.name
              )}
              title={column.name}
              key={column.id}
            />
          ))}
        </DragDropContext>
        <div className="flex-shrink-0 w-6"></div>
      </div>
    </div>
  );
};

export default Board;

// https://www.creative-tim.com/learning-lab/tailwind/html/kanban/soft-ui-dashboard/
// https://notion-templates.notion.site/75fd09a5821f4faaa8f49f862d3892d9?v=259d0533e6074561b84f29768bd414bc

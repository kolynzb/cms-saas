import { IPipelineCard } from "@interfaces/kanban.interface";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardCard from "./Card";

type Props = {
  colIndex: string;
  leads: IPipelineCard[];
  title: string;
};

const Column: React.FC<Props> = (props) => {
  return (
    <div>
      <Droppable droppableId={props.colIndex.toString()}>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div
              className={`flex flex-col flex-shrink-0 w-72  rounded-lg  ${
                snapshot.isDraggingOver && "bg-gray-300 bg-opacity-20 "
              }`}
            >
              <div className="flex items-center flex-shrink-0 h-10 px-2">
                <span className="block text-sm font-semibold dark:text-gray-300">
                  {props.title}
                </span>
                <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 dark:text-gray-200 bg-white rounded bg-opacity-30">
                  6
                </span>
                <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`flex flex-col pb-2 overflow-y-auto overflow-x-hidden  rounded-md h-auto`}
                style={{ maxHeight: "calc(100vh - 100px)" }} // 290px
              >
                {/* Cards Go Here */}
                {props.leads?.map((lead, cardIndex: React.Key) => (
                  <BoardCard lead={lead} key={lead.id} cardIndex={cardIndex} />
                ))}
                {/* Cards Go Here */}
                {provided.placeholder}
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;

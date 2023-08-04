import React from "react";
import LeadData from "@data/pipeline/leads.json";
import StatusData from "@data/pipeline/status.json";
import Board from "@components/Board";

type Props = {};
const Page = (props: Props) => {
  return (
    <>
      <div className="lg:px-10 mt-6">
        <h1 className="text-2xl font-bold dark:text-gray-700">
          Your Leads Pipeline
        </h1>
      </div>
      {/* Add Tabs */}
      <Board
        title={"Your Leads Board"}
        columnData={StatusData}
        leadData={LeadData}
      />
    </>
  );
};

export default Page;

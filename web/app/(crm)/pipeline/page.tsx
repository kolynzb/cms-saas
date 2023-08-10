"use client";
import React from "react";
import LeadData from "@data/pipeline/leads.json";
import StatusData from "@data/pipeline/status.json";
import Board from "@components/Board";
import * as Tabs from "@radix-ui/react-tabs";
import PipelineTable from "@components/tables/PipelineTable";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";
import { MdOutlineTableChart, MdCalendarViewWeek } from "react-icons/md";

type Props = {};
const Page = (props: Props) => {
  return (
    <>
      <div className="lg:px-10 mt-6 mb-4">
        <h1 className="text-2xl font-bold dark:text-gray-700">
          Your Leads Pipeline
        </h1>
      </div>
      <Tabs.Root
        className="flex flex-col w-full rounded-md"
        defaultValue="tab1"
      >
        <Tabs.List
          className="shrink-0 flex border-b border-mauve6"
          aria-label="Manage your account"
        >
          <Tabs.Trigger
            className="bg-white cursor-pointer dark:bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-primary data-[state=active]:text-primary data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none "
            value="tab1"
          >
            <CustomTab name="By Status" Icon={MdCalendarViewWeek} />
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-white cursor-pointer  dark:bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-primary data-[state=active]:text-primary data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none "
            value="tab2"
          >
           <CustomTab name="All Records" Icon={MdOutlineTableChart} />
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-white cursor-pointer  dark:bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-primary data-[state=active]:text-primary data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none "
            value="tab3"
          >
          <CustomTab name="High Priority" Icon={MdOutlineTableChart} />
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="grow p-5 bg-white dark:bg-transparent rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab1"
        >
          <Board
            title={"Your Leads Board"}
            columnData={StatusData}
            leadData={LeadData}
          />
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5 bg-white dark:bg-transparent rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab2"
        >
          <PipelineTable pipelineData={LeadData} />
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5 bg-white dark:bg-transparent rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab3"
        >
          <PipelineTable pipelineData={LeadData} />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

export default Page;

type CustomTabProps = {
  name: string;
  Icon: React.FC<any>;
};

const CustomTab: React.FC<CustomTabProps> = ({ name, Icon }) => (
  <div className="inline-flex items-center justify-center mr-2  px-4 py-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
    <Icon className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" />{" "}
    {name}
  </div>
);



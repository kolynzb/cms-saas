import React from "react";
import LeadData from "@data/pipeline/leads.json";
import StatusData from "@data/pipeline/status.json";
import Board from "@components/Board";
import PipelineTable from "@components/tables/PipelineTable";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";
import { MdOutlineTableChart, MdCalendarViewWeek } from "react-icons/md";
type Props = {};
const Page = (props: Props) => {
  return (
    <>
      <div className="lg:px-10 mt-6">
        <h1 className="text-2xl font-bold dark:text-gray-700">
          Your Leads Pipeline
        </h1>
      </div>

      <Tabs isManual variant="enclosed" className="lg:px-10 mt-4">
        <TabList className="text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <CustomTab name="By Status" Icon={MdCalendarViewWeek} />
          <CustomTab name="All Records" Icon={MdOutlineTableChart} />
          <CustomTab name="High Priority" Icon={MdOutlineTableChart} />
        </TabList>

        <TabPanels>
          <TabPanel>
            <Board
              title={"Your Leads Board"}
              columnData={StatusData}
              leadData={LeadData}
            />
          </TabPanel>
          <TabPanel>
            <PipelineTable pipelineData={LeadData}/>
          </TabPanel>
          <TabPanel>
            <PipelineTable pipelineData={LeadData}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Page;

type CustomTabProps = {
  name: string;
  Icon: React.FC<any>;
};

const CustomTab: React.FC<CustomTabProps> = ({ name, Icon }) => (
  <Tab
    _activeLink={{ backgroundColor: "gray" }}
    className="inline-flex items-center justify-center mr-2  px-4 py-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
  >
    <Icon className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" />{" "}
    {name}
  </Tab>
);

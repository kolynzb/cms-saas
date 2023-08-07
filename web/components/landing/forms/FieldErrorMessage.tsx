import React from "react";
import { HiInformationCircle } from "react-icons/hi";

type Props = {
  shortMessage: string;
  message: any;
};

const FieldErrorMessage = (props: Props) => {
  return (
<div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 <HiInformationCircle />
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
  </div>
</div>
  );
};


export default FieldErrorMessage;

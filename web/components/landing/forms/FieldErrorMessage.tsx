import { Alert } from "flowbite-react";
import React from "react";
import { HiInformationCircle } from "react-icons/hi";

type Props = {
  shortMessage: string;
  message: any;
};

const FieldErrorMessage = (props: Props) => {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span>
        <p>
          <span className="font-medium">{props.shortMessage}!</span>
          {props.message}
        </p>
      </span>
    </Alert>
  );
};

export default FieldErrorMessage;

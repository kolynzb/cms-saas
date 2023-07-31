import MiniLoadingSpinner from "@components/icons/MiniLoadingSpinner";
import React from "react";

type Props = {
    isLoading: boolean;
  btnText: string;
};

const SubmitBtn: React.FC<Props> = ({ isLoading, btnText }) => {
  return (
    <button
      type="submit"
      className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
    >
      {isLoading ? <MiniLoadingSpinner /> : btnText}
    </button>
  );
};

export default SubmitBtn;

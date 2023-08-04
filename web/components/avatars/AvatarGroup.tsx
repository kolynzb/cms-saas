import Image from "next/image";
import React from "react";

type Props = {
  avatars: string[];
  max?: number;
  size?: "md" | "lg" | "sm";
};

const AvatarGroup: React.FC<Props> = ({ avatars, max, size }) => {
  return (
    <div
      className={`flex items-center ${
        size === "lg"
          ? "-space-x-4"
          : size === "md"
          ? "-space-x-2"
          : "-space-x-1"
      }`}
    >
      {avatars.slice(0, max).map((avatar, key) => (
        <Image
          src={avatar}
          alt={avatar}
          key={key}
          width={40}
          height={40}
          className={` border-2 border-none rounded-full ${
            size === "lg" ? "w-10 h-10" : size === "md" ? "w-5 h-5" : "w-4 h-4"
          }`}
        />
      ))}

      {avatars.length > (max as number) && (
        <p
          className={`flex items-center justify-center w-10 h-10 text-xs font-medium text-white glass-morph border-2 border-none rounded-full hover:bg-gray-600 ${
            size === "lg" ? "w-10 h-10" : size === "md" ? "w-5 h-5" : "w-4 h-4"
          }`}
        >
          +{avatars.length - (max as number)}
        </p>
      )}
    </div>
  );
};

AvatarGroup.defaultProps = {
  max: 3,
  size: "lg",
};
export default AvatarGroup;

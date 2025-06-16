import { getIconByName } from "@/utils/iconLibrary";
import React from "react";

type IconRendererProps = {
  iconName: string;
  className?: string;
};

const BackendIcon: React.FC<IconRendererProps> = ({ iconName, className }) => {
  const IconComponent = getIconByName(iconName);

  return IconComponent ? (
    <IconComponent className={className ?? "w-7 h-7 text-white"} />
  ) : (
    <div className={className ?? "w-5 h-5 bg-gray-300 rounded"} />
  );
};

export default BackendIcon;

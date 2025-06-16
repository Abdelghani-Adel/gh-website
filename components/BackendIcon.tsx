import React from "react";
import * as LucideIcons from "lucide-react";

// Export all lucide icons for easy access
export const iconLibrary = LucideIcons;

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

const getIconByName = (
  iconName: string
): React.ComponentType<{ className?: string }> | null => {
  const IconComponent = LucideIcons[
    iconName as keyof typeof LucideIcons
  ] as React.ComponentType<{
    className?: string;
  }>;

  return IconComponent || null;
};

export default BackendIcon;

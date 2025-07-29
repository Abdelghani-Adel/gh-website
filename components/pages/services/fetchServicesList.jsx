import { getSectionData } from "@/utils/ApiService";

export const fetchServicesList = async () => {
  const data = await getSectionData(15);
  if (!data || !data.services) return [];

  return data.services.map((service) => ({
    href: `/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`,
    label: service.title,
  }));
};

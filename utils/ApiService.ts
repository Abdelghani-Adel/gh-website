import { getLangCookie } from "@/lib/utils";

export interface ISection {}

let URL = "https://amarinaproperties.com/lts-backend/api";

export async function getPageData(pageId: number, lang: string) {
  const response = await fetch(`${URL}/pages/${pageId}/sections?lang=${lang}`, {
    cache: "no-store",
  });
  const result = await response.json();

  if (result.data) {
    const transformedSections = transformSectionsToObject(result.data);
    return transformedSections;
  }
  return null;
}

export async function getSectionData(sectionId: number) {
  const langCookie = getLangCookie();

  const response = await fetch(
    `${URL}/aggregated/section?id=${sectionId}&lang=${langCookie ?? "en"}`,
    { cache: "no-store" }
  );
  const result = await response.json();

  if (result.data) {
    return result?.data?.content;
  }
  return null;
}

type Section = {
  section_id: number;
  section_name: string;
  content: any;
};

type SectionsArray = Section[];

function transformSectionsToObject(
  sections: SectionsArray
): Record<string, any> {
  return sections.reduce((acc, section) => {
    acc[section.section_name.toLowerCase()] = section.content;
    return acc;
  }, {} as Record<string, any>);
}

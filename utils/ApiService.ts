export interface ISection {}

export async function getPageData(pageId: number, lang: string) {
  const response = await fetch(
    `http://192.168.30.67:3000/api/pages/${pageId}/sections?lang=${lang}`
  );
  const result = await response.json();

  if (result.data) {
    const transformedSections = transformSectionsToObject(result.data);
    return transformedSections;
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

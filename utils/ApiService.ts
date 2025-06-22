import { getLangCookie } from "@/lib/utils";
import { API_URL } from "./constants";

export async function getSectionData(sectionId: number) {
  const langCookie = getLangCookie();

  const response = await fetch(
    `${API_URL}/api/aggregated/section?id=${sectionId}&lang=${
      langCookie ?? "en"
    }`,
    { cache: "no-store" }
  );
  const result = await response.json();

  if (result.data) {
    return result?.data?.content;
  }
  return null;
}

export async function sendCustomerMessage(requestBody: any) {
  const langCookie = getLangCookie();
  const URL = API_URL + "/api/email/send-user-data";

  const response = await fetch(URL, {
    method: "POST",
    body: requestBody,
    headers: {
      lang: langCookie ?? "en",
    },
  });

  return response;
}

export async function applyForPosition(requestBody: any) {
  const langCookie = getLangCookie();
  const URL = API_URL + "/api/email/send-cv";

  const response = await fetch(URL, {
    method: "POST",
    body: requestBody,
    headers: {
      lang: langCookie ?? "en",
    },
  });

  return response;
}

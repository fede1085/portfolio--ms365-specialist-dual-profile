import { resumeData as officeContent } from "./office.constants";
import { resumeData as adminContent } from "./admin.constants";

export function getProfileContent() {
  const host = window.location.hostname;
  const params = new URLSearchParams(window.location.search);
  const profile = params.get("profile");

  if (profile === "admin") {
    return adminContent;
  }

  if (profile === "office") {
    return officeContent;
  }

  if (host.includes("admin.")) {
    return adminContent;
  }

  if (host.includes("office.")) {
    return officeContent;
  }

  return officeContent;
}
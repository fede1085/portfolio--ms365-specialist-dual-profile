import { resumeData as curriculumContent } from "./curriculum.constants";
import { resumeData as portfolioContent } from "./portfolio.constants";

export function getProfileContent() {
  const host = window.location.hostname;
  const params = new URLSearchParams(window.location.search);
  const profile = params.get("profile");

  if (profile === "portfolio") {
    return portfolioContent;
  }

  if (profile === "curriculum") {
    return curriculumContent;
  }

  if (host.includes("portfolio.")) {
    return portfolioContent;
  }

  return curriculumContent;
}
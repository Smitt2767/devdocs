import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "smitt2767",
  repo: "devdocs",
  branch: "main",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "DEVDOCS",
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

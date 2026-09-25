
export interface Project {
  id: string;
  title: string;
  modalTitle: string;
  description?: string;
  details: string;
  imgs: string[];
  href: string;
  repo: string;
  builtWith: { [key: string]: string };
}
export interface ProjectsContextType {
  filterdProjects: Project[];
  allProjects?: number;
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void;
}


export interface IWorkspace {
  id: string;
  name: string;
  description: string;
  workspaceType: "company" | "personal";
  createdAt: string;
  updatedAt: string;
}

export interface IPipelineCard {
  id: string;
  priority: string;
}

export interface Assignee {
  avatar: string;
}

export interface ILead {
  id: string;
  name: string;
  email: string;
  phone: string;
  priority: string;
  status: string;
  company: string;
  created: string;
  lastContacted: string;
  expectedClose: string;
  estimatedValue: string;
  assignees: Assignee[];
}

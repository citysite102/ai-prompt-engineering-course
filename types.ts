
export interface PromptExample {
  title: string;
  context?: string;
  content: string;
  type: 'bad' | 'good' | 'demo' | 'structure';
}

export interface FlowItem {
  title: string;
  content: string;
}

export interface OutputTask {
  description: string;
  example: string;
}

export interface Unit {
  id: string;
  title: string;
  objectives: string[];
  flow: FlowItem[];
  prompts: PromptExample[];
  outputTask?: OutputTask;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  units: Unit[];
}

export interface CourseData {
  title: string;
  subtitle: string;
  targetAudience: string;
  chapters: Chapter[];
}

export type Exercise = {
  categories: string;
  difficulties: string;
  muscles: string;
};

export type Action = {
  type: string;
  exercise: Exercise;
};

export type FetchedExercise = {
  Category: string;
  Difficulty: string;
  Force?: string;
  Grips?: string;
  details?: string;
  exercise_name?: string;
  id?: number;
  steps?: string[];
  target: {
    Primary: string[];
  };
  videoURL?: string[];
  youtubeURL?: string;
};

export type Context = {
  exercise: Exercise;
  dispatch: (action: Action) => void;
  attributesData: {
    categories: string[];
    difficulties: string[];
    forces?: string[];
    muscles: string[];
  };
  isAttributesFetched: boolean;
  exercisesData: Array<FetchedExercise>;
  isExercisesFetched: boolean;
};

export const initialExercise = {
  categories: "",
  difficulties: "",
  muscles: "",
};

export const initialAction = {
  type: "set",
  exercise: initialExercise,
};

export type FetchedProp = {
  fetchedExercise: FetchedExercise;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

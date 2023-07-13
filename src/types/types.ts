export type Exercise = {
  categories: string;
  difficulties: string;
  muscles: string;
};

export type Action = {
  type: string;
  exercise: Exercise;
};

export type Context = {
  exercise: Exercise;
  dispatch: (action: Action) => void;
};

export const initialExercise = {
  categories: "barbell",
  difficulties: "beginner",
  muscles: "biceps",
};

export const initialAction = {
  type: "set",
  exercise: {
    categories: "barbell",
    difficulties: "beginner",
    muscles: "biceps",
  },
};

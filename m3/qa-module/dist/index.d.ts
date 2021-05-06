declare type Question = {
    id: string;
    question: string;
    answer: string;
};
declare const allQuestion: () => Question[];
declare const getQuestion: (id: string) => Question;
export { allQuestion, getQuestion };
export type { Question };

export {};

declare global {
  interface Window {
    electron: {
      openAnswerWindow: (id: string) => void;
      receivedQuestionId: (fn: (id: string) => void) => void;
    };
  }
}

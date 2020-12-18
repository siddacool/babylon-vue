const logger = (sender: string, message: string) => `${sender}: ${message}`;

export const logError = (sender: string, message: string): void => {
  console.error(logger(sender, message));
};

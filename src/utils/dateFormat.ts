export const dateFormat = (value: string | Date): string | null => {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(value));
};

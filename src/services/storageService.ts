export const storageService = {
  getTokens: () => {
    const data = localStorage.getItem("tok-values");
    return data ? JSON.parse(data) : null;
  },
  setTokens: (content: any) => {
    localStorage.setItem("tok-values", JSON.stringify(content));
  },
  removeTokens: () => {
    localStorage.removeItem("tok-values");
  },

  setValue: (key: string, value: any) => {
    localStorage.setItem(key, value);
  },
};

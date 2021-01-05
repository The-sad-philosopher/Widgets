export const removeHTMLTags = (snippet: string) => {
  const regex = /(<([^>]+)>)/gi;
  const cleanSnippet = snippet.replace(regex, '');
  return cleanSnippet;
};

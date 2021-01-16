import axios from 'axios';

const URL = 'https://translation.googleapis.com/language/translate/v2';

export const translate = async (text: string, languageId: string) => {
  const { data } = await axios.post(
    URL,
    {},
    {
      params: {
        q: text,
        target: languageId,
        key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY,
      },
    }
  );
  return data.data.translations[0].translatedText;
};

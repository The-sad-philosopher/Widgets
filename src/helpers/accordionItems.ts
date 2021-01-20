export interface Item {
  title: string;
  content: string;
}

export const items: Item[] = [
  {
    title: 'What exactly is this?',
    content: 'This is a simple project that I did to study React Hooks.',
  },
  {
    title: 'What am I supposed to do?',
    content:
      'You have a few options in the header as you can see. Try exploring them.',
  },
  {
    title: 'What is WikiSearch and Translate?',
    content:
      "They are some simple components I made using Wikipedia's api and Google Translate's api respectfully. Give them a try.",
  },
];

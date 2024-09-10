export const getMessages = jest.fn(() => [
  {id: 1, text: 'Hello, World!', createdAt: new Date()},
  {id: 2, text: 'Hi, there!', createdAt: new Date()},
  {id: 3, text: 'How are you?', createdAt: new Date()},
]);
export const getServerSession = jest.fn(() => ({
  user: {
    email: "test@test.test",
    name: "test",
    image: "test",
  },
}));
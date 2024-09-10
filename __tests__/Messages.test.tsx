import { render, screen, fireEvent } from "@testing-library/react";
import Messages from "@/app/ui/Messages";

jest.mock("next-auth", () => ({
  getServerSession: jest.fn().mockResolvedValue({ user: { id: "123" } }),
}));

jest.mock("@/app/lib/actions", () => ({
  getMessages: jest.fn().mockResolvedValue([
    { id: 1, message: "Hello, world!", createdAt: new Date() },
    { id: 2, message: "Hi, there!", createdAt: new Date() },
    { id: 3, message: "How are you?", createdAt: new Date() },
  ]),
}));
describe("Messages", () => {
  it("renders the messages", async () => {
    render(await Messages({ query: "" }));
    const messages = screen.getByRole("messages");
    const message1 = screen.getByText("Hello, world!");
    const message2 = screen.getByText("Hi, there!");
    const message3 = screen.getByText("How are you?");
    expect(messages).toContainElement(message1);
    expect(messages).toContainElement(message2);
    expect(messages).toContainElement(message3);
  });

  it("should render messages that match the search query", async () => {
    render(await Messages({ query: "world" }));
    const messages = screen.getByRole("messages");
    const message1 = screen.getByText("Hello, world!");
    const message2 = screen.queryByText("Goodbye, world!");
    expect(messages).toContainElement(message1);
    expect(messages).not.toContainElement(message2);
  });
});
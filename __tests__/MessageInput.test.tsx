import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MessageInput from "@/app/ui/MessageInput";
import * as actions from "@/app/lib/actions";

jest.mock("@/app/lib/actions");

describe("MessageInput", () => {
  it("renders the input field", () => {
    render(<MessageInput />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("allows user to type", () => {
    render(<MessageInput />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello, world!" } });
    expect(input).toHaveValue("Hello, world!");
  });

  it("should successfully send a message", async () => {
    const createMessageSpy = jest
      .spyOn(actions, "createMessage")
      .mockResolvedValue(true);

    render(<MessageInput />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Send Now" });

    fireEvent.change(input, { target: { value: "Hello, world!" } });
    fireEvent.click(button);

    expect(createMessageSpy).toHaveBeenCalledWith("Hello, world!");

    expect(input).toHaveValue("Hello, world!");
  });
});

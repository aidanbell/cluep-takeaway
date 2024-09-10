import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MessageInput from "@/app/ui/MessageInput";

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
});

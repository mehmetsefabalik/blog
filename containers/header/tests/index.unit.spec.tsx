import React from "react";
import sinon from "sinon";
import { render, cleanup } from "@testing-library/react";
import { Header } from "..";

const sandbox = sinon.createSandbox();

describe("Header Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render header tag", () => {
    // Arrange

    // Act
    const { container } = render(<Header />);

    // Assert
    expect(container.querySelectorAll("header")).toHaveLength(1);
    expect(container.querySelectorAll(".top")).toHaveLength(1);
    expect(container.querySelectorAll("#header-container")).toHaveLength(1);
    expect(container.querySelectorAll(".top a")).toHaveLength(3);
  });
});

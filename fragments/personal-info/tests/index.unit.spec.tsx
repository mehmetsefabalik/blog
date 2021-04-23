import React from "react";
import sinon from "sinon";
import { render, cleanup } from "@testing-library/react";
import { PersonalInfo } from "..";

const sandbox = sinon.createSandbox();

describe("PersonalInfo Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render header tag", () => {
    // Arrange

    // Act
    const { container } = render(<PersonalInfo />);

    // Assert
    expect(container.querySelectorAll("aside")).toHaveLength(1);
  });
});

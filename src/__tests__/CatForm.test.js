import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CatForm from "../CatForm";

describe("CatForm", () => {
  it("should render the male and female radio inputs for gender", () => {
    // Render the CatForm component
    const { getByLabelText } = render(<CatForm handleCatSubmit={() => {}} />);

    // Find the male and female radio inputs by name and value
    const maleRadio = getByLabelText("Male");
    const femaleRadio = getByLabelText("Female");

    // Assert that the male and female radio inputs exist
    expect(maleRadio).toBeInTheDocument();
    expect(maleRadio.type).toBe("radio");
    expect(maleRadio.name).toBe("gender");
    expect(maleRadio.value).toBe("Male");

    expect(femaleRadio).toBeInTheDocument();
    expect(femaleRadio.type).toBe("radio");
    expect(femaleRadio.name).toBe("gender");
    expect(femaleRadio.value).toBe("Female");
  });
});

describe("CatForm", () => {
  it('should render a text input with name "avatar"', () => {
    // Render the CatForm component
    const { getByLabelText } = render(<CatForm handleCatSubmit={() => {}} />);

    // Get the radio input by its name attribute
    const avatarInput = getByLabelText("Avatar");

    // Assert that the gender input exists
    expect(avatarInput).toBeInTheDocument();
    expect(avatarInput.type).toBe("text");
    expect(avatarInput.name).toBe("avatar");
  });
});

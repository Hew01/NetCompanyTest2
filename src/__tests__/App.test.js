import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App-Extra", () => {
  it("should add a new cat item when form is submitted", () => {
    // Render the App component
    const { getByLabelText, getByText, container } = render(<App />);

    // Get form elements
    const nameInput = getByLabelText("Name");
    const stageSelect = getByLabelText("Stage");
    const breedInput = getByLabelText("Breed");
    const genderRadio = getByLabelText("Male");
    const avatarInput = getByLabelText("Avatar");
    const createButton = getByText("Create");

    const createCat = {
      name: "Byron",
      stage: "Kitten",
      breed: "American Short Hair",
      gender: "Male",
      avatar: "https://example.com/avatar.jpg"
    };

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: createCat.name } });
    fireEvent.change(stageSelect, { target: { value: createCat.stage } });
    fireEvent.change(breedInput, { target: { value: createCat.breed } });
    fireEvent.click(genderRadio);
    fireEvent.change(avatarInput, {
      target: { value: createCat.avatar }
    });

    // Submit the form
    fireEvent.click(createButton);

    // Find the newly added cat item in the cat list
    const newCatItem = container.querySelector(".cat-item"); // Assuming the new cat item has an ID of 1

    // Assert that the new cat item is present
    expect(newCatItem).toBeInTheDocument();
    expect(newCatItem.querySelector(".cat-item-name")).toHaveTextContent(
      createCat.name
    );
    expect(newCatItem.querySelector(".cat-item-breed")).toHaveTextContent(
      createCat.breed
    );
    expect(newCatItem.querySelector(".cat-item-gender")).toHaveTextContent(
      createCat.gender
    );
    expect(
      newCatItem.querySelector(".cat-item-img").getAttribute("src")
    ).toEqual(createCat.avatar);
  });
});

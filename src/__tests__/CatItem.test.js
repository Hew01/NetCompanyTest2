import React from "react";
import { render } from "@testing-library/react";
import CatItem from "../CatItem";

describe("CatItem", () => {
  it("should render the correct image value from the props", () => {
    // Define the test cat data
    const cat = {
      name: "Byron",
      stage: "Kitten",
      breed: "American Short Hair",
      avatar:
        "https://d3548djza.cloudfront.net/APHI/Blog/2021/09-24/American+Shorthair+kitten+ready+to+pounce-min.jpg"
    };

    // Render the CatItem component with the test cat data
    const { container } = render(<CatItem cat={cat} />);

    // Find the image element by its alt text
    const catImage = container.querySelector(".cat-item-img");

    // Assert that the image source matches the cat's image prop
    expect(catImage.src).toBe(cat.avatar);
  });

  it("should render a <p> tag to render the gender prop", () => {
    // Define the test cat data
    const cat = {
      name: "Byron",
      stage: "Kitten",
      breed: "American Short Hair",
      gender: "Male"
    };

    // Render the CatItem component with the test cat data
    const { container } = render(<CatItem cat={cat} />);

    // Find the <p> element with the gender text
    const genderElement = container.querySelector(".cat-item-gender");

    // Assert that the <p> element exists
    expect(genderElement).toBeInTheDocument();
    expect(genderElement.tagName).toBe("P");
    expect(genderElement.textContent).toBe(cat.gender);
  });
});

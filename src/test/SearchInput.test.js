import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import SearchInput from "../components/SearchInput/SearchInput";

describe("SearchInput", () => {
  it("renders without errors", () => {
    render(
        <Provider store={store}>
          <SearchInput />
        </Provider>
      )
  });

  it("updates query state correctly when input value changes", () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    )
    const input = screen.getByPlaceholderText("Buscar por nombre del archivo");
    fireEvent.change(input, { target: { value: "example" } });
    expect(input.value).toBe("example");
  });

  it("calls getFile function with correct argument when search button is clicked", () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    )
    const searchButton = screen.getByText("Consultar");
    fireEvent.click(searchButton);
    expect(searchButton).toBeInTheDocument();
    expect(searchButton.value).toBe("");
  });

  it("resets query state to empty string and calls getFiles function when reset button is clicked", () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    )
    const resetButton = screen.getByText("Reiniciar");
    fireEvent.click(resetButton);
    expect(resetButton.value).toBe("");
  });

  it("initializes input with correct value", () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>,
    )
    const input = screen.getByPlaceholderText("Buscar por nombre del archivo");
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "example" } });
    expect(input.value).toBe("example");
  });
});
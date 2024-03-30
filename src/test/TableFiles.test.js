import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store, { setFiles, setLoading } from "../store/store";
import TableFile from "../components/Tables/TableFile";

jest.mock("../hook/useFile", () => ({
  __esModule: true,
  default: () => ({
    getFiles: jest.fn(),
  }),
}));

describe("TableFile", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <TableFile />
      </Provider>
    );
  });

  it("Initializes fileList state correctly", () => {
    render(
      <Provider store={store}>
        <TableFile />
      </Provider>
    );
    const fileListInitialState = store.getState().files.fileList;
    expect(fileListInitialState).toEqual([]);
  });

  it("Initializes loading state correctly", () => {
    render(
      <Provider store={store}>
        <TableFile />
      </Provider>
    );
    const loadingInitialState = store.getState().files.loading;
    expect(loadingInitialState).toEqual(false);
  });

  it("Change fileList state correctly", () => {
    render(
      <Provider store={store}>
        <TableFile />
      </Provider>
    );
    const newFileList = [
      {
        file: "test2.csv",
        text: "rXazrglQzLg",
        number: "88",
        hex: "0ee20a7e86bd53dd475b6996bf0fd5f4",
      },
    ];
    store.dispatch(setFiles(newFileList));

    const updatedFileList = store.getState().files.fileList;

    expect(updatedFileList).toEqual(newFileList);
    expect(screen.getByText("FileName")).toBeInTheDocument();
    expect(screen.getByText("Text")).toBeInTheDocument();
    expect(screen.getByText("Number")).toBeInTheDocument();
    expect(screen.getByText("Hex")).toBeInTheDocument();
  });

  it("Check new files state", () => {
    render(
      <Provider store={store}>
        <TableFile />
      </Provider>
    );
    expect(screen.getByText("test2.csv")).toBeInTheDocument();
    expect(screen.getByText("rXazrglQzLg")).toBeInTheDocument();
    expect(screen.getByText("88")).toBeInTheDocument();
    expect(
      screen.getByText("0ee20a7e86bd53dd475b6996bf0fd5f4")
    ).toBeInTheDocument();
  });

  it("Change loading state correctly", () => {
    render(
      <Provider store={store}>
        <TableFile />
      </Provider>
    );
    const newLoading = true;
    store.dispatch(setLoading(newLoading));

    const updatedLoading = store.getState().files.loading;
    expect(updatedLoading).toEqual(newLoading);
  });

  it("Check loading state", () => {
    render(
      <Provider store={store}>
        <TableFile />
      </Provider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});

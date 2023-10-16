import React from "react";
import { renderRouter, screen } from "expo-router/testing-library";
import "@testing-library/jest-native/extend-expect";

describe("App Root", () => {
  it("my-test", async () => {
    const MockComponent = jest.fn(() => <View />);

    renderRouter(
      {
        index: MockComponent,
        "folder/a": MockComponent,
        "(group)/b": MockComponent,
      },
      {
        initialRoute: "/folder/a",
      }
    );

    expect(screen).toHavePathname("/folder/a");
  });
});

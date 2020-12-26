import App from "./App";
import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

describe("App", () => {
  const app = render(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});



// test('should use counter', () => {
//     const { result } = renderHook(() => App())
//     expect(result).toBe(0)
//     expect(typeof result.current.increment).toBe('function')
//   })

//   test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });

import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import appStore from '../../utilities/appStore'
import { Provider } from "react-redux";
import useOnlineStatus from "../../utilities/useOnlineStatus";
import { renderHook, act } from "@testing-library/react";
import '@testing-library/jest-dom';

it('Should render header with login button', () => {
  render(
  <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
  </BrowserRouter>
  );
  const button = screen.getByRole('button', {name: 'Log In'});
  expect(button).toBeInTheDocument();
});

it('Should render header with cart', () => {
  render(
  <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
  </BrowserRouter>
  );
  const cartText = screen.getByText(/Cart/);
  expect(cartText).toBeInTheDocument();
});

it('Should render header with cart-0', () => {
  render(
  <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
  </BrowserRouter>
  );
  const cartTextWithZero = screen.getByText('Cart-(0)');
  expect(cartTextWithZero).toBeInTheDocument();
});

it('Should render header with cart-0', () => {
  render(
  <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
  </BrowserRouter>
  );
  const cartTextWithZero = screen.getByText('Cart-(0)');
  expect(cartTextWithZero).toBeInTheDocument();
});

it('Should show Logout text while click on Log in', () => {
  render(
  <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
  </BrowserRouter>
  );
  const logInButton = screen.getByRole('button', {name: 'Log In'});
  fireEvent.click(logInButton);
  const logOutButton = screen.getByRole('button', {name: 'Log Out'});
  expect(logOutButton).toBeInTheDocument();
});


describe("useOnlineStatus Hook", () => {
  test("should return initial online status", () => {
    Object.defineProperty(navigator, "onLine", { value: true, configurable: true });

    const { result } = renderHook(() => useOnlineStatus());

    expect(result.current).toBe(true);
  });

  test("should update to offline when offline event is triggered", () => {
    Object.defineProperty(navigator, "onLine", { value: true, configurable: true });

    const { result } = renderHook(() => useOnlineStatus());

    act(() => {
      Object.defineProperty(navigator, "onLine", { value: false, configurable: true });
      window.dispatchEvent(new Event("offline"));
    });

    expect(result.current).toBe(false);
  });

  test("should update back to online when online event is triggered", () => {
    Object.defineProperty(navigator, "onLine", { value: false, configurable: true });

    const { result } = renderHook(() => useOnlineStatus());

    act(() => {
      Object.defineProperty(navigator, "onLine", { value: true, configurable: true });
      window.dispatchEvent(new Event("online"));
    });

    expect(result.current).toBe(true);
  });
});


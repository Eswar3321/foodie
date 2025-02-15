import cartReducer, { addItem, removeItem, clearCart } from "../../utilities/cardSlice";

describe("cartSlice reducer", () => {
  it("should return the initial state", () => {
    expect(cartReducer(undefined, {})).toEqual({ items: [] });
  });

  it("should add an item to the cart", () => {
    const initialState = { items: [] };
    const newItem = { id: 1, name: "Product 1" };

    const updatedState = cartReducer(initialState, addItem(newItem));

    expect(updatedState.items).toHaveLength(1);
    expect(updatedState.items[0]).toEqual(newItem);
  });

  it("should remove the last item from the cart", () => {
    const initialState = { items: [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }] };

    const updatedState = cartReducer(initialState, removeItem());

    expect(updatedState.items).toHaveLength(1);
    expect(updatedState.items[0]).toEqual({ id: 1, name: "Product 1" }); // Last item removed
  });

  it("should clear the cart", () => {
    const initialState = { items: [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }] };

    const updatedState = cartReducer(initialState, clearCart());

    expect(updatedState.items).toEqual([]);
  });
});

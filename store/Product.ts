import { defineStore } from "pinia";
import { Iproduct, type Idata } from "@/utils/type/Iproduct";

export const useProductStore = defineStore("Product", {
  state: () => ({
    Products: [] as Idata[],
    TotalQuantity: 0,
  }),

  persist: {
    key: "Product",
    storage: persistedState.localStorage,
  },

  getters: {
    getTotalPrice(): number {
      return this.Products.reduce(
        (acc, item) => acc + item.totalPrice * item.quantity,
        0
      );
    },

    totalItemsCart(): number {
      const uniqeProduct: any = [];
      this.Products.forEach((item) => {
        if (!uniqeProduct.includes(item.id)) {
          uniqeProduct.push(item.id);
        }
      });
      return uniqeProduct.length;
    },

    totalItemsPrice(): number {
      return this.Products.reduce((acc, item) => acc + item.totalPrice, 0);
    },
  },

  actions: {
    addProduct(product: Idata) {
      const existingItems = this.Products.find(
        (item) => item.id === product.id
      );
      if (existingItems) {
        existingItems.quantity++;
        existingItems.totalPrice += product.price;
      } else {
        this.Products.push(product);
      }
      this.TotalQuantity++;
    },
    clearItems(): void {
      this.Products = [];
      this.TotalQuantity = 0;
    },
    removeProduct(id: number) {
      const Exist = this.Products.find((item) => item.id === id);
      if (Exist?.quantity === 1) {
        this.Products = this.Products.filter((item) => item.id !== id);
        this.TotalQuantity--;
      } else {
        this.TotalQuantity--;
        Exist!.quantity--;
        Exist!.totalPrice -= Exist!.price;
      }
    },
  },
});

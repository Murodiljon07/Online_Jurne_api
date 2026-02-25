export interface ShopItem {
  id: string;
  name: string;
  price: number;
}

export interface ShopPurchase {
  id: string;
  studentId: string;
  itemId: string;
  date: string;
}

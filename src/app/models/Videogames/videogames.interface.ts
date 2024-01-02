export interface IVideogame {
  title: string;
  platform: string;
  state: {
    complete: String;
    manual: String;
    disk: String;
  };
  quantity: {
    complete: Number;
    manual: Number;
    disk: Number;
  };
  price: {
    complete: Number;
    manual: Number;
    disk: Number;
  };
  discount: {
    complete: {
      hasDiscount: boolean;
      discountPercent: number;
    };
    manual: {
      hasDiscount: boolean;
      discountPercent: number;
    };
    disk: {
      hasDiscount: boolean;
      discountPercent: number;
    };
  };
  image: string;
  tags: string[];
}

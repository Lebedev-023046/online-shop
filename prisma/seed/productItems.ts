interface IProductItem {
  qty_in_stock: number;
  product_id: number;
  size: "XS" | "S" | "M" | "L" | "XL";
  article: string;
}

export const productItems: IProductItem[] = [
  // PALAZZOZ

  // product 1
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 1,
    size: "XS",
    article: "PBL138XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 1,
    size: "S",
    article: "PBL138S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 1,
    size: "M",
    article: "PBL138M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 1,
    size: "L",
    article: "PBL138L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 1,
    size: "XL",
    article: "PBLL138XL",
  },

  // product 2
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 2,
    size: "XS",
    article: "PBR138XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 2,
    size: "S",
    article: "PBR138S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 2,
    size: "M",
    article: "PBR138M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 2,
    size: "L",
    article: "PBR138L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 2,
    size: "XL",
    article: "PBR138XL",
  },

  // product 3
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 3,
    size: "XS",
    article: "PLB138XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 3,
    size: "S",
    article: "PLB138S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 3,
    size: "M",
    article: "PLB138M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 3,
    size: "L",
    article: "PLB138L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 3,
    size: "XL",
    article: "PLB138XL",
  },

  // product 4

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 4,
    size: "XS",
    article: "PP138XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 4,
    size: "S",
    article: "PP138S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 4,
    size: "M",
    article: "PP138M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 4,
    size: "L",
    article: "PP138L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 4,
    size: "XL",
    article: "PP138XL",
  },

  // product 5
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 5,
    size: "XS",
    article: "PW138XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 5,
    size: "S",
    article: "PW138S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 5,
    size: "M",
    article: "PW138M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 5,
    size: "L",
    article: "PW138L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 5,
    size: "XL",
    article: "PW138XL",
  },

  // T_SHIRTS

  // product 6
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 6,
    size: "XS",
    article: "TSBC79XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 6,
    size: "S",
    article: "TSBC79S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 6,
    size: "M",
    article: "TSBC79M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 6,
    size: "L",
    article: "TSBC79L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 6,
    size: "XL",
    article: "TSBC79XL",
  },

  // product 7
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 7,
    size: "XS",
    article: "TSBE79XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 7,
    size: "S",
    article: "TSBE79S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 7,
    size: "M",
    article: "TSBE79M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 7,
    size: "L",
    article: "TSBE79L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 7,
    size: "XL",
    article: "TSBE79XL",
  },

  // product 8

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 8,
    size: "XS",
    article: "TSDP79XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 8,
    size: "S",
    article: "TSDP79S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 8,
    size: "M",
    article: "TSDP79M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 8,
    size: "L",
    article: "TSDP79L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 8,
    size: "XL",
    article: "TSDP79XL",
  },

  // product 9

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 9,
    size: "XS",
    article: "TSGY79XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 9,
    size: "S",
    article: "TSGY79S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 9,
    size: "M",
    article: "TSGY79M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 9,
    size: "L",
    article: "TSGY79L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 9,
    size: "XL",
    article: "TSGY79XL",
  },

  // product 10

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 10,
    size: "XS",
    article: "TSOE79XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 10,
    size: "S",
    article: "TSOE79S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 10,
    size: "M",
    article: "TSOE79M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 10,
    size: "L",
    article: "TSOE79L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 10,
    size: "XL",
    article: "TSOE79XL",
  },

  // product 11

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 11,
    size: "XS",
    article: "TSPK79XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 11,
    size: "S",
    article: "TSPK79S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 11,
    size: "M",
    article: "TSPK79M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 11,
    size: "L",
    article: "TSPK79L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 11,
    size: "XL",
    article: "TSPK79XL",
  },

  // product 12

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 12,
    size: "XS",
    article: "TSTE79XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 12,
    size: "S",
    article: "TSTE79S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 12,
    size: "M",
    article: "TSTE79M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 12,
    size: "L",
    article: "TSTE79L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 12,
    size: "XL",
    article: "TSTE79XL",
  },

  // product 13

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 13,
    size: "XS",
    article: "TSYW79XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 13,
    size: "S",
    article: "TSYW79S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 13,
    size: "M",
    article: "TSYW79M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 13,
    size: "L",
    article: "TSYW79L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 13,
    size: "XL",
    article: "TSYW79XL",
  },

  // SUIITS

  // product 14

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 14,
    size: "XS",
    article: "SBE169XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 14,
    size: "S",
    article: "SBE169S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 14,
    size: "M",
    article: "SBE169M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 14,
    size: "L",
    article: "SBE169L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 14,
    size: "XL",
    article: "SBE169XL",
  },

  // product 15

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 15,
    size: "XS",
    article: "SBN169XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 15,
    size: "S",
    article: "SBN169S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 15,
    size: "M",
    article: "SBN169M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 15,
    size: "L",
    article: "SBN169L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 15,
    size: "XL",
    article: "SBN169XL",
  },

  // product 16

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 16,
    size: "XS",
    article: "SGY169XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 16,
    size: "S",
    article: "SGY169S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 16,
    size: "M",
    article: "SGY169M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 16,
    size: "L",
    article: "SGY169L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 16,
    size: "XL",
    article: "SGY169XL",
  },

  // product 17

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 17,
    size: "XS",
    article: "SWE169XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 17,
    size: "S",
    article: "SWE169S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 17,
    size: "M",
    article: "SWE169M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 17,
    size: "L",
    article: "SWE169L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 17,
    size: "XL",
    article: "SWE169XL",
  },

  // product 18

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 18,
    size: "XS",
    article: "SYW169XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 18,
    size: "S",
    article: "SYW169S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 18,
    size: "M",
    article: "SYW169M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 18,
    size: "L",
    article: "SYW169L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 18,
    size: "XL",
    article: "SYW169XL",
  },

  // product 19

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 19,
    size: "XS",
    article: "SGN169XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 19,
    size: "S",
    article: "SGN169S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 19,
    size: "M",
    article: "SGN169M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 19,
    size: "L",
    article: "SGN169L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 19,
    size: "XL",
    article: "SGN169XL",
  },

  // HOODIES

  // product 20

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 20,
    size: "XS",
    article: "HBE178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 20,
    size: "S",
    article: "HBE178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 20,
    size: "M",
    article: "HBE178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 20,
    size: "L",
    article: "HBE178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 20,
    size: "XL",
    article: "HBE178XL",
  },

  // product 21

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 21,
    size: "XS",
    article: "HBX178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 21,
    size: "S",
    article: "HBX178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 21,
    size: "M",
    article: "HBX178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 21,
    size: "L",
    article: "HBX178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 21,
    size: "XL",
    article: "HBX178XL",
  },

  // product 22

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 22,
    size: "XS",
    article: "HBN178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 22,
    size: "S",
    article: "HBN178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 22,
    size: "M",
    article: "HBN178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 22,
    size: "L",
    article: "HBN178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 22,
    size: "XL",
    article: "HBN178XL",
  },

  // product 23

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 23,
    size: "XS",
    article: "HCN178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 23,
    size: "S",
    article: "HCN178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 23,
    size: "M",
    article: "HCN178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 23,
    size: "L",
    article: "HCN178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 23,
    size: "XL",
    article: "HCN178XL",
  },

  // product 24

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 24,
    size: "XS",
    article: "HDG178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 24,
    size: "S",
    article: "HDG178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 24,
    size: "M",
    article: "HDG178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 24,
    size: "L",
    article: "HDG178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 24,
    size: "XL",
    article: "HDG178XL",
  },

  // product 25

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 25,
    size: "XS",
    article: "HGE178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 25,
    size: "S",
    article: "HGE178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 25,
    size: "M",
    article: "HGE178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 25,
    size: "L",
    article: "HGE178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 25,
    size: "XL",
    article: "HGE178XL",
  },

  // product 26

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 26,
    size: "XS",
    article: "HLC178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 26,
    size: "S",
    article: "HLC178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 26,
    size: "M",
    article: "HLC178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 26,
    size: "L",
    article: "HLC178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 26,
    size: "XL",
    article: "HLC178XL",
  },

  // product 27

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 27,
    size: "XS",
    article: "HPK178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 27,
    size: "S",
    article: "HPK178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 27,
    size: "M",
    article: "HPK178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 27,
    size: "L",
    article: "HPK178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 27,
    size: "XL",
    article: "HPK178XL",
  },

  // product 28

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 28,
    size: "XS",
    article: "HRD178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 28,
    size: "S",
    article: "HRD178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 28,
    size: "M",
    article: "HRD178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 28,
    size: "L",
    article: "HRD178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 28,
    size: "XL",
    article: "HRD178XL",
  },

  // product 29

  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 29,
    size: "XS",
    article: "HSD178XS",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 29,
    size: "S",
    article: "HSD178S0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 29,
    size: "M",
    article: "HSD178M0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 29,
    size: "L",
    article: "HSD178L0",
  },
  {
    qty_in_stock: Math.floor(Math.random() * 15) + 1,
    product_id: 29,
    size: "XL",
    article: "HSD178XL",
  },
];

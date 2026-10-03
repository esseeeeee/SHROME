export const categories = ["T-Shirts", "Hoodies", "Outerwear", "Bottoms", "Accessories"];

export const sizes = ["S", "M", "L", "XL"];

export const products = [
  { 
    id: 1, 
    name: "SH HEAVYWEIGHT TEE", 
    category: "T-Shirts", 
    price: 1000,
    description: "A heavyweight oversized tee cut from 320gsm cotton with a structured, boxy silhouette.", 
    image: "/images/SHROME HEAVYWEIGHT TEE.png" 
  },
  { 
    id: 2, 
    name: "SH CROSS GRAPHIC TEE", 
    category: "T-Shirts", 
    price: 1499,
    description: "Washed black tee with a cracked cross graphic printed across the back.", 
    image: "/images/SHROME CROSS GRAPHIC TEE.png" 
  },
  { 
    id: 3, 
    name: "SH GOTHIC LONG SLEEVE", 
    category: "T-Shirts", 
    price: 2499,
    description: "Long sleeve with gothic script down the arms and a slightly faded finish.", 
    image: "/images/SHROME GOTHIC LONG SLEEVE.png" 
  },
  { 
    id: 4, 
    name: "SH ZIP HOODIE", 
    category: "Hoodies", 
    price: 4000,
    description: "Full-zip hoodie with heavy brushed fleece, dropped shoulders and silver-tone hardware.", 
    image: "/images/SHROME ZIP HOODIE.png" 
  },
  { 
    id: 5, 
    name: "SH HEAVYWEIGHT HOODIE", 
    category: "Hoodies", 
    price: 4299,
    description: "Double-layered hood and a thick 450gsm body made to hold its shape.", 
    image: "/images/SHROME HEAVYWEIGHT HOODIE.png" 
  },
  { 
    id: 6, 
    name: "SH DENIM JACKET", 
    category: "Outerwear", 
    price: 5499,
    description: "Rigid black denim jacket with a boxy fit and tonal stitching.", 
    image: "/images/SHROME DENIM JACKET.png" 
  },
  { 
    id: 7, 
    name: "SH CARPENTER PANTS", 
    category: "Bottoms", 
    price: 5800,
    description: "Wide-leg carpenter pants in washed black twill with reinforced knees.", 
    image: "/images/SHROME CARPENTER PANTS.png" 
  },
  { 
    id: 8, 
    name: "SHROME SILVER PIN", 
    category: "Accessories", 
    price: 3000,
    description: "Stainless steel pin with a small engraved SHROME tag.", 
    image: "/images/SHROME SILVER PIN.png" 
  },
];

export function filterProducts(list, category, query) {
  return list.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchSearch;
  });
}
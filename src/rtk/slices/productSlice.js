import { createSlice } from "@reduxjs/toolkit";

import prodHeadphoneOne from "../../Assets/image-xx99-mark-two.jpg";
import prodHeadphoneTwo from "../../Assets/image-xx59.jpg";
import prodHeadphoneThree from "../../Assets/image-xx99-mark-one.jpg";

import earPhonesImg from "../../Assets/image-yx1-earphones.jpg";

import spaeakerOne from "../../Assets/image-zx9.jpg";
import spaeakerTwo from "../../Assets/image-zx7.jpg";

// import galleryImageOne from "../../Assets/image-gallery-1.jpg";
// import galleryImageTwo from "../../Assets/image-gallery-2.jpg";
// import galleryImageThree from "../../Assets/image-gallery-3.jpg";

const productsData = [
  {
    title: "XX99 MARK II HEADPHONES",
    image: prodHeadphoneOne,
    price: 230,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio.It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound",
  },
  {
    title: "XX99 MARK I HEADPHONES",
    image: prodHeadphoneTwo,
    price: 240,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  },
  {
    title: "XX59 HEADPHONES",
    image: prodHeadphoneThree,
    price: 380,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  },
  {
    title: "YX1 WIRELESS EARPHONES",
    image: earPhonesImg,
    price: 450,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  },
  {
    title: "ZX9 SPEAKER",
    image: spaeakerOne,
    price: 500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  },
  {
    title: "ZX7 SPEAKER",
    image: spaeakerTwo,
    price: 600,
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
  },
];

export const productSlice = createSlice({
  name: "productSlice",
  initialState: productsData,
  reducers: {
    getProduct: (state, action) => {},
  },
});

export const { getProduct } = productSlice.actions;

export default productSlice.reducer;

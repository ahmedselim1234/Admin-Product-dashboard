import { v4 as uuid } from "uuid";

import type { Product } from "../interfaces/index";





export const prodList: Product[] = [
  {
    id: uuid(),
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    price: "$120",
    colors: ["red","blue","yellow",'pink'],
    category: {
      name: "Electronics",
      imageUrl: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
    },
  },
  {
    id:uuid(),
    title: "Smartwatch",
    description: "Fitness-focused smartwatch with heart rate monitor.",
    imageUrl: "https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg",
    price: "$90",
    colors: ["green","blue" , "green"],
    category: {
      name: "Wearables",
      imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Gaming Mouse",
    description: "Ergonomic RGB gaming mouse with 8 programmable buttons.",
    imageUrl:"https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    price: "$45",
    colors:["red","blue" , "green"],
    category: {
      name: "Accessories",
      imageUrl: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker with deep bass.",
    imageUrl: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    price: "$60",
    colors:["red","blue" , "green"],
    category: {
      name: "Audio",
      imageUrl: "https://images.pexels.com/photos/3394660/pexels-photo-3394660.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Laptop Backpack",
    description: "Durable and spacious backpack for laptops up to 17 inches.",
    imageUrl: "https://images.pexels.com/photos/1289943/pexels-photo-1289943.jpeg",
    price: "$35",
    colors: ["red","blue" , "green"],
    category: {
      name: "Bags",
      imageUrl: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
  },
  {
    id:uuid(),
    title: "Mechanical Keyboard",
    description: "Backlit mechanical keyboard with blue switches.",
    imageUrl: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg",
    price: "$80",
    colors:["red","blue" , "green"],
    category: {
      name: "Accessories",
      imageUrl: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
    },
  },
  {
    id:uuid(),
    title: "Fitness Tracker",
    description: "Slim fitness tracker with sleep and activity monitoring.",
    imageUrl: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    price: "$50",
    colors:["red","blue" , "green"],
    category: {
      name: "Wearables",
      imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    },
  },
  {
    id:uuid(),
    title: "4K Monitor",
    description: "Ultra HD 27-inch monitor with HDR support.",
    imageUrl: "https://images.pexels.com/photos/267606/pexels-photo-267606.jpeg",
    price: "$300",
    colors:["red","blue" , "green"],
    category: {
      name: "Electronics",
      imageUrl: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
    },
  },
  {
    id:uuid(),
    title: "Wireless Charger",
    description: "Fast wireless charging pad compatible with all Qi devices.",
    imageUrl: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    price: "$25",
    colors:["red","blue" , "green"],
    category: {
      name: "Accessories",
      imageUrl: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Action Camera",
    description: "Waterproof 4K action camera with wide-angle lens.",
    imageUrl: "https://images.pexels.com/photos/336917/pexels-photo-336917.jpeg",
    price: "$150",
    colors: ["red","blue" , "green"],
    category: {
      name: "Cameras",
      imageUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    },
  },
];

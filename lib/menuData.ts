export type MenuItem = {
  name: string;
  price: number | string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  tag?: string;
  items: MenuItem[];
};

export type MenuGroup = {
  id: string;
  title: string;
  sections: MenuSection[];
};

export const menuGroups: MenuGroup[] = [
  {
    id: "mains",
    title: "Mains",
    sections: [
      {
        id: "pizza",
        title: "Pizza",
        tag: "Cheese burst +₹60",
        items: [
          { name: "Margrita Pizza", price: 99, note: "Pizza sauce, white cheese, cheese" },
          { name: "Corn Cheese Pizza", price: 140, note: "Pizza sauce, white cheese, corn, cheese" },
          { name: "Farm House Pizza", price: 170, note: "Pizza sauce, white cheese, onion, capsicum, tomato, cheese" },
          { name: "Paneer Tikka Pizza", price: 190, note: "Pizza sauce, white cheese, onion, bell pepper, tandoori sauce, paneer, cheese" },
          { name: "Makhni Pizza", price: 250, note: "Cheese blend, makhani sauce, capsicum, paneer, onion, mozzarella" },
          { name: "Achari Pizza", price: 250, note: "Cheese blend, achari sauce, corn, capsicum, paneer, mozzarella" },
          { name: "Scooffle Special Pizza", price: 260, note: "Pizza sauce, chipotle sauce, white cheese, onion, bell pepper, paneer, red paprika, jalapeno, herb & chilli patty" },
        ],
      },
      {
        id: "burger",
        title: "Burger",
        items: [
          { name: "Allu Tikki", price: 39 },
          { name: "Devil Burger", price: 65 },
          { name: "Veg Delight", price: 70 },
          { name: "Cheese Allu Tikki", price: 70 },
          { name: "Veg Grill Burger", price: 80 },
          { name: "Veg Cheese Delight", price: 90 },
          { name: "Veg Cheese Grill", price: 100 },
          { name: "Double Decker", price: 120 },
        ],
      },
      {
        id: "pasta",
        title: "Pasta",
        tag: "Add cheese +₹30",
        items: [
          { name: "Arrabiata Red Sauce", price: 140 },
          { name: "Alfredo White Sauce", price: 150 },
          { name: "Peri-Peri Pasta", price: 150 },
          { name: "Mix Medley", price: 160 },
        ],
      },
      {
        id: "sandwich",
        title: "Sandwich",
        tag: "Add cheese +₹30",
        items: [
          { name: "Regular Sandwich", price: 79 },
          { name: "Corn Cheese", price: 110 },
          { name: "Veg Grill Cheese", price: 140 },
          { name: "Paneer Tikka", price: 150 },
        ],
      },
      {
        id: "wraps",
        title: "Wrap's",
        items: [
          { name: "Crunchy Potato Wrap", price: 120 },
          { name: "Crunchy Paneer Wrap", price: 140 },
        ],
      },
      {
        id: "taco",
        title: "Taco",
        items: [
          { name: "Veg Cheese Taco", price: 120 },
          { name: "Paneer Cheese Taco", price: 150 },
        ],
      },
      {
        id: "momos",
        title: "Momo's",
        items: [
          { name: "Steam Veg (Atta) Momo", price: 70 },
          { name: "Kurkure Veg (Atta) Momo", price: 90 },
          { name: "Steam Paneer Momo", price: 90 },
          { name: "Kurkure Paneer Momo", price: 110 },
          { name: "Tandoori Paneer Momo", price: 140 },
        ],
      },
      {
        id: "chinese",
        title: "Chinese",
        items: [
          { name: "Manchow Soup", price: 60 },
          { name: "Veg Noodles", price: 80 },
          { name: "Chilli Garlic Noodles", price: 110 },
          { name: "Hakka Noodles", price: 130 },
          { name: "Manchurian", price: 160 },
          { name: "Honey Chilli Potato", price: 180 },
          { name: "Chilli Paneer", price: 210 },
        ],
      },
      {
        id: "sides",
        title: "Fries & Garlic Bread",
        items: [
          { name: "Salted Fries", price: 80 },
          { name: "Peri-Peri Fries", price: 90 },
          { name: "Loaded Fries", price: 110 },
          { name: "Mozzarella Cheese Slice Garlic Bread", price: 80 },
          { name: "Devil Garlic Bread", price: 90 },
          { name: "Veg Stuffed Garlic Bread", price: 130 },
          { name: "Paneer Stuffed Garlic Bread", price: 150 },
        ],
      },
    ],
  },
  {
    id: "sweet",
    title: "Sweet Treats",
    sections: [
      {
        id: "waffles",
        title: "Waffle's",
        items: [
          { name: "Waffle Cone", price: 20 },
          { name: "White Snow", price: 100 },
          { name: "Belgium Choco", price: 100 },
          { name: "Red Velvet", price: 100 },
          { name: "Naked Nutella", price: 110 },
        ],
      },
      {
        id: "waffwich",
        title: "Waff-wich",
        tag: "Add ice cream +₹30",
        items: [
          { name: "Cookies & Cream", price: 140 },
          { name: "Nutella Kit-Kat", price: 140 },
          { name: "Nutella Brownie", price: 140 },
          { name: "White Snow", price: 140 },
        ],
      },
      {
        id: "sundae",
        title: "Sundae's",
        items: [
          { name: "Brownie Sundae", price: 150 },
          { name: "Fruit Sundae", price: 190 },
          { name: "Kit-Kat Sundae", price: 200 },
        ],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    sections: [
      {
        id: "shakes",
        title: "Shakes",
        tag: "Add ice cream +₹50",
        items: [
          { name: "Vanilla", price: 90 },
          { name: "Mango", price: 90 },
          { name: "Strawberry", price: 90 },
          { name: "Butterscotch", price: 90 },
          { name: "Kit-Kat Shake", price: 90 },
          { name: "Oreo Shake", price: 90 },
          { name: "Brownie Blast", price: 110 },
          { name: "Blueberry", price: 110 },
          { name: "Black Current", price: 110 },
        ],
      },
      {
        id: "mojito",
        title: "Mojito's",
        items: [
          { name: "Tamarind Masala", price: 80 },
          { name: "Virgin Mojito", price: 80 },
          { name: "Nimbu Masala", price: 80 },
          { name: "Blue Curacao", price: 80 },
          { name: "Green Apple", price: 80 },
          { name: "Rose Mojito", price: 80 },
        ],
      },
      {
        id: "icetea",
        title: "Ice Tea",
        items: [
          { name: "Peach Ice Tea", price: 80 },
          { name: "Lemon Ice Tea", price: 80 },
        ],
      },
      {
        id: "coffee",
        title: "Coffee & Tea",
        items: [
          { name: "Masala Tea", price: 30 },
          { name: "Lemon Tea", price: 30 },
          { name: "Black Coffee", price: 30 },
          { name: "Hot Coffee", price: 49 },
          { name: "Hazelnut Hot Coffee", price: 80 },
        ],
      },
      {
        id: "coldcoffee",
        title: "Cold Coffee",
        items: [
          { name: "Classic Cold Coffee", price: 70 },
          { name: "Strong Cold Coffee", price: 90 },
          { name: "Hazelnut Cold Coffee", price: 89 },
          { name: "Peach Cold Coffee", price: 89 },
        ],
      },
    ],
  },
  {
    id: "combo",
    title: "Combo's Pack",
    sections: [
      {
        id: "combos",
        title: "Combo's Pack",
        items: [
          { name: "Cheese Allu Tikki Burger + Salted Fries + Coke", price: 165 },
          { name: "Steam Veg Momo + Kurkure Momo + Tandoori Momo", price: 170 },
          { name: "Paneer Tikka Pizza + Veg Burger + Coke", price: 260 },
          { name: "Steam Paneer Momo + Paneer Wrap + Mojito", price: 290 },
        ],
      },
    ],
  },
];

export const highlights = [
  { label: "Burger starts", value: "₹39" },
  { label: "Pizza starts", value: "₹99" },
  { label: "Sandwich starts", value: "₹79" },
];

export const specials = ["Veg Atta Momos", "Waffle's Available", "Ice Cream Available", "Cold Drinks Available"];

export const restaurant = {
  name: "Scooffle",
  tagline: "Pizza, Pasta, Burger & More",
  veg: true,
  address: "Near Sanguine Public School, Kotwali Bypass Road, Vikasnagar, Dehradun",
  phones: ["+91 78302 05303", "+91 78189 75303"],
  instagram: "@scooffle",
  zomato: true,
};

const usersData = [
  {
    id: 1,
    username: "John Doe",
    password: "123456",
  },
  {
    id: 2,
    username: "Jane Smith",
    password: "123456",
  },
];

const ordersData = [
  {
    id: 1,
    client: "John Doe",
    total: 100,
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 10,
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        price: 20,
        quantity: 3,
      },
    ],
  },
];

export { usersData, ordersData };

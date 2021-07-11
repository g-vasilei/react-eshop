import bcrypt from "bcryptjs";

const data = {
   users: [
      {
         name: "G",
         email: "ram.kunya.9@gmail.com",
         password: bcrypt.hashSync("1234", 8),
         isAdmin: true,
      },
      {
         name: "Kapoios",
         email: "ax@example.com",
         password: bcrypt.hashSync("12345", 8),
         isAdmin: false,
      },
   ],
   products: [
      {
         name: "Product 1",
         category: "Mpek potismatos Kala",
         image: "/images/p-1.png",
         price: "120",
         countInStock: 10,
         brand: "Taiwan",
         rating: "5",
         numReviews: 11,
         miniDescription: "Perilambanetai kai FAPA",
         description: "Best chinese bek in all Taiwan",
      },
      {
         name: "Product 2",
         category: "Mpek potismatos Kala",
         image: "/images/p-2.png",
         price: "110",
         countInStock: 2,
         brand: "Chinese",
         rating: "5",
         numReviews: 12,
         miniDescription: "Perilambanetai kai FAPA",
         description: "Best chinese bek in all China.",
      },
      {
         name: "Product 3",
         category: "Mpek potismatos Kala",
         image: "/images/p-3.png",
         price: "100",
         countInStock: 30,
         brand: "Korea",
         rating: "4",
         numReviews: 13,
         miniDescription: "Perilambanetai kai FAPA",
         description: "Best chinese bek in all Korea",
      },
      {
         name: "Product 4",
         category: "Mpek potismatos Moufa",
         image: "/images/p-4.png",
         price: "90",
         countInStock: 40,
         brand: "North Korea",
         rating: "4.6",
         numReviews: 14,
         miniDescription: "Perilambanetai kai FAPA",
         description: "Best chinese bek in all North Korea",
      },
      {
         name: "Product 5",
         category: "Mpek potismatos Moufa",
         image: "/images/p-5.png",
         price: "1020",
         countInStock: 0,
         brand: "India",
         rating: "3",
         numReviews: 15,
         miniDescription: "Perilambanetai kai FAPA",
         description: "Best chinese bek in all India",
      },
   ],
};
export default data;
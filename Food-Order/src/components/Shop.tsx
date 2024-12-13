// import { useEffect, useState } from "react";
// import Meals from "./Meals";
// import { MealItemProps } from "./MealItem";
// // import backendApp from "../../backend";
// // import { response } from "express";

// export default function Shop() {
//   const [foodImages, setFoodImages] = useState([]);
//   const [foodData, setFoodData] = useState<MealItemProps[] | undefined>(
//     undefined
//   );

//   useEffect(() => {
//     const fetchFoodImages = () => {
//       fetch("http://localhost:3000/images")
//         .then((response) => response.json())
//         .then((images) => {
//           console.log(images.length);
//           setFoodImages(images);
//         });
//     };

//     fetchFoodImages();

//     const fetchAvailbleFood = () => {
//       fetch("http://localhost:3000/meals")
//         .then((response) => response.json())
//         .then((food) => setFoodData(food));
//     };

//     fetchAvailbleFood();
//   }, []);

//   const isFoodAvailable = () => {
//     return !foodImages || foodImages.length === 0;
//   };
//   return (
//     <>
//       {!isFoodAvailable() && <p>No food available</p>}
//       {isFoodAvailable() && <Meals meals={foodData} />}
//     </>
//   );
// }

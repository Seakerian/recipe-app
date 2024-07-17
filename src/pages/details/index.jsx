import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );

      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
      console.log(recipeDetailsData);
    }

    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt="recipe"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-gray-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-semibold text-2xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className="p-2 px-6 rounded-lg text-sm font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3 my-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text-1xl font-semibold text-black/75">
                  {ingredient.quantity} {ingredient.unit}
                </span>{" "}
                <span className="text-1xl font-semibold text-black/75">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

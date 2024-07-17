import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} key={item?.id} />)
      ) : (
        <div>
          <p className="lg:text-3xl text-xl text-center text-black font-semibold">
            Nothing is added to favorites.
          </p>
        </div>
      )}
    </div>
  );
}

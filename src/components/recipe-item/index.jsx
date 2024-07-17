import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt=" recipe item"
          className="block w-full"
        />
      </div>
      <div>
        <span className="text-sm text-gray-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-semibold text-2xl truncate text-black">
          {item?.title}
        </h3>

        <Link
          className="text-sm p-2 mt-3 px-6 rounded-lg font-medium tracking-wider inline-block shadow-md bg-black text-white"
          to={`/recipe-item/${item?.id}`}
        >
          Recipe details
        </Link>
      </div>
    </div>
  );
}

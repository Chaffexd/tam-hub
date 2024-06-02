import { connectSearchBox } from "react-instantsearch-dom";

function SearchBox({ refine }: { refine: any}) {
  return (
    <form action="" role="search" className=" border-b border-slate-200">
      <input
        id="algolia_search"
        type="search"
        placeholder="Search the TAM Hub for a wealth of knowledge..."
        onChange={(e) => refine(e.currentTarget.value)}
        className="w-full p-4"
      />
    </form>
  );
}

export default connectSearchBox(SearchBox);
// ./components/Search/CustomHits.js
import Link from "next/link";
import { connectStateResults } from "react-instantsearch-dom";

function Hits({
  searchState,
  searchResults,
}: {
  searchState: any;
  searchResults: any;
}) {
  const validQuery = searchState.query?.length >= 3;
  console.log("Search Reults =", searchResults);

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && (
        <ol>
          {searchResults.hits.map((hit: any) => (
            <Link href={hit.slug} key={hit.objectID}>
              <li className="w-full bg-slate-100 rounded-lg p-4 hover:bg-slate-200 mb-2">
                <div>
                  <h2 className="font-bold mb-2">{hit.title}</h2>
                  {hit.excerpt && <p>{hit.excerpt}</p>}
                  {hit.document && <p>{hit.document}</p>}
                </div>
              </li>
            </Link>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(Hits);

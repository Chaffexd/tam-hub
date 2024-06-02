// ./components/Search/CustomHits.js
import Link from "next/link";
import { connectStateResults } from "react-instantsearch-dom";

function Hits({
  searchState,
  searchResults,
  handleModal
}: {
  searchState: any;
  searchResults: any;
  handleModal: () => void;
}) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && (
        <ol>
          {searchResults.hits.map((hit: any) => (
            <Link href={hit.slug} key={hit.objectID} onClick={() => handleModal()}>
              <li className="w-full  p-4 hover:bg-slate-200 border-b border-slate-200">
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

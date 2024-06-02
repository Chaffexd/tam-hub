import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";

type ModalProps = {
  handleModal: () => void;
};

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
);

const Modal = ({ handleModal }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
      onClick={handleModal}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-3/5 -mt-60 h-96 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <InstantSearch
          searchClient={searchClient}
          indexName="contentful_tam"
        >
          <CustomSearchBox />
          <CustomHits handleModal={handleModal} />
        </InstantSearch>
      </div>
    </div>
  );
};

export default Modal;

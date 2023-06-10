import { useFetch } from "../hooks/useFetch";

import { useCounter } from "../hooks/userCounter";
export const MultipleCustomHooks = () => {
  const { fact, isLoading, hasError } = useFetch('https://catfact.ninja/fact');
  
  return (
    <>
      <h1>catFacts</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">
          Loading CatFacts
        </div>
      ) : (
        <blockquote className="blockquote text-end">
          {fact && fact.fact ? (
            <>
              <p className="mb-1">{fact.fact}</p>
              <footer className="blockquote-footer">Amy Master of ALL Michis</footer>
            </>
          ) : (
            <p className="mb-1">No fact available</p>
          )}
        </blockquote>
      )}
      <div className="text-end">
      <button className="btn btn-success ">other catFact</button>
      </div>
    </>
  );
};

export default MultipleCustomHooks;

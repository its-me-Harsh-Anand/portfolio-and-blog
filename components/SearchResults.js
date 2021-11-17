import Post from "./Post";
import styles from "@/styles/searchresult.module.css"
export default function SearchResults({results}) {

    if(results.length == 0){
        return <></>
    }
  return(
    <div className={styles.searchResultMainDiv}>
        
      <div className={styles.resultsDiv}>
        <h2 className={styles.searchDivHeading}>{results.length} Results</h2>
        {results.map((result, index) => (
          <Post key={index} post={result} searchMenu={true} />
        ))}
      </div>
    </div>
  );
}

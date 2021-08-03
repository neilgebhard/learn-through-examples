const Home = () => {
  return (
    <>
      <h3>Home</h3>
      <hr />
      <h3>What are side effects?</h3>
      <p>As you read through the React docs, you may have stumbled upon the term "side effect". Its a concept that's not specific to React.</p>
      <p>A side effect is when a function modifies something outside its scope.</p>
      <p>If a function isn't deterministic, it has side effects.</p>
      <p>When a function depends on order of operation, it has side effects.</p>
      <p>Examples of side effects include modifying a non-local variable, DOM manipulation, I/O streams, and API calls.</p>
      <p>Functions with side effects are opposite of pure functions. For a given input, pure functions always return the same output.</p>
      <p>Sid effects are not easily visible. If there's a bug, it may be hard to track. If testing is involved, extra hoops may have to be jumped through. </p>
      <p>In this case, simple is better.</p>
      <p>Don't forget the infamous acronym KISS. Keep it simple stupid. ;)</p>
    </>
  );
};

export default Home;

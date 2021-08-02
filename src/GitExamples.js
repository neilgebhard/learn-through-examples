const GitExamples = () => {
  return (
    <>
        <h1>Git</h1>
        <p className="text-secondary">Git boilerplate and examples</p>
        <hr />
        <h3>How to make a pull request</h3>
        <p>1. Find a project you want to contribute to. Fork its github repo.</p>
        <p>2. Clone it to your local system</p>
        <p><code>git clone https://github.com/*YourUserName*/demo</code></p>
        <p>3. Make a new branch</p>
        <p><code>git checkout -b new_branch</code></p>
        <p>4. Make your changes. Push it back to your repo.</p>
        <p><code>git add .</code></p>
        <p><code>git commit -m 'commit message'</code></p>
        <p><code>git remote, then git push origin 'new_branch'</code></p>
        <p><code>git remote add upstream https://github.com/*TheirUserName*/demo</code></p>
        <p>6. Click the "Compare & pull request" button in your github repo. Click "Create pull request" to open a new pull request.</p>
    </>
  );
};

export default GitExamples;

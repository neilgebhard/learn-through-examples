import { Table, Header, Segment } from "semantic-ui-react";

const GitExamples = () => {
  return (
    <>
      <Header as="h1" dividing>
        Git
      </Header>
      <p>There are three "trees" maintained by git:</p>
      <ol>
        <li>
          <strong>WORKING DIRECTORY</strong> - holds the actual files
        </li>
        <li>
          <strong>INDEX/staging area</strong> - files are added to the staging
          area before a commit
        </li>
        <li>
          <strong>HEAD</strong> - points to the last commit
        </li>
      </ol>

      <Header as="h3">Common commands</Header>
      <Table>
        <Table.Row>
          <Table.Cell>git init</Table.Cell>
          <Table.Cell>creates a new git repo in a directory</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git clone /path/to/repo</code>
          </Table.Cell>
          <Table.Cell>create a working copy of local repo</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git clone username@host:/path/to/repository</code>
          </Table.Cell>
          <Table.Cell>create a working copy of a remote server/repo</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git add &lt;filename&gt; || git add *</code>
          </Table.Cell>
          <Table.Cell>add files to INDEX/staging area</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>commit files to the HEAD</Table.Cell>
          <Table.Cell>
            <code>git commit -m "Commit message"</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git push origin master</code>
          </Table.Cell>
          <Table.Cell>
            send changes to remote repo, change 'master' to whatever branch you
            want to push to
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git remote add origin &lt;server&gt;</code>
          </Table.Cell>
          <Table.Cell>
            if you haven't cloned a repo and want to connect repo to remote
            server
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git checkout -b feature_x</code>
          </Table.Cell>
          <Table.Cell>
            create new branch 'feature_x' and switch to it
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git checkout master</code>
          </Table.Cell>
          <Table.Cell>switch back to master</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git branch -d feature_x</code>
          </Table.Cell>
          <Table.Cell>delete branch 'feature_x'</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git push origin &lt;branch&gt;</code>
          </Table.Cell>
          <Table.Cell>push branch to remote repo</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git pull</code>
          </Table.Cell>
          <Table.Cell>fetch and merge remote changes/newest commit</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git merge &lt;branch&gt;</code>
          </Table.Cell>
          <Table.Cell>to merge a branch into your active branch</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            Note: In both cases, git tries to auto-merge changes. If it's not
            obvious, you will need to resolve conflicts by editing the files
            shown by git. After, you can mark them merged by using 'git add
            &lt;filename&gt;'
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git diff &lt;source_branch&gt; &lt;target_branch&gt;</code>
          </Table.Cell>
          <Table.Cell>before merging, you can preview it</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git tag 1.0.0 1b2e1d63ff</code>
          </Table.Cell>
          <Table.Cell>
            tagging releases, 1b2e1d63ff - first 10 character of the commit id
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git log</code>
          </Table.Cell>
          <Table.Cell>get the commit id, shows the repo history</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git log --author=bob</code>
          </Table.Cell>
          <Table.Cell>to see commits of a certain author</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git log --pretty=oneline</code>
          </Table.Cell>
          <Table.Cell>to see a compressed log</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git log --graph --oneline --decorate --all</code>
          </Table.Cell>
          <Table.Cell>to see ASCII art tree of all branches</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git log --name-status</code>
          </Table.Cell>
          <Table.Cell>to see which files have changed</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git log --help</code>
          </Table.Cell>
          <Table.Cell>to see other possible parameters</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git checkout -- &lt;filename&gt;</code>
          </Table.Cell>
          <Table.Cell>
            replaces changes in your working tree with HEAD
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>git fetch origin; git reset --hard origin/master</code>
          </Table.Cell>
          <Table.Cell>
            drop all local changes and commits, fetch the latest history from
            server, point your local master branch at it
          </Table.Cell>
        </Table.Row>
      </Table>

      <Header as="h3">Pull requests</Header>
      <ol>
        <li>Find a project you want to contribute to</li>
        <li>Fork it</li>
        <li>Clone it to your local system</li>
        <li>Make a new branch</li>
        <li>Make your changes</li>
        <li>Push it back to repo</li>
        <li>Click the Compare & pull request button</li>
        <li>Click Create pull request to open a new pull request</li>
      </ol>
      <Segment>
      <p><em>After forking project to your repo..</em></p>
      <p><code>git clone https://github.com/*YourUserName*/demo</code></p>
      <p><code>git checkout -b new_branch</code></p>
      <p><code>git add .</code></p>
      <p><code>git commit -m 'commit message'</code></p>
      <p><code>git remote, then git push origin 'new_branch'</code></p>
      <p><code>git remote add upstream https://github.com/*TheirUserName*/demo</code></p>
      </Segment>
    </>
  );
};

export default GitExamples;

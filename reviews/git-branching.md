# Review 1/5/22 - Git Branching and Merging

## Command Line

`mv <oldpath> <newpath>` move or rename a file or folder

## Git

`git log` displays previous commits
`git show` displays previous commits and the differences that they includes

### Branching and Merging

`git branch` lists all branches
`git branch <name>` creates a branch
`git checkout <name>` switches to a branch
`git checkout -b <name>` creates a new branch and switches to it
`git branch -d <name>` delete a branch
`git merge <branch>` merges a branch into the checked out branch
`git push origin <branchname>` pushes a specified branch to the remote
`git pull origin <branchname>` pulls updates from the remote

### Undoing/Restoring

`git rebase` moves the latest commit from one branch to the original branch
`git reset` move items from the staging area back to the working directory
`git reset --hard` removes items from the staging area and working directory
`git reset HEAD~1` moves the HEAD to the most previous commit
`git restore` restores the file to the version of a previous commit
`git revert` overwrites or creates a new commit to change previous commits

The `.gitignore` file's contents are ignored from git version tracking.

# Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process.

# Submitting Contributions👩‍💻👨‍💻
Below you will find the process and workflow used to review and merge your changes.

## Step 1 : Find an issue
- Take a look at the existing issues or create your **own** issues!
- Wait for the issue to be assigned to you after which you can start working on it.

## Step 2 : Fork the Project
- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile. Keep a reference to the original project in `upstream` remote.
```
$ git clone https://github.com/<your-username>/discord-uiclone
$ cd discord-uiclone
$ git remote add upstream https://github.com/SameerSahu007/discord-uiclone
```

- If you have already forked the project, update your copy before working.
```
$ git remote update
$ git checkout <branch-name>
$ git rebase upstream/<branch-name>
```
## Step 3 : Create a Branch

```
# It will create a new branch with name branch_name and switch to that branch 
$ git checkout -b <branch_name>
```
## Step 4 : Work on the issue 
- Work on the issue you have been assigned
- Add all the code files in their correct folders.
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:
```
# To add all new files to branch branch_name
$ git add .
```
## Step 5 : Commit

- To commit give a descriptive message for the convenience of reveiwer by:
```
# This message get associated with all files you have changed
$ git commit -m "message"
```

## Step 6 : Work Remotely
- Now you are ready to your work to the remote repository.
- When your work is ready and complies with the project conventions, upload your changes to your fork:

```
# To push your work to your remote repository
$ git push -u origin <branch_name>
```

## Step 7 : Pull Request
- Go to your repository in browser and click on compare and pull requests. 
- Then add a title to your pull request.
- Mention the issue number in your PR.
- Give a brief description about the changes.
- Your Pull Request has been submitted and will be reviewed by the moderators and merged.🥳




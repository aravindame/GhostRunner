# Contribution Guide

*Note: this guide has been heavily inspired by [PhantomJS' one](https://github.com/ariya/phantomjs/blob/master/CONTRIBUTING.md).*

**This page describes how to contribute changes to the RoadRunner project.**

Please do **not** create a pull request without reading this guide first. Failure to do so may result in the **rejection** of the pull request.

## For The Impatients

**Work on a feature branch**.
If your changes need to be modified due to some reviews, it is less clutter to tweak an isolated feature branch and push it again.

**Create a ticket in the [issue tracker](https://github.com/aravindame/GhostRunner/issues)**.
This serves as a placeholder for important feedback, review, or any future updates. **Please ensure searching the bugtracker for an already opened issue matching your case before filing a new issue.**

In the commit message(s):

* **Keep the first line short**. Write additional paragraphs if necessary.
* **Reference an opened issue**, by referencing the issue ID prefixed by a `#` and the keyword `refs`, eg. `refs #123`

Sample commit message:

> refs #123 - fixed error message formatting
>
> (optional: a short explanation of what the patch actually does)


### Use Feature Branch

To isolate your change, please avoid working on the master branch. Instead, work on a *feature branch* (often also known as *topic branch*). You can create a new branch (example here crash-fix) off the master branch by using:

    git checkout -b crash-fix master

Refer to your favorite Git tutorial/book for further detailed help.

Some good practices for the feature branch:

* Give it a meaningful name instead of, e.g. `prevent-zero-divide` instead of just `fix`
* Make *granular* and *atomic* commits, e.g. do not mix a typo fix with some major refactoring
* Keep one branch for one specific issue. If you need to work on other unrelated issues, create another branch.

### Write tests

RoadRunner being partly a testing framework, how irrelevant would be to send a pull request with no test? So, please take the time to write and attach tests to your PR. Furthermore, testing with RoadRunner.

## Review and Merge

When your branch is ready, send the pull request.

While it is not always the case, often it is necessary to improve parts of your code in the branch. This is the actual review process.

Here is a check list for the review:

* It does not break the test suite
* There is no typo
* The coding style follows the existing one
* There is a reasonable amount of comment
* The license header is intact
* All examples are still working

# gtd-evernote-toolkit
The Evernote API at <https://dev.evernote.com> is a catastrophe. A convoluted use of Thrift leads to an awkward developer experience, combined with contradictory and outdated docs. For the first time in many years of being a paying Evernote subscriber I'm looking to leave - most likely to [Joplin](https://joplin.cozic.net/).

For now, this is my solution to my new-found GTD love. Export a single notebook, then read the outputted XML into a JSON store, and use jsonpath to query via express.
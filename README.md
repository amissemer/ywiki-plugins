# The Golden Button yWikiPlugin

## Development environment

```bash
# First time only (or when dependencies change)
npm install

# Start the local server
docker-compose up -d

# Set up an automatic build of js files with:
npm run watch
```

## Note

* This project uses [webpack](https://webpack.js.org/guides/get-started/) to compile, concatenate and minify the javascripts and css. 
* The `docs/dist` folder is versioned because the generated bundled scripts and styles are exposed as a [GitHub page](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) to be included in Confluence wiki pages via `HTML` macros. 
* Keep `npm run watch` running, or at least run it once before committing changes to the css or js files, and commit all changes to files in the `docs/dist` folder.

## Usage

See [Continuous Improvement - The Golden Button](https://wiki.hybris.com/display/ps/Continuous+Improvement+-+The+Golden+Button)

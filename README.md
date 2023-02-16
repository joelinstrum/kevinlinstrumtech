# How to update this site

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run deploy`

Builds the app for production to the `build` folder.\
Then the build is merged into the gh-pages branch on git. Git has a hook for gh-pages, so when it sees
a new merge for that branch, it will automatically deploy it to the webserver.
You generally should see the updated site between 30 and 60 seconds after this command has completed

### Updating Text

All of your site logic is within the *src directory
Site assets, like images are within the *public directory

To update the text you see on the site:
1. Navigate to src/constants
2. If editing text on a page, select the appropriate page file, ie "src/constants/pageHomeText"
3. Update as desired -- you can either wrap your text in quotes "like this" or use html tabs <section>like this</section>
4. Save your text when you are done, then commit, push master, deploy like this:
   "git commit -am 'Some commit message'", then "npm push origin master", then "npm run deploy"

### Updating images

So far, the only images you can update are in the Projects page. Here is how to update:
1. Navigate to public/assets/images/projects
2. Create a new folder (not necessary, but makes organizing easier)
3. Click and drag images into folder
4. Navigate to src/constants/galleries.ts
5. The simplest way is to just copy one of the sample galleries and start renaming things
6. Save changed file(s), then "git commit -am 'Some commit message'", then "npm push origin master", then "npm run deploy"
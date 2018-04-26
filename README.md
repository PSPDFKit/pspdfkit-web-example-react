This is an example project for PSPDFKit for Web and how to embed it into a react app.

First, get a trial license on https://pspdfkit.com/try/.


### Setup

Install the `pspdfkit` npm package.

```bash
npm install --save https://customers.pspdfkit.com/npm/TRIAL-npm-url-received-via-email
```

Bootstrap the project by installing all the other dependencies. In this example we use Create React App.

```bash
npm install
```

Now that everything is installed let's define the PSPDFKit for Web LICENSE KEY.

Open up the `package.json` file from this repo, find and replace all the occurrencies of `YOUR_LICENSE_KEY_GOES_HERE` with the license key that you received via e-mail.

Done, we are ready to launch the app! 🎉

To run the app in development mode run:

```bash
npm run start
```

To create a production build of the app and serve it:

```bash
npm run build
serve -s build
```

Enjoy 🍕


### React component

The React component which implements the PSPDFKit for Web integration can be found at `src/components/pspdfkit/index.js`.

To run this example via Create React App we also had to configure the `baseUrl` that PSPDFKit for Web uses to load its artifacts and base css. Please take a look at `src/App.js`.

In order to make the files above available we had to copy them from the `node_modules/pspdfkit/dist` folder using a script which you can find at `scripts/copy-pspdfkit-files.js`.

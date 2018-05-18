# PSPDFKit for Web Example – React

This example shows how to integrate [PSPDFKit for Web](https://pspdfkit.com/web/) into a React app.

## Request a License

You'll need a license for PSPDFKit for Web. If you don't already have one
you can [request a free trial here](https://pspdfkit.com/try/).

## Setup

Install the `pspdfkit` npm package.

```bash
npm install --save https://customers.pspdfkit.com/npm/YOUR_NPM_KEY_GOES_HERE
```

Bootstrap the project by installing all the other dependencies. In this example we use Create React App.

```bash
npm install
```

## Configure

Now that everything is installed we need to configure the app to use our [PSPDFKit for Web license key](#request-a-license).

Open up the `package.json` file from this repo, find and replace all the occurrences of `YOUR_LICENSE_KEY_GOES_HERE` with the license key that you received via e-mail.

## Run

Now we're ready to run the app! 🎉

To run the app in development mode:

```bash
npm run start
```

To create a production build of the app and serve it:

```bash
npm run build
serve -s build
```

Enjoy 🍕


## React Component

The React component which implements the PSPDFKit for Web integration can be found at `src/components/pspdfkit/index.js`.

To run this example via Create React App we also had to configure the `baseUrl` that PSPDFKit for Web uses to load its artifacts and base css. Please take a look at `src/App.js`.

In order to make the files above available we had to copy them from the `node_modules/pspdfkit/dist` folder using a script which you can find at `scripts/copy-pspdfkit-files.js`.

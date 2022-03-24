# PSPDFKit for Web Example – React.js

This example shows how to integrate [PSPDFKit for Web](https://pspdfkit.com/web/) into a React app created with Create React App.

## Prerequisites

- [Node.js](http://nodejs.org/)

## Support and Issues

Are you evaluating our SDK? That's great, we're happy to help out!
To make sure this is fast, please use a work email and have someone from your company fill out our sales form: https://pspdfkit.com/sales/

## Getting Started

Clone the repo:

```bash
git clone https://github.com/PSPDFKit/pspdfkit-web-example-react.git
cd pspdfkit-web-example-react
```

Install the project dependencies with `npm`:

```bash
npm install
```

## Running the Example

We are ready to launch the app! 🎉

To run the app in development mode:

```bash
npm start
```

To create a production build of the app and serve it:

```bash
npm run build
serve -s build
```

Enjoy 🍕

## React Component

The React component which implements the PSPDFKit for Web integration can be found at `src/components/PdfViewerComponent`.

In order to make the files above available we had to copy them from the `node_modules/pspdfkit/dist` folder using a script which you can find at `scripts/copy-pspdfkit-files`.

## License

This software is licensed under a [modified BSD license](LICENSE).

## Contributing

Please ensure [you have signed our CLA](https://pspdfkit.com/guides/web/current/miscellaneous/contributing/) so that we can
accept your contributions.

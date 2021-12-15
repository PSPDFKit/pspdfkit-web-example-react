try {
  require("pspdfkit");
} catch (error) {
  if (!/cannot find module/i.test(error.message)) {
    return;
  }
  console.log(
    `This application requires you to install PSPDFKit for Web manually using your unique customer or trial url.
For further instructions please refer to our online guide available at:

https://pspdfkit.com/guides/web/current/standalone/adding-to-your-project#toc_install-with-npm`
  );
  process.exit(1);
}

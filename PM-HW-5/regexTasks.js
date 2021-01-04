// Вызов функций в конце файла(console.log).
const getHEXValues = str => str.match(/#([0-9a-f]{3}){1,2}/gi);

const getNumbers = str => str.match(/\+\s\(380\)\s0(6[3678]|9[356789]|73|50)\s\d{3}(\s\d{2}){2}/g);

const replaceTags = str => str.replace(/<h1>/g, '<h2/>');

const getScripts = str => str.match(/<script.*>(.|\n|\r)*<\/script>/g);

const htmlCode = '<!DOCTYPE html>\n' +
  '<html lang="en">\n' +
  '\n' +
  '<head>\n' +
  '  <meta charset="utf-8">\n' +
  '  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n' +
  '  <meta name="theme-color" content="#000000">\n' +
  '  <!--\n' +
  '      manifest.json provides metadata used when your web app is added to the\n' +
  '      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/\n' +
  '    -->\n' +
  '  <link rel="manifest" href="%PUBLIC_URL%/manifest.json">\n' +
  '  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">\n' +
  '  <h1> <h1>\n' +
  '\n' +
  '  <script type="text/javascript">\n' +
  '    console.log(\'gtm\')\n' +
  '    </script>\n' +
  '  <!--\n' +
  '      Notice the use of %PUBLIC_URL% in the tags above.\n' +
  '      It will be replaced with the URL of the \\`public\\` folder during the build.\n' +
  '      Only files inside the \\public\\` folder can be referenced from the HTML.\n' +
  '\n' +
  '      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will\n' +
  '      work correctly both with client-side routing and a non-root public URL.\n' +
  '      Learn how to configure a non-root public URL by running \\`npm run build\\`.\n' +
  '    -->\n' +
  '  <title>React App</title>\n' +
  '\n' +
  '  <style>\n' +
  '    @font-face {\n' +
  '      font-family: \'Antic Slab\';\n' +
  '      font-style: normal;\n' +
  '      font-weight: 400;\n' +
  '      src: local(\'Antic Slab Regular\'), local(\'AnticSlab-Regular\'), url(/antic-slab.woff2) format(\'woff2\');\n' +
  '      unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n' +
  '    }\n' +
  '    *, *:before, *:after { box-sizing: border-box; }\n' +
  '    html, body { height: 100vh; }\n' +
  '    body { font-family: \'Antic Slab\', serif; margin: 0 }\n' +
  '    hr { width: 100%; }\n' +
  '\n' +
  '    .friends .header {\n' +
  '      display: flex;\n' +
  '      justify-content: space-around;\n' +
  '      align-items: center;\n' +
  '      color: #eee;\n' +
  '    }\n' +
  '\n' +
  '    .friends .header > div {\n' +
  '      display: flex;\n' +
  '      flex-direction: column;\n' +
  '      justify-content: center;\n' +
  '      text-align: center;\n' +
  '    }\n' +
  '\n' +
  '\n' +
  '    .friends .header > nav {\n' +
  '      flex: 1;\n' +
  '    }\n' +
  '\n' +
  '    .friends .header > nav ul {\n' +
  '      display: flex;\n' +
  '      justify-content: space-around;\n' +
  '      list-style: none;\n' +
  '      padding-left: 0;\n' +
  '    }\n' +
  '  </style>\n' +
  '</head>\n' +
  '\n' +
  '<body>\n' +
  '  <noscript>\n' +
  '    You need to enable JavaScript to run this app.\n' +
  '  </noscript>\n' +
  '  <div id="⚛️" style="height: 100%">\n' +
  '    <h1>Contacts page <h1>\n' +
  '    <h1>Feeel free to contact<h1>\n' +
  '    <h1>Support <h1>\n' +
  '        \n' +
  '        \n' +
  '    <h2>H2 tag</h2>\n' +
  '\n' +
  '    <span>\n' +
  '        If you have any questions, please contact:\n' +
  '        <p><a href="mailto:support@gmail.com">Mail</a></p>\n' +
  '        <p><a href="tel:067-777-77-77">+ (380) 067 777 77 77 </a></p>\n' +
  '        <p><a href="tel:097-777-77-77">+ (380) 097 777 77 77 </a></p>\n' +
  '\n' +
  '\n' +
  '    </span>\n' +
  '\n' +
  '  </div>\n' +
  '  <!--\n' +
  '      This HTML file is a template.\n' +
  '      If you open it directly in the browser, you will see an empty page.\n' +
  '\n' +
  '      You can add webfonts, meta tags, or analytics to this file.\n' +
  '      The build step will place the bundled scripts into the <body> tag.\n' +
  '\n' +
  '    -->\n' +
  '</body>\n' +
  '</html>'

console.log(getHEXValues(htmlCode));
console.log(getNumbers(htmlCode));
console.log(getScripts(htmlCode));
console.log(replaceTags(htmlCode));


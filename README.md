

Problem with zscaler

```
npm ERR! code 1
npm ERR! path /Users/pcwhitt1/case/dissertation-presentation/reveal.js-master/node_modules/puppeteer
npm ERR! command failed
npm ERR! command sh -c node install.mjs
npm ERR! **INFO** Skipping Firefox download as instructed.
npm ERR! Error: ERROR: Failed to set up chrome v129.0.6668.100! Set "PUPPETEER_SKIP_DOWNLOAD" env variable to skip download.
npm ERR!     at downloadBrowser (file:///Users/pcwhitt1/case/dissertation-presentation/reveal.js-master/node_modules/puppeteer/lib/esm/puppeteer/node/install.js:26:15)
npm ERR!     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
npm ERR!     at async Promise.all (index 0)
npm ERR!     at async downloadBrowsers (file:///Users/pcwhitt1/case/dissertation-presentation/reveal.js-master/node_modules/puppeteer/lib/esm/puppeteer/node/install.js:84:9) {
npm ERR!   [cause]: Error: unable to get local issuer certificate
npm ERR!       at TLSSocket.onConnectSecure (node:_tls_wrap:1674:34)
npm ERR!       at TLSSocket.emit (node:events:519:28)
npm ERR!       at TLSSocket._finishInit (node:_tls_wrap:1085:8)
npm ERR!       at ssl.onhandshakedone (node:_tls_wrap:871:12) {
npm ERR!     code: 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY'
npm ERR!   }
npm ERR! }

npm ERR! A complete log of this run can be found in: /Users/pcwhitt1/.npm/_logs/2025-03-06T12_44_51_959Z-debug-0.log

```

```
export NODE_EXTRA_CA_CERTS=/Users/pcwhitt1/Downloads/ZscalerRootCertificate/ZscalerRootCertificate.pem
```

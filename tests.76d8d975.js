// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"it2cv":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e5bf966376d8d975";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dqBLm":[function(require,module,exports) {
/* eslint-disable array-element-newline */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _qunit = require("qunit");
var _qunitDefault = parcelHelpers.interopDefault(_qunit);
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
var _banksJs = require("./banks.js");
var _converterJs = require("./converter.js");
(0, _qunitDefault.default).config.autostart = false;
(0, _converterJs.initConverter)(()=>{
    (0, _qunitDefault.default).start();
});
(0, _qunitDefault.default).module("Convert singles lines");
(0, _qunitDefault.default).test("convertBanquePostale", (assert)=>{
    let line;
    line = (0, _banksJs.convertBanquePostale)([
        "25/01/2015",
        "TRANSACTION",
        "-500,00",
        ""
    ]);
    assert.deepEqual(line, "01-25-15;;;;TRANSACTION;-500,00;;", "Amount with a comma.");
    line = (0, _banksJs.convertBanquePostale)([
        "25/01/2015",
        "TRANSACTION",
        "1000.59",
        ""
    ]);
    assert.deepEqual(line, "01-25-15;;;;TRANSACTION;1000.59;;", "Amount with a dot.");
});
(0, _qunitDefault.default).test("convertBanquePostale - pay modes", (assert)=>{
    let line;
    line = (0, _banksJs.convertBanquePostale)([
        "15/12/2014",
        "CHEQUE N 2224444",
        "-100,99",
        ""
    ]);
    assert.deepEqual(line, "12-15-14;2;;;CHEQUE N 2224444;-100,99;;", "Cheque - CHEQUE N");
    line = (0, _banksJs.convertBanquePostale)([
        "11/10/2014",
        "VIREMENT DE JEAN DUPONT REFERENCE : 123456789",
        "11,70",
        "85,27"
    ]);
    assert.deepEqual(line, "10-11-14;4;;;VIREMENT DE JEAN DUPONT REFERENCE : 123456789;11,70;;", "Transfer - VIREMENT DE");
    line = (0, _banksJs.convertBanquePostale)([
        "25/10/2014",
        "VIREMENT EMIS PAR JEAN DUPONT",
        "101,70",
        "85,27"
    ]);
    assert.deepEqual(line, "10-25-14;4;;;VIREMENT EMIS PAR JEAN DUPONT;101,70;;", "Transfer - VIREMENT EMIS");
    line = (0, _banksJs.convertBanquePostale)([
        "25/10/1999",
        "VIREMENT POUR BINNETTE",
        "45,20",
        "85,27"
    ]);
    assert.deepEqual(line, "10-25-99;4;;;VIREMENT POUR BINNETTE;45,20;;", "Transfer - VIREMENT POUR");
    line = (0, _banksJs.convertBanquePostale)([
        "27/07/2013",
        "ACHAT CB GEANT CASINO     26.07.13 CARTE NUMERO                XYZ  ",
        "-18,26",
        "-23,54"
    ]);
    assert.deepEqual(line, "07-27-13;6;;;ACHAT CB GEANT CASINO 26.07.13 CARTE NUMERO XYZ;-18,26;;", "Debit card - ACHAT CB");
    line = (0, _banksJs.convertBanquePostale)([
        "27/07/2013",
        "COMMISSION PAIEMENT PAR CARTE USA SELLER",
        "-18,26",
        "-23,54"
    ]);
    assert.deepEqual(line, "07-27-13;6;;;COMMISSION PAIEMENT PAR CARTE USA SELLER;-18,26;;", "Debit card - COMMISSION PAIEMENT PAR CARTE");
    line = (0, _banksJs.convertBanquePostale)([
        "27/07/2013",
        "COMMISSION RETRAIT PAR CARTE DAB PARIS FRANCE",
        "-18,26",
        "-23,54"
    ]);
    assert.deepEqual(line, "07-27-13;6;;;COMMISSION RETRAIT PAR CARTE DAB PARIS FRANCE;-18,26;;", "Debit card - COMMISSION RETRAIT PAR CARTE");
    line = (0, _banksJs.convertBanquePostale)([
        "12/10/2014",
        "CARTE X1234    12/10/14 A 12H21 RETRAIT DAB LA BANQUE POSTALE  ",
        "-150,00",
        "-700,15"
    ]);
    assert.deepEqual(line, "10-12-14;6;;;CARTE X1234 12/10/14 A 12H21 RETRAIT DAB LA BANQUE POSTALE;-150,00;;", "Debit card - RETRAIT DAB");
    line = (0, _banksJs.convertBanquePostale)([
        "21/11/2014",
        "TELEREGLEMENT DE REGLEMENT IMPOT 1234",
        "-253,00",
        "-49,12"
    ]);
    assert.deepEqual(line, "11-21-14;6;;;TELEREGLEMENT DE REGLEMENT IMPOT 1234;-253,00;;", "Debit card - TELEREGLEMENT DE REGLEMENT IMPOT");
    line = (0, _banksJs.convertBanquePostale)([
        "21/11/2014",
        "CREDIT CARTE BANCAIRE CARREFOUR",
        "11,59",
        "-49,12"
    ]);
    assert.deepEqual(line, "11-21-14;6;;;CREDIT CARTE BANCAIRE CARREFOUR;11,59;;", "Debit card - CREDIT CARTE BANCAIRE");
    line = (0, _banksJs.convertBanquePostale)([
        "04/11/2018",
        "RETRAIT THISBANK 04.11.18 EUR 20,00 CARTE NO 666",
        "20,00",
        ""
    ]);
    assert.deepEqual(line, "11-04-18;6;;;RETRAIT THISBANK 04.11.18 EUR 20,00 CARTE NO 666;20,00;;", "Debit card - RETRAIT ");
    line = (0, _banksJs.convertBanquePostale)([
        "04/11/2018",
        "COMMISSION PAIEMENT PAR CARTE 04.11.18 EUR 0,99 CARTE NO 777",
        "0,99",
        ""
    ]);
    assert.deepEqual(line, "11-04-18;6;;;COMMISSION PAIEMENT PAR CARTE 04.11.18 EUR 0,99 CARTE NO 777;0,99;;", "Debit card - COMMISSION PAIEMENT PAR CARTE[space]");
    line = (0, _banksJs.convertBanquePostale)([
        "04/11/2018",
        "COMMISSION PAIEMENT PAR CARTE",
        "0,99",
        ""
    ]);
    assert.deepEqual(line, "11-04-18;6;;;COMMISSION PAIEMENT PAR CARTE;0,99;;", "Debit card - COMMISSION PAIEMENT PAR CARTE");
    line = (0, _banksJs.convertBanquePostale)([
        "04/11/2014",
        "PRELEVEMENT DE OPERATEUR TELEPHONE MOBILE",
        "-10,00",
        "-22,44"
    ]);
    assert.deepEqual(line, "11-04-14;7;;;PRELEVEMENT DE OPERATEUR TELEPHONE MOBILE;-10,00;;", "Standing order - PRELEVEMENT");
    line = (0, _banksJs.convertBanquePostale)([
        "18/11/2014",
        "REMISE DE CHEQUE N  1114444 DE MR JEAN DUPONT",
        "100,00",
        ""
    ]);
    assert.deepEqual(line, "11-18-14;9;;;REMISE DE CHEQUE N 1114444 DE MR JEAN DUPONT;100,00;;", "Deposit - REMISE DE CHEQUE N");
    line = (0, _banksJs.convertBanquePostale)([
        "18/11/2014",
        "REMISE DE CHEQUES DE MR JEAN DUPONT",
        "100,00",
        ""
    ]);
    assert.deepEqual(line, "11-18-14;9;;;REMISE DE CHEQUES DE MR JEAN DUPONT;100,00;;", "Deposit - REMISE DE CHEQUE N");
    line = (0, _banksJs.convertBanquePostale)([
        "18/11/2014",
        "VERSEMENT EFFECTUE DE MR JEAN DUPONT",
        "100,00",
        ""
    ]);
    assert.deepEqual(line, "11-18-14;9;;;VERSEMENT EFFECTUE DE MR JEAN DUPONT;100,00;;", "Deposit - REMISE DE CHEQUE N");
    line = (0, _banksJs.convertBanquePostale)([
        "18/11/2014",
        "COTISATION TRIMESTRIELLE DE VOTRE FORMULE DE COMPTE",
        "1,00",
        ""
    ]);
    assert.deepEqual(line, "11-18-14;10;;;COTISATION TRIMESTRIELLE DE VOTRE FORMULE DE COMPTE;1,00;;", "FI fee - COTISATION TRIMESTRIELLE DE VOTRE FORMULE DE COMPTE");
});
(0, _qunitDefault.default).test("convertBoobank", (assert)=>{
    let line;
    line = (0, _banksJs.convertBoobank)([
        "",
        "2014-08-29",
        "",
        "",
        "",
        "",
        "",
        "memo1",
        "-11,20"
    ]);
    assert.deepEqual(line, "08-29-14;;;;memo1;-11,20;;", "Amount with a comma.");
    line = (0, _banksJs.convertBoobank)([
        "",
        "2014-08-29",
        "",
        "",
        "",
        "",
        "",
        "memo1",
        "12.20"
    ]);
    assert.deepEqual(line, "08-29-14;;;;memo1;12.20;;", "Amount with a dot.");
});
(0, _qunitDefault.default).test("convertPaypal", (assert)=>{
    let line;
    line = (0, _banksJs.convertPaypal)([
        "25/01/2015",
        "",
        "",
        "memo3",
        "memo2",
        "",
        "memo5",
        "",
        "",
        "-200,39",
        "",
        "",
        "memo4",
        "",
        "",
        "memo1",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]);
    assert.deepEqual(line, "01-25-15;;;;memo1, memo2, memo3, memo4, memo5;-200,39;;", "Amount with a comma.");
    line = (0, _banksJs.convertPaypal)([
        "25/01/2015",
        "",
        "",
        "memo3",
        "memo2",
        "",
        "memo5",
        "",
        "",
        "1099.99",
        "",
        "",
        "memo4",
        "",
        "",
        "memo1",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]);
    assert.deepEqual(line, "01-25-15;;;;memo1, memo2, memo3, memo4, memo5;1099.99;;", "Amount with a dot.");
});
(0, _qunitDefault.default).module("Convert single lines with errors");
(0, _qunitDefault.default).test("convertBanquePostale", (assert)=>{
    assert.throws(()=>{
        (0, _banksJs.convertBanquePostale)([
            "25/13/2015",
            "TRANSACTION",
            "-500,00",
            ""
        ]);
    }, new Error("Invalid date: 25/13/2015"), "Wrong date 25/13/2015.");
});
(0, _qunitDefault.default).test("convertBoobank", (assert)=>{
    assert.throws(()=>{
        (0, _banksJs.convertBoobank)([
            "",
            "2015-13-20",
            "",
            "",
            "memo2",
            "",
            "",
            "memo1",
            "-10,20"
        ]);
    }, new Error("Invalid date: 2015-13-20"), "Wrong date 2015-13-20.");
});
(0, _qunitDefault.default).test("convertPaypal", (assert)=>{
    assert.throws(()=>{
        (0, _banksJs.convertPaypal)([
            "30/13/2015",
            "",
            "",
            "memo3",
            "memo2",
            "",
            "memo5",
            "",
            "",
            "-200,39",
            "",
            "",
            "memo4",
            "",
            "",
            "memo1",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ]);
    }, new Error("Invalid date: 30/13/2015"), "Wrong date 30/13/2015.");
});
(0, _qunitDefault.default).module("Convert whole files");
(0, _qunitDefault.default).test("Banque Postale - csv file", (assert)=>{
    const done = assert.async();
    const inputFilename = "banquePostale.csv";
    const expectedFilename = "banquePostale_converted.csv";
    let converted;
    let expected;
    (0, _jqueryDefault.default).when((0, _jqueryDefault.default).get("data/tests/" + inputFilename, (data)=>{
        const index = (0, _banksJs.getBankIndexByName)("Banque Postale");
        converted = (0, _converterJs.convertData)(index, data, inputFilename);
    }), (0, _jqueryDefault.default).get("data/tests/" + expectedFilename, (data)=>{
        expected = {
            status: true,
            data,
            message: "",
            errors: []
        };
    })).then(()=>{
        assert.deepEqual(converted.data.split("\n").length, 100, "converted.length = 100");
        assert.deepEqual(converted.status, expected.status, "Status is true");
        assert.deepEqual(converted.data.replaceAll("\r\n", "\n").split("\n"), expected.data.replaceAll("\r\n", "\n").split("\n"), "Same data");
        assert.deepEqual(converted.message, expected.message, "Message is empty");
        assert.deepEqual(converted.errors, expected.errors, "No errors");
        done();
    });
});
(0, _qunitDefault.default).test("Banque Postale - tsv file", (assert)=>{
    const done = assert.async();
    const inputFilename = "banquePostale.tsv";
    const expectedFilename = "banquePostale_converted.csv";
    let converted;
    let expected;
    (0, _jqueryDefault.default).when((0, _jqueryDefault.default).get("data/tests/" + inputFilename, (data)=>{
        const index = (0, _banksJs.getBankIndexByName)("Banque Postale");
        converted = (0, _converterJs.convertData)(index, data, inputFilename);
    }), (0, _jqueryDefault.default).get("data/tests/" + expectedFilename, (data)=>{
        expected = {
            status: true,
            data,
            message: "",
            errors: []
        };
    })).then(()=>{
        assert.deepEqual(converted.data.split("\n").length, 100, "converted.length = 100");
        assert.deepEqual(converted.status, expected.status, "Status is true");
        assert.deepEqual(converted.data.replaceAll("\r\n", "\n").split("\n"), expected.data.replaceAll("\r\n", "\n").split("\n"), "Same data");
        assert.deepEqual(converted.message, expected.message, "Message is empty");
        assert.deepEqual(converted.errors, expected.errors, "No errors");
        done();
    });
});
(0, _qunitDefault.default).test("BNP Paribas Fortis - csv file", (assert)=>{
    const done = assert.async();
    const inputFilename = "bnpParibasFortis.csv";
    const expectedFilename = "bnpParibasFortis_converted.csv";
    let converted;
    let expected;
    (0, _jqueryDefault.default).when((0, _jqueryDefault.default).get("data/tests/" + inputFilename, (data)=>{
        const index = (0, _banksJs.getBankIndexByName)("BNP Paribas Fortis");
        converted = (0, _converterJs.convertData)(index, data, inputFilename);
    }), (0, _jqueryDefault.default).get("data/tests/" + expectedFilename, (data)=>{
        expected = {
            status: true,
            data,
            message: "",
            errors: []
        };
    })).then(()=>{
        assert.deepEqual(converted.data.split("\n").length, 17, "converted.length = 17");
        assert.deepEqual(converted.status, expected.status, "Status is true");
        assert.deepEqual(converted.data.replaceAll("\r\n", "\n").split("\n"), expected.data.replaceAll("\r\n", "\n").split("\n"), "Same data");
        assert.deepEqual(converted.message, expected.message, "Message is empty");
        assert.deepEqual(converted.errors, expected.errors, "No errors");
        done();
    });
});
(0, _qunitDefault.default).test("Boobank - csv file", (assert)=>{
    const done = assert.async();
    const inputFilename = "boobank.csv";
    const expectedFilename = "boobank_converted.csv";
    let converted;
    let expected;
    (0, _jqueryDefault.default).when((0, _jqueryDefault.default).get("data/tests/" + inputFilename, (data)=>{
        const index = (0, _banksJs.getBankIndexByName)("Boobank");
        converted = (0, _converterJs.convertData)(index, data, inputFilename);
    }), (0, _jqueryDefault.default).get("data/tests/" + expectedFilename, (data)=>{
        expected = {
            status: true,
            data,
            message: "",
            errors: []
        };
    })).then(()=>{
        assert.deepEqual(converted.data.split("\n").length, 50, "converted.length = 50");
        assert.deepEqual(converted.status, expected.status, "Status is true");
        assert.deepEqual(converted.data.replaceAll("\r\n", "\n").split("\n"), expected.data.replaceAll("\r\n", "\n").split("\n"), "Same data");
        assert.deepEqual(converted.message, expected.message, "Message is empty");
        assert.deepEqual(converted.errors, expected.errors, "No errors");
        done();
    });
});
(0, _qunitDefault.default).test("Paypal - csv file", (assert)=>{
    const done = assert.async();
    const inputFilename = "paypal.csv";
    const expectedFilename = "paypal_converted.csv";
    let converted;
    let expected;
    (0, _jqueryDefault.default).when((0, _jqueryDefault.default).get("data/tests/" + inputFilename, (data)=>{
        const index = (0, _banksJs.getBankIndexByName)("PayPal");
        converted = (0, _converterJs.convertData)(index, data, inputFilename);
    }), (0, _jqueryDefault.default).get("data/tests/" + expectedFilename, (data)=>{
        expected = {
            status: true,
            data,
            message: "",
            errors: []
        };
    })).then(()=>{
        assert.deepEqual(converted.data.split("\n").length, 30, "converted.length = 30");
        assert.deepEqual(converted.status, expected.status, "Status is true");
        assert.deepEqual(converted.data.replaceAll("\r\n", "\n").split("\n"), expected.data.replaceAll("\r\n", "\n").split("\n"), "Same data");
        assert.deepEqual(converted.message, expected.message, "Message is empty");
        assert.deepEqual(converted.errors, expected.errors, "No errors");
        done();
    });
});
(0, _qunitDefault.default).test("Paypal - txt file", (assert)=>{
    const done = assert.async();
    const inputFilename = "paypal.txt";
    const expectedFilename = "paypal_converted.csv";
    let converted;
    let expected;
    (0, _jqueryDefault.default).when((0, _jqueryDefault.default).get("data/tests/" + inputFilename, (data)=>{
        const index = (0, _banksJs.getBankIndexByName)("PayPal");
        converted = (0, _converterJs.convertData)(index, data, inputFilename);
    }), (0, _jqueryDefault.default).get("data/tests/" + expectedFilename, (data)=>{
        expected = {
            status: true,
            data,
            message: "",
            errors: []
        };
    })).then(()=>{
        assert.deepEqual(converted.data.split("\n").length, 30, "converted.length = 30");
        assert.deepEqual(converted.status, expected.status, "Status is true");
        assert.deepEqual(converted.data.replaceAll("\r\n", "\n").split("\n"), expected.data.replaceAll("\r\n", "\n").split("\n"), "Same data");
        assert.deepEqual(converted.message, expected.message, "Message is empty");
        assert.deepEqual(converted.errors, expected.errors, "No errors");
        done();
    });
});
(0, _qunitDefault.default).module("Convert whole files with errors");
(0, _qunitDefault.default).test("Banque Postale - csv file", (assert)=>{
    const done = assert.async();
    const inputFilename = "banquePostaleWithErrors.csv";
    const expectedFilename = "banquePostaleWithErrors_converted.csv";
    let converted;
    let expected;
    (0, _jqueryDefault.default).when((0, _jqueryDefault.default).get("data/tests/" + inputFilename, (data)=>{
        const index = (0, _banksJs.getBankIndexByName)("Banque Postale");
        converted = (0, _converterJs.convertData)(index, data, inputFilename);
    }), (0, _jqueryDefault.default).get("data/tests/" + expectedFilename, (data)=>{
        expected = {
            status: true,
            data,
            message: "",
            errors: [
                'Error on line: 38. Error: Invalid date:            "SANS DATE NI COMA    "',
                "Error on line: 58. Error: Line does not have enough fields. Found: 2. Minimum: 3.",
                "Error on line: 65. Error: Line does not have enough fields. Found: 1. Minimum: 3.",
                "Error on line: 80. Error: Invalid date:           ",
                "Error on line: 98. Error: Invalid date: 29/02/2003"
            ]
        };
    })).then(()=>{
        assert.deepEqual(converted.data.split("\n").length, 100, "converted.length = 100");
        assert.deepEqual(converted.status, expected.status, "Status is true");
        assert.deepEqual(converted.data.replaceAll("\r\n", "\n").split("\n"), expected.data.replaceAll("\r\n", "\n").split("\n"), "Same data");
        assert.deepEqual(converted.message, expected.message, "Message is empty");
        assert.deepEqual(converted.errors, expected.errors, "No errors");
        done();
    });
});
(0, _qunitDefault.default).module("Optimize XHB");
(0, _qunitDefault.default).test("Example - XHB file", (assert)=>{
    const done = assert.async();
    const inputFilename = "example.xhb";
    const expectedFilename = "example_optimized.xhb";
    let optimized;
    let expected;
    (0, _jqueryDefault.default).when((0, _jqueryDefault.default).get("data/tests/" + inputFilename, (data)=>{
        optimized = (0, _converterJs.optimizeData)(data);
    }), (0, _jqueryDefault.default).get("data/tests/" + expectedFilename, (data)=>{
        expected = data;
    })).then(()=>{
        assert.deepEqual(optimized.split("\n").length, expected.split("\n").length, "Same length");
        assert.deepEqual(optimized.replaceAll("\r\n", "\n").split("\n"), expected.replaceAll("\r\n", "\n").split("\n"), "Same data");
        done();
    });
});

},{"qunit":"lXIlH","jquery":"hgMhh","./banks.js":"2iomu","./converter.js":"2UT5m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lXIlH":[function(require,module,exports) {
var global = arguments[3];
var process = require("25307fcef4c861b3");
/*!
 * QUnit 2.11.3
 * https://qunitjs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-10-05T01:34Z
 */ (function(global$1) {
    "use strict";
    function _interopDefaultLegacy(e) {
        return e && typeof e === "object" && "default" in e ? e : {
            "default": e
        };
    }
    var global__default = /*#__PURE__*/ _interopDefaultLegacy(global$1);
    var window$1 = global__default["default"].window;
    var self$1 = global__default["default"].self;
    var console = global__default["default"].console;
    var setTimeout$1 = global__default["default"].setTimeout;
    var clearTimeout = global__default["default"].clearTimeout;
    var document$1 = window$1 && window$1.document;
    var navigator = window$1 && window$1.navigator;
    var localSessionStorage = function() {
        var x = "qunit-test-string";
        try {
            global__default["default"].sessionStorage.setItem(x, x);
            global__default["default"].sessionStorage.removeItem(x);
            return global__default["default"].sessionStorage;
        } catch (e) {
            return undefined;
        }
    }(); // Support IE 9-10: Fallback for fuzzysort.js used by /reporter/html.js
    if (!global__default["default"].Map) global__default["default"].Map = function StringMap() {
        var store = Object.create(null);
        this.get = function(strKey) {
            return store[strKey];
        };
        this.set = function(strKey, val) {
            store[strKey] = val;
            return this;
        };
        this.clear = function() {
            store = Object.create(null);
        };
    };
    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
            return typeof obj;
        };
        else _typeof = function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
        var it;
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it) o = it;
                var i = 0;
                var F = function() {};
                return {
                    s: F,
                    n: function() {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function(e) {
                        throw e;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return {
            s: function() {
                it = o[Symbol.iterator]();
            },
            n: function() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function(e) {
                didErr = true;
                err = e;
            },
            f: function() {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally{
                    if (didErr) throw err;
                }
            }
        };
    }
    // This allows support for IE 9, which doesn't have a console
    // object if the developer tools are not open.
    var Logger = {
        warn: console ? console.warn.bind(console) : function() {}
    };
    var toString = Object.prototype.toString;
    var hasOwn = Object.prototype.hasOwnProperty;
    var now = Date.now || function() {
        return new Date().getTime();
    };
    var hasPerformanceApi = detectPerformanceApi();
    var performance = hasPerformanceApi ? window$1.performance : undefined;
    var performanceNow = hasPerformanceApi ? performance.now.bind(performance) : now;
    function detectPerformanceApi() {
        return window$1 && typeof window$1.performance !== "undefined" && typeof window$1.performance.mark === "function" && typeof window$1.performance.measure === "function";
    }
    function measure(comment, startMark, endMark) {
        // `performance.measure` may fail if the mark could not be found.
        // reasons a specific mark could not be found include: outside code invoking `performance.clearMarks()`
        try {
            performance.measure(comment, startMark, endMark);
        } catch (ex) {
            Logger.warn("performance.measure could not be executed because of ", ex.message);
        }
    }
    var defined = {
        document: window$1 && window$1.document !== undefined,
        setTimeout: setTimeout$1 !== undefined
    }; // Returns a new Array with the elements that are in a but not in b
    function diff(a, b) {
        var i, j, result = a.slice();
        for(i = 0; i < result.length; i++){
            for(j = 0; j < b.length; j++)if (result[i] === b[j]) {
                result.splice(i, 1);
                i--;
                break;
            }
        }
        return result;
    }
    /**
	 * Determines whether an element exists in a given array or not.
	 *
	 * @method inArray
	 * @param {Any} elem
	 * @param {Array} array
	 * @return {Boolean}
	 */ function inArray(elem, array) {
        return array.indexOf(elem) !== -1;
    }
    /**
	 * Makes a clone of an object using only Array or Object as base,
	 * and copies over the own enumerable properties.
	 *
	 * @param {Object} obj
	 * @return {Object} New object with only the own properties (recursively).
	 */ function objectValues(obj) {
        var key, val, vals = is("array", obj) ? [] : {};
        for(key in obj)if (hasOwn.call(obj, key)) {
            val = obj[key];
            vals[key] = val === Object(val) ? objectValues(val) : val;
        }
        return vals;
    }
    function extend(a, b, undefOnly) {
        for(var prop in b)if (hasOwn.call(b, prop)) {
            if (b[prop] === undefined) delete a[prop];
            else if (!(undefOnly && typeof a[prop] !== "undefined")) a[prop] = b[prop];
        }
        return a;
    }
    function objectType(obj) {
        if (typeof obj === "undefined") return "undefined";
         // Consider: typeof null === object
        if (obj === null) return "null";
        var match = toString.call(obj).match(/^\[object\s(.*)\]$/), type = match && match[1];
        switch(type){
            case "Number":
                if (isNaN(obj)) return "nan";
                return "number";
            case "String":
            case "Boolean":
            case "Array":
            case "Set":
            case "Map":
            case "Date":
            case "RegExp":
            case "Function":
            case "Symbol":
                return type.toLowerCase();
            default:
                return _typeof(obj);
        }
    } // Safe object type checking
    function is(type, obj) {
        return objectType(obj) === type;
    } // Based on Java's String.hashCode, a simple but not
    // rigorously collision resistant hashing function
    function generateHash(module1, testName) {
        var str = module1 + "\x1c" + testName;
        var hash = 0;
        for(var i = 0; i < str.length; i++){
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        } // Convert the possibly negative integer hash code into an 8 character hex string, which isn't
        // strictly necessary but increases user understanding that the id is a SHA-like hash
        var hex = (0x100000000 + hash).toString(16);
        if (hex.length < 8) hex = "0000000" + hex;
        return hex.slice(-8);
    }
    // Authors: Philippe Rathé <prathe@gmail.com>, David Chan <david@troi.org>
    var equiv = function() {
        // Value pairs queued for comparison. Used for breadth-first processing order, recursion
        // detection and avoiding repeated comparison (see below for details).
        // Elements are { a: val, b: val }.
        var pairs = [];
        var getProto = Object.getPrototypeOf || function(obj) {
            return obj.__proto__;
        };
        function useStrictEquality(a, b) {
            // This only gets called if a and b are not strict equal, and is used to compare on
            // the primitive values inside object wrappers. For example:
            // `var i = 1;`
            // `var j = new Number(1);`
            // Neither a nor b can be null, as a !== b and they have the same type.
            if (_typeof(a) === "object") a = a.valueOf();
            if (_typeof(b) === "object") b = b.valueOf();
            return a === b;
        }
        function compareConstructors(a, b) {
            var protoA = getProto(a);
            var protoB = getProto(b); // Comparing constructors is more strict than using `instanceof`
            if (a.constructor === b.constructor) return true;
             // Ref #851
            // If the obj prototype descends from a null constructor, treat it
            // as a null prototype.
            if (protoA && protoA.constructor === null) protoA = null;
            if (protoB && protoB.constructor === null) protoB = null;
             // Allow objects with no prototype to be equivalent to
            // objects with Object as their constructor.
            if (protoA === null && protoB === Object.prototype || protoB === null && protoA === Object.prototype) return true;
            return false;
        }
        function getRegExpFlags(regexp) {
            return "flags" in regexp ? regexp.flags : regexp.toString().match(/[gimuy]*$/)[0];
        }
        function isContainer(val) {
            return [
                "object",
                "array",
                "map",
                "set"
            ].indexOf(objectType(val)) !== -1;
        }
        function breadthFirstCompareChild(a, b) {
            // If a is a container not reference-equal to b, postpone the comparison to the
            // end of the pairs queue -- unless (a, b) has been seen before, in which case skip
            // over the pair.
            if (a === b) return true;
            if (!isContainer(a)) return typeEquiv(a, b);
            if (pairs.every(function(pair) {
                return pair.a !== a || pair.b !== b;
            })) // Not yet started comparing this pair
            pairs.push({
                a: a,
                b: b
            });
            return true;
        }
        var callbacks = {
            "string": useStrictEquality,
            "boolean": useStrictEquality,
            "number": useStrictEquality,
            "null": useStrictEquality,
            "undefined": useStrictEquality,
            "symbol": useStrictEquality,
            "date": useStrictEquality,
            "nan": function nan() {
                return true;
            },
            "regexp": function regexp(a, b) {
                return a.source === b.source && // Include flags in the comparison
                getRegExpFlags(a) === getRegExpFlags(b);
            },
            // abort (identical references / instance methods were skipped earlier)
            "function": function _function() {
                return false;
            },
            "array": function array(a, b) {
                var i, len;
                len = a.length;
                if (len !== b.length) // Safe and faster
                return false;
                for(i = 0; i < len; i++){
                    // Compare non-containers; queue non-reference-equal containers
                    if (!breadthFirstCompareChild(a[i], b[i])) return false;
                }
                return true;
            },
            // Define sets a and b to be equivalent if for each element aVal in a, there
            // is some element bVal in b such that aVal and bVal are equivalent. Element
            // repetitions are not counted, so these are equivalent:
            // a = new Set( [ {}, [], [] ] );
            // b = new Set( [ {}, {}, [] ] );
            "set": function set(a, b) {
                var innerEq, outerEq = true;
                if (a.size !== b.size) // This optimization has certain quirks because of the lack of
                // repetition counting. For instance, adding the same
                // (reference-identical) element to two equivalent sets can
                // make them non-equivalent.
                return false;
                a.forEach(function(aVal) {
                    // Short-circuit if the result is already known. (Using for...of
                    // with a break clause would be cleaner here, but it would cause
                    // a syntax error on older Javascript implementations even if
                    // Set is unused)
                    if (!outerEq) return;
                    innerEq = false;
                    b.forEach(function(bVal) {
                        var parentPairs; // Likewise, short-circuit if the result is already known
                        if (innerEq) return;
                         // Swap out the global pairs list, as the nested call to
                        // innerEquiv will clobber its contents
                        parentPairs = pairs;
                        if (innerEquiv(bVal, aVal)) innerEq = true;
                         // Replace the global pairs list
                        pairs = parentPairs;
                    });
                    if (!innerEq) outerEq = false;
                });
                return outerEq;
            },
            // Define maps a and b to be equivalent if for each key-value pair (aKey, aVal)
            // in a, there is some key-value pair (bKey, bVal) in b such that
            // [ aKey, aVal ] and [ bKey, bVal ] are equivalent. Key repetitions are not
            // counted, so these are equivalent:
            // a = new Map( [ [ {}, 1 ], [ {}, 1 ], [ [], 1 ] ] );
            // b = new Map( [ [ {}, 1 ], [ [], 1 ], [ [], 1 ] ] );
            "map": function map(a, b) {
                var innerEq, outerEq = true;
                if (a.size !== b.size) // This optimization has certain quirks because of the lack of
                // repetition counting. For instance, adding the same
                // (reference-identical) key-value pair to two equivalent maps
                // can make them non-equivalent.
                return false;
                a.forEach(function(aVal, aKey) {
                    // Short-circuit if the result is already known. (Using for...of
                    // with a break clause would be cleaner here, but it would cause
                    // a syntax error on older Javascript implementations even if
                    // Map is unused)
                    if (!outerEq) return;
                    innerEq = false;
                    b.forEach(function(bVal, bKey) {
                        var parentPairs; // Likewise, short-circuit if the result is already known
                        if (innerEq) return;
                         // Swap out the global pairs list, as the nested call to
                        // innerEquiv will clobber its contents
                        parentPairs = pairs;
                        if (innerEquiv([
                            bVal,
                            bKey
                        ], [
                            aVal,
                            aKey
                        ])) innerEq = true;
                         // Replace the global pairs list
                        pairs = parentPairs;
                    });
                    if (!innerEq) outerEq = false;
                });
                return outerEq;
            },
            "object": function object(a, b) {
                var i, aProperties = [], bProperties = [];
                if (compareConstructors(a, b) === false) return false;
                 // Be strict: don't ensure hasOwnProperty and go deep
                for(i in a){
                    // Collect a's properties
                    aProperties.push(i); // Skip OOP methods that look the same
                    if (a.constructor !== Object && typeof a.constructor !== "undefined" && typeof a[i] === "function" && typeof b[i] === "function" && a[i].toString() === b[i].toString()) continue;
                     // Compare non-containers; queue non-reference-equal containers
                    if (!breadthFirstCompareChild(a[i], b[i])) return false;
                }
                for(i in b)// Collect b's properties
                bProperties.push(i);
                 // Ensures identical properties name
                return typeEquiv(aProperties.sort(), bProperties.sort());
            }
        };
        function typeEquiv(a, b) {
            var type = objectType(a); // Callbacks for containers will append to the pairs queue to achieve breadth-first
            // search order. The pairs queue is also used to avoid reprocessing any pair of
            // containers that are reference-equal to a previously visited pair (a special case
            // this being recursion detection).
            //
            // Because of this approach, once typeEquiv returns a false value, it should not be
            // called again without clearing the pair queue else it may wrongly report a visited
            // pair as being equivalent.
            return objectType(b) === type && callbacks[type](a, b);
        }
        function innerEquiv(a, b) {
            var i, pair; // We're done when there's nothing more to compare
            if (arguments.length < 2) return true;
             // Clear the global pair queue and add the top-level values being compared
            pairs = [
                {
                    a: a,
                    b: b
                }
            ];
            for(i = 0; i < pairs.length; i++){
                pair = pairs[i]; // Perform type-specific comparison on any pairs that are not strictly
                // equal. For container types, that comparison will postpone comparison
                // of any sub-container pair to the end of the pair queue. This gives
                // breadth-first search order. It also avoids the reprocessing of
                // reference-equal siblings, cousins etc, which can have a significant speed
                // impact when comparing a container of small objects each of which has a
                // reference to the same (singleton) large object.
                if (pair.a !== pair.b && !typeEquiv(pair.a, pair.b)) return false;
            } // ...across all consecutive argument pairs
            return arguments.length === 2 || innerEquiv.apply(this, [].slice.call(arguments, 1));
        }
        return function() {
            var result = innerEquiv.apply(void 0, arguments); // Release any retained objects
            pairs.length = 0;
            return result;
        };
    }();
    /**
	 * Config object: Maintain internal state
	 * Later exposed as QUnit.config
	 * `config` initialized at top of scope
	 */ var config = {
        // The queue of tests to run
        queue: [],
        // Block until document ready
        blocking: true,
        // By default, run previously failed tests first
        // very useful in combination with "Hide passed tests" checked
        reorder: true,
        // By default, modify document.title when suite is done
        altertitle: true,
        // HTML Reporter: collapse every test except the first failing test
        // If false, all failing tests will be expanded
        collapse: true,
        // By default, scroll to top of the page when suite is done
        scrolltop: true,
        // Depth up-to which object will be dumped
        maxDepth: 5,
        // When enabled, all tests must call expect()
        requireExpects: false,
        // Placeholder for user-configurable form-exposed URL parameters
        urlConfig: [],
        // Set of all modules.
        modules: [],
        // The first unnamed module
        currentModule: {
            name: "",
            tests: [],
            childModules: [],
            testsRun: 0,
            unskippedTestsRun: 0,
            hooks: {
                before: [],
                beforeEach: [],
                afterEach: [],
                after: []
            }
        },
        callbacks: {},
        // The storage module to use for reordering tests
        storage: localSessionStorage
    }; // take a predefined QUnit.config and extend the defaults
    var globalConfig = window$1 && window$1.QUnit && window$1.QUnit.config; // only extend the global config if there is no QUnit overload
    if (window$1 && window$1.QUnit && !window$1.QUnit.version) extend(config, globalConfig);
     // Push a loose unnamed module to the modules collection
    config.modules.push(config.currentModule);
    // https://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html
    var dump = function() {
        function quote(str) {
            return '"' + str.toString().replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
        }
        function literal(o) {
            return o + "";
        }
        function join(pre, arr, post) {
            var s = dump.separator(), base = dump.indent(), inner = dump.indent(1);
            if (arr.join) arr = arr.join("," + s + inner);
            if (!arr) return pre + post;
            return [
                pre,
                inner + arr,
                base + post
            ].join(s);
        }
        function array(arr, stack) {
            var i = arr.length, ret = new Array(i);
            if (dump.maxDepth && dump.depth > dump.maxDepth) return "[object Array]";
            this.up();
            while(i--)ret[i] = this.parse(arr[i], undefined, stack);
            this.down();
            return join("[", ret, "]");
        }
        function isArray(obj) {
            return toString.call(obj) === "[object Array]" || // NodeList objects
            typeof obj.length === "number" && obj.item !== undefined && (obj.length ? obj.item(0) === obj[0] : obj.item(0) === null && obj[0] === undefined);
        }
        var reName = /^function (\w+)/, dump = {
            // The objType is used mostly internally, you can fix a (custom) type in advance
            parse: function parse(obj, objType, stack) {
                stack = stack || [];
                var res, parser, parserType, objIndex = stack.indexOf(obj);
                if (objIndex !== -1) return "recursion(".concat(objIndex - stack.length, ")");
                objType = objType || this.typeOf(obj);
                parser = this.parsers[objType];
                parserType = _typeof(parser);
                if (parserType === "function") {
                    stack.push(obj);
                    res = parser.call(this, obj, stack);
                    stack.pop();
                    return res;
                }
                return parserType === "string" ? parser : this.parsers.error;
            },
            typeOf: function typeOf(obj) {
                var type;
                if (obj === null) type = "null";
                else if (typeof obj === "undefined") type = "undefined";
                else if (is("regexp", obj)) type = "regexp";
                else if (is("date", obj)) type = "date";
                else if (is("function", obj)) type = "function";
                else if (obj.setInterval !== undefined && obj.document !== undefined && obj.nodeType === undefined) type = "window";
                else if (obj.nodeType === 9) type = "document";
                else if (obj.nodeType) type = "node";
                else if (isArray(obj)) type = "array";
                else if (obj.constructor === Error.prototype.constructor) type = "error";
                else type = _typeof(obj);
                return type;
            },
            separator: function separator() {
                if (this.multiline) return this.HTML ? "<br />" : "\n";
                else return this.HTML ? "&#160;" : " ";
            },
            // Extra can be a number, shortcut for increasing-calling-decreasing
            indent: function indent(extra) {
                if (!this.multiline) return "";
                var chr = this.indentChar;
                if (this.HTML) chr = chr.replace(/\t/g, "   ").replace(/ /g, "&#160;");
                return new Array(this.depth + (extra || 0)).join(chr);
            },
            up: function up(a) {
                this.depth += a || 1;
            },
            down: function down(a) {
                this.depth -= a || 1;
            },
            setParser: function setParser(name, parser) {
                this.parsers[name] = parser;
            },
            // The next 3 are exposed so you can use them
            quote: quote,
            literal: literal,
            join: join,
            depth: 1,
            maxDepth: config.maxDepth,
            // This is the list of parsers, to modify them, use dump.setParser
            parsers: {
                window: "[Window]",
                document: "[Document]",
                error: function error(_error) {
                    return 'Error("' + _error.message + '")';
                },
                unknown: "[Unknown]",
                "null": "null",
                "undefined": "undefined",
                "function": function _function(fn) {
                    var ret = "function", // Functions never have name in IE
                    name = "name" in fn ? fn.name : (reName.exec(fn) || [])[1];
                    if (name) ret += " " + name;
                    ret += "(";
                    ret = [
                        ret,
                        dump.parse(fn, "functionArgs"),
                        "){"
                    ].join("");
                    return join(ret, dump.parse(fn, "functionCode"), "}");
                },
                array: array,
                nodelist: array,
                "arguments": array,
                object: function object(map, stack) {
                    var keys, key, val, i, nonEnumerableProperties, ret = [];
                    if (dump.maxDepth && dump.depth > dump.maxDepth) return "[object Object]";
                    dump.up();
                    keys = [];
                    for(key in map)keys.push(key);
                     // Some properties are not always enumerable on Error objects.
                    nonEnumerableProperties = [
                        "message",
                        "name"
                    ];
                    for(i in nonEnumerableProperties){
                        key = nonEnumerableProperties[i];
                        if (key in map && !inArray(key, keys)) keys.push(key);
                    }
                    keys.sort();
                    for(i = 0; i < keys.length; i++){
                        key = keys[i];
                        val = map[key];
                        ret.push(dump.parse(key, "key") + ": " + dump.parse(val, undefined, stack));
                    }
                    dump.down();
                    return join("{", ret, "}");
                },
                node: function node(_node) {
                    var len, i, val, open = dump.HTML ? "&lt;" : "<", close = dump.HTML ? "&gt;" : ">", tag = _node.nodeName.toLowerCase(), ret = open + tag, attrs = _node.attributes;
                    if (attrs) for(i = 0, len = attrs.length; i < len; i++){
                        val = attrs[i].nodeValue; // IE6 includes all attributes in .attributes, even ones not explicitly
                        // set. Those have values like undefined, null, 0, false, "" or
                        // "inherit".
                        if (val && val !== "inherit") ret += " " + attrs[i].nodeName + "=" + dump.parse(val, "attribute");
                    }
                    ret += close; // Show content of TextNode or CDATASection
                    if (_node.nodeType === 3 || _node.nodeType === 4) ret += _node.nodeValue;
                    return ret + open + "/" + tag + close;
                },
                // Function calls it internally, it's the arguments part of the function
                functionArgs: function functionArgs(fn) {
                    var args, l = fn.length;
                    if (!l) return "";
                    args = new Array(l);
                    while(l--)// 97 is 'a'
                    args[l] = String.fromCharCode(97 + l);
                    return " " + args.join(", ") + " ";
                },
                // Object calls it internally, the key part of an item in a map
                key: quote,
                // Function calls it internally, it's the content of the function
                functionCode: "[code]",
                // Node calls it internally, it's a html attribute value
                attribute: quote,
                string: quote,
                date: quote,
                regexp: literal,
                number: literal,
                "boolean": literal,
                symbol: function symbol(sym) {
                    return sym.toString();
                }
            },
            // If true, entities are escaped ( <, >, \t, space and \n )
            HTML: false,
            // Indentation unit
            indentChar: "  ",
            // If true, items in a collection, are separated by a \n, else just a space.
            multiline: true
        };
        return dump;
    }();
    var SuiteReport = /*#__PURE__*/ function() {
        function SuiteReport(name, parentSuite) {
            _classCallCheck(this, SuiteReport);
            this.name = name;
            this.fullName = parentSuite ? parentSuite.fullName.concat(name) : [];
            this.tests = [];
            this.childSuites = [];
            if (parentSuite) parentSuite.pushChildSuite(this);
        }
        _createClass(SuiteReport, [
            {
                key: "start",
                value: function start(recordTime) {
                    if (recordTime) {
                        this._startTime = performanceNow();
                        if (performance) {
                            var suiteLevel = this.fullName.length;
                            performance.mark("qunit_suite_".concat(suiteLevel, "_start"));
                        }
                    }
                    return {
                        name: this.name,
                        fullName: this.fullName.slice(),
                        tests: this.tests.map(function(test) {
                            return test.start();
                        }),
                        childSuites: this.childSuites.map(function(suite) {
                            return suite.start();
                        }),
                        testCounts: {
                            total: this.getTestCounts().total
                        }
                    };
                }
            },
            {
                key: "end",
                value: function end(recordTime) {
                    if (recordTime) {
                        this._endTime = performanceNow();
                        if (performance) {
                            var suiteLevel = this.fullName.length;
                            performance.mark("qunit_suite_".concat(suiteLevel, "_end"));
                            var suiteName = this.fullName.join(" – ");
                            measure(suiteLevel === 0 ? "QUnit Test Run" : "QUnit Test Suite: ".concat(suiteName), "qunit_suite_".concat(suiteLevel, "_start"), "qunit_suite_".concat(suiteLevel, "_end"));
                        }
                    }
                    return {
                        name: this.name,
                        fullName: this.fullName.slice(),
                        tests: this.tests.map(function(test) {
                            return test.end();
                        }),
                        childSuites: this.childSuites.map(function(suite) {
                            return suite.end();
                        }),
                        testCounts: this.getTestCounts(),
                        runtime: this.getRuntime(),
                        status: this.getStatus()
                    };
                }
            },
            {
                key: "pushChildSuite",
                value: function pushChildSuite(suite) {
                    this.childSuites.push(suite);
                }
            },
            {
                key: "pushTest",
                value: function pushTest(test) {
                    this.tests.push(test);
                }
            },
            {
                key: "getRuntime",
                value: function getRuntime() {
                    return this._endTime - this._startTime;
                }
            },
            {
                key: "getTestCounts",
                value: function getTestCounts() {
                    var counts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        passed: 0,
                        failed: 0,
                        skipped: 0,
                        todo: 0,
                        total: 0
                    };
                    counts = this.tests.reduce(function(counts, test) {
                        if (test.valid) {
                            counts[test.getStatus()]++;
                            counts.total++;
                        }
                        return counts;
                    }, counts);
                    return this.childSuites.reduce(function(counts, suite) {
                        return suite.getTestCounts(counts);
                    }, counts);
                }
            },
            {
                key: "getStatus",
                value: function getStatus() {
                    var _this$getTestCounts = this.getTestCounts(), total = _this$getTestCounts.total, failed = _this$getTestCounts.failed, skipped = _this$getTestCounts.skipped, todo = _this$getTestCounts.todo;
                    if (failed) return "failed";
                    else {
                        if (skipped === total) return "skipped";
                        else if (todo === total) return "todo";
                        else return "passed";
                    }
                }
            }
        ]);
        return SuiteReport;
    }();
    var focused = false;
    var moduleStack = [];
    function isParentModuleInQueue() {
        var modulesInQueue = config.modules.map(function(module1) {
            return module1.moduleId;
        });
        return moduleStack.some(function(module1) {
            return modulesInQueue.includes(module1.moduleId);
        });
    }
    function createModule(name, testEnvironment, modifiers) {
        var parentModule = moduleStack.length ? moduleStack.slice(-1)[0] : null;
        var moduleName = parentModule !== null ? [
            parentModule.name,
            name
        ].join(" > ") : name;
        var parentSuite = parentModule ? parentModule.suiteReport : globalSuite;
        var skip = parentModule !== null && parentModule.skip || modifiers.skip;
        var todo = parentModule !== null && parentModule.todo || modifiers.todo;
        var module1 = {
            name: moduleName,
            parentModule: parentModule,
            tests: [],
            moduleId: generateHash(moduleName),
            testsRun: 0,
            unskippedTestsRun: 0,
            childModules: [],
            suiteReport: new SuiteReport(name, parentSuite),
            // Pass along `skip` and `todo` properties from parent module, in case
            // there is one, to childs. And use own otherwise.
            // This property will be used to mark own tests and tests of child suites
            // as either `skipped` or `todo`.
            skip: skip,
            todo: skip ? false : todo
        };
        var env = {};
        if (parentModule) {
            parentModule.childModules.push(module1);
            extend(env, parentModule.testEnvironment);
        }
        extend(env, testEnvironment);
        module1.testEnvironment = env;
        config.modules.push(module1);
        return module1;
    }
    function processModule(name, options, executeNow) {
        var modifiers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        if (objectType(options) === "function") {
            executeNow = options;
            options = undefined;
        }
        var module1 = createModule(name, options, modifiers); // Move any hooks to a 'hooks' object
        var testEnvironment = module1.testEnvironment;
        var hooks = module1.hooks = {};
        setHookFromEnvironment(hooks, testEnvironment, "before");
        setHookFromEnvironment(hooks, testEnvironment, "beforeEach");
        setHookFromEnvironment(hooks, testEnvironment, "afterEach");
        setHookFromEnvironment(hooks, testEnvironment, "after");
        var moduleFns = {
            before: setHookFunction(module1, "before"),
            beforeEach: setHookFunction(module1, "beforeEach"),
            afterEach: setHookFunction(module1, "afterEach"),
            after: setHookFunction(module1, "after")
        };
        var currentModule = config.currentModule;
        if (objectType(executeNow) === "function") {
            moduleStack.push(module1);
            config.currentModule = module1;
            executeNow.call(module1.testEnvironment, moduleFns);
            moduleStack.pop();
            module1 = module1.parentModule || currentModule;
        }
        config.currentModule = module1;
        function setHookFromEnvironment(hooks, environment, name) {
            var potentialHook = environment[name];
            hooks[name] = typeof potentialHook === "function" ? [
                potentialHook
            ] : [];
            delete environment[name];
        }
        function setHookFunction(module1, hookName) {
            return function setHook(callback) {
                module1.hooks[hookName].push(callback);
            };
        }
    }
    function module$1(name, options, executeNow) {
        if (focused && !isParentModuleInQueue()) return;
        processModule(name, options, executeNow);
    }
    module$1.only = function() {
        if (!focused) {
            config.modules.length = 0;
            config.queue.length = 0;
        }
        processModule.apply(void 0, arguments);
        focused = true;
    };
    module$1.skip = function(name, options, executeNow) {
        if (focused) return;
        processModule(name, options, executeNow, {
            skip: true
        });
    };
    module$1.todo = function(name, options, executeNow) {
        if (focused) return;
        processModule(name, options, executeNow, {
            todo: true
        });
    };
    var LISTENERS = Object.create(null);
    var SUPPORTED_EVENTS = [
        "runStart",
        "suiteStart",
        "testStart",
        "assertion",
        "testEnd",
        "suiteEnd",
        "runEnd"
    ];
    /**
	 * Emits an event with the specified data to all currently registered listeners.
	 * Callbacks will fire in the order in which they are registered (FIFO). This
	 * function is not exposed publicly; it is used by QUnit internals to emit
	 * logging events.
	 *
	 * @private
	 * @method emit
	 * @param {String} eventName
	 * @param {Object} data
	 * @return {Void}
	 */ function emit(eventName, data) {
        if (objectType(eventName) !== "string") throw new TypeError("eventName must be a string when emitting an event");
         // Clone the callbacks in case one of them registers a new callback
        var originalCallbacks = LISTENERS[eventName];
        var callbacks = originalCallbacks ? _toConsumableArray(originalCallbacks) : [];
        for(var i = 0; i < callbacks.length; i++)callbacks[i](data);
    }
    /**
	 * Registers a callback as a listener to the specified event.
	 *
	 * @public
	 * @method on
	 * @param {String} eventName
	 * @param {Function} callback
	 * @return {Void}
	 */ function on(eventName, callback) {
        if (objectType(eventName) !== "string") throw new TypeError("eventName must be a string when registering a listener");
        else if (!inArray(eventName, SUPPORTED_EVENTS)) {
            var events = SUPPORTED_EVENTS.join(", ");
            throw new Error('"'.concat(eventName, '" is not a valid event; must be one of: ').concat(events, "."));
        } else if (objectType(callback) !== "function") throw new TypeError("callback must be a function when registering a listener");
        if (!LISTENERS[eventName]) LISTENERS[eventName] = [];
         // Don't register the same callback more than once
        if (!inArray(callback, LISTENERS[eventName])) LISTENERS[eventName].push(callback);
    }
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function createCommonjsModule(fn, basedir, module1) {
        return module1 = {
            path: basedir,
            exports: {},
            require: function(path, base) {
                return commonjsRequire(path, base === undefined || base === null ? module1.path : base);
            }
        }, fn(module1, module1.exports), module1.exports;
    }
    function commonjsRequire() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }
    var es6Promise = createCommonjsModule(function(module1, exports1) {
        /*!
	   * @overview es6-promise - a tiny implementation of Promises/A+.
	   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	   * @license   Licensed under MIT license
	   *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	   * @version   v4.2.8+1e68dce6
	   */ (function(global, factory) {
            module1.exports = factory();
        })(commonjsGlobal, function() {
            function objectOrFunction(x) {
                var type = typeof x;
                return x !== null && (type === "object" || type === "function");
            }
            function isFunction(x) {
                return typeof x === "function";
            }
            var _isArray = void 0;
            if (Array.isArray) _isArray = Array.isArray;
            else _isArray = function(x) {
                return Object.prototype.toString.call(x) === "[object Array]";
            };
            var isArray = _isArray;
            var len = 0;
            var vertxNext = void 0;
            var customSchedulerFn = void 0;
            var asap = function asap(callback, arg) {
                queue[len] = callback;
                queue[len + 1] = arg;
                len += 2;
                if (len === 2) {
                    // If len is 2, that means that we need to schedule an async flush.
                    // If additional callbacks are queued before the queue is flushed, they
                    // will be processed by this flush that we are scheduling.
                    if (customSchedulerFn) customSchedulerFn(flush);
                    else scheduleFlush();
                }
            };
            function setScheduler(scheduleFn) {
                customSchedulerFn = scheduleFn;
            }
            function setAsap(asapFn) {
                asap = asapFn;
            }
            var browserWindow = typeof window !== "undefined" ? window : undefined;
            var browserGlobal = browserWindow || {};
            var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
            var isNode = typeof self === "undefined" && typeof process !== "undefined" && ({}).toString.call(process) === "[object process]"; // test for web worker but not in IE10
            var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined"; // node
            function useNextTick() {
                // node version 0.10.x displays a deprecation warning when nextTick is used recursively
                // see https://github.com/cujojs/when/issues/410 for details
                return function() {
                    return process.nextTick(flush);
                };
            } // vertx
            function useVertxTimer() {
                if (typeof vertxNext !== "undefined") return function() {
                    vertxNext(flush);
                };
                return useSetTimeout();
            }
            function useMutationObserver() {
                var iterations = 0;
                var observer = new BrowserMutationObserver(flush);
                var node = document.createTextNode("");
                observer.observe(node, {
                    characterData: true
                });
                return function() {
                    node.data = iterations = ++iterations % 2;
                };
            } // web worker
            function useMessageChannel() {
                var channel = new MessageChannel();
                channel.port1.onmessage = flush;
                return function() {
                    return channel.port2.postMessage(0);
                };
            }
            function useSetTimeout() {
                // Store setTimeout reference so es6-promise will be unaffected by
                // other code modifying setTimeout (like sinon.useFakeTimers())
                var globalSetTimeout = setTimeout;
                return function() {
                    return globalSetTimeout(flush, 1);
                };
            }
            var queue = new Array(1000);
            function flush() {
                for(var i = 0; i < len; i += 2){
                    var callback = queue[i];
                    var arg = queue[i + 1];
                    callback(arg);
                    queue[i] = undefined;
                    queue[i + 1] = undefined;
                }
                len = 0;
            }
            function attemptVertx() {
                try {
                    var vertx = Function("return this")().require("vertx");
                    vertxNext = vertx.runOnLoop || vertx.runOnContext;
                    return useVertxTimer();
                } catch (e) {
                    return useSetTimeout();
                }
            }
            var scheduleFlush = void 0; // Decide what async method to use to triggering processing of queued callbacks:
            if (isNode) scheduleFlush = useNextTick();
            else if (BrowserMutationObserver) scheduleFlush = useMutationObserver();
            else if (isWorker) scheduleFlush = useMessageChannel();
            else if (browserWindow === undefined && typeof commonjsRequire === "function") scheduleFlush = attemptVertx();
            else scheduleFlush = useSetTimeout();
            function then(onFulfillment, onRejection) {
                var parent = this;
                var child = new this.constructor(noop);
                if (child[PROMISE_ID] === undefined) makePromise(child);
                var _state = parent._state;
                if (_state) {
                    var callback = arguments[_state - 1];
                    asap(function() {
                        return invokeCallback(_state, child, callback, parent._result);
                    });
                } else subscribe(parent, child, onFulfillment, onRejection);
                return child;
            }
            /**
	      `Promise.resolve` returns a promise that will become resolved with the
	      passed `value`. It is shorthand for the following:
	    
	      ```javascript
	      let promise = new Promise(function(resolve, reject){
	        resolve(1);
	      });
	    
	      promise.then(function(value){
	        // value === 1
	      });
	      ```
	    
	      Instead of writing the above, your code now simply becomes the following:
	    
	      ```javascript
	      let promise = Promise.resolve(1);
	    
	      promise.then(function(value){
	        // value === 1
	      });
	      ```
	    
	      @method resolve
	      @static
	      @param {Any} value value that the returned promise will be resolved with
	      Useful for tooling.
	      @return {Promise} a promise that will become fulfilled with the given
	      `value`
	    */ function resolve$1(object) {
                /*jshint validthis:true */ var Constructor = this;
                if (object && typeof object === "object" && object.constructor === Constructor) return object;
                var promise = new Constructor(noop);
                resolve(promise, object);
                return promise;
            }
            var PROMISE_ID = Math.random().toString(36).substring(2);
            function noop() {}
            var PENDING = void 0;
            var FULFILLED = 1;
            var REJECTED = 2;
            function selfFulfillment() {
                return new TypeError("You cannot resolve a promise with itself");
            }
            function cannotReturnOwn() {
                return new TypeError("A promises callback cannot return that same promise.");
            }
            function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                try {
                    then$$1.call(value, fulfillmentHandler, rejectionHandler);
                } catch (e) {
                    return e;
                }
            }
            function handleForeignThenable(promise, thenable, then$$1) {
                asap(function(promise) {
                    var sealed = false;
                    var error = tryThen(then$$1, thenable, function(value) {
                        if (sealed) return;
                        sealed = true;
                        if (thenable !== value) resolve(promise, value);
                        else fulfill(promise, value);
                    }, function(reason) {
                        if (sealed) return;
                        sealed = true;
                        reject(promise, reason);
                    }, "Settle: " + (promise._label || " unknown promise"));
                    if (!sealed && error) {
                        sealed = true;
                        reject(promise, error);
                    }
                }, promise);
            }
            function handleOwnThenable(promise, thenable) {
                if (thenable._state === FULFILLED) fulfill(promise, thenable._result);
                else if (thenable._state === REJECTED) reject(promise, thenable._result);
                else subscribe(thenable, undefined, function(value) {
                    return resolve(promise, value);
                }, function(reason) {
                    return reject(promise, reason);
                });
            }
            function handleMaybeThenable(promise, maybeThenable, then$$1) {
                if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) handleOwnThenable(promise, maybeThenable);
                else {
                    if (then$$1 === undefined) fulfill(promise, maybeThenable);
                    else if (isFunction(then$$1)) handleForeignThenable(promise, maybeThenable, then$$1);
                    else fulfill(promise, maybeThenable);
                }
            }
            function resolve(promise, value) {
                if (promise === value) reject(promise, selfFulfillment());
                else if (objectOrFunction(value)) {
                    var then$$1 = void 0;
                    try {
                        then$$1 = value.then;
                    } catch (error) {
                        reject(promise, error);
                        return;
                    }
                    handleMaybeThenable(promise, value, then$$1);
                } else fulfill(promise, value);
            }
            function publishRejection(promise) {
                if (promise._onerror) promise._onerror(promise._result);
                publish(promise);
            }
            function fulfill(promise, value) {
                if (promise._state !== PENDING) return;
                promise._result = value;
                promise._state = FULFILLED;
                if (promise._subscribers.length !== 0) asap(publish, promise);
            }
            function reject(promise, reason) {
                if (promise._state !== PENDING) return;
                promise._state = REJECTED;
                promise._result = reason;
                asap(publishRejection, promise);
            }
            function subscribe(parent, child, onFulfillment, onRejection) {
                var _subscribers = parent._subscribers;
                var length = _subscribers.length;
                parent._onerror = null;
                _subscribers[length] = child;
                _subscribers[length + FULFILLED] = onFulfillment;
                _subscribers[length + REJECTED] = onRejection;
                if (length === 0 && parent._state) asap(publish, parent);
            }
            function publish(promise) {
                var subscribers = promise._subscribers;
                var settled = promise._state;
                if (subscribers.length === 0) return;
                var child = void 0, callback = void 0, detail = promise._result;
                for(var i = 0; i < subscribers.length; i += 3){
                    child = subscribers[i];
                    callback = subscribers[i + settled];
                    if (child) invokeCallback(settled, child, callback, detail);
                    else callback(detail);
                }
                promise._subscribers.length = 0;
            }
            function invokeCallback(settled, promise, callback, detail) {
                var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = true;
                if (hasCallback) {
                    try {
                        value = callback(detail);
                    } catch (e) {
                        succeeded = false;
                        error = e;
                    }
                    if (promise === value) {
                        reject(promise, cannotReturnOwn());
                        return;
                    }
                } else value = detail;
                if (promise._state !== PENDING) ;
                else if (hasCallback && succeeded) resolve(promise, value);
                else if (succeeded === false) reject(promise, error);
                else if (settled === FULFILLED) fulfill(promise, value);
                else if (settled === REJECTED) reject(promise, value);
            }
            function initializePromise(promise, resolver) {
                try {
                    resolver(function resolvePromise(value) {
                        resolve(promise, value);
                    }, function rejectPromise(reason) {
                        reject(promise, reason);
                    });
                } catch (e) {
                    reject(promise, e);
                }
            }
            var id = 0;
            function nextId() {
                return id++;
            }
            function makePromise(promise) {
                promise[PROMISE_ID] = id++;
                promise._state = undefined;
                promise._result = undefined;
                promise._subscribers = [];
            }
            function validationError() {
                return new Error("Array Methods must be provided an Array");
            }
            var Enumerator = function() {
                function Enumerator(Constructor, input) {
                    this._instanceConstructor = Constructor;
                    this.promise = new Constructor(noop);
                    if (!this.promise[PROMISE_ID]) makePromise(this.promise);
                    if (isArray(input)) {
                        this.length = input.length;
                        this._remaining = input.length;
                        this._result = new Array(this.length);
                        if (this.length === 0) fulfill(this.promise, this._result);
                        else {
                            this.length = this.length || 0;
                            this._enumerate(input);
                            if (this._remaining === 0) fulfill(this.promise, this._result);
                        }
                    } else reject(this.promise, validationError());
                }
                Enumerator.prototype._enumerate = function _enumerate(input) {
                    for(var i = 0; this._state === PENDING && i < input.length; i++)this._eachEntry(input[i], i);
                };
                Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                    var c = this._instanceConstructor;
                    var resolve$$1 = c.resolve;
                    if (resolve$$1 === resolve$1) {
                        var _then = void 0;
                        var error = void 0;
                        var didError = false;
                        try {
                            _then = entry.then;
                        } catch (e) {
                            didError = true;
                            error = e;
                        }
                        if (_then === then && entry._state !== PENDING) this._settledAt(entry._state, i, entry._result);
                        else if (typeof _then !== "function") {
                            this._remaining--;
                            this._result[i] = entry;
                        } else if (c === Promise$1) {
                            var promise = new c(noop);
                            if (didError) reject(promise, error);
                            else handleMaybeThenable(promise, entry, _then);
                            this._willSettleAt(promise, i);
                        } else this._willSettleAt(new c(function(resolve$$1) {
                            return resolve$$1(entry);
                        }), i);
                    } else this._willSettleAt(resolve$$1(entry), i);
                };
                Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                    var promise = this.promise;
                    if (promise._state === PENDING) {
                        this._remaining--;
                        if (state === REJECTED) reject(promise, value);
                        else this._result[i] = value;
                    }
                    if (this._remaining === 0) fulfill(promise, this._result);
                };
                Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                    var enumerator = this;
                    subscribe(promise, undefined, function(value) {
                        return enumerator._settledAt(FULFILLED, i, value);
                    }, function(reason) {
                        return enumerator._settledAt(REJECTED, i, reason);
                    });
                };
                return Enumerator;
            }();
            /**
	      `Promise.all` accepts an array of promises, and returns a new promise which
	      is fulfilled with an array of fulfillment values for the passed promises, or
	      rejected with the reason of the first passed promise to be rejected. It casts all
	      elements of the passed iterable to promises as it runs this algorithm.
	    
	      Example:
	    
	      ```javascript
	      let promise1 = resolve(1);
	      let promise2 = resolve(2);
	      let promise3 = resolve(3);
	      let promises = [ promise1, promise2, promise3 ];
	    
	      Promise.all(promises).then(function(array){
	        // The array here would be [ 1, 2, 3 ];
	      });
	      ```
	    
	      If any of the `promises` given to `all` are rejected, the first promise
	      that is rejected will be given as an argument to the returned promises's
	      rejection handler. For example:
	    
	      Example:
	    
	      ```javascript
	      let promise1 = resolve(1);
	      let promise2 = reject(new Error("2"));
	      let promise3 = reject(new Error("3"));
	      let promises = [ promise1, promise2, promise3 ];
	    
	      Promise.all(promises).then(function(array){
	        // Code here never runs because there are rejected promises!
	      }, function(error) {
	        // error.message === "2"
	      });
	      ```
	    
	      @method all
	      @static
	      @param {Array} entries array of promises
	      @param {String} label optional string for labeling the promise.
	      Useful for tooling.
	      @return {Promise} promise that is fulfilled when all `promises` have been
	      fulfilled, or rejected if any of them become rejected.
	      @static
	    */ function all(entries) {
                return new Enumerator(this, entries).promise;
            }
            /**
	      `Promise.race` returns a new promise which is settled in the same way as the
	      first passed promise to settle.
	    
	      Example:
	    
	      ```javascript
	      let promise1 = new Promise(function(resolve, reject){
	        setTimeout(function(){
	          resolve('promise 1');
	        }, 200);
	      });
	    
	      let promise2 = new Promise(function(resolve, reject){
	        setTimeout(function(){
	          resolve('promise 2');
	        }, 100);
	      });
	    
	      Promise.race([promise1, promise2]).then(function(result){
	        // result === 'promise 2' because it was resolved before promise1
	        // was resolved.
	      });
	      ```
	    
	      `Promise.race` is deterministic in that only the state of the first
	      settled promise matters. For example, even if other promises given to the
	      `promises` array argument are resolved, but the first settled promise has
	      become rejected before the other promises became fulfilled, the returned
	      promise will become rejected:
	    
	      ```javascript
	      let promise1 = new Promise(function(resolve, reject){
	        setTimeout(function(){
	          resolve('promise 1');
	        }, 200);
	      });
	    
	      let promise2 = new Promise(function(resolve, reject){
	        setTimeout(function(){
	          reject(new Error('promise 2'));
	        }, 100);
	      });
	    
	      Promise.race([promise1, promise2]).then(function(result){
	        // Code here never runs
	      }, function(reason){
	        // reason.message === 'promise 2' because promise 2 became rejected before
	        // promise 1 became fulfilled
	      });
	      ```
	    
	      An example real-world use case is implementing timeouts:
	    
	      ```javascript
	      Promise.race([ajax('foo.json'), timeout(5000)])
	      ```
	    
	      @method race
	      @static
	      @param {Array} promises array of promises to observe
	      Useful for tooling.
	      @return {Promise} a promise which settles in the same way as the first passed
	      promise to settle.
	    */ function race(entries) {
                /*jshint validthis:true */ var Constructor = this;
                if (!isArray(entries)) return new Constructor(function(_, reject) {
                    return reject(new TypeError("You must pass an array to race."));
                });
                else return new Constructor(function(resolve, reject) {
                    var length = entries.length;
                    for(var i = 0; i < length; i++)Constructor.resolve(entries[i]).then(resolve, reject);
                });
            }
            /**
	      `Promise.reject` returns a promise rejected with the passed `reason`.
	      It is shorthand for the following:
	    
	      ```javascript
	      let promise = new Promise(function(resolve, reject){
	        reject(new Error('WHOOPS'));
	      });
	    
	      promise.then(function(value){
	        // Code here doesn't run because the promise is rejected!
	      }, function(reason){
	        // reason.message === 'WHOOPS'
	      });
	      ```
	    
	      Instead of writing the above, your code now simply becomes the following:
	    
	      ```javascript
	      let promise = Promise.reject(new Error('WHOOPS'));
	    
	      promise.then(function(value){
	        // Code here doesn't run because the promise is rejected!
	      }, function(reason){
	        // reason.message === 'WHOOPS'
	      });
	      ```
	    
	      @method reject
	      @static
	      @param {Any} reason value that the returned promise will be rejected with.
	      Useful for tooling.
	      @return {Promise} a promise rejected with the given `reason`.
	    */ function reject$1(reason) {
                /*jshint validthis:true */ var Constructor = this;
                var promise = new Constructor(noop);
                reject(promise, reason);
                return promise;
            }
            function needsResolver() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            }
            function needsNew() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }
            /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	    
	      Terminology
	      -----------
	    
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	    
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	    
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	    
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	    
	    
	      Basic Usage:
	      ------------
	    
	      ```js
	      let promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	    
	        // on failure
	        reject(reason);
	      });
	    
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	    
	      Advanced Usage:
	      ---------------
	    
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	    
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          let xhr = new XMLHttpRequest();
	    
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	    
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	    
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	    
	      Unlike callbacks, promises are great composable primitives.
	    
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	    
	        return values;
	      });
	      ```
	    
	      @class Promise
	      @param {Function} resolver
	      Useful for tooling.
	      @constructor
	    */ var Promise$1 = function() {
                function Promise1(resolver) {
                    this[PROMISE_ID] = nextId();
                    this._result = this._state = undefined;
                    this._subscribers = [];
                    if (noop !== resolver) {
                        typeof resolver !== "function" && needsResolver();
                        this instanceof Promise1 ? initializePromise(this, resolver) : needsNew();
                    }
                }
                /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	       ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	       Chaining
	      --------
	       The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	       ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	       findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	       ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	       Assimilation
	      ------------
	       Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	       If the assimliated promise rejects, then the downstream promise will also reject.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	       Simple Example
	      --------------
	       Synchronous Example
	       ```javascript
	      let result;
	       try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	       Advanced Example
	      --------------
	       Synchronous Example
	       ```javascript
	      let author, books;
	       try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	       function foundBooks(books) {
	       }
	       function failure(reason) {
	       }
	       findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	       @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	      */ /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	      ```js
	      function findAuthor(){
	      throw new Error('couldn't find that author');
	      }
	      // synchronous
	      try {
	      findAuthor();
	      } catch(reason) {
	      // something went wrong
	      }
	      // async with promises
	      findAuthor().catch(function(reason){
	      // something went wrong
	      });
	      ```
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	      */ Promise1.prototype.catch = function _catch(onRejection) {
                    return this.then(null, onRejection);
                };
                /**
	        `finally` will be invoked regardless of the promise's fate just as native
	        try/catch/finally behaves
	      
	        Synchronous example:
	      
	        ```js
	        findAuthor() {
	          if (Math.random() > 0.5) {
	            throw new Error();
	          }
	          return new Author();
	        }
	      
	        try {
	          return findAuthor(); // succeed or fail
	        } catch(error) {
	          return findOtherAuther();
	        } finally {
	          // always runs
	          // doesn't affect the return value
	        }
	        ```
	      
	        Asynchronous example:
	      
	        ```js
	        findAuthor().catch(function(reason){
	          return findOtherAuther();
	        }).finally(function(){
	          // author was either found, or not
	        });
	        ```
	      
	        @method finally
	        @param {Function} callback
	        @return {Promise}
	      */ Promise1.prototype.finally = function _finally(callback) {
                    var promise = this;
                    var constructor = promise.constructor;
                    if (isFunction(callback)) return promise.then(function(value) {
                        return constructor.resolve(callback()).then(function() {
                            return value;
                        });
                    }, function(reason) {
                        return constructor.resolve(callback()).then(function() {
                            throw reason;
                        });
                    });
                    return promise.then(callback, callback);
                };
                return Promise1;
            }();
            Promise$1.prototype.then = then;
            Promise$1.all = all;
            Promise$1.race = race;
            Promise$1.resolve = resolve$1;
            Promise$1.reject = reject$1;
            Promise$1._setScheduler = setScheduler;
            Promise$1._setAsap = setAsap;
            Promise$1._asap = asap;
            /*global self*/ function polyfill() {
                var local = void 0;
                if (typeof commonjsGlobal !== "undefined") local = commonjsGlobal;
                else if (typeof self !== "undefined") local = self;
                else try {
                    local = Function("return this")();
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment");
                }
                var P = local.Promise;
                if (P) {
                    var promiseToString = null;
                    try {
                        promiseToString = Object.prototype.toString.call(P.resolve());
                    } catch (e) {}
                    if (promiseToString === "[object Promise]" && !P.cast) return;
                }
                local.Promise = Promise$1;
            } // Strange compat..
            Promise$1.polyfill = polyfill;
            Promise$1.Promise = Promise$1;
            return Promise$1;
        });
    });
    var Promise$1 = typeof Promise !== "undefined" ? Promise : es6Promise;
    function registerLoggingCallbacks(obj) {
        var i, l, key, callbackNames = [
            "begin",
            "done",
            "log",
            "testStart",
            "testDone",
            "moduleStart",
            "moduleDone"
        ];
        function registerLoggingCallback(key) {
            var loggingCallback = function loggingCallback(callback) {
                if (objectType(callback) !== "function") throw new Error("QUnit logging methods require a callback function as their first parameters.");
                config.callbacks[key].push(callback);
            };
            return loggingCallback;
        }
        for(i = 0, l = callbackNames.length; i < l; i++){
            key = callbackNames[i]; // Initialize key collection of logging callback
            if (objectType(config.callbacks[key]) === "undefined") config.callbacks[key] = [];
            obj[key] = registerLoggingCallback(key);
        }
    }
    function runLoggingCallbacks(key, args) {
        var callbacks = config.callbacks[key]; // Handling 'log' callbacks separately. Unlike the other callbacks,
        // the log callback is not controlled by the processing queue,
        // but rather used by asserts. Hence to promisfy the 'log' callback
        // would mean promisfying each step of a test
        if (key === "log") {
            callbacks.map(function(callback) {
                return callback(args);
            });
            return;
        } // ensure that each callback is executed serially
        return callbacks.reduce(function(promiseChain, callback) {
            return promiseChain.then(function() {
                return Promise$1.resolve(callback(args));
            });
        }, Promise$1.resolve([]));
    }
    // Doesn't support IE9, it will return undefined on these browsers
    // See also https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error/Stack
    var fileName = (sourceFromStacktrace(0) || "").replace(/(:\d+)+\)?/, "").replace(/.+\//, "");
    function extractStacktrace(e, offset) {
        offset = offset === undefined ? 4 : offset;
        var stack, include, i;
        if (e && e.stack) {
            stack = e.stack.split("\n");
            if (/^error$/i.test(stack[0])) stack.shift();
            if (fileName) {
                include = [];
                for(i = offset; i < stack.length; i++){
                    if (stack[i].indexOf(fileName) !== -1) break;
                    include.push(stack[i]);
                }
                if (include.length) return include.join("\n");
            }
            return stack[offset];
        }
    }
    function sourceFromStacktrace(offset) {
        var error = new Error(); // Support: Safari <=7 only, IE <=10 - 11 only
        // Not all browsers generate the `stack` property for `new Error()`, see also #636
        if (!error.stack) try {
            throw error;
        } catch (err) {
            error = err;
        }
        return extractStacktrace(error, offset);
    }
    var priorityCount = 0;
    var unitSampler; // This is a queue of functions that are tasks within a single test.
    // After tests are dequeued from config.queue they are expanded into
    // a set of tasks in this queue.
    var taskQueue = [];
    /**
	 * Advances the taskQueue to the next task. If the taskQueue is empty,
	 * process the testQueue
	 */ function advance() {
        advanceTaskQueue();
        if (!taskQueue.length && !config.blocking && !config.current) advanceTestQueue();
    }
    /**
	 * Advances the taskQueue with an increased depth
	 */ function advanceTaskQueue() {
        var start = now();
        config.depth = (config.depth || 0) + 1;
        processTaskQueue(start);
        config.depth--;
    }
    /**
	 * Process the first task on the taskQueue as a promise.
	 * Each task is a function returned by https://github.com/qunitjs/qunit/blob/master/src/test.js#L381
	 */ function processTaskQueue(start) {
        if (taskQueue.length && !config.blocking) {
            var elapsedTime = now() - start;
            if (!defined.setTimeout || config.updateRate <= 0 || elapsedTime < config.updateRate) {
                var task = taskQueue.shift();
                Promise$1.resolve(task()).then(function() {
                    if (!taskQueue.length) advance();
                    else processTaskQueue(start);
                });
            } else setTimeout$1(advance);
        }
    }
    /**
	 * Advance the testQueue to the next test to process. Call done() if testQueue completes.
	 */ function advanceTestQueue() {
        if (!config.blocking && !config.queue.length && config.depth === 0) {
            done();
            return;
        }
        var testTasks = config.queue.shift();
        addToTaskQueue(testTasks());
        if (priorityCount > 0) priorityCount--;
        advance();
    }
    /**
	 * Enqueue the tasks for a test into the task queue.
	 * @param {Array} tasksArray
	 */ function addToTaskQueue(tasksArray) {
        taskQueue.push.apply(taskQueue, _toConsumableArray(tasksArray));
    }
    /**
	 * Return the number of tasks remaining in the task queue to be processed.
	 * @return {Number}
	 */ function taskQueueLength() {
        return taskQueue.length;
    }
    /**
	 * Adds a test to the TestQueue for execution.
	 * @param {Function} testTasksFunc
	 * @param {Boolean} prioritize
	 * @param {String} seed
	 */ function addToTestQueue(testTasksFunc, prioritize, seed) {
        if (prioritize) config.queue.splice(priorityCount++, 0, testTasksFunc);
        else if (seed) {
            if (!unitSampler) unitSampler = unitSamplerGenerator(seed);
             // Insert into a random position after all prioritized items
            var index = Math.floor(unitSampler() * (config.queue.length - priorityCount + 1));
            config.queue.splice(priorityCount + index, 0, testTasksFunc);
        } else config.queue.push(testTasksFunc);
    }
    /**
	 * Creates a seeded "sample" generator which is used for randomizing tests.
	 */ function unitSamplerGenerator(seed) {
        // 32-bit xorshift, requires only a nonzero seed
        // https://excamera.com/sphinx/article-xorshift.html
        var sample = parseInt(generateHash(seed), 16) || -1;
        return function() {
            sample ^= sample << 13;
            sample ^= sample >>> 17;
            sample ^= sample << 5; // ECMAScript has no unsigned number type
            if (sample < 0) sample += 0x100000000;
            return sample / 0x100000000;
        };
    }
    /**
	 * This function is called when the ProcessingQueue is done processing all
	 * items. It handles emitting the final run events.
	 */ function done() {
        var storage = config.storage;
        ProcessingQueue.finished = true;
        var runtime = now() - config.started;
        var passed = config.stats.all - config.stats.bad;
        if (config.stats.testCount === 0) {
            if (config.filter && config.filter.length) throw new Error('No tests matched the filter "'.concat(config.filter, '".'));
            if (config.module && config.module.length) throw new Error('No tests matched the module "'.concat(config.module, '".'));
            if (config.moduleId && config.moduleId.length) throw new Error('No tests matched the moduleId "'.concat(config.moduleId, '".'));
            if (config.testId && config.testId.length) throw new Error('No tests matched the testId "'.concat(config.testId, '".'));
            throw new Error("No tests were run.");
        }
        emit("runEnd", globalSuite.end(true));
        runLoggingCallbacks("done", {
            passed: passed,
            failed: config.stats.bad,
            total: config.stats.all,
            runtime: runtime
        }).then(function() {
            // Clear own storage items if all tests passed
            if (storage && config.stats.bad === 0) for(var i = storage.length - 1; i >= 0; i--){
                var key = storage.key(i);
                if (key.indexOf("qunit-test-") === 0) storage.removeItem(key);
            }
        });
    }
    var ProcessingQueue = {
        finished: false,
        add: addToTestQueue,
        advance: advance,
        taskCount: taskQueueLength
    };
    var TestReport = /*#__PURE__*/ function() {
        function TestReport(name, suite, options) {
            _classCallCheck(this, TestReport);
            this.name = name;
            this.suiteName = suite.name;
            this.fullName = suite.fullName.concat(name);
            this.runtime = 0;
            this.assertions = [];
            this.skipped = !!options.skip;
            this.todo = !!options.todo;
            this.valid = options.valid;
            this._startTime = 0;
            this._endTime = 0;
            suite.pushTest(this);
        }
        _createClass(TestReport, [
            {
                key: "start",
                value: function start(recordTime) {
                    if (recordTime) {
                        this._startTime = performanceNow();
                        if (performance) performance.mark("qunit_test_start");
                    }
                    return {
                        name: this.name,
                        suiteName: this.suiteName,
                        fullName: this.fullName.slice()
                    };
                }
            },
            {
                key: "end",
                value: function end(recordTime) {
                    if (recordTime) {
                        this._endTime = performanceNow();
                        if (performance) {
                            performance.mark("qunit_test_end");
                            var testName = this.fullName.join(" – ");
                            measure("QUnit Test: ".concat(testName), "qunit_test_start", "qunit_test_end");
                        }
                    }
                    return extend(this.start(), {
                        runtime: this.getRuntime(),
                        status: this.getStatus(),
                        errors: this.getFailedAssertions(),
                        assertions: this.getAssertions()
                    });
                }
            },
            {
                key: "pushAssertion",
                value: function pushAssertion(assertion) {
                    this.assertions.push(assertion);
                }
            },
            {
                key: "getRuntime",
                value: function getRuntime() {
                    return this._endTime - this._startTime;
                }
            },
            {
                key: "getStatus",
                value: function getStatus() {
                    if (this.skipped) return "skipped";
                    var testPassed = this.getFailedAssertions().length > 0 ? this.todo : !this.todo;
                    if (!testPassed) return "failed";
                    else if (this.todo) return "todo";
                    else return "passed";
                }
            },
            {
                key: "getFailedAssertions",
                value: function getFailedAssertions() {
                    return this.assertions.filter(function(assertion) {
                        return !assertion.passed;
                    });
                }
            },
            {
                key: "getAssertions",
                value: function getAssertions() {
                    return this.assertions.slice();
                } // Remove actual and expected values from assertions. This is to prevent
            },
            {
                key: "slimAssertions",
                value: function slimAssertions() {
                    this.assertions = this.assertions.map(function(assertion) {
                        delete assertion.actual;
                        delete assertion.expected;
                        return assertion;
                    });
                }
            }
        ]);
        return TestReport;
    }();
    var focused$1 = false;
    function Test(settings) {
        var i, l;
        ++Test.count;
        this.expected = null;
        this.assertions = [];
        this.semaphore = 0;
        this.module = config.currentModule;
        this.steps = [];
        this.timeout = undefined;
        this.errorForStack = new Error(); // If a module is skipped, all its tests and the tests of the child suites
        // should be treated as skipped even if they are defined as `only` or `todo`.
        // As for `todo` module, all its tests will be treated as `todo` except for
        // tests defined as `skip` which will be left intact.
        //
        // So, if a test is defined as `todo` and is inside a skipped module, we should
        // then treat that test as if was defined as `skip`.
        if (this.module.skip) {
            settings.skip = true;
            settings.todo = false; // Skipped tests should be left intact
        } else if (this.module.todo && !settings.skip) settings.todo = true;
        extend(this, settings);
        this.testReport = new TestReport(settings.testName, this.module.suiteReport, {
            todo: settings.todo,
            skip: settings.skip,
            valid: this.valid()
        }); // Register unique strings
        for(i = 0, l = this.module.tests; i < l.length; i++)if (this.module.tests[i].name === this.testName) this.testName += " ";
        this.testId = generateHash(this.module.name, this.testName);
        this.module.tests.push({
            name: this.testName,
            testId: this.testId,
            skip: !!settings.skip
        });
        if (settings.skip) {
            // Skipped tests will fully ignore any sent callback
            this.callback = function() {};
            this.async = false;
            this.expected = 0;
        } else {
            if (typeof this.callback !== "function") {
                var method = this.todo ? "todo" : "test"; // eslint-disable-next-line max-len
                throw new TypeError("You must provide a function as a test callback to QUnit.".concat(method, '("').concat(settings.testName, '")'));
            }
            this.assert = new Assert(this);
        }
    }
    Test.count = 0;
    function getNotStartedModules(startModule) {
        var module1 = startModule, modules = [];
        while(module1 && module1.testsRun === 0){
            modules.push(module1);
            module1 = module1.parentModule;
        } // The above push modules from the child to the parent
        // return a reversed order with the top being the top most parent module
        return modules.reverse();
    }
    Test.prototype = {
        // generating a stack trace can be expensive, so using a getter defers this until we need it
        get stack () {
            return extractStacktrace(this.errorForStack, 2);
        },
        before: function before() {
            var _this = this;
            var module1 = this.module, notStartedModules = getNotStartedModules(module1); // ensure the callbacks are executed serially for each module
            var callbackPromises = notStartedModules.reduce(function(promiseChain, startModule) {
                return promiseChain.then(function() {
                    startModule.stats = {
                        all: 0,
                        bad: 0,
                        started: now()
                    };
                    emit("suiteStart", startModule.suiteReport.start(true));
                    return runLoggingCallbacks("moduleStart", {
                        name: startModule.name,
                        tests: startModule.tests
                    });
                });
            }, Promise$1.resolve([]));
            return callbackPromises.then(function() {
                config.current = _this;
                _this.testEnvironment = extend({}, module1.testEnvironment);
                _this.started = now();
                emit("testStart", _this.testReport.start(true));
                return runLoggingCallbacks("testStart", {
                    name: _this.testName,
                    module: module1.name,
                    testId: _this.testId,
                    previousFailure: _this.previousFailure
                }).then(function() {
                    if (!config.pollution) saveGlobal();
                });
            });
        },
        run: function run() {
            var promise;
            config.current = this;
            this.callbackStarted = now();
            if (config.notrycatch) {
                runTest(this);
                return;
            }
            try {
                runTest(this);
            } catch (e) {
                this.pushFailure("Died on test #" + (this.assertions.length + 1) + " " + this.stack + ": " + (e.message || e), extractStacktrace(e, 0)); // Else next test will carry the responsibility
                saveGlobal(); // Restart the tests if they're blocking
                if (config.blocking) internalRecover(this);
            }
            function runTest(test) {
                promise = test.callback.call(test.testEnvironment, test.assert);
                test.resolvePromise(promise); // If the test has a "lock" on it, but the timeout is 0, then we push a
                // failure as the test should be synchronous.
                if (test.timeout === 0 && test.semaphore !== 0) pushFailure("Test did not finish synchronously even though assert.timeout( 0 ) was used.", sourceFromStacktrace(2));
            }
        },
        after: function after() {
            checkPollution();
        },
        queueHook: function queueHook(hook, hookName, hookOwner) {
            var _this2 = this;
            var callHook = function callHook() {
                var promise = hook.call(_this2.testEnvironment, _this2.assert);
                _this2.resolvePromise(promise, hookName);
            };
            var runHook = function runHook() {
                if (hookName === "before") {
                    if (hookOwner.unskippedTestsRun !== 0) return;
                    _this2.preserveEnvironment = true;
                } // The 'after' hook should only execute when there are not tests left and
                // when the 'after' and 'finish' tasks are the only tasks left to process
                if (hookName === "after" && hookOwner.unskippedTestsRun !== numberOfUnskippedTests(hookOwner) - 1 && (config.queue.length > 0 || ProcessingQueue.taskCount() > 2)) return;
                config.current = _this2;
                if (config.notrycatch) {
                    callHook();
                    return;
                }
                try {
                    callHook();
                } catch (error) {
                    _this2.pushFailure(hookName + " failed on " + _this2.testName + ": " + (error.message || error), extractStacktrace(error, 0));
                }
            };
            return runHook;
        },
        // Currently only used for module level hooks, can be used to add global level ones
        hooks: function hooks(handler) {
            var hooks = [];
            function processHooks(test, module1) {
                if (module1.parentModule) processHooks(test, module1.parentModule);
                if (module1.hooks[handler].length) for(var i = 0; i < module1.hooks[handler].length; i++)hooks.push(test.queueHook(module1.hooks[handler][i], handler, module1));
            } // Hooks are ignored on skipped tests
            if (!this.skip) processHooks(this, this.module);
            return hooks;
        },
        finish: function finish() {
            config.current = this; // Release the test callback to ensure that anything referenced has been
            // released to be garbage collected.
            this.callback = undefined;
            if (this.steps.length) {
                var stepsList = this.steps.join(", ");
                this.pushFailure("Expected assert.verifySteps() to be called before end of test " + "after using assert.step(). Unverified steps: ".concat(stepsList), this.stack);
            }
            if (config.requireExpects && this.expected === null) this.pushFailure("Expected number of assertions to be defined, but expect() was not called.", this.stack);
            else if (this.expected !== null && this.expected !== this.assertions.length) this.pushFailure("Expected " + this.expected + " assertions, but " + this.assertions.length + " were run", this.stack);
            else if (this.expected === null && !this.assertions.length) this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.", this.stack);
            var i, module1 = this.module, moduleName = module1.name, testName = this.testName, skipped = !!this.skip, todo = !!this.todo, bad = 0, storage = config.storage;
            this.runtime = now() - this.started;
            config.stats.all += this.assertions.length;
            config.stats.testCount += 1;
            module1.stats.all += this.assertions.length;
            for(i = 0; i < this.assertions.length; i++)if (!this.assertions[i].result) {
                bad++;
                config.stats.bad++;
                module1.stats.bad++;
            }
            notifyTestsRan(module1, skipped); // Store result when possible
            if (storage) {
                if (bad) storage.setItem("qunit-test-" + moduleName + "-" + testName, bad);
                else storage.removeItem("qunit-test-" + moduleName + "-" + testName);
            } // After emitting the js-reporters event we cleanup the assertion data to
            // avoid leaking it. It is not used by the legacy testDone callbacks.
            emit("testEnd", this.testReport.end(true));
            this.testReport.slimAssertions();
            var test = this;
            return runLoggingCallbacks("testDone", {
                name: testName,
                module: moduleName,
                skipped: skipped,
                todo: todo,
                failed: bad,
                passed: this.assertions.length - bad,
                total: this.assertions.length,
                runtime: skipped ? 0 : this.runtime,
                // HTML Reporter use
                assertions: this.assertions,
                testId: this.testId,
                // Source of Test
                // generating stack trace is expensive, so using a getter will help defer this until we need it
                get source () {
                    return test.stack;
                }
            }).then(function() {
                if (module1.testsRun === numberOfTests(module1)) {
                    var completedModules = [
                        module1
                    ]; // Check if the parent modules, iteratively, are done. If that the case,
                    // we emit the `suiteEnd` event and trigger `moduleDone` callback.
                    var parent = module1.parentModule;
                    while(parent && parent.testsRun === numberOfTests(parent)){
                        completedModules.push(parent);
                        parent = parent.parentModule;
                    }
                    return completedModules.reduce(function(promiseChain, completedModule) {
                        return promiseChain.then(function() {
                            return logSuiteEnd(completedModule);
                        });
                    }, Promise$1.resolve([]));
                }
            }).then(function() {
                config.current = undefined;
            });
            function logSuiteEnd(module1) {
                // Reset `module.hooks` to ensure that anything referenced in these hooks
                // has been released to be garbage collected.
                module1.hooks = {};
                emit("suiteEnd", module1.suiteReport.end(true));
                return runLoggingCallbacks("moduleDone", {
                    name: module1.name,
                    tests: module1.tests,
                    failed: module1.stats.bad,
                    passed: module1.stats.all - module1.stats.bad,
                    total: module1.stats.all,
                    runtime: now() - module1.stats.started
                });
            }
        },
        preserveTestEnvironment: function preserveTestEnvironment() {
            if (this.preserveEnvironment) {
                this.module.testEnvironment = this.testEnvironment;
                this.testEnvironment = extend({}, this.module.testEnvironment);
            }
        },
        queue: function queue() {
            var test = this;
            if (!this.valid()) return;
            function runTest() {
                return [
                    function() {
                        return test.before();
                    }
                ].concat(_toConsumableArray(test.hooks("before")), [
                    function() {
                        test.preserveTestEnvironment();
                    }
                ], _toConsumableArray(test.hooks("beforeEach")), [
                    function() {
                        test.run();
                    }
                ], _toConsumableArray(test.hooks("afterEach").reverse()), _toConsumableArray(test.hooks("after").reverse()), [
                    function() {
                        test.after();
                    },
                    function() {
                        return test.finish();
                    }
                ]);
            }
            var previousFailCount = config.storage && +config.storage.getItem("qunit-test-" + this.module.name + "-" + this.testName); // Prioritize previously failed tests, detected from storage
            var prioritize = config.reorder && !!previousFailCount;
            this.previousFailure = !!previousFailCount;
            ProcessingQueue.add(runTest, prioritize, config.seed); // If the queue has already finished, we manually process the new test
            if (ProcessingQueue.finished) ProcessingQueue.advance();
        },
        pushResult: function pushResult(resultInfo) {
            if (this !== config.current) throw new Error("Assertion occurred after test had finished.");
             // Destructure of resultInfo = { result, actual, expected, message, negative }
            var source, details = {
                module: this.module.name,
                name: this.testName,
                result: resultInfo.result,
                message: resultInfo.message,
                actual: resultInfo.actual,
                testId: this.testId,
                negative: resultInfo.negative || false,
                runtime: now() - this.started,
                todo: !!this.todo
            };
            if (hasOwn.call(resultInfo, "expected")) details.expected = resultInfo.expected;
            if (!resultInfo.result) {
                source = resultInfo.source || sourceFromStacktrace();
                if (source) details.source = source;
            }
            this.logAssertion(details);
            this.assertions.push({
                result: !!resultInfo.result,
                message: resultInfo.message
            });
        },
        pushFailure: function pushFailure(message, source, actual) {
            if (!(this instanceof Test)) throw new Error("pushFailure() assertion outside test context, was " + sourceFromStacktrace(2));
            this.pushResult({
                result: false,
                message: message || "error",
                actual: actual || null,
                source: source
            });
        },
        /**
	   * Log assertion details using both the old QUnit.log interface and
	   * QUnit.on( "assertion" ) interface.
	   *
	   * @private
	   */ logAssertion: function logAssertion(details) {
            runLoggingCallbacks("log", details);
            var assertion = {
                passed: details.result,
                actual: details.actual,
                expected: details.expected,
                message: details.message,
                stack: details.source,
                todo: details.todo
            };
            this.testReport.pushAssertion(assertion);
            emit("assertion", assertion);
        },
        resolvePromise: function resolvePromise(promise, phase) {
            var then, resume, message, test = this;
            if (promise != null) {
                then = promise.then;
                if (objectType(then) === "function") {
                    resume = internalStop(test);
                    if (config.notrycatch) then.call(promise, function() {
                        resume();
                    });
                    else then.call(promise, function() {
                        resume();
                    }, function(error) {
                        message = "Promise rejected " + (!phase ? "during" : phase.replace(/Each$/, "")) + ' "' + test.testName + '": ' + (error && error.message || error);
                        test.pushFailure(message, extractStacktrace(error, 0)); // Else next test will carry the responsibility
                        saveGlobal(); // Unblock
                        internalRecover(test);
                    });
                }
            }
        },
        valid: function valid() {
            var filter = config.filter, regexFilter = /^(!?)\/([\w\W]*)\/(i?$)/.exec(filter), module1 = config.module && config.module.toLowerCase(), fullName = this.module.name + ": " + this.testName;
            function moduleChainNameMatch(testModule) {
                var testModuleName = testModule.name ? testModule.name.toLowerCase() : null;
                if (testModuleName === module1) return true;
                else if (testModule.parentModule) return moduleChainNameMatch(testModule.parentModule);
                else return false;
            }
            function moduleChainIdMatch(testModule) {
                return inArray(testModule.moduleId, config.moduleId) || testModule.parentModule && moduleChainIdMatch(testModule.parentModule);
            } // Internally-generated tests are always valid
            if (this.callback && this.callback.validTest) return true;
            if (config.moduleId && config.moduleId.length > 0 && !moduleChainIdMatch(this.module)) return false;
            if (config.testId && config.testId.length > 0 && !inArray(this.testId, config.testId)) return false;
            if (module1 && !moduleChainNameMatch(this.module)) return false;
            if (!filter) return true;
            return regexFilter ? this.regexFilter(!!regexFilter[1], regexFilter[2], regexFilter[3], fullName) : this.stringFilter(filter, fullName);
        },
        regexFilter: function regexFilter(exclude, pattern, flags, fullName) {
            var regex = new RegExp(pattern, flags);
            var match = regex.test(fullName);
            return match !== exclude;
        },
        stringFilter: function stringFilter(filter, fullName) {
            filter = filter.toLowerCase();
            fullName = fullName.toLowerCase();
            var include = filter.charAt(0) !== "!";
            if (!include) filter = filter.slice(1);
             // If the filter matches, we need to honour include
            if (fullName.indexOf(filter) !== -1) return include;
             // Otherwise, do the opposite
            return !include;
        }
    };
    function pushFailure() {
        if (!config.current) throw new Error("pushFailure() assertion outside test context, in " + sourceFromStacktrace(2));
         // Gets current test obj
        var currentTest = config.current;
        return currentTest.pushFailure.apply(currentTest, arguments);
    }
    function saveGlobal() {
        config.pollution = [];
        if (config.noglobals) {
            for(var key in global__default["default"])if (hasOwn.call(global__default["default"], key)) {
                // In Opera sometimes DOM element ids show up here, ignore them
                if (/^qunit-test-output/.test(key)) continue;
                config.pollution.push(key);
            }
        }
    }
    function checkPollution() {
        var newGlobals, deletedGlobals, old = config.pollution;
        saveGlobal();
        newGlobals = diff(config.pollution, old);
        if (newGlobals.length > 0) pushFailure("Introduced global variable(s): " + newGlobals.join(", "));
        deletedGlobals = diff(old, config.pollution);
        if (deletedGlobals.length > 0) pushFailure("Deleted global variable(s): " + deletedGlobals.join(", "));
    } // Will be exposed as QUnit.test
    function test(testName, callback) {
        if (focused$1) return;
        var newTest = new Test({
            testName: testName,
            callback: callback
        });
        newTest.queue();
    }
    function todo(testName, callback) {
        if (focused$1) return;
        var newTest = new Test({
            testName: testName,
            callback: callback,
            todo: true
        });
        newTest.queue();
    } // Will be exposed as QUnit.skip
    function skip(testName) {
        if (focused$1) return;
        var test = new Test({
            testName: testName,
            skip: true
        });
        test.queue();
    } // Will be exposed as QUnit.only
    function only(testName, callback) {
        if (!focused$1) {
            config.queue.length = 0;
            focused$1 = true;
        }
        var newTest = new Test({
            testName: testName,
            callback: callback
        });
        newTest.queue();
    } // Resets config.timeout with a new timeout duration.
    function resetTestTimeout(timeoutDuration) {
        clearTimeout(config.timeout);
        config.timeout = setTimeout$1(config.timeoutHandler(timeoutDuration), timeoutDuration);
    } // Put a hold on processing and return a function that will release it.
    function internalStop(test) {
        var released = false;
        test.semaphore += 1;
        config.blocking = true; // Set a recovery timeout, if so configured.
        if (defined.setTimeout) {
            var timeoutDuration;
            if (typeof test.timeout === "number") timeoutDuration = test.timeout;
            else if (typeof config.testTimeout === "number") timeoutDuration = config.testTimeout;
            if (typeof timeoutDuration === "number" && timeoutDuration > 0) {
                clearTimeout(config.timeout);
                config.timeoutHandler = function(timeout) {
                    return function() {
                        pushFailure("Test took longer than ".concat(timeout, "ms; test timed out."), sourceFromStacktrace(2));
                        released = true;
                        internalRecover(test);
                    };
                };
                config.timeout = setTimeout$1(config.timeoutHandler(timeoutDuration), timeoutDuration);
            }
        }
        return function resume() {
            if (released) return;
            released = true;
            test.semaphore -= 1;
            internalStart(test);
        };
    } // Forcefully release all processing holds.
    function internalRecover(test) {
        test.semaphore = 0;
        internalStart(test);
    } // Release a processing hold, scheduling a resumption attempt if no holds remain.
    function internalStart(test) {
        // If semaphore is non-numeric, throw error
        if (isNaN(test.semaphore)) {
            test.semaphore = 0;
            pushFailure("Invalid value on test.semaphore", sourceFromStacktrace(2));
            return;
        } // Don't start until equal number of stop-calls
        if (test.semaphore > 0) return;
         // Throw an Error if start is called more often than stop
        if (test.semaphore < 0) {
            test.semaphore = 0;
            pushFailure("Tried to restart test while already started (test's semaphore was 0 already)", sourceFromStacktrace(2));
            return;
        } // Add a slight delay to allow more assertions etc.
        if (defined.setTimeout) {
            if (config.timeout) clearTimeout(config.timeout);
            config.timeout = setTimeout$1(function() {
                if (test.semaphore > 0) return;
                if (config.timeout) clearTimeout(config.timeout);
                begin();
            });
        } else begin();
    }
    function collectTests(module1) {
        var tests = [].concat(module1.tests);
        var modules = _toConsumableArray(module1.childModules); // Do a breadth-first traversal of the child modules
        while(modules.length){
            var nextModule = modules.shift();
            tests.push.apply(tests, nextModule.tests);
            modules.push.apply(modules, _toConsumableArray(nextModule.childModules));
        }
        return tests;
    }
    function numberOfTests(module1) {
        return collectTests(module1).length;
    }
    function numberOfUnskippedTests(module1) {
        return collectTests(module1).filter(function(test) {
            return !test.skip;
        }).length;
    }
    function notifyTestsRan(module1, skipped) {
        module1.testsRun++;
        if (!skipped) module1.unskippedTestsRun++;
        while(module1 = module1.parentModule){
            module1.testsRun++;
            if (!skipped) module1.unskippedTestsRun++;
        }
    }
    var Assert = /*#__PURE__*/ function() {
        function Assert(testContext) {
            _classCallCheck(this, Assert);
            this.test = testContext;
        } // Assert helpers
        _createClass(Assert, [
            {
                key: "timeout",
                value: function timeout(duration) {
                    if (typeof duration !== "number") throw new Error("You must pass a number as the duration to assert.timeout");
                    this.test.timeout = duration; // If a timeout has been set, clear it and reset with the new duration
                    if (config.timeout) {
                        clearTimeout(config.timeout);
                        if (config.timeoutHandler && this.test.timeout > 0) resetTestTimeout(this.test.timeout);
                    }
                } // Documents a "step", which is a string value, in a test as a passing assertion
            },
            {
                key: "step",
                value: function step(message) {
                    var assertionMessage = message;
                    var result = !!message;
                    this.test.steps.push(message);
                    if (objectType(message) === "undefined" || message === "") assertionMessage = "You must provide a message to assert.step";
                    else if (objectType(message) !== "string") {
                        assertionMessage = "You must provide a string value to assert.step";
                        result = false;
                    }
                    this.pushResult({
                        result: result,
                        message: assertionMessage
                    });
                } // Verifies the steps in a test match a given array of string values
            },
            {
                key: "verifySteps",
                value: function verifySteps(steps, message) {
                    // Since the steps array is just string values, we can clone with slice
                    var actualStepsClone = this.test.steps.slice();
                    this.deepEqual(actualStepsClone, steps, message);
                    this.test.steps.length = 0;
                } // Specify the number of expected assertions to guarantee that failed test
            },
            {
                key: "expect",
                value: function expect(asserts) {
                    if (arguments.length === 1) this.test.expected = asserts;
                    else return this.test.expected;
                } // Put a hold on processing and return a function that will release it a maximum of once.
            },
            {
                key: "async",
                value: function async(count) {
                    var test = this.test;
                    var popped = false, acceptCallCount = count;
                    if (typeof acceptCallCount === "undefined") acceptCallCount = 1;
                    var resume = internalStop(test);
                    return function done() {
                        if (config.current !== test) throw Error("assert.async callback called after test finished.");
                        if (popped) {
                            test.pushFailure("Too many calls to the `assert.async` callback", sourceFromStacktrace(2));
                            return;
                        }
                        acceptCallCount -= 1;
                        if (acceptCallCount > 0) return;
                        popped = true;
                        resume();
                    };
                } // Exports test.push() to the user API
            },
            {
                key: "push",
                value: function push(result, actual, expected, message, negative) {
                    Logger.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult).");
                    var currentAssert = this instanceof Assert ? this : config.current.assert;
                    return currentAssert.pushResult({
                        result: result,
                        actual: actual,
                        expected: expected,
                        message: message,
                        negative: negative
                    });
                }
            },
            {
                key: "pushResult",
                value: function pushResult(resultInfo) {
                    // Destructure of resultInfo = { result, actual, expected, message, negative }
                    var assert = this;
                    var currentTest = assert instanceof Assert && assert.test || config.current; // Backwards compatibility fix.
                    // Allows the direct use of global exported assertions and QUnit.assert.*
                    // Although, it's use is not recommended as it can leak assertions
                    // to other tests from async tests, because we only get a reference to the current test,
                    // not exactly the test where assertion were intended to be called.
                    if (!currentTest) throw new Error("assertion outside test context, in " + sourceFromStacktrace(2));
                    if (!(assert instanceof Assert)) assert = currentTest.assert;
                    return assert.test.pushResult(resultInfo);
                }
            },
            {
                key: "ok",
                value: function ok(result, message) {
                    if (!message) message = result ? "okay" : "failed, expected argument to be truthy, was: ".concat(dump.parse(result));
                    this.pushResult({
                        result: !!result,
                        actual: result,
                        expected: true,
                        message: message
                    });
                }
            },
            {
                key: "notOk",
                value: function notOk(result, message) {
                    if (!message) message = !result ? "okay" : "failed, expected argument to be falsy, was: ".concat(dump.parse(result));
                    this.pushResult({
                        result: !result,
                        actual: result,
                        expected: false,
                        message: message
                    });
                }
            },
            {
                key: "true",
                value: function _true(result, message) {
                    this.pushResult({
                        result: result === true,
                        actual: result,
                        expected: true,
                        message: message
                    });
                }
            },
            {
                key: "false",
                value: function _false(result, message) {
                    this.pushResult({
                        result: result === false,
                        actual: result,
                        expected: false,
                        message: message
                    });
                }
            },
            {
                key: "equal",
                value: function equal(actual, expected, message) {
                    // eslint-disable-next-line eqeqeq
                    var result = expected == actual;
                    this.pushResult({
                        result: result,
                        actual: actual,
                        expected: expected,
                        message: message
                    });
                }
            },
            {
                key: "notEqual",
                value: function notEqual(actual, expected, message) {
                    // eslint-disable-next-line eqeqeq
                    var result = expected != actual;
                    this.pushResult({
                        result: result,
                        actual: actual,
                        expected: expected,
                        message: message,
                        negative: true
                    });
                }
            },
            {
                key: "propEqual",
                value: function propEqual(actual, expected, message) {
                    actual = objectValues(actual);
                    expected = objectValues(expected);
                    this.pushResult({
                        result: equiv(actual, expected),
                        actual: actual,
                        expected: expected,
                        message: message
                    });
                }
            },
            {
                key: "notPropEqual",
                value: function notPropEqual(actual, expected, message) {
                    actual = objectValues(actual);
                    expected = objectValues(expected);
                    this.pushResult({
                        result: !equiv(actual, expected),
                        actual: actual,
                        expected: expected,
                        message: message,
                        negative: true
                    });
                }
            },
            {
                key: "deepEqual",
                value: function deepEqual(actual, expected, message) {
                    this.pushResult({
                        result: equiv(actual, expected),
                        actual: actual,
                        expected: expected,
                        message: message
                    });
                }
            },
            {
                key: "notDeepEqual",
                value: function notDeepEqual(actual, expected, message) {
                    this.pushResult({
                        result: !equiv(actual, expected),
                        actual: actual,
                        expected: expected,
                        message: message,
                        negative: true
                    });
                }
            },
            {
                key: "strictEqual",
                value: function strictEqual(actual, expected, message) {
                    this.pushResult({
                        result: expected === actual,
                        actual: actual,
                        expected: expected,
                        message: message
                    });
                }
            },
            {
                key: "notStrictEqual",
                value: function notStrictEqual(actual, expected, message) {
                    this.pushResult({
                        result: expected !== actual,
                        actual: actual,
                        expected: expected,
                        message: message,
                        negative: true
                    });
                }
            },
            {
                key: "throws",
                value: function throws(block, expected, message) {
                    var actual, result = false;
                    var currentTest = this instanceof Assert && this.test || config.current; // 'expected' is optional unless doing string comparison
                    if (objectType(expected) === "string") {
                        if (message == null) {
                            message = expected;
                            expected = null;
                        } else throw new Error("throws/raises does not accept a string value for the expected argument.\nUse a non-string object value (e.g. regExp) instead if it's necessary.");
                    }
                    currentTest.ignoreGlobalErrors = true;
                    try {
                        block.call(currentTest.testEnvironment);
                    } catch (e) {
                        actual = e;
                    }
                    currentTest.ignoreGlobalErrors = false;
                    if (actual) {
                        var expectedType = objectType(expected); // We don't want to validate thrown error
                        if (!expected) result = true; // Expected is a regexp
                        else if (expectedType === "regexp") {
                            result = expected.test(errorString(actual)); // Log the string form of the regexp
                            expected = String(expected); // Expected is a constructor, maybe an Error constructor
                        } else if (expectedType === "function" && actual instanceof expected) result = true; // Expected is an Error object
                        else if (expectedType === "object") {
                            result = actual instanceof expected.constructor && actual.name === expected.name && actual.message === expected.message; // Log the string form of the Error object
                            expected = errorString(expected); // Expected is a validation function which returns true if validation passed
                        } else if (expectedType === "function" && expected.call({}, actual) === true) {
                            expected = null;
                            result = true;
                        }
                    }
                    currentTest.assert.pushResult({
                        result: result,
                        // undefined if it didn't throw
                        actual: actual && errorString(actual),
                        expected: expected,
                        message: message
                    });
                }
            },
            {
                key: "rejects",
                value: function rejects(promise, expected, message) {
                    var result = false;
                    var currentTest = this instanceof Assert && this.test || config.current; // 'expected' is optional unless doing string comparison
                    if (objectType(expected) === "string") {
                        if (message === undefined) {
                            message = expected;
                            expected = undefined;
                        } else {
                            message = "assert.rejects does not accept a string value for the expected argument.\nUse a non-string object value (e.g. validator function) instead if necessary.";
                            currentTest.assert.pushResult({
                                result: false,
                                message: message
                            });
                            return;
                        }
                    }
                    var then = promise && promise.then;
                    if (objectType(then) !== "function") {
                        var _message = 'The value provided to `assert.rejects` in "' + currentTest.testName + '" was not a promise.';
                        currentTest.assert.pushResult({
                            result: false,
                            message: _message,
                            actual: promise
                        });
                        return;
                    }
                    var done = this.async();
                    return then.call(promise, function handleFulfillment() {
                        var message = 'The promise returned by the `assert.rejects` callback in "' + currentTest.testName + '" did not reject.';
                        currentTest.assert.pushResult({
                            result: false,
                            message: message,
                            actual: promise
                        });
                        done();
                    }, function handleRejection(actual) {
                        var expectedType = objectType(expected); // We don't want to validate
                        if (expected === undefined) result = true; // Expected is a regexp
                        else if (expectedType === "regexp") {
                            result = expected.test(errorString(actual)); // Log the string form of the regexp
                            expected = String(expected); // Expected is a constructor, maybe an Error constructor
                        } else if (expectedType === "function" && actual instanceof expected) result = true; // Expected is an Error object
                        else if (expectedType === "object") {
                            result = actual instanceof expected.constructor && actual.name === expected.name && actual.message === expected.message; // Log the string form of the Error object
                            expected = errorString(expected); // Expected is a validation function which returns true if validation passed
                        } else if (expectedType === "function") {
                            result = expected.call({}, actual) === true;
                            expected = null; // Expected is some other invalid type
                        } else {
                            result = false;
                            message = 'invalid expected value provided to `assert.rejects` callback in "' + currentTest.testName + '": ' + expectedType + ".";
                        }
                        currentTest.assert.pushResult({
                            result: result,
                            // leave rejection value of undefined as-is
                            actual: actual && errorString(actual),
                            expected: expected,
                            message: message
                        });
                        done();
                    });
                }
            }
        ]);
        return Assert;
    }(); // Provide an alternative to assert.throws(), for environments that consider throws a reserved word
    // Known to us are: Closure Compiler, Narwhal
    // eslint-disable-next-line dot-notation
    Assert.prototype.raises = Assert.prototype["throws"];
    /**
	 * Converts an error into a simple string for comparisons.
	 *
	 * @param {Error|Object} error
	 * @return {String}
	 */ function errorString(error) {
        var resultErrorString = error.toString(); // If the error wasn't a subclass of Error but something like
        // an object literal with name and message properties...
        if (resultErrorString.substring(0, 7) === "[object") {
            var name = error.name ? error.name.toString() : "Error";
            var message = error.message ? error.message.toString() : "";
            if (name && message) return "".concat(name, ": ").concat(message);
            else if (name) return name;
            else if (message) return message;
            else return "Error";
        } else return resultErrorString;
    }
    /* global module, exports, define */ function exportQUnit(QUnit) {
        if (defined.document) {
            // QUnit may be defined when it is preconfigured but then only QUnit and QUnit.config may be defined.
            if (window$1.QUnit && window$1.QUnit.version) throw new Error("QUnit has already been defined.");
            window$1.QUnit = QUnit;
        } // For nodejs
        if (module && module.exports) {
            module.exports = QUnit; // For consistency with CommonJS environments' exports
            module.exports.QUnit = QUnit;
        } // For CommonJS with exports, but without module.exports, like Rhino
        if (exports) exports.QUnit = QUnit;
        if (typeof define === "function" && define.amd) {
            define(function() {
                return QUnit;
            });
            QUnit.config.autostart = false;
        } // For Web/Service Workers
        if (self$1 && self$1.WorkerGlobalScope && self$1 instanceof self$1.WorkerGlobalScope) self$1.QUnit = QUnit;
    }
    // error handling should be suppressed and false otherwise.
    // In this case, we will only suppress further error handling if the
    // "ignoreGlobalErrors" configuration option is enabled.
    function onError(error) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        if (config.current) {
            if (config.current.ignoreGlobalErrors) return true;
            pushFailure.apply(void 0, [
                error.message,
                error.stacktrace || error.fileName + ":" + error.lineNumber
            ].concat(args));
        } else test("global failure", extend(function() {
            pushFailure.apply(void 0, [
                error.message,
                error.stacktrace || error.fileName + ":" + error.lineNumber
            ].concat(args));
        }, {
            validTest: true
        }));
        return false;
    }
    function onUnhandledRejection(reason) {
        var resultInfo = {
            result: false,
            message: reason.message || "error",
            actual: reason,
            source: reason.stack || sourceFromStacktrace(3)
        };
        var currentTest = config.current;
        if (currentTest) currentTest.assert.pushResult(resultInfo);
        else test("global failure", extend(function(assert) {
            assert.pushResult(resultInfo);
        }, {
            validTest: true
        }));
    }
    var QUnit = {};
    var globalSuite = new SuiteReport(); // The initial "currentModule" represents the global (or top-level) module that
    // is not explicitly defined by the user, therefore we add the "globalSuite" to
    // it since each module has a suiteReport associated with it.
    config.currentModule.suiteReport = globalSuite;
    var globalStartCalled = false;
    var runStarted = false; // Figure out if we're running the tests from a server or not
    QUnit.isLocal = !(defined.document && window$1.location.protocol !== "file:"); // Expose the current QUnit version
    QUnit.version = "2.11.3";
    extend(QUnit, {
        on: on,
        module: module$1,
        test: test,
        todo: todo,
        skip: skip,
        only: only,
        start: function start(count) {
            var globalStartAlreadyCalled = globalStartCalled;
            if (!config.current) {
                globalStartCalled = true;
                if (runStarted) throw new Error("Called start() while test already started running");
                else if (globalStartAlreadyCalled || count > 1) throw new Error("Called start() outside of a test context too many times");
                else if (config.autostart) throw new Error("Called start() outside of a test context when QUnit.config.autostart was true");
                else if (!config.pageLoaded) {
                    // The page isn't completely loaded yet, so we set autostart and then
                    // load if we're in Node or wait for the browser's load event.
                    config.autostart = true; // Starts from Node even if .load was not previously called. We still return
                    // early otherwise we'll wind up "beginning" twice.
                    if (!defined.document) QUnit.load();
                    return;
                }
            } else throw new Error("QUnit.start cannot be called inside a test context.");
            scheduleBegin();
        },
        config: config,
        is: is,
        objectType: objectType,
        extend: extend,
        load: function load() {
            config.pageLoaded = true; // Initialize the configuration options
            extend(config, {
                stats: {
                    all: 0,
                    bad: 0,
                    testCount: 0
                },
                started: 0,
                updateRate: 1000,
                autostart: true,
                filter: ""
            }, true);
            if (!runStarted) {
                config.blocking = false;
                if (config.autostart) scheduleBegin();
            }
        },
        stack: function stack(offset) {
            offset = (offset || 0) + 2;
            return sourceFromStacktrace(offset);
        },
        onError: onError,
        onUnhandledRejection: onUnhandledRejection
    });
    QUnit.pushFailure = pushFailure;
    QUnit.assert = Assert.prototype;
    QUnit.equiv = equiv;
    QUnit.dump = dump;
    registerLoggingCallbacks(QUnit);
    function scheduleBegin() {
        runStarted = true; // Add a slight delay to allow definition of more modules and tests.
        if (defined.setTimeout) setTimeout$1(function() {
            begin();
        });
        else begin();
    }
    function unblockAndAdvanceQueue() {
        config.blocking = false;
        ProcessingQueue.advance();
    }
    function begin() {
        var i, l, modulesLog = []; // If the test run hasn't officially begun yet
        if (!config.started) {
            // Record the time of the test run's beginning
            config.started = now(); // Delete the loose unnamed module if unused.
            if (config.modules[0].name === "" && config.modules[0].tests.length === 0) config.modules.shift();
             // Avoid unnecessary information by not logging modules' test environments
            for(i = 0, l = config.modules.length; i < l; i++)modulesLog.push({
                name: config.modules[i].name,
                tests: config.modules[i].tests
            });
             // The test run is officially beginning now
            emit("runStart", globalSuite.start(true));
            runLoggingCallbacks("begin", {
                totalTests: Test.count,
                modules: modulesLog
            }).then(unblockAndAdvanceQueue);
        } else unblockAndAdvanceQueue();
    }
    exportQUnit(QUnit);
    (function() {
        if (typeof window$1 === "undefined" || typeof document$1 === "undefined") return;
        var config = QUnit.config, hasOwn = Object.prototype.hasOwnProperty; // Stores fixture HTML for resetting later
        function storeFixture() {
            // Avoid overwriting user-defined values
            if (hasOwn.call(config, "fixture")) return;
            var fixture = document$1.getElementById("qunit-fixture");
            if (fixture) config.fixture = fixture.cloneNode(true);
        }
        QUnit.begin(storeFixture); // Resets the fixture DOM element if available.
        function resetFixture() {
            if (config.fixture == null) return;
            var fixture = document$1.getElementById("qunit-fixture");
            var resetFixtureType = _typeof(config.fixture);
            if (resetFixtureType === "string") {
                // support user defined values for `config.fixture`
                var newFixture = document$1.createElement("div");
                newFixture.setAttribute("id", "qunit-fixture");
                newFixture.innerHTML = config.fixture;
                fixture.parentNode.replaceChild(newFixture, fixture);
            } else {
                var clonedFixture = config.fixture.cloneNode(true);
                fixture.parentNode.replaceChild(clonedFixture, fixture);
            }
        }
        QUnit.testStart(resetFixture);
    })();
    (function() {
        // Only interact with URLs via window.location
        var location = typeof window$1 !== "undefined" && window$1.location;
        if (!location) return;
        var urlParams = getUrlParams();
        QUnit.urlParams = urlParams; // Match module/test by inclusion in an array
        QUnit.config.moduleId = [].concat(urlParams.moduleId || []);
        QUnit.config.testId = [].concat(urlParams.testId || []); // Exact case-insensitive match of the module name
        QUnit.config.module = urlParams.module; // Regular expression or case-insenstive substring match against "moduleName: testName"
        QUnit.config.filter = urlParams.filter; // Test order randomization
        if (urlParams.seed === true) // Generate a random seed if the option is specified without a value
        QUnit.config.seed = Math.random().toString(36).slice(2);
        else if (urlParams.seed) QUnit.config.seed = urlParams.seed;
         // Add URL-parameter-mapped config values with UI form rendering data
        QUnit.config.urlConfig.push({
            id: "hidepassed",
            label: "Hide passed tests",
            tooltip: "Only show tests and assertions that fail. Stored as query-strings."
        }, {
            id: "noglobals",
            label: "Check for Globals",
            tooltip: "Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."
        }, {
            id: "notrycatch",
            label: "No try-catch",
            tooltip: "Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."
        });
        QUnit.begin(function() {
            var i, option, urlConfig = QUnit.config.urlConfig;
            for(i = 0; i < urlConfig.length; i++){
                // Options can be either strings or objects with nonempty "id" properties
                option = QUnit.config.urlConfig[i];
                if (typeof option !== "string") option = option.id;
                if (QUnit.config[option] === undefined) QUnit.config[option] = urlParams[option];
            }
        });
        function getUrlParams() {
            var i, param, name, value;
            var urlParams = Object.create(null);
            var params = location.search.slice(1).split("&");
            var length = params.length;
            for(i = 0; i < length; i++)if (params[i]) {
                param = params[i].split("=");
                name = decodeQueryParam(param[0]); // Allow just a key to turn on a flag, e.g., test.html?noglobals
                value = param.length === 1 || decodeQueryParam(param.slice(1).join("="));
                if (name in urlParams) urlParams[name] = [].concat(urlParams[name], value);
                else urlParams[name] = value;
            }
            return urlParams;
        }
        function decodeQueryParam(param) {
            return decodeURIComponent(param.replace(/\+/g, "%20"));
        }
    })();
    var fuzzysort = createCommonjsModule(function(module1) {
        (function(root, UMD) {
            if (module1.exports) module1.exports = UMD();
            else root.fuzzysort = UMD();
        })(commonjsGlobal, function UMD() {
            function fuzzysortNew(instanceOptions) {
                var fuzzysort = {
                    single: function(search, target, options) {
                        if (!search) return null;
                        if (!isObj(search)) search = fuzzysort.getPreparedSearch(search);
                        if (!target) return null;
                        if (!isObj(target)) target = fuzzysort.getPrepared(target);
                        var allowTypo = options && options.allowTypo !== undefined ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== undefined ? instanceOptions.allowTypo : true;
                        var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
                        return algorithm(search, target, search[0]); // var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991
                    // var result = algorithm(search, target, search[0])
                    // if(result === null) return null
                    // if(result.score < threshold) return null
                    // return result
                    },
                    go: function(search, targets, options) {
                        if (!search) return noResults;
                        search = fuzzysort.prepareSearch(search);
                        var searchLowerCode = search[0];
                        var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
                        var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
                        var allowTypo = options && options.allowTypo !== undefined ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== undefined ? instanceOptions.allowTypo : true;
                        var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
                        var resultsLen = 0;
                        var limitedCount = 0;
                        var targetsLen = targets.length; // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]
                        // options.keys
                        if (options && options.keys) {
                            var scoreFn = options.scoreFn || defaultScoreFn;
                            var keys = options.keys;
                            var keysLen = keys.length;
                            for(var i = targetsLen - 1; i >= 0; --i){
                                var obj = targets[i];
                                var objResults = new Array(keysLen);
                                for(var keyI = keysLen - 1; keyI >= 0; --keyI){
                                    var key = keys[keyI];
                                    var target = getValue(obj, key);
                                    if (!target) {
                                        objResults[keyI] = null;
                                        continue;
                                    }
                                    if (!isObj(target)) target = fuzzysort.getPrepared(target);
                                    objResults[keyI] = algorithm(search, target, searchLowerCode);
                                }
                                objResults.obj = obj; // before scoreFn so scoreFn can use it
                                var score = scoreFn(objResults);
                                if (score === null) continue;
                                if (score < threshold) continue;
                                objResults.score = score;
                                if (resultsLen < limit) {
                                    q.add(objResults);
                                    ++resultsLen;
                                } else {
                                    ++limitedCount;
                                    if (score > q.peek().score) q.replaceTop(objResults);
                                }
                            } // options.key
                        } else if (options && options.key) {
                            var key = options.key;
                            for(var i = targetsLen - 1; i >= 0; --i){
                                var obj = targets[i];
                                var target = getValue(obj, key);
                                if (!target) continue;
                                if (!isObj(target)) target = fuzzysort.getPrepared(target);
                                var result = algorithm(search, target, searchLowerCode);
                                if (result === null) continue;
                                if (result.score < threshold) continue; // have to clone result so duplicate targets from different obj can each reference the correct obj
                                result = {
                                    target: result.target,
                                    _targetLowerCodes: null,
                                    _nextBeginningIndexes: null,
                                    score: result.score,
                                    indexes: result.indexes,
                                    obj: obj
                                }; // hidden
                                if (resultsLen < limit) {
                                    q.add(result);
                                    ++resultsLen;
                                } else {
                                    ++limitedCount;
                                    if (result.score > q.peek().score) q.replaceTop(result);
                                }
                            } // no keys
                        } else for(var i = targetsLen - 1; i >= 0; --i){
                            var target = targets[i];
                            if (!target) continue;
                            if (!isObj(target)) target = fuzzysort.getPrepared(target);
                            var result = algorithm(search, target, searchLowerCode);
                            if (result === null) continue;
                            if (result.score < threshold) continue;
                            if (resultsLen < limit) {
                                q.add(result);
                                ++resultsLen;
                            } else {
                                ++limitedCount;
                                if (result.score > q.peek().score) q.replaceTop(result);
                            }
                        }
                        if (resultsLen === 0) return noResults;
                        var results = new Array(resultsLen);
                        for(var i = resultsLen - 1; i >= 0; --i)results[i] = q.poll();
                        results.total = resultsLen + limitedCount;
                        return results;
                    },
                    goAsync: function(search, targets, options) {
                        var canceled = false;
                        var p = new Promise(function(resolve, reject) {
                            if (!search) return resolve(noResults);
                            search = fuzzysort.prepareSearch(search);
                            var searchLowerCode = search[0];
                            var q = fastpriorityqueue();
                            var iCurrent = targets.length - 1;
                            var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
                            var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
                            var allowTypo = options && options.allowTypo !== undefined ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== undefined ? instanceOptions.allowTypo : true;
                            var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
                            var resultsLen = 0;
                            var limitedCount = 0;
                            function step() {
                                if (canceled) return reject("canceled");
                                var startMs = Date.now(); // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]
                                // options.keys
                                if (options && options.keys) {
                                    var scoreFn = options.scoreFn || defaultScoreFn;
                                    var keys = options.keys;
                                    var keysLen = keys.length;
                                    for(; iCurrent >= 0; --iCurrent){
                                        var obj = targets[iCurrent];
                                        var objResults = new Array(keysLen);
                                        for(var keyI = keysLen - 1; keyI >= 0; --keyI){
                                            var key = keys[keyI];
                                            var target = getValue(obj, key);
                                            if (!target) {
                                                objResults[keyI] = null;
                                                continue;
                                            }
                                            if (!isObj(target)) target = fuzzysort.getPrepared(target);
                                            objResults[keyI] = algorithm(search, target, searchLowerCode);
                                        }
                                        objResults.obj = obj; // before scoreFn so scoreFn can use it
                                        var score = scoreFn(objResults);
                                        if (score === null) continue;
                                        if (score < threshold) continue;
                                        objResults.score = score;
                                        if (resultsLen < limit) {
                                            q.add(objResults);
                                            ++resultsLen;
                                        } else {
                                            ++limitedCount;
                                            if (score > q.peek().score) q.replaceTop(objResults);
                                        }
                                        if (iCurrent % 1000 === 0) {
                                            if (Date.now() - startMs >= 10) {
                                                isNode ? setImmediate(step) : setTimeout(step);
                                                return;
                                            }
                                        }
                                    } // options.key
                                } else if (options && options.key) {
                                    var key = options.key;
                                    for(; iCurrent >= 0; --iCurrent){
                                        var obj = targets[iCurrent];
                                        var target = getValue(obj, key);
                                        if (!target) continue;
                                        if (!isObj(target)) target = fuzzysort.getPrepared(target);
                                        var result = algorithm(search, target, searchLowerCode);
                                        if (result === null) continue;
                                        if (result.score < threshold) continue; // have to clone result so duplicate targets from different obj can each reference the correct obj
                                        result = {
                                            target: result.target,
                                            _targetLowerCodes: null,
                                            _nextBeginningIndexes: null,
                                            score: result.score,
                                            indexes: result.indexes,
                                            obj: obj
                                        }; // hidden
                                        if (resultsLen < limit) {
                                            q.add(result);
                                            ++resultsLen;
                                        } else {
                                            ++limitedCount;
                                            if (result.score > q.peek().score) q.replaceTop(result);
                                        }
                                        if (iCurrent % 1000 === 0) {
                                            if (Date.now() - startMs >= 10) {
                                                isNode ? setImmediate(step) : setTimeout(step);
                                                return;
                                            }
                                        }
                                    } // no keys
                                } else for(; iCurrent >= 0; --iCurrent){
                                    var target = targets[iCurrent];
                                    if (!target) continue;
                                    if (!isObj(target)) target = fuzzysort.getPrepared(target);
                                    var result = algorithm(search, target, searchLowerCode);
                                    if (result === null) continue;
                                    if (result.score < threshold) continue;
                                    if (resultsLen < limit) {
                                        q.add(result);
                                        ++resultsLen;
                                    } else {
                                        ++limitedCount;
                                        if (result.score > q.peek().score) q.replaceTop(result);
                                    }
                                    if (iCurrent % 1000 === 0) {
                                        if (Date.now() - startMs >= 10) {
                                            isNode ? setImmediate(step) : setTimeout(step);
                                            return;
                                        }
                                    }
                                }
                                if (resultsLen === 0) return resolve(noResults);
                                var results = new Array(resultsLen);
                                for(var i = resultsLen - 1; i >= 0; --i)results[i] = q.poll();
                                results.total = resultsLen + limitedCount;
                                resolve(results);
                            }
                            isNode ? setImmediate(step) : step();
                        });
                        p.cancel = function() {
                            canceled = true;
                        };
                        return p;
                    },
                    highlight: function(result, hOpen, hClose) {
                        if (result === null) return null;
                        if (hOpen === undefined) hOpen = "<b>";
                        if (hClose === undefined) hClose = "</b>";
                        var highlighted = "";
                        var matchesIndex = 0;
                        var opened = false;
                        var target = result.target;
                        var targetLen = target.length;
                        var matchesBest = result.indexes;
                        for(var i = 0; i < targetLen; ++i){
                            var char = target[i];
                            if (matchesBest[matchesIndex] === i) {
                                ++matchesIndex;
                                if (!opened) {
                                    opened = true;
                                    highlighted += hOpen;
                                }
                                if (matchesIndex === matchesBest.length) {
                                    highlighted += char + hClose + target.substr(i + 1);
                                    break;
                                }
                            } else if (opened) {
                                opened = false;
                                highlighted += hClose;
                            }
                            highlighted += char;
                        }
                        return highlighted;
                    },
                    prepare: function(target) {
                        if (!target) return;
                        return {
                            target: target,
                            _targetLowerCodes: fuzzysort.prepareLowerCodes(target),
                            _nextBeginningIndexes: null,
                            score: null,
                            indexes: null,
                            obj: null
                        }; // hidden
                    },
                    prepareSlow: function(target) {
                        if (!target) return;
                        return {
                            target: target,
                            _targetLowerCodes: fuzzysort.prepareLowerCodes(target),
                            _nextBeginningIndexes: fuzzysort.prepareNextBeginningIndexes(target),
                            score: null,
                            indexes: null,
                            obj: null
                        }; // hidden
                    },
                    prepareSearch: function(search) {
                        if (!search) return;
                        return fuzzysort.prepareLowerCodes(search);
                    },
                    // Below this point is only internal code
                    // Below this point is only internal code
                    // Below this point is only internal code
                    // Below this point is only internal code
                    getPrepared: function(target) {
                        if (target.length > 999) return fuzzysort.prepare(target); // don't cache huge targets
                        var targetPrepared = preparedCache.get(target);
                        if (targetPrepared !== undefined) return targetPrepared;
                        targetPrepared = fuzzysort.prepare(target);
                        preparedCache.set(target, targetPrepared);
                        return targetPrepared;
                    },
                    getPreparedSearch: function(search) {
                        if (search.length > 999) return fuzzysort.prepareSearch(search); // don't cache huge searches
                        var searchPrepared = preparedSearchCache.get(search);
                        if (searchPrepared !== undefined) return searchPrepared;
                        searchPrepared = fuzzysort.prepareSearch(search);
                        preparedSearchCache.set(search, searchPrepared);
                        return searchPrepared;
                    },
                    algorithm: function(searchLowerCodes, prepared, searchLowerCode) {
                        var targetLowerCodes = prepared._targetLowerCodes;
                        var searchLen = searchLowerCodes.length;
                        var targetLen = targetLowerCodes.length;
                        var searchI = 0; // where we at
                        var targetI = 0; // where you at
                        var typoSimpleI = 0;
                        var matchesSimpleLen = 0; // very basic fuzzy match; to remove non-matching targets ASAP!
                        // walk through target. find sequential matches.
                        // if all chars aren't found then exit
                        for(;;){
                            var isMatch = searchLowerCode === targetLowerCodes[targetI];
                            if (isMatch) {
                                matchesSimple[matchesSimpleLen++] = targetI;
                                ++searchI;
                                if (searchI === searchLen) break;
                                searchLowerCode = searchLowerCodes[typoSimpleI === 0 ? searchI : typoSimpleI === searchI ? searchI + 1 : typoSimpleI === searchI - 1 ? searchI - 1 : searchI];
                            }
                            ++targetI;
                            if (targetI >= targetLen) // Failed to find searchI
                            // Check for typo or exit
                            // we go as far as possible before trying to transpose
                            // then we transpose backwards until we reach the beginning
                            for(;;){
                                if (searchI <= 1) return null; // not allowed to transpose first char
                                if (typoSimpleI === 0) {
                                    // we haven't tried to transpose yet
                                    --searchI;
                                    var searchLowerCodeNew = searchLowerCodes[searchI];
                                    if (searchLowerCode === searchLowerCodeNew) continue; // doesn't make sense to transpose a repeat char
                                    typoSimpleI = searchI;
                                } else {
                                    if (typoSimpleI === 1) return null; // reached the end of the line for transposing
                                    --typoSimpleI;
                                    searchI = typoSimpleI;
                                    searchLowerCode = searchLowerCodes[searchI + 1];
                                    var searchLowerCodeNew = searchLowerCodes[searchI];
                                    if (searchLowerCode === searchLowerCodeNew) continue; // doesn't make sense to transpose a repeat char
                                }
                                matchesSimpleLen = searchI;
                                targetI = matchesSimple[matchesSimpleLen - 1] + 1;
                                break;
                            }
                        }
                        var searchI = 0;
                        var typoStrictI = 0;
                        var successStrict = false;
                        var matchesStrictLen = 0;
                        var nextBeginningIndexes = prepared._nextBeginningIndexes;
                        if (nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target);
                        var firstPossibleI = targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1]; // Our target string successfully matched all characters in sequence!
                        // Let's try a more advanced and strict test to improve the score
                        // only count it as a match if it's consecutive or a beginning character!
                        if (targetI !== targetLen) for(;;)if (targetI >= targetLen) {
                            // We failed to find a good spot for this search char, go back to the previous search char and force it forward
                            if (searchI <= 0) {
                                // We failed to push chars forward for a better match
                                // transpose, starting from the beginning
                                ++typoStrictI;
                                if (typoStrictI > searchLen - 2) break;
                                if (searchLowerCodes[typoStrictI] === searchLowerCodes[typoStrictI + 1]) continue; // doesn't make sense to transpose a repeat char
                                targetI = firstPossibleI;
                                continue;
                            }
                            --searchI;
                            var lastMatch = matchesStrict[--matchesStrictLen];
                            targetI = nextBeginningIndexes[lastMatch];
                        } else {
                            var isMatch = searchLowerCodes[typoStrictI === 0 ? searchI : typoStrictI === searchI ? searchI + 1 : typoStrictI === searchI - 1 ? searchI - 1 : searchI] === targetLowerCodes[targetI];
                            if (isMatch) {
                                matchesStrict[matchesStrictLen++] = targetI;
                                ++searchI;
                                if (searchI === searchLen) {
                                    successStrict = true;
                                    break;
                                }
                                ++targetI;
                            } else targetI = nextBeginningIndexes[targetI];
                        }
                        // tally up the score & keep track of matches for highlighting later
                        if (successStrict) {
                            var matchesBest = matchesStrict;
                            var matchesBestLen = matchesStrictLen;
                        } else {
                            var matchesBest = matchesSimple;
                            var matchesBestLen = matchesSimpleLen;
                        }
                        var score = 0;
                        var lastTargetI = -1;
                        for(var i = 0; i < searchLen; ++i){
                            var targetI = matchesBest[i]; // score only goes down if they're not consecutive
                            if (lastTargetI !== targetI - 1) score -= targetI;
                            lastTargetI = targetI;
                        }
                        if (!successStrict) {
                            score *= 1000;
                            if (typoSimpleI !== 0) score += -20;
                        /*typoPenalty*/ } else if (typoStrictI !== 0) score += -20;
                        score -= targetLen - searchLen;
                        prepared.score = score;
                        prepared.indexes = new Array(matchesBestLen);
                        for(var i = matchesBestLen - 1; i >= 0; --i)prepared.indexes[i] = matchesBest[i];
                        return prepared;
                    },
                    algorithmNoTypo: function(searchLowerCodes, prepared, searchLowerCode) {
                        var targetLowerCodes = prepared._targetLowerCodes;
                        var searchLen = searchLowerCodes.length;
                        var targetLen = targetLowerCodes.length;
                        var searchI = 0; // where we at
                        var targetI = 0; // where you at
                        var matchesSimpleLen = 0; // very basic fuzzy match; to remove non-matching targets ASAP!
                        // walk through target. find sequential matches.
                        // if all chars aren't found then exit
                        for(;;){
                            var isMatch = searchLowerCode === targetLowerCodes[targetI];
                            if (isMatch) {
                                matchesSimple[matchesSimpleLen++] = targetI;
                                ++searchI;
                                if (searchI === searchLen) break;
                                searchLowerCode = searchLowerCodes[searchI];
                            }
                            ++targetI;
                            if (targetI >= targetLen) return null; // Failed to find searchI
                        }
                        var searchI = 0;
                        var successStrict = false;
                        var matchesStrictLen = 0;
                        var nextBeginningIndexes = prepared._nextBeginningIndexes;
                        if (nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target);
                        var firstPossibleI = targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1]; // Our target string successfully matched all characters in sequence!
                        // Let's try a more advanced and strict test to improve the score
                        // only count it as a match if it's consecutive or a beginning character!
                        if (targetI !== targetLen) for(;;)if (targetI >= targetLen) {
                            // We failed to find a good spot for this search char, go back to the previous search char and force it forward
                            if (searchI <= 0) break; // We failed to push chars forward for a better match
                            --searchI;
                            var lastMatch = matchesStrict[--matchesStrictLen];
                            targetI = nextBeginningIndexes[lastMatch];
                        } else {
                            var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
                            if (isMatch) {
                                matchesStrict[matchesStrictLen++] = targetI;
                                ++searchI;
                                if (searchI === searchLen) {
                                    successStrict = true;
                                    break;
                                }
                                ++targetI;
                            } else targetI = nextBeginningIndexes[targetI];
                        }
                        // tally up the score & keep track of matches for highlighting later
                        if (successStrict) {
                            var matchesBest = matchesStrict;
                            var matchesBestLen = matchesStrictLen;
                        } else {
                            var matchesBest = matchesSimple;
                            var matchesBestLen = matchesSimpleLen;
                        }
                        var score = 0;
                        var lastTargetI = -1;
                        for(var i = 0; i < searchLen; ++i){
                            var targetI = matchesBest[i]; // score only goes down if they're not consecutive
                            if (lastTargetI !== targetI - 1) score -= targetI;
                            lastTargetI = targetI;
                        }
                        if (!successStrict) score *= 1000;
                        score -= targetLen - searchLen;
                        prepared.score = score;
                        prepared.indexes = new Array(matchesBestLen);
                        for(var i = matchesBestLen - 1; i >= 0; --i)prepared.indexes[i] = matchesBest[i];
                        return prepared;
                    },
                    prepareLowerCodes: function(str) {
                        var strLen = str.length;
                        var lowerCodes = []; // new Array(strLen)    sparse array is too slow
                        var lower = str.toLowerCase();
                        for(var i = 0; i < strLen; ++i)lowerCodes[i] = lower.charCodeAt(i);
                        return lowerCodes;
                    },
                    prepareBeginningIndexes: function(target) {
                        var targetLen = target.length;
                        var beginningIndexes = [];
                        var beginningIndexesLen = 0;
                        var wasUpper = false;
                        var wasAlphanum = false;
                        for(var i = 0; i < targetLen; ++i){
                            var targetCode = target.charCodeAt(i);
                            var isUpper = targetCode >= 65 && targetCode <= 90;
                            var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
                            var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
                            wasUpper = isUpper;
                            wasAlphanum = isAlphanum;
                            if (isBeginning) beginningIndexes[beginningIndexesLen++] = i;
                        }
                        return beginningIndexes;
                    },
                    prepareNextBeginningIndexes: function(target) {
                        var targetLen = target.length;
                        var beginningIndexes = fuzzysort.prepareBeginningIndexes(target);
                        var nextBeginningIndexes = []; // new Array(targetLen)     sparse array is too slow
                        var lastIsBeginning = beginningIndexes[0];
                        var lastIsBeginningI = 0;
                        for(var i = 0; i < targetLen; ++i)if (lastIsBeginning > i) nextBeginningIndexes[i] = lastIsBeginning;
                        else {
                            lastIsBeginning = beginningIndexes[++lastIsBeginningI];
                            nextBeginningIndexes[i] = lastIsBeginning === undefined ? targetLen : lastIsBeginning;
                        }
                        return nextBeginningIndexes;
                    },
                    cleanup: cleanup,
                    new: fuzzysortNew
                };
                return fuzzysort;
            } // fuzzysortNew
            // This stuff is outside fuzzysortNew, because it's shared with instances of fuzzysort.new()
            var isNode = typeof commonjsRequire !== "undefined" && typeof window === "undefined"; // var MAX_INT = Number.MAX_SAFE_INTEGER
            // var MIN_INT = Number.MIN_VALUE
            var preparedCache = new Map();
            var preparedSearchCache = new Map();
            var noResults = [];
            noResults.total = 0;
            var matchesSimple = [];
            var matchesStrict = [];
            function cleanup() {
                preparedCache.clear();
                preparedSearchCache.clear();
                matchesSimple = [];
                matchesStrict = [];
            }
            function defaultScoreFn(a) {
                var max = -9007199254740991;
                for(var i = a.length - 1; i >= 0; --i){
                    var result = a[i];
                    if (result === null) continue;
                    var score = result.score;
                    if (score > max) max = score;
                }
                if (max === -9007199254740991) return null;
                return max;
            } // prop = 'key'              2.5ms optimized for this case, seems to be about as fast as direct obj[prop]
            // prop = 'key1.key2'        10ms
            // prop = ['key1', 'key2']   27ms
            function getValue(obj, prop) {
                var tmp = obj[prop];
                if (tmp !== undefined) return tmp;
                var segs = prop;
                if (!Array.isArray(prop)) segs = prop.split(".");
                var len = segs.length;
                var i = -1;
                while(obj && ++i < len)obj = obj[segs[i]];
                return obj;
            }
            function isObj(x) {
                return typeof x === "object";
            } // faster as a function
            // Hacked version of https://github.com/lemire/FastPriorityQueue.js
            var fastpriorityqueue = function() {
                var r = [], o = 0, e = {};
                function n() {
                    for(var e = 0, n = r[e], c = 1; c < o;){
                        var f = c + 1;
                        e = c, f < o && r[f].score < r[c].score && (e = f), r[e - 1 >> 1] = r[e], c = 1 + (e << 1);
                    }
                    for(var a = e - 1 >> 1; e > 0 && n.score < r[a].score; a = (e = a) - 1 >> 1)r[e] = r[a];
                    r[e] = n;
                }
                return e.add = function(e) {
                    var n = o;
                    r[o++] = e;
                    for(var c = n - 1 >> 1; n > 0 && e.score < r[c].score; c = (n = c) - 1 >> 1)r[n] = r[c];
                    r[n] = e;
                }, e.poll = function() {
                    if (0 !== o) {
                        var e = r[0];
                        return r[0] = r[--o], n(), e;
                    }
                }, e.peek = function(e) {
                    if (0 !== o) return r[0];
                }, e.replaceTop = function(o) {
                    r[0] = o, n();
                }, e;
            };
            var q = fastpriorityqueue(); // reuse this, except for async, it needs to make its own
            return fuzzysortNew();
        }); // UMD
    // TODO: (performance) wasm version!?
    // TODO: (performance) layout memory in an optimal way to go fast by avoiding cache misses
    // TODO: (performance) preparedCache is a memory leak
    // TODO: (like sublime) backslash === forwardslash
    // TODO: (performance) i have no idea how well optizmied the allowing typos algorithm is
    });
    var stats = {
        passedTests: 0,
        failedTests: 0,
        skippedTests: 0,
        todoTests: 0
    }; // Escape text for attribute or text content.
    function escapeText(s) {
        if (!s) return "";
        s = s + ""; // Both single quotes and double quotes (for attributes)
        return s.replace(/['"<>&]/g, function(s) {
            switch(s){
                case "'":
                    return "&#039;";
                case '"':
                    return "&quot;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "&":
                    return "&amp;";
            }
        });
    }
    (function() {
        // Don't load the HTML Reporter on non-browser environments
        if (typeof window$1 === "undefined" || !window$1.document) return;
        var config = QUnit.config, hiddenTests = [], document1 = window$1.document, collapseNext = false, hasOwn = Object.prototype.hasOwnProperty, unfilteredUrl = setUrl({
            filter: undefined,
            module: undefined,
            moduleId: undefined,
            testId: undefined
        }), modulesList = [];
        function addEvent(elem, type, fn) {
            elem.addEventListener(type, fn, false);
        }
        function removeEvent(elem, type, fn) {
            elem.removeEventListener(type, fn, false);
        }
        function addEvents(elems, type, fn) {
            var i = elems.length;
            while(i--)addEvent(elems[i], type, fn);
        }
        function hasClass(elem, name) {
            return (" " + elem.className + " ").indexOf(" " + name + " ") >= 0;
        }
        function addClass(elem, name) {
            if (!hasClass(elem, name)) elem.className += (elem.className ? " " : "") + name;
        }
        function toggleClass(elem, name, force) {
            if (force || typeof force === "undefined" && !hasClass(elem, name)) addClass(elem, name);
            else removeClass(elem, name);
        }
        function removeClass(elem, name) {
            var set = " " + elem.className + " "; // Class name may appear multiple times
            while(set.indexOf(" " + name + " ") >= 0)set = set.replace(" " + name + " ", " ");
             // Trim for prettiness
            elem.className = typeof set.trim === "function" ? set.trim() : set.replace(/^\s+|\s+$/g, "");
        }
        function id(name) {
            return document1.getElementById && document1.getElementById(name);
        }
        function abortTests() {
            var abortButton = id("qunit-abort-tests-button");
            if (abortButton) {
                abortButton.disabled = true;
                abortButton.innerHTML = "Aborting...";
            }
            QUnit.config.queue.length = 0;
            return false;
        }
        function interceptNavigation(ev) {
            applyUrlParams();
            if (ev && ev.preventDefault) ev.preventDefault();
            return false;
        }
        function getUrlConfigHtml() {
            var i, j, val, escaped, escapedTooltip, selection = false, urlConfig = config.urlConfig, urlConfigHtml = "";
            for(i = 0; i < urlConfig.length; i++){
                // Options can be either strings or objects with nonempty "id" properties
                val = config.urlConfig[i];
                if (typeof val === "string") val = {
                    id: val,
                    label: val
                };
                escaped = escapeText(val.id);
                escapedTooltip = escapeText(val.tooltip);
                if (!val.value || typeof val.value === "string") urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'><input id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' type='checkbox'" + (val.value ? " value='" + escapeText(val.value) + "'" : "") + (config[val.id] ? " checked='checked'" : "") + " title='" + escapedTooltip + "' />" + escapeText(val.label) + "</label>";
                else {
                    urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'>" + val.label + ": </label><select id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' title='" + escapedTooltip + "'><option></option>";
                    if (QUnit.is("array", val.value)) for(j = 0; j < val.value.length; j++){
                        escaped = escapeText(val.value[j]);
                        urlConfigHtml += "<option value='" + escaped + "'" + (config[val.id] === val.value[j] ? (selection = true, " selected='selected'") : "") + ">" + escaped + "</option>";
                    }
                    else {
                        for(j in val.value)if (hasOwn.call(val.value, j)) urlConfigHtml += "<option value='" + escapeText(j) + "'" + (config[val.id] === j ? (selection = true, " selected='selected'") : "") + ">" + escapeText(val.value[j]) + "</option>";
                    }
                    if (config[val.id] && !selection) {
                        escaped = escapeText(config[val.id]);
                        urlConfigHtml += "<option value='" + escaped + "' selected='selected' disabled='disabled'>" + escaped + "</option>";
                    }
                    urlConfigHtml += "</select>";
                }
            }
            return urlConfigHtml;
        } // Handle "click" events on toolbar checkboxes and "change" for select menus.
        // Updates the URL with the new state of `config.urlConfig` values.
        function toolbarChanged() {
            var updatedUrl, value, tests, field = this, params = {}; // Detect if field is a select menu or a checkbox
            if ("selectedIndex" in field) value = field.options[field.selectedIndex].value || undefined;
            else value = field.checked ? field.defaultValue || true : undefined;
            params[field.name] = value;
            updatedUrl = setUrl(params); // Check if we can apply the change without a page refresh
            if ("hidepassed" === field.name && "replaceState" in window$1.history) {
                QUnit.urlParams[field.name] = value;
                config[field.name] = value || false;
                tests = id("qunit-tests");
                if (tests) {
                    var length = tests.children.length;
                    var children = tests.children;
                    if (field.checked) {
                        for(var i = 0; i < length; i++){
                            var test = children[i];
                            var className = test ? test.className : "";
                            var classNameHasPass = className.indexOf("pass") > -1;
                            var classNameHasSkipped = className.indexOf("skipped") > -1;
                            if (classNameHasPass || classNameHasSkipped) hiddenTests.push(test);
                        }
                        var _iterator = _createForOfIteratorHelper(hiddenTests), _step;
                        try {
                            for(_iterator.s(); !(_step = _iterator.n()).done;){
                                var hiddenTest = _step.value;
                                tests.removeChild(hiddenTest);
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally{
                            _iterator.f();
                        }
                    } else while((test = hiddenTests.pop()) != null)tests.appendChild(test);
                }
                window$1.history.replaceState(null, "", updatedUrl);
            } else window$1.location = updatedUrl;
        }
        function setUrl(params) {
            var key, arrValue, i, querystring = "?", location = window$1.location;
            params = QUnit.extend(QUnit.extend({}, QUnit.urlParams), params);
            for(key in params)// Skip inherited or undefined properties
            if (hasOwn.call(params, key) && params[key] !== undefined) {
                // Output a parameter for each value of this key
                // (but usually just one)
                arrValue = [].concat(params[key]);
                for(i = 0; i < arrValue.length; i++){
                    querystring += encodeURIComponent(key);
                    if (arrValue[i] !== true) querystring += "=" + encodeURIComponent(arrValue[i]);
                    querystring += "&";
                }
            }
            return location.protocol + "//" + location.host + location.pathname + querystring.slice(0, -1);
        }
        function applyUrlParams() {
            var i, selectedModules = [], modulesList = id("qunit-modulefilter-dropdown-list").getElementsByTagName("input"), filter = id("qunit-filter-input").value;
            for(i = 0; i < modulesList.length; i++)if (modulesList[i].checked) selectedModules.push(modulesList[i].value);
            window$1.location = setUrl({
                filter: filter === "" ? undefined : filter,
                moduleId: selectedModules.length === 0 ? undefined : selectedModules,
                // Remove module and testId filter
                module: undefined,
                testId: undefined
            });
        }
        function toolbarUrlConfigContainer() {
            var urlConfigContainer = document1.createElement("span");
            urlConfigContainer.innerHTML = getUrlConfigHtml();
            addClass(urlConfigContainer, "qunit-url-config");
            addEvents(urlConfigContainer.getElementsByTagName("input"), "change", toolbarChanged);
            addEvents(urlConfigContainer.getElementsByTagName("select"), "change", toolbarChanged);
            return urlConfigContainer;
        }
        function abortTestsButton() {
            var button = document1.createElement("button");
            button.id = "qunit-abort-tests-button";
            button.innerHTML = "Abort";
            addEvent(button, "click", abortTests);
            return button;
        }
        function toolbarLooseFilter() {
            var filter = document1.createElement("form"), label = document1.createElement("label"), input = document1.createElement("input"), button = document1.createElement("button");
            addClass(filter, "qunit-filter");
            label.innerHTML = "Filter: ";
            input.type = "text";
            input.value = config.filter || "";
            input.name = "filter";
            input.id = "qunit-filter-input";
            button.innerHTML = "Go";
            label.appendChild(input);
            filter.appendChild(label);
            filter.appendChild(document1.createTextNode(" "));
            filter.appendChild(button);
            addEvent(filter, "submit", interceptNavigation);
            return filter;
        }
        function moduleListHtml(modules) {
            var i, checked, html = "";
            for(i = 0; i < modules.length; i++)if (modules[i].name !== "") {
                checked = config.moduleId.indexOf(modules[i].moduleId) > -1;
                html += "<li><label class='clickable" + (checked ? " checked" : "") + "'><input type='checkbox' " + "value='" + modules[i].moduleId + "'" + (checked ? " checked='checked'" : "") + " />" + escapeText(modules[i].name) + "</label></li>";
            }
            return html;
        }
        function toolbarModuleFilter() {
            var commit, reset, moduleFilter = document1.createElement("form"), label = document1.createElement("label"), moduleSearch = document1.createElement("input"), dropDown = document1.createElement("div"), actions = document1.createElement("span"), applyButton = document1.createElement("button"), resetButton = document1.createElement("button"), allModulesLabel = document1.createElement("label"), allCheckbox = document1.createElement("input"), dropDownList = document1.createElement("ul"), dirty = false;
            moduleSearch.id = "qunit-modulefilter-search";
            moduleSearch.autocomplete = "off";
            addEvent(moduleSearch, "input", searchInput);
            addEvent(moduleSearch, "input", searchFocus);
            addEvent(moduleSearch, "focus", searchFocus);
            addEvent(moduleSearch, "click", searchFocus);
            config.modules.forEach(function(module1) {
                return module1.namePrepared = fuzzysort.prepare(module1.name);
            });
            label.id = "qunit-modulefilter-search-container";
            label.innerHTML = "Module: ";
            label.appendChild(moduleSearch);
            applyButton.textContent = "Apply";
            applyButton.style.display = "none";
            resetButton.textContent = "Reset";
            resetButton.type = "reset";
            resetButton.style.display = "none";
            allCheckbox.type = "checkbox";
            allCheckbox.checked = config.moduleId.length === 0;
            allModulesLabel.className = "clickable";
            if (config.moduleId.length) allModulesLabel.className = "checked";
            allModulesLabel.appendChild(allCheckbox);
            allModulesLabel.appendChild(document1.createTextNode("All modules"));
            actions.id = "qunit-modulefilter-actions";
            actions.appendChild(applyButton);
            actions.appendChild(resetButton);
            actions.appendChild(allModulesLabel);
            commit = actions.firstChild;
            reset = commit.nextSibling;
            addEvent(commit, "click", applyUrlParams);
            dropDownList.id = "qunit-modulefilter-dropdown-list";
            dropDownList.innerHTML = moduleListHtml(config.modules);
            dropDown.id = "qunit-modulefilter-dropdown";
            dropDown.style.display = "none";
            dropDown.appendChild(actions);
            dropDown.appendChild(dropDownList);
            addEvent(dropDown, "change", selectionChange);
            selectionChange();
            moduleFilter.id = "qunit-modulefilter";
            moduleFilter.appendChild(label);
            moduleFilter.appendChild(dropDown);
            addEvent(moduleFilter, "submit", interceptNavigation);
            addEvent(moduleFilter, "reset", function() {
                // Let the reset happen, then update styles
                window$1.setTimeout(selectionChange);
            }); // Enables show/hide for the dropdown
            function searchFocus() {
                if (dropDown.style.display !== "none") return;
                dropDown.style.display = "block";
                addEvent(document1, "click", hideHandler);
                addEvent(document1, "keydown", hideHandler); // Hide on Escape keydown or outside-container click
                function hideHandler(e) {
                    var inContainer = moduleFilter.contains(e.target);
                    if (e.keyCode === 27 || !inContainer) {
                        if (e.keyCode === 27 && inContainer) moduleSearch.focus();
                        dropDown.style.display = "none";
                        removeEvent(document1, "click", hideHandler);
                        removeEvent(document1, "keydown", hideHandler);
                        moduleSearch.value = "";
                        searchInput();
                    }
                }
            }
            function filterModules(searchText) {
                if (searchText === "") return config.modules;
                return fuzzysort.go(searchText, config.modules, {
                    key: "namePrepared",
                    threshold: -10000
                }).map(function(module1) {
                    return module1.obj;
                });
            } // Processes module search box input
            var searchInputTimeout;
            function searchInput() {
                window$1.clearTimeout(searchInputTimeout);
                searchInputTimeout = window$1.setTimeout(function() {
                    var searchText = moduleSearch.value.toLowerCase(), filteredModules = filterModules(searchText);
                    dropDownList.innerHTML = moduleListHtml(filteredModules);
                }, 200);
            } // Processes selection changes
            function selectionChange(evt) {
                var i, item, checkbox = evt && evt.target || allCheckbox, modulesList = dropDownList.getElementsByTagName("input"), selectedNames = [];
                toggleClass(checkbox.parentNode, "checked", checkbox.checked);
                dirty = false;
                if (checkbox.checked && checkbox !== allCheckbox) {
                    allCheckbox.checked = false;
                    removeClass(allCheckbox.parentNode, "checked");
                }
                for(i = 0; i < modulesList.length; i++){
                    item = modulesList[i];
                    if (!evt) toggleClass(item.parentNode, "checked", item.checked);
                    else if (checkbox === allCheckbox && checkbox.checked) {
                        item.checked = false;
                        removeClass(item.parentNode, "checked");
                    }
                    dirty = dirty || item.checked !== item.defaultChecked;
                    if (item.checked) selectedNames.push(item.parentNode.textContent);
                }
                commit.style.display = reset.style.display = dirty ? "" : "none";
                moduleSearch.placeholder = selectedNames.join(", ") || allCheckbox.parentNode.textContent;
                moduleSearch.title = "Type to filter list. Current selection:\n" + (selectedNames.join("\n") || allCheckbox.parentNode.textContent);
            }
            return moduleFilter;
        }
        function toolbarFilters() {
            var toolbarFilters = document1.createElement("span");
            toolbarFilters.id = "qunit-toolbar-filters";
            toolbarFilters.appendChild(toolbarLooseFilter());
            toolbarFilters.appendChild(toolbarModuleFilter());
            return toolbarFilters;
        }
        function appendToolbar() {
            var toolbar = id("qunit-testrunner-toolbar");
            if (toolbar) {
                toolbar.appendChild(toolbarUrlConfigContainer());
                toolbar.appendChild(toolbarFilters());
                toolbar.appendChild(document1.createElement("div")).className = "clearfix";
            }
        }
        function appendHeader() {
            var header = id("qunit-header");
            if (header) header.innerHTML = "<a href='" + escapeText(unfilteredUrl) + "'>" + header.innerHTML + "</a> ";
        }
        function appendBanner() {
            var banner = id("qunit-banner");
            if (banner) banner.className = "";
        }
        function appendTestResults() {
            var tests = id("qunit-tests"), result = id("qunit-testresult"), controls;
            if (result) result.parentNode.removeChild(result);
            if (tests) {
                tests.innerHTML = "";
                result = document1.createElement("p");
                result.id = "qunit-testresult";
                result.className = "result";
                tests.parentNode.insertBefore(result, tests);
                result.innerHTML = '<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>';
                controls = id("qunit-testresult-controls");
            }
            if (controls) controls.appendChild(abortTestsButton());
        }
        function appendFilteredTest() {
            var testId = QUnit.config.testId;
            if (!testId || testId.length <= 0) return "";
            return "<div id='qunit-filteredTest'>Rerunning selected tests: " + escapeText(testId.join(", ")) + " <a id='qunit-clearFilter' href='" + escapeText(unfilteredUrl) + "'>Run all tests</a></div>";
        }
        function appendUserAgent() {
            var userAgent = id("qunit-userAgent");
            if (userAgent) {
                userAgent.innerHTML = "";
                userAgent.appendChild(document1.createTextNode("QUnit " + QUnit.version + "; " + navigator.userAgent));
            }
        }
        function appendInterface() {
            var qunit = id("qunit"); // For compat with QUnit 1.2, and to support fully custom theme HTML,
            // we will use any existing elements if no id="qunit" element exists.
            //
            // Note that we don't fail or fallback to creating it ourselves,
            // because not having id="qunit" (and not having the below elements)
            // simply means QUnit acts headless, allowing users to use their own
            // reporters, or for a test runner to listen for events directly without
            // having the HTML reporter actively render anything.
            if (qunit) // Since QUnit 1.3, these are created automatically if the page
            // contains id="qunit".
            qunit.innerHTML = "<h1 id='qunit-header'>" + escapeText(document1.title) + "</h1>" + "<h2 id='qunit-banner'></h2>" + "<div id='qunit-testrunner-toolbar'></div>" + appendFilteredTest() + "<h2 id='qunit-userAgent'></h2>" + "<ol id='qunit-tests'></ol>";
            appendHeader();
            appendBanner();
            appendTestResults();
            appendUserAgent();
            appendToolbar();
        }
        function appendTest(name, testId, moduleName) {
            var title, rerunTrigger, testBlock, assertList, tests = id("qunit-tests");
            if (!tests) return;
            title = document1.createElement("strong");
            title.innerHTML = getNameHtml(name, moduleName);
            rerunTrigger = document1.createElement("a");
            rerunTrigger.innerHTML = "Rerun";
            rerunTrigger.href = setUrl({
                testId: testId
            });
            testBlock = document1.createElement("li");
            testBlock.appendChild(title);
            testBlock.appendChild(rerunTrigger);
            testBlock.id = "qunit-test-output-" + testId;
            assertList = document1.createElement("ol");
            assertList.className = "qunit-assert-list";
            testBlock.appendChild(assertList);
            tests.appendChild(testBlock);
        } // HTML Reporter initialization and load
        QUnit.begin(function(details) {
            var i, moduleObj; // Sort modules by name for the picker
            for(i = 0; i < details.modules.length; i++){
                moduleObj = details.modules[i];
                if (moduleObj.name) modulesList.push(moduleObj.name);
            }
            modulesList.sort(function(a, b) {
                return a.localeCompare(b);
            }); // Initialize QUnit elements
            appendInterface();
        });
        QUnit.done(function(details) {
            var banner = id("qunit-banner"), tests = id("qunit-tests"), abortButton = id("qunit-abort-tests-button"), totalTests = stats.passedTests + stats.skippedTests + stats.todoTests + stats.failedTests, html = [
                totalTests,
                " tests completed in ",
                details.runtime,
                " milliseconds, with ",
                stats.failedTests,
                " failed, ",
                stats.skippedTests,
                " skipped, and ",
                stats.todoTests,
                " todo.<br />",
                "<span class='passed'>",
                details.passed,
                "</span> assertions of <span class='total'>",
                details.total,
                "</span> passed, <span class='failed'>",
                details.failed,
                "</span> failed."
            ].join(""), test, assertLi, assertList; // Update remaining tests to aborted
            if (abortButton && abortButton.disabled) {
                html = "Tests aborted after " + details.runtime + " milliseconds.";
                for(var i = 0; i < tests.children.length; i++){
                    test = tests.children[i];
                    if (test.className === "" || test.className === "running") {
                        test.className = "aborted";
                        assertList = test.getElementsByTagName("ol")[0];
                        assertLi = document1.createElement("li");
                        assertLi.className = "fail";
                        assertLi.innerHTML = "Test aborted.";
                        assertList.appendChild(assertLi);
                    }
                }
            }
            if (banner && (!abortButton || abortButton.disabled === false)) banner.className = stats.failedTests ? "qunit-fail" : "qunit-pass";
            if (abortButton) abortButton.parentNode.removeChild(abortButton);
            if (tests) id("qunit-testresult-display").innerHTML = html;
            if (config.altertitle && document1.title) // Show ✖ for good, ✔ for bad suite result in title
            // use escape sequences in case file gets loaded with non-utf-8
            // charset
            document1.title = [
                stats.failedTests ? "✖" : "✔",
                document1.title.replace(/^[\u2714\u2716] /i, "")
            ].join(" ");
             // Scroll back to top to show results
            if (config.scrolltop && window$1.scrollTo) window$1.scrollTo(0, 0);
        });
        function getNameHtml(name, module1) {
            var nameHtml = "";
            if (module1) nameHtml = "<span class='module-name'>" + escapeText(module1) + "</span>: ";
            nameHtml += "<span class='test-name'>" + escapeText(name) + "</span>";
            return nameHtml;
        }
        function getProgressHtml(runtime, stats, total) {
            var completed = stats.passedTests + stats.skippedTests + stats.todoTests + stats.failedTests;
            return [
                "<br />",
                completed,
                " / ",
                total,
                " tests completed in ",
                runtime,
                " milliseconds, with ",
                stats.failedTests,
                " failed, ",
                stats.skippedTests,
                " skipped, and ",
                stats.todoTests,
                " todo."
            ].join("");
        }
        QUnit.testStart(function(details) {
            var running, bad;
            appendTest(details.name, details.testId, details.module);
            running = id("qunit-testresult-display");
            if (running) {
                addClass(running, "running");
                bad = QUnit.config.reorder && details.previousFailure;
                running.innerHTML = [
                    bad ? "Rerunning previously failed test: <br />" : "Running: <br />",
                    getNameHtml(details.name, details.module),
                    getProgressHtml(now() - config.started, stats, Test.count)
                ].join("");
            }
        });
        function stripHtml(string) {
            // Strip tags, html entity and whitespaces
            return string.replace(/<\/?[^>]+(>|$)/g, "").replace(/&quot;/g, "").replace(/\s+/g, "");
        }
        QUnit.log(function(details) {
            var assertList, assertLi, message, expected, actual, diff, showDiff = false, testItem = id("qunit-test-output-" + details.testId);
            if (!testItem) return;
            message = escapeText(details.message) || (details.result ? "okay" : "failed");
            message = "<span class='test-message'>" + message + "</span>";
            message += "<span class='runtime'>@ " + details.runtime + " ms</span>"; // The pushFailure doesn't provide details.expected
            // when it calls, it's implicit to also not show expected and diff stuff
            // Also, we need to check details.expected existence, as it can exist and be undefined
            if (!details.result && hasOwn.call(details, "expected")) {
                if (details.negative) expected = "NOT " + QUnit.dump.parse(details.expected);
                else expected = QUnit.dump.parse(details.expected);
                actual = QUnit.dump.parse(details.actual);
                message += "<table><tr class='test-expected'><th>Expected: </th><td><pre>" + escapeText(expected) + "</pre></td></tr>";
                if (actual !== expected) {
                    message += "<tr class='test-actual'><th>Result: </th><td><pre>" + escapeText(actual) + "</pre></td></tr>";
                    if (typeof details.actual === "number" && typeof details.expected === "number") {
                        if (!isNaN(details.actual) && !isNaN(details.expected)) {
                            showDiff = true;
                            diff = details.actual - details.expected;
                            diff = (diff > 0 ? "+" : "") + diff;
                        }
                    } else if (typeof details.actual !== "boolean" && typeof details.expected !== "boolean") {
                        diff = QUnit.diff(expected, actual); // don't show diff if there is zero overlap
                        showDiff = stripHtml(diff).length !== stripHtml(expected).length + stripHtml(actual).length;
                    }
                    if (showDiff) message += "<tr class='test-diff'><th>Diff: </th><td><pre>" + diff + "</pre></td></tr>";
                } else if (expected.indexOf("[object Array]") !== -1 || expected.indexOf("[object Object]") !== -1) message += "<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth (" + QUnit.config.maxDepth + ").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to " + " run with a higher max depth or <a href='" + escapeText(setUrl({
                    maxDepth: -1
                })) + "'>" + "Rerun</a> without max depth.</p></td></tr>";
                else message += "<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>";
                if (details.source) message += "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr>";
                message += "</table>"; // This occurs when pushFailure is set and we have an extracted stack trace
            } else if (!details.result && details.source) message += "<table><tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr>" + "</table>";
            assertList = testItem.getElementsByTagName("ol")[0];
            assertLi = document1.createElement("li");
            assertLi.className = details.result ? "pass" : "fail";
            assertLi.innerHTML = message;
            assertList.appendChild(assertLi);
        });
        QUnit.testDone(function(details) {
            var testTitle, time, testItem, assertList, status, good, bad, testCounts, skipped, sourceName, tests = id("qunit-tests");
            if (!tests) return;
            testItem = id("qunit-test-output-" + details.testId);
            removeClass(testItem, "running");
            if (details.failed > 0) status = "failed";
            else if (details.todo) status = "todo";
            else status = details.skipped ? "skipped" : "passed";
            assertList = testItem.getElementsByTagName("ol")[0];
            good = details.passed;
            bad = details.failed; // This test passed if it has no unexpected failed assertions
            var testPassed = details.failed > 0 ? details.todo : !details.todo;
            if (testPassed) // Collapse the passing tests
            addClass(assertList, "qunit-collapsed");
            else if (config.collapse) {
                if (!collapseNext) // Skip collapsing the first failing test
                collapseNext = true;
                else // Collapse remaining tests
                addClass(assertList, "qunit-collapsed");
            } // The testItem.firstChild is the test name
            testTitle = testItem.firstChild;
            testCounts = bad ? "<b class='failed'>" + bad + "</b>, " + "<b class='passed'>" + good + "</b>, " : "";
            testTitle.innerHTML += " <b class='counts'>(" + testCounts + details.assertions.length + ")</b>";
            if (details.skipped) {
                stats.skippedTests++;
                testItem.className = "skipped";
                skipped = document1.createElement("em");
                skipped.className = "qunit-skipped-label";
                skipped.innerHTML = "skipped";
                testItem.insertBefore(skipped, testTitle);
            } else {
                addEvent(testTitle, "click", function() {
                    toggleClass(assertList, "qunit-collapsed");
                });
                testItem.className = testPassed ? "pass" : "fail";
                if (details.todo) {
                    var todoLabel = document1.createElement("em");
                    todoLabel.className = "qunit-todo-label";
                    todoLabel.innerHTML = "todo";
                    testItem.className += " todo";
                    testItem.insertBefore(todoLabel, testTitle);
                }
                time = document1.createElement("span");
                time.className = "runtime";
                time.innerHTML = details.runtime + " ms";
                testItem.insertBefore(time, assertList);
                if (!testPassed) stats.failedTests++;
                else if (details.todo) stats.todoTests++;
                else stats.passedTests++;
            } // Show the source of the test when showing assertions
            if (details.source) {
                sourceName = document1.createElement("p");
                sourceName.innerHTML = "<strong>Source: </strong>" + escapeText(details.source);
                addClass(sourceName, "qunit-source");
                if (testPassed) addClass(sourceName, "qunit-collapsed");
                addEvent(testTitle, "click", function() {
                    toggleClass(sourceName, "qunit-collapsed");
                });
                testItem.appendChild(sourceName);
            }
            if (config.hidepassed && (status === "passed" || details.skipped)) {
                // use removeChild instead of remove because of support
                hiddenTests.push(testItem);
                tests.removeChild(testItem);
            }
        }); // Avoid readyState issue with phantomjs
        // Ref: #818
        var notPhantom = function(p) {
            return !(p && p.version && p.version.major > 0);
        }(window$1.phantom);
        if (notPhantom && document1.readyState === "complete") QUnit.load();
        else addEvent(window$1, "load", QUnit.load);
         // Wrap window.onerror. We will call the original window.onerror to see if
        // the existing handler fully handles the error; if not, we will call the
        // QUnit.onError function.
        var originalWindowOnError = window$1.onerror; // Cover uncaught exceptions
        // Returning true will suppress the default browser handler,
        // returning false will let it run.
        window$1.onerror = function(message, fileName, lineNumber, columnNumber, errorObj) {
            var ret = false;
            if (originalWindowOnError) {
                for(var _len = arguments.length, args = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++)args[_key - 5] = arguments[_key];
                ret = originalWindowOnError.call.apply(originalWindowOnError, [
                    this,
                    message,
                    fileName,
                    lineNumber,
                    columnNumber,
                    errorObj
                ].concat(args));
            } // Treat return value as window.onerror itself does,
            // Only do our handling if not suppressed.
            if (ret !== true) {
                var error = {
                    message: message,
                    fileName: fileName,
                    lineNumber: lineNumber
                }; // According to
                // https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror,
                // most modern browsers support an errorObj argument; use that to
                // get a full stack trace if it's available.
                if (errorObj && errorObj.stack) error.stacktrace = extractStacktrace(errorObj, 0);
                ret = QUnit.onError(error);
            }
            return ret;
        }; // Listen for unhandled rejections, and call QUnit.onUnhandledRejection
        window$1.addEventListener("unhandledrejection", function(event) {
            QUnit.onUnhandledRejection(event.reason);
        });
    })();
    /*
	 * This file is a modified version of google-diff-match-patch's JavaScript implementation
	 * (https://code.google.com/p/google-diff-match-patch/source/browse/trunk/javascript/diff_match_patch_uncompressed.js),
	 * modifications are licensed as more fully set forth in LICENSE.txt.
	 *
	 * The original source of google-diff-match-patch is attributable and licensed as follows:
	 *
	 * Copyright 2006 Google Inc.
	 * https://code.google.com/p/google-diff-match-patch/
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * https://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * More Info:
	 *  https://code.google.com/p/google-diff-match-patch/
	 *
	 * Usage: QUnit.diff(expected, actual)
	 *
	 */ QUnit.diff = function() {
        function DiffMatchPatch() {} //  DIFF FUNCTIONS
        /**
	   * The data structure representing a diff is an array of tuples:
	   * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
	   * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
	   */ var DIFF_DELETE = -1, DIFF_INSERT = 1, DIFF_EQUAL = 0, hasOwn = Object.prototype.hasOwnProperty;
        /**
	   * Find the differences between two texts.  Simplifies the problem by stripping
	   * any common prefix or suffix off the texts before diffing.
	   * @param {string} text1 Old string to be diffed.
	   * @param {string} text2 New string to be diffed.
	   * @param {boolean=} optChecklines Optional speedup flag. If present and false,
	   *     then don't run a line-level diff first to identify the changed areas.
	   *     Defaults to true, which does a faster, slightly less optimal diff.
	   * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	   */ DiffMatchPatch.prototype.DiffMain = function(text1, text2, optChecklines) {
            var deadline, checklines, commonlength, commonprefix, commonsuffix, diffs; // The diff must be complete in up to 1 second.
            deadline = new Date().getTime() + 1000; // Check for null inputs.
            if (text1 === null || text2 === null) throw new Error("Null input. (DiffMain)");
             // Check for equality (speedup).
            if (text1 === text2) {
                if (text1) return [
                    [
                        DIFF_EQUAL,
                        text1
                    ]
                ];
                return [];
            }
            if (typeof optChecklines === "undefined") optChecklines = true;
            checklines = optChecklines; // Trim off common prefix (speedup).
            commonlength = this.diffCommonPrefix(text1, text2);
            commonprefix = text1.substring(0, commonlength);
            text1 = text1.substring(commonlength);
            text2 = text2.substring(commonlength); // Trim off common suffix (speedup).
            commonlength = this.diffCommonSuffix(text1, text2);
            commonsuffix = text1.substring(text1.length - commonlength);
            text1 = text1.substring(0, text1.length - commonlength);
            text2 = text2.substring(0, text2.length - commonlength); // Compute the diff on the middle block.
            diffs = this.diffCompute(text1, text2, checklines, deadline); // Restore the prefix and suffix.
            if (commonprefix) diffs.unshift([
                DIFF_EQUAL,
                commonprefix
            ]);
            if (commonsuffix) diffs.push([
                DIFF_EQUAL,
                commonsuffix
            ]);
            this.diffCleanupMerge(diffs);
            return diffs;
        };
        /**
	   * Reduce the number of edits by eliminating operationally trivial equalities.
	   * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	   */ DiffMatchPatch.prototype.diffCleanupEfficiency = function(diffs) {
            var changes, equalities, equalitiesLength, lastequality, pointer, preIns, preDel, postIns, postDel;
            changes = false;
            equalities = []; // Stack of indices where equalities are found.
            equalitiesLength = 0; // Keeping our own length var is faster in JS.
            /** @type {?string} */ lastequality = null; // Always equal to diffs[equalities[equalitiesLength - 1]][1]
            pointer = 0; // Index of current position.
            // Is there an insertion operation before the last equality.
            preIns = false; // Is there a deletion operation before the last equality.
            preDel = false; // Is there an insertion operation after the last equality.
            postIns = false; // Is there a deletion operation after the last equality.
            postDel = false;
            while(pointer < diffs.length){
                // Equality found.
                if (diffs[pointer][0] === DIFF_EQUAL) {
                    if (diffs[pointer][1].length < 4 && (postIns || postDel)) {
                        // Candidate found.
                        equalities[equalitiesLength++] = pointer;
                        preIns = postIns;
                        preDel = postDel;
                        lastequality = diffs[pointer][1];
                    } else {
                        // Not a candidate, and can never become one.
                        equalitiesLength = 0;
                        lastequality = null;
                    }
                    postIns = postDel = false; // An insertion or deletion.
                } else {
                    if (diffs[pointer][0] === DIFF_DELETE) postDel = true;
                    else postIns = true;
                    /*
	         * Five types to be split:
	         * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
	         * <ins>A</ins>X<ins>C</ins><del>D</del>
	         * <ins>A</ins><del>B</del>X<ins>C</ins>
	         * <ins>A</del>X<ins>C</ins><del>D</del>
	         * <ins>A</ins><del>B</del>X<del>C</del>
	         */ if (lastequality && (preIns && preDel && postIns && postDel || lastequality.length < 2 && preIns + preDel + postIns + postDel === 3)) {
                        // Duplicate record.
                        diffs.splice(equalities[equalitiesLength - 1], 0, [
                            DIFF_DELETE,
                            lastequality
                        ]); // Change second copy to insert.
                        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
                        equalitiesLength--; // Throw away the equality we just deleted;
                        lastequality = null;
                        if (preIns && preDel) {
                            // No changes made which could affect previous entry, keep going.
                            postIns = postDel = true;
                            equalitiesLength = 0;
                        } else {
                            equalitiesLength--; // Throw away the previous equality.
                            pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                            postIns = postDel = false;
                        }
                        changes = true;
                    }
                }
                pointer++;
            }
            if (changes) this.diffCleanupMerge(diffs);
        };
        /**
	   * Convert a diff array into a pretty HTML report.
	   * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	   * @param {integer} string to be beautified.
	   * @return {string} HTML representation.
	   */ DiffMatchPatch.prototype.diffPrettyHtml = function(diffs) {
            var op, data, x, html = [];
            for(x = 0; x < diffs.length; x++){
                op = diffs[x][0]; // Operation (insert, delete, equal)
                data = diffs[x][1]; // Text of change.
                switch(op){
                    case DIFF_INSERT:
                        html[x] = "<ins>" + escapeText(data) + "</ins>";
                        break;
                    case DIFF_DELETE:
                        html[x] = "<del>" + escapeText(data) + "</del>";
                        break;
                    case DIFF_EQUAL:
                        html[x] = "<span>" + escapeText(data) + "</span>";
                        break;
                }
            }
            return html.join("");
        };
        /**
	   * Determine the common prefix of two strings.
	   * @param {string} text1 First string.
	   * @param {string} text2 Second string.
	   * @return {number} The number of characters common to the start of each
	   *     string.
	   */ DiffMatchPatch.prototype.diffCommonPrefix = function(text1, text2) {
            var pointermid, pointermax, pointermin, pointerstart; // Quick check for common null cases.
            if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) return 0;
             // Binary search.
            // Performance analysis: https://neil.fraser.name/news/2007/10/09/
            pointermin = 0;
            pointermax = Math.min(text1.length, text2.length);
            pointermid = pointermax;
            pointerstart = 0;
            while(pointermin < pointermid){
                if (text1.substring(pointerstart, pointermid) === text2.substring(pointerstart, pointermid)) {
                    pointermin = pointermid;
                    pointerstart = pointermin;
                } else pointermax = pointermid;
                pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
            }
            return pointermid;
        };
        /**
	   * Determine the common suffix of two strings.
	   * @param {string} text1 First string.
	   * @param {string} text2 Second string.
	   * @return {number} The number of characters common to the end of each string.
	   */ DiffMatchPatch.prototype.diffCommonSuffix = function(text1, text2) {
            var pointermid, pointermax, pointermin, pointerend; // Quick check for common null cases.
            if (!text1 || !text2 || text1.charAt(text1.length - 1) !== text2.charAt(text2.length - 1)) return 0;
             // Binary search.
            // Performance analysis: https://neil.fraser.name/news/2007/10/09/
            pointermin = 0;
            pointermax = Math.min(text1.length, text2.length);
            pointermid = pointermax;
            pointerend = 0;
            while(pointermin < pointermid){
                if (text1.substring(text1.length - pointermid, text1.length - pointerend) === text2.substring(text2.length - pointermid, text2.length - pointerend)) {
                    pointermin = pointermid;
                    pointerend = pointermin;
                } else pointermax = pointermid;
                pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
            }
            return pointermid;
        };
        /**
	   * Find the differences between two texts.  Assumes that the texts do not
	   * have any common prefix or suffix.
	   * @param {string} text1 Old string to be diffed.
	   * @param {string} text2 New string to be diffed.
	   * @param {boolean} checklines Speedup flag.  If false, then don't run a
	   *     line-level diff first to identify the changed areas.
	   *     If true, then run a faster, slightly less optimal diff.
	   * @param {number} deadline Time when the diff should be complete by.
	   * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	   * @private
	   */ DiffMatchPatch.prototype.diffCompute = function(text1, text2, checklines, deadline) {
            var diffs, longtext, shorttext, i, hm, text1A, text2A, text1B, text2B, midCommon, diffsA, diffsB;
            if (!text1) // Just add some text (speedup).
            return [
                [
                    DIFF_INSERT,
                    text2
                ]
            ];
            if (!text2) // Just delete some text (speedup).
            return [
                [
                    DIFF_DELETE,
                    text1
                ]
            ];
            longtext = text1.length > text2.length ? text1 : text2;
            shorttext = text1.length > text2.length ? text2 : text1;
            i = longtext.indexOf(shorttext);
            if (i !== -1) {
                // Shorter text is inside the longer text (speedup).
                diffs = [
                    [
                        DIFF_INSERT,
                        longtext.substring(0, i)
                    ],
                    [
                        DIFF_EQUAL,
                        shorttext
                    ],
                    [
                        DIFF_INSERT,
                        longtext.substring(i + shorttext.length)
                    ]
                ]; // Swap insertions for deletions if diff is reversed.
                if (text1.length > text2.length) diffs[0][0] = diffs[2][0] = DIFF_DELETE;
                return diffs;
            }
            if (shorttext.length === 1) // Single character string.
            // After the previous speedup, the character can't be an equality.
            return [
                [
                    DIFF_DELETE,
                    text1
                ],
                [
                    DIFF_INSERT,
                    text2
                ]
            ];
             // Check to see if the problem can be split in two.
            hm = this.diffHalfMatch(text1, text2);
            if (hm) {
                // A half-match was found, sort out the return data.
                text1A = hm[0];
                text1B = hm[1];
                text2A = hm[2];
                text2B = hm[3];
                midCommon = hm[4]; // Send both pairs off for separate processing.
                diffsA = this.DiffMain(text1A, text2A, checklines, deadline);
                diffsB = this.DiffMain(text1B, text2B, checklines, deadline); // Merge the results.
                return diffsA.concat([
                    [
                        DIFF_EQUAL,
                        midCommon
                    ]
                ], diffsB);
            }
            if (checklines && text1.length > 100 && text2.length > 100) return this.diffLineMode(text1, text2, deadline);
            return this.diffBisect(text1, text2, deadline);
        };
        /**
	   * Do the two texts share a substring which is at least half the length of the
	   * longer text?
	   * This speedup can produce non-minimal diffs.
	   * @param {string} text1 First string.
	   * @param {string} text2 Second string.
	   * @return {Array.<string>} Five element Array, containing the prefix of
	   *     text1, the suffix of text1, the prefix of text2, the suffix of
	   *     text2 and the common middle.  Or null if there was no match.
	   * @private
	   */ DiffMatchPatch.prototype.diffHalfMatch = function(text1, text2) {
            var longtext, shorttext, dmp, text1A, text2B, text2A, text1B, midCommon, hm1, hm2, hm;
            longtext = text1.length > text2.length ? text1 : text2;
            shorttext = text1.length > text2.length ? text2 : text1;
            if (longtext.length < 4 || shorttext.length * 2 < longtext.length) return null; // Pointless.
            dmp = this; // 'this' becomes 'window' in a closure.
            /**
	     * Does a substring of shorttext exist within longtext such that the substring
	     * is at least half the length of longtext?
	     * Closure, but does not reference any external variables.
	     * @param {string} longtext Longer string.
	     * @param {string} shorttext Shorter string.
	     * @param {number} i Start index of quarter length substring within longtext.
	     * @return {Array.<string>} Five element Array, containing the prefix of
	     *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
	     *     of shorttext and the common middle.  Or null if there was no match.
	     * @private
	     */ function diffHalfMatchI(longtext, shorttext, i) {
                var seed, j, bestCommon, prefixLength, suffixLength, bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB; // Start with a 1/4 length substring at position i as a seed.
                seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
                j = -1;
                bestCommon = "";
                while((j = shorttext.indexOf(seed, j + 1)) !== -1){
                    prefixLength = dmp.diffCommonPrefix(longtext.substring(i), shorttext.substring(j));
                    suffixLength = dmp.diffCommonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
                    if (bestCommon.length < suffixLength + prefixLength) {
                        bestCommon = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
                        bestLongtextA = longtext.substring(0, i - suffixLength);
                        bestLongtextB = longtext.substring(i + prefixLength);
                        bestShorttextA = shorttext.substring(0, j - suffixLength);
                        bestShorttextB = shorttext.substring(j + prefixLength);
                    }
                }
                if (bestCommon.length * 2 >= longtext.length) return [
                    bestLongtextA,
                    bestLongtextB,
                    bestShorttextA,
                    bestShorttextB,
                    bestCommon
                ];
                else return null;
            } // First check if the second quarter is the seed for a half-match.
            hm1 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 4)); // Check again based on the third quarter.
            hm2 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 2));
            if (!hm1 && !hm2) return null;
            else if (!hm2) hm = hm1;
            else if (!hm1) hm = hm2;
            else // Both matched.  Select the longest.
            hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
             // A half-match was found, sort out the return data.
            if (text1.length > text2.length) {
                text1A = hm[0];
                text1B = hm[1];
                text2A = hm[2];
                text2B = hm[3];
            } else {
                text2A = hm[0];
                text2B = hm[1];
                text1A = hm[2];
                text1B = hm[3];
            }
            midCommon = hm[4];
            return [
                text1A,
                text1B,
                text2A,
                text2B,
                midCommon
            ];
        };
        /**
	   * Do a quick line-level diff on both strings, then rediff the parts for
	   * greater accuracy.
	   * This speedup can produce non-minimal diffs.
	   * @param {string} text1 Old string to be diffed.
	   * @param {string} text2 New string to be diffed.
	   * @param {number} deadline Time when the diff should be complete by.
	   * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	   * @private
	   */ DiffMatchPatch.prototype.diffLineMode = function(text1, text2, deadline) {
            var a, diffs, linearray, pointer, countInsert, countDelete, textInsert, textDelete, j; // Scan the text on a line-by-line basis first.
            a = this.diffLinesToChars(text1, text2);
            text1 = a.chars1;
            text2 = a.chars2;
            linearray = a.lineArray;
            diffs = this.DiffMain(text1, text2, false, deadline); // Convert the diff back to original text.
            this.diffCharsToLines(diffs, linearray); // Eliminate freak matches (e.g. blank lines)
            this.diffCleanupSemantic(diffs); // Rediff any replacement blocks, this time character-by-character.
            // Add a dummy entry at the end.
            diffs.push([
                DIFF_EQUAL,
                ""
            ]);
            pointer = 0;
            countDelete = 0;
            countInsert = 0;
            textDelete = "";
            textInsert = "";
            while(pointer < diffs.length){
                switch(diffs[pointer][0]){
                    case DIFF_INSERT:
                        countInsert++;
                        textInsert += diffs[pointer][1];
                        break;
                    case DIFF_DELETE:
                        countDelete++;
                        textDelete += diffs[pointer][1];
                        break;
                    case DIFF_EQUAL:
                        // Upon reaching an equality, check for prior redundancies.
                        if (countDelete >= 1 && countInsert >= 1) {
                            // Delete the offending records and add the merged ones.
                            diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert);
                            pointer = pointer - countDelete - countInsert;
                            a = this.DiffMain(textDelete, textInsert, false, deadline);
                            for(j = a.length - 1; j >= 0; j--)diffs.splice(pointer, 0, a[j]);
                            pointer = pointer + a.length;
                        }
                        countInsert = 0;
                        countDelete = 0;
                        textDelete = "";
                        textInsert = "";
                        break;
                }
                pointer++;
            }
            diffs.pop(); // Remove the dummy entry at the end.
            return diffs;
        };
        /**
	   * Find the 'middle snake' of a diff, split the problem in two
	   * and return the recursively constructed diff.
	   * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
	   * @param {string} text1 Old string to be diffed.
	   * @param {string} text2 New string to be diffed.
	   * @param {number} deadline Time at which to bail if not yet complete.
	   * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	   * @private
	   */ DiffMatchPatch.prototype.diffBisect = function(text1, text2, deadline) {
            var text1Length, text2Length, maxD, vOffset, vLength, v1, v2, x, delta, front, k1start, k1end, k2start, k2end, k2Offset, k1Offset, x1, x2, y1, y2, d, k1, k2; // Cache the text lengths to prevent multiple calls.
            text1Length = text1.length;
            text2Length = text2.length;
            maxD = Math.ceil((text1Length + text2Length) / 2);
            vOffset = maxD;
            vLength = 2 * maxD;
            v1 = new Array(vLength);
            v2 = new Array(vLength); // Setting all elements to -1 is faster in Chrome & Firefox than mixing
            // integers and undefined.
            for(x = 0; x < vLength; x++){
                v1[x] = -1;
                v2[x] = -1;
            }
            v1[vOffset + 1] = 0;
            v2[vOffset + 1] = 0;
            delta = text1Length - text2Length; // If the total number of characters is odd, then the front path will collide
            // with the reverse path.
            front = delta % 2 !== 0; // Offsets for start and end of k loop.
            // Prevents mapping of space beyond the grid.
            k1start = 0;
            k1end = 0;
            k2start = 0;
            k2end = 0;
            for(d = 0; d < maxD; d++){
                // Bail out if deadline is reached.
                if (new Date().getTime() > deadline) break;
                 // Walk the front path one step.
                for(k1 = -d + k1start; k1 <= d - k1end; k1 += 2){
                    k1Offset = vOffset + k1;
                    if (k1 === -d || k1 !== d && v1[k1Offset - 1] < v1[k1Offset + 1]) x1 = v1[k1Offset + 1];
                    else x1 = v1[k1Offset - 1] + 1;
                    y1 = x1 - k1;
                    while(x1 < text1Length && y1 < text2Length && text1.charAt(x1) === text2.charAt(y1)){
                        x1++;
                        y1++;
                    }
                    v1[k1Offset] = x1;
                    if (x1 > text1Length) // Ran off the right of the graph.
                    k1end += 2;
                    else if (y1 > text2Length) // Ran off the bottom of the graph.
                    k1start += 2;
                    else if (front) {
                        k2Offset = vOffset + delta - k1;
                        if (k2Offset >= 0 && k2Offset < vLength && v2[k2Offset] !== -1) {
                            // Mirror x2 onto top-left coordinate system.
                            x2 = text1Length - v2[k2Offset];
                            if (x1 >= x2) // Overlap detected.
                            return this.diffBisectSplit(text1, text2, x1, y1, deadline);
                        }
                    }
                } // Walk the reverse path one step.
                for(k2 = -d + k2start; k2 <= d - k2end; k2 += 2){
                    k2Offset = vOffset + k2;
                    if (k2 === -d || k2 !== d && v2[k2Offset - 1] < v2[k2Offset + 1]) x2 = v2[k2Offset + 1];
                    else x2 = v2[k2Offset - 1] + 1;
                    y2 = x2 - k2;
                    while(x2 < text1Length && y2 < text2Length && text1.charAt(text1Length - x2 - 1) === text2.charAt(text2Length - y2 - 1)){
                        x2++;
                        y2++;
                    }
                    v2[k2Offset] = x2;
                    if (x2 > text1Length) // Ran off the left of the graph.
                    k2end += 2;
                    else if (y2 > text2Length) // Ran off the top of the graph.
                    k2start += 2;
                    else if (!front) {
                        k1Offset = vOffset + delta - k2;
                        if (k1Offset >= 0 && k1Offset < vLength && v1[k1Offset] !== -1) {
                            x1 = v1[k1Offset];
                            y1 = vOffset + x1 - k1Offset; // Mirror x2 onto top-left coordinate system.
                            x2 = text1Length - x2;
                            if (x1 >= x2) // Overlap detected.
                            return this.diffBisectSplit(text1, text2, x1, y1, deadline);
                        }
                    }
                }
            } // Diff took too long and hit the deadline or
            // number of diffs equals number of characters, no commonality at all.
            return [
                [
                    DIFF_DELETE,
                    text1
                ],
                [
                    DIFF_INSERT,
                    text2
                ]
            ];
        };
        /**
	   * Given the location of the 'middle snake', split the diff in two parts
	   * and recurse.
	   * @param {string} text1 Old string to be diffed.
	   * @param {string} text2 New string to be diffed.
	   * @param {number} x Index of split point in text1.
	   * @param {number} y Index of split point in text2.
	   * @param {number} deadline Time at which to bail if not yet complete.
	   * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	   * @private
	   */ DiffMatchPatch.prototype.diffBisectSplit = function(text1, text2, x, y, deadline) {
            var text1a, text1b, text2a, text2b, diffs, diffsb;
            text1a = text1.substring(0, x);
            text2a = text2.substring(0, y);
            text1b = text1.substring(x);
            text2b = text2.substring(y); // Compute both diffs serially.
            diffs = this.DiffMain(text1a, text2a, false, deadline);
            diffsb = this.DiffMain(text1b, text2b, false, deadline);
            return diffs.concat(diffsb);
        };
        /**
	   * Reduce the number of edits by eliminating semantically trivial equalities.
	   * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	   */ DiffMatchPatch.prototype.diffCleanupSemantic = function(diffs) {
            var changes, equalities, equalitiesLength, lastequality, pointer, lengthInsertions2, lengthDeletions2, lengthInsertions1, lengthDeletions1, deletion, insertion, overlapLength1, overlapLength2;
            changes = false;
            equalities = []; // Stack of indices where equalities are found.
            equalitiesLength = 0; // Keeping our own length var is faster in JS.
            /** @type {?string} */ lastequality = null; // Always equal to diffs[equalities[equalitiesLength - 1]][1]
            pointer = 0; // Index of current position.
            // Number of characters that changed prior to the equality.
            lengthInsertions1 = 0;
            lengthDeletions1 = 0; // Number of characters that changed after the equality.
            lengthInsertions2 = 0;
            lengthDeletions2 = 0;
            while(pointer < diffs.length){
                if (diffs[pointer][0] === DIFF_EQUAL) {
                    // Equality found.
                    equalities[equalitiesLength++] = pointer;
                    lengthInsertions1 = lengthInsertions2;
                    lengthDeletions1 = lengthDeletions2;
                    lengthInsertions2 = 0;
                    lengthDeletions2 = 0;
                    lastequality = diffs[pointer][1];
                } else {
                    // An insertion or deletion.
                    if (diffs[pointer][0] === DIFF_INSERT) lengthInsertions2 += diffs[pointer][1].length;
                    else lengthDeletions2 += diffs[pointer][1].length;
                     // Eliminate an equality that is smaller or equal to the edits on both
                    // sides of it.
                    if (lastequality && lastequality.length <= Math.max(lengthInsertions1, lengthDeletions1) && lastequality.length <= Math.max(lengthInsertions2, lengthDeletions2)) {
                        // Duplicate record.
                        diffs.splice(equalities[equalitiesLength - 1], 0, [
                            DIFF_DELETE,
                            lastequality
                        ]); // Change second copy to insert.
                        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT; // Throw away the equality we just deleted.
                        equalitiesLength--; // Throw away the previous equality (it needs to be reevaluated).
                        equalitiesLength--;
                        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1; // Reset the counters.
                        lengthInsertions1 = 0;
                        lengthDeletions1 = 0;
                        lengthInsertions2 = 0;
                        lengthDeletions2 = 0;
                        lastequality = null;
                        changes = true;
                    }
                }
                pointer++;
            } // Normalize the diff.
            if (changes) this.diffCleanupMerge(diffs);
             // Find any overlaps between deletions and insertions.
            // e.g: <del>abcxxx</del><ins>xxxdef</ins>
            //   -> <del>abc</del>xxx<ins>def</ins>
            // e.g: <del>xxxabc</del><ins>defxxx</ins>
            //   -> <ins>def</ins>xxx<del>abc</del>
            // Only extract an overlap if it is as big as the edit ahead or behind it.
            pointer = 1;
            while(pointer < diffs.length){
                if (diffs[pointer - 1][0] === DIFF_DELETE && diffs[pointer][0] === DIFF_INSERT) {
                    deletion = diffs[pointer - 1][1];
                    insertion = diffs[pointer][1];
                    overlapLength1 = this.diffCommonOverlap(deletion, insertion);
                    overlapLength2 = this.diffCommonOverlap(insertion, deletion);
                    if (overlapLength1 >= overlapLength2) {
                        if (overlapLength1 >= deletion.length / 2 || overlapLength1 >= insertion.length / 2) {
                            // Overlap found.  Insert an equality and trim the surrounding edits.
                            diffs.splice(pointer, 0, [
                                DIFF_EQUAL,
                                insertion.substring(0, overlapLength1)
                            ]);
                            diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlapLength1);
                            diffs[pointer + 1][1] = insertion.substring(overlapLength1);
                            pointer++;
                        }
                    } else if (overlapLength2 >= deletion.length / 2 || overlapLength2 >= insertion.length / 2) {
                        // Reverse overlap found.
                        // Insert an equality and swap and trim the surrounding edits.
                        diffs.splice(pointer, 0, [
                            DIFF_EQUAL,
                            deletion.substring(0, overlapLength2)
                        ]);
                        diffs[pointer - 1][0] = DIFF_INSERT;
                        diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlapLength2);
                        diffs[pointer + 1][0] = DIFF_DELETE;
                        diffs[pointer + 1][1] = deletion.substring(overlapLength2);
                        pointer++;
                    }
                    pointer++;
                }
                pointer++;
            }
        };
        /**
	   * Determine if the suffix of one string is the prefix of another.
	   * @param {string} text1 First string.
	   * @param {string} text2 Second string.
	   * @return {number} The number of characters common to the end of the first
	   *     string and the start of the second string.
	   * @private
	   */ DiffMatchPatch.prototype.diffCommonOverlap = function(text1, text2) {
            var text1Length, text2Length, textLength, best, length, pattern, found; // Cache the text lengths to prevent multiple calls.
            text1Length = text1.length;
            text2Length = text2.length; // Eliminate the null case.
            if (text1Length === 0 || text2Length === 0) return 0;
             // Truncate the longer string.
            if (text1Length > text2Length) text1 = text1.substring(text1Length - text2Length);
            else if (text1Length < text2Length) text2 = text2.substring(0, text1Length);
            textLength = Math.min(text1Length, text2Length); // Quick check for the worst case.
            if (text1 === text2) return textLength;
             // Start by looking for a single character match
            // and increase length until no match is found.
            // Performance analysis: https://neil.fraser.name/news/2010/11/04/
            best = 0;
            length = 1;
            while(true){
                pattern = text1.substring(textLength - length);
                found = text2.indexOf(pattern);
                if (found === -1) return best;
                length += found;
                if (found === 0 || text1.substring(textLength - length) === text2.substring(0, length)) {
                    best = length;
                    length++;
                }
            }
        };
        /**
	   * Split two texts into an array of strings.  Reduce the texts to a string of
	   * hashes where each Unicode character represents one line.
	   * @param {string} text1 First string.
	   * @param {string} text2 Second string.
	   * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
	   *     An object containing the encoded text1, the encoded text2 and
	   *     the array of unique strings.
	   *     The zeroth element of the array of unique strings is intentionally blank.
	   * @private
	   */ DiffMatchPatch.prototype.diffLinesToChars = function(text1, text2) {
            var lineArray, lineHash, chars1, chars2;
            lineArray = []; // E.g. lineArray[4] === 'Hello\n'
            lineHash = {}; // E.g. lineHash['Hello\n'] === 4
            // '\x00' is a valid character, but various debuggers don't like it.
            // So we'll insert a junk entry to avoid generating a null character.
            lineArray[0] = "";
            /**
	     * Split a text into an array of strings.  Reduce the texts to a string of
	     * hashes where each Unicode character represents one line.
	     * Modifies linearray and linehash through being a closure.
	     * @param {string} text String to encode.
	     * @return {string} Encoded string.
	     * @private
	     */ function diffLinesToCharsMunge(text) {
                var chars, lineStart, lineEnd, lineArrayLength, line;
                chars = ""; // Walk the text, pulling out a substring for each line.
                // text.split('\n') would would temporarily double our memory footprint.
                // Modifying text would create many large strings to garbage collect.
                lineStart = 0;
                lineEnd = -1; // Keeping our own length variable is faster than looking it up.
                lineArrayLength = lineArray.length;
                while(lineEnd < text.length - 1){
                    lineEnd = text.indexOf("\n", lineStart);
                    if (lineEnd === -1) lineEnd = text.length - 1;
                    line = text.substring(lineStart, lineEnd + 1);
                    lineStart = lineEnd + 1;
                    if (hasOwn.call(lineHash, line)) chars += String.fromCharCode(lineHash[line]);
                    else {
                        chars += String.fromCharCode(lineArrayLength);
                        lineHash[line] = lineArrayLength;
                        lineArray[lineArrayLength++] = line;
                    }
                }
                return chars;
            }
            chars1 = diffLinesToCharsMunge(text1);
            chars2 = diffLinesToCharsMunge(text2);
            return {
                chars1: chars1,
                chars2: chars2,
                lineArray: lineArray
            };
        };
        /**
	   * Rehydrate the text in a diff from a string of line hashes to real lines of
	   * text.
	   * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	   * @param {!Array.<string>} lineArray Array of unique strings.
	   * @private
	   */ DiffMatchPatch.prototype.diffCharsToLines = function(diffs, lineArray) {
            var x, chars, text, y;
            for(x = 0; x < diffs.length; x++){
                chars = diffs[x][1];
                text = [];
                for(y = 0; y < chars.length; y++)text[y] = lineArray[chars.charCodeAt(y)];
                diffs[x][1] = text.join("");
            }
        };
        /**
	   * Reorder and merge like edit sections.  Merge equalities.
	   * Any edit section can move as long as it doesn't cross an equality.
	   * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	   */ DiffMatchPatch.prototype.diffCleanupMerge = function(diffs) {
            var pointer, countDelete, countInsert, textInsert, textDelete, commonlength, changes, diffPointer, position;
            diffs.push([
                DIFF_EQUAL,
                ""
            ]); // Add a dummy entry at the end.
            pointer = 0;
            countDelete = 0;
            countInsert = 0;
            textDelete = "";
            textInsert = "";
            while(pointer < diffs.length)switch(diffs[pointer][0]){
                case DIFF_INSERT:
                    countInsert++;
                    textInsert += diffs[pointer][1];
                    pointer++;
                    break;
                case DIFF_DELETE:
                    countDelete++;
                    textDelete += diffs[pointer][1];
                    pointer++;
                    break;
                case DIFF_EQUAL:
                    // Upon reaching an equality, check for prior redundancies.
                    if (countDelete + countInsert > 1) {
                        if (countDelete !== 0 && countInsert !== 0) {
                            // Factor out any common prefixes.
                            commonlength = this.diffCommonPrefix(textInsert, textDelete);
                            if (commonlength !== 0) {
                                if (pointer - countDelete - countInsert > 0 && diffs[pointer - countDelete - countInsert - 1][0] === DIFF_EQUAL) diffs[pointer - countDelete - countInsert - 1][1] += textInsert.substring(0, commonlength);
                                else {
                                    diffs.splice(0, 0, [
                                        DIFF_EQUAL,
                                        textInsert.substring(0, commonlength)
                                    ]);
                                    pointer++;
                                }
                                textInsert = textInsert.substring(commonlength);
                                textDelete = textDelete.substring(commonlength);
                            } // Factor out any common suffixies.
                            commonlength = this.diffCommonSuffix(textInsert, textDelete);
                            if (commonlength !== 0) {
                                diffs[pointer][1] = textInsert.substring(textInsert.length - commonlength) + diffs[pointer][1];
                                textInsert = textInsert.substring(0, textInsert.length - commonlength);
                                textDelete = textDelete.substring(0, textDelete.length - commonlength);
                            }
                        } // Delete the offending records and add the merged ones.
                        if (countDelete === 0) diffs.splice(pointer - countInsert, countDelete + countInsert, [
                            DIFF_INSERT,
                            textInsert
                        ]);
                        else if (countInsert === 0) diffs.splice(pointer - countDelete, countDelete + countInsert, [
                            DIFF_DELETE,
                            textDelete
                        ]);
                        else diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert, [
                            DIFF_DELETE,
                            textDelete
                        ], [
                            DIFF_INSERT,
                            textInsert
                        ]);
                        pointer = pointer - countDelete - countInsert + (countDelete ? 1 : 0) + (countInsert ? 1 : 0) + 1;
                    } else if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
                        // Merge this equality with the previous one.
                        diffs[pointer - 1][1] += diffs[pointer][1];
                        diffs.splice(pointer, 1);
                    } else pointer++;
                    countInsert = 0;
                    countDelete = 0;
                    textDelete = "";
                    textInsert = "";
                    break;
            }
            if (diffs[diffs.length - 1][1] === "") diffs.pop(); // Remove the dummy entry at the end.
             // Second pass: look for single edits surrounded on both sides by equalities
            // which can be shifted sideways to eliminate an equality.
            // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
            changes = false;
            pointer = 1; // Intentionally ignore the first and last element (don't need checking).
            while(pointer < diffs.length - 1){
                if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
                    diffPointer = diffs[pointer][1];
                    position = diffPointer.substring(diffPointer.length - diffs[pointer - 1][1].length); // This is a single edit surrounded by equalities.
                    if (position === diffs[pointer - 1][1]) {
                        // Shift the edit over the previous equality.
                        diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
                        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                        diffs.splice(pointer - 1, 1);
                        changes = true;
                    } else if (diffPointer.substring(0, diffs[pointer + 1][1].length) === diffs[pointer + 1][1]) {
                        // Shift the edit over the next equality.
                        diffs[pointer - 1][1] += diffs[pointer + 1][1];
                        diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
                        diffs.splice(pointer + 1, 1);
                        changes = true;
                    }
                }
                pointer++;
            } // If shifts were made, the diff needs reordering and another shift sweep.
            if (changes) this.diffCleanupMerge(diffs);
        };
        return function(o, n) {
            var diff, output, text;
            diff = new DiffMatchPatch();
            output = diff.DiffMain(o, n);
            diff.diffCleanupEfficiency(output);
            text = diff.diffPrettyHtml(output);
            return text;
        };
    }();
})(function() {
    return this;
}());

},{"25307fcef4c861b3":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}]},["it2cv","dqBLm"], "dqBLm", "parcelRequire7da1")

//# sourceMappingURL=tests.76d8d975.js.map

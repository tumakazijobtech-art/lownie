"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Vercel serverless entry point.
//
// Vercel auto-detects any file under /api as a serverless function. This one
// simply re-exports the existing Express app (artifacts/api-server/src/app.ts)
// as the request handler — Express apps are valid (req, res) handlers, so no
// extra adapter is needed. app.listen()/PORT are only used for local dev and
// the old Render deployment (artifacts/api-server/src/index.ts); Vercel calls
// this exported app directly per-request instead.
const app_js_1 = __importDefault(require("../artifacts/api-server/src/app.js"));
exports.default = app_js_1.default;

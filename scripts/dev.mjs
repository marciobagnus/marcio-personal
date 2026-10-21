import { spawn } from "node:child_process";
// Accept standard Vite-style supervisor flags while keeping a native Next.js dev server.
const args = process.argv.slice(2);
const read = (flag) =>
  args.includes(flag) ? args[args.indexOf(flag) + 1] : undefined;
const port = read("--port") ?? "4173";
const host = read("--host") ?? read("--hostname") ?? "0.0.0.0";
const child = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "dev",
    "--hostname",
    host,
    "--port",
    port,
  ],
  { stdio: "inherit", env: process.env },
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => child.kill(signal));
child.on("exit", (code) => process.exit(code ?? 1));

> [!IMPORTANT]
> **This project has moved.** Active development of DEJA.js and the Track & Trestle model
> railroad platform now happens in private repositories under
> [**Track and Trestle Technology, LLC**](https://github.com/trackandtrestle).
> This repository stays public as a historical snapshot and is no longer maintained.
>
> **Current product, docs, and downloads → [dejajs.com](https://dejajs.com)**

# 🦕 Layout Conductor — Deno API

**Deno REST API for model railroad layout control.**

<p align="center">
  <img src="https://img.shields.io/badge/Deno-000000?style=for-the-badge&logo=deno&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

A port of the Layout Conductor backend to [Deno](https://deno.com/), testing whether native
TypeScript, URL imports, and a permissions model made a better fit than Node for a service
running unattended on a Raspberry Pi at the edge of a layout.

## 📂 Structure

| File | Role |
|------|------|
| `main.js` | Entry point |
| `src/api.js`, `src/routes.js` | HTTP surface and routing |
| `src/connect.js`, `src/conn.mjs` | Serial / device connection handling |
| `src/config.js` | Layout configuration loading |
| `src/modules/` | Domain modules — `locos`, `turnouts`, `effects`, `routes`, `layouts` |

Each module exposes the same shape (`module.js` defines the contract), so the router stays
generic and adding a domain does not touch routing code.

## 🧑‍💻 Running it

```bash
deno run --allow-net --allow-read --allow-write main.js
```

## 📌 Status

Experiment, concluded. The permissions model and zero-config TypeScript were genuinely
nice; the ecosystem gap around serial-port access on ARM was not worth working around, and
the project moved back to Node. See [`CHANGELOG.md`](CHANGELOG.md) for the trail.

## 🧭 Where this fits

This repo is one step in a long-running line of model railroad control software:

| Era | Project | What changed |
|-----|---------|--------------|
| 2020 | [`train-control`](https://github.com/jmcdannel/train-control) | First React throttle, JMRI + Arduino over HTTP |
| 2021 | [`dctc`](https://github.com/jmcdannel/dctc) | Standalone Arduino DC controller (no computer required) |
| 2022–23 | [`layout-conductor-*`](https://github.com/jmcdannel?tab=repositories&q=layout-conductor) | Split into app + API; Python, Node, and Deno backends explored |
| 2024 | [`Track-and-Trestle-Technology-Suite`](https://github.com/jmcdannel/Track-and-Trestle-Technology-Suite) | MQTT-based monorepo: dispatcher, throttle, dashboard, action API |
| 2024–25 | [`DEJA.js`](https://github.com/jmcdannel/DEJA.js) | TypeScript/Turborepo rewrite, Firebase realtime backbone |
| 2025– | **[dejajs.com](https://dejajs.com)** (private) | Commercial cloud platform for DCC-EX |

---

<sub>Built by [Josh McDannel](https://github.com/jmcdannel) · [dejajs.com](https://dejajs.com) · [LinkedIn](https://www.linkedin.com/in/jmcdannel)</sub>

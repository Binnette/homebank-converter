# Changelog

## v0.18.0 — 2025-12-08

### 🚀 Migrations & Refactoring
- Migrate **Bootstrap 3** → **5**
- Use [Huemint](https://huemint.com/bootstrap-basic/#palette=fdfafa-ffffff-040101-2c8fa0-2ca05a-a05a2c) to theme Bootstrap
- Use **Parcel** bundle instead of `node_module/dist` CSS

### 📗 Documentation
- Move `changelog.json` → classic `CHANGELOG.md`
- Move `roadmap.html` → `README.md`

### 📦 Dependencies
- **Updated runtime dependencies:**
  - jQuery → 3.7.1
  - moment → 2.30.1
  - qunit → 2.24.3

- **Updated devDependencies:**
  - parcel → 2.16.3
  - parcel-reporter-static-files-copy → 1.5.3
  - @parcel/transformer-sass → 2.16.3
  - gh-pages → 6.3.0
  - rimraf → 6.1.2

- **Removed devDependencies:**
  - eslint*
  - mkdirp
  - process

## v0.17.0 — 2023-05-21
- **Build System:** Migrated to [Parcel](https://parceljs.org/) for app building and packaging

### 📦 Dependencies
- **Updated runtime dependencies:**
  - file-saver → 2.0.5
  - qunit → 2.19.4
  - moment → 2.29.4

- **Added devDependencies:**
  - @parcel/transformer-sass 2.8.3
  - rimraf 5.0.1 instead of doing rm -rf

## v0.16.0 — 2020-10-24
### 📦 Dependencies
- **Updated runtime dependencies:**
  - jquery → 3.5.1
  - moment → 2.29.1
  - qunit → 2.11.3

## v0.15.0 — 2019-06-16
- **License:** Added **MIT** license to the project

### 📦 Dependencies
- **Replaced** Bower with **Yarn**

- **Updated runtime dependencies:**
  - bootstrap → 3.4.1
  - file-saver → 2.0.2
  - jquery → 3.4.1

## v0.14.0 — 2018-11-04
- **Feature:** Added support for **BNP Paribas Fortis** files

## v0.13.0 — 2016-02-29
- **Enhancements:** Improved error handling using modals

### 📦 Dependencies
- **Updated runtime dependencies:**
  - bootstrap → 3.3.6
  - qunit → 1.22.0
  - moment → 2.11.2

## v0.12.0 — 2015-05-01
- **Fixes:** Addressed icons not displaying correctly

### 📦 Dependencies
- **Updated runtime dependencies:**
  - jquery → 2.1.4
  - bootstrap → 3.3.4
  - moment → 2.10.2
  - qunit → 1.18.0

## v0.11.0 — 2015-01-11
- **Testing:** Integrated **QUnit** for unit testing

## v0.10.0 — 2014-12-29
- **Features:** Added **Bootstrap** for UI
- **Features:** Added **Boobank** files support

## v0.9.0 — 2014-08-19
- **Improvements:** Modified date format to **mm-dd-yy**

## v0.8.0 — 2014-07-20
- **Bugs:** Fixed changelog display issue

## v0.7.0 — 2014-07-19
- **Features:** Cleaned up unnecessary spaces in **XNB** files

## v0.6.0 — 2014-07-13
- **Features:** Added support for **PayPal** **CSV** and **TSV** files.

## v0.5.0 — 2014-07-10
- **Features:** Enabled convert button only when a file is selected.

## v0.4.0 — 2014-07-06
- **Enhancements:** Remove multiple spaces in memo, trim memo

## v0.3.0 — 2014-07-04
- **Features:** Try to determine paymode using memo

## v0.2.0 — 2014-07-02
- **Features:** Support **BanquePostale** TSV

## v0.1.0 — 2014-06-29
- **Features:** Support **BanquePostale** CSV
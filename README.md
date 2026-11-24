# Database: web preview

A browser version of the Database iPhone app, matched to the SwiftUI code screen for screen.
Everything you add is saved in that browser on that device (localStorage and IndexedDB).

## Put it on GitHub Pages

1. Create a new repository on GitHub, for example `database`.
2. Upload these files to the root of the repository:
   - `index.html`
   - `pdf-lib.min.js`
   - `.nojekyll`
   - `README.md` and `THIRD-PARTY-NOTICES.md` (optional, but keep the notices)

   On github.com: **Add file › Upload files**, drag them in, then **Commit changes**.
   `.nojekyll` starts with a dot, so your computer may hide it. If you can't see it, skip it; the site works without it.
3. Open **Settings › Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**,
   choose the **main** branch and the **/ (root)** folder, then **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/database/`.

## Good to know

- **Data stays on each device.** Each browser keeps its own copy. To move data between devices, use
  Export CSV (Include Photos on) on one and Import CSV on the other.
- **Saving files:** Export CSV and the PDF list's Save to Files download the file through your browser
  (on iPhone, Safari asks to download it; it then appears in the Files app under Downloads).
- **Starts empty:** there's no sample data. **Erase All** at the top (or **Erase all data** in the side panel
  on a computer) clears everything in that browser.

# Database: iPhone web app

The Database app as a web app you can add to your iPhone's Home Screen. It opens full screen like a normal app,
with no Safari bars, and keeps working offline after the first visit.
Everything you add is saved on that device.

## Put it on GitHub Pages

1. Create a new repository on GitHub, for example `database`.
2. Upload every file in this folder to the root of the repository (there are no subfolders):
   - `index.html`, `pdf-lib.min.js`, `manifest.webmanifest`, `sw.js`, `.nojekyll`
   - `apple-touch-icon.png` (the Home Screen icon), `icon-192.png`, `icon-512.png`, `favicon-32.png`
   - `README.md` and `THIRD-PARTY-NOTICES.md` (keep the notices)

   On github.com: **Add file › Upload files**, select all the files, then **Commit changes**.
   `.nojekyll` starts with a dot, so your computer may hide it; the site works without it.
3. Open **Settings › Pages**. Set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then **Save**.
4. After a minute or two it's live at `https://YOUR-USERNAME.github.io/database/`.

## Add it to your Home Screen

1. Open the link in **Safari** on your iPhone.
2. Tap the **Share** button, then **Add to Home Screen**.
3. Check that **Open as Web App** is on (iOS 26), then tap **Add**.

If the icon shows a screenshot instead of the filing cabinet: delete that Home Screen icon, check that
`https://YOUR-USERNAME.github.io/database/apple-touch-icon.png` shows the icon in Safari, then add it again.

Open it from the Home Screen icon from then on. It's a separate app from Safari, with its own saved data.

## Good to know

- **Starts empty:** there's no sample data.
- **Data stays on the device.** To move data to another device or keep a backup, use Export CSV with
  Include Photos on, then Import CSV on the other device.
- **Saving files:** Export CSV and Save to Files on a PDF list download the file; it appears in the
  Files app under Downloads.
- **Updates:** after you upload a new version to GitHub, open the app once with an internet connection.
  It loads the update in the background and shows it the next time you open it.

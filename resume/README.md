# Resume

`resume.tex` is the original resume source. Edit this file rather than the generated PDF.

The About Me page loads this source through Vite's native `?raw` loader and offers the same file as a download through `?url`. The PDF is compiled by pdfLaTeX so the custom macros and layout retain their original formatting. Poppler produces page previews and a selectable text version, so reading the page does not depend on a browser PDF plugin.

After editing the TeX source:

```sh
npm run resume:build
```

Commit `resume/resume.tex`, `resume/resume.generated.json`, and the generated files in `public/resume/` together. Refresh the page after rebuilding. The normal site build checks source, PDF, and image hashes and rebuilds outdated outputs. Multi-page resumes are supported. An unchanged resume needs no TeX or Poppler installation in Codespaces or CI.

To rebuild on Debian/Ubuntu, install TeX prerequisites once:

```sh
sudo apt-get update
sudo apt-get install texlive-latex-extra texlive-plain-generic poppler-utils
```

Compilation runs twice with shell escape disabled and temporary outputs outside the repository. The uploaded source currently produces one page, with existing font-substitution and footer-spacing warnings. Those warnings do not prevent compilation. The source is preserved unchanged.

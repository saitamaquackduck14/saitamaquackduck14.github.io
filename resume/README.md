# Resume

`resume.tex` is the original resume source. Edit this file rather than the generated PDF.

The About Me page links to this file's GitHub blob instead of embedding or distributing the complete TeX source in the site bundle. The PDF is compiled by pdfLaTeX so the custom macros and layout retain their original formatting. Poppler produces page previews and a selectable text version, so reading the page does not depend on a browser PDF plugin. Links and their preview coordinates are extracted from the compiled PDF; the same destinations appear in the text view and a mobile-friendly link list. Content hashes in preview/PDF URLs prevent an old browser cache from hiding a new resume.

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

The questions portfolio is separate from this TeX file. Edit prompts, personal answers, and linked reading sources in `src/pages/AboutMe/portfolio.ts`. Answers are intentionally blank until supplied by the owner. Keep answers within the displayed 300/200/150-word limits; the third question allows up to two nonfiction works.

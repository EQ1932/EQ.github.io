window.MathJax = {
  tex: {
    inlineMath: [
      ["\\(", "\\)"],
      ["$", "$"],
    ], // 允许使用 $...$ 作为行内公式
    displayMath: [
      ["\\[", "\\]"],
      ["$$", "$$"],
    ], // 允许使用 $$...$$ 作为独立公式
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
};

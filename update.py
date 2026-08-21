import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_logo_map = '''const LOGO_MAP = {
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  c: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  django: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  scikitlearn: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  opencv: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
  pytorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
  fastapi: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  playwright: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
  streamlit: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg',
  numpy: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  sqlite: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
  bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  jupyter: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
  tableau: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tableau/tableau-original.svg',
};'''

content = re.sub(r'const LOGO_MAP = \{.*?\};', new_logo_map, content, flags=re.DOTALL)

new_tech_badge = '''function TechBadge({ children }) {
  const logo = getTechLogo(String(children));
  if (logo) {
    return (
      <span
        title={children}
        className="inline-flex items-center justify-center rounded-lg bg-zinc-800/80 p-2 border border-zinc-700/50 hover:bg-zinc-700 hover:border-zinc-500 transition-colors w-10 h-10 group relative cursor-pointer"
      >
        <img src={logo} alt={children} className="w-6 h-6 object-contain flex-shrink-0" />
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold rounded-full border border-zinc-700 bg-zinc-800/80 text-zinc-200 px-3.5 py-1.5"
      style={F_DISPLAY}
    >
      {children}
    </span>
  );
}'''

content = re.sub(r'function TechBadge.*?return\s*\(.*?</span>\s*\);\s*\}', new_tech_badge, content, flags=re.DOTALL)

content = content.replace('<div className="grid lg:grid-cols-[1fr_280px] gap-5 items-stretch">', '<div className="flex flex-col gap-6">')

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

with open('Portfolio-v5.jsx (1).txt', 'w', encoding='utf-8') as f:
    f.write(content)

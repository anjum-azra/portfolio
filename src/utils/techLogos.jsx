import React from 'react';
import { 
  SiPython, SiC, SiJavascript, 
  SiHtml5, SiReact, 
  SiDjango, SiFastapi, SiFlask, 
  SiMongodb, SiPostgresql, SiMysql, SiSqlite, 
  SiTensorflow, SiPytorch, SiScikitlearn, 
  SiNumpy, SiPandas, 
  SiGit, SiGithub, SiDocker
} from "react-icons/si";

import { 
  Brain, Database, LineChart, Code, Bot, Network, Sparkles, Server, Search, FileText, Cloud, PlaySquare, BarChart, DatabaseZap, MonitorPlay
} from "lucide-react";

export const getTechIcon = (techName) => {
  const normalized = techName.toLowerCase();
  
  const iconMap = {
    python: <SiPython />,
    java: <Code />,
    c: <SiC />,
    javascript: <SiJavascript />,
    html5: <SiHtml5 />,
    css3: <Code />,
    react: <SiReact />,
    django: <SiDjango />,
    fastapi: <SiFastapi />,
    flask: <SiFlask />,
    mongodb: <SiMongodb />,
    postgresql: <SiPostgresql />,
    mysql: <SiMysql />,
    "microsoft sql server": <DatabaseZap />,
    sqlite: <SiSqlite />,
    tensorflow: <SiTensorflow />,
    pytorch: <SiPytorch />,
    "scikit-learn": <SiScikitlearn />,
    numpy: <SiNumpy />,
    pandas: <SiPandas />,
    "power bi": <BarChart />,
    tableau: <BarChart />,
    "microsoft azure": <Cloud />,
    git: <SiGit />,
    github: <SiGithub />,
    docker: <SiDocker />,
    playwright: <MonitorPlay />,
    sql: <Database />,
    "machine learning": <Brain />,
    "deep learning": <Network />,
    "computer vision": <Search />,
    "generative ai": <Sparkles />,
    llms: <Bot />,
    nlp: <FileText />,
    "ai agents": <Bot />,
    "hybrid rag": <Network />,
    statistics: <LineChart />,
    eda: <LineChart />,
    "data visualization": <LineChart />,
    "rest apis": <Server />,
    // Project specifics
    "llama 2": <Bot />,
    "gemini api": <Sparkles />,
    "chromadb": <Database />,
    "beautifulsoup": <Code />,
    "selenium": <Code />,
    "matplotlib": <LineChart />,
    "seaborn": <LineChart />,
    "crewai": <Bot />
  };

  const Icon = iconMap[normalized];
  
  if (Icon) {
    return React.cloneElement(Icon, { className: "w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" });
  }
  
  return <Code className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />;
};

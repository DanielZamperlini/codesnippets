import { Terminal, Cpu, Layers, FileCode, Database, Globe, Palette, Box, GitBranch, Server, Package, Grid, Table, Disc, Braces } from 'lucide-react';
interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
};

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  documentation: string;
  tutorials: { title: string; url: string }[];
  snippets: CodeSnippet[];
};

export const categories: Category[] = [
  {
    id: 'react',
    name: 'React',
    icon: <Cpu size={24} className="text-cyan-400" />,
    description: 'Biblioteca JavaScript para construção de interfaces de usuário',
    documentation: 'https://reactjs.org/docs/getting-started.html',
    tutorials: [
      { title: 'Tutorial React', url: 'https://reactjs.org/tutorial/tutorial.html' },
      { title: 'React Hooks', url: 'https://reactjs.org/docs/hooks-intro.html' }
    ],
    snippets: [
      {
        id: 'react-1',
        title: 'Criar Projeto React',
        description: 'Inicializar um novo projeto React com Create React App',
        language: 'bash',
        code: 'npx create-react-app my-app\ncd my-app\nnpm start'
      },
      {
        id: 'react-2',
        title: 'Componente Funcional',
        description: 'Criar um componente React funcional com props',
        language: 'jsx',
        code: 'import React from "react";\n\nfunction MyComponent({ name }) {\n  return (\n    <div>\n      <h1>Hello, {name}!</h1>\n    </div>\n  );\n}\n\nexport default MyComponent;'
      },
      {
        id: 'react-3',
        title: 'Hook useState',
        description: 'Gerenciar estado em um componente funcional',
        language: 'jsx',
        code: 'import React, { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Você clicou {count} vezes</p>\n      <button onClick={() => setCount(count + 1)}>\n        Clique aqui\n      </button>\n    </div>\n  );\n}'
      }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <FileCode size={24} className="text-blue-400" />,
    description: 'Superset tipado de JavaScript que compila para JavaScript puro',
    documentation: 'https://www.typescriptlang.org/docs/',
    tutorials: [
      { title: 'Manual TypeScript', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
      { title: 'TypeScript Playground', url: 'https://www.typescriptlang.org/play' }
    ],
    snippets: [
      {
        id: 'ts-1',
        title: 'Configuração TypeScript',
        description: 'Inicializar um projeto TypeScript',
        language: 'bash',
        code: 'npm init -y\nnpm install typescript --save-dev\nnpx tsc --init'
      },
      {
        id: 'ts-2',
        title: 'Tipos Básicos',
        description: 'Anotações de tipos básicos em TypeScript',
        language: 'typescript',
        code: '// Tipos básicos\nlet isDone: boolean = false;\nlet decimal: number = 6;\nlet color: string = "blue";\nlet list: number[] = [1, 2, 3];\nlet x: [string, number] = ["hello", 10]; // Tuple\n\n// Enum\nenum Color {Red, Green, Blue}\nlet c: Color = Color.Green;\n\n// Any\nlet notSure: any = 4;\n\n// Void\nfunction warnUser(): void {\n  console.log("This is a warning message");\n}'
      },
      {
        id: 'ts-3',
        title: 'Interfaces',
        description: 'Definir formatos de objetos com interfaces',
        language: 'typescript',
        code: 'interface User {\n  id: number;\n  name: string;\n  email?: string; // Propriedade opcional\n  readonly createdAt: Date; // Propriedade somente leitura\n}\n\nfunction createUser(user: User): User {\n  return user;\n}\n\nconst newUser: User = {\n  id: 1,\n  name: "John Doe",\n  createdAt: new Date()\n};'
      }
    ]
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: <Palette size={24} className="text-pink-400" />,
    description: 'Framework CSS utilitário para construção rápida de designs personalizados',
    documentation: 'https://tailwindcss.com/docs',
    tutorials: [
      { title: 'Instalação Tailwind CSS', url: 'https://tailwindcss.com/docs/installation' },
      { title: 'Componentes Tailwind UI', url: 'https://tailwindui.com/' }
    ],
    snippets: [
      {
        id: 'tailwind-1',
        title: 'Configuração Tailwind CSS',
        description: 'Instalar e configurar Tailwind CSS',
        language: 'bash',
        code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p'
      },
      {
        id: 'tailwind-2',
        title: 'Configuração Tailwind',
        description: 'Configuração básica do tailwind.config.js',
        language: 'javascript',
        code: '/** @type {import("tailwindcss").Config} */\nmodule.exports = {\n  content: [\n    "./src/**/*.{js,jsx,ts,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}'
      },
      {
        id: 'tailwind-3',
        title: 'Card Responsivo',
        description: 'Um componente de card responsivo com Tailwind CSS',
        language: 'jsx',
        code: '<div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">\n  <img className="w-full" src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Sunset in the mountains" />\n  <div className="px-6 py-4">\n    <div className="font-bold text-xl mb-2">Título do Card</div>\n    <p className="text-gray-700 text-base">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    </p>\n  </div>\n  <div className="px-6 pt-4 pb-2">\n    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fotografia</span>\n    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#viagem</span>\n  </div>\n</div>'
      }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <Terminal size={24} className="text-yellow-400" />,
    description: 'Linguagem de programação de alto nível e interpretada',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    tutorials: [
      { title: 'Guia JavaScript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide' },
      { title: 'Referência JavaScript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference' }
    ],
    snippets: [
      {
        id: 'js-1',
        title: 'Fetch API',
        description: 'Fazer requisições HTTP com a Fetch API',
        language: 'javascript',
        code: '// Requisição GET\nfetch("https://api.example.com/data")\n  .then(response => {\n    if (!response.ok) {\n      throw new Error("Resposta da rede não foi ok");\n    }\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error("Erro:", error));\n\n// Requisição POST\nfetch("https://api.example.com/data", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json",\n  },\n  body: JSON.stringify({ name: "João", age: 30 }),\n})\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error("Erro:", error));'
      },
      {
        id: 'js-2',
        title: 'Métodos de Array',
        description: 'Métodos comuns de array em JavaScript',
        language: 'javascript',
        code: 'const numeros = [1, 2, 3, 4, 5];\n\n// Map\nconst dobrados = numeros.map(num => num * 2);\n// [2, 4, 6, 8, 10]\n\n// Filter\nconst pares = numeros.filter(num => num % 2 === 0);\n// [2, 4]\n\n// Reduce\nconst soma = numeros.reduce((total, num) => total + num, 0);\n// 15\n\n// Find\nconst encontrado = numeros.find(num => num > 3);\n// 4\n\n// Some\nconst temPar = numeros.some(num => num % 2 === 0);\n// true\n\n// Every\nconst todoPositivos = numeros.every(num => num > 0);\n// true'
      },
      {
        id: 'js-3',
        title: 'Async/Await',
        description: 'JavaScript assíncrono com async/await',
        language: 'javascript',
        code: 'async function buscarDados() {\n  try {\n    const response = await fetch("https://api.example.com/data");\n    \n    if (!response.ok) {\n      throw new Error(`Erro HTTP! Status: ${response.status}`);\n    }\n    \n    const data = await response.json();\n    console.log(data);\n    return data;\n  } catch (error) {\n    console.error("Erro ao buscar dados:", error);\n  }\n}\n\n// Chamar a função assíncrona\nbuscarDados().then(data => {\n  // Fazer algo com os dados\n});'
      }
    ]
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: <Layers size={24} className="text-green-400" />,
    description: 'O framework React para produção',
    documentation: 'https://nextjs.org/docs',
    tutorials: [
      { title: 'Primeiros Passos', url: 'https://nextjs.org/docs/getting-started' },
      { title: 'Aprenda Next.js', url: 'https://nextjs.org/learn' }
    ],
    snippets: [
      {
        id: 'next-1',
        title: 'Configuração Next.js',
        description: 'Criar um novo projeto Next.js',
        language: 'bash',
        code: 'npx create-next-app@latest meu-app-next\ncd meu-app-next\nnpm run dev'
      },
      {
        id: 'next-2',
        title: 'Componente de Página',
        description: 'Criar um componente básico de página Next.js',
        language: 'jsx',
        code: '// pages/index.js\nimport Head from "next/head";\n\nexport default function Home() {\n  return (\n    <div>\n      <Head>\n        <title>Meu App Next.js</title>\n        <meta name="description" content="Gerado por create next app" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n\n      <main>\n        <h1>Bem-vindo ao Next.js!</h1>\n      </main>\n    </div>\n  );\n}'
      },
      {
        id: 'next-3',
        title: 'Rota de API',
        description: 'Criar uma rota de API Next.js',
        language: 'javascript',
        code: '// pages/api/hello.js\nexport default function handler(req, res) {\n  res.status(200).json({ name: "João Silva" });\n}'
      }
    ]
  },
  {
    id: 'html-css',
    name: 'HTML & CSS',
    icon: <Globe size={24} className="text-orange-400" />,
    description: 'Os blocos de construção da web',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    tutorials: [
      { title: 'Básico de HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics' },
      { title: 'Básico de CSS', url: 'https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/CSS_basics' }
    ],
    snippets: [
      {
        id: 'html-1',
        title: 'Template HTML',
        description: 'Template básico HTML5',
        language: 'html',
        code: '<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Documento</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <header>\n    <h1>Meu Site</h1>\n  </header>\n  \n  <main>\n    <p>Bem-vindo ao meu site!</p>\n  </main>\n  \n  <footer>\n    <p>&copy; 2025 Meu Site</p>\n  </footer>\n  \n  <script src="script.js"></script>\n</body>\n</html>'
      },
      {
        id: 'css-1',
        title: 'CSS Flexbox',
        description: 'Layout básico com flexbox',
        language: 'css',
        code: '.container {\n  display: flex;\n  flex-direction: row; /* ou column */\n  flex-wrap: wrap; /* ou nowrap */\n  justify-content: space-between; /* alinhamento do eixo principal */\n  align-items: center; /* alinhamento do eixo cruzado */\n  gap: 20px; /* espaçamento entre itens */\n}\n\n.item {\n  flex: 1; /* crescer e encolher igualmente */\n  /* ou valores específicos */\n  /* flex-grow: 1; */\n  /* flex-shrink: 1; */\n  /* flex-basis: auto; */\n}'
      },
      {
        id: 'css-2',
        title: 'CSS Grid',
        description: 'Layout básico com CSS grid',
        language: 'css',
        code: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */\n  grid-template-rows: auto;\n  gap: 20px; /* espaço entre itens do grid */\n}\n\n.grid-item {\n  /* Ocupar múltiplas colunas ou linhas */\n  grid-column: span 2; /* ocupa 2 colunas */\n  grid-row: span 1; /* ocupa 1 linha */\n  \n  /* Ou posições específicas */\n  /* grid-column: 1 / 3; */ /* da linha de coluna 1 até 3 */\n  /* grid-row: 1 / 2; */ /* da linha de linha 1 até 2 */\n}'
      }
    ]
  },
  {
    id: 'sass',
    name: 'Sass',
    icon: <Box size={24} className="text-purple-400" />,
    description: 'CSS com superpoderes',
    documentation: 'https://sass-lang.com/documentation',
    tutorials: [
      { title: 'Básico de Sass', url: 'https://sass-lang.com/guide' },
      { title: 'Documentação Sass', url: 'https://sass-lang.com/documentation' }
    ],
    snippets: [
      {
        id: 'sass-1',
        title: 'Configuração Sass',
        description: 'Instalar e compilar Sass',
        language: 'bash',
        code: 'npm install -g sass\n\n# Compilar sass para css\nsass input.scss output.css\n\n# Observar mudanças\nsass --watch input.scss output.css'
      },
      {
        id: 'sass-2',
        title: 'Variáveis Sass',
        description: 'Usando variáveis e aninhamento em Sass',
        language: 'scss',
        code: '// Variáveis\n$cor-primaria: #3498db;\n$cor-secundaria: #2ecc71;\n$fonte-padrao: "Helvetica", sans-serif;\n$padding-base: 15px;\n\n// Aninhamento\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: $padding-base;\n  \n  .header {\n    background-color: $cor-primaria;\n    color: white;\n    \n    h1 {\n      font-family: $fonte-padrao;\n      font-size: 2em;\n    }\n  }\n  \n  .content {\n    background-color: lighten($cor-primaria, 40%);\n    padding: $padding-base;\n  }\n}'
      },
      {
        id: 'sass-3',
        title: 'Mixins Sass',
        description: 'Criar estilos reutilizáveis com mixins',
        language: 'scss',
        code: '// Definição de mixin\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin box-shadow($x: 0, $y: 2px, $blur: 4px, $color: rgba(0,0,0,.3)) {\n  box-shadow: $x $y $blur $color;\n}\n\n// Uso\n.card {\n  @include flex-center;\n  @include box-shadow(0, 4px, 8px, rgba(0,0,0,.2));\n  \n  width: 300px;\n  padding: 20px;\n  background-color: white;\n}\n\n.button {\n  @include flex-center;\n  @include box-shadow();\n  \n  padding: 10px 15px;\n  border-radius: 4px;\n}'
      }
    ]
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: <Database size={24} className="text-red-400" />,
    description: 'Uma plataforma para construção de aplicações web para desktop e dispositivos móveis',
    documentation: 'https://angular.io/docs',
    tutorials: [
      { title: 'Primeiros Passos', url: 'https://angular.io/start' },
      { title: 'Tour of Heroes', url: 'https://angular.io/tutorial' }
    ],
    snippets: [
      {
        id: 'angular-1',
        title: 'Configuração Angular',
        description: 'Criar um novo projeto Angular',
        language: 'bash',
        code: 'npm install -g @angular/cli\nng new meu-app-angular\ncd meu-app-angular\nng serve'
      },
      {
        id: 'angular-2',
        title: 'Componente Angular',
        description: 'Criar um componente básico Angular',
        language: 'typescript',
        code: '// Gerar componente\n// ng generate component hello\n\n// hello.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n  selector: "app-hello",\n  template: `\n    <div>\n      <h1>Olá, {{ nome }}!</h1>\n      <button (click)="mudarNome()">Mudar Nome</button>\n    </div>\n  `,\n  styles: [`\n    h1 { color: blue; }\n    button { padding: 8px 16px; }\n  `]\n})\nexport class HelloComponent {\n  nome: string = "Mundo";\n  \n  mudarNome() {\n    this.nome = "Angular";\n  }\n}'
      },
      {
        id: 'angular-3',
        title: 'Serviço Angular',
        description: 'Criar e usar um serviço Angular',
        language: 'typescript',
        code: '// Gerar serviço\n// ng generate service data\n\n// data.service.ts\nimport { Injectable } from "@angular/core";\nimport { HttpClient } from "@angular/common/http";\nimport { Observable } from "rxjs";\n\n@Injectable({\n  providedIn: "root"\n})\nexport class DataService {\n  private apiUrl = "https://api.example.com/data";\n  \n  constructor(private http: HttpClient) {}\n  \n  getData(): Observable<any[]> {\n    return this.http.get<any[]>(this.apiUrl);\n  }\n}\n\n// Usando o serviço em um componente\nimport { Component, OnInit } from "@angular/core";\nimport { DataService } from "../data.service";\n\n@Component({\n  selector: "app-data-list",\n  template: `\n    <div *ngIf="loading">Carregando...</div>\n    <ul *ngIf="!loading">\n      <li *ngFor="let item of items">{{ item.name }}</li>\n    </ul>\n  `\n})\nexport class DataListComponent implements OnInit {\n  items: any[] = [];\n  loading = true;\n  \n  constructor(private dataService: DataService) {}\n  \n  ngOnInit() {\n    this.dataService.getData().subscribe(data => {\n      this.items = data;\n      this.loading = false;\n    });\n  }\n}'
      }
    ]
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: <Grid size={24} className="text-purple-500" />,
    description: 'Framework CSS popular para desenvolvimento de sites responsivos e mobile-first',
    documentation: 'https://getbootstrap.com/docs/',
    tutorials: [
      { title: 'Começando com Bootstrap', url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/' },
      { title: 'Componentes Bootstrap', url: 'https://getbootstrap.com/docs/5.3/components/' }
    ],
    snippets: [
      {
        id: 'bootstrap-1',
        title: 'Instalação Bootstrap',
        description: 'Adicionar Bootstrap a um projeto',
        language: 'html',
        code: '<!-- Via CDN -->\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>\n\n<!-- Via npm -->\n<!-- npm install bootstrap -->\n<!-- import \'bootstrap/dist/css/bootstrap.min.css\'; -->'
      },
      {
        id: 'bootstrap-2',
        title: 'Grid System',
        description: 'Sistema de grid responsivo do Bootstrap',
        language: 'html',
        code: '<div class="container">\n  <div class="row">\n    <div class="col-sm-12 col-md-6 col-lg-4">\n      <!-- Ocupa 12 colunas em telas pequenas, 6 em médias e 4 em grandes -->\n      Coluna 1\n    </div>\n    <div class="col-sm-12 col-md-6 col-lg-4">\n      Coluna 2\n    </div>\n    <div class="col-sm-12 col-md-12 col-lg-4">\n      Coluna 3\n    </div>\n  </div>\n</div>'
      },
      {
        id: 'bootstrap-3',
        title: 'Componentes Bootstrap',
        description: 'Exemplos de componentes comuns do Bootstrap',
        language: 'html',
        code: '<!-- Botão -->\n<button type="button" class="btn btn-primary">Botão Primário</button>\n<button type="button" class="btn btn-outline-secondary">Botão Secundário</button>\n\n<!-- Alerta -->\n<div class="alert alert-success" role="alert">\n  Operação realizada com sucesso!\n</div>\n\n<!-- Card -->\n<div class="card" style="width: 18rem;">\n  <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a" class="card-img-top" alt="...">\n  <div class="card-body">\n    <h5 class="card-title">Título do Card</h5>\n    <p class="card-text">Um exemplo de texto rápido para construir o título do card.</p>\n    <a href="#" class="btn btn-primary">Botão</a>\n  </div>\n</div>'
      }
    ]
  },
  {
    id: 'git',
    name: 'Git',
    icon: <GitBranch size={24} className="text-orange-500" />,
    description: 'Sistema de controle de versão distribuído para rastrear alterações no código fonte',
    documentation: 'https://git-scm.com/doc',
    tutorials: [
      { title: 'Git Handbook', url: 'https://guides.github.com/introduction/git-handbook/' },
      { title: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2' }
    ],
    snippets: [
      {
        id: 'git-1',
        title: 'Configuração Inicial',
        description: 'Configurar Git pela primeira vez',
        language: 'bash',
        code: '# Configurar nome e email\ngit config --global user.name "Seu Nome"\ngit config --global user.email "seu.email@exemplo.com"\n\n# Verificar configurações\ngit config --list'
      },
      {
        id: 'git-2',
        title: 'Comandos Básicos',
        description: 'Comandos Git essenciais para o dia a dia',
        language: 'bash',
        code: '# Iniciar um repositório\ngit init\n\n# Clonar um repositório existente\ngit clone https://github.com/usuario/repositorio.git\n\n# Verificar status\ngit status\n\n# Adicionar arquivos ao staging\ngit add arquivo.txt    # Arquivo específico\ngit add .             # Todos os arquivos\n\n# Fazer commit\ngit commit -m "Mensagem do commit"\n\n# Enviar alterações para o repositório remoto\ngit push origin main\n\n# Atualizar repositório local\ngit pull origin main'
      },
      {
        id: 'git-3',
        title: 'Branches',
        description: 'Trabalhar com branches no Git',
        language: 'bash',
        code: '# Listar branches\ngit branch\n\n# Criar nova branch\ngit branch nova-feature\n\n# Mudar para uma branch\ngit checkout nova-feature\n\n# Criar e mudar para nova branch (atalho)\ngit checkout -b nova-feature\n\n# Mesclar branch na branch atual\ngit merge outra-branch\n\n# Deletar branch\ngit branch -d branch-para-deletar'
      },
      {
        id: 'git-4',
        title: 'Deploy',
        description: 'subir codigo no github',
        language: 'bash',
        code: '#  crie um novo repositório na linha de comando\n\necho "# codesnippets" >> README.md\ngit init\ngit add README.md\ngit add -A\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin https://github.com/Daniel/nomeDoProjeto\ngit push -u origin main\n\n# ou envie um repositório existente da linha de comando\n\ngit remote add origin https://github.com/Daniel/nomeDoProjeto\ngit branch -M main\ngit push -u origin main'

      },
      {
        id: 'git-5',
        title: 'Atualizar',
        description: 'atualizar projeto em construção',
        language: 'bash',
        code: '# puxar atualização do projeto\ngit pull\n\n# adicionar todo o codigo \ngit add -A\n\n# adicionar commit \ngit commit -m "nome do commit "\n\n# enviar commit\ngit push'
      }
    ]
  },
  {
    id: 'node',
    name: 'Node.js',
    icon: <Server size={24} className="text-green-500" />,
    description: 'Ambiente de execução JavaScript do lado do servidor',
    documentation: 'https://nodejs.org/docs/latest/api/',
    tutorials: [
      { title: 'Guia Node.js', url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs' },
      { title: 'Express.js', url: 'https://expressjs.com/pt-br/' }
    ],
    snippets: [
      {
        id: 'node-1',
        title: 'Servidor HTTP Básico',
        description: 'Criar um servidor HTTP simples com Node.js',
        language: 'javascript',
        code: 'const http = require("http");\n\nconst servidor = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader("Content-Type", "text/plain");\n  res.end("Olá, Mundo!\\n");\n});\n\nconst porta = 3000;\nservidor.listen(porta, () => {\n  console.log(`Servidor rodando em http://localhost:${porta}/`);\n});'
      },
      {
        id: 'node-2',
        title: 'API REST com Express',
        description: 'Criar uma API REST básica com Express.js',
        language: 'javascript',
        code: 'const express = require("express");\nconst app = express();\nconst porta = 3000;\n\n// Middleware para processar JSON\napp.use(express.json());\n\n// Dados de exemplo\nlet usuarios = [\n  { id: 1, nome: "João" },\n  { id: 2, nome: "Maria" }\n];\n\n// Rota GET para listar todos os usuários\napp.get("/usuarios", (req, res) => {\n  res.json(usuarios);\n});\n\n// Rota GET para buscar um usuário específico\napp.get("/usuarios/:id", (req, res) => {\n  const id = parseInt(req.params.id);\n  const usuario = usuarios.find(u => u.id === id);\n  \n  if (!usuario) {\n    return res.status(404).json({ mensagem: "Usuário não encontrado" });\n  }\n  \n  res.json(usuario);\n});\n\n// Rota POST para criar um novo usuário\napp.post("/usuarios", (req, res) => {\n  const { nome } = req.body;\n  \n  if (!nome) {\n    return res.status(400).json({ mensagem: "Nome é obrigatório" });\n  }\n  \n  const id = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;\n  const novoUsuario = { id, nome };\n  \n  usuarios.push(novoUsuario);\n  res.status(201).json(novoUsuario);\n});\n\napp.listen(porta, () => {\n  console.log(`API rodando em http://localhost:${porta}`);\n});'
      },
      {
        id: 'node-3',
        title: 'Operações de Arquivo',
        description: 'Manipular arquivos com o módulo fs do Node.js',
        language: 'javascript',
        code: 'const fs = require("fs");\n\n// Leitura síncrona\ntry {\n  const dados = fs.readFileSync("arquivo.txt", "utf8");\n  console.log(dados);\n} catch (erro) {\n  console.error("Erro ao ler arquivo:", erro);\n}\n\n// Leitura assíncrona\nfs.readFile("arquivo.txt", "utf8", (erro, dados) => {\n  if (erro) {\n    console.error("Erro ao ler arquivo:", erro);\n    return;\n  }\n  console.log(dados);\n});\n\n// Escrita em arquivo\nfs.writeFile("novo-arquivo.txt", "Conteúdo do arquivo", erro => {\n  if (erro) {\n    console.error("Erro ao escrever arquivo:", erro);\n    return;\n  }\n  console.log("Arquivo salvo com sucesso!");\n});\n\n// Usando Promises com fs/promises\nconst fsPromises = require("fs/promises");\n\nasync function manipularArquivos() {\n  try {\n    await fsPromises.writeFile("arquivo.txt", "Novo conteúdo");\n    const conteudo = await fsPromises.readFile("arquivo.txt", "utf8");\n    console.log(conteudo);\n  } catch (erro) {\n    console.error("Erro:", erro);\n  }\n}'
      }
    ]
  },
  {
    id: 'redux',
    name: 'Redux',
    icon: <Package size={24} className="text-indigo-500" />,
    description: 'Biblioteca de gerenciamento de estado para aplicações JavaScript',
    documentation: 'https://redux.js.org/',
    tutorials: [
      { title: 'Conceitos Básicos', url: 'https://redux.js.org/introduction/core-concepts' },
      { title: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/introduction/getting-started' }
    ],
    snippets: [
      {
        id: 'redux-1',
        title: 'Configuração Redux',
        description: 'Configurar Redux em uma aplicação React',
        language: 'javascript',
        code: '// Instalar dependências\n// npm install redux react-redux @reduxjs/toolkit\n\n// store.js\nimport { configureStore } from "@reduxjs/toolkit";\nimport contadorReducer from "./contadorSlice";\n\nexport const store = configureStore({\n  reducer: {\n    contador: contadorReducer,\n  },\n});\n\n// index.js\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport { Provider } from "react-redux";\nimport { store } from "./store";\nimport App from "./App";\n\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById("root")\n);'
      },
      {
        id: 'redux-2',
        title: 'Redux Toolkit Slice',
        description: 'Criar um slice com Redux Toolkit',
        language: 'javascript',
        code: '// contadorSlice.js\nimport { createSlice } from "@reduxjs/toolkit";\n\nconst contadorSlice = createSlice({\n  name: "contador",\n  initialState: {\n    valor: 0,\n  },\n  reducers: {\n    incrementar: (state) => {\n      state.valor += 1;\n    },\n    decrementar: (state) => {\n      state.valor -= 1;\n    },\n    incrementarPorValor: (state, action) => {\n      state.valor += action.payload;\n    },\n  },\n});\n\nexport const { incrementar, decrementar, incrementarPorValor } = contadorSlice.actions;\nexport default contadorSlice.reducer;'
      },
      {
        id: 'redux-3',
        title: 'Usar Redux em Componentes',
        description: 'Conectar componentes React ao Redux',
        language: 'jsx',
        code: 'import React from "react";\nimport { useSelector, useDispatch } from "react-redux";\nimport { incrementar, decrementar, incrementarPorValor } from "./contadorSlice";\n\nfunction Contador() {\n  const contador = useSelector((state) => state.contador.valor);\n  const dispatch = useDispatch();\n\n  return (\n    <div>\n      <h2>Contador: {contador}</h2>\n      <div>\n        <button onClick={() => dispatch(incrementar())}>\n          Incrementar\n        </button>\n        <button onClick={() => dispatch(decrementar())}>\n          Decrementar\n        </button>\n        <button onClick={() => dispatch(incrementarPorValor(5))}>\n          Adicionar 5\n        </button>\n      </div>\n    </div>\n  );\n}\n\nexport default Contador;'
      }
    ]
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: <Table size={24} className="text-blue-500" />,
    description: 'Sistema de gerenciamento de banco de dados relacional de código aberto',
    documentation: 'https://dev.mysql.com/doc/',
    tutorials: [
      { title: 'MySQL Tutorial', url: 'https://www.w3schools.com/mysql/' },
      { title: 'MySQL com Node.js', url: 'https://www.npmjs.com/package/mysql2' }
    ],
    snippets: [
      {
        id: 'mysql-1',
        title: 'Comandos Básicos',
        description: 'Comandos SQL básicos para MySQL',
        language: 'sql',
        code: '-- Criar banco de dados\nCREATE DATABASE meu_banco;\n\n-- Usar banco de dados\nUSE meu_banco;\n\n-- Criar tabela\nCREATE TABLE usuarios (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  nome VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE NOT NULL,\n  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Inserir dados\nINSERT INTO usuarios (nome, email) VALUES ("João Silva", "joao@exemplo.com");\n\n-- Consultar dados\nSELECT * FROM usuarios;\nSELECT nome, email FROM usuarios WHERE id = 1;\n\n-- Atualizar dados\nUPDATE usuarios SET nome = "João Santos" WHERE id = 1;\n\n-- Excluir dados\nDELETE FROM usuarios WHERE id = 1;'
      },
      {
        id: 'mysql-2',
        title: 'MySQL com Node.js',
        description: 'Conectar e usar MySQL com Node.js',
        language: 'javascript',
        code: '// Instalar: npm install mysql2\n\nconst mysql = require("mysql2/promise");\n\nasync function conectarBD() {\n  try {\n    // Criar conexão\n    const conexao = await mysql.createConnection({\n      host: "localhost",\n      user: "usuario",\n      password: "senha",\n      database: "meu_banco"\n    });\n    \n    console.log("Conectado ao MySQL!");\n    \n    // Executar consulta\n    const [linhas, campos] = await conexao.execute(\n      "SELECT * FROM usuarios WHERE nome LIKE ?",\n      ["%João%"]\n    );\n    \n    console.log("Resultados:", linhas);\n    \n    // Inserir dados\n    const [resultado] = await conexao.execute(\n      "INSERT INTO usuarios (nome, email) VALUES (?, ?)",\n      ["Maria Silva", "maria@exemplo.com"]\n    );\n    \n    console.log("ID inserido:", resultado.insertId);\n    \n    // Fechar conexão\n    await conexao.end();\n    \n  } catch (erro) {\n    console.error("Erro:", erro);\n  }\n}\n\nconectarBD();'
      },
      {
        id: 'mysql-3',
        title: 'Relacionamentos e Joins',
        description: 'Criar e consultar tabelas relacionadas',
        language: 'sql',
        code: '-- Criar tabelas relacionadas\nCREATE TABLE categorias (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  nome VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE produtos (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  nome VARCHAR(100) NOT NULL,\n  preco DECIMAL(10, 2) NOT NULL,\n  categoria_id INT,\n  FOREIGN KEY (categoria_id) REFERENCES categorias(id)\n);\n\n-- Inserir dados\nINSERT INTO categorias (nome) VALUES ("Eletrônicos"), ("Roupas"), ("Alimentos");\n\nINSERT INTO produtos (nome, preco, categoria_id) VALUES\n  ("Smartphone", 1999.99, 1),\n  ("Notebook", 4500.00, 1),\n  ("Camiseta", 49.90, 2),\n  ("Arroz", 22.50, 3);\n\n-- Consultas com JOIN\n-- Inner Join (apenas correspondências)\nSELECT p.nome AS produto, p.preco, c.nome AS categoria\nFROM produtos p\nINNER JOIN categorias c ON p.categoria_id = c.id;\n\n-- Left Join (todos os produtos, mesmo sem categoria)\nSELECT p.nome AS produto, p.preco, c.nome AS categoria\nFROM produtos p\nLEFT JOIN categorias c ON p.categoria_id = c.id;\n\n-- Agrupar e contar\nSELECT c.nome AS categoria, COUNT(p.id) AS total_produtos, AVG(p.preco) AS preco_medio\nFROM categorias c\nLEFT JOIN produtos p ON c.id = p.categoria_id\nGROUP BY c.id;'
      }
    ]
  },
  {
    id: 'nosql',
    name: 'NoSQL',
    icon: <Disc size={24} className="text-green-600" />,
    description: 'Bancos de dados não relacionais para armazenamento flexível de dados',
    documentation: 'https://www.mongodb.com/docs/',
    tutorials: [
      { title: 'MongoDB University', url: 'https://university.mongodb.com/' },
      { title: 'MongoDB com Node.js', url: 'https://www.mongodb.com/docs/drivers/node/current/' }
    ],
    snippets: [
      {
        id: 'nosql-1',
        title: 'MongoDB Básico',
        description: 'Operações básicas com MongoDB',
        language: 'javascript',
        code: '// Comandos básicos do MongoDB Shell\n\n// Mostrar bancos de dados\nshow dbs\n\n// Usar/criar banco de dados\nuse meu_banco\n\n// Inserir documento\ndb.usuarios.insertOne({\n  nome: "João Silva",\n  email: "joao@exemplo.com",\n  idade: 30,\n  interesses: ["programação", "música"]\n})\n\n// Inserir múltiplos documentos\ndb.usuarios.insertMany([\n  { nome: "Maria", email: "maria@exemplo.com", idade: 25 },\n  { nome: "Pedro", email: "pedro@exemplo.com", idade: 35 }\n])\n\n// Consultar documentos\ndb.usuarios.find()                         // Todos os documentos\ndb.usuarios.find({ idade: { $gt: 25 } })   // Idade maior que 25\ndb.usuarios.findOne({ nome: "João Silva" }) // Primeiro documento que corresponde\n\n// Atualizar documento\ndb.usuarios.updateOne(\n  { nome: "João Silva" },\n  { $set: { idade: 31 }, $push: { interesses: "viagens" } }\n)\n\n// Excluir documento\ndb.usuarios.deleteOne({ email: "joao@exemplo.com" })'
      },
      {
        id: 'nosql-2',
        title: 'MongoDB com Node.js',
        description: 'Usar MongoDB com Node.js usando o driver oficial',
        language: 'javascript',
        code: '// Instalar: npm install mongodb\n\nconst { MongoClient } = require("mongodb");\n\n// URL de conexão\nconst url = "mongodb://localhost:27017";\nconst nomeDB = "meu_banco";\n\nasync function main() {\n  // Conectar ao servidor\n  const client = new MongoClient(url);\n  \n  try {\n    await client.connect();\n    console.log("Conectado ao MongoDB!");\n    \n    const db = client.db(nomeDB);\n    const colecao = db.collection("usuarios");\n    \n    // Inserir documento\n    const resultadoInsercao = await colecao.insertOne({\n      nome: "Ana Silva",\n      email: "ana@exemplo.com",\n      idade: 28,\n      dataCriacao: new Date()\n    });\n    \n    console.log(`Documento inserido com ID: ${resultadoInsercao.insertedId}`);\n    \n    // Buscar documentos\n    const consulta = { idade: { $gt: 25 } };\n    const cursor = colecao.find(consulta);\n    \n    if ((await colecao.countDocuments(consulta)) === 0) {\n      console.log("Nenhum documento encontrado!");\n    }\n    \n    const documentos = await cursor.toArray();\n    console.log("Documentos encontrados:");\n    console.log(documentos);\n    \n    // Atualizar documento\n    const filtro = { nome: "Ana Silva" };\n    const atualizacao = {\n      $set: { verificado: true },\n      $currentDate: { ultimoAcesso: true }\n    };\n    \n    const resultadoAtualizacao = await colecao.updateOne(filtro, atualizacao);\n    console.log(`${resultadoAtualizacao.modifiedCount} documento(s) atualizado(s)`);\n    \n  } finally {\n    await client.close();\n  }\n}\n\nmain().catch(console.error);'
      },
      {
        id: 'nosql-3',
        title: 'Mongoose (ODM)',
        description: 'Usar Mongoose para modelagem de objetos MongoDB',
        language: 'javascript',
        code: '// Instalar: npm install mongoose\n\nconst mongoose = require("mongoose");\n\n// Conectar ao MongoDB\nmongoose.connect("mongodb://localhost:27017/meu_banco")\n  .then(() => console.log("Conectado ao MongoDB!"))\n  .catch(err => console.error("Erro de conexão:", err));\n\n// Definir schema\nconst usuarioSchema = new mongoose.Schema({\n  nome: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  senha: { type: String, required: true },\n  idade: Number,\n  ativo: { type: Boolean, default: true },\n  interesses: [String],\n  dataCriacao: { type: Date, default: Date.now }\n});\n\n// Adicionar método ao schema\nusuarioSchema.methods.saudacao = function() {\n  return `Olá, meu nome é ${this.nome}`;\n};\n\n// Criar modelo\nconst Usuario = mongoose.model("Usuario", usuarioSchema);\n\n// Criar e salvar um documento\nasync function criarUsuario() {\n  try {\n    const novoUsuario = new Usuario({\n      nome: "Carlos Oliveira",\n      email: "carlos@exemplo.com",\n      senha: "senha123",\n      idade: 32,\n      interesses: ["tecnologia", "esportes"]\n    });\n    \n    await novoUsuario.save();\n    console.log("Usuário salvo com sucesso!");\n    console.log(novoUsuario.saudacao());\n    \n    // Buscar usuários\n    const usuarios = await Usuario.find({ idade: { $gte: 30 } })\n      .select("nome email idade")\n      .sort({ nome: 1 });\n    \n    console.log("Usuários encontrados:", usuarios);\n    \n  } catch (erro) {\n    console.error("Erro:", erro);\n  }\n}\n\ncriarUsuario();'
      }
    ]
  },
  {
    id: 'jquery',
    name: 'jQuery',
    icon: <Braces size={24} className="text-blue-400" />,
    description: 'Biblioteca JavaScript rápida, pequena e rica em recursos',
    documentation: 'https://api.jquery.com/',
    tutorials: [
      { title: 'Aprenda jQuery', url: 'https://learn.jquery.com/' },
      { title: 'jQuery Tutorial', url: 'https://www.w3schools.com/jquery/' }
    ],
    snippets: [
      {
        id: 'jquery-1',
        title: 'Instalação jQuery',
        description: 'Adicionar jQuery a um projeto',
        language: 'html',
        code: '<!-- Via CDN -->\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n\n<!-- Via npm -->\n<!-- npm install jquery -->\n<!-- import $ from "jquery"; -->'
      },
      {
        id: 'jquery-2',
        title: 'Seletores e Manipulação DOM',
        description: 'Selecionar e manipular elementos com jQuery',
        language: 'javascript',
        code: '// Esperar pelo carregamento do DOM\n$(document).ready(function() {\n  // Seletores\n  $("p");                    // Selecionar por tag\n  $("#meu-id");              // Selecionar por ID\n  $(".minha-classe");        // Selecionar por classe\n  $("ul li:first-child");    // Seletores avançados\n  \n  // Manipulação de conteúdo\n  $("#titulo").text("Novo Título");           // Alterar texto\n  $(".descricao").html("<strong>Texto em negrito</strong>"); // Alterar HTML\n  $("input").val("Novo valor");               // Alterar valor de input\n  \n  // Manipulação de atributos\n  $("a").attr("href", "https://exemplo.com");\n  $("img").attr("alt", "Descrição da imagem");\n  \n  // Manipulação de classes\n  $(".item").addClass("ativo");\n  $(".item").removeClass("inativo");\n  $(".item").toggleClass("destacado");\n  \n  // Manipulação de CSS\n  $(".caixa").css("color", "blue");\n  $(".caixa").css({\n    backgroundColor: "#f0f0f0",\n    padding: "10px",\n    borderRadius: "5px"\n  });\n});\n'
      },
      {
        id: 'jquery-3',
        title: 'Eventos e Animações',
        description: 'Manipular eventos e criar animações com jQuery',
        language: 'javascript',
        code: '// Eventos\n$("#botao").click(function() {\n  alert("Botão clicado!");\n});\n\n$("input").on("keyup", function() {\n  console.log("Digitando: " + $(this).val());\n});\n\n// Múltiplos eventos\n$(".item")\n  .on("mouseenter", function() {\n    $(this).addClass("hover");\n  })\n  .on("mouseleave", function() {\n    $(this).removeClass("hover");\n  });\n\n// Delegação de eventos\n$("#lista").on("click", "li", function() {\n  // Funciona mesmo para elementos adicionados dinamicamente\n  $(this).toggleClass("selecionado");\n});\n\n// Animações\n$(".painel").hide();  // Esconder elemento\n\n$("#mostrar").click(function() {\n  $(".painel").show(300);  // Mostrar com animação\n});\n\n$("#toggle").click(function() {\n  $(".painel").slideToggle(500);  // Alternar com slide\n});\n\n// Animação personalizada\n$(".caixa").animate({\n  opacity: 0.7,\n  width: "80%",\n  marginLeft: "10%"\n}, 1000, function() {\n  // Callback após a animação\n  $(this).css("border", "2px solid green");\n});'
      }
      
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: <FileCode size={24} className="text-red-500" />,
    description: 'Linguagem de programação orientada a objetos, robusta e multiplataforma',
    documentation: 'https://docs.oracle.com/javase/8/docs/',
    tutorials: [
      { title: 'Java Tutorial', url: 'https://docs.oracle.com/javase/tutorial/' },
      { title: 'Java para Iniciantes', url: 'https://www.w3schools.com/java/' }
    ],
    snippets: [
      {
        id: 'java-1',
        title: 'Hello World',
        description: 'Programa básico em Java',
        language: 'java',
        code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}'
      },
      {
        id: 'java-2',
        title: 'Classes e Objetos',
        description: 'Definir uma classe e criar objetos',
        language: 'java',
        code: 'class Car {\n  String model;\n  int year;\n\n  Car(String model, int year) {\n    this.model = model;\n    this.year = year;\n  }\n\n  void display() {\n    System.out.println("Model: " + model + ", Year: " + year);\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Car myCar = new Car("Toyota", 2020);\n    myCar.display();\n  }\n}'
      },
      {
        id: 'java-3',
        title: 'Collections',
        description: 'Usando ArrayList em Java',
        language: 'java',
        code: 'import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> cars = new ArrayList<String>();\n    cars.add("Volvo");\n    cars.add("BMW");\n    cars.add("Ford");\n    \n    for (String car : cars) {\n      System.out.println(car);\n    }\n  }\n}'
      }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: <FileCode size={24} className="text-purple-500" />,
    description: 'Linguagem moderna e concisa para desenvolvimento Android e multiplataforma',
    documentation: 'https://kotlinlang.org/docs/home.html',
    tutorials: [
      { title: 'Kotlin Docs', url: 'https://kotlinlang.org/docs/home.html' },
      { title: 'Kotlin para Iniciantes', url: 'https://www.w3schools.com/kotlin/' }
    ],
    snippets: [
      {
        id: 'kotlin-1',
        title: 'Hello World',
        description: 'Programa básico em Kotlin',
        language: 'kotlin',
        code: 'fun main() {\n  println("Hello, World!")\n}'
      },
      {
        id: 'kotlin-2',
        title: 'Funções e Lambdas',
        description: 'Definir funções e expressões lambda',
        language: 'kotlin',
        code: 'fun sum(a: Int, b: Int): Int {\n  return a + b\n}\n\nfun main() {\n  val result = sum(5, 3)\n  println("Result: $result")\n\n  // Lambda\n  val multiply = { a: Int, b: Int -> a * b }\n  println("Multiply: ${multiply(4, 5)}")\n}'
      },
      {
        id: 'kotlin-3',
        title: 'Classes e Data Classes',
        description: 'Definir classes e data classes',
        language: 'kotlin',
        code: 'class Person(val name: String, var age: Int)\n\ndata class User(val id: Int, val name: String)\n\nfun main() {\n  val person = Person("John", 30)\n  println("Name: ${person.name}, Age: ${person.age}")\n\n  val user = User(1, "Jane")\n  println(user) // toString() automático\n}'
      }
    ]
  },
  {
    id: 'json',
    name: 'JSON',
    icon: <Braces size={24} className="text-yellow-500" />,
    description: 'Formato de intercâmbio de dados leve e fácil de ler',
    documentation: 'https://www.json.org/json-pt.html',
    tutorials: [
      { title: 'JSON Tutorial', url: 'https://www.w3schools.com/js/js_json_intro.asp' },
      { title: 'JSON Schema', url: 'https://json-schema.org/learn/' }
    ],
    snippets: [
      {
        id: 'json-1',
        title: 'Estrutura Básica',
        description: 'Exemplo de um objeto JSON',
        language: 'json',
        code: '{\n  "name": "John",\n  "age": 30,\n  "isStudent": false,\n  "courses": ["Math", "Science"],\n  "address": {\n    "street": "123 Main St",\n    "city": "New York"\n  }\n}'
      },
      {
        id: 'json-2',
        title: 'Parsing em JavaScript',
        description: 'Converter JSON para objeto JavaScript',
        language: 'javascript',
        code: 'const jsonString = \'{"name":"John","age":30}\';\nconst obj = JSON.parse(jsonString);\nconsole.log(obj.name); // John'
      },
      {
        id: 'json-3',
        title: 'Stringify em JavaScript',
        description: 'Converter objeto JavaScript para JSON',
        language: 'javascript',
        code: 'const obj = { name: "John", age: 30 };\nconst jsonString = JSON.stringify(obj);\nconsole.log(jsonString); // {"name":"John","age":30}'
      }
    ]
  },
  {
    id: 'apis',
    name: 'APIs',
    icon: <Globe size={24} className="text-blue-500" />,
    description: 'Interfaces de Programação de Aplicativos para integração de sistemas',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/API',
    tutorials: [
      { title: 'APIs Web', url: 'https://developer.mozilla.org/pt-BR/docs/Web/API' },
      { title: 'REST API Tutorial', url: 'https://restfulapi.net/' }
    ],
    snippets: [
      {
        id: 'apis-1',
        title: 'Fetch API',
        description: 'Fazer requisições HTTP com Fetch API',
        language: 'javascript',
        code: 'fetch("https://api.example.com/data")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error("Error:", error));'
      },
      {
        id: 'apis-2',
        title: 'Axios',
        description: 'Fazer requisições HTTP com Axios',
        language: 'javascript',
        code: 'axios.get("https://api.example.com/data")\n  .then(response => console.log(response.data))\n  .catch(error => console.error("Error:", error));'
      },
      {
        id: 'apis-3',
        title: 'Criar API com Express',
        description: 'Criar uma API simples com Express.js',
        language: 'javascript',
        code: 'const express = require("express");\nconst app = express();\n\napp.get("/api/data", (req, res) => {\n  res.json({ message: "Hello, World!" });\n});\n\napp.listen(3000, () => {\n  console.log("API running on http://localhost:3000");\n});'
      }
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    icon: <FileCode size={24} className="text-blue-500" />,
    description: 'Linguagem de script do lado do servidor para desenvolvimento web',
    documentation: 'https://www.php.net/docs.php',
    tutorials: [
      { title: 'PHP Manual', url: 'https://www.php.net/manual/en/' },
      { title: 'PHP Tutorial', url: 'https://www.w3schools.com/php/' }
    ],
    snippets: [
      {
        id: 'php-1',
        title: 'Hello World',
        description: 'Programa básico em PHP',
        language: 'php',
        code: '<?php\necho "Hello, World!";\n?>'
      },
      {
        id: 'php-2',
        title: 'Formulário e POST',
        description: 'Processar dados de formulário com PHP',
        language: 'php',
        code: '<?php\nif ($_SERVER["REQUEST_METHOD"] == "POST") {\n  $name = $_POST["name"];\n  echo "Hello, " . htmlspecialchars($name);\n}\n?>\n\n<form method="post">\n  Name: <input type="text" name="name">\n  <input type="submit">\n</form>'
      },
      {
        id: 'php-3',
        title: 'Conexão MySQL',
        description: 'Conectar ao MySQL com PHP',
        language: 'php',
        code: '<?php\n$servername = "localhost";\n$username = "username";\n$password = "password";\n$dbname = "myDB";\n\n// Criar conexão\n$conn = new mysqli($servername, $username, $password, $dbname);\n\n// Verificar conexão\nif ($conn->connect_error) {\n  die("Connection failed: " . $conn->connect_error);\n}\n\n$sql = "SELECT id, name FROM users";\n$result = $conn->query($sql);\n\nif ($result->num_rows > 0) {\n  while($row = $result->fetch_assoc()) {\n    echo "id: " . $row["id"]. " - Name: " . $row["name"]. "<br>";\n  }\n} else {\n  echo "0 results";\n}\n$conn->close();\n?>'
      }
    ]
  },
  {
    id: 'csharp',
    name: 'C#',
    icon: <FileCode size={24} className="text-purple-500" />,
    description: 'Linguagem de programação moderna e orientada a objetos da Microsoft',
    documentation: 'https://docs.microsoft.com/pt-br/dotnet/csharp/',
    tutorials: [
      { title: 'C# Docs', url: 'https://docs.microsoft.com/pt-br/dotnet/csharp/' },
      { title: 'C# Tutorial', url: 'https://www.w3schools.com/cs/' }
    ],
    snippets: [
      {
        id: 'csharp-1',
        title: 'Hello World',
        description: 'Programa básico em C#',
        language: 'csharp',
        code: 'using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, World!");\n  }\n}'
      },
      {
        id: 'csharp-2',
        title: 'Classes e Objetos',
        description: 'Definir uma classe e criar objetos',
        language: 'csharp',
        code: 'class Car {\n  public string model;\n  public int year;\n\n  public Car(string model, int year) {\n    this.model = model;\n    this.year = year;\n  }\n\n  public void Display() {\n    Console.WriteLine($"Model: {model}, Year: {year}");\n  }\n}\n\nclass Program {\n  static void Main() {\n    Car myCar = new Car("Toyota", 2020);\n    myCar.Display();\n  }\n}'
      },
      {
        id: 'csharp-3',
        title: 'LINQ',
        description: 'Usando LINQ para consultas',
        language: 'csharp',
        code: 'using System;\nusing System.Linq;\n\nclass Program {\n  static void Main() {\n    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };\n\n    var lowNums = from num in numbers\n                  where num < 5\n                  select num;\n\n    Console.WriteLine("Numbers < 5:");\n    foreach (var num in lowNums) {\n      Console.WriteLine(num);\n    }\n  }\n}'
      }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: <FileCode size={24} className="text-blue-500" />,
    description: 'Linguagem de programação de alto desempenho e propósito geral',
    documentation: 'https://en.cppreference.com/w/',
    tutorials: [
      { title: 'C++ Docs', url: 'https://en.cppreference.com/w/' },
      { title: 'C++ Tutorial', url: 'https://www.w3schools.com/cpp/' }
    ],
    snippets: [
      {
        id: 'cpp-1',
        title: 'Hello World',
        description: 'Programa básico em C++',
        language: 'cpp',
        code: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!";\n  return 0;\n}'
      },
      {
        id: 'cpp-2',
        title: 'Classes e Objetos',
        description: 'Definir uma classe e criar objetos',
        language: 'cpp',
        code: '#include <iostream>\n#include <string>\n\nclass Car {\npublic:\n  std::string model;\n  int year;\n\n  Car(std::string model, int year) {\n    this->model = model;\n    this->year = year;\n  }\n\n  void display() {\n    std::cout << "Model: " << model << ", Year: " << year << std::endl;\n  }\n};\n\nint main() {\n  Car myCar("Toyota", 2020);\n  myCar.display();\n  return 0;\n}'
      },
      {
        id: 'cpp-3',
        title: 'STL - Vector',
        description: 'Usando a STL (Standard Template Library) com vector',
        language: 'cpp',
        code: '#include <iostream>\n#include <vector>\n\nint main() {\n  std::vector<int> numbers = {1, 2, 3, 4, 5};\n\n  for (int num : numbers) {\n    std::cout << num << std::endl;\n  }\n\n  return 0;\n}'
      }
    ]
  },
  {
    id: 'android-studio',
    name: 'Android Studio',
    icon: <Terminal size={24} className="text-green-500" />,
    description: 'Ambiente de desenvolvimento integrado (IDE) para aplicativos Android',
    documentation: 'https://developer.android.com/studio/intro',
    tutorials: [
      { title: 'Android Studio Docs', url: 'https://developer.android.com/studio/intro' },
      { title: 'Android Tutorial', url: 'https://www.tutorialspoint.com/android/index.htm' }
    ],
    snippets: [
      {
        id: 'android-1',
        title: 'Criar Projeto',
        description: 'Criar um novo projeto no Android Studio',
        language: 'bash',
        code: '# Abrir Android Studio e seguir o assistente de novo projeto'
      },
      {
        id: 'android-2',
        title: 'Activity Básica',
        description: 'Criar uma Activity básica',
        language: 'java',
        code: 'package com.example.myapp;\n\nimport android.os.Bundle;\nimport androidx.appcompat.app.AppCompatActivity;\n\npublic class MainActivity extends AppCompatActivity {\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.activity_main);\n  }\n}'
      },
      {
        id: 'android-3',
        title: 'Layout XML',
        description: 'Criar um layout básico em XML',
        language: 'xml',
        code: '<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"\n  android:layout_width="match_parent"\n  android:layout_height="match_parent"\n  android:orientation="vertical">\n\n  <TextView\n    android:id="@+id/textView"\n    android:layout_width="wrap_content"\n    android:layout_height="wrap_content"\n    android:text="Hello, World!" />\n\n</LinearLayout>'
      }
    ]
  },
  {
    id: 'virus',
    name: 'Vírus',
    icon: <Terminal size={24} className="text-red-500" />,
    description: 'Códigos maliciosos e técnicas de prevenção',
    documentation: 'https://www.kaspersky.com/resource-center/threats',
    tutorials: [
      { title: 'O que é um vírus?', url: 'https://www.kaspersky.com/resource-center/definitions/what-is-a-computer-virus' },
      { title: 'Prevenção de vírus', url: 'https://www.kaspersky.com/resource-center/preemptive-safety' }
    ],
    snippets: [
      {
        id: 'virus-1',
        title: 'Exemplo de Código Malicioso',
        description: 'Exemplo básico de um código malicioso (apenas para estudo)',
        language: 'python',
        code: '# Exemplo de código malicioso (não executar)\nimport os\nos.system("rm -rf /")'
      },
      {
        id: 'virus-2',
        title: 'Proteção Básica',
        description: 'Dicas básicas para proteger seu sistema',
        language: 'markdown',
        code: '1. Mantenha seu sistema operacional e softwares atualizados.\n2. Use um antivírus confiável.\n3. Não abra anexos de e-mails desconhecidos.\n4. Evite clicar em links suspeitos.\n5. Faça backups regulares dos seus dados.'
      },
      {
        id: 'virus-3',
        title: 'Detecção de Vírus',
        description: 'Como detectar atividades suspeitas',
        language: 'markdown',
        code: '- Verifique processos desconhecidos no gerenciador de tarefas.\n- Monitore o uso anormal de CPU ou memória.\n- Use ferramentas de varredura de malware.\n- Fique atento a pop-ups e redirecionamentos inesperados.'
      }
    ]
  }
];
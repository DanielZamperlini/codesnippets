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
    id: 'regex',
    name: 'Regex',
    icon: <FileCode size={24} className="text-green-500" />,
    description: 'Expressões regulares para busca e manipulação de padrões em textos',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions',
    tutorials: [
      { title: 'Regex Tutorial', url: 'https://regexr.com/' },
      { title: 'MDN Regex Guide', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions' }
    ],
    snippets: [
      {
        id: 'regex-1',
        title: 'Busca Simples',
        description: 'Encontrar uma palavra em um texto',
        language: 'regex',
        code: '/hello/'
      },
      {
        id: 'regex-2',
        title: 'Busca com Flags',
        description: 'Busca case-insensitive e global',
        language: 'regex',
        code: '/hello/gi'
      },
      {
        id: 'regex-3',
        title: 'Correspondência de Dígitos',
        description: 'Encontrar todos os números em um texto',
        language: 'regex',
        code: '/\\d+/g'
      },
      {
        id: 'regex-4',
        title: 'Validação de E-mail',
        description: 'Validar um endereço de e-mail',
        language: 'regex',
        code: '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/'
      },
      {
        id: 'regex-5',
        title: 'Substituição de Texto',
        description: 'Substituir todas as ocorrências de uma palavra',
        language: 'javascript',
        code: 'const texto = "Hello world! Hello everyone!";\nconst novoTexto = texto.replace(/Hello/g, "Hi");\nconsole.log(novoTexto); // "Hi world! Hi everyone!"'
      },
      {
        id: 'regex-6',
        title: 'Captura de Grupos',
        description: 'Capturar partes específicas de um texto',
        language: 'regex',
        code: '/(\\d{2})-(\\d{2})-(\\d{4})/'
      },
      {
        id: 'regex-7',
        title: 'Validação de Senha',
        description: 'Validar senha com requisitos específicos',
        language: 'regex',
        code: '/^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/'
      },
      {
        id: 'regex-8',
        title: 'Busca de URLs',
        description: 'Encontrar URLs em um texto',
        language: 'regex',
        code: '/https?:\\/\\/[^\\s]+/g'
      }
    ]
  },
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
      },
      {
        id: 'react-4',
        title: 'Hook useEffect',
        description: 'Executar efeitos colaterais em componentes funcionais',
        language: 'jsx',
        code: 'import React, { useState, useEffect } from "react";\n\nfunction DataFetcher({ url }) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then((response) => response.json())\n      .then((data) => setData(data));\n  }, [url]);\n\n  if (!data) return <div>Loading...</div>;\n  return <div>{JSON.stringify(data)}</div>;\n}'
      },
      {
        id: 'react-5',
        title: 'Props e State',
        description: 'Passar props e gerenciar state em componentes',
        language: 'jsx',
        code: 'import React, { useState } from "react";\n\nfunction ParentComponent() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h1>Contador: {count}</h1>\n      <ChildComponent increment={() => setCount(count + 1)} />\n    </div>\n  );\n}\n\nfunction ChildComponent({ increment }) {\n  return <button onClick={increment}>Incrementar</button>;\n}'
      },
      {
        id: 'react-6',
        title: 'Context API',
        description: 'Usar Context API para gerenciar estado global',
        language: 'jsx',
        code: 'import React, { createContext, useContext, useState } from "react";\n\nconst MyContext = createContext();\n\nfunction MyProvider({ children }) {\n  const [value, setValue] = useState("Hello, World!");\n\n  return (\n    <MyContext.Provider value={{ value, setValue }}>\n      {children}\n    </MyContext.Provider>\n  );\n}\n\nfunction MyComponent() {\n  const { value, setValue } = useContext(MyContext);\n\n  return (\n    <div>\n      <p>{value}</p>\n      <button onClick={() => setValue("New Value")}>Change Value</button>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <MyProvider>\n      <MyComponent />\n    </MyProvider>\n  );\n}'
      },
      {
        id: 'react-7',
        title: 'useReducer Hook',
        description: 'Gerenciar estado complexo com o hook useReducer',
        language: 'jsx',
        code: 'import React, { useReducer } from "react";\n\nconst initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n    </div>\n  );\n}'
      },
      {
        id: 'react-8',
        title: 'useRef Hook',
        description: 'Manipular elementos DOM diretamente com useRef',
        language: 'jsx',
        code: 'import React, { useRef } from "react";\n\nfunction TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n  const onButtonClick = () => {\n    inputEl.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputEl} type="text" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </div>\n  );\n}'
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
      },
      {
        id: 'ts-4',
        title: 'Classes',
        description: 'Definir e utilizar classes em TypeScript',
        language: 'typescript',
        code: 'class Greeter {\n  greeting: string;\n  constructor(message: string) {\n    this.greeting = message;\n  }\n  greet() {\n    return "Hello, " + this.greeting;\n  }\n}\n\nlet greeter = new Greeter("world");\nconsole.log(greeter.greet());'
      },
      {
        id: 'ts-5',
        title: 'Funções Genéricas',
        description: 'Uso de funções genéricas em TypeScript',
        language: 'typescript',
        code: 'function identity<T>(arg: T): T {\n  return arg;\n}\n\nlet output1 = identity<string>("myString");\nlet output2 = identity<number>(42);'
      },
      {
        id: 'ts-6',
        title: 'Union Types',
        description: 'Usando Union Types para variáveis múltiplas',
        language: 'typescript',
        code: 'function printId(id: number | string) {\n  console.log("Your ID is: " + id);\n}\n\nprintId(101);\nprintId("202");'
      },
      {
        id: 'ts-7',
        title: 'Tipos Literais',
        description: 'Definindo tipos literais em TypeScript',
        language: 'typescript',
        code: 'type Direction = "North" | "East" | "South" | "West";\n\nfunction move(direction: Direction) {\n  console.log("Moving to " + direction);\n}\n\nmove("North");'
      },
      {
        id: 'ts-8',
        title: 'Decorator',
        description: 'Uso de Decorators em classes e métodos',
        language: 'typescript',
        code: 'function sealed(constructor: Function) {\n  Object.seal(constructor);\n  Object.seal(constructor.prototype);\n}\n\n@sealed\nclass BugReport {\n  type = "report";\n  title: string;\n  constructor(t: string) {\n    this.title = t;\n  }\n}\n\nconst report = new BugReport("Needs attention");\nconsole.log(report);'
      }
    ]
  }
  ,
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
      },
      {
        id: 'tailwind-4',
        title: 'Botão Personalizado',
        description: 'Um botão personalizado com Tailwind CSS',
        language: 'jsx',
        code: '<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n  Clique Aqui\n</button>'
      },
      {
        id: 'tailwind-5',
        title: 'Navbar Responsiva',
        description: 'Um exemplo de navbar responsiva usando Tailwind CSS',
        language: 'jsx',
        code: '<nav className="bg-gray-800 p-4">\n  <div className="container mx-auto flex justify-between items-center">\n    <div className="text-white font-bold">Logo</div>\n    <div className="space-x-4">\n      <a href="#" className="text-gray-300 hover:text-white">Home</a>\n      <a href="#" className="text-gray-300 hover:text-white">Sobre</a>\n      <a href="#" className="text-gray-300 hover:text-white">Contato</a>\n    </div>\n  </div>\n</nav>'
      },
      {
        id: 'tailwind-6',
        title: 'Formulário de Login',
        description: 'Um formulário de login estilizado com Tailwind CSS',
        language: 'jsx',
        code: '<div className="max-w-xs mx-auto mt-10">\n  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">\n    <div className="mb-4">\n      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">\n        Nome de Usuário\n      </label>\n      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nome de Usuário" />\n    </div>\n    <div className="mb-6">\n      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">\n        Senha\n      </label>\n      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />\n    </div>\n    <div className="flex items-center justify-between">\n      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">\n        Entrar\n      </button>\n      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">\n        Esqueceu a senha?\n      </a>\n    </div>\n  </form>\n</div>'
      },
      {
        id: 'tailwind-7',
        title: 'Tabela Simples',
        description: 'Uma tabela simples estilizada com Tailwind CSS',
        language: 'jsx',
        code: '<div className="container mx-auto">\n  <table className="min-w-full bg-white">\n    <thead>\n      <tr>\n        <th className="py-2">Nome</th>\n        <th className="py-2">Idade</th>\n        <th className="py-2">Cidade</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td className="border px-4 py-2">Alice</td>\n        <td className="border px-4 py-2">24</td>\n        <td className="border px-4 py-2">Nova York</td>\n      </tr>\n      <tr>\n        <td className="border px-4 py-2">Bob</td>\n        <td className="border px-4 py-2">30</td>\n        <td className="border px-4 py-2">Los Angeles</td>\n      </tr>\n    </tbody>\n  </table>\n</div>'
      },
      {
        id: 'tailwind-8',
        title: 'Badge',
        description: 'Exemplo de um badge com Tailwind CSS',
        language: 'jsx',
        code: '<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">\n  Novo\n</span>'
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
      },
      {
        id: 'js-4',
        title: 'Manipulação DOM',
        description: 'Exemplos básicos de manipulação do DOM',
        language: 'javascript',
        code: 'document.getElementById("minhaDiv").innerHTML = "Novo Conteúdo";\n\nconst novoElemento = document.createElement("p");\nnovoElemento.textContent = "Texto Adicionado";\ndocument.body.appendChild(novoElemento);'
      },
      {
        id: 'js-5',
        title: 'Funções de Callback',
        description: 'Uso de funções de callback em JavaScript',
        language: 'javascript',
        code: 'function saudacao(nome, callback) {\n  console.log("Olá, " + nome);\n  callback();\n}\n\nfunction despedida() {\n  console.log("Adeus!");\n}\n\nsaudacao("João", despedida);'
      },
      {
        id: 'js-6',
        title: 'Promessas',
        description: 'Trabalhando com Promises em JavaScript',
        language: 'javascript',
        code: 'let minhaPromessa = new Promise((resolve, reject) => {\n  let sucesso = true;\n  if (sucesso) {\n    resolve("Operação bem-sucedida!");\n  } else {\n    reject("Ocorreu um erro.");\n  }\n});\n\nminhaPromessa.then((mensagem) => {\n  console.log(mensagem);\n}).catch((erro) => {\n  console.error(erro);\n});'
      },
      {
        id: 'js-7',
        title: 'Objetos e Classes',
        description: 'Definição de objetos e classes em JavaScript',
        language: 'javascript',
        code: 'const pessoa = {\n  nome: "João",\n  idade: 30,\n  saudacao: function() {\n    console.log("Olá, meu nome é " + this.nome);\n  }\n};\n\npessoa.saudacao();\n\nclass Animal {\n  constructor(nome, tipo) {\n    this.nome = nome;\n    this.tipo = tipo;\n  }\n  descricao() {\n    console.log(`${this.nome} é um ${this.tipo}`);\n  }\n}\n\nconst meuAnimal = new Animal("Rex", "cachorro");\nmeuAnimal.descricao();'
      },
      {
        id: 'js-8',
        title: 'Desestruturação',
        description: 'Uso de desestruturação em JavaScript',
        language: 'javascript',
        code: 'const obj = { a: 1, b: 2, c: 3 };\nconst { a, b, c } = obj;\nconsole.log(a, b, c);\n\nconst arr = [1, 2, 3];\nconst [x, y, z] = arr;\nconsole.log(x, y, z);'
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
      },
      {
        id: 'next-4',
        title: 'Roteamento Dinâmico',
        description: 'Criar uma página com roteamento dinâmico em Next.js',
        language: 'jsx',
        code: '// pages/posts/[id].js\nimport { useRouter } from "next/router";\n\nexport default function Post() {\n  const router = useRouter();\n  const { id } = router.query;\n\n  return <p>Post: {id}</p>;\n}'
      },
      {
        id: 'next-5',
        title: 'Roteamento de Link',
        description: 'Usar o componente Link do Next.js para navegação entre páginas',
        language: 'jsx',
        code: '// pages/index.js\nimport Link from "next/link";\n\nexport default function Home() {\n  return (\n    <div>\n      <h1>Home</h1>\n      <Link href="/about">\n        <a>Ir para About</a>\n      </Link>\n    </div>\n  );\n}'
      },
      {
        id: 'next-6',
        title: 'SSR com getServerSideProps',
        description: 'Renderização do lado do servidor usando getServerSideProps',
        language: 'javascript',
        code: '// pages/index.js\nexport async function getServerSideProps() {\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n\n  return { props: { data } };\n}\n\nexport default function Home({ data }) {\n  return (\n    <div>\n      <h1>Dados do Servidor</h1>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}'
      },
      {
        id: 'next-7',
        title: 'Static Generation com getStaticProps',
        description: 'Gerar páginas estáticas usando getStaticProps',
        language: 'javascript',
        code: '// pages/index.js\nexport async function getStaticProps() {\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n\n  return { props: { data } };\n}\n\nexport default function Home({ data }) {\n  return (\n    <div>\n      <h1>Dados Estáticos</h1>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}'
      },
      {
        id: 'next-8',
        title: 'Imagens Otimizadas',
        description: 'Usar o componente Image do Next.js para imagens otimizadas',
        language: 'jsx',
        code: '// pages/index.js\nimport Image from "next/image";\n\nexport default function Home() {\n  return (\n    <div>\n      <h1>Imagens Otimizadas</h1>\n      <Image src="/meu-image.jpg" alt="Minha Imagem" width={500} height={500} />\n    </div>\n  );\n}'
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
      },
      {
        id: 'html-2',
        title: 'Link CSS Externo',
        description: 'Como linkar um arquivo CSS externo',
        language: 'html',
        code: '<link rel="stylesheet" href="styles.css">'
      },
      {
        id: 'html-3',
        title: 'Formulário Básico',
        description: 'Criar um formulário básico em HTML',
        language: 'html',
        code: '<form action="/submit" method="post">\n  <label for="name">Nome:</label>\n  <input type="text" id="name" name="name">\n  <input type="submit" value="Enviar">\n</form>'
      },
      {
        id: 'css-3',
        title: 'CSS Reset',
        description: 'Resetar estilos padrão do navegador',
        language: 'css',
        code: '/* Reset CSS básico */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}'
      },
      {
        id: 'html-4',
        title: 'Tabela HTML',
        description: 'Estrutura básica de uma tabela em HTML',
        language: 'html',
        code: '<table>\n  <tr>\n    <th>Nome</th>\n    <th>Idade</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>24</td>\n  </tr>\n  <tr>\n    <td>Bob</td>\n    <td>30</td>\n  </tr>\n</table>'
      },
      {
        id: 'css-4',
        title: 'Botão Estilizado',
        description: 'Um botão estilizado com CSS',
        language: 'css',
        code: '.button {\n  background-color: #4CAF50; /* Verde */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n}'
      },
      {
        id: 'html-5',
        title: 'Imagem Responsiva',
        description: 'Como tornar uma imagem responsiva em HTML',
        language: 'html',
        code: '<img src="imagem.jpg" alt="Descrição da Imagem" style="max-width: 100%; height: auto;">'
      },
      {
        id: 'css-5',
        title: 'Animações CSS',
        description: 'Criar animações simples com CSS',
        language: 'css',
        code: '@keyframes exemplo {\n  from {background-color: red;}\n  to {background-color: yellow;}\n}\n\n.elemento {\n  animation-name: exemplo;\n  animation-duration: 4s;\n}'
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
      },
      {
        id: 'sass-4',
        title: 'Partials e Importações',
        description: 'Organizar estilos em arquivos parciais e importá-los',
        language: 'scss',
        code: '/* _variables.scss */\n$cor-primaria: #3498db;\n$padding-base: 15px;\n\n/* _mixins.scss */\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* main.scss */\n@import "variables";\n@import "mixins";\n\n.container {\n  @include flex-center;\n  padding: $padding-base;\n  background-color: $cor-primaria;\n}'
      },
      {
        id: 'sass-5',
        title: 'Loops em Sass',
        description: 'Utilizar loops para gerar estilos em Sass',
        language: 'scss',
        code: '@for $i from 1 through 3 {\n  .col-#{$i} {\n    width: 100% / 3 * $i;\n  }\n}'
      },
      {
        id: 'sass-6',
        title: 'Funções Personalizadas',
        description: 'Criar funções personalizadas em Sass',
        language: 'scss',
        code: '@function calcular-rem($px) {\n  @return $px / 16 * 1rem;\n}\n\n.elemento {\n  font-size: calcular-rem(18px);\n}'
      },
      {
        id: 'sass-7',
        title: 'Herança com @extend',
        description: 'Utilizar herança com o comando @extend',
        language: 'scss',
        code: '.btn {\n  padding: 10px 20px;\n  border-radius: 4px;\n  background-color: #3498db;\n  color: white;\n}\n\n.btn-primary {\n  @extend .btn;\n  background-color: #2ecc71;\n}'
      },
      {
        id: 'sass-8',
        title: 'Operações de Cores',
        description: 'Realizar operações com cores em Sass',
        language: 'scss',
        code: '$cor: #3498db;\n\n.elemento {\n  background-color: lighten($cor, 20%);\n  border: 1px solid darken($cor, 10%);\n}'
      },
      {
        id: 'sass-9',
        title: 'Condicionais em Sass',
        description: 'Utilizar condicionais em Sass',
        language: 'scss',
        code: '$tema: dark;\n\nbody {\n  @if $tema == light {\n    background-color: white;\n    color: black;\n  } @else if $tema == dark {\n    background-color: black;\n    color: white;\n  }\n}'
      },
      {
        id: 'sass-10',
        title: 'Interpolação de Strings',
        description: 'Usar interpolação de strings em Sass',
        language: 'scss',
        code: '$base-url: "https://meusite.com";\n\n.icon {\n  background-image: url("#{$base-url}/imagens/icone.png");\n}'
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
      },
      {
        id: 'angular-4',
        title: 'Binding de Dados',
        description: 'Exemplo de binding de dados em Angular',
        language: 'typescript',
        code: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-data-binding",\n  template: `\n    <input [(ngModel)]="nome" placeholder="Digite seu nome">\n    <p>Olá, {{ nome }}!</p>\n  `\n})\nexport class DataBindingComponent {\n  nome: string = "";\n}'
      },
      {
        id: 'angular-5',
        title: 'Diretivas Estruturais',
        description: 'Usar diretivas estruturais como *ngIf e *ngFor',
        language: 'typescript',
        code: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-diretivas",\n  template: `\n    <div *ngIf="mostrar">\n      <p>Este texto é exibido condicionalmente</p>\n    </div>\n    <ul>\n      <li *ngFor="let item of itens">{{ item }}</li>\n    </ul>\n    <button (click)="adicionarItem()">Adicionar Item</button>\n  `\n})\nexport class DiretivasComponent {\n  mostrar: boolean = true;\n  itens: string[] = ["Item 1", "Item 2", "Item 3"];\n  \n  adicionarItem() {\n    this.itens.push(`Item ${this.itens.length + 1}`);\n  }\n}'
      },
      {
        id: 'angular-6',
        title: 'Injeção de Dependência',
        description: 'Exemplo de injeção de dependência em Angular',
        language: 'typescript',
        code: 'import { Component, OnInit } from "@angular/core";\nimport { HttpClient } from "@angular/common/http";\nimport { Observable } from "rxjs";\n\n@Component({\n  selector: "app-injecao-dependencia",\n  template: `\n    <ul>\n      <li *ngFor="let user of users">{{ user.name }}</li>\n    </ul>\n  `\n})\nexport class InjecaoDependenciaComponent implements OnInit {\n  users: any[] = [];\n  \n  constructor(private http: HttpClient) {}\n  \n  ngOnInit() {\n    this.fetchUsers().subscribe(data => this.users = data);\n  }\n  \n  fetchUsers(): Observable<any[]> {\n    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");\n  }\n}'
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
        },
        {
            id: 'bootstrap-4',
            title: 'Navbar',
            description: 'Exemplo de uma barra de navegação básica',
            language: 'html',
            code: '<nav class="navbar navbar-expand-lg navbar-light bg-light">\n  <a class="navbar-brand" href="#">Navbar</a>\n  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" id="navbarNav">\n    <ul class="navbar-nav">\n      <li class="nav-item active">\n        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Features</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Pricing</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>\n      </li>\n    </ul>\n  </div>\n</nav>'
        },
        {
            id: 'bootstrap-5',
            title: 'Formulário',
            description: 'Exemplo de um formulário básico',
            language: 'html',
            code: '<form>\n  <div class="form-group">\n    <label for="exampleInputEmail1">Endereço de email</label>\n    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">\n    <small id="emailHelp" class="form-text text-muted">Nunca compartilhe seu email com ninguém.</small>\n  </div>\n  <div class="form-group">\n    <label for="exampleInputPassword1">Senha</label>\n    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n  </div>\n  <div class="form-group form-check">\n    <input type="checkbox" class="form-check-input" id="exampleCheck1">\n    <label class="form-check-label" for="exampleCheck1">Lembrar-me</label>\n  </div>\n  <button type="submit" class="btn btn-primary">Enviar</button>\n</form>'
        },
        {
            id: 'bootstrap-6',
            title: 'Tabela',
            description: 'Exemplo de uma tabela estilizada com Bootstrap',
            language: 'html',
            code: '<table class="table">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">Primeiro</th>\n      <th scope="col">Último</th>\n      <th scope="col">Usuário</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td colspan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>'
        },
        {
            id: 'bootstrap-7',
            title: 'Modal',
            description: 'Exemplo de um modal básico',
            language: 'html',
            code: '<!-- Botão para abrir o modal -->\n<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">\n  Abrir Modal\n</button>\n\n<!-- Modal -->\n<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="exampleModalLabel">Título do Modal</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        Conteúdo do modal...\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>\n        <button type="button" class="btn btn-primary">Salvar mudanças</button>\n      </div>\n    </div>\n  </div>\n</div>'
        },
        {
            id: 'bootstrap-8',
            title: 'Tooltip',
            description: 'Exemplo de tooltip com Bootstrap',
            language: 'html',
            code: '<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip no topo">\n  Tooltip no topo\n</button>\n\n<script>\n$(function () {\n  $(\'[data-toggle="tooltip"]\').tooltip()\n})\n</script>'
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
          description: 'Subir código no GitHub',
          language: 'bash',
          code: '# Criar um novo repositório na linha de comando\necho "# codesnippets" >> README.md\ngit init\ngit add README.md\ngit add -A\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin https://github.com/Daniel/nomeDoProjeto\ngit push -u origin main\n\n# Ou enviar um repositório existente da linha de comando\ngit remote add origin https://github.com/Daniel/nomeDoProjeto\ngit branch -M main\ngit push -u origin main'
      },
      {
          id: 'git-5',
          title: 'Atualizar',
          description: 'Atualizar projeto em construção',
          language: 'bash',
          code: '# Puxar atualização do projeto\ngit pull\n\n# Adicionar todo o código\ngit add -A\n\n# Adicionar commit\ngit commit -m "nome do commit"\n\n# Enviar commit\ngit push'
      },
      {
          id: 'git-6',
          title: 'Revertendo Commits',
          description: 'Desfazer um commit no Git',
          language: 'bash',
          code: '# Desfazer o último commit, mantendo as alterações no working directory\ngit reset --soft HEAD~1\n\n# Desfazer o último commit e descartar as alterações\ngit reset --hard HEAD~1'
      },
      {
          id: 'git-7',
          title: 'Stashing',
          description: 'Guardar e restaurar mudanças não commitadas',
          language: 'bash',
          code: '# Guardar mudanças não commitadas\ngit stash\n\n# Listar mudanças guardadas\ngit stash list\n\n# Restaurar a última mudança guardada\ngit stash pop\n\n# Restaurar uma mudança específica\ngit stash apply stash@{2}'
      },
      {
          id: 'git-8',
          title: 'Tagging',
          description: 'Adicionar tags no Git para versões específicas',
          language: 'bash',
          code: '# Criar uma tag anotada\ngit tag -a v1.0 -m "Versão 1.0"\n\n# Listar todas as tags\ngit tag\n\n# Mostrar detalhes de uma tag\ngit show v1.0\n\n# Enviar tags para o repositório remoto\ngit push origin --tags'
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
      },
      {
          id: 'node-4',
          title: 'Módulos Personalizados',
          description: 'Criar e importar módulos personalizados no Node.js',
          language: 'javascript',
          code: '// modulo.js\nmodule.exports.ola = function() {\n  return "Olá, Mundo!";\n};\n\n// app.js\nconst modulo = require("./modulo");\nconsole.log(modulo.ola());'
      },
      {
          id: 'node-5',
          title: 'Manipulação de URL',
          description: 'Manipular URLs com o módulo url do Node.js',
          language: 'javascript',
          code: 'const url = require("url");\n\nconst endereco = "http://www.exemplo.com:8080/caminho/para/pagina?nome=João&idade=30";\nconst urlParseada = url.parse(endereco, true);\n\nconsole.log(urlParseada.hostname); // "www.exemplo.com"\nconsole.log(urlParseada.pathname); // "/caminho/para/pagina"\nconsole.log(urlParseada.query);    // { nome: "João", idade: "30" }'
      },
      {
          id: 'node-6',
          title: 'Eventos',
          description: 'Trabalhar com eventos no Node.js',
          language: 'javascript',
          code: 'const EventEmitter = require("events");\n\nclass MeuEmissor extends EventEmitter {}\nconst meuEmissor = new MeuEmissor();\n\n// Registrando um evento\nmeuEmissor.on("evento", (mensagem) => {\n  console.log(mensagem);\n});\n\n// Emitindo um evento\nmeuEmissor.emit("evento", "Olá, Mundo!");'
      },
      {
          id: 'node-7',
          title: 'Operações de Diretório',
          description: 'Manipular diretórios com o módulo fs do Node.js',
          language: 'javascript',
          code: 'const fs = require("fs");\n\n// Criar um novo diretório\nfs.mkdir("novo-diretorio", { recursive: true }, (erro) => {\n  if (erro) {\n    console.error("Erro ao criar diretório:", erro);\n    return;\n  }\n  console.log("Diretório criado com sucesso!");\n});\n\n// Ler o conteúdo de um diretório\nfs.readdir("novo-diretorio", (erro, arquivos) => {\n  if (erro) {\n    console.error("Erro ao ler diretório:", erro);\n    return;\n  }\n  console.log("Conteúdo do diretório:", arquivos);\n});'
      },
      {
          id: 'node-8',
          title: 'Usando Axios para Requisições HTTP',
          description: 'Fazer requisições HTTP com Axios no Node.js',
          language: 'javascript',
          code: 'const axios = require("axios");\n\naxios.get("https://api.exemplo.com/usuarios")\n  .then((resposta) => {\n    console.log(resposta.data);\n  })\n  .catch((erro) => {\n    console.error("Erro ao fazer requisição:", erro);\n  });\n\naxios.post("https://api.exemplo.com/usuarios", { nome: "João" })\n  .then((resposta) => {\n    console.log("Usuário criado:", resposta.data);\n  })\n  .catch((erro) => {\n    console.error("Erro ao fazer requisição:", erro);\n  });'
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
          code: `// Instalar dependências
// npm install redux react-redux @reduxjs/toolkit

// store.js
import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./contadorSlice";

export const store = configureStore({
reducer: {
  contador: contadorReducer,
},
});

// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById("root")
);`
      },
      {
          id: 'redux-2',
          title: 'Redux Toolkit Slice',
          description: 'Criar um slice com Redux Toolkit',
          language: 'javascript',
          code: `// contadorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
name: "contador",
initialState: {
  valor: 0,
},
reducers: {
  incrementar: (state) => {
    state.valor += 1;
  },
  decrementar: (state) => {
    state.valor -= 1;
  },
  incrementarPorValor: (state, action) => {
    state.valor += action.payload;
  },
},
});

export const { incrementar, decrementar, incrementarPorValor } = contadorSlice.actions;
export default contadorSlice.reducer;`
      },
      {
          id: 'redux-3',
          title: 'Usar Redux em Componentes',
          description: 'Conectar componentes React ao Redux',
          language: 'jsx',
          code: `import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, decrementar, incrementarPorValor } from "./contadorSlice";

function Contador() {
const contador = useSelector((state) => state.contador.valor);
const dispatch = useDispatch();

return (
  <div>
    <h2>Contador: {contador}</h2>
    <div>
      <button onClick={() => dispatch(incrementar())}>
        Incrementar
      </button>
      <button onClick={() => dispatch(decrementar())}>
        Decrementar
      </button>
      <button onClick={() => dispatch(incrementarPorValor(5))}>
        Adicionar 5
      </button>
    </div>
  </div>
);
}

export default Contador;`
      },
      {
          id: 'redux-4',
          title: 'Middleware Redux',
          description: 'Adicionar middleware personalizado no Redux',
          language: 'javascript',
          code: `// middleware.js
const loggerMiddleware = (storeAPI) => (next) => (action) => {
console.log('dispatching', action);
let result = next(action);
console.log('next state', storeAPI.getState());
return result;
};

// store.js
import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./contadorSlice";
import loggerMiddleware from "./middleware";

export const store = configureStore({
reducer: {
  contador: contadorReducer,
},
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(loggerMiddleware),
});`
      },
      {
          id: 'redux-5',
          title: 'Ações Assíncronas com Thunks',
          description: 'Criar ações assíncronas com Redux Thunk',
          language: 'javascript',
          code: `// contadorSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const incrementarAsync = createAsyncThunk(
"contador/incrementarAsync",
async (valor) => {
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve(valor), 1000)
  );
  return response;
}
);

const contadorSlice = createSlice({
name: "contador",
initialState: {
  valor: 0,
},
reducers: {
  incrementar: (state) => {
    state.valor += 1;
  },
  decrementar: (state) => {
    state.valor -= 1;
  },
},
extraReducers: (builder) => {
  builder.addCase(incrementarAsync.fulfilled, (state, action) => {
    state.valor += action.payload;
  });
},
});

export const { incrementar, decrementar } = contadorSlice.actions;
export default contadorSlice.reducer;`
      },
      {
          id: 'redux-6',
          title: 'Persistir Estado com Redux Persist',
          description: 'Manter o estado da aplicação após recarregar a página',
          language: 'javascript',
          code: `// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contadorReducer from "./contadorSlice";

const persistConfig = {
key: "root",
storage,
};

const persistedReducer = persistReducer(persistConfig, contadorReducer);

export const store = configureStore({
reducer: {
  contador: persistedReducer,
},
});

export const persistor = persistStore(store);`
      },
      {
          id: 'redux-7',
          title: 'Selectors',
          description: 'Criar e usar selectors com Redux',
          language: 'javascript',
          code: `// contadorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
name: "contador",
initialState: {
  valor: 0,
},
reducers: {
  incrementar: (state) => {
    state.valor += 1;
  },
  decrementar: (state) => {
    state.valor -= 1;
  },
},
});

export const { incrementar, decrementar } = contadorSlice.actions;
export const selectValor = (state) => state.contador.valor;
export default contadorSlice.reducer;

// Componente.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, decrementar, selectValor } from "./contadorSlice";

function Contador() {
const valor = useSelector(selectValor);
const dispatch = useDispatch();

return (
  <div>
    <h2>Contador: {valor}</h2>
    <button onClick={() => dispatch(incrementar())}>Incrementar</button>
    <button onClick={() => dispatch(decrementar())}>Decrementar</button>
  </div>
);
}

export default Contador;`
      },
      {
          id: 'redux-8',
          title: 'Reatividade com Redux Toolkit Query',
          description: 'Fazer chamadas à API de forma reativa com RTK Query',
          language: 'javascript',
          code: `// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
reducerPath: "api",
baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
endpoints: (builder) => ({
  getUsuarios: builder.query({
    query: () => "/usuarios",
  }),
}),
});

export const { useGetUsuariosQuery } = apiSlice;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import contadorReducer from "./contadorSlice";

export const store = configureStore({
reducer: {
  [apiSlice.reducerPath]: apiSlice.reducer,
  contador: contadorReducer,
},
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
});

// Componente.js
import React from "react";
import { useGetUsuariosQuery } from "./apiSlice";

function ListaDeUsuarios() {
const { data: usuarios, error, isLoading } = useGetUsuariosQuery();

if (isLoading) return <div>Carregando...</div>;
if (error) return <div>Erro ao carregar usuários</div>;

return (
  <ul>
    {usuarios.map((usuario) => (
      <li key={usuario.id}>{usuario.nome}</li>
    ))}
  </ul>
);
}

export default ListaDeUsuarios;`
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
          code: `-- Criar banco de dados
CREATE DATABASE meu_banco;

-- Usar banco de dados
USE meu_banco;

-- Criar tabela
CREATE TABLE usuarios (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados
INSERT INTO usuarios (nome, email) VALUES ("João Silva", "joao@exemplo.com");

-- Consultar dados
SELECT * FROM usuarios;
SELECT nome, email FROM usuarios WHERE id = 1;

-- Atualizar dados
UPDATE usuarios SET nome = "João Santos" WHERE id = 1;

-- Excluir dados
DELETE FROM usuarios WHERE id = 1;`
      },
      {
          id: 'mysql-2',
          title: 'MySQL com Node.js',
          description: 'Conectar e usar MySQL com Node.js',
          language: 'javascript',
          code: `// Instalar: npm install mysql2

const mysql = require("mysql2/promise");

async function conectarBD() {
try {
  // Criar conexão
  const conexao = await mysql.createConnection({
    host: "localhost",
    user: "usuario",
    password: "senha",
    database: "meu_banco"
  });
  
  console.log("Conectado ao MySQL!");
  
  // Executar consulta
  const [linhas, campos] = await conexao.execute(
    "SELECT * FROM usuarios WHERE nome LIKE ?",
    ["%João%"]
  );
  
  console.log("Resultados:", linhas);
  
  // Inserir dados
  const [resultado] = await conexao.execute(
    "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
    ["Maria Silva", "maria@exemplo.com"]
  );
  
  console.log("ID inserido:", resultado.insertId);
  
  // Fechar conexão
  await conexao.end();
  
} catch (erro) {
  console.error("Erro:", erro);
}
}

conectarBD();`
      },
      {
          id: 'mysql-3',
          title: 'Relacionamentos e Joins',
          description: 'Criar e consultar tabelas relacionadas',
          language: 'sql',
          code: `-- Criar tabelas relacionadas
CREATE TABLE categorias (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL
);

CREATE TABLE produtos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
preco DECIMAL(10, 2) NOT NULL,
categoria_id INT,
FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Inserir dados
INSERT INTO categorias (nome) VALUES ("Eletrônicos"), ("Roupas"), ("Alimentos");

INSERT INTO produtos (nome, preco, categoria_id) VALUES
("Smartphone", 1999.99, 1),
("Notebook", 4500.00, 1),
("Camiseta", 49.90, 2),
("Arroz", 22.50, 3);

-- Consultas com JOIN
-- Inner Join (apenas correspondências)
SELECT p.nome AS produto, p.preco, c.nome AS categoria
FROM produtos p
INNER JOIN categorias c ON p.categoria_id = c.id;

-- Left Join (todos os produtos, mesmo sem categoria)
SELECT p.nome AS produto, p.preco, c.nome AS categoria
FROM produtos p
LEFT JOIN categorias c ON p.categoria_id = c.id;

-- Agrupar e contar
SELECT c.nome AS categoria, COUNT(p.id) AS total_produtos, AVG(p.preco) AS preco_medio
FROM categorias c
LEFT JOIN produtos p ON c.id = p.categoria_id
GROUP BY c.id;`
      },
      {
          id: 'mysql-4',
          title: 'Transações',
          description: 'Executar transações no MySQL',
          language: 'sql',
          code: `-- Iniciar transação
START TRANSACTION;

-- Executar operações
UPDATE produtos SET preco = preco * 0.9 WHERE categoria_id = 1;

INSERT INTO usuarios (nome, email) VALUES ("Carlos Silva", "carlos@exemplo.com");

-- Confirmar transação
COMMIT;

-- Desfazer transação
ROLLBACK;`
      },
      {
          id: 'mysql-5',
          title: 'Procedures',
          description: 'Criar e chamar procedures no MySQL',
          language: 'sql',
          code: `-- Criar procedure
DELIMITER //
CREATE PROCEDURE ObterUsuarios()
BEGIN
SELECT * FROM usuarios;
END //
DELIMITER ;

-- Chamar procedure
CALL ObterUsuarios();`
      },
      {
          id: 'mysql-6',
          title: 'Triggers',
          description: 'Criar e usar triggers no MySQL',
          language: 'sql',
          code: `-- Criar trigger para atualizar data_criacao
CREATE TRIGGER AtualizarDataCriacao
BEFORE UPDATE ON usuarios
FOR EACH ROW
SET NEW.data_criacao = NOW();`
      },
      {
          id: 'mysql-7',
          title: 'Views',
          description: 'Criar e consultar views no MySQL',
          language: 'sql',
          code: `-- Criar view
CREATE VIEW VistaUsuarios AS
SELECT nome, email FROM usuarios WHERE email LIKE "%@exemplo.com";

-- Consultar view
SELECT * FROM VistaUsuarios;`
      },
      {
          id: 'mysql-8',
          title: 'Indices',
          description: 'Criar e usar índices no MySQL',
          language: 'sql',
          code: `-- Criar índice
CREATE INDEX idx_nome ON usuarios (nome);

-- Usar índice em consulta
SELECT * FROM usuarios WHERE nome = "João Silva";`
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
      title: 'Inserir Documento',
      description: 'Inserir um documento em uma coleção MongoDB',
      language: 'javascript',
      code: 'db.collection("users").insertOne({\n  name: "John Doe",\n  age: 30,\n  email: "john@example.com"\n});'
    },
    {
      id: 'nosql-2',
      title: 'Buscar Documentos',
      description: 'Buscar todos os documentos em uma coleção',
      language: 'javascript',
      code: 'db.collection("users").find({}).toArray((err, docs) => {\n  console.log(docs);\n});'
    },
    {
      id: 'nosql-3',
      title: 'Atualizar Documento',
      description: 'Atualizar um documento existente',
      language: 'javascript',
      code: 'db.collection("users").updateOne(\n  { name: "John Doe" },\n  { $set: { age: 31 } }\n);'
    },
    {
      id: 'nosql-4',
      title: 'Excluir Documento',
      description: 'Excluir um documento de uma coleção',
      language: 'javascript',
      code: 'db.collection("users").deleteOne({ name: "John Doe" });'
    },
    {
      id: 'nosql-5',
      title: 'Consulta com Filtro',
      description: 'Buscar documentos que atendem a um critério',
      language: 'javascript',
      code: 'db.collection("users").find({ age: { $gt: 25 } }).toArray((err, docs) => {\n  console.log(docs);\n});'
    },
    {
      id: 'nosql-6',
      title: 'Agregação',
      description: 'Agrupar e contar documentos',
      language: 'javascript',
      code: 'db.collection("users").aggregate([\n  { $group: { _id: "$age", total: { $sum: 1 } } }\n]).toArray((err, result) => {\n  console.log(result);\n});'
    },
    {
      id: 'nosql-7',
      title: 'Índices',
      description: 'Criar um índice para otimizar consultas',
      language: 'javascript',
      code: 'db.collection("users").createIndex({ email: 1 });'
    },
    {
      id: 'nosql-8',
      title: 'Transações',
      description: 'Executar operações em uma transação',
      language: 'javascript',
      code: 'const session = db.startSession();\nsession.startTransaction();\ntry {\n  const users = db.collection("users");\n  users.insertOne({ name: "Alice", age: 25 }, { session });\n  users.insertOne({ name: "Bob", age: 30 }, { session });\n  await session.commitTransaction();\n} catch (error) {\n  await session.abortTransaction();\n} finally {\n  session.endSession();\n}'
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
      },
      {
        id: 'jquery-4',
        title: 'Manipulação de Formulários',
        description: 'Capturar e validar dados de formulários',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#meuFormulario").submit(function(event) {\n    event.preventDefault(); // Evitar o envio padrão\n    const nome = $("#nome").val();\n    const email = $("#email").val();\n    \n    if (nome && email) {\n      alert("Formulário enviado com sucesso!");\n    } else {\n      alert("Por favor, preencha todos os campos.");\n    }\n  });\n});'
      },
      {
        id: 'jquery-5',
        title: 'Requisições AJAX',
        description: 'Fazer uma requisição AJAX com jQuery',
        language: 'javascript',
        code: '$.ajax({\n  url: "https://api.example.com/data",\n  method: "GET",\n  success: function(response) {\n    console.log("Dados recebidos:", response);\n  },\n  error: function(err) {\n    console.error("Erro na requisição:", err);\n  }\n});'
      },
      {
        id: 'jquery-6',
        title: 'Manipulação de Listas',
        description: 'Adicionar e remover itens de uma lista',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#adicionarItem").click(function() {\n    const novoItem = $("#novoItem").val();\n    if (novoItem) {\n      $("#minhaLista").append(`<li>${novoItem}</li>`);\n      $("#novoItem").val(""); // Limpar o campo\n    }\n  });\n\n  $("#minhaLista").on("click", "li", function() {\n    $(this).remove(); // Remover item clicado\n  });\n});'
      },
      {
        id: 'jquery-7',
        title: 'Efeitos de Fade',
        description: 'Aplicar efeitos de fade (desvanecimento)',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#fadeIn").click(function() {\n    $("#caixa").fadeIn(1000); // Aparecer em 1 segundo\n  });\n\n  $("#fadeOut").click(function() {\n    $("#caixa").fadeOut(1000); // Desaparecer em 1 segundo\n  });\n\n  $("#fadeToggle").click(function() {\n    $("#caixa").fadeToggle(1000); // Alternar entre aparecer e desaparecer\n  });\n});'
      },
      {
        id: 'jquery-8',
        title: 'Plugins jQuery',
        description: 'Usar um plugin jQuery para validação de formulários',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#meuFormulario").validate({\n    rules: {\n      nome: "required",\n      email: {\n        required: true,\n        email: true\n      }\n    },\n    messages: {\n      nome: "Por favor, insira seu nome",\n      email: "Por favor, insira um e-mail válido"\n    },\n    submitHandler: function(form) {\n      alert("Formulário válido e enviado!");\n      form.submit();\n    }\n  });\n});'
      },
      {
        id: 'jquery-9',
        title: 'Manipulação de Tabelas',
        description: 'Adicionar e remover linhas de uma tabela',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#adicionarLinha").click(function() {\n    const nome = $("#nome").val();\n    const idade = $("#idade").val();\n    if (nome && idade) {\n      $("#minhaTabela tbody").append(`<tr><td>${nome}</td><td>${idade}</td></tr>`);\n      $("#nome, #idade").val(""); // Limpar campos\n    }\n  });\n\n  $("#minhaTabela").on("click", "tr", function() {\n    $(this).remove(); // Remover linha clicada\n  });\n});'
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
    },
    {
      id: 'java-4',
      title: 'Herança',
      description: 'Exemplo de herança em Java',
      language: 'java',
      code: 'class Animal {\n  void eat() {\n    System.out.println("Eating...");\n  }\n}\n\nclass Dog extends Animal {\n  void bark() {\n    System.out.println("Barking...");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog dog = new Dog();\n    dog.eat();\n    dog.bark();\n  }\n}'
    },
    {
      id: 'java-5',
      title: 'Interface',
      description: 'Definir e implementar uma interface',
      language: 'java',
      code: 'interface Animal {\n  void makeSound();\n}\n\nclass Dog implements Animal {\n  public void makeSound() {\n    System.out.println("Woof!");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog dog = new Dog();\n    dog.makeSound();\n  }\n}'
    },
    {
      id: 'java-6',
      title: 'Tratamento de Exceções',
      description: 'Capturar e tratar exceções',
      language: 'java',
      code: 'public class Main {\n  public static void main(String[] args) {\n    try {\n      int[] numbers = {1, 2, 3};\n      System.out.println(numbers[5]);\n    } catch (Exception e) {\n      System.out.println("Erro: " + e.getMessage());\n    }\n  }\n}'
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
    },
    {
      id: 'kotlin-4',
      title: 'Herança',
      description: 'Exemplo de herança em Kotlin',
      language: 'kotlin',
      code: 'open class Animal {\n  open fun makeSound() {\n    println("Animal sound")\n  }\n}\n\nclass Dog : Animal() {\n  override fun makeSound() {\n    println("Woof!")\n  }\n}\n\nfun main() {\n  val dog = Dog()\n  dog.makeSound()\n}'
    },
    {
      id: 'kotlin-5',
      title: 'Extensions',
      description: 'Adicionar funções a classes existentes',
      language: 'kotlin',
      code: 'fun String.isPalindrome(): Boolean {\n  return this == this.reversed()\n}\n\nfun main() {\n  val word = "racecar"\n  println("Is palindrome? ${word.isPalindrome()}") // true\n}'
    },
    {
      id: 'kotlin-6',
      title: 'Coroutines',
      description: 'Executar tarefas assíncronas com coroutines',
      language: 'kotlin',
      code: 'import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n  launch {\n    delay(1000L)\n    println("World!")\n  }\n  println("Hello,")\n}'
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
    },
    {
      id: 'json-4',
      title: 'Manipulação de JSON em Python',
      description: 'Ler e escrever JSON em Python',
      language: 'python',
      code: 'import json\n\ndata = {\n  "name": "John",\n  "age": 30\n}\n\n# Converter para JSON\njson_string = json.dumps(data)\nprint(json_string)\n\n# Ler JSON\nparsed_data = json.loads(json_string)\nprint(parsed_data["name"])'
    },
    {
      id: 'json-5',
      title: 'Validação com JSON Schema',
      description: 'Validar JSON com JSON Schema',
      language: 'json',
      code: '{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "name": { "type": "string" },\n    "age": { "type": "number" }\n  },\n  "required": ["name", "age"]\n}'
    },
    {
      id: 'json-6',
      title: 'JSON em APIs REST',
      description: 'Enviar e receber JSON em uma API REST',
      language: 'javascript',
      code: 'fetch("https://api.example.com/data", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({ name: "John", age: 30 })\n})\n.then(response => response.json())\n.then(data => console.log(data));'
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
    },
    {
      id: 'apis-4',
      title: 'Autenticação com JWT',
      description: 'Implementar autenticação com JWT',
      language: 'javascript',
      code: 'const jwt = require("jsonwebtoken");\n\nconst token = jwt.sign({ userId: 123 }, "secretKey", { expiresIn: "1h" });\nconsole.log(token);'
    },
    {
      id: 'apis-5',
      title: 'Documentação com Swagger',
      description: 'Documentar uma API com Swagger',
      language: 'yaml',
      code: 'openapi: 3.0.0\ninfo:\n  title: Sample API\n  version: 1.0.0\npaths:\n  /users:\n    get:\n      summary: List all users\n      responses:\n        "200":\n          description: A list of users'
    },
    {
      id: 'apis-6',
      title: 'Testes de API com Postman',
      description: 'Criar e executar testes de API no Postman',
      language: 'javascript',
      code: 'pm.test("Status code is 200", function () {\n  pm.response.to.have.status(200);\n});'
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
    },
    {
      id: 'php-4',
      title: 'Sessões em PHP',
      description: 'Gerenciar sessões de usuário',
      language: 'php',
      code: '<?php\nsession_start();\n\n// Armazenar dados na sessão\n$_SESSION["username"] = "JohnDoe";\n\n// Recuperar dados da sessão\necho "Welcome, " . $_SESSION["username"];\n?>'
    },
    {
      id: 'php-5',
      title: 'Manipulação de Arquivos',
      description: 'Ler e escrever arquivos em PHP',
      language: 'php',
      code: '<?php\n$file = "example.txt";\n\n// Escrever no arquivo\nfile_put_contents($file, "Hello, World!");\n\n// Ler o arquivo\necho file_get_contents($file);\n?>'
    },
    {
      id: 'php-6',
      title: 'Autoloading de Classes',
      description: 'Carregar classes automaticamente',
      language: 'php',
      code: '<?php\nspl_autoload_register(function ($class_name) {\n  include $class_name . ".php";\n});\n\n$obj = new MyClass();\n?>'
    },
    {
      id: 'php-7',
      title: 'Manipulação de JSON',
      description: 'Codificar e decodificar JSON em PHP',
      language: 'php',
      code: '<?php\n$data = array("name" => "John", "age" => 30);\n$json = json_encode($data);\necho $json; // {"name":"John","age":30}\n\n$decoded = json_decode($json, true);\nprint_r($decoded); // Array ( [name] => John [age] => 30 )\n?>'
    },
    {
      id: 'php-8',
      title: 'Tratamento de Exceções',
      description: 'Capturar e tratar exceções em PHP',
      language: 'php',
      code: '<?php\nfunction divide($a, $b) {\n  if ($b == 0) {\n    throw new Exception("Division by zero");\n  }\n  return $a / $b;\n}\n\ntry {\n  echo divide(10, 0);\n} catch (Exception $e) {\n  echo "Erro: " . $e->getMessage();\n}\n?>'
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
    },
    {
      id: 'csharp-4',
      title: 'Propriedades Automáticas',
      description: 'Uso de propriedades automáticas em C#',
      language: 'csharp',
      code: 'class Person {\n  public string Name { get; set; }\n  public int Age { get; set; }\n\n  public void Display() {\n    Console.WriteLine($"Name: {Name}, Age: {Age}");\n  }\n}\n\nclass Program {\n  static void Main() {\n    Person person = new Person { Name: "Alice", Age: 25 };\n    person.Display();\n  }\n}'
    },
    {
      id: 'csharp-5',
      title: 'Exceções',
      description: 'Tratamento de exceções em C#',
      language: 'csharp',
      code: 'using System;\n\nclass Program {\n  static void Main() {\n    try {\n      int divisor = 0;\n      int result = 10 / divisor;\n    } catch (DivideByZeroException e) {\n      Console.WriteLine("Erro: Divisão por zero.");\n    }\n  }\n}'
    },
    {
      id: 'csharp-6',
      title: 'Herança',
      description: 'Exemplo de herança em C#',
      language: 'csharp',
      code: 'class Animal {\n  public string Name { get; set; }\n  public void Speak() {\n    Console.WriteLine($"{Name} faz um som.");\n  }\n}\n\nclass Dog : Animal {\n  public void Bark() {\n    Console.WriteLine($"{Name} late.");\n  }\n}\n\nclass Program {\n  static void Main() {\n    Dog dog = new Dog { Name: "Rex" };\n    dog.Speak();\n    dog.Bark();\n  }\n}'
    },
    {
      id: 'csharp-7',
      title: 'Coleções Genéricas',
      description: 'Uso de coleções genéricas em C#',
      language: 'csharp',
      code: 'using System;\nusing System.Collections.Generic;\n\nclass Program {\n  static void Main() {\n    List<string> names = new List<string> { "Alice", "Bob", "Charlie" };\n\n    foreach (string name in names) {\n      Console.WriteLine(name);\n    }\n  }\n}'
    },
    {
      id: 'csharp-8',
      title: 'Eventos',
      description: 'Uso de eventos em C#',
      language: 'csharp',
      code: 'using System;\n\nclass Publisher {\n  public event Action OnChange;\n\n  public void RaiseEvent() {\n    if (OnChange != null) {\n      OnChange();\n    }\n  }\n}\n\nclass Subscriber {\n  public void Subscribe(Publisher publisher) {\n    publisher.OnChange += () => Console.WriteLine("Evento disparado!");\n  }\n}\n\nclass Program {\n  static void Main() {\n    Publisher publisher = new Publisher();\n    Subscriber subscriber = new Subscriber();\n    subscriber.Subscribe(publisher);\n\n    publisher.RaiseEvent();\n  }\n}'
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
    },
    {
      id: 'cpp-4',
      title: 'Herança',
      description: 'Exemplo de herança em C++',
      language: 'cpp',
      code: '#include <iostream>\n\nclass Animal {\npublic:\n  void speak() {\n    std::cout << "Animal faz um som." << std::endl;\n  }\n};\n\nclass Dog : public Animal {\npublic:\n  void bark() {\n    std::cout << "Dog late." << std::endl;\n  }\n};\n\nint main() {\n  Dog myDog;\n  myDog.speak();\n  myDog.bark();\n  return 0;\n}'
    },
    {
      id: 'cpp-5',
      title: 'Ponteiros',
      description: 'Uso de ponteiros em C++',
      language: 'cpp',
      code: '#include <iostream>\n\nint main() {\n  int value = 10;\n  int* ptr = &value;\n\n  std::cout << "Value: " << value << std::endl;\n  std::cout << "Pointer: " << ptr << std::endl;\n  std::cout << "Dereferenced Pointer: " << *ptr << std::endl;\n\n  return 0;\n}'
    },
    {
      id: 'cpp-6',
      title: 'Sobrecarga de Operadores',
      description: 'Exemplo de sobrecarga de operadores em C++',
      language: 'cpp',
      code: '#include <iostream>\n\nclass Complex {\npublic:\n  int real, imag;\n  Complex(int r = 0, int i = 0) : real(r), imag(i) {}\n\n  Complex operator + (const Complex& obj) {\n    Complex res;\n    res.real = real + obj.real;\n    res.imag = imag + obj.imag;\n    return res;\n  }\n};\n\nint main() {\n  Complex c1(3, 4), c2(1, 2);\n  Complex c3 = c1 + c2;\n  std::cout << "Result: " << c3.real << " + " << c3.imag << "i" << std::endl;\n  return 0;\n}'
    },
    {
      id: 'cpp-7',
      title: 'Template de Função',
      description: 'Uso de template de função em C++',
      language: 'cpp',
      code: '#include <iostream>\n\ntemplate <typename T>\nT max(T a, T b) {\n  return (a > b) ? a : b;\n}\n\nint main() {\n  std::cout << "Max(10, 20): " << max(10, 20) << std::endl;\n  std::cout << "Max(1.5, 2.5): " << max(1.5, 2.5) << std::endl;\n  return 0;\n}'
    },
    {
      id: 'cpp-8',
      title: 'Exceções',
      description: 'Tratamento de exceções em C++',
      language: 'cpp',
      code: '#include <iostream>\n\nint main() {\n  try {\n    int divisor = 0;\n    if (divisor == 0) {\n      throw "Divisão por zero!";\n    }\n    int result = 10 / divisor;\n  } catch (const char* e) {\n    std::cout << "Erro: " << e << std::endl;\n  }\n\n  return 0;\n}'
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
    },
    {
      id: 'android-4',
      title: 'Intent Explícita',
      description: 'Usar uma Intent explícita para iniciar uma nova Activity',
      language: 'java',
      code: 'Intent intent = new Intent(this, SecondActivity.class);\nstartActivity(intent);'
    },
    {
      id: 'android-5',
      title: 'RecyclerView',
      description: 'Configurar um RecyclerView com um LayoutManager e Adapter',
      language: 'java',
      code: 'RecyclerView recyclerView = findViewById(R.id.recyclerView);\nrecyclerView.setLayoutManager(new LinearLayoutManager(this));\nrecyclerView.setAdapter(new MyAdapter(myDataset));'
    },
    {
      id: 'android-6',
      title: 'Menu de Opções',
      description: 'Criar um menu de opções para uma Activity',
      language: 'java',
      code: 'public boolean onCreateOptionsMenu(Menu menu) {\n  MenuInflater inflater = getMenuInflater();\n  inflater.inflate(R.menu.options_menu, menu);\n  return true;\n}'
    },
    {
      id: 'android-7',
      title: 'SharedPreferences',
      description: 'Salvar e recuperar dados usando SharedPreferences',
      language: 'java',
      code: 'SharedPreferences sharedPref = getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);\nSharedPreferences.Editor editor = sharedPref.edit();\neditor.putString("key", "value");\neditor.apply();\n\nString value = sharedPref.getString("key", "default");'
    },
    {
      id: 'android-8',
      title: 'Fragmento',
      description: 'Criar e adicionar um Fragmento a uma Activity',
      language: 'java',
      code: 'FragmentManager fragmentManager = getSupportFragmentManager();\nFragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();\nMyFragment fragment = new MyFragment();\nfragmentTransaction.add(R.id.fragment_container, fragment);\nfragmentTransaction.commit();'
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
    },
    {
      id: 'virus-4',
      title: 'Phishing',
      description: 'Como se proteger contra ataques de phishing',
      language: 'markdown',
      code: '- Desconfie de e-mails e mensagens que pedem informações pessoais.\n- Verifique a URL do site antes de inserir dados sensíveis.\n- Use autenticação de dois fatores sempre que possível.\n- Não clique em links de remetentes desconhecidos.'
    },
    {
      id: 'virus-5',
      title: 'Firewall',
      description: 'Configurar e usar um firewall',
      language: 'markdown',
      code: '1. Ative o firewall do sistema operacional.\n2. Configure regras para permitir ou bloquear tráfego específico.\n3. Monitore os logs do firewall para detectar atividades suspeitas.\n4. Use firewalls de hardware para proteção adicional em redes grandes.'
    },
    {
      id: 'virus-6',
      title: 'VPN',
      description: 'Usar uma VPN para proteger sua conexão',
      language: 'markdown',
      code: '- Escolha um provedor de VPN confiável.\n- Ative a VPN sempre que usar redes Wi-Fi públicas.\n- Verifique se a VPN usa criptografia forte.\n- Mantenha o software da VPN atualizado.'
    },
    {
      id: 'virus-7',
      title: 'Ataques de Engenharia Social',
      description: 'Identificar e evitar ataques de engenharia social',
      language: 'markdown',
      code: '- Não revele informações sensíveis a desconhecidos.\n- Desconfie de pedidos urgentes de ajuda ou dinheiro.\n- Verifique a identidade da pessoa antes de fornecer informações.\n- Treine funcionários para reconhecer e evitar esses ataques.'
    },
    {
      id: 'virus-8',
      title: 'Atualizações de Software',
      description: 'A importância de manter software atualizado',
      language: 'markdown',
      code: '1. Ative atualizações automáticas sempre que possível.\n2. Verifique regularmente por atualizações de software.\n3. Mantenha não apenas o sistema operacional, mas todos os aplicativos atualizados.\n4. Remova software desatualizado e não utilizado.'
    }
  ]
}
];
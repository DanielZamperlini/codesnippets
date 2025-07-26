import {
  Terminal,
  Cpu,
  Layers,
  FileCode,
  Database,
  Globe,
  Palette,
  Box,
  GitBranch,
  Server,
  Package,
  Grid,
  Table,
  Disc,
  Braces,
  AppWindow,
  Cloudy,
  HardDrive,
} from 'lucide-react';
interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  documentation: string;
  tutorials: { title: string; url: string }[];
  snippets: CodeSnippet[];
}

export const categories: Category[] = [
  {
    id: 'react',
    name: 'React',
    icon: <Cpu size={24} className="text-cyan-400" />,
    description:
      'Biblioteca JavaScript para construção de interfaces de usuário',
    documentation: 'https://reactjs.org/docs/getting-started.html',
    tutorials: [
      {
        title: 'Tutorial React',
        url: 'https://reactjs.org/tutorial/tutorial.html',
      },
      {
        title: 'React Hooks',
        url: 'https://reactjs.org/docs/hooks-intro.html',
      },
    ],
    snippets: [
      {
        id: 'react-1',
        title: 'Criar Projeto React',
        description: 'Inicializar um novo projeto React com Create React App',
        language: 'bash',
        code: 'npx create-react-app my-app\ncd my-app\nnpm start',
      },
      {
        id: 'react-2',
        title: 'Componente Funcional',
        description: 'Criar um componente React funcional com props',
        language: 'jsx',
        code: 'import React from "react";\n\nfunction MyComponent({ name }) {\n  return (\n    <div>\n      <h1>Hello, {name}!</h1>\n    </div>\n  );\n}\n\nexport default MyComponent;',
      },
      {
        id: 'react-3',
        title: 'Hook useState',
        description: 'Gerenciar estado em um componente funcional',
        language: 'jsx',
        code: 'import React, { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Você clicou {count} vezes</p>\n      <button onClick={() => setCount(count + 1)}>\n        Clique aqui\n      </button>\n    </div>\n  );\n}',
      },
      {
        id: 'react-4',
        title: 'Hook useEffect',
        description: 'Executar efeitos colaterais em componentes funcionais',
        language: 'jsx',
        code: 'import React, { useState, useEffect } from "react";\n\nfunction DataFetcher({ url }) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then((response) => response.json())\n      .then((data) => setData(data));\n  }, [url]);\n\n  if (!data) return <div>Loading...</div>;\n  return <div>{JSON.stringify(data)}</div>;\n}',
      },
      {
        id: 'react-5',
        title: 'Props e State',
        description: 'Passar props e gerenciar state em componentes',
        language: 'jsx',
        code: 'import React, { useState } from "react";\n\nfunction ParentComponent() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h1>Contador: {count}</h1>\n      <ChildComponent increment={() => setCount(count + 1)} />\n    </div>\n  );\n}\n\nfunction ChildComponent({ increment }) {\n  return <button onClick={increment}>Incrementar</button>;\n}',
      },
      {
        id: 'react-6',
        title: 'Context API',
        description: 'Usar Context API para gerenciar estado global',
        language: 'jsx',
        code: 'import React, { createContext, useContext, useState } from "react";\n\nconst MyContext = createContext();\n\nfunction MyProvider({ children }) {\n  const [value, setValue] = useState("Hello, World!");\n\n  return (\n    <MyContext.Provider value={{ value, setValue }}>\n      {children}\n    </MyContext.Provider>\n  );\n}\n\nfunction MyComponent() {\n  const { value, setValue } = useContext(MyContext);\n\n  return (\n    <div>\n      <p>{value}</p>\n      <button onClick={() => setValue("New Value")}>Change Value</button>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <MyProvider>\n      <MyComponent />\n    </MyProvider>\n  );\n}',
      },
      {
        id: 'react-7',
        title: 'useReducer Hook',
        description: 'Gerenciar estado complexo com o hook useReducer',
        language: 'jsx',
        code: 'import React, { useReducer } from "react";\n\nconst initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n    </div>\n  );\n}',
      },
      {
        id: 'react-8',
        title: 'useRef Hook',
        description: 'Manipular elementos DOM diretamente com useRef',
        language: 'jsx',
        code: 'import React, { useRef } from "react";\n\nfunction TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n  const onButtonClick = () => {\n    inputEl.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputEl} type="text" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </div>\n  );\n}',
      },
      {
        id: 'react-9',
        title: 'useMemo Hook',
        description: 'Otimizar desempenho ao memorizar valores calculados',
        language: 'jsx',
        code: 'import React, { useMemo, useState } from "react";\n\nfunction ExpensiveCalculation({ num }) {\n  const calculate = useMemo(() => {\n    return num * num;\n  }, [num]);\n\n  return <div>Resultado: {calculate}</div>;\n}',
      },
      {
        id: 'react-10',
        title: 'Renderização Condicional',
        description: 'Renderizar componentes com base em condições',
        language: 'jsx',
        code: 'import React from "react";\n\nfunction ConditionalRendering({ isLoggedIn }) {\n  return <div>{isLoggedIn ? "Bem-vindo de volta!" : "Faça login, por favor."}</div>;\n}',
      },
      {
        id: 'react-11',
        title: 'Lista de Componentes',
        description: 'Gerar uma lista de itens usando map()',
        language: 'jsx',
        code: 'import React from "react";\n\nfunction ItemList({ items }) {\n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}',
      },
      {
        id: 'react-12',
        title: 'useCallback Hook',
        description: 'Memorizar funções para otimizar desempenho',
        language: 'jsx',
        code: 'import React, { useCallback } from "react";\n\nfunction CallbackExample({ onClick }) {\n  const handleClick = useCallback(() => {\n    onClick();\n  }, [onClick]);\n\n  return <button onClick={handleClick}>Clique aqui</button>;\n}',
      },
      {
        id: 'react-13',
        title: 'Fragmentos',
        description: 'Usar fragmentos para evitar elementos extras no DOM',
        language: 'jsx',
        code: 'import React from "react";\n\nfunction FragmentExample() {\n  return (\n    <>\n      <h1>Bem-vindo!</h1>\n      <p>Isso é um exemplo de fragmento.</p>\n    </>\n  );\n}',
      },
      {
        id: 'react-14',
        title: 'Portal',
        description: 'Renderizar um componente fora da hierarquia do DOM',
        language: 'jsx',
        code: 'import React from "react";\nimport ReactDOM from "react-dom";\n\nfunction PortalExample() {\n  return ReactDOM.createPortal(\n    <div>Eu estou fora do DOM principal!</div>,\n    document.body\n  );\n}',
      },
      {
        id: 'react-15',
        title: 'Prop Types',
        description: 'Validar props de componentes',
        language: 'jsx',
        code: 'import React from "react";\nimport PropTypes from "prop-types";\n\nfunction Greeting({ name }) {\n  return <h1>Olá, {name}!</h1>;\n}\n\nGreeting.propTypes = {\n  name: PropTypes.string.isRequired,\n};\n\nexport default Greeting;',
      },
      {
        id: 'react-16',
        title: 'Lazy Loading',
        description: 'Carregar componentes sob demanda usando React.lazy',
        language: 'jsx',
        code: 'import React, { Suspense } from "react";\nconst LazyComponent = React.lazy(() => import("./LazyComponent"));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n}',
      },
      {
        id: 'react-17',
        title: 'Error Boundary',
        description: 'Lidar com erros em componentes usando Error Boundaries',
        language: 'jsx',
        code: 'import React from "react";\n\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Algo deu errado.</h1>;\n    }\n\n    return this.props.children;\n  }\n}\n\nexport default ErrorBoundary;',
      },
      {
        id: 'react-18',
        title: 'Forward Ref',
        description: 'Encaminhar refs para componentes filhos',
        language: 'jsx',
        code: 'import React, { forwardRef } from "react";\n\nconst MyInput = forwardRef((props, ref) => (\n  <input ref={ref} {...props} />\n));\n\nexport default MyInput;',
      },
      {
        id: 'react-19',
        title: 'Custom Hook',
        description: 'Criar um hook personalizado para reutilizar lógica',
        language: 'jsx',
        code: 'import { useState, useEffect } from "react";\n\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then((response) => response.json())\n      .then((data) => setData(data));\n  }, [url]);\n\n  return data;\n}\n\nexport default useFetch;',
      },
      {
        id: 'react-20',
        title: 'Animações com CSSTransition',
        description: 'Adicionar transições com react-transition-group',
        language: 'jsx',
        code: 'import React, { useState } from "react";\nimport { CSSTransition } from "react-transition-group";\nimport "./styles.css";\n\nfunction AnimationExample() {\n  const [inProp, setInProp] = useState(false);\n\n  return (\n    <div>\n      <CSSTransition in={inProp} timeout={200} classNames="fade">\n        <div className="fade">Eu sou animado!</div>\n      </CSSTransition>\n      <button onClick={() => setInProp(!inProp)}>Toggle</button>\n    </div>\n  );\n}\n\nexport default AnimationExample;',
      },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    icon: <FileCode size={24} className="text-yellow-400" />,
    description:
      'Linguagem de programação de alto nível para desenvolvimento rápido e eficiente',
    documentation: 'https://docs.python.org/3/',
    tutorials: [
      { title: 'Python Documentation', url: 'https://docs.python.org/3/' },
      {
        title: 'Python Tutorial (W3Schools)',
        url: 'https://www.w3schools.com/python/',
      },
    ],
    snippets: [
      {
        id: 'python-1',
        title: 'Hello World',
        description: 'Programa básico em Python',
        language: 'python',
        code: 'print("Hello, World!")',
      },
      {
        id: 'python-2',
        title: 'Variáveis e Tipos',
        description: 'Declaração de variáveis e tipos de dados',
        language: 'python',
        code: '# Tipos básicos\nnome = "João"  # String\nidade = 25     # Inteiro\naltura = 1.75  # Float\ne_casado = False  # Booleano\n\nprint(type(nome), type(idade), type(altura), type(e_casado))',
      },
      {
        id: 'python-3',
        title: 'Condicionais (if-elif-else)',
        description: 'Estruturas condicionais em Python',
        language: 'python',
        code: 'idade = 18\n\nif idade < 12:\n    print("Criança")\nelif idade < 18:\n    print("Adolescente")\nelif idade < 60:\n    print("Adulto")\nelse:\n    print("Idoso")',
      },
      {
        id: 'python-4',
        title: 'Loops (for e while)',
        description: 'Estruturas de repetição em Python',
        language: 'python',
        code: '# Loop for\nfor i in range(5):\n    print(i)\n\n# Loop while\ncontador = 0\nwhile contador < 5:\n    print(contador)\n    contador += 1',
      },
      {
        id: 'python-5',
        title: 'Listas',
        description: 'Trabalhando com listas em Python',
        language: 'python',
        code: '# Criando uma lista\nfrutas = ["maçã", "banana", "laranja"]\n\n# Acessando elementos\nprint(frutas[1])  # banana\n\n# Adicionando elementos\nfrutas.append("uva")\n\n# Iterando sobre a lista\nfor fruta in frutas:\n    print(fruta)',
      },
      {
        id: 'python-6',
        title: 'Dicionários',
        description: 'Trabalhando com dicionários em Python',
        language: 'python',
        code: '# Criando um dicionário\npessoa = {\n    "nome": "Maria",\n    "idade": 30,\n    "cidade": "São Paulo"\n}\n\n# Acessando valores\nprint(pessoa["nome"])\n\n# Adicionando novo par chave-valor\npessoa["profissão"] = "Engenheira"\n\n# Iterando sobre o dicionário\nfor chave, valor in pessoa.items():\n    print(f"{chave}: {valor}")',
      },
      {
        id: 'python-7',
        title: 'Funções',
        description: 'Definindo e chamando funções',
        language: 'python',
        code: '# Função simples\ndef saudacao(nome):\n    return f"Olá, {nome}!"\n\n# Chamando a função\nmensagem = saudacao("Carlos")\nprint(mensagem)\n\n# Função com valor padrão\ndef potencia(base, expoente=2):\n    return base ** expoente\n\nprint(potencia(3))  # 9\nprint(potencia(3, 3))  # 27',
      },
      {
        id: 'python-8',
        title: 'Manipulação de Arquivos',
        description: 'Lendo e escrevendo em arquivos',
        language: 'python',
        code: '# Escrevendo em um arquivo\nwith open("arquivo.txt", "w") as arquivo:\n    arquivo.write("Primeira linha\\n")\n    arquivo.write("Segunda linha\\n")\n\n# Lendo de um arquivo\nwith open("arquivo.txt", "r") as arquivo:\n    conteudo = arquivo.read()\n    print(conteudo)',
      },
      {
        id: 'python-9',
        title: 'Tratamento de Exceções',
        description: 'Capturando e tratando exceções',
        language: 'python',
        code: 'try:\n    numero = int(input("Digite um número: "))\n    resultado = 10 / numero\n    print(resultado)\nexcept ValueError:\n    print("Por favor, digite um número válido!")\nexcept ZeroDivisionError:\n    print("Não é possível dividir por zero!")\nexcept Exception as e:\n    print(f"Ocorreu um erro: {e}")',
      },
      {
        id: 'python-10',
        title: 'List Comprehensions',
        description: 'Criando listas de forma concisa',
        language: 'python',
        code: '# List comprehension básica\nquadrados = [x**2 for x in range(10)]\nprint(quadrados)\n\n# Com condicional\npares = [x for x in range(20) if x % 2 == 0]\nprint(pares)',
      },
      {
        id: 'python-11',
        title: 'Funções Lambda',
        description: 'Funções anônimas em Python',
        language: 'python',
        code: '# Função lambda simples\ndobro = lambda x: x * 2\nprint(dobro(5))  # 10\n\n# Usando com map\nnumeros = [1, 2, 3, 4]\nquadrados = list(map(lambda x: x**2, numeros))\nprint(quadrados)  # [1, 4, 9, 16]',
      },
      {
        id: 'python-12',
        title: 'Classes e Objetos',
        description: 'Programação Orientada a Objetos em Python',
        language: 'python',
        code: 'class Pessoa:\n    def __init__(self, nome, idade):\n        self.nome = nome\n        self.idade = idade\n    \n    def apresentar(self):\n        return f"Meu nome é {self.nome} e tenho {self.idade} anos."\n\n# Criando um objeto\np1 = Pessoa("Ana", 28)\nprint(p1.apresentar())',
      },
      {
        id: 'python-13',
        title: 'Herança',
        description: 'Herança em classes Python',
        language: 'python',
        code: 'class Animal:\n    def __init__(self, nome):\n        self.nome = nome\n    \n    def fazer_som(self):\n        return "Som genérico"\n\nclass Cachorro(Animal):\n    def fazer_som(self):\n        return "Au au!"\n\nanimal = Animal("Genérico")\ncachorro = Cachorro("Rex")\n\nprint(animal.fazer_som())  # Som genérico\nprint(cachorro.fazer_som())  # Au au!',
      },
      {
        id: 'python-14',
        title: 'Módulos e Importação',
        description: 'Trabalhando com módulos em Python',
        language: 'python',
        code: '# Importando um módulo completo\nimport math\n\nprint(math.sqrt(16))  # 4.0\n\n# Importando funções específicas\nfrom math import pi, cos\n\nprint(cos(pi))  # -1.0\n\n# Criando e usando seu próprio módulo\n# (arquivo meu_modulo.py)\n# def saudacao():\n#     return "Olá do módulo!"\n# \n# from meu_modulo import saudacao\n# print(saudacao())',
      },
      {
        id: 'python-15',
        title: 'Manipulação de Strings',
        description: 'Operações comuns com strings',
        language: 'python',
        code: 'texto = " Python é incrível "\n\n# Métodos de string\nprint(texto.strip())  # Remove espaços extras\nprint(texto.lower())  # Tudo em minúsculo\nprint(texto.upper())  # Tudo em maiúsculo\nprint(texto.replace("incrível", "fantástico"))\nprint("é" in texto)  # Verifica se substring existe\nprint(texto.split())  # Divide em lista de palavras',
      },
      {
        id: 'python-16',
        title: 'Datas e Horas',
        description: 'Trabalhando com datas em Python',
        language: 'python',
        code: 'from datetime import datetime, timedelta\n\n# Data atual\nagora = datetime.now()\nprint(agora)\nprint(agora.strftime("%d/%m/%Y %H:%M:%S"))\n\n# Criando uma data específica\ndata = datetime(2023, 12, 31)\nprint(data)\n\n# Operações com datas\ndiferenca = data - agora\nprint(diferenca.days)\n\n# Adicionando dias\nnova_data = agora + timedelta(days=7)\nprint(nova_data)',
      },
      {
        id: 'python-17',
        title: 'Trabalhando com JSON',
        description: 'Codificando e decodificando JSON',
        language: 'python',
        code: 'import json\n\n# Dicionário para JSON\npessoa = {\n    "nome": "Carlos",\n    "idade": 35,\n    "cidade": "Rio de Janeiro"\n}\n\njson_str = json.dumps(pessoa, indent=2)\nprint(json_str)\n\n# JSON para dicionário\npessoa_dict = json.loads(json_str)\nprint(pessoa_dict["nome"])',
      },
      {
        id: 'python-18',
        title: 'Expressões Regulares',
        description: 'Busca de padrões com regex',
        language: 'python',
        code: 'import re\n\n# Buscando um padrão\ntexto = "Meu telefone é (21) 98765-4321 e meu email é exemplo@email.com"\n\n# Encontrar telefone\npadrao_tel = r"\\(\\d{2}\\) \\d{5}-\\d{4}"\ntelefone = re.search(padrao_tel, texto)\nprint(telefone.group()) if telefone else print("Não encontrado")\n\n# Encontrar todos os emails\nemails = re.findall(r"[\\w.-]+@[\\w.-]+\\.\\w+", texto)\nprint(emails)',
      },
      {
        id: 'python-19',
        title: 'Geradores',
        description: 'Criando e usando geradores',
        language: 'python',
        code: '# Função geradora\ndef gerador_pares(limite):\n    num = 0\n    while num < limite:\n        yield num\n        num += 2\n\n# Usando o gerador\nfor par in gerador_pares(10):\n    print(par)\n\n# Expressão geradora\nquadrados = (x**2 for x in range(5))\nprint(list(quadrados))',
      },
      {
        id: 'python-20',
        title: 'Decoradores',
        description: 'Criando e usando decoradores',
        language: 'python',
        code: '# Decorador simples\ndef meu_decorador(funcao):\n    def wrapper():\n        print("Antes da função")\n        funcao()\n        print("Depois da função")\n    return wrapper\n\n@meu_decorador\ndef dizer_ola():\n    print("Olá!")\n\ndizer_ola()\n\n# Decorador com argumentos\ndef decorador_com_args(funcao):\n    def wrapper(*args, **kwargs):\n        print(f"Chamando {funcao.__name__} com args: {args}, kwargs: {kwargs}")\n        return funcao(*args, **kwargs)\n    return wrapper\n\n@decorador_com_args\n def somar(a, b):\n    return a + b\n\nprint(somar(3, 5))',
      },
      {
        id: 'python-21',
        title: 'Ordem de precedência',
        description: 'Detalhes da Precedência:',
        language: 'python',
        code: 'Em Python, a ordem de precedência (ou prioridade) dos operadores determina a sequência em que as operações são realizadas em uma expressão.\n A regra PEMDAS (Parênteses, Expoentes, Multiplicação e Divisão, Adição e Subtração) ajuda a lembrar essa ordem.\n Operadores dentro de parênteses são avaliados primeiro, seguido de exponenciação, multiplicação/divisão, e por fim, adição/subtração.\n\n Detalhes da Precedência:\n1. Parênteses: ()\nOperadores dentro de parênteses têm a maior precedência e são avaliados primeiro.\n2. Expoentes: **\nO operador de exponenciação (**) tem a próxima maior precedência.\n3. Multiplicação, Divisão, Módulo e Divisão inteira: *, /, %, //\nEstes operadores (*, /, %, //) têm a mesma precedência e são avaliados da esquerda para a direita. \n4. Adição e Subtração: + e -\nEstes operadores (+, -) têm a precedência mais baixa e são avaliados da esquerda para a direita.\n ',
      },
    ],
  },
  {
    id: 'logica-programacao',
    name: 'Lógica de Programação',
    icon: <Cpu size={24} className="text-blue-500" />,
    description:
      'Conceitos fundamentais e técnicas para resolver problemas de programação',
    documentation: 'https://en.wikipedia.org/wiki/Programming_logic',
    tutorials: [
      {
        title: 'Lógica de Programação para Iniciantes',
        url: 'https://www.alura.com.br/artigos/algoritmos-e-logica-de-programacao',
      },
      {
        title: 'Algoritmos e Estruturas de Dados',
        url: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/',
      },
    ],
    snippets: [
      {
        id: 'logica-1',
        title: 'Variáveis e Tipos de Dados',
        description: 'Declarar e usar variáveis',
        language: 'generic',
        code: '# Declarar variáveis\nnome = "João"\nidade = 25\naltura = 1.75\nativo = True\n\n# Exibir valores\nprint(nome)\nprint(idade)\nprint(altura)\nprint(ativo)',
      },
      {
        id: 'logica-2',
        title: 'Estruturas Condicionais (if/else)',
        description: 'Tomar decisões com if/else',
        language: 'generic',
        code: 'idade = 18\n\nif idade >= 18:\n    print("Maior de idade")\nelse:\n    print("Menor de idade")',
      },
      {
        id: 'logica-3',
        title: 'Estruturas de Repetição (for)',
        description: 'Repetir ações com loops for',
        language: 'generic',
        code: 'for i in range(5):\n    print("Número:", i)',
      },
      {
        id: 'logica-4',
        title: 'Estruturas de Repetição (while)',
        description: 'Repetir ações com loops while',
        language: 'generic',
        code: 'contador = 0\n\nwhile contador < 5:\n    print("Contador:", contador)\n    contador += 1',
      },
      {
        id: 'logica-5',
        title: 'Funções',
        description: 'Criar e usar funções',
        language: 'generic',
        code: 'def saudacao(nome):\n    return "Olá, " + nome\n\nmensagem = saudacao("Maria")\nprint(mensagem)',
      },
      {
        id: 'logica-6',
        title: 'Arrays/Listas',
        description: 'Trabalhar com listas',
        language: 'generic',
        code: 'numeros = [1, 2, 3, 4, 5]\n\n# Acessar elementos\nprint(numeros[0])  # 1\n\n# Adicionar elemento\nnumeros.append(6)\n\n# Percorrer lista\nfor numero in numeros:\n    print(numero)',
      },
      {
        id: 'logica-7',
        title: 'Dicionários/Mapas',
        description: 'Trabalhar com dicionários',
        language: 'generic',
        code: 'pessoa = {"nome": "João", "idade": 25}\n\n# Acessar valores\nprint(pessoa["nome"])\n\n# Adicionar chave\npessoa["altura"] = 1.75\n\n# Percorrer dicionário\nfor chave, valor in pessoa.items():\n    print(chave, ":", valor)',
      },
      {
        id: 'logica-8',
        title: 'Operadores Lógicos',
        description: 'Usar operadores lógicos (AND, OR, NOT)',
        language: 'generic',
        code: 'idade = 18\npossui_carteira = True\n\nif idade >= 18 and possui_carteira:\n    print("Pode dirigir")\nelse:\n    print("Não pode dirigir")',
      },
      {
        id: 'logica-9',
        title: 'Operadores de Comparação',
        description: 'Comparar valores',
        language: 'generic',
        code: 'a = 10\nb = 20\n\nprint(a == b)  # False\nprint(a != b)  # True\nprint(a > b)   # False\nprint(a < b)   # True',
      },
      {
        id: 'logica-10',
        title: 'Recursão',
        description: 'Resolver problemas com recursão',
        language: 'generic',
        code: 'def fatorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * fatorial(n - 1)\n\nprint(fatorial(5))  # 120',
      },
      {
        id: 'logica-11',
        title: 'Busca Linear',
        description: 'Buscar um elemento em uma lista',
        language: 'generic',
        code: 'def busca_linear(lista, alvo):\n    for i, elemento in enumerate(lista):\n        if elemento == alvo:\n            return i\n    return -1\n\nnumeros = [1, 2, 3, 4, 5]\nindice = busca_linear(numeros, 3)\nprint("Índice:", indice)  # 2',
      },
      {
        id: 'logica-12',
        title: 'Busca Binária',
        description: 'Buscar um elemento em uma lista ordenada',
        language: 'generic',
        code: 'def busca_binaria(lista, alvo):\n    esquerda, direita = 0, len(lista) - 1\n    while esquerda <= direita:\n        meio = (esquerda + direita) // 2\n        if lista[meio] == alvo:\n            return meio\n        elif lista[meio] < alvo:\n            esquerda = meio + 1\n        else:\n            direita = meio - 1\n    return -1\n\nnumeros = [1, 2, 3, 4, 5]\nindice = busca_binaria(numeros, 3)\nprint("Índice:", indice)  # 2',
      },
      {
        id: 'logica-13',
        title: 'Ordenação por Seleção',
        description: 'Ordenar uma lista com o algoritmo de seleção',
        language: 'generic',
        code: 'def ordenacao_selecao(lista):\n    for i in range(len(lista)):\n        indice_minimo = i\n        for j in range(i + 1, len(lista)):\n            if lista[j] < lista[indice_minimo]:\n                indice_minimo = j\n        lista[i], lista[indice_minimo] = lista[indice_minimo], lista[i]\n    return lista\n\nnumeros = [64, 25, 12, 22, 11]\nprint(ordenacao_selecao(numeros))  # [11, 12, 22, 25, 64]',
      },
      {
        id: 'logica-14',
        title: 'Ordenação por Inserção',
        description: 'Ordenar uma lista com o algoritmo de inserção',
        language: 'generic',
        code: 'def ordenacao_insercao(lista):\n    for i in range(1, len(lista)):\n        chave = lista[i]\n        j = i - 1\n        while j >= 0 and chave < lista[j]:\n            lista[j + 1] = lista[j]\n            j -= 1\n        lista[j + 1] = chave\n    return lista\n\nnumeros = [64, 25, 12, 22, 11]\nprint(ordenacao_insercao(numeros))  # [11, 12, 22, 25, 64]',
      },
      {
        id: 'logica-15',
        title: 'Ordenação por Bolha',
        description: 'Ordenar uma lista com o algoritmo de bolha',
        language: 'generic',
        code: 'def ordenacao_bolha(lista):\n    n = len(lista)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if lista[j] > lista[j + 1]:\n                lista[j], lista[j + 1] = lista[j + 1], lista[j]\n    return lista\n\nnumeros = [64, 25, 12, 22, 11]\nprint(ordenacao_bolha(numeros))  # [11, 12, 22, 25, 64]',
      },
      {
        id: 'logica-16',
        title: 'Manipulação de Strings',
        description: 'Trabalhar com strings',
        language: 'generic',
        code: 'texto = "Olá, Mundo!"\n\n# Tamanho da string\nprint(len(texto))  # 12\n\n# Concatenar strings\nnovo_texto = texto + " Bem-vindo!"\nprint(novo_texto)\n\n# Substring\nprint(texto[0:3])  # "Olá"',
      },
      {
        id: 'logica-17',
        title: 'Manipulação de Arquivos',
        description: 'Ler e escrever em arquivos',
        language: 'generic',
        code: '# Escrever em um arquivo\nwith open("arquivo.txt", "w") as arquivo:\n    arquivo.write("Olá, Mundo!")\n\n# Ler de um arquivo\nwith open("arquivo.txt", "r") as arquivo:\n    conteudo = arquivo.read()\n    print(conteudo)',
      },
      {
        id: 'logica-18',
        title: 'Tratamento de Exceções',
        description: 'Capturar e tratar erros',
        language: 'generic',
        code: 'try:\n    resultado = 10 / 0\nexcept ZeroDivisionError:\n    print("Erro: Divisão por zero")\nfinally:\n    print("Execução finalizada")',
      },
      {
        id: 'logica-19',
        title: 'Algoritmo de Fibonacci',
        description: 'Gerar a sequência de Fibonacci',
        language: 'generic',
        code: 'def fibonacci(n):\n    sequencia = [0, 1]\n    for i in range(2, n):\n        sequencia.append(sequencia[i - 1] + sequencia[i - 2])\n    return sequencia\n\nprint(fibonacci(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',
      },
      {
        id: 'logica-20',
        title: 'Verificação de Números Primos',
        description: 'Verificar se um número é primo',
        language: 'generic',
        code: 'def eh_primo(n):\n    if n <= 1:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint(eh_primo(29))  # True',
      },
    ],
  },
  {
    id: 'regex',
    name: 'Regex',
    icon: <FileCode size={24} className="text-green-500" />,
    description:
      'Expressões regulares para busca e manipulação de padrões em textos',
    documentation:
      'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions',
    tutorials: [
      { title: 'Regex Tutorial', url: 'https://regexr.com/' },
      {
        title: 'MDN Regex Guide',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions',
      },
    ],
    snippets: [
      {
        id: 'regex-1',
        title: 'Busca Simples',
        description: 'Encontrar uma palavra em um texto',
        language: 'regex',
        code: '/hello/',
      },
      {
        id: 'regex-2',
        title: 'Busca com Flags',
        description: 'Busca case-insensitive e global',
        language: 'regex',
        code: '/hello/gi',
      },
      {
        id: 'regex-3',
        title: 'Correspondência de Dígitos',
        description: 'Encontrar todos os números em um texto',
        language: 'regex',
        code: '/\\d+/g',
      },
      {
        id: 'regex-4',
        title: 'Validação de E-mail',
        description: 'Validar um endereço de e-mail',
        language: 'regex',
        code: '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/',
      },
      {
        id: 'regex-5',
        title: 'Substituição de Texto',
        description: 'Substituir todas as ocorrências de uma palavra',
        language: 'javascript',
        code: 'const texto = "Hello world! Hello everyone!";\nconst novoTexto = texto.replace(/Hello/g, "Hi");\nconsole.log(novoTexto); // "Hi world! Hi everyone!"',
      },
      {
        id: 'regex-6',
        title: 'Captura de Grupos',
        description: 'Capturar partes específicas de um texto',
        language: 'regex',
        code: '/(\\d{2})-(\\d{2})-(\\d{4})/',
      },
      {
        id: 'regex-7',
        title: 'Validação de Senha',
        description: 'Validar senha com requisitos específicos',
        language: 'regex',
        code: '/^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/',
      },
      {
        id: 'regex-8',
        title: 'Busca de URLs',
        description: 'Encontrar URLs em um texto',
        language: 'regex',
        code: '/https?:\\/\\/[^\\s]+/g',
      },
      {
        id: 'regex-9',
        title: 'Validação de Data',
        description: 'Validar um formato de data no estilo DD/MM/YYYY',
        language: 'regex',
        code: '/^\\d{2}\\/\\d{2}\\/\\d{4}$/',
      },
      {
        id: 'regex-10',
        title: 'Busca de Palavras',
        description:
          'Encontrar palavras específicas, ignorando maiúsculas/minúsculas',
        language: 'regex',
        code: '/\\b(palavra1|palavra2|palavra3)\\b/gi',
      },
      {
        id: 'regex-11',
        title: 'Remoção de Espaços Extras',
        description: 'Remover espaços múltiplos de um texto',
        language: 'javascript',
        code: 'const texto = "Texto  com   espaços  extras";\nconst semEspacos = texto.replace(/\\s+/g, " ");\nconsole.log(semEspacos);',
      },
      {
        id: 'regex-12',
        title: 'Validação de CEP',
        description: 'Validar um formato de CEP brasileiro',
        language: 'regex',
        code: '/^\\d{5}-\\d{3}$/',
      },
      {
        id: 'regex-13',
        title: 'Extrair Domínios',
        description: 'Capturar o domínio de endereços de e-mail',
        language: 'regex',
        code: '/@([a-zA-Z0-9.-]+)\\./g',
      },
      {
        id: 'regex-14',
        title: 'Número de Telefone Brasileiro',
        description: 'Validar um número de telefone no formato brasileiro',
        language: 'regex',
        code: '/^\\(\\d{2}\\) \\d{4,5}-\\d{4}$/',
      },
      {
        id: 'regex-15',
        title: 'Validação de CPF',
        description: 'Verificar o formato de CPF',
        language: 'regex',
        code: '/^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$/',
      },
      {
        id: 'regex-16',
        title: 'Hexadecimal',
        description: 'Identificar valores hexadecimais em um texto',
        language: 'regex',
        code: '/#[a-fA-F0-9]{6}\\b/',
      },
      {
        id: 'regex-17',
        title: 'Correspondência de Palíndromos',
        description: 'Identificar palavras que são palíndromos',
        language: 'regex',
        code: '/\\b(\\w)(\\w)?\\w?\\2\\1\\b/gi',
      },
      {
        id: 'regex-18',
        title: 'Identificador de Variáveis',
        description: 'Validar nomes de variáveis em linguagens como JavaScript',
        language: 'regex',
        code: '/^[a-zA-Z_$][a-zA-Z\\d_$]*$/',
      },
      {
        id: 'regex-19',
        title: 'Remover Comentários',
        description: 'Remover comentários de código estilo // ou /* */',
        language: 'regex',
        code: '/\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\//g',
      },
      {
        id: 'regex-20',
        title: 'Divisão de Sentenças',
        description: 'Dividir texto em sentenças com base em pontuação',
        language: 'regex',
        code: '/[^.!?]+[.!?]+/g',
      },
    ],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <FileCode size={24} className="text-blue-400" />,
    description:
      'Superset tipado de JavaScript que compila para JavaScript puro',
    documentation: 'https://www.typescriptlang.org/docs/',
    tutorials: [
      {
        title: 'Manual TypeScript',
        url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
      },
      {
        title: 'TypeScript Playground',
        url: 'https://www.typescriptlang.org/play',
      },
    ],
    snippets: [
      {
        id: 'ts-1',
        title: 'Configuração TypeScript',
        description: 'Inicializar um projeto TypeScript',
        language: 'bash',
        code: 'npm init -y\nnpm install typescript --save-dev\nnpx tsc --init',
      },
      {
        id: 'ts-2',
        title: 'Tipos Básicos',
        description: 'Anotações de tipos básicos em TypeScript',
        language: 'typescript',
        code: '// Tipos básicos\nlet isDone: boolean = false;\nlet decimal: number = 6;\nlet color: string = "blue";\nlet list: number[] = [1, 2, 3];\nlet x: [string, number] = ["hello", 10]; // Tuple\n\n// Enum\nenum Color {Red, Green, Blue}\nlet c: Color = Color.Green;\n\n// Any\nlet notSure: any = 4;\n\n// Void\nfunction warnUser(): void {\n  console.log("This is a warning message");\n}',
      },
      {
        id: 'ts-3',
        title: 'Interfaces',
        description: 'Definir formatos de objetos com interfaces',
        language: 'typescript',
        code: 'interface User {\n  id: number;\n  name: string;\n  email?: string; // Propriedade opcional\n  readonly createdAt: Date; // Propriedade somente leitura\n}\n\nfunction createUser(user: User): User {\n  return user;\n}\n\nconst newUser: User = {\n  id: 1,\n  name: "John Doe",\n  createdAt: new Date()\n};',
      },
      {
        id: 'ts-4',
        title: 'Classes',
        description: 'Definir e utilizar classes em TypeScript',
        language: 'typescript',
        code: 'class Greeter {\n  greeting: string;\n  constructor(message: string) {\n    this.greeting = message;\n  }\n  greet() {\n    return "Hello, " + this.greeting;\n  }\n}\n\nlet greeter = new Greeter("world");\nconsole.log(greeter.greet());',
      },
      {
        id: 'ts-5',
        title: 'Funções Genéricas',
        description: 'Uso de funções genéricas em TypeScript',
        language: 'typescript',
        code: 'function identity<T>(arg: T): T {\n  return arg;\n}\n\nlet output1 = identity<string>("myString");\nlet output2 = identity<number>(42);',
      },
      {
        id: 'ts-6',
        title: 'Union Types',
        description: 'Usando Union Types para variáveis múltiplas',
        language: 'typescript',
        code: 'function printId(id: number | string) {\n  console.log("Your ID is: " + id);\n}\n\nprintId(101);\nprintId("202");',
      },
      {
        id: 'ts-7',
        title: 'Tipos Literais',
        description: 'Definindo tipos literais em TypeScript',
        language: 'typescript',
        code: 'type Direction = "North" | "East" | "South" | "West";\n\nfunction move(direction: Direction) {\n  console.log("Moving to " + direction);\n}\n\nmove("North");',
      },
      {
        id: 'ts-8',
        title: 'Decorator',
        description: 'Uso de Decorators em classes e métodos',
        language: 'typescript',
        code: 'function sealed(constructor: Function) {\n  Object.seal(constructor);\n  Object.seal(constructor.prototype);\n}\n\n@sealed\nclass BugReport {\n  type = "report";\n  title: string;\n  constructor(t: string) {\n    this.title = t;\n  }\n}\n\nconst report = new BugReport("Needs attention");\nconsole.log(report);',
      },
      {
        id: 'ts-9',
        title: 'Aliases de Tipos',
        description: 'Criar apelidos para tipos complexos',
        language: 'typescript',
        code: 'type Point = { x: number; y: number };\n\nfunction printPoint(point: Point): void {\n  console.log(`(${point.x}, ${point.y})`);\n}\n\nconst myPoint: Point = { x: 10, y: 20 };\nprintPoint(myPoint);',
      },
      {
        id: 'ts-10',
        title: 'Promise com Tipos',
        description: 'Usar Promises tipadas em funções assíncronas',
        language: 'typescript',
        code: 'function fetchData(): Promise<string> {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve("Data fetched!"), 1000);\n  });\n}\n\nfetchData().then((data) => console.log(data));',
      },
      {
        id: 'ts-11',
        title: 'Utilização de Readonly',
        description: 'Criar objetos imutáveis com o tipo Readonly',
        language: 'typescript',
        code: 'interface Todo {\n  title: string;\n  description: string;\n}\n\nconst todo: Readonly<Todo> = {\n  title: "Learn TypeScript",\n  description: "Understand the basics of TypeScript."\n};\n\n// Erro: Cannot assign to \'title\' because it is a read-only property.\n// todo.title = "Learn JavaScript";',
      },
      {
        id: 'ts-12',
        title: 'Partial e Required',
        description: 'Modificar propriedades de objetos com Partial e Required',
        language: 'typescript',
        code: 'interface User {\n  id: number;\n  name: string;\n  email?: string;\n}\n\nconst updateUser = (user: Partial<User>) => {\n  console.log(user);\n};\n\nconst completeUser: Required<User> = {\n  id: 1,\n  name: "John",\n  email: "john@example.com"\n};',
      },
      {
        id: 'ts-13',
        title: 'Pick e Omit',
        description: 'Selecionar ou omitir propriedades de tipos',
        language: 'typescript',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst pickedUser: Pick<User, "name"> = { name: "John" };\nconst omittedUser: Omit<User, "email"> = { id: 1, name: "John" };',
      },
      {
        id: 'ts-14',
        title: 'Tipos Interseção',
        description: 'Combinar múltiplos tipos em um só',
        language: 'typescript',
        code: 'type Person = { name: string };\ntype Employee = Person & { salary: number };\n\nconst employee: Employee = { name: "John Doe", salary: 5000 };\nconsole.log(employee);',
      },
      {
        id: 'ts-15',
        title: 'Nullable Types',
        description: 'Trabalhar com valores opcionais ou nulos',
        language: 'typescript',
        code: 'function greet(name: string | null): string {\n  return name ? `Hello, ${name}!` : "Hello, guest!";\n}\n\ngreet(null);',
      },
      {
        id: 'ts-16',
        title: 'Tipo de Indexação',
        description: 'Usar indexação para acessar propriedades de tipos',
        language: 'typescript',
        code: 'interface User {\n  id: number;\n  name: string;\n}\n\ntype UserId = User["id"];\n\nconst myId: UserId = 101;',
      },
      {
        id: 'ts-17',
        title: 'Mapped Types',
        description: 'Criar novos tipos baseados em tipos existentes',
        language: 'typescript',
        code: 'type User = {\n  id: number;\n  name: string;\n};\n\ntype ReadonlyUser = {\n  readonly [K in keyof User]: User[K];\n};',
      },
      {
        id: 'ts-18',
        title: 'Guardas de Tipo',
        description: 'Criar funções para proteger tipos',
        language: 'typescript',
        code: 'function isString(value: any): value is string {\n  return typeof value === "string";\n}\n\nconst value: unknown = "Hello";\nif (isString(value)) {\n  console.log(value.toUpperCase());\n}',
      },
      {
        id: 'ts-19',
        title: 'Nunca (never)',
        description: 'Usar never para tipos impossíveis',
        language: 'typescript',
        code: 'function error(message: string): never {\n  throw new Error(message);\n}',
      },
      {
        id: 'ts-20',
        title: 'Template Literals Types',
        description: 'Criar strings com tipos literais template',
        language: 'typescript',
        code: 'type Greeting = `Hello, ${string}`;\n\nconst greet: Greeting = "Hello, TypeScript!";',
      },
    ],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: <Palette size={24} className="text-pink-400" />,
    description:
      'Framework CSS utilitário para construção rápida de designs personalizados',
    documentation: 'https://tailwindcss.com/docs',
    tutorials: [
      {
        title: 'Instalação Tailwind CSS',
        url: 'https://tailwindcss.com/docs/installation',
      },
      { title: 'Componentes Tailwind UI', url: 'https://tailwindui.com/' },
    ],
    snippets: [
      {
        id: 'tailwind-1',
        title: 'Configuração Tailwind CSS',
        description: 'Instalar e configurar Tailwind CSS',
        language: 'bash',
        code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
      },
      {
        id: 'tailwind-2',
        title: 'Configuração Tailwind',
        description: 'Configuração básica do tailwind.config.js',
        language: 'javascript',
        code: '/** @type {import("tailwindcss").Config} */\nmodule.exports = {\n  content: [\n    "./src/**/*.{js,jsx,ts,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}',
      },
      {
        id: 'tailwind-3',
        title: 'Card Responsivo',
        description: 'Um componente de card responsivo com Tailwind CSS',
        language: 'jsx',
        code: '<div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">\n  <img className="w-full" src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Sunset in the mountains" />\n  <div className="px-6 py-4">\n    <div className="font-bold text-xl mb-2">Título do Card</div>\n    <p className="text-gray-700 text-base">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    </p>\n  </div>\n  <div className="px-6 pt-4 pb-2">\n    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fotografia</span>\n    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#viagem</span>\n  </div>\n</div>',
      },
      {
        id: 'tailwind-4',
        title: 'Botão Personalizado',
        description: 'Um botão personalizado com Tailwind CSS',
        language: 'jsx',
        code: '<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n  Clique Aqui\n</button>',
      },
      {
        id: 'tailwind-5',
        title: 'Navbar Responsiva',
        description: 'Um exemplo de navbar responsiva usando Tailwind CSS',
        language: 'jsx',
        code: '<nav className="bg-gray-800 p-4">\n  <div className="container mx-auto flex justify-between items-center">\n    <div className="text-white font-bold">Logo</div>\n    <div className="space-x-4">\n      <a href="#" className="text-gray-300 hover:text-white">Home</a>\n      <a href="#" className="text-gray-300 hover:text-white">Sobre</a>\n      <a href="#" className="text-gray-300 hover:text-white">Contato</a>\n    </div>\n  </div>\n</nav>',
      },
      {
        id: 'tailwind-6',
        title: 'Formulário de Login',
        description: 'Um formulário de login estilizado com Tailwind CSS',
        language: 'jsx',
        code: '<div className="max-w-xs mx-auto mt-10">\n  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">\n    <div className="mb-4">\n      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">\n        Nome de Usuário\n      </label>\n      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nome de Usuário" />\n    </div>\n    <div className="mb-6">\n      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">\n        Senha\n      </label>\n      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />\n    </div>\n    <div className="flex items-center justify-between">\n      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">\n        Entrar\n      </button>\n      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">\n        Esqueceu a senha?\n      </a>\n    </div>\n  </form>\n</div>',
      },
      {
        id: 'tailwind-7',
        title: 'Tabela Simples',
        description: 'Uma tabela simples estilizada com Tailwind CSS',
        language: 'jsx',
        code: '<div className="container mx-auto">\n  <table className="min-w-full bg-white">\n    <thead>\n      <tr>\n        <th className="py-2">Nome</th>\n        <th className="py-2">Idade</th>\n        <th className="py-2">Cidade</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td className="border px-4 py-2">Alice</td>\n        <td className="border px-4 py-2">24</td>\n        <td className="border px-4 py-2">Nova York</td>\n      </tr>\n      <tr>\n        <td className="border px-4 py-2">Bob</td>\n        <td className="border px-4 py-2">30</td>\n        <td className="border px-4 py-2">Los Angeles</td>\n      </tr>\n    </tbody>\n  </table>\n</div>',
      },
      {
        id: 'tailwind-8',
        title: 'Badge',
        description: 'Exemplo de um badge com Tailwind CSS',
        language: 'jsx',
        code: '<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">\n  Novo\n</span>',
      },
      {
        id: 'tailwind-9',
        title: 'Grade Responsiva',
        description: 'Criar um layout de grade responsivo com Tailwind CSS',
        language: 'jsx',
        code: '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n  <div className="bg-blue-500 text-white p-4">Item 1</div>\n  <div className="bg-green-500 text-white p-4">Item 2</div>\n  <div className="bg-red-500 text-white p-4">Item 3</div>\n</div>',
      },
      {
        id: 'tailwind-10',
        title: 'Alerta',
        description: 'Um componente de alerta simples',
        language: 'jsx',
        code: '<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">\n  <strong className="font-bold">Aviso!</strong>\n  <span className="block sm:inline">Algo deu errado.</span>\n</div>',
      },
      {
        id: 'tailwind-11',
        title: 'Rodapé',
        description: 'Exemplo de rodapé estilizado',
        language: 'jsx',
        code: '<footer className="bg-gray-800 text-white py-4">\n  <div className="container mx-auto text-center">© 2025 - Todos os Direitos Reservados</div>\n</footer>',
      },
      {
        id: 'tailwind-12',
        title: 'Spinner de Carregamento',
        description: 'Um spinner de carregamento simples',
        language: 'jsx',
        code: '<div className="flex justify-center items-center">\n  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>\n</div>',
      },
      {
        id: 'tailwind-13',
        title: 'Dropdown',
        description: 'Exemplo de menu dropdown',
        language: 'jsx',
        code: '<div className="relative inline-block">\n  <button className="bg-gray-500 text-white px-4 py-2 rounded">Menu</button>\n  <ul className="absolute bg-white shadow-md rounded mt-2">\n    <li className="px-4 py-2 hover:bg-gray-200">Opção 1</li>\n    <li className="px-4 py-2 hover:bg-gray-200">Opção 2</li>\n  </ul>\n</div>',
      },
      {
        id: 'tailwind-14',
        title: 'Botão com Ícone',
        description: 'Botão com um ícone embutido',
        language: 'jsx',
        code: '<button className="flex items-center bg-green-500 text-white px-4 py-2 rounded">\n  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />\n  </svg>\n  Confirmar\n</button>',
      },
      {
        id: 'tailwind-15',
        title: 'Tabela com Linhas Alternadas',
        description: 'Tabela com fundo alternado para as linhas',
        language: 'jsx',
        code: '<table className="min-w-full bg-white">\n  <thead>\n    <tr>\n      <th className="py-2">Nome</th>\n      <th className="py-2">Idade</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr className="bg-gray-100">\n      <td className="py-2">Alice</td>\n      <td className="py-2">24</td>\n    </tr>\n    <tr>\n      <td className="py-2">Bob</td>\n      <td className="py-2">30</td>\n    </tr>\n  </tbody>\n</table>',
      },
      {
        id: 'tailwind-16',
        title: 'Tabela de Preços',
        description: 'Tabela de preços estilizada',
        language: 'jsx',
        code: '<div className="bg-white shadow-md rounded-lg p-6">\n  <h2 className="text-2xl font-bold">Plano Básico</h2>\n  <p className="text-gray-600 mt-2">$10/mês</p>\n  <ul className="mt-4">\n    <li className="text-gray-700">- 10 GB de armazenamento</li>\n    <li className="text-gray-700">- Suporte 24/7</li>\n  </ul>\n  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Assinar Agora</button>\n</div>',
      },
      {
        id: 'tailwind-17',
        title: 'Componente Accordion',
        description: 'Accordion simples estilizado',
        language: 'jsx',
        code: '<div className="border">\n  <div className="border-b">\n    <button className="w-full text-left px-4 py-2 font-semibold">Título 1</button>\n    <div className="p-4">Conteúdo 1</div>\n  </div>\n  <div className="border-b">\n    <button className="w-full text-left px-4 py-2 font-semibold">Título 2</button>\n    <div className="p-4">Conteúdo 2</div>\n  </div>\n</div>',
      },
      {
        id: 'tailwind-18',
        title: 'Modal',
        description: 'Janela modal simples',
        language: 'jsx',
        code: '<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">\n  <div className="bg-white p-6 rounded-lg">\n    <h2 className="text-xl font-bold">Título do Modal</h2>\n    <p>Conteúdo do modal</p>\n    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Fechar</button>\n  </div>\n</div>',
      },
      {
        id: 'tailwind-19',
        title: 'Lista de Tarefas',
        description: 'Lista de tarefas estilizada',
        language: 'jsx',
        code: '<ul className="list-disc pl-5">\n  <li className="text-green-600">Concluído</li>\n  <li className="text-yellow-600">Em progresso</li>\n  <li className="text-red-600">Pendente</li>\n</ul>',
      },
      {
        id: 'tailwind-20',
        title: 'Avatar Circular',
        description: 'Exibir um avatar circular',
        language: 'jsx',
        code: '<img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/150" alt="Avatar" />',
      },
    ],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <Terminal size={24} className="text-yellow-400" />,
    description: 'Linguagem de programação de alto nível e interpretada',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    tutorials: [
      {
        title: 'Guia JavaScript',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide',
      },
      {
        title: 'Referência JavaScript',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference',
      },
    ],
    snippets: [
      {
        id: 'js-1',
        title: 'Fetch API',
        description: 'Fazer requisições HTTP com a Fetch API',
        language: 'javascript',
        code: '// Requisição GET\nfetch("https://api.example.com/data")\n  .then(response => {\n    if (!response.ok) {\n      throw new Error("Resposta da rede não foi ok");\n    }\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error("Erro:", error));\n\n// Requisição POST\nfetch("https://api.example.com/data", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json",\n  },\n  body: JSON.stringify({ name: "João", age: 30 }),\n})\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error("Erro:", error));',
      },
      {
        id: 'js-2',
        title: 'Métodos de Array',
        description: 'Métodos comuns de array em JavaScript',
        language: 'javascript',
        code: 'const numeros = [1, 2, 3, 4, 5];\n\n// Map\nconst dobrados = numeros.map(num => num * 2);\n// [2, 4, 6, 8, 10]\n\n// Filter\nconst pares = numeros.filter(num => num % 2 === 0);\n// [2, 4]\n\n// Reduce\nconst soma = numeros.reduce((total, num) => total + num, 0);\n// 15\n\n// Find\nconst encontrado = numeros.find(num => num > 3);\n// 4\n\n// Some\nconst temPar = numeros.some(num => num % 2 === 0);\n// true\n\n// Every\nconst todoPositivos = numeros.every(num => num > 0);\n// true',
      },
      {
        id: 'js-3',
        title: 'Async/Await',
        description: 'JavaScript assíncrono com async/await',
        language: 'javascript',
        code: 'async function buscarDados() {\n  try {\n    const response = await fetch("https://api.example.com/data");\n    \n    if (!response.ok) {\n      throw new Error(`Erro HTTP! Status: ${response.status}`);\n    }\n    \n    const data = await response.json();\n    console.log(data);\n    return data;\n  } catch (error) {\n    console.error("Erro ao buscar dados:", error);\n  }\n}\n\n// Chamar a função assíncrona\nbuscarDados().then(data => {\n  // Fazer algo com os dados\n});',
      },
      {
        id: 'js-4',
        title: 'Manipulação DOM',
        description: 'Exemplos básicos de manipulação do DOM',
        language: 'javascript',
        code: 'document.getElementById("minhaDiv").innerHTML = "Novo Conteúdo";\n\nconst novoElemento = document.createElement("p");\nnovoElemento.textContent = "Texto Adicionado";\ndocument.body.appendChild(novoElemento);',
      },
      {
        id: 'js-5',
        title: 'Funções de Callback',
        description: 'Uso de funções de callback em JavaScript',
        language: 'javascript',
        code: 'function saudacao(nome, callback) {\n  console.log("Olá, " + nome);\n  callback();\n}\n\nfunction despedida() {\n  console.log("Adeus!");\n}\n\nsaudacao("João", despedida);',
      },
      {
        id: 'js-6',
        title: 'Promessas',
        description: 'Trabalhando com Promises em JavaScript',
        language: 'javascript',
        code: 'let minhaPromessa = new Promise((resolve, reject) => {\n  let sucesso = true;\n  if (sucesso) {\n    resolve("Operação bem-sucedida!");\n  } else {\n    reject("Ocorreu um erro.");\n  }\n});\n\nminhaPromessa.then((mensagem) => {\n  console.log(mensagem);\n}).catch((erro) => {\n  console.error(erro);\n});',
      },
      {
        id: 'js-7',
        title: 'Objetos e Classes',
        description: 'Definição de objetos e classes em JavaScript',
        language: 'javascript',
        code: 'const pessoa = {\n  nome: "João",\n  idade: 30,\n  saudacao: function() {\n    console.log("Olá, meu nome é " + this.nome);\n  }\n};\n\npessoa.saudacao();\n\nclass Animal {\n  constructor(nome, tipo) {\n    this.nome = nome;\n    this.tipo = tipo;\n  }\n  descricao() {\n    console.log(`${this.nome} é um ${this.tipo}`);\n  }\n}\n\nconst meuAnimal = new Animal("Rex", "cachorro");\nmeuAnimal.descricao();',
      },
      {
        id: 'js-8',
        title: 'Desestruturação',
        description: 'Uso de desestruturação em JavaScript',
        language: 'javascript',
        code: 'const obj = { a: 1, b: 2, c: 3 };\nconst { a, b, c } = obj;\nconsole.log(a, b, c);\n\nconst arr = [1, 2, 3];\nconst [x, y, z] = arr;\nconsole.log(x, y, z);',
      },
      {
        id: 'js-9',
        title: 'Clonando Objetos',
        description: 'Clonar objetos em JavaScript usando spread operator',
        language: 'javascript',
        code: 'const original = { a: 1, b: 2 };\nconst clone = { ...original };\nconsole.log(clone); // { a: 1, b: 2 }',
      },
      {
        id: 'js-10',
        title: 'Currying',
        description: 'Exemplo de função curried',
        language: 'javascript',
        code: 'function soma(a) {\n  return function(b) {\n    return a + b;\n  };\n}\n\nconst somaCom5 = soma(5);\nconsole.log(somaCom5(3)); // 8',
      },
      {
        id: 'js-11',
        title: 'Removendo Duplicatas',
        description: 'Remover elementos duplicados de um array',
        language: 'javascript',
        code: 'const array = [1, 2, 2, 3, 4, 4];\nconst semDuplicatas = [...new Set(array)];\nconsole.log(semDuplicatas); // [1, 2, 3, 4]',
      },
      {
        id: 'js-12',
        title: 'Fetch com Timeout',
        description: 'Adicionar timeout em um fetch',
        language: 'javascript',
        code: "function fetchComTimeout(url, timeout) {\n  return Promise.race([\n    fetch(url),\n    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))\n  ]);\n}\n\nfetchComTimeout('https://api.example.com', 5000)\n  .then(response => console.log('Sucesso', response))\n  .catch(error => console.error('Erro', error));",
      },
      {
        id: 'js-13',
        title: 'Debounce',
        description: 'Implementação de debounce para otimizar eventos',
        language: 'javascript',
        code: "function debounce(func, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), delay);\n  };\n}\n\nconst log = debounce(() => console.log('Executado!'), 300);\nwindow.addEventListener('resize', log);",
      },
      {
        id: 'js-14',
        title: 'Throttle',
        description:
          'Implementação de throttle para limitar frequência de execuções',
        language: 'javascript',
        code: "function throttle(func, limit) {\n  let lastFunc;\n  let lastRan;\n  return function(...args) {\n    const context = this;\n    if (!lastRan) {\n      func.apply(context, args);\n      lastRan = Date.now();\n    } else {\n      clearTimeout(lastFunc);\n      lastFunc = setTimeout(() => {\n        if (Date.now() - lastRan >= limit) {\n          func.apply(context, args);\n          lastRan = Date.now();\n        }\n      }, limit - (Date.now() - lastRan));\n    }\n  };\n}\n\nconst log = throttle(() => console.log('Executado!'), 1000);\nwindow.addEventListener('scroll', log);",
      },
      {
        id: 'js-15',
        title: 'Iteradores',
        description: 'Criando e usando um iterador',
        language: 'javascript',
        code: 'function criarIterador(array) {\n  let index = 0;\n  return {\n    next: function() {\n      return index < array.length\n        ? { value: array[index++], done: false }\n        : { done: true };\n    }\n  };\n}\n\nconst iterador = criarIterador([1, 2, 3]);\nconsole.log(iterador.next().value); // 1\nconsole.log(iterador.next().value); // 2',
      },
      {
        id: 'js-16',
        title: 'Geradores',
        description: 'Usando geradores para criar sequências',
        language: 'javascript',
        code: 'function* gerador() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst g = gerador();\nconsole.log(g.next().value); // 1\nconsole.log(g.next().value); // 2\nconsole.log(g.next().value); // 3',
      },
      {
        id: 'js-17',
        title: 'Shallow e Deep Copy',
        description: 'Diferença entre cópia rasa e profunda',
        language: 'javascript',
        code: 'const obj = { a: { b: 2 } };\nconst shallowCopy = { ...obj };\nconst deepCopy = JSON.parse(JSON.stringify(obj));\n\nobj.a.b = 3;\nconsole.log(shallowCopy.a.b); // 3\nconsole.log(deepCopy.a.b); // 2',
      },
      {
        id: 'js-18',
        title: 'Optional Chaining',
        description:
          'Usando optional chaining para acessar propriedades seguras',
        language: 'javascript',
        code: 'const obj = { a: { b: 2 } };\nconsole.log(obj?.a?.b); // 2\nconsole.log(obj?.c?.d); // undefined',
      },
      {
        id: 'js-19',
        title: 'Nullish Coalescing',
        description: 'Usando nullish coalescing para valores padrão',
        language: 'javascript',
        code: "const valor = null;\nconst resultado = valor ?? 'Valor padrão';\nconsole.log(resultado); // 'Valor padrão'",
      },
      {
        id: 'js-20',
        title: 'Manipulação de Datas',
        description: 'Operações básicas com datas em JavaScript',
        language: 'javascript',
        code: 'const dataAtual = new Date();\nconst novaData = new Date(dataAtual.setDate(dataAtual.getDate() + 7));\nconsole.log(novaData);',
      },
    ],
  },
  {
    id: 'cypress',
    name: 'Cypress',
    icon: <Terminal size={24} className="text-green-500" />,
    description: 'Ferramenta de teste end-to-end para aplicações web modernas',
    documentation: 'https://docs.cypress.io/guides/overview/why-cypress',
    tutorials: [
      {
        title: 'Introdução ao Cypress',
        url: 'https://docs.cypress.io/guides/core-concepts/introduction-to-cypress',
      },
      {
        title: 'Testes E2E com Cypress',
        url: 'https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test',
      },
    ],
    snippets: [
      {
        id: 'cypress-1',
        title: 'Instalação Cypress',
        description: 'Instalar Cypress em um projeto existente',
        language: 'bash',
        code: 'npm install cypress --save-dev\n\n# Abrir o Cypress (interface interativa)\nnpx cypress open\n\n# Rodar testes no modo headless\nnpx cypress run',
      },
      {
        id: 'cypress-2',
        title: 'Configuração Básica',
        description: 'Configuração inicial do cypress.config.js',
        language: 'javascript',
        code: 'const { defineConfig } = require("cypress");\n\nmodule.exports = defineConfig({\n  e2e: {\n    baseUrl: "http://localhost:3000",\n    setupNodeEvents(on, config) {\n      // Implementar plugins aqui\n    },\n    viewportWidth: 1280,\n    viewportHeight: 720,\n    defaultCommandTimeout: 5000,\n    video: false\n  },\n  component: {\n    devServer: {\n      framework: "react",\n      bundler: "webpack"\n    }\n  }\n});',
      },
      {
        id: 'cypress-3',
        title: 'Teste de Login',
        description: 'Teste completo de fluxo de login',
        language: 'javascript',
        code: 'describe("Fluxo de Login", () => {\n  beforeEach(() => {\n    cy.visit("/login");\n  });\n\n  it("Deve logar com sucesso", () => {\n    cy.get("#email").type("usuario@exemplo.com");\n    cy.get("#password").type("senha123{enter}");\n    \n    cy.url().should("include", "/dashboard");\n    cy.contains("Bem-vindo, usuário!").should("be.visible");\n  });\n\n  it("Deve mostrar erro com credenciais inválidas", () => {\n    cy.get("#email").type("invalido@exemplo.com");\n    cy.get("#password").type("senhaerrada{enter}");\n    \n    cy.contains("Credenciais inválidas").should("be.visible");\n    cy.url().should("include", "/login");\n  });\n});',
      },
      {
        id: 'cypress-4',
        title: 'Mock de API',
        description: 'Interceptar e mockar requisições HTTP',
        language: 'javascript',
        code: 'describe("Teste com API Mock", () => {\n  it("Deve carregar produtos mockados", () => {\n    cy.intercept("GET", "/api/products", {\n      statusCode: 200,\n      body: [\n        { id: 1, name: "Produto A", price: 100 },\n        { id: 2, name: "Produto B", price: 200 }\n      ]\n    }).as("getProducts");\n    \n    cy.visit("/products");\n    cy.wait("@getProducts");\n    \n    cy.get(".product").should("have.length", 2);\n    cy.contains(".product", "Produto A").should("exist");\n  });\n});',
      },
      {
        id: 'cypress-5',
        title: 'Teste de Componente React',
        description: 'Testar componente React isoladamente',
        language: 'javascript',
        code: 'import React from "react";\nimport { mount } from "cypress/react";\nimport Button from "./Button";\n\ndescribe("Button Component", () => {\n  it("Renderiza com texto", () => {\n    mount(<Button>Clique Aqui</Button>);\n    cy.contains("Clique Aqui").should("be.visible");\n  });\n\n  it("Chama onClick quando clicado", () => {\n    const onClick = cy.stub().as("clickHandler");\n    mount(<Button onClick={onClick}>Botão</Button>);\n    \n    cy.get("button").click();\n    cy.get("@clickHandler").should("have.been.calledOnce");\n  });\n});',
      },
      {
        id: 'cypress-6',
        title: 'Fixtures e Dados de Teste',
        description: 'Usar arquivos de fixture para dados de teste',
        language: 'javascript',
        code: '// cypress/fixtures/users.json\n{\n  "admin": {\n    "email": "admin@exemplo.com",\n    "password": "admin123"\n  },\n  "user": {\n    "email": "user@exemplo.com",\n    "password": "user123"\n  }\n}\n\n// No teste\nbeforeEach(() => {\n  cy.fixture("users").then((users) => {\n    this.users = users;\n  });\n});\n\nit("Login como admin", () => {\n  const { email, password } = this.users.admin;\n  cy.login(email, password);\n  // ...\n});',
      },
      {
        id: 'cypress-7',
        title: 'Comandos Customizados',
        description: 'Criar e usar comandos personalizados',
        language: 'javascript',
        code: '// cypress/support/commands.js\nCypress.Commands.add("login", (email, password) => {\n  cy.session([email, password], () => {\n    cy.visit("/login");\n    cy.get("#email").type(email);\n    cy.get("#password").type(`${password}{enter}`);\n    cy.url().should("include", "/dashboard");\n  });\n});\n\n// No teste\ncy.login("usuario@exemplo.com", "senha123");\ncy.visit("/dashboard");',
      },
      {
        id: 'cypress-8',
        title: 'Teste de Acessibilidade',
        description: 'Verificar acessibilidade com axe-core',
        language: 'javascript',
        code: '// cypress/support/commands.js\nimport "cypress-axe";\n\n// No teste\nit("Deve passar nos testes de acessibilidade", () => {\n  cy.visit("/");\n  cy.injectAxe();\n  cy.checkA11y(null, {\n    rules: {\n      "color-contrast": { enabled: false } // Desativar regra específica\n    }\n  });\n});',
      },
      {
        id: 'cypress-9',
        title: 'Teste de Visual',
        description: 'Comparação visual com Percy ou Applitools',
        language: 'javascript',
        code: '// Com Percy instalado (npm i @percy/cypress)\ndescribe("Teste Visual", () => {\n  it("Compara screenshot da página inicial", () => {\n    cy.visit("/");\n    cy.percySnapshot("Página Inicial");\n  });\n\n  it("Compara screenshot do mobile", () => {\n    cy.viewport("iphone-8");\n    cy.visit("/");\n    cy.percySnapshot("Página Inicial - Mobile");\n  });\n});',
      },
      {
        id: 'cypress-10',
        title: 'Teste de Upload',
        description: 'Testar upload de arquivos',
        language: 'javascript',
        code: 'describe("Upload de Arquivo", () => {\n  it("Deve fazer upload com sucesso", () => {\n    cy.visit("/upload");\n    \n    cy.fixture("example.pdf", "binary")\n      .then((file) => Cypress.Blob.binaryStringToBlob(file))\n      .then((blob) => {\n        const file = new File([blob], "example.pdf", { type: "application/pdf" });\n        cy.get("input[type=file]").attachFile({\n          fileContent: file,\n          fileName: "example.pdf",\n          mimeType: "application/pdf"\n        });\n      });\n    \n    cy.get(".upload-status").should("contain", "Upload completo");\n  });\n});',
      },
      {
        id: 'cypress-11',
        title: 'Teste de Performance',
        description: 'Medir métricas de performance',
        language: 'javascript',
        code: 'describe("Performance", () => {\n  it("Deve carregar a página em menos de 2s", () => {\n    cy.visit("/", {\n      onBeforeLoad: (win) => {\n        win.performance.mark("start-loading");\n      },\n      onLoad: (win) => {\n        win.performance.mark("end-loading");\n      }\n    });\n    \n    cy.window().then((win) => {\n      win.performance.measure("pageLoad", "start-loading", "end-loading");\n      const measure = win.performance.getEntriesByName("pageLoad")[0];\n      expect(measure.duration).to.be.lessThan(2000);\n    });\n  });\n});',
      },
      {
        id: 'cypress-12',
        title: 'Teste em Múltiplos Viewports',
        description: 'Testar responsividade em diferentes tamanhos de tela',
        language: 'javascript',
        code: 'const viewports = [\n  "macbook-16",\n  "ipad-2",\n  "iphone-xr",\n  [1920, 1080], // Custom size\n];\n\nviewports.forEach((viewport) => {\n  describe(`Teste no viewport ${viewport}`, () => {\n    beforeEach(() => {\n      if (Cypress._.isArray(viewport)) {\n        cy.viewport(viewport[0], viewport[1]);\n      } else {\n        cy.viewport(viewport);\n      }\n      cy.visit("/");\n    });\n\n    it("Deve exibir o menu corretamente", () => {\n      cy.get(".navbar").should("be.visible");\n      \n      if (["iphone-xr", "ipad-2"].includes(viewport)) {\n        cy.get(".menu-button").click();\n        cy.get(".mobile-menu").should("be.visible");\n      }\n    });\n  });\n});',
      },
    ],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: <Layers size={24} className="text-green-400" />,
    description: 'O framework React para produção',
    documentation: 'https://nextjs.org/docs',
    tutorials: [
      {
        title: 'Primeiros Passos',
        url: 'https://nextjs.org/docs/getting-started',
      },
      { title: 'Aprenda Next.js', url: 'https://nextjs.org/learn' },
    ],
    snippets: [
      {
        id: 'next-1',
        title: 'Configuração Next.js',
        description: 'Criar um novo projeto Next.js',
        language: 'bash',
        code: 'npx create-next-app@latest meu-app-next\ncd meu-app-next\nnpm run dev',
      },
      {
        id: 'next-2',
        title: 'Componente de Página',
        description: 'Criar um componente básico de página Next.js',
        language: 'jsx',
        code: '// pages/index.js\nimport Head from "next/head";\n\nexport default function Home() {\n  return (\n    <div>\n      <Head>\n        <title>Meu App Next.js</title>\n        <meta name="description" content="Gerado por create next app" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n\n      <main>\n        <h1>Bem-vindo ao Next.js!</h1>\n      </main>\n    </div>\n  );\n}',
      },
      {
        id: 'next-3',
        title: 'Rota de API',
        description: 'Criar uma rota de API Next.js',
        language: 'javascript',
        code: '// pages/api/hello.js\nexport default function handler(req, res) {\n  res.status(200).json({ name: "João Silva" });\n}',
      },
      {
        id: 'next-4',
        title: 'Roteamento Dinâmico',
        description: 'Criar uma página com roteamento dinâmico em Next.js',
        language: 'jsx',
        code: '// pages/posts/[id].js\nimport { useRouter } from "next/router";\n\nexport default function Post() {\n  const router = useRouter();\n  const { id } = router.query;\n\n  return <p>Post: {id}</p>;\n}',
      },
      {
        id: 'next-5',
        title: 'Roteamento de Link',
        description:
          'Usar o componente Link do Next.js para navegação entre páginas',
        language: 'jsx',
        code: '// pages/index.js\nimport Link from "next/link";\n\nexport default function Home() {\n  return (\n    <div>\n      <h1>Home</h1>\n      <Link href="/about">\n        <a>Ir para About</a>\n      </Link>\n    </div>\n  );\n}',
      },
      {
        id: 'next-6',
        title: 'SSR com getServerSideProps',
        description:
          'Renderização do lado do servidor usando getServerSideProps',
        language: 'javascript',
        code: '// pages/index.js\nexport async function getServerSideProps() {\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n\n  return { props: { data } };\n}\n\nexport default function Home({ data }) {\n  return (\n    <div>\n      <h1>Dados do Servidor</h1>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}',
      },
      {
        id: 'next-7',
        title: 'Static Generation com getStaticProps',
        description: 'Gerar páginas estáticas usando getStaticProps',
        language: 'javascript',
        code: '// pages/index.js\nexport async function getStaticProps() {\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n\n  return { props: { data } };\n}\n\nexport default function Home({ data }) {\n  return (\n    <div>\n      <h1>Dados Estáticos</h1>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}',
      },
      {
        id: 'next-8',
        title: 'Imagens Otimizadas',
        description:
          'Usar o componente Image do Next.js para imagens otimizadas',
        language: 'jsx',
        code: '// pages/index.js\nimport Image from "next/image";\n\nexport default function Home() {\n  return (\n    <div>\n      <h1>Imagens Otimizadas</h1>\n      <Image src="/meu-image.jpg" alt="Minha Imagem" width={500} height={500} />\n    </div>\n  );\n}',
      },
      {
        id: 'next-9',
        title: 'Roteamento Aninhado',
        description: 'Exemplo de rotas aninhadas em Next.js',
        language: 'jsx',
        code: '// pages/blog/[category]/[post].js\nimport { useRouter } from "next/router";\n\nexport default function BlogPost() {\n  const router = useRouter();\n  const { category, post } = router.query;\n\n  return <p>Categoria: {category}, Post: {post}</p>;\n}',
      },
      {
        id: 'next-10',
        title: 'API Middleware',
        description: 'Middleware simples para rotas de API',
        language: 'javascript',
        code: '// pages/api/middleware.js\nexport default function handler(req, res) {\n  if (req.method !== "GET") {\n    return res.status(405).end();\n  }\n\n  res.status(200).json({ message: "Método permitido!" });\n}',
      },
      {
        id: 'next-11',
        title: 'getStaticPaths para Rotas Dinâmicas',
        description: 'Usar getStaticPaths para gerar páginas dinâmicas',
        language: 'javascript',
        code: '// pages/posts/[id].js\nexport async function getStaticPaths() {\n  const paths = [\n    { params: { id: "1" } },\n    { params: { id: "2" } }\n  ];\n\n  return { paths, fallback: false };\n}\n\nexport async function getStaticProps({ params }) {\n  const post = { id: params.id, title: `Post ${params.id}` };\n  return { props: { post } };\n}\n\nexport default function Post({ post }) {\n  return <h1>{post.title}</h1>;\n}',
      },
      {
        id: 'next-12',
        title: 'Middleware para Páginas',
        description: 'Usar middleware para proteção de rotas',
        language: 'javascript',
        code: '// middleware.js\nimport { NextResponse } from "next/server";\n\nexport function middleware(req) {\n  const authenticated = req.cookies.get("auth") === "true";\n\n  if (!authenticated) {\n    return NextResponse.redirect("/login");\n  }\n\n  return NextResponse.next();\n}',
      },
      {
        id: 'next-13',
        title: 'Layout Padrão',
        description: 'Criar um layout padrão para múltiplas páginas',
        language: 'jsx',
        code: '// components/Layout.js\nexport default function Layout({ children }) {\n  return (\n    <div>\n      <header>Meu Header</header>\n      <main>{children}</main>\n      <footer>Meu Footer</footer>\n    </div>\n  );\n}\n\n// pages/_app.js\nimport Layout from "../components/Layout";\n\nexport default function MyApp({ Component, pageProps }) {\n  return (\n    <Layout>\n      <Component {...pageProps} />\n    </Layout>\n  );\n}',
      },
      {
        id: 'next-14',
        title: 'Incremental Static Regeneration',
        description: 'Regenerar páginas estáticas de forma incremental',
        language: 'javascript',
        code: '// pages/index.js\nexport async function getStaticProps() {\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n\n  return { props: { data }, revalidate: 10 };\n}\n\nexport default function Home({ data }) {\n  return (\n    <div>\n      <h1>Dados</h1>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}',
      },
      {
        id: 'next-15',
        title: 'Custom Document',
        description: 'Personalizar o documento HTML com _document.js',
        language: 'javascript',
        code: '// pages/_document.js\nimport { Html, Head, Main, NextScript } from "next/document";\n\nexport default function Document() {\n  return (\n    <Html lang="pt-BR">\n      <Head>\n        <meta name="description" content="Minha Aplicação Next.js" />\n      </Head>\n      <body>\n        <Main />\n        <NextScript />\n      </body>\n    </Html>\n  );\n}',
      },
      {
        id: 'next-16',
        title: 'Custom App com Contexto',
        description: 'Adicionar contexto global via _app.js',
        language: 'javascript',
        code: '// pages/_app.js\nimport { createContext, useState } from "react";\n\nexport const AppContext = createContext();\n\nexport default function MyApp({ Component, pageProps }) {\n  const [state, setState] = useState("Valor inicial");\n\n  return (\n    <AppContext.Provider value={{ state, setState }}>\n      <Component {...pageProps} />\n    </AppContext.Provider>\n  );\n}',
      },
      {
        id: 'next-17',
        title: 'Preloading de Dados',
        description: 'Pré-carregar dados com SWR',
        language: 'javascript',
        code: '// pages/index.js\nimport useSWR from "swr";\n\nconst fetcher = (url) => fetch(url).then((res) => res.json());\n\nexport default function Home() {\n  const { data, error } = useSWR("https://api.example.com/data", fetcher);\n\n  if (error) return <div>Falha ao carregar</div>;\n  if (!data) return <div>Carregando...</div>;\n\n  return <div>Dados: {JSON.stringify(data)}</div>;\n}',
      },
      {
        id: 'next-18',
        title: 'Manipulando Erros',
        description: 'Página customizada para erros',
        language: 'javascript',
        code: '// pages/_error.js\nexport default function Error({ statusCode }) {\n  return (\n    <p>\n      {statusCode\n        ? `Um erro ${statusCode} ocorreu no servidor`\n        : "Um erro ocorreu no cliente"}\n    </p>\n  );\n}',
      },
      {
        id: 'next-19',
        title: 'Exportação Estática',
        description: 'Exportar aplicativo Next.js como HTML estático',
        language: 'bash',
        code: 'next build\nnext export',
      },
      {
        id: 'next-20',
        title: 'Autenticação JWT',
        description: 'Autenticação usando tokens JWT em Next.js',
        language: 'javascript',
        code: '// utils/auth.js\nimport jwt from "jsonwebtoken";\n\nexport function gerarToken(usuario) {\n  return jwt.sign(usuario, "chave_secreta", { expiresIn: "1h" });\n}\n\nexport function verificarToken(token) {\n  try {\n    return jwt.verify(token, "chave_secreta");\n  } catch (e) {\n    return null;\n  }\n}\n\n// Exemplo de uso em rota API\n// pages/api/login.js\nexport default function handler(req, res) {\n  const { usuario, senha } = req.body;\n\n  if (usuario === "admin" && senha === "senha123") {\n    const token = gerarToken({ usuario });\n    return res.status(200).json({ token });\n  }\n\n  res.status(401).json({ mensagem: "Credenciais inválidas" });\n}',
      },
    ],
  },
  {
    id: 'html-css',
    name: 'HTML & CSS',
    icon: <Globe size={24} className="text-orange-400" />,
    description: 'Os blocos de construção da web',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    tutorials: [
      {
        title: 'Básico de HTML',
        url: 'https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics',
      },
      {
        title: 'Básico de CSS',
        url: 'https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/CSS_basics',
      },
    ],
    snippets: [
      {
        id: 'html-1',
        title: 'Template HTML',
        description: 'Template básico HTML5',
        language: 'html',
        code: '<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Documento</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <header>\n    <h1>Meu Site</h1>\n  </header>\n  \n  <main>\n    <p>Bem-vindo ao meu site!</p>\n  </main>\n  \n  <footer>\n    <p>&copy; 2025 Meu Site</p>\n  </footer>\n  \n  <script src="script.js"></script>\n</body>\n</html>',
      },
      {
        id: 'css-1',
        title: 'CSS Flexbox',
        description: 'Layout básico com flexbox',
        language: 'css',
        code: '.container {\n  display: flex;\n  flex-direction: row; /* ou column */\n  flex-wrap: wrap; /* ou nowrap */\n  justify-content: space-between; /* alinhamento do eixo principal */\n  align-items: center; /* alinhamento do eixo cruzado */\n  gap: 20px; /* espaçamento entre itens */\n}\n\n.item {\n  flex: 1; /* crescer e encolher igualmente */\n  /* ou valores específicos */\n  /* flex-grow: 1; */\n  /* flex-shrink: 1; */\n  /* flex-basis: auto; */\n}',
      },
      {
        id: 'css-2',
        title: 'CSS Grid',
        description: 'Layout básico com CSS grid',
        language: 'css',
        code: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */\n  grid-template-rows: auto;\n  gap: 20px; /* espaço entre itens do grid */\n}\n\n.grid-item {\n  /* Ocupar múltiplas colunas ou linhas */\n  grid-column: span 2; /* ocupa 2 colunas */\n  grid-row: span 1; /* ocupa 1 linha */\n  \n  /* Ou posições específicas */\n  /* grid-column: 1 / 3; */ /* da linha de coluna 1 até 3 */\n  /* grid-row: 1 / 2; */ /* da linha de linha 1 até 2 */\n}',
      },
      {
        id: 'html-2',
        title: 'Link CSS Externo',
        description: 'Como linkar um arquivo CSS externo',
        language: 'html',
        code: '<link rel="stylesheet" href="styles.css">',
      },
      {
        id: 'html-3',
        title: 'Formulário Básico',
        description: 'Criar um formulário básico em HTML',
        language: 'html',
        code: '<form action="/submit" method="post">\n  <label for="name">Nome:</label>\n  <input type="text" id="name" name="name">\n  <input type="submit" value="Enviar">\n</form>',
      },
      {
        id: 'css-3',
        title: 'CSS Reset',
        description: 'Resetar estilos padrão do navegador',
        language: 'css',
        code: '/* Reset CSS básico */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}',
      },
      {
        id: 'html-4',
        title: 'Tabela HTML',
        description: 'Estrutura básica de uma tabela em HTML',
        language: 'html',
        code: '<table>\n  <tr>\n    <th>Nome</th>\n    <th>Idade</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>24</td>\n  </tr>\n  <tr>\n    <td>Bob</td>\n    <td>30</td>\n  </tr>\n</table>',
      },
      {
        id: 'css-4',
        title: 'Botão Estilizado',
        description: 'Um botão estilizado com CSS',
        language: 'css',
        code: '.button {\n  background-color: #4CAF50; /* Verde */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n}',
      },
      {
        id: 'html-5',
        title: 'Imagem Responsiva',
        description: 'Como tornar uma imagem responsiva em HTML',
        language: 'html',
        code: '<img src="imagem.jpg" alt="Descrição da Imagem" style="max-width: 100%; height: auto;">',
      },
      {
        id: 'css-5',
        title: 'Animações CSS',
        description: 'Criar animações simples com CSS',
        language: 'css',
        code: '@keyframes exemplo {\n  from {background-color: red;}\n  to {background-color: yellow;}\n}\n\n.elemento {\n  animation-name: exemplo;\n  animation-duration: 4s;\n}',
      },
      {
        id: 'html-6',
        title: 'Lista Ordenada',
        description: 'Exemplo de lista ordenada em HTML',
        language: 'html',
        code: '<ol>\n  <li>Primeiro item</li>\n  <li>Segundo item</li>\n  <li>Terceiro item</li>\n</ol>',
      },
      {
        id: 'html-7',
        title: 'Link para Outra Página',
        description: 'Criar um link para outra página',
        language: 'html',
        code: '<a href="https://www.example.com" target="_blank">Visitar Site</a>',
      },
      {
        id: 'css-6',
        title: 'Sombras em CSS',
        description: 'Adicionar sombras a elementos',
        language: 'css',
        code: '.box {\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);\n}',
      },
      {
        id: 'html-8',
        title: 'Campo de Seleção',
        description: 'Criar um campo select em um formulário',
        language: 'html',
        code: '<select name="opcoes" id="opcoes">\n  <option value="opcao1">Opção 1</option>\n  <option value="opcao2">Opção 2</option>\n  <option value="opcao3">Opção 3</option>\n</select>',
      },
      {
        id: 'css-7',
        title: 'Transições em CSS',
        description: 'Adicionar transições suaves a elementos',
        language: 'css',
        code: '.botao {\n  background-color: blue;\n  color: white;\n  transition: background-color 0.3s;\n}\n\n.botao:hover {\n  background-color: green;\n}',
      },
      {
        id: 'html-9',
        title: 'Iframe',
        description: 'Adicionar um iframe em uma página',
        language: 'html',
        code: '<iframe src="https://www.example.com" width="600" height="400" frameborder="0"></iframe>',
      },
      {
        id: 'css-8',
        title: 'Texto Gradiente',
        description: 'Criar um texto com efeito de gradiente',
        language: 'css',
        code: '.texto-gradiente {\n  background: linear-gradient(to right, red, yellow);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}',
      },
      {
        id: 'html-10',
        title: 'Input de Data',
        description: 'Adicionar campo de input de data',
        language: 'html',
        code: '<input type="date" id="data" name="data">',
      },
      {
        id: 'css-9',
        title: 'Borda Animada',
        description: 'Criar animação em bordas com CSS',
        language: 'css',
        code: '.borda-animada {\n  border: 2px solid transparent;\n  padding: 10px;\n  background-image: linear-gradient(white, white), linear-gradient(to right, red, blue);\n  background-origin: border-box;\n  background-clip: content-box, border-box;\n  animation: movimento 2s linear infinite;\n}\n\n@keyframes movimento {\n  from { background-position: 0 0; }\n  to { background-position: 100% 0; }\n}',
      },
      {
        id: 'html-11',
        title: 'Campo de Busca',
        description: 'Adicionar um campo de busca em HTML',
        language: 'html',
        code: '<input type="search" id="busca" name="busca" placeholder="Buscar...">',
      },
      {
        id: 'css-10',
        title: 'Layout Responsivo',
        description: 'Criar responsividade com media queries',
        language: 'css',
        code: '@media (max-width: 768px) {\n  .menu {\n    display: none;\n  }\n  .menu-mobile {\n    display: block;\n  }\n}',
      },
      {
        id: 'html-12',
        title: 'Elemento Audio',
        description: 'Adicionar um player de áudio',
        language: 'html',
        code: '<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n  Seu navegador não suporta o elemento de áudio.\n</audio>',
      },
    ],
  },
  {
    id: 'sass',
    name: 'Sass',
    icon: <Box size={24} className="text-purple-400" />,
    description: 'CSS com superpoderes',
    documentation: 'https://sass-lang.com/documentation',
    tutorials: [
      { title: 'Básico de Sass', url: 'https://sass-lang.com/guide' },
      {
        title: 'Documentação Sass',
        url: 'https://sass-lang.com/documentation',
      },
    ],
    snippets: [
      {
        id: 'sass-1',
        title: 'Configuração Sass',
        description: 'Instalar e compilar Sass',
        language: 'bash',
        code: 'npm install -g sass\n\n# Compilar sass para css\nsass input.scss output.css\n\n# Observar mudanças\nsass --watch input.scss output.css',
      },
      {
        id: 'sass-2',
        title: 'Variáveis Sass',
        description: 'Usando variáveis e aninhamento em Sass',
        language: 'scss',
        code: '// Variáveis\n$cor-primaria: #3498db;\n$cor-secundaria: #2ecc71;\n$fonte-padrao: "Helvetica", sans-serif;\n$padding-base: 15px;\n\n// Aninhamento\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: $padding-base;\n  \n  .header {\n    background-color: $cor-primaria;\n    color: white;\n    \n    h1 {\n      font-family: $fonte-padrao;\n      font-size: 2em;\n    }\n  }\n  \n  .content {\n    background-color: lighten($cor-primaria, 40%);\n    padding: $padding-base;\n  }\n}',
      },
      {
        id: 'sass-3',
        title: 'Mixins Sass',
        description: 'Criar estilos reutilizáveis com mixins',
        language: 'scss',
        code: '// Definição de mixin\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin box-shadow($x: 0, $y: 2px, $blur: 4px, $color: rgba(0,0,0,.3)) {\n  box-shadow: $x $y $blur $color;\n}\n\n// Uso\n.card {\n  @include flex-center;\n  @include box-shadow(0, 4px, 8px, rgba(0,0,0,.2));\n  \n  width: 300px;\n  padding: 20px;\n  background-color: white;\n}\n\n.button {\n  @include flex-center;\n  @include box-shadow();\n  \n  padding: 10px 15px;\n  border-radius: 4px;\n}',
      },
      {
        id: 'sass-4',
        title: 'Partials e Importações',
        description: 'Organizar estilos em arquivos parciais e importá-los',
        language: 'scss',
        code: '/* _variables.scss */\n$cor-primaria: #3498db;\n$padding-base: 15px;\n\n/* _mixins.scss */\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* main.scss */\n@import "variables";\n@import "mixins";\n\n.container {\n  @include flex-center;\n  padding: $padding-base;\n  background-color: $cor-primaria;\n}',
      },
      {
        id: 'sass-5',
        title: 'Loops em Sass',
        description: 'Utilizar loops para gerar estilos em Sass',
        language: 'scss',
        code: '@for $i from 1 through 3 {\n  .col-#{$i} {\n    width: 100% / 3 * $i;\n  }\n}',
      },
      {
        id: 'sass-6',
        title: 'Funções Personalizadas',
        description: 'Criar funções personalizadas em Sass',
        language: 'scss',
        code: '@function calcular-rem($px) {\n  @return $px / 16 * 1rem;\n}\n\n.elemento {\n  font-size: calcular-rem(18px);\n}',
      },
      {
        id: 'sass-7',
        title: 'Herança com @extend',
        description: 'Utilizar herança com o comando @extend',
        language: 'scss',
        code: '.btn {\n  padding: 10px 20px;\n  border-radius: 4px;\n  background-color: #3498db;\n  color: white;\n}\n\n.btn-primary {\n  @extend .btn;\n  background-color: #2ecc71;\n}',
      },
      {
        id: 'sass-8',
        title: 'Operações de Cores',
        description: 'Realizar operações com cores em Sass',
        language: 'scss',
        code: '$cor: #3498db;\n\n.elemento {\n  background-color: lighten($cor, 20%);\n  border: 1px solid darken($cor, 10%);\n}',
      },
      {
        id: 'sass-9',
        title: 'Condicionais em Sass',
        description: 'Utilizar condicionais em Sass',
        language: 'scss',
        code: '$tema: dark;\n\nbody {\n  @if $tema == light {\n    background-color: white;\n    color: black;\n  } @else if $tema == dark {\n    background-color: black;\n    color: white;\n  }\n}',
      },
      {
        id: 'sass-10',
        title: 'Interpolação de Strings',
        description: 'Usar interpolação de strings em Sass',
        language: 'scss',
        code: '$base-url: "https://meusite.com";\n\n.icon {\n  background-image: url("#{$base-url}/imagens/icone.png");\n}',
      },
      {
        id: 'sass-11',
        title: 'Nesting Avançado',
        description:
          'Uso de aninhamento avançado com pseudoelementos e pseudoclasse',
        language: 'scss',
        code: '.menu {\n  li {\n    list-style: none;\n    a {\n      text-decoration: none;\n      &:hover {\n        color: $cor-primaria;\n      }\n    }\n  }\n}',
      },
      {
        id: 'sass-12',
        title: 'Chave & para Hierarquia',
        description: "Usar '&' para modificar o pai no contexto do filho",
        language: 'scss',
        code: '.btn {\n  color: white;\n  &.primary {\n    background-color: $cor-primaria;\n  }\n  &.secondary {\n    background-color: $cor-secundaria;\n  }\n}',
      },
      {
        id: 'sass-13',
        title: 'Gerando Classes com @each',
        description: 'Iterar por listas em Sass para criar classes',
        language: 'scss',
        code: '$cores: red, blue, green;\n\n@each $cor in $cores {\n  .bg-#{$cor} {\n    background-color: $cor;\n  }\n}',
      },
      {
        id: 'sass-14',
        title: 'Função Built-in: map-get',
        description: 'Extrair valores de mapas com map-get',
        language: 'scss',
        code: '$config: (\n  primary: #3498db,\n  secondary: #2ecc71\n);\n\n.btn {\n  background-color: map-get($config, primary);\n}',
      },
      {
        id: 'sass-15',
        title: 'Placeholder Selector',
        description: 'Criar estilos reutilizáveis com placeholders',
        language: 'scss',
        code: '%centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal {\n  @extend %centered;\n}',
      },
      {
        id: 'sass-16',
        title: 'Configuração Responsiva',
        description: 'Criar breakpoints para design responsivo',
        language: 'scss',
        code: '$breakpoints: (\n  small: 480px,\n  medium: 768px,\n  large: 1024px\n);\n\n@each $name, $size in $breakpoints {\n  @media (min-width: $size) {\n    body {\n      font-size: if($name == medium, 1.2em, 1em);\n    }\n  }\n}',
      },
      {
        id: 'sass-17',
        title: 'Mapear Breakpoints',
        description: 'Usar loops para gerar breakpoints automáticos',
        language: 'scss',
        code: '@mixin breakpoint($size) {\n  @media (min-width: $size) {\n    @content;\n  }\n}\n\n.container {\n  @include breakpoint(768px) {\n    max-width: 750px;\n  }\n  @include breakpoint(1024px) {\n    max-width: 1000px;\n  }\n}',
      },
      {
        id: 'sass-18',
        title: 'Estilos Condicionais',
        description: 'Alterar estilos com base em variáveis',
        language: 'scss',
        code: '$modo-dark: true;\n\nbody {\n  background-color: if($modo-dark, #000, #fff);\n  color: if($modo-dark, #fff, #000);\n}',
      },
      {
        id: 'sass-19',
        title: 'Mixin de Gradiente',
        description: 'Criar gradientes customizados com mixins',
        language: 'scss',
        code: '@mixin gradiente($cor1, $cor2) {\n  background: linear-gradient(to right, $cor1, $cor2);\n}\n\n.header {\n  @include gradiente(#ff7e5f, #feb47b);\n}',
      },
      {
        id: 'sass-20',
        title: 'Iterar com Map',
        description: 'Criar classes dinâmicas baseadas em mapas',
        language: 'scss',
        code: '$status-colors: (\n  success: #28a745,\n  warning: #ffc107,\n  danger: #dc3545\n);\n\n@each $status, $color in $status-colors {\n  .alert-#{$status} {\n    background-color: $color;\n  }\n}',
      },
      {
        id: 'sass-21',
        title: 'Listas e Manipulação',
        description: 'Criar e modificar listas em Sass',
        language: 'scss',
        code: '$colunas: 1fr 2fr 1fr;\n\n.container {\n  grid-template-columns: $colunas;\n}',
      },
      {
        id: 'sass-22',
        title: 'Animação com @keyframes',
        description: 'Usar @keyframes diretamente no Sass',
        language: 'scss',
        code: '@keyframes aparecer {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.elemento {\n  animation: aparecer 2s ease-in-out;\n}',
      },
    ],
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: <Database size={24} className="text-red-400" />,
    description:
      'Uma plataforma para construção de aplicações web para desktop e dispositivos móveis',
    documentation: 'https://angular.io/docs',
    tutorials: [
      { title: 'Primeiros Passos', url: 'https://angular.io/start' },
      { title: 'Tour of Heroes', url: 'https://angular.io/tutorial' },
    ],
    snippets: [
      {
        id: 'angular-1',
        title: 'Configuração Angular',
        description: 'Criar um novo projeto Angular',
        language: 'bash',
        code: 'npm install -g @angular/cli\nng new meu-app-angular\ncd meu-app-angular\nng serve',
      },
      {
        id: 'angular-2',
        title: 'Componente Angular',
        description: 'Criar um componente básico Angular',
        language: 'typescript',
        code: '// Gerar componente\n// ng generate component hello\n\n// hello.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n  selector: "app-hello",\n  template: `\n    <div>\n      <h1>Olá, {{ nome }}!</h1>\n      <button (click)="mudarNome()">Mudar Nome</button>\n    </div>\n  `,\n  styles: [`\n    h1 { color: blue; }\n    button { padding: 8px 16px; }\n  `]\n})\nexport class HelloComponent {\n  nome: string = "Mundo";\n  \n  mudarNome() {\n    this.nome = "Angular";\n  }\n}',
      },
      {
        id: 'angular-3',
        title: 'Serviço Angular',
        description: 'Criar e usar um serviço Angular',
        language: 'typescript',
        code: '// Gerar serviço\n// ng generate service data\n\n// data.service.ts\nimport { Injectable } from "@angular/core";\nimport { HttpClient } from "@angular/common/http";\nimport { Observable } from "rxjs";\n\n@Injectable({\n  providedIn: "root"\n})\nexport class DataService {\n  private apiUrl = "https://api.example.com/data";\n  \n  constructor(private http: HttpClient) {}\n  \n  getData(): Observable<any[]> {\n    return this.http.get<any[]>(this.apiUrl);\n  }\n}\n\n// Usando o serviço em um componente\nimport { Component, OnInit } from "@angular/core";\nimport { DataService } from "../data.service";\n\n@Component({\n  selector: "app-data-list",\n  template: `\n    <div *ngIf="loading">Carregando...</div>\n    <ul *ngIf="!loading">\n      <li *ngFor="let item of items">{{ item.name }}</li>\n    </ul>\n  `\n})\nexport class DataListComponent implements OnInit {\n  items: any[] = [];\n  loading = true;\n  \n  constructor(private dataService: DataService) {}\n  \n  ngOnInit() {\n    this.dataService.getData().subscribe(data => {\n      this.items = data;\n      this.loading = false;\n    });\n  }\n}',
      },
      {
        id: 'angular-4',
        title: 'Binding de Dados',
        description: 'Exemplo de binding de dados em Angular',
        language: 'typescript',
        code: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-data-binding",\n  template: `\n    <input [(ngModel)]="nome" placeholder="Digite seu nome">\n    <p>Olá, {{ nome }}!</p>\n  `\n})\nexport class DataBindingComponent {\n  nome: string = "";\n}',
      },
      {
        id: 'angular-5',
        title: 'Diretivas Estruturais',
        description: 'Usar diretivas estruturais como *ngIf e *ngFor',
        language: 'typescript',
        code: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-diretivas",\n  template: `\n    <div *ngIf="mostrar">\n      <p>Este texto é exibido condicionalmente</p>\n    </div>\n    <ul>\n      <li *ngFor="let item of itens">{{ item }}</li>\n    </ul>\n    <button (click)="adicionarItem()">Adicionar Item</button>\n  `\n})\nexport class DiretivasComponent {\n  mostrar: boolean = true;\n  itens: string[] = ["Item 1", "Item 2", "Item 3"];\n  \n  adicionarItem() {\n    this.itens.push(`Item ${this.itens.length + 1}`);\n  }\n}',
      },
      {
        id: 'angular-6',
        title: 'Injeção de Dependência',
        description: 'Exemplo de injeção de dependência em Angular',
        language: 'typescript',
        code: 'import { Component, OnInit } from "@angular/core";\nimport { HttpClient } from "@angular/common/http";\nimport { Observable } from "rxjs";\n\n@Component({\n  selector: "app-injecao-dependencia",\n  template: `\n    <ul>\n      <li *ngFor="let user of users">{{ user.name }}</li>\n    </ul>\n  `\n})\nexport class InjecaoDependenciaComponent implements OnInit {\n  users: any[] = [];\n  \n  constructor(private http: HttpClient) {}\n  \n  ngOnInit() {\n    this.fetchUsers().subscribe(data => this.users = data);\n  }\n  \n  fetchUsers(): Observable<any[]> {\n    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");\n  }\n}',
      },
      {
        id: 'angular-7',
        title: 'Guards de Rotas',
        description: 'Proteger rotas com Guards em Angular',
        language: 'typescript',
        code: "// auth.guard.ts\nimport { Injectable } from '@angular/core';\nimport { CanActivate, Router } from '@angular/router';\n\n@Injectable({ providedIn: 'root' })\nexport class AuthGuard implements CanActivate {\n  constructor(private router: Router) {}\n\n  canActivate(): boolean {\n    const isAuthenticated = !!localStorage.getItem('token');\n    if (!isAuthenticated) {\n      this.router.navigate(['/login']);\n      return false;\n    }\n    return true;\n  }\n}\n\n// app-routing.module.ts\nimport { AuthGuard } from './auth.guard';\n\nconst routes = [\n  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },\n];",
      },
      {
        id: 'angular-8',
        title: 'Reactive Forms',
        description: 'Criar formulários reativos em Angular',
        language: 'typescript',
        code: '// app.component.ts\nimport { Component } from \'@angular/core\';\nimport { FormBuilder, FormGroup, Validators } from \'@angular/forms\';\n\n@Component({\n  selector: \'app-root\',\n  template: `\n    <form [formGroup]="form" (ngSubmit)="onSubmit()">\n      <input formControlName="name" placeholder="Nome">\n      <button type="submit">Enviar</button>\n    </form>\n  `\n})\nexport class AppComponent {\n  form: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.form = this.fb.group({\n      name: [\'\', Validators.required]\n    });\n  }\n\n  onSubmit() {\n    console.log(this.form.value);\n  }\n}',
      },
      {
        id: 'angular-9',
        title: 'Interceptors HTTP',
        description: 'Interceptar requisições HTTP em Angular',
        language: 'typescript',
        code: "// auth.interceptor.ts\nimport { Injectable } from '@angular/core';\nimport { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';\n\n@Injectable({ providedIn: 'root' })\nexport class AuthInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest<any>, next: HttpHandler) {\n    const token = localStorage.getItem('token');\n    const cloned = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });\n    return next.handle(cloned);\n  }\n}\n\n// app.module.ts\nimport { HTTP_INTERCEPTORS } from '@angular/common/http';\n\n@NgModule({\n  providers: [\n    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },\n  ],\n})",
      },
      {
        id: 'angular-10',
        title: 'Pipes Personalizados',
        description: 'Criar e usar pipes personalizados',
        language: 'typescript',
        code: "// app.pipe.ts\nimport { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({ name: 'capitalize' })\nexport class CapitalizePipe implements PipeTransform {\n  transform(value: string): string {\n    return value.charAt(0).toUpperCase() + value.slice(1);\n  }\n}\n\n// app.component.html\n<p>{{ 'angular' | capitalize }}</p>",
      },
      {
        id: 'angular-11',
        title: 'Lazy Loading',
        description: 'Carregar módulos sob demanda',
        language: 'typescript',
        code: "// app-routing.module.ts\nconst routes: Routes = [\n  { path: 'lazy', loadChildren: () => import('./lazy.module').then(m => m.LazyModule) },\n];",
      },
      {
        id: 'angular-12',
        title: 'Eventos de Componentes',
        description: 'Comunicação de filho para pai usando eventos',
        language: 'typescript',
        code: "// child.component.ts\nimport { Component, Output, EventEmitter } from '@angular/core';\n\n@Component({\n  selector: 'app-child',\n  template: `<button (click)=\"notifyParent()\">Notificar</button>`\n})\nexport class ChildComponent {\n  @Output() notify = new EventEmitter<string>();\n\n  notifyParent() {\n    this.notify.emit('Mensagem do filho');\n  }\n}\n\n// parent.component.html\n<app-child (notify)=\"onNotify($event)\"></app-child>",
      },
      {
        id: 'angular-13',
        title: 'Two-Way Binding Personalizado',
        description: 'Criar binding bidirecional personalizado',
        language: 'typescript',
        code: '// custom.component.ts\nimport { Component, Input, Output, EventEmitter } from \'@angular/core\';\n\n@Component({\n  selector: \'app-custom\',\n  template: `<input [value]="value" (input)="valueChange.emit($event.target.value)">`\n})\nexport class CustomComponent {\n  @Input() value: string;\n  @Output() valueChange = new EventEmitter<string>();\n}',
      },
      {
        id: 'angular-14',
        title: 'Guards Resolve',
        description: 'Pré-carregar dados para rotas',
        language: 'typescript',
        code: "// data.resolve.ts\nimport { Injectable } from '@angular/core';\nimport { Resolve } from '@angular/router';\nimport { DataService } from './data.service';\n\n@Injectable({ providedIn: 'root' })\nexport class DataResolve implements Resolve<any> {\n  constructor(private dataService: DataService) {}\n\n  resolve() {\n    return this.dataService.getData();\n  }\n}",
      },
      {
        id: 'angular-15',
        title: 'Animações Angular',
        description: 'Adicionar animações básicas a um componente',
        language: 'typescript',
        code: "// app.component.ts\nimport { Component } from '@angular/core';\nimport { trigger, state, style, transition, animate } from '@angular/animations';\n\n@Component({\n  selector: 'app-root',\n  template: `<div [@fade]=\"state\" (click)=\"toggle()\">Clique Aqui</div>`\n})\nexport class AppComponent {\n  state = 'visible';\n\n  toggle() {\n    this.state = this.state === 'visible' ? 'hidden' : 'visible';\n  }\n}",
      },
      {
        id: 'angular-16',
        title: 'Módulo Compartilhado',
        description: 'Criar um módulo compartilhado',
        language: 'typescript',
        code: "// shared.module.ts\nimport { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\n\n@NgModule({\n  exports: [CommonModule, FormsModule],\n})\nexport class SharedModule {}",
      },
      {
        id: 'angular-17',
        title: 'Resolver Problemas com RXJS',
        description: 'Combinar múltiplos observables com RXJS',
        language: 'typescript',
        code: "// exemplo.ts\nimport { forkJoin } from 'rxjs';\n\nforkJoin({\n  users: fetchUsers(),\n  posts: fetchPosts()\n}).subscribe(console.log);",
      },
      {
        id: 'angular-18',
        title: 'Detecção de Mudanças',
        description: 'Usar ChangeDetectionStrategy para otimização',
        language: 'typescript',
        code: "// app.component.ts\nimport { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class AppComponent {}",
      },
    ],
  },
  {
    id: 'vue',
    name: 'Vue',
    icon: <FileCode size={24} className="text-green-500" />,
    description:
      'Framework JavaScript progressivo para construção de interfaces de usuário',
    documentation: 'https://vuejs.org/v2/guide/',
    tutorials: [
      { title: 'Vue.js Guide', url: 'https://vuejs.org/v2/guide/' },
      {
        title: 'Vue.js Tutorial',
        url: 'https://www.tutorialspoint.com/vuejs/index.htm',
      },
    ],
    snippets: [
      {
        id: 'vue-1',
        title: 'Hello World',
        description: 'Componente básico do Vue',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    {{ message }}\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: \'Hello, World!\'\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-2',
        title: 'Two-Way Binding',
        description: 'Usando v-model para two-way binding',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <input v-model="message" placeholder="Digite algo">\n    <p>{{ message }}</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: \'\'\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-3',
        title: 'List Rendering',
        description: 'Renderizando uma lista com v-for',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <ul>\n      <li v-for="item in items" :key="item.id">\n        {{ item.text }}\n      </li>\n    </ul>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      items: [\n        { id: 1, text: \'Item 1\' },\n        { id: 2, text: \'Item 2\' },\n        { id: 3, text: \'Item 3\' }\n      ]\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-4',
        title: 'Conditional Rendering',
        description: 'Renderização condicional com v-if',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <p v-if="show">Você me viu!</p>\n    <button @click="show = !show">Toggle</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      show: true\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-5',
        title: 'Event Handling',
        description: 'Manipulação de eventos com v-on',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <button @click="sayHello">Clique em mim</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    sayHello() {\n      alert(\'Hello, World!\');\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-6',
        title: 'Computed Properties',
        description: 'Usando propriedades computadas',
        language: 'javascript',
        code: "<template>\n  <div id=\"app\">\n    <p>Mensagem original: {{ message }}</p>\n    <p>Mensagem invertida: {{ reversedMessage }}</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: 'Hello, World!'\n    }\n  },\n  computed: {\n    reversedMessage() {\n      return this.message.split('').reverse().join('');\n    }\n  }\n}\n</script>",
      },
      {
        id: 'vue-7',
        title: 'Watchers',
        description: 'Usando watchers para observar mudanças',
        language: 'javascript',
        code: "<template>\n  <div id=\"app\">\n    <input v-model=\"question\" placeholder=\"Faça uma pergunta\">\n    <p>{{ answer }}</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      question: '',\n      answer: 'Esperando por uma pergunta...'\n    }\n  },\n  watch: {\n    question(newQuestion) {\n      this.answer = 'Pensando...';\n      this.getAnswer();\n    }\n  },\n  methods: {\n    getAnswer() {\n      setTimeout(() => {\n        this.answer = 'Resposta para: ' + this.question;\n      }, 1000);\n    }\n  }\n}\n</script>",
      },
      {
        id: 'vue-8',
        title: 'Componentes',
        description: 'Criando e usando componentes',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <HelloWorld />\n  </div>\n</template>\n\n<script>\nimport HelloWorld from \'./components/HelloWorld.vue\';\n\nexport default {\n  components: {\n    HelloWorld\n  }\n}\n</script>',
      },
      {
        id: 'vue-9',
        title: 'Props',
        description: 'Passando dados para componentes com props',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <Greeting :name="name" />\n  </div>\n</template>\n\n<script>\nimport Greeting from \'./components/Greeting.vue\';\n\nexport default {\n  components: {\n    Greeting\n  },\n  data() {\n    return {\n      name: \'John Doe\'\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-10',
        title: 'Slots',
        description: 'Usando slots para conteúdo dinâmico',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <Card>\n      <template v-slot:header>\n        <h3>Título do Card</h3>\n      </template>\n      <template v-slot:body>\n        <p>Conteúdo do Card</p>\n      </template>\n    </Card>\n  </div>\n</template>\n\n<script>\nimport Card from \'./components/Card.vue\';\n\nexport default {\n  components: {\n    Card\n  }\n}\n</script>',
      },
      {
        id: 'vue-11',
        title: 'Dynamic Components',
        description: 'Alternando entre componentes dinamicamente',
        language: 'javascript',
        code: "<template>\n  <div id=\"app\">\n    <component :is=\"currentComponent\" />\n    <button @click=\"toggleComponent\">Alternar Componente</button>\n  </div>\n</template>\n\n<script>\nimport ComponentA from './components/ComponentA.vue';\nimport ComponentB from './components/ComponentB.vue';\n\nexport default {\n  components: {\n    ComponentA,\n    ComponentB\n  },\n  data() {\n    return {\n      currentComponent: 'ComponentA'\n    }\n  },\n  methods: {\n    toggleComponent() {\n      this.currentComponent = this.currentComponent === 'ComponentA' ? 'ComponentB' : 'ComponentA';\n    }\n  }\n}\n</script>",
      },
      {
        id: 'vue-12',
        title: 'Vue Router',
        description: 'Configurando rotas com Vue Router',
        language: 'javascript',
        code: "import Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport Home from './components/Home.vue';\nimport About from './components/About.vue';\n\nVue.use(VueRouter);\n\nconst routes = [\n  { path: '/', component: Home },\n  { path: '/about', component: About }\n];\n\nconst router = new VueRouter({\n  routes\n});\n\nexport default router;",
      },
      {
        id: 'vue-13',
        title: 'Vuex Store',
        description: 'Configurando uma store com Vuex',
        language: 'javascript',
        code: "import Vue from 'vue';\nimport Vuex from 'vuex';\n\nVue.use(Vuex);\n\nconst store = new Vuex.Store({\n  state: {\n    count: 0\n  },\n  mutations: {\n    increment(state) {\n      state.count++;\n    }\n  },\n  actions: {\n    increment({ commit }) {\n      commit('increment');\n    }\n  }\n});\n\nexport default store;",
      },
      {
        id: 'vue-14',
        title: 'Form Validation',
        description: 'Validação de formulários com Vuelidate',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <form @submit.prevent="submitForm">\n      <input v-model="form.email" placeholder="Email">\n      <p v-if="!$v.form.email.required">Email é obrigatório</p>\n      <button type="submit">Enviar</button>\n    </form>\n  </div>\n</template>\n\n<script>\nimport { required, email } from \'vuelidate/lib/validators\';\n\nexport default {\n  data() {\n    return {\n      form: {\n        email: \'\'\n      }\n    }\n  },\n  validations: {\n    form: {\n      email: { required, email }\n    }\n  },\n  methods: {\n    submitForm() {\n      if (this.$v.$invalid) {\n        alert(\'Formulário inválido\');\n      } else {\n        alert(\'Formulário enviado\');\n      }\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-15',
        title: 'API Requests',
        description: 'Fazendo requisições HTTP com Axios',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <button @click="fetchData">Buscar Dados</button>\n    <p>{{ data }}</p>\n  </div>\n</template>\n\n<script>\nimport axios from \'axios\';\n\nexport default {\n  data() {\n    return {\n      data: null\n    }\n  },\n  methods: {\n    async fetchData() {\n      try {\n        const response = await axios.get(\'https://api.example.com/data\');\n        this.data = response.data;\n      } catch (error) {\n        console.error(error);\n      }\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-16',
        title: 'Custom Directives',
        description: 'Criando diretivas personalizadas',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <p v-highlight="\'yellow\'">Este texto será destacado</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  directives: {\n    highlight: {\n      inserted(el, binding) {\n        el.style.backgroundColor = binding.value;\n      }\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-17',
        title: 'Mixins',
        description: 'Reutilizando lógica com mixins',
        language: 'javascript',
        code: "const myMixin = {\n  created() {\n    this.hello();\n  },\n  methods: {\n    hello() {\n      console.log('Hello from mixin!');\n    }\n  }\n};\n\nexport default myMixin;",
      },
      {
        id: 'vue-18',
        title: 'Transitions',
        description: 'Adicionando transições a elementos',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <button @click="show = !show">Toggle</button>\n    <transition name="fade">\n      <p v-if="show">Hello, World!</p>\n    </transition>\n  </div>\n</template>\n\n<style>\n.fade-enter-active, .fade-leave-active {\n  transition: opacity 0.5s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n</style>',
      },
      {
        id: 'vue-19',
        title: 'Scoped Slots',
        description: 'Usando scoped slots para passar dados',
        language: 'javascript',
        code: '<template>\n  <div id="app">\n    <DataList :items="items">\n      <template v-slot:default="{ item }">\n        <p>{{ item.text }}</p>\n      </template>\n    </DataList>\n  </div>\n</template>\n\n<script>\nimport DataList from \'./components/DataList.vue\';\n\nexport default {\n  components: {\n    DataList\n  },\n  data() {\n    return {\n      items: [\n        { id: 1, text: \'Item 1\' },\n        { id: 2, text: \'Item 2\' }\n      ]\n    }\n  }\n}\n</script>',
      },
      {
        id: 'vue-20',
        title: 'Global Event Bus',
        description: 'Comunicação entre componentes com Event Bus',
        language: 'javascript',
        code: "// eventBus.js\nimport Vue from 'vue';\nexport const EventBus = new Vue();\n\n// ComponentA.vue\n<template>\n  <button @click=\"sendMessage\">Enviar Mensagem</button>\n</template>\n\n<script>\nimport { EventBus } from './eventBus';\n\nexport default {\n  methods: {\n    sendMessage() {\n      EventBus.$emit('message', 'Hello from ComponentA!');\n    }\n  }\n}\n</script>\n\n// ComponentB.vue\n<template>\n  <p>{{ message }}</p>\n</template>\n\n<script>\nimport { EventBus } from './eventBus';\n\nexport default {\n  data() {\n    return {\n      message: ''\n    }\n  },\n  created() {\n    EventBus.$on('message', (msg) => {\n      this.message = msg;\n    });\n  }\n}\n</script>",
      },
    ],
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: <Grid size={24} className="text-purple-500" />,
    description:
      'Framework CSS popular para desenvolvimento de sites responsivos e mobile-first',
    documentation: 'https://getbootstrap.com/docs/',
    tutorials: [
      {
        title: 'Começando com Bootstrap',
        url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
      },
      {
        title: 'Componentes Bootstrap',
        url: 'https://getbootstrap.com/docs/5.3/components/',
      },
    ],
    snippets: [
      {
        id: 'bootstrap-1',
        title: 'Instalação Bootstrap',
        description: 'Adicionar Bootstrap a um projeto',
        language: 'html',
        code: '<!-- Via CDN -->\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>\n\n<!-- Via npm -->\n<!-- npm install bootstrap -->\n<!-- import \'bootstrap/dist/css/bootstrap.min.css\'; -->',
      },
      {
        id: 'bootstrap-2',
        title: 'Grid System',
        description: 'Sistema de grid responsivo do Bootstrap',
        language: 'html',
        code: '<div class="container">\n  <div class="row">\n    <div class="col-sm-12 col-md-6 col-lg-4">\n      <!-- Ocupa 12 colunas em telas pequenas, 6 em médias e 4 em grandes -->\n      Coluna 1\n    </div>\n    <div class="col-sm-12 col-md-6 col-lg-4">\n      Coluna 2\n    </div>\n    <div class="col-sm-12 col-md-12 col-lg-4">\n      Coluna 3\n    </div>\n  </div>\n</div>',
      },
      {
        id: 'bootstrap-3',
        title: 'Componentes Bootstrap',
        description: 'Exemplos de componentes comuns do Bootstrap',
        language: 'html',
        code: '<!-- Botão -->\n<button type="button" class="btn btn-primary">Botão Primário</button>\n<button type="button" class="btn btn-outline-secondary">Botão Secundário</button>\n\n<!-- Alerta -->\n<div class="alert alert-success" role="alert">\n  Operação realizada com sucesso!\n</div>\n\n<!-- Card -->\n<div class="card" style="width: 18rem;">\n  <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a" class="card-img-top" alt="...">\n  <div class="card-body">\n    <h5 class="card-title">Título do Card</h5>\n    <p class="card-text">Um exemplo de texto rápido para construir o título do card.</p>\n    <a href="#" class="btn btn-primary">Botão</a>\n  </div>\n</div>',
      },
      {
        id: 'bootstrap-4',
        title: 'Navbar',
        description: 'Exemplo de uma barra de navegação básica',
        language: 'html',
        code: '<nav class="navbar navbar-expand-lg navbar-light bg-light">\n  <a class="navbar-brand" href="#">Navbar</a>\n  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" id="navbarNav">\n    <ul class="navbar-nav">\n      <li class="nav-item active">\n        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Features</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Pricing</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>\n      </li>\n    </ul>\n  </div>\n</nav>',
      },
      {
        id: 'bootstrap-5',
        title: 'Formulário',
        description: 'Exemplo de um formulário básico',
        language: 'html',
        code: '<form>\n  <div class="form-group">\n    <label for="exampleInputEmail1">Endereço de email</label>\n    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">\n    <small id="emailHelp" class="form-text text-muted">Nunca compartilhe seu email com ninguém.</small>\n  </div>\n  <div class="form-group">\n    <label for="exampleInputPassword1">Senha</label>\n    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n  </div>\n  <div class="form-group form-check">\n    <input type="checkbox" class="form-check-input" id="exampleCheck1">\n    <label class="form-check-label" for="exampleCheck1">Lembrar-me</label>\n  </div>\n  <button type="submit" class="btn btn-primary">Enviar</button>\n</form>',
      },
      {
        id: 'bootstrap-6',
        title: 'Tabela',
        description: 'Exemplo de uma tabela estilizada com Bootstrap',
        language: 'html',
        code: '<table class="table">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">Primeiro</th>\n      <th scope="col">Último</th>\n      <th scope="col">Usuário</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td colspan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>',
      },
      {
        id: 'bootstrap-7',
        title: 'Modal',
        description: 'Exemplo de um modal básico',
        language: 'html',
        code: '<!-- Botão para abrir o modal -->\n<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">\n  Abrir Modal\n</button>\n\n<!-- Modal -->\n<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="exampleModalLabel">Título do Modal</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        Conteúdo do modal...\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>\n        <button type="button" class="btn btn-primary">Salvar mudanças</button>\n      </div>\n    </div>\n  </div>\n</div>',
      },
      {
        id: 'bootstrap-8',
        title: 'Tooltip',
        description: 'Exemplo de tooltip com Bootstrap',
        language: 'html',
        code: '<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip no topo">\n  Tooltip no topo\n</button>\n\n<script>\n$(function () {\n  $(\'[data-toggle="tooltip"]\').tooltip()\n})\n</script>',
      },
      {
        id: 'bootstrap-9',
        title: 'Breadcrumb',
        description: 'Exemplo de breadcrumb para navegação',
        language: 'html',
        code: '<nav aria-label="breadcrumb">\n  <ol class="breadcrumb">\n    <li class="breadcrumb-item"><a href="#">Home</a></li>\n    <li class="breadcrumb-item"><a href="#">Library</a></li>\n    <li class="breadcrumb-item active" aria-current="page">Data</li>\n  </ol>\n</nav>',
      },
      {
        id: 'bootstrap-10',
        title: 'Badge',
        description: 'Exemplo de badge para exibir notificações',
        language: 'html',
        code: '<button type="button" class="btn btn-primary">\n  Mensagens <span class="badge bg-secondary">4</span>\n</button>',
      },
      {
        id: 'bootstrap-11',
        title: 'Spinner de Carregamento',
        description: 'Adicionar um spinner de carregamento',
        language: 'html',
        code: '<div class="spinner-border text-primary" role="status">\n  <span class="visually-hidden">Carregando...</span>\n</div>',
      },
      {
        id: 'bootstrap-12',
        title: 'Lista de Grupos',
        description: 'Criar uma lista de grupos estilizada',
        language: 'html',
        code: '<ul class="list-group">\n  <li class="list-group-item active">Item 1</li>\n  <li class="list-group-item">Item 2</li>\n  <li class="list-group-item">Item 3</li>\n</ul>',
      },
      {
        id: 'bootstrap-13',
        title: 'Collapse',
        description: 'Componente para ocultar/mostrar conteúdo',
        language: 'html',
        code: '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-expanded="false">\n  Mostrar/Ocultar\n</button>\n<div class="collapse" id="content">\n  <div class="card card-body">\n    Conteúdo oculto.\n  </div>\n</div>',
      },
      {
        id: 'bootstrap-14',
        title: 'Carousel',
        description: 'Exemplo de um carousel de imagens',
        language: 'html',
        code: '<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">\n  <div class="carousel-inner">\n    <div class="carousel-item active">\n      <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="...">\n    </div>\n    <div class="carousel-item">\n      <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="...">\n    </div>\n  </div>\n  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">\n    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n    <span class="visually-hidden">Anterior</span>\n  </button>\n  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">\n    <span class="carousel-control-next-icon" aria-hidden="true"></span>\n    <span class="visually-hidden">Próximo</span>\n  </button>\n</div>',
      },
      {
        id: 'bootstrap-15',
        title: 'Progress Bar',
        description: 'Exemplo de barra de progresso',
        language: 'html',
        code: '<div class="progress">\n  <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>\n</div>',
      },
      {
        id: 'bootstrap-16',
        title: 'Offcanvas',
        description: 'Exemplo de menu offcanvas',
        language: 'html',
        code: '<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">\n  Abrir Menu\n</button>\n<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample">\n  <div class="offcanvas-header">\n    <h5 class="offcanvas-title">Título do Offcanvas</h5>\n    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>\n  </div>\n  <div class="offcanvas-body">\n    Conteúdo do offcanvas.\n  </div>\n</div>',
      },
      {
        id: 'bootstrap-17',
        title: 'Card com Imagem e Botão',
        description: 'Card estilizado com imagem e botão',
        language: 'html',
        code: '<div class="card" style="width: 18rem;">\n  <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">\n  <div class="card-body">\n    <h5 class="card-title">Título do Card</h5>\n    <p class="card-text">Texto adicional.</p>\n    <a href="#" class="btn btn-primary">Ação</a>\n  </div>\n</div>',
      },
      {
        id: 'bootstrap-18',
        title: 'Toast',
        description: 'Notificação estilizada usando Toast',
        language: 'html',
        code: '<div class="toast" role="alert">\n  <div class="toast-header">\n    <strong class="me-auto">Bootstrap</strong>\n    <small>Agora</small>\n    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fechar"></button>\n  </div>\n  <div class="toast-body">\n    Este é um exemplo de Toast.\n  </div>\n</div>',
      },
      {
        id: 'bootstrap-19',
        title: 'Dropdown',
        description: 'Criar um dropdown básico',
        language: 'html',
        code: '<div class="dropdown">\n  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">\n    Dropdown\n  </button>\n  <ul class="dropdown-menu">\n    <li><a class="dropdown-item" href="#">Ação 1</a></li>\n    <li><a class="dropdown-item" href="#">Ação 2</a></li>\n  </ul>\n</div>',
      },
      {
        id: 'bootstrap-20',
        title: 'Accordion',
        description: 'Criar um conteúdo expansível',
        language: 'html',
        code: '<div class="accordion" id="accordionExample">\n  <div class="accordion-item">\n    <h2 class="accordion-header">\n      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">\n        Item 1\n      </button>\n    </h2>\n    <div id="collapseOne" class="accordion-collapse collapse">\n      <div class="accordion-body">\n        Conteúdo do item 1.\n      </div>\n    </div>\n  </div>\n</div>',
      },
    ],
  },
  {
    id: 'git',
    name: 'Git',
    icon: <GitBranch size={24} className="text-orange-500" />,
    description:
      'Sistema de controle de versão distribuído para rastrear alterações no código fonte',
    documentation: 'https://git-scm.com/doc',
    tutorials: [
      {
        title: 'Git Handbook',
        url: 'https://guides.github.com/introduction/git-handbook/',
      },
      { title: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2' },
    ],
    snippets: [
      {
        id: 'git-1',
        title: 'Configuração Inicial',
        description: 'Configurar Git pela primeira vez',
        language: 'bash',
        code: '# Configurar nome e email\ngit config --global user.name "Seu Nome"\ngit config --global user.email "seu.email@exemplo.com"\n\n# Verificar configurações\ngit config --list',
      },
      {
        id: 'git-2',
        title: 'Comandos Básicos',
        description: 'Comandos Git essenciais para o dia a dia',
        language: 'bash',
        code: '# Iniciar um repositório\ngit init\n\n# Clonar um repositório existente\ngit clone https://github.com/usuario/repositorio.git\n\n# Verificar status\ngit status\n\n# Adicionar arquivos ao staging\ngit add arquivo.txt    # Arquivo específico\ngit add .             # Todos os arquivos\n\n# Fazer commit\ngit commit -m "Mensagem do commit"\n\n# Enviar alterações para o repositório remoto\ngit push origin main\n\n# Atualizar repositório local\ngit pull origin main',
      },
      {
        id: 'git-3',
        title: 'Branches',
        description: 'Trabalhar com branches no Git',
        language: 'bash',
        code: '# Listar branches\ngit branch\n\n# Criar nova branch\ngit branch nova-feature\n\n# Mudar para uma branch\ngit checkout nova-feature\n\n# Criar e mudar para nova branch (atalho)\ngit checkout -b nova-feature\n\n# Mesclar branch na branch atual\ngit merge outra-branch\n\n# Deletar branch\ngit branch -d branch-para-deletar',
      },
      {
        id: 'git-4',
        title: 'Deploy',
        description: 'Subir código no GitHub',
        language: 'bash',
        code: '# Criar um novo repositório na linha de comando\necho "# codesnippets" >> README.md\ngit init\ngit add README.md\ngit add -A\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin https://github.com/Daniel/nomeDoProjeto\ngit push -u origin main\n\n# Ou enviar um repositório existente da linha de comando\ngit remote add origin https://github.com/Daniel/nomeDoProjeto\ngit branch -M main\ngit push -u origin main',
      },
      {
        id: 'git-5',
        title: 'Atualizar',
        description: 'Atualizar projeto em construção',
        language: 'bash',
        code: '# Puxar atualização do projeto\ngit pull\n\n# Adicionar todo o código\ngit add -A\n\n# Adicionar commit\ngit commit -m "nome do commit"\n\n# Enviar commit\ngit push',
      },
      {
        id: 'git-6',
        title: 'Revertendo Commits',
        description: 'Desfazer um commit no Git',
        language: 'bash',
        code: '# Desfazer o último commit, mantendo as alterações no working directory\ngit reset --soft HEAD~1\n\n# Desfazer o último commit e descartar as alterações\ngit reset --hard HEAD~1',
      },
      {
        id: 'git-7',
        title: 'Stashing',
        description: 'Guardar e restaurar mudanças não commitadas',
        language: 'bash',
        code: '# Guardar mudanças não commitadas\ngit stash\n\n# Listar mudanças guardadas\ngit stash list\n\n# Restaurar a última mudança guardada\ngit stash pop\n\n# Restaurar uma mudança específica\ngit stash apply stash@{2}',
      },
      {
        id: 'git-8',
        title: 'Tagging',
        description: 'Adicionar tags no Git para versões específicas',
        language: 'bash',
        code: '# Criar uma tag anotada\ngit tag -a v1.0 -m "Versão 1.0"\n\n# Listar todas as tags\ngit tag\n\n# Mostrar detalhes de uma tag\ngit show v1.0\n\n# Enviar tags para o repositório remoto\ngit push origin --tags',
      },
      {
        id: 'git-9',
        title: 'Visualizar Histórico de Commits',
        description: 'Exibir o histórico de commits de um repositório',
        language: 'bash',
        code: '# Exibir o histórico de commits\ngit log\n\n# Exibir de forma compacta\ngit log --oneline\n\n# Exibir graficamente\ngit log --graph --oneline',
      },
      {
        id: 'git-10',
        title: 'Rebase',
        description: 'Reorganizar commits com rebase',
        language: 'bash',
        code: '# Fazer rebase na branch atual com a main\ngit rebase main',
      },
      {
        id: 'git-11',
        title: 'Ignorar Arquivos',
        description: 'Usar um arquivo .gitignore para ignorar arquivos',
        language: 'bash',
        code: '# Criar um arquivo .gitignore\nnode_modules/\n.env\n*.log',
      },
      {
        id: 'git-12',
        title: 'Alterar Mensagem de Commit',
        description: 'Editar a mensagem do último commit',
        language: 'bash',
        code: '# Alterar a mensagem do último commit\ngit commit --amend -m "Nova mensagem do commit"',
      },
      {
        id: 'git-13',
        title: 'Blame',
        description: 'Identificar alterações em um arquivo',
        language: 'bash',
        code: '# Ver quem alterou cada linha de um arquivo\ngit blame arquivo.txt',
      },
      {
        id: 'git-14',
        title: 'Reverter Alterações em Arquivo',
        description: 'Descartar alterações locais em um arquivo específico',
        language: 'bash',
        code: '# Reverter arquivo para o estado do último commit\ngit checkout -- arquivo.txt',
      },
      {
        id: 'git-15',
        title: 'Submódulos',
        description: 'Adicionar e atualizar submódulos',
        language: 'bash',
        code: '# Adicionar um submódulo\ngit submodule add https://github.com/usuario/repo.git pasta/submodulo\n\n# Atualizar submódulos\ngit submodule update --remote',
      },
      {
        id: 'git-16',
        title: 'Cherry Pick',
        description: 'Aplicar commits específicos de outra branch',
        language: 'bash',
        code: '# Aplicar commit específico\ngit cherry-pick <hash-do-commit>',
      },
      {
        id: 'git-17',
        title: 'Logs de Alteração',
        description: 'Exibir alterações em detalhes',
        language: 'bash',
        code: '# Mostrar alterações entre commits\ngit diff\n\n# Mostrar alterações entre branches\ngit diff branch1 branch2',
      },
      {
        id: 'git-18',
        title: 'Renomear Branch',
        description: 'Renomear a branch atual',
        language: 'bash',
        code: '# Renomear a branch atual\ngit branch -m novo-nome',
      },
      {
        id: 'git-19',
        title: 'Exibir Detalhes de um Arquivo',
        description: 'Exibir histórico detalhado de um arquivo',
        language: 'bash',
        code: '# Ver histórico de um arquivo específico\ngit log -- arquivo.txt',
      },
      {
        id: 'git-20',
        title: 'Limpar Arquivos Não Rastreáveis',
        description: 'Remover arquivos não rastreados pelo Git',
        language: 'bash',
        code: '# Exibir arquivos que serão removidos\ngit clean -n\n\n# Remover arquivos não rastreados\ngit clean -f',
      },
    ],
  },
  {
    id: 'node',
    name: 'Node.js',
    icon: <Server size={24} className="text-green-500" />,
    description: 'Ambiente de execução JavaScript do lado do servidor',
    documentation: 'https://nodejs.org/docs/latest/api/',
    tutorials: [
      {
        title: 'Guia Node.js',
        url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
      },
      { title: 'Express.js', url: 'https://expressjs.com/pt-br/' },
    ],
    snippets: [
      {
        id: 'node-1',
        title: 'Servidor HTTP Básico',
        description: 'Criar um servidor HTTP simples com Node.js',
        language: 'javascript',
        code: 'const http = require("http");\n\nconst servidor = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader("Content-Type", "text/plain");\n  res.end("Olá, Mundo!\\n");\n});\n\nconst porta = 3000;\nservidor.listen(porta, () => {\n  console.log(`Servidor rodando em http://localhost:${porta}/`);\n});',
      },
      {
        id: 'node-2',
        title: 'API REST com Express',
        description: 'Criar uma API REST básica com Express.js',
        language: 'javascript',
        code: 'const express = require("express");\nconst app = express();\nconst porta = 3000;\n\n// Middleware para processar JSON\napp.use(express.json());\n\n// Dados de exemplo\nlet usuarios = [\n  { id: 1, nome: "João" },\n  { id: 2, nome: "Maria" }\n];\n\n// Rota GET para listar todos os usuários\napp.get("/usuarios", (req, res) => {\n  res.json(usuarios);\n});\n\n// Rota GET para buscar um usuário específico\napp.get("/usuarios/:id", (req, res) => {\n  const id = parseInt(req.params.id);\n  const usuario = usuarios.find(u => u.id === id);\n  \n  if (!usuario) {\n    return res.status(404).json({ mensagem: "Usuário não encontrado" });\n  }\n  \n  res.json(usuario);\n});\n\n// Rota POST para criar um novo usuário\napp.post("/usuarios", (req, res) => {\n  const { nome } = req.body;\n  \n  if (!nome) {\n    return res.status(400).json({ mensagem: "Nome é obrigatório" });\n  }\n  \n  const id = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;\n  const novoUsuario = { id, nome };\n  \n  usuarios.push(novoUsuario);\n  res.status(201).json(novoUsuario);\n});\n\napp.listen(porta, () => {\n  console.log(`API rodando em http://localhost:${porta}`);\n});',
      },
      {
        id: 'node-3',
        title: 'Operações de Arquivo',
        description: 'Manipular arquivos com o módulo fs do Node.js',
        language: 'javascript',
        code: 'const fs = require("fs");\n\n// Leitura síncrona\ntry {\n  const dados = fs.readFileSync("arquivo.txt", "utf8");\n  console.log(dados);\n} catch (erro) {\n  console.error("Erro ao ler arquivo:", erro);\n}\n\n// Leitura assíncrona\nfs.readFile("arquivo.txt", "utf8", (erro, dados) => {\n  if (erro) {\n    console.error("Erro ao ler arquivo:", erro);\n    return;\n  }\n  console.log(dados);\n});\n\n// Escrita em arquivo\nfs.writeFile("novo-arquivo.txt", "Conteúdo do arquivo", erro => {\n  if (erro) {\n    console.error("Erro ao escrever arquivo:", erro);\n    return;\n  }\n  console.log("Arquivo salvo com sucesso!");\n});\n\n// Usando Promises com fs/promises\nconst fsPromises = require("fs/promises");\n\nasync function manipularArquivos() {\n  try {\n    await fsPromises.writeFile("arquivo.txt", "Novo conteúdo");\n    const conteudo = await fsPromises.readFile("arquivo.txt", "utf8");\n    console.log(conteudo);\n  } catch (erro) {\n    console.error("Erro:", erro);\n  }\n}',
      },
      {
        id: 'node-4',
        title: 'Módulos Personalizados',
        description: 'Criar e importar módulos personalizados no Node.js',
        language: 'javascript',
        code: '// modulo.js\nmodule.exports.ola = function() {\n  return "Olá, Mundo!";\n};\n\n// app.js\nconst modulo = require("./modulo");\nconsole.log(modulo.ola());',
      },
      {
        id: 'node-5',
        title: 'Manipulação de URL',
        description: 'Manipular URLs com o módulo url do Node.js',
        language: 'javascript',
        code: 'const url = require("url");\n\nconst endereco = "http://www.exemplo.com:8080/caminho/para/pagina?nome=João&idade=30";\nconst urlParseada = url.parse(endereco, true);\n\nconsole.log(urlParseada.hostname); // "www.exemplo.com"\nconsole.log(urlParseada.pathname); // "/caminho/para/pagina"\nconsole.log(urlParseada.query);    // { nome: "João", idade: "30" }',
      },
      {
        id: 'node-6',
        title: 'Eventos',
        description: 'Trabalhar com eventos no Node.js',
        language: 'javascript',
        code: 'const EventEmitter = require("events");\n\nclass MeuEmissor extends EventEmitter {}\nconst meuEmissor = new MeuEmissor();\n\n// Registrando um evento\nmeuEmissor.on("evento", (mensagem) => {\n  console.log(mensagem);\n});\n\n// Emitindo um evento\nmeuEmissor.emit("evento", "Olá, Mundo!");',
      },
      {
        id: 'node-7',
        title: 'Operações de Diretório',
        description: 'Manipular diretórios com o módulo fs do Node.js',
        language: 'javascript',
        code: 'const fs = require("fs");\n\n// Criar um novo diretório\nfs.mkdir("novo-diretorio", { recursive: true }, (erro) => {\n  if (erro) {\n    console.error("Erro ao criar diretório:", erro);\n    return;\n  }\n  console.log("Diretório criado com sucesso!");\n});\n\n// Ler o conteúdo de um diretório\nfs.readdir("novo-diretorio", (erro, arquivos) => {\n  if (erro) {\n    console.error("Erro ao ler diretório:", erro);\n    return;\n  }\n  console.log("Conteúdo do diretório:", arquivos);\n});',
      },
      {
        id: 'node-8',
        title: 'Usando Axios para Requisições HTTP',
        description: 'Fazer requisições HTTP com Axios no Node.js',
        language: 'javascript',
        code: 'const axios = require("axios");\n\naxios.get("https://api.exemplo.com/usuarios")\n  .then((resposta) => {\n    console.log(resposta.data);\n  })\n  .catch((erro) => {\n    console.error("Erro ao fazer requisição:", erro);\n  });\n\naxios.post("https://api.exemplo.com/usuarios", { nome: "João" })\n  .then((resposta) => {\n    console.log("Usuário criado:", resposta.data);\n  })\n  .catch((erro) => {\n    console.error("Erro ao fazer requisição:", erro);\n  });',
      },
      {
        id: 'node-9',
        title: 'Streams',
        description: 'Trabalhar com streams no Node.js',
        language: 'javascript',
        code: "const fs = require('fs');\n\nconst leituraStream = fs.createReadStream('input.txt');\nconst escritaStream = fs.createWriteStream('output.txt');\n\nleituraStream.pipe(escritaStream);\n\nleituraStream.on('end', () => {\n  console.log('Stream de leitura concluída!');\n});",
      },
      {
        id: 'node-10',
        title: 'Buffer',
        description: 'Manipular dados binários com o Buffer',
        language: 'javascript',
        code: "const buffer = Buffer.from('Olá, Mundo!');\n\nconsole.log(buffer.toString()); // Converte buffer para string\nconsole.log(buffer.toJSON());  // Converte buffer para JSON",
      },
      {
        id: 'node-11',
        title: 'Trabalhando com Crypto',
        description: 'Usar o módulo crypto para hashing',
        language: 'javascript',
        code: "const crypto = require('crypto');\n\nconst hash = crypto.createHash('sha256').update('senha123').digest('hex');\nconsole.log(hash);",
      },
      {
        id: 'node-12',
        title: 'Socket.io',
        description: 'Servidor WebSocket usando Socket.io',
        language: 'javascript',
        code: "const express = require('express');\nconst http = require('http');\nconst { Server } = require('socket.io');\n\nconst app = express();\nconst server = http.createServer(app);\nconst io = new Server(server);\n\nio.on('connection', (socket) => {\n  console.log('Novo cliente conectado');\n\n  socket.on('mensagem', (msg) => {\n    console.log('Mensagem recebida:', msg);\n    io.emit('mensagem', msg);\n  });\n});\n\nserver.listen(3000, () => {\n  console.log('Servidor rodando em http://localhost:3000');\n});",
      },
      {
        id: 'node-13',
        title: 'Cluster',
        description: 'Escalar um servidor Node.js com cluster',
        language: 'javascript',
        code: "const cluster = require('cluster');\nconst http = require('http');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n  console.log(`Master ${process.pid} está rodando`);\n\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n\n  cluster.on('exit', (worker, code, signal) => {\n    console.log(`Worker ${worker.process.pid} morreu`);\n  });\n} else {\n  http.createServer((req, res) => {\n    res.writeHead(200);\n    res.end('Olá, Mundo!\\n');\n  }).listen(8000);\n\n  console.log(`Worker ${process.pid} iniciado`);\n}",
      },
      {
        id: 'node-14',
        title: 'Servidor HTTPS',
        description: 'Criar um servidor HTTPS com Node.js',
        language: 'javascript',
        code: "const https = require('https');\nconst fs = require('fs');\n\nconst options = {\n  key: fs.readFileSync('key.pem'),\n  cert: fs.readFileSync('cert.pem')\n};\n\nhttps.createServer(options, (req, res) => {\n  res.writeHead(200);\n  res.end('Servidor HTTPS ativo!\\n');\n}).listen(8443, () => {\n  console.log('Servidor rodando em https://localhost:8443');\n});",
      },
      {
        id: 'node-15',
        title: 'Middleware Personalizado',
        description: 'Criar um middleware personalizado em Express.js',
        language: 'javascript',
        code: "const express = require('express');\nconst app = express();\n\nconst loggerMiddleware = (req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next();\n};\n\napp.use(loggerMiddleware);\n\napp.get('/', (req, res) => {\n  res.send('Olá, Middleware!');\n});\n\napp.listen(3000, () => {\n  console.log('Servidor rodando em http://localhost:3000');\n});",
      },
      {
        id: 'node-16',
        title: 'Compression',
        description: 'Adicionar compressão HTTP com o módulo compression',
        language: 'javascript',
        code: "const express = require('express');\nconst compression = require('compression');\n\nconst app = express();\napp.use(compression());\n\napp.get('/', (req, res) => {\n  res.send('Conteúdo comprimido!');\n});\n\napp.listen(3000, () => {\n  console.log('Servidor rodando em http://localhost:3000');\n});",
      },
      {
        id: 'node-17',
        title: 'Configuração com dotenv',
        description:
          'Usar o dotenv para gerenciamento de variáveis de ambiente',
        language: 'javascript',
        code: "require('dotenv').config();\n\nconsole.log(`A variável de ambiente é: ${process.env.MINHA_VARIAVEL}`);",
      },
      {
        id: 'node-18',
        title: 'Usando Child Processes',
        description: 'Executar processos filhos com o módulo child_process',
        language: 'javascript',
        code: "const { exec } = require('child_process');\n\nexec('ls', (erro, stdout, stderr) => {\n  if (erro) {\n    console.error(`Erro: ${erro.message}`);\n    return;\n  }\n  if (stderr) {\n    console.error(`Stderr: ${stderr}`);\n    return;\n  }\n  console.log(`Stdout: ${stdout}`);\n});",
      },
      {
        id: 'node-19',
        title: 'Sessions em Express',
        description: 'Gerenciar sessões de usuários em Express.js',
        language: 'javascript',
        code: "const express = require('express');\nconst session = require('express-session');\n\nconst app = express();\napp.use(session({\n  secret: 'chave-secreta',\n  resave: false,\n  saveUninitialized: true\n}));\n\napp.get('/', (req, res) => {\n  if (!req.session.views) {\n    req.session.views = 1;\n  } else {\n    req.session.views++;\n  }\n  res.send(`Você visitou esta página ${req.session.views} vezes`);\n});\n\napp.listen(3000, () => {\n  console.log('Servidor rodando em http://localhost:3000');\n});",
      },
      {
        id: 'node-20',
        title: 'Validação com Joi',
        description: 'Validar dados com a biblioteca Joi',
        language: 'javascript',
        code: "const Joi = require('joi');\n\nconst esquema = Joi.object({\n  nome: Joi.string().min(3).required(),\n  idade: Joi.number().integer().min(1).required()\n});\n\nconst dados = { nome: 'João', idade: 25 };\n\nconst resultado = esquema.validate(dados);\n\nif (resultado.error) {\n  console.error(resultado.error.details);\n} else {\n  console.log('Dados válidos!');\n}",
      },
    ],
  },
  {
    id: 'redux',
    name: 'Redux',
    icon: <Package size={24} className="text-indigo-500" />,
    description:
      'Biblioteca de gerenciamento de estado para aplicações JavaScript',
    documentation: 'https://redux.js.org/',
    tutorials: [
      {
        title: 'Conceitos Básicos',
        url: 'https://redux.js.org/introduction/core-concepts',
      },
      {
        title: 'Redux Toolkit',
        url: 'https://redux-toolkit.js.org/introduction/getting-started',
      },
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
);`,
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
export default contadorSlice.reducer;`,
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

export default Contador;`,
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
});`,
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
export default contadorSlice.reducer;`,
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

export const persistor = persistStore(store);`,
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

export default Contador;`,
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

export default ListaDeUsuarios;`,
      },
    ],
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: <Table size={24} className="text-blue-500" />,
    description:
      'Sistema de gerenciamento de banco de dados relacional de código aberto',
    documentation: 'https://dev.mysql.com/doc/',
    tutorials: [
      { title: 'MySQL Tutorial', url: 'https://www.w3schools.com/mysql/' },
      {
        title: 'MySQL com Node.js',
        url: 'https://www.npmjs.com/package/mysql2',
      },
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
DELETE FROM usuarios WHERE id = 1;`,
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

conectarBD();`,
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
GROUP BY c.id;`,
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
ROLLBACK;`,
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
CALL ObterUsuarios();`,
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
SET NEW.data_criacao = NOW();`,
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
SELECT * FROM VistaUsuarios;`,
      },
      {
        id: 'mysql-8',
        title: 'Indices',
        description: 'Criar e usar índices no MySQL',
        language: 'sql',
        code: `-- Criar índice
CREATE INDEX idx_nome ON usuarios (nome);

-- Usar índice em consulta
SELECT * FROM usuarios WHERE nome = "João Silva";`,
      },
    ],
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    icon: <HardDrive size={24} className="text-gray-500" />,
    description: 'Banco de dados leve, incorporado e baseado em arquivos',
    documentation: 'https://sqlite.org/docs.html',
    tutorials: [
      {
        title: 'Slide Origamid sobre SQLite',
        url: 'https://www.origamid.com/slide/banco-de-dados-sqlite',
      },
    ],
    snippets: [
      {
        id: 'sqlite-1',
        title: 'Criar Banco de Dados',
        description:
          'Inicia o SQLite e cria um novo arquivo de banco de dados local.',
        language: 'bash',
        code: 'sqlite3 meu_banco.db',
      },
      {
        id: 'sqlite-2',
        title: 'Criar Tabela',
        description:
          'Define a estrutura de uma tabela com colunas e tipos de dados.',
        language: 'sql',
        code: 'CREATE TABLE usuarios (\n  id INTEGER PRIMARY KEY,\n  nome TEXT,\n  idade INTEGER,\n  email TEXT\n);',
      },
      {
        id: 'sqlite-3',
        title: 'Inserir Dados',
        description: 'Adiciona registros à tabela com valores específicos.',
        language: 'sql',
        code: 'INSERT INTO usuarios (nome, idade, email)\nVALUES ("Ana", 22, "ana@example.com");',
      },
      {
        id: 'sqlite-4',
        title: 'Selecionar Dados',
        description: 'Consulta todos os registros da tabela.',
        language: 'sql',
        code: 'SELECT * FROM usuarios;',
      },
      {
        id: 'sqlite-5',
        title: 'Atualizar Registro',
        description:
          'Modifica valores de um registro existente com base em uma condição.',
        language: 'sql',
        code: 'UPDATE usuarios SET idade = 23 WHERE nome = "Ana";',
      },
      {
        id: 'sqlite-6',
        title: 'Excluir Registro',
        description: 'Remove registros da tabela com base em uma condição.',
        language: 'sql',
        code: 'DELETE FROM usuarios WHERE id = 1;',
      },
      {
        id: 'sqlite-7',
        title: 'Filtro com WHERE',
        description: 'Aplica condições para selecionar registros específicos.',
        language: 'sql',
        code: 'SELECT * FROM usuarios WHERE idade > 25;',
      },
      {
        id: 'sqlite-8',
        title: 'Ordenar Resultados',
        description:
          'Organiza os resultados da consulta em ordem crescente ou decrescente.',
        language: 'sql',
        code: 'SELECT * FROM usuarios ORDER BY nome ASC;',
      },
      {
        id: 'sqlite-9',
        title: 'LIMIT e OFFSET',
        description:
          'Controla a quantidade de registros retornados e a partir de qual posição.',
        language: 'sql',
        code: 'SELECT * FROM usuarios LIMIT 10 OFFSET 5;',
      },
      {
        id: 'sqlite-10',
        title: 'Chave Estrangeira',
        description:
          'Estabelece relacionamento entre tabelas usando FOREIGN KEY.',
        language: 'sql',
        code: 'CREATE TABLE pedidos (\n  id INTEGER PRIMARY KEY,\n  usuario_id INTEGER,\n  produto TEXT,\n  FOREIGN KEY(usuario_id) REFERENCES usuarios(id)\n);',
      },
      {
        id: 'sqlite-11',
        title: 'JOIN entre Tabelas',
        description:
          'Relaciona dados de duas tabelas com base em uma chave comum.',
        language: 'sql',
        code: 'SELECT usuarios.nome, pedidos.produto\nFROM usuarios\nJOIN pedidos ON usuarios.id = pedidos.usuario_id;',
      },
      {
        id: 'sqlite-12',
        title: 'Funções Agregadas',
        description: 'Executa cálculos como contagem, soma, média, etc.',
        language: 'sql',
        code: 'SELECT COUNT(*) AS total_usuarios FROM usuarios;',
      },
      {
        id: 'sqlite-13',
        title: 'Agrupar com GROUP BY',
        description:
          'Agrupa registros com base em um campo e permite agregações.',
        language: 'sql',
        code: 'SELECT idade, COUNT(*) FROM usuarios GROUP BY idade;',
      },
      {
        id: 'sqlite-14',
        title: 'HAVING com GROUP BY',
        description: 'Filtra grupos agregados com base em condições.',
        language: 'sql',
        code: 'SELECT idade, COUNT(*) FROM usuarios GROUP BY idade HAVING COUNT(*) > 1;',
      },
      {
        id: 'sqlite-15',
        title: 'Criar Índice',
        description:
          'Melhora a performance de consultas em colunas específicas.',
        language: 'sql',
        code: 'CREATE INDEX idx_email ON usuarios(email);',
      },
      {
        id: 'sqlite-16',
        title: 'Consulta com LIKE',
        description:
          'Busca registros que correspondem parcialmente a um padrão.',
        language: 'sql',
        code: 'SELECT * FROM usuarios WHERE email LIKE "%example.com";',
      },
      {
        id: 'sqlite-17',
        title: 'Consulta com BETWEEN',
        description: 'Seleciona registros dentro de um intervalo de valores.',
        language: 'sql',
        code: 'SELECT * FROM usuarios WHERE idade BETWEEN 20 AND 30;',
      },
      {
        id: 'sqlite-18',
        title: 'Consulta com IN',
        description:
          'Seleciona registros que correspondem a uma lista de valores.',
        language: 'sql',
        code: 'SELECT * FROM usuarios WHERE idade IN (22, 25, 30);',
      },
      {
        id: 'sqlite-19',
        title: 'Verificar Existência de Tabela',
        description:
          'Consulta o esquema interno para verificar se uma tabela existe.',
        language: 'sql',
        code: 'SELECT name FROM sqlite_master WHERE type="table" AND name="usuarios";',
      },
      {
        id: 'sqlite-20',
        title: 'Exportar Dados para CSV',
        description: 'Usa comandos da CLI para exportar dados em formato CSV.',
        language: 'bash',
        code: '.mode csv\n.headers on\n.output usuarios.csv\nSELECT * FROM usuarios;\n.output stdout',
      },
      {
        id: 'py-1',
        title: 'Conectar ao banco com Python',
        description: 'Estabelece conexão com arquivo SQLite.',
        language: 'python',
        code: "import sqlite3\nconn = sqlite3.connect('meu_banco.db')\ncursor = conn.cursor()",
      },
      {
        id: 'py-2',
        title: 'Criar tabela',
        description: "Cria tabela 'usuarios' com campos básicos.",
        language: 'python',
        code: "cursor.execute('''CREATE TABLE usuarios (\n  id INTEGER PRIMARY KEY,\n  nome TEXT,\n  idade INTEGER\n)''')",
      },
      {
        id: 'py-3',
        title: 'Inserir um registro',
        description: 'Insere um usuário na tabela.',
        language: 'python',
        code: 'cursor.execute("INSERT INTO usuarios (nome, idade) VALUES (?, ?)", (\'Maria\', 28))\nconn.commit()',
      },
      {
        id: 'py-4',
        title: 'Selecionar registros',
        description: 'Obtém todos os usuários.',
        language: 'python',
        code: 'cursor.execute("SELECT * FROM usuarios")\nprint(cursor.fetchall())',
      },
      {
        id: 'py-5',
        title: 'Usar parâmetros nomeados',
        description: 'Insere dados com dicionário como parâmetros.',
        language: 'python',
        code: "cursor.execute(\"INSERT INTO usuarios (nome, idade) VALUES (:nome, :idade)\", {'nome': 'João', 'idade': 35})",
      },
      {
        id: 'py-6',
        title: 'Atualizar dados',
        description: 'Modifica a idade de um usuário.',
        language: 'python',
        code: 'cursor.execute("UPDATE usuarios SET idade = ? WHERE nome = ?", (29, \'Maria\'))',
      },
      {
        id: 'py-7',
        title: 'Excluir usuário',
        description: 'Remove um registro da tabela.',
        language: 'python',
        code: 'cursor.execute("DELETE FROM usuarios WHERE nome = ?", (\'João\',))',
      },
      {
        id: 'py-8',
        title: 'Contar registros',
        description: 'Utiliza função agregada COUNT.',
        language: 'python',
        code: 'cursor.execute("SELECT COUNT(*) FROM usuarios")\nprint(cursor.fetchone()[0])',
      },
      {
        id: 'py-9',
        title: 'Usar JOIN',
        description: 'Consulta usuários e seus pedidos.',
        language: 'python',
        code: "cursor.execute('''SELECT usuarios.nome, pedidos.produto\nFROM usuarios\nJOIN pedidos ON usuarios.id = pedidos.usuario_id''')",
      },
      {
        id: 'py-10',
        title: 'Fechar conexão',
        description: 'Encerra corretamente uso do banco.',
        language: 'python',
        code: 'conn.close()',
      },
      {
        id: 'node-1',
        title: 'Importar e conectar com node.js',
        description: 'Inicia e conecta ao banco SQLite.',
        language: 'javascript',
        code: "const Database = require('better-sqlite3');\nconst db = new Database('meu_banco.db');",
      },
      {
        id: 'node-2',
        title: 'Criar tabela',
        description: 'Define estrutura de tabela.',
        language: 'javascript',
        code: 'db.exec(`CREATE TABLE usuarios (\n  id INTEGER PRIMARY KEY,\n  nome TEXT,\n  idade INTEGER\n)`);',
      },
      {
        id: 'node-3',
        title: 'Inserir dados',
        description: 'Insere um novo usuário.',
        language: 'javascript',
        code: 'const stmt = db.prepare("INSERT INTO usuarios (nome, idade) VALUES (?, ?)");\nstmt.run(\'Carlos\', 40);',
      },
      {
        id: 'node-4',
        title: 'Selecionar registros',
        description: 'Consulta todos os usuários.',
        language: 'javascript',
        code: 'const rows = db.prepare("SELECT * FROM usuarios").all();\nconsole.log(rows);',
      },
      {
        id: 'node-5',
        title: 'Consulta com WHERE',
        description: 'Filtra usuários por idade.',
        language: 'javascript',
        code: 'const adultos = db.prepare("SELECT * FROM usuarios WHERE idade >= ?").all(18);',
      },
      {
        id: 'node-6',
        title: 'Atualizar registro',
        description: 'Atualiza dados de um usuário.',
        language: 'javascript',
        code: 'db.prepare("UPDATE usuarios SET idade = ? WHERE nome = ?").run(41, \'Carlos\');',
      },
      {
        id: 'node-7',
        title: 'Excluir registro',
        description: 'Remove um usuário do banco.',
        language: 'javascript',
        code: 'db.prepare("DELETE FROM usuarios WHERE nome = ?").run(\'Carlos\');',
      },
      {
        id: 'node-8',
        title: 'Função agregada',
        description: 'Conta número total de usuários.',
        language: 'javascript',
        code: 'const count = db.prepare("SELECT COUNT(*) AS total FROM usuarios").get();\nconsole.log(count.total);',
      },
      {
        id: 'node-9',
        title: 'Consulta com JOIN',
        description: 'Relaciona usuários com pedidos.',
        language: 'javascript',
        code: 'const resultado = db.prepare(`SELECT usuarios.nome, pedidos.produto\nFROM usuarios JOIN pedidos ON usuarios.id = pedidos.usuario_id`).all();',
      },
      {
        id: 'node-10',
        title: 'Fechar banco',
        description: 'Finaliza acesso ao banco.',
        language: 'javascript',
        code: 'db.close();',
      },
    ],
  },
  {
    id: 'nosql',
    name: 'NoSQL',
    icon: <Disc size={24} className="text-green-600" />,
    description:
      'Bancos de dados não relacionais para armazenamento flexível de dados',
    documentation: 'https://www.mongodb.com/docs/',
    tutorials: [
      { title: 'MongoDB University', url: 'https://university.mongodb.com/' },
      {
        title: 'MongoDB com Node.js',
        url: 'https://www.mongodb.com/docs/drivers/node/current/',
      },
    ],
    snippets: [
      {
        id: 'nosql-1',
        title: 'Inserir Documento',
        description: 'Inserir um documento em uma coleção MongoDB',
        language: 'javascript',
        code: 'db.collection("users").insertOne({\n  name: "John Doe",\n  age: 30,\n  email: "john@example.com"\n});',
      },
      {
        id: 'nosql-2',
        title: 'Buscar Documentos',
        description: 'Buscar todos os documentos em uma coleção',
        language: 'javascript',
        code: 'db.collection("users").find({}).toArray((err, docs) => {\n  console.log(docs);\n});',
      },
      {
        id: 'nosql-3',
        title: 'Atualizar Documento',
        description: 'Atualizar um documento existente',
        language: 'javascript',
        code: 'db.collection("users").updateOne(\n  { name: "John Doe" },\n  { $set: { age: 31 } }\n);',
      },
      {
        id: 'nosql-4',
        title: 'Excluir Documento',
        description: 'Excluir um documento de uma coleção',
        language: 'javascript',
        code: 'db.collection("users").deleteOne({ name: "John Doe" });',
      },
      {
        id: 'nosql-5',
        title: 'Consulta com Filtro',
        description: 'Buscar documentos que atendem a um critério',
        language: 'javascript',
        code: 'db.collection("users").find({ age: { $gt: 25 } }).toArray((err, docs) => {\n  console.log(docs);\n});',
      },
      {
        id: 'nosql-6',
        title: 'Agregação',
        description: 'Agrupar e contar documentos',
        language: 'javascript',
        code: 'db.collection("users").aggregate([\n  { $group: { _id: "$age", total: { $sum: 1 } } }\n]).toArray((err, result) => {\n  console.log(result);\n});',
      },
      {
        id: 'nosql-7',
        title: 'Índices',
        description: 'Criar um índice para otimizar consultas',
        language: 'javascript',
        code: 'db.collection("users").createIndex({ email: 1 });',
      },
      {
        id: 'nosql-8',
        title: 'Transações',
        description: 'Executar operações em uma transação',
        language: 'javascript',
        code: 'const session = db.startSession();\nsession.startTransaction();\ntry {\n  const users = db.collection("users");\n  users.insertOne({ name: "Alice", age: 25 }, { session });\n  users.insertOne({ name: "Bob", age: 30 }, { session });\n  await session.commitTransaction();\n} catch (error) {\n  await session.abortTransaction();\n} finally {\n  session.endSession();\n}',
      },
    ],
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: <Database size={24} className="text-green-500" />,
    description:
      'Banco de dados NoSQL orientado a documentos para aplicações modernas',
    documentation: 'https://docs.mongodb.com/',
    tutorials: [
      { title: 'MongoDB Documentation', url: 'https://docs.mongodb.com/' },
      { title: 'MongoDB University', url: 'https://university.mongodb.com/' },
    ],
    snippets: [
      {
        id: 'mongodb-1',
        title: 'Conectar ao MongoDB',
        description: 'Conectar a um banco de dados MongoDB usando Node.js',
        language: 'javascript',
        code: "const { MongoClient } = require('mongodb');\n\nasync function connect() {\n  const uri = 'mongodb://localhost:27017';\n  const client = new MongoClient(uri);\n  try {\n    await client.connect();\n    console.log('Conectado ao MongoDB');\n  } catch (err) {\n    console.error('Erro ao conectar:', err);\n  } finally {\n    await client.close();\n  }\n}\n\nconnect();",
      },
      {
        id: 'mongodb-2',
        title: 'Criar um banco de dados',
        description: 'Criar um banco de dados no MongoDB',
        language: 'javascript',
        code: 'use meuBancoDeDados;',
      },
      {
        id: 'mongodb-3',
        title: 'Criar uma coleção',
        description: 'Criar uma coleção no MongoDB',
        language: 'javascript',
        code: "db.createCollection('minhaColecao');",
      },
      {
        id: 'mongodb-4',
        title: 'Inserir um documento',
        description: 'Inserir um documento em uma coleção',
        language: 'javascript',
        code: "db.minhaColecao.insertOne({\n  nome: 'João',\n  idade: 30,\n  cidade: 'São Paulo'\n});",
      },
      {
        id: 'mongodb-5',
        title: 'Inserir múltiplos documentos',
        description: 'Inserir vários documentos em uma coleção',
        language: 'javascript',
        code: "db.minhaColecao.insertMany([\n  { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' },\n  { nome: 'Pedro', idade: 35, cidade: 'Belo Horizonte' }\n]);",
      },
      {
        id: 'mongodb-6',
        title: 'Buscar todos os documentos',
        description: 'Buscar todos os documentos de uma coleção',
        language: 'javascript',
        code: 'db.minhaColecao.find();',
      },
      {
        id: 'mongodb-7',
        title: 'Buscar com filtro',
        description: 'Buscar documentos com um filtro específico',
        language: 'javascript',
        code: "db.minhaColecao.find({ cidade: 'São Paulo' });",
      },
      {
        id: 'mongodb-8',
        title: 'Atualizar um documento',
        description: 'Atualizar um documento em uma coleção',
        language: 'javascript',
        code: "db.minhaColecao.updateOne(\n  { nome: 'João' },\n  { $set: { idade: 31 } }\n);",
      },
      {
        id: 'mongodb-9',
        title: 'Atualizar múltiplos documentos',
        description: 'Atualizar vários documentos em uma coleção',
        language: 'javascript',
        code: "db.minhaColecao.updateMany(\n  { cidade: 'São Paulo' },\n  { $set: { cidade: 'SP' } }\n);",
      },
      {
        id: 'mongodb-10',
        title: 'Excluir um documento',
        description: 'Excluir um documento de uma coleção',
        language: 'javascript',
        code: "db.minhaColecao.deleteOne({ nome: 'João' });",
      },
      {
        id: 'mongodb-11',
        title: 'Excluir múltiplos documentos',
        description: 'Excluir vários documentos de uma coleção',
        language: 'javascript',
        code: "db.minhaColecao.deleteMany({ cidade: 'SP' });",
      },
      {
        id: 'mongodb-12',
        title: 'Criar um índice',
        description: 'Criar um índice em uma coleção',
        language: 'javascript',
        code: 'db.minhaColecao.createIndex({ nome: 1 });',
      },
      {
        id: 'mongodb-13',
        title: 'Agregação simples',
        description: 'Usar aggregation para agrupar e contar documentos',
        language: 'javascript',
        code: "db.minhaColecao.aggregate([\n  { $group: { _id: '$cidade', total: { $sum: 1 } } }\n]);",
      },
      {
        id: 'mongodb-14',
        title: 'Agregação com $match',
        description: 'Filtrar documentos antes de agrupar',
        language: 'javascript',
        code: "db.minhaColecao.aggregate([\n  { $match: { idade: { $gt: 30 } } },\n  { $group: { _id: '$cidade', total: { $sum: 1 } } }\n]);",
      },
      {
        id: 'mongodb-15',
        title: 'Agregação com $sort',
        description: 'Ordenar resultados em uma agregação',
        language: 'javascript',
        code: "db.minhaColecao.aggregate([\n  { $group: { _id: '$cidade', total: { $sum: 1 } } },\n  { $sort: { total: -1 } }\n]);",
      },
      {
        id: 'mongodb-16',
        title: 'Buscar com $text',
        description: 'Realizar uma busca textual em uma coleção',
        language: 'javascript',
        code: "db.minhaColecao.createIndex({ nome: 'text' });\n\ndb.minhaColecao.find({ $text: { $search: 'João' } });",
      },
      {
        id: 'mongodb-17',
        title: 'Transações',
        description: 'Usar transações no MongoDB',
        language: 'javascript',
        code: "const session = client.startSession();\n\nsession.withTransaction(async () => {\n  const collection = client.db('meuBancoDeDados').collection('minhaColecao');\n  await collection.insertOne({ nome: 'Ana', idade: 28 }, { session });\n  await collection.updateOne({ nome: 'João' }, { $set: { idade: 32 } }, { session });\n});",
      },
      {
        id: 'mongodb-18',
        title: 'Backup do banco de dados',
        description: 'Fazer backup de um banco de dados MongoDB',
        language: 'bash',
        code: 'mongodump --db meuBancoDeDados --out /caminho/do/backup',
      },
      {
        id: 'mongodb-19',
        title: 'Restaurar banco de dados',
        description:
          'Restaurar um banco de dados MongoDB a partir de um backup',
        language: 'bash',
        code: 'mongorestore --db meuBancoDeDados /caminho/do/backup/meuBancoDeDados',
      },
      {
        id: 'mongodb-20',
        title: 'Consultas geográficas',
        description: 'Realizar consultas geográficas com índices geoespaciais',
        language: 'javascript',
        code: "db.minhaColecao.createIndex({ localizacao: '2dsphere' });\n\ndb.minhaColecao.find({\n  localizacao: {\n    $near: {\n      $geometry: {\n        type: 'Point',\n        coordinates: [-46.6333, -23.5505]\n      },\n      $maxDistance: 10000\n    }\n  }\n});",
      },
    ],
  },
  {
    id: 'jquery',
    name: 'jQuery',
    icon: <Braces size={24} className="text-blue-400" />,
    description: 'Biblioteca JavaScript rápida, pequena e rica em recursos',
    documentation: 'https://api.jquery.com/',
    tutorials: [
      { title: 'Aprenda jQuery', url: 'https://learn.jquery.com/' },
      { title: 'jQuery Tutorial', url: 'https://www.w3schools.com/jquery/' },
    ],
    snippets: [
      {
        id: 'jquery-1',
        title: 'Instalação jQuery',
        description: 'Adicionar jQuery a um projeto',
        language: 'html',
        code: '<!-- Via CDN -->\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n\n<!-- Via npm -->\n<!-- npm install jquery -->\n<!-- import $ from "jquery"; -->',
      },
      {
        id: 'jquery-2',
        title: 'Seletores e Manipulação DOM',
        description: 'Selecionar e manipular elementos com jQuery',
        language: 'javascript',
        code: '// Esperar pelo carregamento do DOM\n$(document).ready(function() {\n  // Seletores\n  $("p");                    // Selecionar por tag\n  $("#meu-id");              // Selecionar por ID\n  $(".minha-classe");        // Selecionar por classe\n  $("ul li:first-child");    // Seletores avançados\n  \n  // Manipulação de conteúdo\n  $("#titulo").text("Novo Título");           // Alterar texto\n  $(".descricao").html("<strong>Texto em negrito</strong>"); // Alterar HTML\n  $("input").val("Novo valor");               // Alterar valor de input\n  \n  // Manipulação de atributos\n  $("a").attr("href", "https://exemplo.com");\n  $("img").attr("alt", "Descrição da imagem");\n  \n  // Manipulação de classes\n  $(".item").addClass("ativo");\n  $(".item").removeClass("inativo");\n  $(".item").toggleClass("destacado");\n  \n  // Manipulação de CSS\n  $(".caixa").css("color", "blue");\n  $(".caixa").css({\n    backgroundColor: "#f0f0f0",\n    padding: "10px",\n    borderRadius: "5px"\n  });\n});\n',
      },
      {
        id: 'jquery-3',
        title: 'Eventos e Animações',
        description: 'Manipular eventos e criar animações com jQuery',
        language: 'javascript',
        code: '// Eventos\n$("#botao").click(function() {\n  alert("Botão clicado!");\n});\n\n$("input").on("keyup", function() {\n  console.log("Digitando: " + $(this).val());\n});\n\n// Múltiplos eventos\n$(".item")\n  .on("mouseenter", function() {\n    $(this).addClass("hover");\n  })\n  .on("mouseleave", function() {\n    $(this).removeClass("hover");\n  });\n\n// Delegação de eventos\n$("#lista").on("click", "li", function() {\n  // Funciona mesmo para elementos adicionados dinamicamente\n  $(this).toggleClass("selecionado");\n});\n\n// Animações\n$(".painel").hide();  // Esconder elemento\n\n$("#mostrar").click(function() {\n  $(".painel").show(300);  // Mostrar com animação\n});\n\n$("#toggle").click(function() {\n  $(".painel").slideToggle(500);  // Alternar com slide\n});\n\n// Animação personalizada\n$(".caixa").animate({\n  opacity: 0.7,\n  width: "80%",\n  marginLeft: "10%"\n}, 1000, function() {\n  // Callback após a animação\n  $(this).css("border", "2px solid green");\n});',
      },
      {
        id: 'jquery-4',
        title: 'Manipulação de Formulários',
        description: 'Capturar e validar dados de formulários',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#meuFormulario").submit(function(event) {\n    event.preventDefault(); // Evitar o envio padrão\n    const nome = $("#nome").val();\n    const email = $("#email").val();\n    \n    if (nome && email) {\n      alert("Formulário enviado com sucesso!");\n    } else {\n      alert("Por favor, preencha todos os campos.");\n    }\n  });\n});',
      },
      {
        id: 'jquery-5',
        title: 'Requisições AJAX',
        description: 'Fazer uma requisição AJAX com jQuery',
        language: 'javascript',
        code: '$.ajax({\n  url: "https://api.example.com/data",\n  method: "GET",\n  success: function(response) {\n    console.log("Dados recebidos:", response);\n  },\n  error: function(err) {\n    console.error("Erro na requisição:", err);\n  }\n});',
      },
      {
        id: 'jquery-6',
        title: 'Manipulação de Listas',
        description: 'Adicionar e remover itens de uma lista',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#adicionarItem").click(function() {\n    const novoItem = $("#novoItem").val();\n    if (novoItem) {\n      $("#minhaLista").append(`<li>${novoItem}</li>`);\n      $("#novoItem").val(""); // Limpar o campo\n    }\n  });\n\n  $("#minhaLista").on("click", "li", function() {\n    $(this).remove(); // Remover item clicado\n  });\n});',
      },
      {
        id: 'jquery-7',
        title: 'Efeitos de Fade',
        description: 'Aplicar efeitos de fade (desvanecimento)',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#fadeIn").click(function() {\n    $("#caixa").fadeIn(1000); // Aparecer em 1 segundo\n  });\n\n  $("#fadeOut").click(function() {\n    $("#caixa").fadeOut(1000); // Desaparecer em 1 segundo\n  });\n\n  $("#fadeToggle").click(function() {\n    $("#caixa").fadeToggle(1000); // Alternar entre aparecer e desaparecer\n  });\n});',
      },
      {
        id: 'jquery-8',
        title: 'Plugins jQuery',
        description: 'Usar um plugin jQuery para validação de formulários',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#meuFormulario").validate({\n    rules: {\n      nome: "required",\n      email: {\n        required: true,\n        email: true\n      }\n    },\n    messages: {\n      nome: "Por favor, insira seu nome",\n      email: "Por favor, insira um e-mail válido"\n    },\n    submitHandler: function(form) {\n      alert("Formulário válido e enviado!");\n      form.submit();\n    }\n  });\n});',
      },
      {
        id: 'jquery-9',
        title: 'Manipulação de Tabelas',
        description: 'Adicionar e remover linhas de uma tabela',
        language: 'javascript',
        code: '$(document).ready(function() {\n  $("#adicionarLinha").click(function() {\n    const nome = $("#nome").val();\n    const idade = $("#idade").val();\n    if (nome && idade) {\n      $("#minhaTabela tbody").append(`<tr><td>${nome}</td><td>${idade}</td></tr>`);\n      $("#nome, #idade").val(""); // Limpar campos\n    }\n  });\n\n  $("#minhaTabela").on("click", "tr", function() {\n    $(this).remove(); // Remover linha clicada\n  });\n});',
      },
    ],
  },
  {
    id: 'json',
    name: 'JSON',
    icon: <Braces size={24} className="text-yellow-500" />,
    description: 'Formato de intercâmbio de dados leve e fácil de ler',
    documentation: 'https://www.json.org/json-pt.html',
    tutorials: [
      {
        title: 'JSON Tutorial',
        url: 'https://www.w3schools.com/js/js_json_intro.asp',
      },
      { title: 'JSON Schema', url: 'https://json-schema.org/learn/' },
    ],
    snippets: [
      {
        id: 'json-1',
        title: 'Estrutura Básica',
        description: 'Exemplo de um objeto JSON',
        language: 'json',
        code: '{\n  "name": "John",\n  "age": 30,\n  "isStudent": false,\n  "courses": ["Math", "Science"],\n  "address": {\n    "street": "123 Main St",\n    "city": "New York"\n  }\n}',
      },
      {
        id: 'json-2',
        title: 'Parsing em JavaScript',
        description: 'Converter JSON para objeto JavaScript',
        language: 'javascript',
        code: 'const jsonString = \'{"name":"John","age":30}\';\nconst obj = JSON.parse(jsonString);\nconsole.log(obj.name); // John',
      },
      {
        id: 'json-3',
        title: 'Stringify em JavaScript',
        description: 'Converter objeto JavaScript para JSON',
        language: 'javascript',
        code: 'const obj = { name: "John", age: 30 };\nconst jsonString = JSON.stringify(obj);\nconsole.log(jsonString); // {"name":"John","age":30}',
      },
      {
        id: 'json-4',
        title: 'Manipulação de JSON em Python',
        description: 'Ler e escrever JSON em Python',
        language: 'python',
        code: 'import json\n\ndata = {\n  "name": "John",\n  "age": 30\n}\n\n# Converter para JSON\njson_string = json.dumps(data)\nprint(json_string)\n\n# Ler JSON\nparsed_data = json.loads(json_string)\nprint(parsed_data["name"])',
      },
      {
        id: 'json-5',
        title: 'Validação com JSON Schema',
        description: 'Validar JSON com JSON Schema',
        language: 'json',
        code: '{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "name": { "type": "string" },\n    "age": { "type": "number" }\n  },\n  "required": ["name", "age"]\n}',
      },
      {
        id: 'json-6',
        title: 'JSON em APIs REST',
        description: 'Enviar e receber JSON em uma API REST',
        language: 'javascript',
        code: 'fetch("https://api.example.com/data", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({ name: "John", age: 30 })\n})\n.then(response => response.json())\n.then(data => console.log(data));',
      },
      {
        id: 'json-7',
        title: 'Filtros em JSON',
        description: 'Filtrar dados de um array JSON',
        language: 'javascript',
        code: 'const data = [\n  { "name": "John", "age": 30 },\n  { "name": "Jane", "age": 25 },\n  { "name": "Jake", "age": 35 }\n];\n\nconst filtered = data.filter(item => item.age > 30);\nconsole.log(filtered); // [{ "name": "Jake", "age": 35 }]',
      },
      {
        id: 'json-8',
        title: 'Ordenar JSON',
        description: 'Ordenar um array de objetos JSON',
        language: 'javascript',
        code: 'const data = [\n  { "name": "John", "age": 30 },\n  { "name": "Jane", "age": 25 },\n  { "name": "Jake", "age": 35 }\n];\n\ndata.sort((a, b) => a.age - b.age);\nconsole.log(data);',
      },
      {
        id: 'json-9',
        title: 'Leitura de JSON em Java',
        description: 'Ler e manipular JSON em Java com Gson',
        language: 'java',
        code: 'import com.google.gson.Gson;\n\nclass Person {\n  String name;\n  int age;\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    String json = "{\\"name\\":\\"John\\",\\"age\\":30}";\n    Gson gson = new Gson();\n    Person person = gson.fromJson(json, Person.class);\n    System.out.println(person.name);\n  }\n}',
      },
      {
        id: 'json-10',
        title: 'Escrita de JSON em Java',
        description: 'Converter objeto Java em JSON com Gson',
        language: 'java',
        code: 'import com.google.gson.Gson;\n\nclass Person {\n  String name;\n  int age;\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Person person = new Person();\n    person.name = "John";\n    person.age = 30;\n    Gson gson = new Gson();\n    String json = gson.toJson(person);\n    System.out.println(json);\n  }\n}',
      },
      {
        id: 'json-11',
        title: 'Transformar JSON em CSV',
        description: 'Converter dados JSON em formato CSV',
        language: 'python',
        code: 'import json\nimport csv\n\ndata = [\n  { "name": "John", "age": 30 },\n  { "name": "Jane", "age": 25 }\n]\n\nwith open(\'output.csv\', \'w\', newline=\'\') as csvfile:\n    writer = csv.DictWriter(csvfile, fieldnames=data[0].keys())\n    writer.writeheader()\n    writer.writerows(data)',
      },
      {
        id: 'json-12',
        title: 'Pretty Print JSON',
        description: 'Exibir JSON de forma legível',
        language: 'python',
        code: 'import json\n\ndata = { "name": "John", "age": 30 }\npretty = json.dumps(data, indent=4)\nprint(pretty)',
      },
      {
        id: 'json-13',
        title: 'Buscar Valores no JSON',
        description: 'Acessar propriedades específicas em JSON',
        language: 'javascript',
        code: 'const data = {\n  name: "John",\n  address: { city: "New York", zip: 10001 }\n};\n\nconsole.log(data.address.city); // "New York"',
      },
      {
        id: 'json-14',
        title: 'Iterar sobre JSON',
        description: 'Iterar pelas propriedades de um objeto JSON',
        language: 'javascript',
        code: 'const data = { name: "John", age: 30 };\nfor (let key in data) {\n  console.log(`${key}: ${data[key]}`);\n}',
      },
      {
        id: 'json-15',
        title: 'Ler Arquivo JSON',
        description: 'Ler JSON de um arquivo local',
        language: 'python',
        code: "import json\n\nwith open('data.json', 'r') as file:\n    data = json.load(file)\n    print(data)",
      },
      {
        id: 'json-16',
        title: 'Escrever em Arquivo JSON',
        description: 'Salvar dados JSON em um arquivo local',
        language: 'python',
        code: 'import json\n\ndata = { "name": "John", "age": 30 }\n\nwith open(\'data.json\', \'w\') as file:\n    json.dump(data, file, indent=4)',
      },
      {
        id: 'json-17',
        title: 'Merge de JSONs',
        description: 'Mesclar dois objetos JSON',
        language: 'javascript',
        code: 'const obj1 = { name: "John" };\nconst obj2 = { age: 30 };\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged); // { name: "John", age: 30 }',
      },
      {
        id: 'json-18',
        title: 'Mapeamento de JSON',
        description: 'Transformar dados JSON com map',
        language: 'javascript',
        code: 'const data = [\n  { name: "John", age: 30 },\n  { name: "Jane", age: 25 }\n];\n\nconst names = data.map(item => item.name);\nconsole.log(names); // ["John", "Jane"]',
      },
      {
        id: 'json-19',
        title: 'Validar Propriedade JSON',
        description: 'Checar se uma propriedade existe no JSON',
        language: 'javascript',
        code: 'const data = { name: "John", age: 30 };\nif ("name" in data) {\n  console.log("Propriedade encontrada!");\n}',
      },
      {
        id: 'json-20',
        title: 'Filtrar Propriedades JSON',
        description: 'Excluir propriedades desnecessárias',
        language: 'javascript',
        code: 'const data = { name: "John", age: 30, isStudent: false };\nconst { isStudent, ...filtered } = data;\nconsole.log(filtered); // { name: "John", age: 30 }',
      },
    ],
  },
  {
    id: 'apis',
    name: 'APIs',
    icon: <Globe size={24} className="text-blue-500" />,
    description:
      'Interfaces de Programação de Aplicativos para integração de sistemas',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/API',
    tutorials: [
      {
        title: 'APIs Web',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/API',
      },
      { title: 'REST API Tutorial', url: 'https://restfulapi.net/' },
    ],
    snippets: [
      {
        id: 'apis-1',
        title: 'Fetch API',
        description: 'Fazer requisições HTTP com Fetch API',
        language: 'javascript',
        code: 'fetch("https://api.example.com/data")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error("Error:", error));',
      },
      {
        id: 'apis-2',
        title: 'Axios',
        description: 'Fazer requisições HTTP com Axios',
        language: 'javascript',
        code: 'axios.get("https://api.example.com/data")\n  .then(response => console.log(response.data))\n  .catch(error => console.error("Error:", error));',
      },
      {
        id: 'apis-3',
        title: 'Criar API com Express',
        description: 'Criar uma API simples com Express.js',
        language: 'javascript',
        code: 'const express = require("express");\nconst app = express();\n\napp.get("/api/data", (req, res) => {\n  res.json({ message: "Hello, World!" });\n});\n\napp.listen(3000, () => {\n  console.log("API running on http://localhost:3000");\n});',
      },
      {
        id: 'apis-4',
        title: 'Autenticação com JWT',
        description: 'Implementar autenticação com JWT',
        language: 'javascript',
        code: 'const jwt = require("jsonwebtoken");\n\nconst token = jwt.sign({ userId: 123 }, "secretKey", { expiresIn: "1h" });\nconsole.log(token);',
      },
      {
        id: 'apis-5',
        title: 'Documentação com Swagger',
        description: 'Documentar uma API com Swagger',
        language: 'yaml',
        code: 'openapi: 3.0.0\ninfo:\n  title: Sample API\n  version: 1.0.0\npaths:\n  /users:\n    get:\n      summary: List all users\n      responses:\n        "200":\n          description: A list of users',
      },
      {
        id: 'apis-6',
        title: 'Testes de API com Postman',
        description: 'Criar e executar testes de API no Postman',
        language: 'javascript',
        code: 'pm.test("Status code is 200", function () {\n  pm.response.to.have.status(200);\n});',
      },
      {
        id: 'apis-7',
        title: 'RESTful API com Flask',
        description: 'Criar uma API RESTful simples com Flask',
        language: 'python',
        code: "from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.route('/api/data', methods=['GET'])\ndef get_data():\n    return jsonify({ 'message': 'Hello, World!' })\n\nif __name__ == '__main__':\n    app.run(debug=True)",
      },
      {
        id: 'apis-8',
        title: 'Autenticação Básica',
        description: 'Implementar autenticação básica em uma API',
        language: 'javascript',
        code: "const express = require('express');\nconst basicAuth = require('express-basic-auth');\n\nconst app = express();\n\napp.use(basicAuth({\n    users: { 'admin': 'secret' }\n}));\n\napp.get('/secure', (req, res) => {\n    res.send('This is a secure endpoint!');\n});\n\napp.listen(3000, () => console.log('Running on http://localhost:3000'))",
      },
      {
        id: 'apis-9',
        title: 'API com Node.js e MongoDB',
        description: 'Conectar uma API a um banco de dados MongoDB',
        language: 'javascript',
        code: "const express = require('express');\nconst mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });\n\nconst app = express();\n\nconst Schema = mongoose.Schema;\nconst ItemSchema = new Schema({ name: String });\nconst Item = mongoose.model('Item', ItemSchema);\n\napp.get('/items', async (req, res) => {\n    const items = await Item.find();\n    res.json(items);\n});\n\napp.listen(3000, () => console.log('API running on http://localhost:3000'))",
      },
      {
        id: 'apis-10',
        title: 'API com GraphQL',
        description: 'Criar uma API GraphQL com Apollo Server',
        language: 'javascript',
        code: "const { ApolloServer, gql } = require('apollo-server');\n\nconst typeDefs = gql`\n    type Query {\n        hello: String\n    }\n`;\n\nconst resolvers = {\n    Query: {\n        hello: () => 'Hello, World!',\n    },\n};\n\nconst server = new ApolloServer({ typeDefs, resolvers });\n\nserver.listen().then(({ url }) => {\n    console.log(`Server ready at ${url}`);\n});",
      },
      {
        id: 'apis-11',
        title: 'Paginação em APIs',
        description: 'Implementar paginação em uma API',
        language: 'javascript',
        code: "const express = require('express');\nconst app = express();\n\nconst data = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));\n\napp.get('/items', (req, res) => {\n    const page = parseInt(req.query.page) || 1;\n    const limit = parseInt(req.query.limit) || 10;\n    const startIndex = (page - 1) * limit;\n    const endIndex = page * limit;\n\n    res.json({\n        total: data.length,\n        items: data.slice(startIndex, endIndex)\n    });\n});\n\napp.listen(3000, () => console.log('Running on http://localhost:3000'))",
      },
      {
        id: 'apis-12',
        title: 'Rate Limiting',
        description: 'Adicionar rate limiting à API',
        language: 'javascript',
        code: "const express = require('express');\nconst rateLimit = require('express-rate-limit');\n\nconst app = express();\n\nconst limiter = rateLimit({\n    windowMs: 15 * 60 * 1000,\n    max: 100\n});\n\napp.use(limiter);\n\napp.get('/', (req, res) => {\n    res.send('Welcome to the API!');\n});\n\napp.listen(3000, () => console.log('Running on http://localhost:3000'))",
      },
      {
        id: 'apis-13',
        title: 'Webhooks',
        description: 'Criar e consumir webhooks',
        language: 'javascript',
        code: "const express = require('express');\nconst app = express();\napp.use(express.json());\n\napp.post('/webhook', (req, res) => {\n    console.log('Webhook received:', req.body);\n    res.status(200).send('OK');\n});\n\napp.listen(3000, () => console.log('Webhook listening on http://localhost:3000'))",
      },
      {
        id: 'apis-14',
        title: 'CORS',
        description: 'Habilitar CORS em uma API',
        language: 'javascript',
        code: "const express = require('express');\nconst cors = require('cors');\n\nconst app = express();\napp.use(cors());\n\napp.get('/data', (req, res) => {\n    res.json({ message: 'CORS enabled!' });\n});\n\napp.listen(3000, () => console.log('API running on http://localhost:3000'))",
      },
      {
        id: 'apis-15',
        title: 'Cache com Redis',
        description: 'Adicionar cache com Redis a uma API',
        language: 'javascript',
        code: "const express = require('express');\nconst redis = require('redis');\n\nconst client = redis.createClient();\nconst app = express();\n\napp.get('/data', (req, res) => {\n    client.get('data', (err, reply) => {\n        if (reply) {\n            return res.json(JSON.parse(reply));\n        }\n\n        const data = { message: 'Hello, Redis!' };\n        client.setex('data', 3600, JSON.stringify(data));\n        res.json(data);\n    });\n});\n\napp.listen(3000, () => console.log('API with Redis running on http://localhost:3000'))",
      },
      {
        id: 'apis-16',
        title: 'OpenAPI (Swagger) Generator',
        description: 'Gerar um cliente para API a partir do Swagger',
        language: 'bash',
        code: 'npx @openapitools/openapi-generator-cli generate -i swagger.yaml -g javascript -o api-client',
      },
      {
        id: 'apis-17',
        title: 'Monitoramento com Prometheus',
        description: 'Expor métricas para monitoramento com Prometheus',
        language: 'javascript',
        code: "const express = require('express');\nconst promClient = require('prom-client');\n\nconst app = express();\n\nconst counter = new promClient.Counter({\n    name: 'http_requests_total',\n    help: 'Total number of HTTP requests'\n});\n\napp.use((req, res, next) => {\n    counter.inc();\n    next();\n});\n\napp.get('/metrics', (req, res) => {\n    res.set('Content-Type', promClient.register.contentType);\n    res.end(promClient.register.metrics());\n});\n\napp.listen(3000, () => console.log('Metrics on http://localhost:3000/metrics'))",
      },
      {
        id: 'apis-18',
        title: 'gRPC API',
        description: 'Criar uma API com gRPC',
        language: 'javascript',
        code: "const grpc = require('@grpc/grpc-js');\nconst protoLoader = require('@grpc/proto-loader');\n\nconst packageDefinition = protoLoader.loadSync('service.proto');\nconst proto = grpc.loadPackageDefinition(packageDefinition);\n\nconst server = new grpc.Server();\n\nserver.addService(proto.Service.service, {\n    SayHello: (call, callback) => {\n        callback(null, { message: 'Hello, ' + call.request.name });\n    }\n});\n\nserver.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {\n    server.start();\n    console.log('gRPC server running at http://localhost:50051');\n});",
      },
    ],
  },
  {
    id: 'php',
    name: 'PHP',
    icon: <FileCode size={24} className="text-blue-500" />,
    description:
      'Linguagem de script do lado do servidor para desenvolvimento web',
    documentation: 'https://www.php.net/docs.php',
    tutorials: [
      { title: 'PHP Manual', url: 'https://www.php.net/manual/en/' },
      { title: 'PHP Tutorial', url: 'https://www.w3schools.com/php/' },
    ],
    snippets: [
      {
        id: 'php-1',
        title: 'Hello World',
        description: 'Programa básico em PHP',
        language: 'php',
        code: '<?php\necho "Hello, World!";\n?>',
      },
      {
        id: 'php-2',
        title: 'Formulário e POST',
        description: 'Processar dados de formulário com PHP',
        language: 'php',
        code: '<?php\nif ($_SERVER["REQUEST_METHOD"] == "POST") {\n  $name = $_POST["name"];\n  echo "Hello, " . htmlspecialchars($name);\n}\n?>\n\n<form method="post">\n  Name: <input type="text" name="name">\n  <input type="submit">\n</form>',
      },
      {
        id: 'php-3',
        title: 'Conexão MySQL',
        description: 'Conectar ao MySQL com PHP',
        language: 'php',
        code: '<?php\n$servername = "localhost";\n$username = "username";\n$password = "password";\n$dbname = "myDB";\n\n// Criar conexão\n$conn = new mysqli($servername, $username, $password, $dbname);\n\n// Verificar conexão\nif ($conn->connect_error) {\n  die("Connection failed: " . $conn->connect_error);\n}\n\n$sql = "SELECT id, name FROM users";\n$result = $conn->query($sql);\n\nif ($result->num_rows > 0) {\n  while($row = $result->fetch_assoc()) {\n    echo "id: " . $row["id"]. " - Name: " . $row["name"]. "<br>";\n  }\n} else {\n  echo "0 results";\n}\n$conn->close();\n?>',
      },
      {
        id: 'php-4',
        title: 'Sessões em PHP',
        description: 'Gerenciar sessões de usuário',
        language: 'php',
        code: '<?php\nsession_start();\n\n// Armazenar dados na sessão\n$_SESSION["username"] = "JohnDoe";\n\n// Recuperar dados da sessão\necho "Welcome, " . $_SESSION["username"];\n?>',
      },
      {
        id: 'php-5',
        title: 'Manipulação de Arquivos',
        description: 'Ler e escrever arquivos em PHP',
        language: 'php',
        code: '<?php\n$file = "example.txt";\n\n// Escrever no arquivo\nfile_put_contents($file, "Hello, World!");\n\n// Ler o arquivo\necho file_get_contents($file);\n?>',
      },
      {
        id: 'php-6',
        title: 'Autoloading de Classes',
        description: 'Carregar classes automaticamente',
        language: 'php',
        code: '<?php\nspl_autoload_register(function ($class_name) {\n  include $class_name . ".php";\n});\n\n$obj = new MyClass();\n?>',
      },
      {
        id: 'php-7',
        title: 'Manipulação de JSON',
        description: 'Codificar e decodificar JSON em PHP',
        language: 'php',
        code: '<?php\n$data = array("name" => "John", "age" => 30);\n$json = json_encode($data);\necho $json; // {"name":"John","age":30}\n\n$decoded = json_decode($json, true);\nprint_r($decoded); // Array ( [name] => John [age] => 30 )\n?>',
      },
      {
        id: 'php-8',
        title: 'Tratamento de Exceções',
        description: 'Capturar e tratar exceções em PHP',
        language: 'php',
        code: '<?php\nfunction divide($a, $b) {\n  if ($b == 0) {\n    throw new Exception("Division by zero");\n  }\n  return $a / $b;\n}\n\ntry {\n  echo divide(10, 0);\n} catch (Exception $e) {\n  echo "Erro: " . $e->getMessage();\n}\n?>',
      },
      {
        id: 'php-9',
        title: 'Encapsulamento com Classes',
        description: 'Usar encapsulamento em classes PHP',
        language: 'php',
        code: '<?php\nclass User {\n  private $name;\n\n  public function __construct($name) {\n    $this->name = $name;\n  }\n\n  public function getName() {\n    return $this->name;\n  }\n}\n\n$user = new User("John");\necho $user->getName();\n?>',
      },
      {
        id: 'php-10',
        title: 'Manipulação de Cookies',
        description: 'Definir e acessar cookies em PHP',
        language: 'php',
        code: '<?php\n// Definir cookie\nsetcookie("user", "JohnDoe", time() + (86400 * 30), "/");\n\n// Acessar cookie\nif (isset($_COOKIE["user"])) {\n  echo "User is: " . $_COOKIE["user"];\n} else {\n  echo "Cookie is not set!";\n}\n?>',
      },
      {
        id: 'php-11',
        title: 'Padrão Singleton',
        description: 'Implementar o padrão Singleton em PHP',
        language: 'php',
        code: '<?php\nclass Singleton {\n  private static $instance;\n\n  private function __construct() {}\n\n  public static function getInstance() {\n    if (!self::$instance) {\n      self::$instance = new Singleton();\n    }\n    return self::$instance;\n  }\n}\n\n$instance = Singleton::getInstance();\n?>',
      },
      {
        id: 'php-12',
        title: 'Enviar Email',
        description: 'Enviar email com a função mail() em PHP',
        language: 'php',
        code: '<?php\n$to = "recipient@example.com";\n$subject = "Test Email";\n$message = "Hello, this is a test email.";\n$headers = "From: sender@example.com";\n\nif (mail($to, $subject, $message, $headers)) {\n  echo "Email sent successfully!";\n} else {\n  echo "Failed to send email.";\n}\n?>',
      },
      {
        id: 'php-13',
        title: 'Filtro de Variáveis',
        description: 'Validar entradas do usuário com filter_var()',
        language: 'php',
        code: '<?php\n$email = "test@example.com";\nif (filter_var($email, FILTER_VALIDATE_EMAIL)) {\n  echo "Valid email address!";\n} else {\n  echo "Invalid email address.";\n}\n?>',
      },
      {
        id: 'php-14',
        title: 'Ordenar Arrays',
        description: 'Ordenar arrays em PHP com sort()',
        language: 'php',
        code: '<?php\n$fruits = array("Banana", "Apple", "Cherry");\nsort($fruits);\nprint_r($fruits);\n?>',
      },
      {
        id: 'php-15',
        title: 'Iterar Arrays',
        description: 'Percorrer elementos de um array com foreach',
        language: 'php',
        code: '<?php\n$numbers = array(1, 2, 3);\nforeach ($numbers as $number) {\n  echo $number . " ";\n}\n?>',
      },
      {
        id: 'php-16',
        title: 'Conexão com SQLite',
        description: 'Conectar e executar comandos em SQLite',
        language: 'php',
        code: '<?php\ntry {\n  $db = new PDO("sqlite:mydatabase.db");\n  $db->exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)");\n  echo "Connected to SQLite successfully!";\n} catch (PDOException $e) {\n  echo $e->getMessage();\n}\n?>',
      },
      {
        id: 'php-17',
        title: 'Padrão Factory',
        description: 'Implementar o padrão Factory em PHP',
        language: 'php',
        code: '<?php\nclass CarFactory {\n  public static function create($model) {\n    return new Car($model);\n  }\n}\n\nclass Car {\n  private $model;\n  public function __construct($model) {\n    $this->model = $model;\n  }\n  public function getModel() {\n    return $this->model;\n  }\n}\n\n$car = CarFactory::create("Sedan");\necho $car->getModel();\n?>',
      },
      {
        id: 'php-18',
        title: 'Curl Request',
        description: 'Fazer uma requisição HTTP com Curl em PHP',
        language: 'php',
        code: '<?php\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, "https://api.example.com/data");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n$response = curl_exec($ch);\ncurl_close($ch);\necho $response;\n?>',
      },
      {
        id: 'php-19',
        title: 'Comprimir String',
        description: 'Compactar e descompactar strings em PHP',
        language: 'php',
        code: '<?php\n$original = "Hello, this is a test!";\n$compressed = gzcompress($original);\n$uncompressed = gzuncompress($compressed);\necho $uncompressed;\n?>',
      },
      {
        id: 'php-20',
        title: 'Regex com Preg',
        description: 'Usar regex com funções preg_* em PHP',
        language: 'php',
        code: '<?php\n$pattern = "/^\\d{3}-\\d{3}-\\d{4}$/";\n$number = "123-456-7890";\nif (preg_match($pattern, $number)) {\n  echo "Valid phone number!";\n} else {\n  echo "Invalid phone number.";\n}\n?>',
      },
    ],
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: <Terminal size={24} className="text-blue-500" />,
    description: 'Plataforma para criar, implantar e gerenciar contêineres',
    documentation: 'https://docs.docker.com/',
    tutorials: [
      { title: 'Docker Docs', url: 'https://docs.docker.com/' },
      { title: 'Docker Tutorial', url: 'https://www.docker.com/101-tutorial' },
    ],
    snippets: [
      {
        id: 'docker-1',
        title: 'Instalar Docker no Linux',
        description: 'Passo a passo para instalar o Docker no Linux (Ubuntu)',
        language: 'bash',
        code: '# Atualize o sistema\nsudo apt update\n\n# Instale dependências\nsudo apt install apt-transport-https ca-certificates curl software-properties-common\n\n# Adicione a chave GPG oficial do Docker\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n\n# Adicione o repositório do Docker\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\n# Instale o Docker\nsudo apt update\nsudo apt install docker-ce docker-ce-cli containerd.io\n\n# Verifique a instalação\nsudo docker --version',
      },
      {
        id: 'docker-2',
        title: 'Instalar Docker no Windows',
        description: 'Passo a passo para instalar o Docker no Windows',
        language: 'markdown',
        code: '1. Baixe o Docker Desktop no site oficial: https://www.docker.com/products/docker-desktop.\n2. Execute o instalador e siga as instruções.\n3. Após a instalação, reinicie o computador.\n4. Abra o Docker Desktop e verifique se ele está rodando.\n5. Abra o terminal e execute `docker --version` para verificar a instalação.',
      },
      {
        id: 'docker-3',
        title: 'Instalar Docker no macOS',
        description: 'Passo a passo para instalar o Docker no macOS',
        language: 'markdown',
        code: '1. Baixe o Docker Desktop no site oficial: https://www.docker.com/products/docker-desktop.\n2. Execute o instalador e arraste o ícone do Docker para a pasta "Applications".\n3. Abra o Docker Desktop e siga as instruções iniciais.\n4. Verifique a instalação executando `docker --version` no terminal.',
      },
      {
        id: 'docker-4',
        title: 'Executar um Contêiner',
        description: 'Executar um contêiner a partir de uma imagem',
        language: 'bash',
        code: '# Executar um contêiner Nginx\ndocker run -d -p 8080:80 --name meu-nginx nginx\n\n# Acesse http://localhost:8080 para ver o Nginx rodando.',
      },
      {
        id: 'docker-5',
        title: 'Criar uma Imagem Personalizada',
        description: 'Criar uma imagem Docker a partir de um Dockerfile',
        language: 'dockerfile',
        code: '# Dockerfile\nFROM ubuntu:20.04\nRUN apt update && apt install -y nginx\nCOPY index.html /var/www/html/\nEXPOSE 80\nCMD ["nginx", "-g", "daemon off;"]\n\n# Construir a imagem\ndocker build -t minha-imagem .\n\n# Executar a imagem\ndocker run -d -p 8080:80 --name meu-servidor minha-imagem',
      },
      {
        id: 'docker-6',
        title: 'Listar Contêineres e Imagens',
        description: 'Comandos para listar contêineres e imagens',
        language: 'bash',
        code: '# Listar contêineres em execução\ndocker ps\n\n# Listar todos os contêineres (incluindo parados)\ndocker ps -a\n\n# Listar imagens disponíveis\ndocker images',
      },
      {
        id: 'docker-7',
        title: 'Parar e Remover Contêineres',
        description: 'Comandos para parar e remover contêineres',
        language: 'bash',
        code: '# Parar um contêiner\ndocker stop meu-nginx\n\n# Remover um contêiner\ndocker rm meu-nginx\n\n# Remover todos os contêineres parados\ndocker container prune',
      },
      {
        id: 'docker-8',
        title: 'Persistência de Dados com Volumes',
        description: 'Usar volumes para persistir dados',
        language: 'bash',
        code: '# Criar um volume\ndocker volume create meu-volume\n\n# Executar um contêiner com volume\ndocker run -d -p 8080:80 --name meu-nginx -v meu-volume:/usr/share/nginx/html nginx\n\n# Verificar volumes\ndocker volume ls',
      },
      {
        id: 'docker-9',
        title: 'Docker Compose',
        description: 'Orquestrar múltiplos contêineres com Docker Compose',
        language: 'yaml',
        code: '# docker-compose.yml\nversion: "3.8"\nservices:\n  web:\n    image: nginx\n    ports:\n      - "8080:80"\n  db:\n    image: mysql\n    environment:\n      MYSQL_ROOT_PASSWORD: senha\n\n# Iniciar os contêineres\ndocker-compose up -d\n\n# Parar os contêineres\ndocker-compose down',
      },
      {
        id: 'docker-10',
        title: 'Redes no Docker',
        description: 'Criar e gerenciar redes para contêineres',
        language: 'bash',
        code: '# Criar uma rede\ndocker network create minha-rede\n\n# Executar contêineres na mesma rede\ndocker run -d --name meu-nginx --network minha-rede nginx\ndocker run -d --name meu-mysql --network minha-rede mysql\n\n# Verificar redes\ndocker network ls',
      },
      {
        id: 'docker-11',
        title: 'Executar Comandos Dentro de um Contêiner',
        description: 'Executar comandos em um contêiner em execução',
        language: 'bash',
        code: '# Executar um comando no contêiner\ndocker exec -it meu-nginx bash\n\n# Exemplo: Listar arquivos no contêiner Nginx\nls /usr/share/nginx/html',
      },
      {
        id: 'docker-12',
        title: 'Copiar Arquivos para/Dentro de um Contêiner',
        description: 'Copiar arquivos entre o host e o contêiner',
        language: 'bash',
        code: '# Copiar arquivo do host para o contêiner\ndocker cp meu-arquivo.txt meu-nginx:/usr/share/nginx/html\n\n# Copiar arquivo do contêiner para o host\ndocker cp meu-nginx:/usr/share/nginx/html/meu-arquivo.txt .',
      },
      {
        id: 'docker-13',
        title: 'Configurar Variáveis de Ambiente',
        description: 'Passar variáveis de ambiente para um contêiner',
        language: 'bash',
        code: '# Executar um contêiner com variáveis de ambiente\ndocker run -d --name meu-app -e "VARIAVEL=valor" minha-imagem',
      },
      {
        id: 'docker-14',
        title: 'Logs de Contêineres',
        description: 'Visualizar logs de um contêiner',
        language: 'bash',
        code: '# Ver logs de um contêiner\ndocker logs meu-nginx\n\n# Ver logs em tempo real\ndocker logs -f meu-nginx',
      },
      {
        id: 'docker-15',
        title: 'Remover Imagens Não Utilizadas',
        description: 'Limpar imagens não utilizadas',
        language: 'bash',
        code: '# Remover imagens não utilizadas\ndocker image prune\n\n# Remover todas as imagens não utilizadas (incluindo as não referenciadas)\ndocker image prune -a',
      },
      {
        id: 'docker-16',
        title: 'Configurar Limites de Recursos',
        description: 'Limitar CPU e memória de um contêiner',
        language: 'bash',
        code: '# Executar um contêiner com limites de CPU e memória\ndocker run -d --name meu-app --cpus="1.5" --memory="512m" minha-imagem',
      },
      {
        id: 'docker-17',
        title: 'Criar um Dockerfile para uma Aplicação Node.js',
        description: 'Exemplo de Dockerfile para uma aplicação Node.js',
        language: 'dockerfile',
        code: '# Dockerfile\nFROM node:14\nWORKDIR /app\nCOPY package.json .\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["node", "app.js"]',
      },
      {
        id: 'docker-18',
        title: 'Criar um Dockerfile para uma Aplicação Python',
        description: 'Exemplo de Dockerfile para uma aplicação Python',
        language: 'dockerfile',
        code: '# Dockerfile\nFROM python:3.9-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nEXPOSE 5000\nCMD ["python", "app.py"]',
      },
      {
        id: 'docker-19',
        title: 'Configurar Docker Compose para um Ambiente de Desenvolvimento',
        description:
          'Exemplo de Docker Compose para um ambiente com Node.js e MongoDB',
        language: 'yaml',
        code: '# docker-compose.yml\nversion: "3.8"\nservices:\n  web:\n    image: node:14\n    working_dir: /app\n    volumes:\n      - .:/app\n    ports:\n      - "3000:3000"\n    command: npm start\n  db:\n    image: mongo\n    ports:\n      - "27017:27017"',
      },
      {
        id: 'docker-20',
        title: 'Configurar Docker Compose para um Ambiente de Produção',
        description:
          'Exemplo de Docker Compose para um ambiente de produção com Nginx e MySQL',
        language: 'yaml',
        code: '# docker-compose.yml\nversion: "3.8"\nservices:\n  web:\n    image: nginx\n    ports:\n      - "80:80"\n    volumes:\n      - ./html:/usr/share/nginx/html\n  db:\n    image: mysql\n    environment:\n      MYSQL_ROOT_PASSWORD: senha\n    volumes:\n      - db-data:/var/lib/mysql\nvolumes:\n  db-data:',
      },
    ],
  },
  {
    id: 'aws',
    name: 'AWS',
    icon: <Cloudy size={24} className="text-orange-500" />,
    description:
      'Plataforma de serviços em nuvem da Amazon para computação, armazenamento e muito mais',
    documentation: 'https://aws.amazon.com/documentation/',
    tutorials: [
      {
        title: 'AWS Getting Started',
        url: 'https://aws.amazon.com/getting-started/',
      },
      { title: 'AWS Tutorials', url: 'https://aws.amazon.com/tutorials/' },
    ],
    snippets: [
      {
        id: 'aws-1',
        title: 'Criar uma instância EC2',
        description: 'Criar uma instância EC2 usando AWS CLI',
        language: 'bash',
        code: 'aws ec2 run-instances \\\n  --image-id ami-0abcdef1234567890 \\\n  --instance-type t2.micro \\\n  --key-name MyKeyPair \\\n  --security-group-ids sg-903004f8 \\\n  --subnet-id subnet-6e7f829e',
      },
      {
        id: 'aws-2',
        title: 'Criar um bucket S3',
        description: 'Criar um bucket S3 usando AWS CLI',
        language: 'bash',
        code: 'aws s3api create-bucket \\\n  --bucket meu-bucket-unico \\\n  --region us-east-1',
      },
      {
        id: 'aws-3',
        title: 'Enviar arquivo para S3',
        description: 'Enviar um arquivo para um bucket S3',
        language: 'bash',
        code: 'aws s3 cp meu-arquivo.txt s3://meu-bucket-unico/',
      },
      {
        id: 'aws-4',
        title: 'Criar uma função Lambda',
        description: 'Criar uma função Lambda usando AWS CLI',
        language: 'bash',
        code: 'aws lambda create-function \\\n  --function-name minha-funcao \\\n  --runtime nodejs14.x \\\n  --handler index.handler \\\n  --role arn:aws:iam::123456789012:role/lambda-execution-role \\\n  --zip-file fileb://minha-funcao.zip',
      },
      {
        id: 'aws-5',
        title: 'Criar uma tabela DynamoDB',
        description: 'Criar uma tabela DynamoDB usando AWS CLI',
        language: 'bash',
        code: 'aws dynamodb create-table \\\n  --table-name MinhaTabela \\\n  --attribute-definitions AttributeName=ID,AttributeType=S \\\n  --key-schema AttributeName=ID,KeyType=HASH \\\n  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5',
      },
      {
        id: 'aws-6',
        title: 'Inserir item no DynamoDB',
        description: 'Inserir um item em uma tabela DynamoDB',
        language: 'bash',
        code: 'aws dynamodb put-item \\\n  --table-name MinhaTabela \\\n  --item \'{"ID": {"S": "123"}, "Nome": {"S": "João"}}\'',
      },
      {
        id: 'aws-7',
        title: 'Criar um tópico SNS',
        description: 'Criar um tópico SNS para notificações',
        language: 'bash',
        code: 'aws sns create-topic \\\n  --name MeuTopico',
      },
      {
        id: 'aws-8',
        title: 'Publicar mensagem no SNS',
        description: 'Publicar uma mensagem em um tópico SNS',
        language: 'bash',
        code: 'aws sns publish \\\n  --topic-arn arn:aws:sns:us-east-1:123456789012:MeuTopico \\\n  --message "Olá, mundo!"',
      },
      {
        id: 'aws-9',
        title: 'Criar uma fila SQS',
        description: 'Criar uma fila SQS para mensagens',
        language: 'bash',
        code: 'aws sqs create-queue \\\n  --queue-name MinhaFila',
      },
      {
        id: 'aws-10',
        title: 'Enviar mensagem para SQS',
        description: 'Enviar uma mensagem para uma fila SQS',
        language: 'bash',
        code: 'aws sqs send-message \\\n  --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/MinhaFila \\\n  --message-body "Olá, SQS!"',
      },
      {
        id: 'aws-11',
        title: 'Criar um banco RDS',
        description: 'Criar uma instância de banco de dados RDS',
        language: 'bash',
        code: 'aws rds create-db-instance \\\n  --db-instance-identifier meu-banco \\\n  --db-instance-class db.t2.micro \\\n  --engine mysql \\\n  --master-username admin \\\n  --master-user-password senha123 \\\n  --allocated-storage 20',
      },
      {
        id: 'aws-12',
        title: 'Criar uma distribuição CloudFront',
        description: 'Criar uma distribuição CloudFront para um bucket S3',
        language: 'bash',
        code: 'aws cloudfront create-distribution \\\n  --origin-domain-name meu-bucket-unico.s3.amazonaws.com',
      },
      {
        id: 'aws-13',
        title: 'Criar uma função IAM',
        description: 'Criar uma função IAM para permissões',
        language: 'bash',
        code: 'aws iam create-role \\\n  --role-name MinhaRole \\\n  --assume-role-policy-document file://politica.json',
      },
      {
        id: 'aws-14',
        title: 'Criar um usuário IAM',
        description: 'Criar um usuário IAM',
        language: 'bash',
        code: 'aws iam create-user \\\n  --user-name MeuUsuario',
      },
      {
        id: 'aws-15',
        title: 'Criar um grupo IAM',
        description: 'Criar um grupo IAM e adicionar um usuário',
        language: 'bash',
        code: 'aws iam create-group \\\n  --group-name MeuGrupo\n\naws iam add-user-to-group \\\n  --group-name MeuGrupo \\\n  --user-name MeuUsuario',
      },
      {
        id: 'aws-16',
        title: 'Criar um alarme CloudWatch',
        description: 'Criar um alarme CloudWatch para monitoramento',
        language: 'bash',
        code: 'aws cloudwatch put-metric-alarm \\\n  --alarm-name MeuAlarme \\\n  --metric-name CPUUtilization \\\n  --namespace AWS/EC2 \\\n  --statistic Average \\\n  --period 300 \\\n  --threshold 80 \\\n  --comparison-operator GreaterThanOrEqualToThreshold \\\n  --evaluation-periods 2 \\\n  --alarm-actions arn:aws:sns:us-east-1:123456789012:MeuTopico',
      },
      {
        id: 'aws-17',
        title: 'Criar uma VPC',
        description: 'Criar uma VPC (Virtual Private Cloud)',
        language: 'bash',
        code: 'aws ec2 create-vpc \\\n  --cidr-block 10.0.0.0/16',
      },
      {
        id: 'aws-18',
        title: 'Criar um Subnet',
        description: 'Criar um subnet em uma VPC',
        language: 'bash',
        code: 'aws ec2 create-subnet \\\n  --vpc-id vpc-0abcdef1234567890 \\\n  --cidr-block 10.0.1.0/24',
      },
      {
        id: 'aws-19',
        title: 'Criar um Gateway de Internet',
        description: 'Criar e anexar um Internet Gateway a uma VPC',
        language: 'bash',
        code: 'aws ec2 create-internet-gateway\n\naws ec2 attach-internet-gateway \\\n  --internet-gateway-id igw-0abcdef1234567890 \\\n  --vpc-id vpc-0abcdef1234567890',
      },
      {
        id: 'aws-20',
        title: 'Criar um Load Balancer',
        description: 'Criar um Application Load Balancer (ALB)',
        language: 'bash',
        code: 'aws elbv2 create-load-balancer \\\n  --name meu-alb \\\n  --subnets subnet-6e7f829e subnet-9c4a8bfc \\\n  --security-groups sg-903004f8',
      },
    ],
  },
  {
    id: 'csharp',
    name: 'C#',
    icon: <FileCode size={24} className="text-purple-500" />,
    description:
      'Linguagem de programação moderna e orientada a objetos da Microsoft',
    documentation: 'https://docs.microsoft.com/pt-br/dotnet/csharp/',
    tutorials: [
      {
        title: 'C# Docs',
        url: 'https://docs.microsoft.com/pt-br/dotnet/csharp/',
      },
      { title: 'C# Tutorial', url: 'https://www.w3schools.com/cs/' },
    ],
    snippets: [
      {
        id: 'csharp-1',
        title: 'Hello World',
        description: 'Programa básico em C#',
        language: 'csharp',
        code: 'using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, World!");\n  }\n}',
      },
      {
        id: 'csharp-2',
        title: 'Classes e Objetos',
        description: 'Definir uma classe e criar objetos',
        language: 'csharp',
        code: 'class Car {\n  public string model;\n  public int year;\n\n  public Car(string model, int year) {\n    this.model = model;\n    this.year = year;\n  }\n\n  public void Display() {\n    Console.WriteLine($"Model: {model}, Year: {year}");\n  }\n}\n\nclass Program {\n  static void Main() {\n    Car myCar = new Car("Toyota", 2020);\n    myCar.Display();\n  }\n}',
      },
      {
        id: 'csharp-3',
        title: 'LINQ',
        description: 'Usando LINQ para consultas',
        language: 'csharp',
        code: 'using System;\nusing System.Linq;\n\nclass Program {\n  static void Main() {\n    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };\n\n    var lowNums = from num in numbers\n                  where num < 5\n                  select num;\n\n    Console.WriteLine("Numbers < 5:");\n    foreach (var num in lowNums) {\n      Console.WriteLine(num);\n    }\n  }\n}',
      },
      {
        id: 'csharp-4',
        title: 'Propriedades Automáticas',
        description: 'Uso de propriedades automáticas em C#',
        language: 'csharp',
        code: 'class Person {\n  public string Name { get; set; }\n  public int Age { get; set; }\n\n  public void Display() {\n    Console.WriteLine($"Name: {Name}, Age: {Age}");\n  }\n}\n\nclass Program {\n  static void Main() {\n    Person person = new Person { Name: "Alice", Age: 25 };\n    person.Display();\n  }\n}',
      },
      {
        id: 'csharp-5',
        title: 'Exceções',
        description: 'Tratamento de exceções em C#',
        language: 'csharp',
        code: 'using System;\n\nclass Program {\n  static void Main() {\n    try {\n      int divisor = 0;\n      int result = 10 / divisor;\n    } catch (DivideByZeroException e) {\n      Console.WriteLine("Erro: Divisão por zero.");\n    }\n  }\n}',
      },
      {
        id: 'csharp-6',
        title: 'Herança',
        description: 'Exemplo de herança em C#',
        language: 'csharp',
        code: 'class Animal {\n  public string Name { get; set; }\n  public void Speak() {\n    Console.WriteLine($"{Name} faz um som.");\n  }\n}\n\nclass Dog : Animal {\n  public void Bark() {\n    Console.WriteLine($"{Name} late.");\n  }\n}\n\nclass Program {\n  static void Main() {\n    Dog dog = new Dog { Name: "Rex" };\n    dog.Speak();\n    dog.Bark();\n  }\n}',
      },
      {
        id: 'csharp-7',
        title: 'Coleções Genéricas',
        description: 'Uso de coleções genéricas em C#',
        language: 'csharp',
        code: 'using System;\nusing System.Collections.Generic;\n\nclass Program {\n  static void Main() {\n    List<string> names = new List<string> { "Alice", "Bob", "Charlie" };\n\n    foreach (string name in names) {\n      Console.WriteLine(name);\n    }\n  }\n}',
      },
      {
        id: 'csharp-8',
        title: 'Eventos',
        description: 'Uso de eventos em C#',
        language: 'csharp',
        code: 'using System;\n\nclass Publisher {\n  public event Action OnChange;\n\n  public void RaiseEvent() {\n    if (OnChange != null) {\n      OnChange();\n    }\n  }\n}\n\nclass Subscriber {\n  public void Subscribe(Publisher publisher) {\n    publisher.OnChange += () => Console.WriteLine("Evento disparado!");\n  }\n}\n\nclass Program {\n  static void Main() {\n    Publisher publisher = new Publisher();\n    Subscriber subscriber = new Subscriber();\n    subscriber.Subscribe(publisher);\n\n    publisher.RaiseEvent();\n  }\n}',
      },
    ],
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: <FileCode size={24} className="text-blue-500" />,
    description:
      'Linguagem de programação de alto desempenho e propósito geral',
    documentation: 'https://en.cppreference.com/w/',
    tutorials: [
      { title: 'C++ Docs', url: 'https://en.cppreference.com/w/' },
      { title: 'C++ Tutorial', url: 'https://www.w3schools.com/cpp/' },
    ],
    snippets: [
      {
        id: 'cpp-1',
        title: 'Hello World',
        description: 'Programa básico em C++',
        language: 'cpp',
        code: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!";\n  return 0;\n}',
      },
      {
        id: 'cpp-2',
        title: 'Classes e Objetos',
        description: 'Definir uma classe e criar objetos',
        language: 'cpp',
        code: '#include <iostream>\n#include <string>\n\nclass Car {\npublic:\n  std::string model;\n  int year;\n\n  Car(std::string model, int year) {\n    this->model = model;\n    this->year = year;\n  }\n\n  void display() {\n    std::cout << "Model: " << model << ", Year: " << year << std::endl;\n  }\n};\n\nint main() {\n  Car myCar("Toyota", 2020);\n  myCar.display();\n  return 0;\n}',
      },
      {
        id: 'cpp-3',
        title: 'STL - Vector',
        description: 'Usando a STL (Standard Template Library) com vector',
        language: 'cpp',
        code: '#include <iostream>\n#include <vector>\n\nint main() {\n  std::vector<int> numbers = {1, 2, 3, 4, 5};\n\n  for (int num : numbers) {\n    std::cout << num << std::endl;\n  }\n\n  return 0;\n}',
      },
      {
        id: 'cpp-4',
        title: 'Herança',
        description: 'Exemplo de herança em C++',
        language: 'cpp',
        code: '#include <iostream>\n\nclass Animal {\npublic:\n  void speak() {\n    std::cout << "Animal faz um som." << std::endl;\n  }\n};\n\nclass Dog : public Animal {\npublic:\n  void bark() {\n    std::cout << "Dog late." << std::endl;\n  }\n};\n\nint main() {\n  Dog myDog;\n  myDog.speak();\n  myDog.bark();\n  return 0;\n}',
      },
      {
        id: 'cpp-5',
        title: 'Ponteiros',
        description: 'Uso de ponteiros em C++',
        language: 'cpp',
        code: '#include <iostream>\n\nint main() {\n  int value = 10;\n  int* ptr = &value;\n\n  std::cout << "Value: " << value << std::endl;\n  std::cout << "Pointer: " << ptr << std::endl;\n  std::cout << "Dereferenced Pointer: " << *ptr << std::endl;\n\n  return 0;\n}',
      },
      {
        id: 'cpp-6',
        title: 'Sobrecarga de Operadores',
        description: 'Exemplo de sobrecarga de operadores em C++',
        language: 'cpp',
        code: '#include <iostream>\n\nclass Complex {\npublic:\n  int real, imag;\n  Complex(int r = 0, int i = 0) : real(r), imag(i) {}\n\n  Complex operator + (const Complex& obj) {\n    Complex res;\n    res.real = real + obj.real;\n    res.imag = imag + obj.imag;\n    return res;\n  }\n};\n\nint main() {\n  Complex c1(3, 4), c2(1, 2);\n  Complex c3 = c1 + c2;\n  std::cout << "Result: " << c3.real << " + " << c3.imag << "i" << std::endl;\n  return 0;\n}',
      },
      {
        id: 'cpp-7',
        title: 'Template de Função',
        description: 'Uso de template de função em C++',
        language: 'cpp',
        code: '#include <iostream>\n\ntemplate <typename T>\nT max(T a, T b) {\n  return (a > b) ? a : b;\n}\n\nint main() {\n  std::cout << "Max(10, 20): " << max(10, 20) << std::endl;\n  std::cout << "Max(1.5, 2.5): " << max(1.5, 2.5) << std::endl;\n  return 0;\n}',
      },
      {
        id: 'cpp-8',
        title: 'Exceções',
        description: 'Tratamento de exceções em C++',
        language: 'cpp',
        code: '#include <iostream>\n\nint main() {\n  try {\n    int divisor = 0;\n    if (divisor == 0) {\n      throw "Divisão por zero!";\n    }\n    int result = 10 / divisor;\n  } catch (const char* e) {\n    std::cout << "Erro: " << e << std::endl;\n  }\n\n  return 0;\n}',
      },
    ],
  },
  {
    id: 'java',
    name: 'Java',
    icon: <FileCode size={24} className="text-red-500" />,
    description:
      'Linguagem de programação orientada a objetos, robusta e multiplataforma',
    documentation: 'https://docs.oracle.com/javase/8/docs/',
    tutorials: [
      {
        title: 'Java Tutorial',
        url: 'https://docs.oracle.com/javase/tutorial/',
      },
      { title: 'Java para Iniciantes', url: 'https://www.w3schools.com/java/' },
    ],
    snippets: [
      {
        id: 'java-1',
        title: 'Hello World',
        description: 'Programa básico em Java',
        language: 'java',
        code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
      },
      {
        id: 'java-2',
        title: 'Classes e Objetos',
        description: 'Definir uma classe e criar objetos',
        language: 'java',
        code: 'class Car {\n  String model;\n  int year;\n\n  Car(String model, int year) {\n    this.model = model;\n    this.year = year;\n  }\n\n  void display() {\n    System.out.println("Model: " + model + ", Year: " + year);\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Car myCar = new Car("Toyota", 2020);\n    myCar.display();\n  }\n}',
      },
      {
        id: 'java-3',
        title: 'Collections',
        description: 'Usando ArrayList em Java',
        language: 'java',
        code: 'import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> cars = new ArrayList<String>();\n    cars.add("Volvo");\n    cars.add("BMW");\n    cars.add("Ford");\n    \n    for (String car : cars) {\n      System.out.println(car);\n    }\n  }\n}',
      },
      {
        id: 'java-4',
        title: 'Herança',
        description: 'Exemplo de herança em Java',
        language: 'java',
        code: 'class Animal {\n  void eat() {\n    System.out.println("Eating...");\n  }\n}\n\nclass Dog extends Animal {\n  void bark() {\n    System.out.println("Barking...");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog dog = new Dog();\n    dog.eat();\n    dog.bark();\n  }\n}',
      },
      {
        id: 'java-5',
        title: 'Interface',
        description: 'Definir e implementar uma interface',
        language: 'java',
        code: 'interface Animal {\n  void makeSound();\n}\n\nclass Dog implements Animal {\n  public void makeSound() {\n    System.out.println("Woof!");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog dog = new Dog();\n    dog.makeSound();\n  }\n}',
      },
      {
        id: 'java-6',
        title: 'Tratamento de Exceções',
        description: 'Capturar e tratar exceções',
        language: 'java',
        code: 'public class Main {\n  public static void main(String[] args) {\n    try {\n      int[] numbers = {1, 2, 3};\n      System.out.println(numbers[5]);\n    } catch (Exception e) {\n      System.out.println("Erro: " + e.getMessage());\n    }\n  }\n}',
      },
      {
        id: 'java-7',
        title: 'Polimorfismo',
        description: 'Demonstrar o uso de polimorfismo em Java',
        language: 'java',
        code: 'class Animal {\n  void makeSound() {\n    System.out.println("Some sound");\n  }\n}\n\nclass Cat extends Animal {\n  void makeSound() {\n    System.out.println("Meow");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Animal myAnimal = new Cat();\n    myAnimal.makeSound();\n  }\n}',
      },
      {
        id: 'java-8',
        title: 'Threads',
        description: 'Criar e executar threads em Java',
        language: 'java',
        code: 'class MyThread extends Thread {\n  public void run() {\n    System.out.println("Thread executando...");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    MyThread thread = new MyThread();\n    thread.start();\n  }\n}',
      },
      {
        id: 'java-9',
        title: 'Lambda Expressions',
        description: 'Usar expressões lambda para simplificar código',
        language: 'java',
        code: 'import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> names = new ArrayList<>();\n    names.add("John");\n    names.add("Jane");\n    \n    names.forEach(name -> System.out.println(name));\n  }\n}',
      },
      {
        id: 'java-10',
        title: 'Streams API',
        description: 'Exemplo de uso da Streams API',
        language: 'java',
        code: 'import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n    numbers.stream()\n           .filter(num -> num % 2 == 0)\n           .forEach(System.out::println);\n  }\n}',
      },
      {
        id: 'java-11',
        title: 'Recursão',
        description: 'Usar recursão para calcular fatorial',
        language: 'java',
        code: 'public class Main {\n  public static int factorial(int n) {\n    if (n == 0) {\n      return 1;\n    }\n    return n * factorial(n - 1);\n  }\n\n  public static void main(String[] args) {\n    System.out.println("Fatorial de 5: " + factorial(5));\n  }\n}',
      },
      {
        id: 'java-12',
        title: 'Entrada de Dados',
        description: 'Ler entrada do usuário no console',
        language: 'java',
        code: 'import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.println("Digite seu nome: ");\n    String nome = scanner.nextLine();\n    System.out.println("Olá, " + nome + "!");\n  }\n}',
      },
      {
        id: 'java-13',
        title: 'Escrita em Arquivo',
        description: 'Escrever dados em um arquivo',
        language: 'java',
        code: 'import java.io.FileWriter;\nimport java.io.IOException;\n\npublic class Main {\n  public static void main(String[] args) {\n    try (FileWriter writer = new FileWriter("output.txt")) {\n      writer.write("Olá, Arquivo!");\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n}',
      },
      {
        id: 'java-14',
        title: 'Leitura de Arquivo',
        description: 'Ler dados de um arquivo',
        language: 'java',
        code: 'import java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    try (Scanner scanner = new Scanner(new File("output.txt"))) {\n      while (scanner.hasNextLine()) {\n        System.out.println(scanner.nextLine());\n      }\n    } catch (FileNotFoundException e) {\n      e.printStackTrace();\n    }\n  }\n}',
      },
      {
        id: 'java-15',
        title: 'Java HashMap',
        description: 'Usar um HashMap para armazenar pares chave-valor',
        language: 'java',
        code: 'import java.util.HashMap;\n\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Integer> map = new HashMap<>();\n    map.put("Apple", 1);\n    map.put("Banana", 2);\n\n    map.forEach((key, value) -> System.out.println(key + ": " + value));\n  }\n}',
      },
      {
        id: 'java-16',
        title: 'Regex',
        description: 'Usar expressões regulares em Java',
        language: 'java',
        code: 'import java.util.regex.Pattern;\nimport java.util.regex.Matcher;\n\npublic class Main {\n  public static void main(String[] args) {\n    String texto = "Meu email é teste@exemplo.com";\n    Pattern pattern = Pattern.compile("\\\\w+@\\\\w+\\\\.\\\\w+");\n    Matcher matcher = pattern.matcher(texto);\n\n    if (matcher.find()) {\n      System.out.println("Email encontrado: " + matcher.group());\n    }\n  }\n}',
      },
      {
        id: 'java-17',
        title: 'Enum',
        description: 'Definir e usar um Enum',
        language: 'java',
        code: 'enum Dia {\n  SEGUNDA, TERCA, QUARTA, QUINTA, SEXTA, SABADO, DOMINGO\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dia hoje = Dia.SEGUNDA;\n    System.out.println("Hoje é: " + hoje);\n  }\n}',
      },
      {
        id: 'java-18',
        title: 'Threads com Runnable',
        description: 'Criar e executar threads com Runnable',
        language: 'java',
        code: 'class MyRunnable implements Runnable {\n  public void run() {\n    System.out.println("Thread executando...");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Thread thread = new Thread(new MyRunnable());\n    thread.start();\n  }\n}',
      },
      {
        id: 'java-19',
        title: 'Comparator',
        description: 'Ordenar uma lista com Comparator',
        language: 'java',
        code: 'import java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.Comparator;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> nomes = new ArrayList<>();\n    nomes.add("Carlos");\n    nomes.add("Ana");\n    nomes.add("João");\n\n    Collections.sort(nomes, Comparator.reverseOrder());\n    nomes.forEach(System.out::println);\n  }\n}',
      },
      {
        id: 'java-20',
        title: 'Timer',
        description: 'Usar um Timer para tarefas agendadas',
        language: 'java',
        code: 'import java.util.Timer;\nimport java.util.TimerTask;\n\npublic class Main {\n  public static void main(String[] args) {\n    Timer timer = new Timer();\n    timer.schedule(new TimerTask() {\n      @Override\n      public void run() {\n        System.out.println("Tarefa executada!");\n      }\n    }, 2000, 1000); // Inicia após 2 segundos e repete a cada 1 segundo\n  }\n}',
      },
    ],
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: <FileCode size={24} className="text-purple-500" />,
    description:
      'Linguagem moderna e concisa para desenvolvimento Android e multiplataforma',
    documentation: 'https://kotlinlang.org/docs/home.html',
    tutorials: [
      { title: 'Kotlin Docs', url: 'https://kotlinlang.org/docs/home.html' },
      {
        title: 'Kotlin para Iniciantes',
        url: 'https://www.w3schools.com/kotlin/',
      },
    ],
    snippets: [
      {
        id: 'kotlin-1',
        title: 'Hello World',
        description: 'Programa básico em Kotlin',
        language: 'kotlin',
        code: 'fun main() {\n  println("Hello, World!")\n}',
      },
      {
        id: 'kotlin-2',
        title: 'Funções e Lambdas',
        description: 'Definir funções e expressões lambda',
        language: 'kotlin',
        code: 'fun sum(a: Int, b: Int): Int {\n  return a + b\n}\n\nfun main() {\n  val result = sum(5, 3)\n  println("Result: $result")\n\n  // Lambda\n  val multiply = { a: Int, b: Int -> a * b }\n  println("Multiply: ${multiply(4, 5)}")\n}',
      },
      {
        id: 'kotlin-3',
        title: 'Classes e Data Classes',
        description: 'Definir classes e data classes',
        language: 'kotlin',
        code: 'class Person(val name: String, var age: Int)\n\ndata class User(val id: Int, val name: String)\n\nfun main() {\n  val person = Person("John", 30)\n  println("Name: ${person.name}, Age: ${person.age}")\n\n  val user = User(1, "Jane")\n  println(user) // toString() automático\n}',
      },
      {
        id: 'kotlin-4',
        title: 'Herança',
        description: 'Exemplo de herança em Kotlin',
        language: 'kotlin',
        code: 'open class Animal {\n  open fun makeSound() {\n    println("Animal sound")\n  }\n}\n\nclass Dog : Animal() {\n  override fun makeSound() {\n    println("Woof!")\n  }\n}\n\nfun main() {\n  val dog = Dog()\n  dog.makeSound()\n}',
      },
      {
        id: 'kotlin-5',
        title: 'Extensions',
        description: 'Adicionar funções a classes existentes',
        language: 'kotlin',
        code: 'fun String.isPalindrome(): Boolean {\n  return this == this.reversed()\n}\n\nfun main() {\n  val word = "racecar"\n  println("Is palindrome? ${word.isPalindrome()}") // true\n}',
      },
      {
        id: 'kotlin-6',
        title: 'Coroutines',
        description: 'Executar tarefas assíncronas com coroutines',
        language: 'kotlin',
        code: 'import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n  launch {\n    delay(1000L)\n    println("World!")\n  }\n  println("Hello,")\n}',
      },
      {
        id: 'kotlin-7',
        title: 'Null Safety',
        description: 'Trabalhar com segurança de null em Kotlin',
        language: 'kotlin',
        code: 'fun main() {\n  val name: String? = null\n  println(name?.length ?: "Nome é nulo")\n}',
      },
      {
        id: 'kotlin-8',
        title: 'Collections',
        description: 'Manipulação de coleções em Kotlin',
        language: 'kotlin',
        code: 'fun main() {\n  val numbers = listOf(1, 2, 3, 4)\n  val evenNumbers = numbers.filter { it % 2 == 0 }\n  println(evenNumbers)\n}',
      },
      {
        id: 'kotlin-9',
        title: 'Sealed Classes',
        description: 'Usar sealed classes para hierarquias restritas',
        language: 'kotlin',
        code: 'sealed class Result {\n  data class Success(val data: String): Result()\n  data class Error(val error: String): Result()\n}\n\nfun handleResult(result: Result) {\n  when (result) {\n    is Result.Success -> println("Success: ${result.data}")\n    is Result.Error -> println("Error: ${result.error}")\n  }\n}',
      },
      {
        id: 'kotlin-10',
        title: 'Lazy Initialization',
        description: 'Usar `lazy` para inicialização tardia',
        language: 'kotlin',
        code: 'val lazyValue: String by lazy {\n  println("Calculando...")\n  "Valor Inicializado"\n}\n\nfun main() {\n  println(lazyValue)\n  println(lazyValue)\n}',
      },
      {
        id: 'kotlin-11',
        title: 'Higher-Order Functions',
        description: 'Usar funções de ordem superior',
        language: 'kotlin',
        code: 'fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {\n  return operation(a, b)\n}\n\nfun main() {\n  val sum = operate(4, 5) { x, y -> x + y }\n  println("Sum: $sum")\n}',
      },
      {
        id: 'kotlin-12',
        title: 'Singleton',
        description: 'Criar um singleton com object',
        language: 'kotlin',
        code: 'object Singleton {\n  val id = 42\n  fun greet() = "Hello from Singleton"\n}\n\nfun main() {\n  println(Singleton.greet())\n}',
      },
      {
        id: 'kotlin-13',
        title: 'Generics',
        description: 'Usar tipos genéricos em Kotlin',
        language: 'kotlin',
        code: 'class Box<T>(val value: T)\n\nfun main() {\n  val box = Box(42)\n  println("Valor na box: ${box.value}")\n}',
      },
      {
        id: 'kotlin-14',
        title: 'Type Aliases',
        description: 'Criar aliases para tipos complexos',
        language: 'kotlin',
        code: 'typealias StringMap = Map<String, String>\n\nfun printMap(map: StringMap) {\n  map.forEach { (key, value) -> println("$key: $value") }\n}\n\nfun main() {\n  val data = mapOf("Name" to "John", "Age" to "30")\n  printMap(data)\n}',
      },
      {
        id: 'kotlin-15',
        title: 'Operator Overloading',
        description: 'Sobrescrever operadores em classes',
        language: 'kotlin',
        code: 'data class Point(val x: Int, val y: Int) {\n  operator fun plus(other: Point): Point {\n    return Point(x + other.x, y + other.y)\n  }\n}\n\nfun main() {\n  val p1 = Point(1, 2)\n  val p2 = Point(3, 4)\n  println(p1 + p2) // Point(x=4, y=6)\n}',
      },
      {
        id: 'kotlin-16',
        title: 'Inline Functions',
        description: 'Reduzir overhead com funções inline',
        language: 'kotlin',
        code: 'inline fun debug(message: () -> String) {\n  if (true) println(message())\n}\n\nfun main() {\n  debug { "Debugging Kotlin" }\n}',
      },
      {
        id: 'kotlin-17',
        title: 'Destructuring Declarations',
        description: 'Desconstruir objetos com data classes',
        language: 'kotlin',
        code: 'data class Person(val name: String, val age: Int)\n\nfun main() {\n  val (name, age) = Person("John", 30)\n  println("Name: $name, Age: $age")\n}',
      },
      {
        id: 'kotlin-18',
        title: 'Default and Named Arguments',
        description: 'Usar argumentos padrão e nomeados',
        language: 'kotlin',
        code: 'fun greet(name: String, age: Int = 18) {\n  println("Hello, $name! Age: $age")\n}\n\nfun main() {\n  greet("John")\n  greet(age = 25, name = "Jane")\n}',
      },
      {
        id: 'kotlin-19',
        title: 'Smart Casts',
        description: 'Evitar casting explícito com smart casts',
        language: 'kotlin',
        code: 'fun process(value: Any) {\n  if (value is String) {\n    println("Comprimento da string: ${value.length}")\n  }\n}\n\nfun main() {\n  process("Kotlin")\n}',
      },
      {
        id: 'kotlin-20',
        title: 'Range',
        description: 'Trabalhar com ranges em Kotlin',
        language: 'kotlin',
        code: 'fun main() {\n  for (i in 1..5) {\n    println(i)\n  }\n\n  if (3 in 1..5) {\n    println("3 está no range")\n  }\n}',
      },
    ],
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    icon: <Globe size={24} className="text-blue-500" />,
    description:
      'Sistema de gerenciamento de conteúdo (CMS) para criação de sites e blogs',
    documentation: 'https://wordpress.org/support/',
    tutorials: [
      { title: 'WordPress Codex', url: 'https://codex.wordpress.org/' },
      { title: 'WordPress Tutorial', url: 'https://www.wpbeginner.com/' },
    ],
    snippets: [
      {
        id: 'wp-1',
        title: 'Instalar o WordPress',
        description: 'Passo a passo para instalar o WordPress',
        language: 'markdown',
        code: '1. Baixe o WordPress em https://wordpress.org/download/.\n2. Extraia os arquivos e mova para o diretório do seu servidor.\n3. Crie um banco de dados MySQL para o WordPress.\n4. Acesse o site no navegador e siga o assistente de instalação.\n5. Preencha os detalhes do banco de dados e conclua a instalação.',
      },
      {
        id: 'wp-2',
        title: 'Instalar um Tema',
        description: 'Instalar e ativar um tema no WordPress',
        language: 'markdown',
        code: '1. Acesse o painel do WordPress.\n2. Vá para "Aparência" > "Temas".\n3. Clique em "Adicionar Novo" e pesquise por um tema.\n4. Clique em "Instalar" e depois em "Ativar".',
      },
      {
        id: 'wp-3',
        title: 'Instalar um Plugin',
        description: 'Instalar e ativar um plugin no WordPress',
        language: 'markdown',
        code: '1. Acesse o painel do WordPress.\n2. Vá para "Plugins" > "Adicionar Novo".\n3. Pesquise por um plugin.\n4. Clique em "Instalar" e depois em "Ativar".',
      },
      {
        id: 'wp-4',
        title: 'Criar um Post',
        description: 'Criar e publicar um post no WordPress',
        language: 'markdown',
        code: '1. Acesse o painel do WordPress.\n2. Vá para "Posts" > "Adicionar Novo".\n3. Adicione um título e conteúdo.\n4. Escolha uma categoria e tags.\n5. Clique em "Publicar".',
      },
      {
        id: 'wp-5',
        title: 'Criar uma Página',
        description: 'Criar e publicar uma página no WordPress',
        language: 'markdown',
        code: '1. Acesse o painel do WordPress.\n2. Vá para "Páginas" > "Adicionar Novo".\n3. Adicione um título e conteúdo.\n4. Clique em "Publicar".',
      },
      {
        id: 'wp-6',
        title: 'Adicionar um Menu',
        description: 'Criar e configurar um menu de navegação',
        language: 'markdown',
        code: '1. Acesse o painel do WordPress.\n2. Vá para "Aparência" > "Menus".\n3. Crie um novo menu e adicione itens (páginas, posts, links personalizados).\n4. Escolha a localização do menu e salve.',
      },
      {
        id: 'wp-7',
        title: 'Configurar Permalinks',
        description: 'Configurar URLs amigáveis',
        language: 'markdown',
        code: '1. Acesse o painel do WordPress.\n2. Vá para "Configurações" > "Links Permanentes".\n3. Escolha uma estrutura de permalink (ex: "Nome do post").\n4. Clique em "Salvar Alterações".',
      },
      {
        id: 'wp-8',
        title: 'Criar um Tema Personalizado',
        description: 'Estrutura básica de um tema WordPress',
        language: 'php',
        code: '// style.css\n/*\nTheme Name: Meu Tema\n*/\n\n// index.php\n<?php get_header(); ?>\n<main>\n  <h1>Bem-vindo ao Meu Tema</h1>\n</main>\n<?php get_footer(); ?>\n\n// functions.php\n<?php\nfunction meu_tema_scripts() {\n  wp_enqueue_style("meu-tema-style", get_stylesheet_uri());\n}\nadd_action("wp_enqueue_scripts", "meu_tema_scripts");\n?>',
      },
      {
        id: 'wp-9',
        title: 'Criar um Plugin Personalizado',
        description: 'Estrutura básica de um plugin WordPress',
        language: 'php',
        code: '// meu-plugin.php\n<?php\n/*\nPlugin Name: Meu Plugin\n*/\n\nfunction meu_plugin_mensagem() {\n  echo "<p>Olá, Mundo!</p>";\n}\nadd_action("wp_footer", "meu_plugin_mensagem");\n?>',
      },
      {
        id: 'wp-10',
        title: 'Adicionar Widgets',
        description: 'Adicionar widgets a áreas de widget',
        language: 'markdown',
        code: '1. Acesse o painel do WordPress.\n2. Vá para "Aparência" > "Widgets".\n3. Arraste widgets para as áreas disponíveis.\n4. Configure os widgets e salve.',
      },
      {
        id: 'wp-11',
        title: 'Otimizar o WordPress',
        description: 'Dicas para otimizar o desempenho',
        language: 'markdown',
        code: '- Use um plugin de cache (ex: WP Super Cache).\n- Otimize imagens com plugins como Smush.\n- Minifique CSS e JavaScript.\n- Use um CDN para entregar conteúdo estático.',
      },
      {
        id: 'wp-12',
        title: 'Proteger o WordPress',
        description: 'Dicas para aumentar a segurança',
        language: 'markdown',
        code: '- Mantenha o WordPress e os plugins atualizados.\n- Use senhas fortes e limite tentativas de login.\n- Instale um plugin de segurança (ex: Wordfence).\n- Faça backups regulares.',
      },
      {
        id: 'wp-13',
        title: 'Criar um Formulário de Contato',
        description: 'Usar o plugin Contact Form 7',
        language: 'markdown',
        code: '1. Instale e ative o plugin "Contact Form 7".\n2. Vá para "Contato" > "Formulários".\n3. Crie um novo formulário e copie o shortcode.\n4. Cole o shortcode em uma página ou post.',
      },
      {
        id: 'wp-14',
        title: 'Adicionar Google Analytics',
        description: 'Integrar Google Analytics ao WordPress',
        language: 'markdown',
        code: '1. Crie uma conta no Google Analytics.\n2. Instale o plugin "MonsterInsights".\n3. Conecte o plugin à sua conta do Google Analytics.\n4. Siga as instruções para configurar o rastreamento.',
      },
      {
        id: 'wp-15',
        title: 'Criar um E-commerce',
        description: 'Usar o WooCommerce para criar uma loja online',
        language: 'markdown',
        code: '1. Instale e ative o plugin "WooCommerce".\n2. Siga o assistente de configuração.\n3. Adicione produtos e configure métodos de pagamento.\n4. Escolha um tema compatível com WooCommerce.',
      },
      {
        id: 'wp-16',
        title: 'Criar um Blog Multiautor',
        description: 'Configurar um blog com múltiplos autores',
        language: 'markdown',
        code: '1. Adicione novos usuários com a função "Autor".\n2. Configure permissões para autores.\n3. Use plugins como "Co-Authors Plus" para gerenciar autores.\n4. Personalize o tema para exibir informações dos autores.',
      },
      {
        id: 'wp-17',
        title: 'Criar um Site Multilingue',
        description: 'Usar o WPML para sites em vários idiomas',
        language: 'markdown',
        code: '1. Instale e ative o plugin "WPML".\n2. Configure os idiomas desejados.\n3. Traduza posts, páginas e menus.\n4. Use o seletor de idiomas para permitir que os usuários alternem entre idiomas.',
      },
      {
        id: 'wp-18',
        title: 'Criar um Site de Membros',
        description: 'Usar o plugin MemberPress para criar um site de membros',
        language: 'markdown',
        code: '1. Instale e ative o plugin "MemberPress".\n2. Configure níveis de assinatura e regras de acesso.\n3. Crie páginas de login e registro.\n4. Proteja conteúdo exclusivo para membros.',
      },
      {
        id: 'wp-19',
        title: 'Criar um Site de Notícias',
        description: 'Configurar um site de notícias com o WordPress',
        language: 'markdown',
        code: '1. Escolha um tema voltado para notícias.\n2. Use categorias e tags para organizar o conteúdo.\n3. Configure widgets para exibir destaques e últimas notícias.\n4. Use plugins como "WP RSS Aggregator" para agregar notícias.',
      },
      {
        id: 'wp-20',
        title: 'Criar um Site de Portfólio',
        description: 'Configurar um site de portfólio com o WordPress',
        language: 'markdown',
        code: '1. Escolha um tema voltado para portfólio.\n2. Crie um post type personalizado para projetos.\n3. Adicione projetos com imagens e descrições.\n4. Use plugins como "Envira Gallery" para criar galerias.',
      },
    ],
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    icon: <FileCode size={24} className="text-green-500" />,
    description: 'Framework para desenvolvimento rápido de aplicações Java',
    documentation: 'https://spring.io/projects/spring-boot',
    tutorials: [
      {
        title: 'Spring Boot Docs',
        url: 'https://spring.io/projects/spring-boot',
      },
      {
        title: 'Spring Boot Tutorial',
        url: 'https://www.baeldung.com/spring-boot',
      },
    ],
    snippets: [
      {
        id: 'spring-1',
        title: 'Criar um Projeto Spring Boot',
        description: 'Inicializar um novo projeto Spring Boot',
        language: 'bash',
        code: '1. Acesse https://start.spring.io/.\n2. Escolha as configurações (Maven, Java, etc.).\n3. Adicione dependências como "Spring Web" e "Spring Data JPA".\n4. Clique em "Generate" para baixar o projeto.\n5. Extraia e abra o projeto no seu IDE.',
      },
      {
        id: 'spring-2',
        title: 'Criar um Endpoint REST',
        description: 'Criar um endpoint básico com Spring Boot',
        language: 'java',
        code: '@RestController\npublic class HelloController {\n  @GetMapping("/hello")\n  public String hello() {\n    return "Hello, World!";\n  }\n}',
      },
      {
        id: 'spring-3',
        title: 'Configurar Banco de Dados',
        description: 'Configurar conexão com banco de dados H2 (em memória)',
        language: 'properties',
        code: '# application.properties\nspring.datasource.url=jdbc:h2:mem:testdb\nspring.datasource.driverClassName=org.h2.Driver\nspring.datasource.username=sa\nspring.datasource.password=\nspring.h2.console.enabled=true',
      },
      {
        id: 'spring-4',
        title: 'Criar uma Entidade JPA',
        description: 'Definir uma entidade para persistência no banco de dados',
        language: 'java',
        code: '@Entity\npublic class User {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n  private String name;\n  private String email;\n  // Getters e Setters\n}',
      },
      {
        id: 'spring-5',
        title: 'Criar um Repositório JPA',
        description: 'Definir um repositório para operações CRUD',
        language: 'java',
        code: 'public interface UserRepository extends JpaRepository<User, Long> {\n  List<User> findByName(String name);\n}',
      },
      {
        id: 'spring-6',
        title: 'Configurar Segurança com Spring Security',
        description: 'Proteger endpoints com autenticação básica',
        language: 'java',
        code: '@Configuration\n@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n  @Override\n  protected void configure(HttpSecurity http) throws Exception {\n    http\n      .authorizeRequests()\n      .anyRequest().authenticated()\n      .and()\n      .httpBasic();\n  }\n}',
      },
      {
        id: 'spring-7',
        title: 'Criar um Serviço REST Completo',
        description: 'Exemplo de um CRUD completo com Spring Boot',
        language: 'java',
        code: '@RestController\n@RequestMapping("/users")\npublic class UserController {\n  @Autowired\n  private UserRepository userRepository;\n\n  @GetMapping\n  public List<User> getAllUsers() {\n    return userRepository.findAll();\n  }\n\n  @PostMapping\n  public User createUser(@RequestBody User user) {\n    return userRepository.save(user);\n  }\n\n  @GetMapping("/{id}")\n  public User getUserById(@PathVariable Long id) {\n    return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));\n  }\n\n  @PutMapping("/{id}")\n  public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {\n    User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));\n    user.setName(userDetails.getName());\n    user.setEmail(userDetails.getEmail());\n    return userRepository.save(user);\n  }\n\n  @DeleteMapping("/{id}")\n  public void deleteUser(@PathVariable Long id) {\n    userRepository.deleteById(id);\n  }\n}',
      },
      {
        id: 'spring-8',
        title: 'Configurar Logging',
        description: 'Configurar logs personalizados no Spring Boot',
        language: 'properties',
        code: '# application.properties\nlogging.level.org.springframework=INFO\nlogging.level.com.example=DEBUG\nlogging.file.name=app.log\nlogging.file.path=/var/logs',
      },
    ],
  },
  {
    id: 'android-studio',
    name: 'Android Studio',
    icon: <Terminal size={24} className="text-green-500" />,
    description:
      'Ambiente de desenvolvimento integrado (IDE) para aplicativos Android',
    documentation: 'https://developer.android.com/studio/intro',
    tutorials: [
      {
        title: 'Android Studio Docs',
        url: 'https://developer.android.com/studio/intro',
      },
      {
        title: 'Android Tutorial',
        url: 'https://www.tutorialspoint.com/android/index.htm',
      },
    ],
    snippets: [
      {
        id: 'android-1',
        title: 'Criar Projeto',
        description: 'Criar um novo projeto no Android Studio',
        language: 'bash',
        code: '# Abrir Android Studio e seguir o assistente de novo projeto',
      },
      {
        id: 'android-2',
        title: 'Activity Básica',
        description: 'Criar uma Activity básica',
        language: 'java',
        code: 'package com.example.myapp;\n\nimport android.os.Bundle;\nimport androidx.appcompat.app.AppCompatActivity;\n\npublic class MainActivity extends AppCompatActivity {\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.activity_main);\n  }\n}',
      },
      {
        id: 'android-3',
        title: 'Layout XML',
        description: 'Criar um layout básico em XML',
        language: 'xml',
        code: '<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"\n  android:layout_width="match_parent"\n  android:layout_height="match_parent"\n  android:orientation="vertical">\n\n  <TextView\n    android:id="@+id/textView"\n    android:layout_width="wrap_content"\n    android:layout_height="wrap_content"\n    android:text="Hello, World!" />\n\n</LinearLayout>',
      },
      {
        id: 'android-4',
        title: 'Intent Explícita',
        description: 'Usar uma Intent explícita para iniciar uma nova Activity',
        language: 'java',
        code: 'Intent intent = new Intent(this, SecondActivity.class);\nstartActivity(intent);',
      },
      {
        id: 'android-5',
        title: 'RecyclerView',
        description:
          'Configurar um RecyclerView com um LayoutManager e Adapter',
        language: 'java',
        code: 'RecyclerView recyclerView = findViewById(R.id.recyclerView);\nrecyclerView.setLayoutManager(new LinearLayoutManager(this));\nrecyclerView.setAdapter(new MyAdapter(myDataset));',
      },
      {
        id: 'android-6',
        title: 'Menu de Opções',
        description: 'Criar um menu de opções para uma Activity',
        language: 'java',
        code: 'public boolean onCreateOptionsMenu(Menu menu) {\n  MenuInflater inflater = getMenuInflater();\n  inflater.inflate(R.menu.options_menu, menu);\n  return true;\n}',
      },
      {
        id: 'android-7',
        title: 'SharedPreferences',
        description: 'Salvar e recuperar dados usando SharedPreferences',
        language: 'java',
        code: 'SharedPreferences sharedPref = getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);\nSharedPreferences.Editor editor = sharedPref.edit();\neditor.putString("key", "value");\neditor.apply();\n\nString value = sharedPref.getString("key", "default");',
      },
      {
        id: 'android-8',
        title: 'Fragmento',
        description: 'Criar e adicionar um Fragmento a uma Activity',
        language: 'java',
        code: 'FragmentManager fragmentManager = getSupportFragmentManager();\nFragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();\nMyFragment fragment = new MyFragment();\nfragmentTransaction.add(R.id.fragment_container, fragment);\nfragmentTransaction.commit();',
      },
      {
        id: 'android-9',
        title: 'Permissões em Tempo de Execução',
        description: 'Solicitar permissões em tempo de execução',
        language: 'java',
        code: 'if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {\n  ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, 101);\n}',
      },
      {
        id: 'android-10',
        title: 'Dialog',
        description: 'Exibir um diálogo de alerta',
        language: 'java',
        code: 'new AlertDialog.Builder(this)\n  .setTitle("Alerta")\n  .setMessage("Mensagem de alerta")\n  .setPositiveButton("OK", null)\n  .show();',
      },
      {
        id: 'android-11',
        title: 'Executar Código Assíncrono',
        description: 'Usar AsyncTask para tarefas em segundo plano',
        language: 'java',
        code: 'private class MyTask extends AsyncTask<Void, Void, String> {\n  @Override\n  protected String doInBackground(Void... voids) {\n    return "Tarefa concluída";\n  }\n\n  @Override\n  protected void onPostExecute(String result) {\n    Toast.makeText(getApplicationContext(), result, Toast.LENGTH_SHORT).show();\n  }\n}\n\nnew MyTask().execute();',
      },
      {
        id: 'android-12',
        title: 'ConstraintLayout',
        description: 'Usar ConstraintLayout para posicionar elementos',
        language: 'xml',
        code: '<androidx.constraintlayout.widget.ConstraintLayout\n  xmlns:android="http://schemas.android.com/apk/res/android"\n  xmlns:app="http://schemas.android.com/apk/res-auto"\n  android:layout_width="match_parent"\n  android:layout_height="match_parent">\n\n  <TextView\n    android:id="@+id/textView"\n    android:layout_width="wrap_content"\n    android:layout_height="wrap_content"\n    android:text="Hello!"\n    app:layout_constraintTop_toTopOf="parent"\n    app:layout_constraintStart_toStartOf="parent" />\n\n</androidx.constraintlayout.widget.ConstraintLayout>',
      },
      {
        id: 'android-13',
        title: 'Notificação',
        description: 'Criar e exibir uma notificação',
        language: 'java',
        code: 'NotificationCompat.Builder builder = new NotificationCompat.Builder(this, "channelId")\n  .setSmallIcon(R.drawable.ic_notification)\n  .setContentTitle("Título")\n  .setContentText("Mensagem de notificação")\n  .setPriority(NotificationCompat.PRIORITY_DEFAULT);\n\nNotificationManagerCompat manager = NotificationManagerCompat.from(this);\nmanager.notify(1, builder.build());',
      },
      {
        id: 'android-14',
        title: 'Intents Implícitas',
        description: 'Abrir um navegador com uma Intent implícita',
        language: 'java',
        code: 'Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.example.com"));\nstartActivity(intent);',
      },
      {
        id: 'android-15',
        title: 'Executar Serviço',
        description: 'Iniciar um serviço em segundo plano',
        language: 'java',
        code: 'Intent serviceIntent = new Intent(this, MyService.class);\nstartService(serviceIntent);',
      },
      {
        id: 'android-16',
        title: 'Snackbar',
        description: 'Exibir uma mensagem Snackbar',
        language: 'java',
        code: 'Snackbar.make(findViewById(android.R.id.content), "Mensagem do Snackbar", Snackbar.LENGTH_SHORT).show();',
      },
      {
        id: 'android-17',
        title: 'Camera API',
        description: 'Abrir a câmera do dispositivo',
        language: 'java',
        code: 'Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);\nstartActivityForResult(cameraIntent, 101);',
      },
      {
        id: 'android-18',
        title: 'Ler Dados de API',
        description: 'Fazer requisição HTTP com Retrofit',
        language: 'java',
        code: 'Retrofit retrofit = new Retrofit.Builder()\n  .baseUrl("https://api.example.com/")\n  .addConverterFactory(GsonConverterFactory.create())\n  .build();\n\nApiService service = retrofit.create(ApiService.class);\nCall<Data> call = service.getData();\ncall.enqueue(new Callback<Data>() {\n  @Override\n  public void onResponse(Call<Data> call, Response<Data> response) {\n    // Processar resposta\n  }\n\n  @Override\n  public void onFailure(Call<Data> call, Throwable t) {\n    // Lidar com erro\n  }\n});',
      },
      {
        id: 'android-19',
        title: 'WorkManager',
        description: 'Agendar tarefas com WorkManager',
        language: 'java',
        code: 'WorkRequest workRequest = new OneTimeWorkRequest.Builder(MyWorker.class).build();\nWorkManager.getInstance(this).enqueue(workRequest);',
      },
      {
        id: 'android-20',
        title: 'Room Database',
        description: 'Configurar e usar Room para armazenamento local',
        language: 'java',
        code: '@Entity\npublic class User {\n  @PrimaryKey\n  public int id;\n\n  public String name;\n}\n\n@Dao\npublic interface UserDao {\n  @Insert\n  void insert(User user);\n\n  @Query("SELECT * FROM User")\n  List<User> getAll();\n}\n\n@Database(entities = {User.class}, version = 1)\npublic abstract class AppDatabase extends RoomDatabase {\n  public abstract UserDao userDao();\n}\n',
      },
    ],
  },
  {
    id: 'virus',
    name: 'Vírus',
    icon: <Terminal size={24} className="text-red-500" />,
    description: 'Códigos maliciosos e técnicas de prevenção',
    documentation: 'https://www.kaspersky.com/resource-center/threats',
    tutorials: [
      {
        title: 'O que é um vírus?',
        url: 'https://www.kaspersky.com/resource-center/definitions/what-is-a-computer-virus',
      },
      {
        title: 'Prevenção de vírus',
        url: 'https://www.kaspersky.com/resource-center/preemptive-safety',
      },
    ],
    snippets: [
      {
        id: 'virus-1',
        title: 'Exemplo de Código Malicioso',
        description:
          'Exemplo básico de um código malicioso (apenas para estudo)',
        language: 'python',
        code: '# Exemplo de código malicioso (não executar)\nimport os\nos.system("rm -rf /")',
      },
      {
        id: 'virus-2',
        title: 'Proteção Básica',
        description: 'Dicas básicas para proteger seu sistema',
        language: 'markdown',
        code: '1. Mantenha seu sistema operacional e softwares atualizados.\n2. Use um antivírus confiável.\n3. Não abra anexos de e-mails desconhecidos.\n4. Evite clicar em links suspeitos.\n5. Faça backups regulares dos seus dados.',
      },
      {
        id: 'virus-3',
        title: 'Detecção de Vírus',
        description: 'Como detectar atividades suspeitas',
        language: 'markdown',
        code: '- Verifique processos desconhecidos no gerenciador de tarefas.\n- Monitore o uso anormal de CPU ou memória.\n- Use ferramentas de varredura de malware.\n- Fique atento a pop-ups e redirecionamentos inesperados.',
      },
      {
        id: 'virus-4',
        title: 'Phishing',
        description: 'Como se proteger contra ataques de phishing',
        language: 'markdown',
        code: '- Desconfie de e-mails e mensagens que pedem informações pessoais.\n- Verifique a URL do site antes de inserir dados sensíveis.\n- Use autenticação de dois fatores sempre que possível.\n- Não clique em links de remetentes desconhecidos.',
      },
      {
        id: 'virus-5',
        title: 'Firewall',
        description: 'Configurar e usar um firewall',
        language: 'markdown',
        code: '1. Ative o firewall do sistema operacional.\n2. Configure regras para permitir ou bloquear tráfego específico.\n3. Monitore os logs do firewall para detectar atividades suspeitas.\n4. Use firewalls de hardware para proteção adicional em redes grandes.',
      },
      {
        id: 'virus-6',
        title: 'VPN',
        description: 'Usar uma VPN para proteger sua conexão',
        language: 'markdown',
        code: '- Escolha um provedor de VPN confiável.\n- Ative a VPN sempre que usar redes Wi-Fi públicas.\n- Verifique se a VPN usa criptografia forte.\n- Mantenha o software da VPN atualizado.',
      },
      {
        id: 'virus-7',
        title: 'Ataques de Engenharia Social',
        description: 'Identificar e evitar ataques de engenharia social',
        language: 'markdown',
        code: '- Não revele informações sensíveis a desconhecidos.\n- Desconfie de pedidos urgentes de ajuda ou dinheiro.\n- Verifique a identidade da pessoa antes de fornecer informações.\n- Treine funcionários para reconhecer e evitar esses ataques.',
      },
      {
        id: 'virus-8',
        title: 'Atualizações de Software',
        description: 'A importância de manter software atualizado',
        language: 'markdown',
        code: '1. Ative atualizações automáticas sempre que possível.\n2. Verifique regularmente por atualizações de software.\n3. Mantenha não apenas o sistema operacional, mas todos os aplicativos atualizados.\n4. Remova software desatualizado e não utilizado.',
      },
      {
        id: 'security-9',
        title: 'Senhas Fortes',
        description: 'Criar e gerenciar senhas seguras',
        language: 'markdown',
        code: '- Use senhas longas e complexas com letras maiúsculas, minúsculas, números e caracteres especiais.\n- Evite usar informações pessoais como parte da senha.\n- Utilize um gerenciador de senhas para armazenar e organizar credenciais com segurança.\n- Ative autenticação multifator (MFA) sempre que possível.',
      },
      {
        id: 'security-10',
        title: 'Backup de Dados',
        description: 'A importância de backups regulares',
        language: 'markdown',
        code: '- Realize backups regulares de arquivos importantes em dispositivos externos ou serviços de nuvem.\n- Certifique-se de que os backups estão protegidos por senha ou criptografia.\n- Teste periodicamente a integridade dos backups para garantir sua funcionalidade.\n- Mantenha pelo menos duas cópias dos backups em locais diferentes.',
      },
      {
        id: 'security-11',
        title: 'Configuração de Autenticação Multifator',
        description: 'Habilitar MFA para proteger contas',
        language: 'markdown',
        code: '1. Ative MFA em todas as contas importantes como e-mail, bancos e redes sociais.\n2. Escolha métodos confiáveis como aplicativos autenticadores (Google Authenticator, Authy).\n3. Evite métodos de verificação apenas via SMS, sempre que possível.\n4. Armazene os códigos de recuperação em local seguro.',
      },
      {
        id: 'security-12',
        title: 'Proteção Contra Ransomware',
        description: 'Prevenir ataques de ransomware',
        language: 'markdown',
        code: '- Evite abrir anexos ou links de e-mails desconhecidos.\n- Utilize soluções antivírus e antimalware atualizadas.\n- Realize backups regulares e mantenha-os offline ou fora da rede principal.\n- Desabilite macros em documentos recebidos por e-mail, especialmente de remetentes desconhecidos.',
      },
      {
        id: 'security-13',
        title: 'Educação em Cibersegurança',
        description: 'Educar funcionários sobre segurança',
        language: 'markdown',
        code: '- Realize treinamentos regulares sobre como identificar phishing e malware.\n- Promova a conscientização sobre a importância de senhas fortes e autenticação multifator.\n- Reforce políticas de segurança, como evitar o uso de dispositivos pessoais para fins corporativos.\n- Incentive a notificação imediata de incidentes de segurança.',
      },
      {
        id: 'security-14',
        title: 'Atualizações de Firmware',
        description: 'Manter dispositivos atualizados',
        language: 'markdown',
        code: '- Atualize regularmente o firmware de roteadores, modems e dispositivos IoT.\n- Altere as senhas padrão de dispositivos para senhas seguras e exclusivas.\n- Desative funções desnecessárias para reduzir a superfície de ataque.\n- Use firewalls ou VLANs para isolar dispositivos IoT em redes separadas.',
      },
      {
        id: 'security-15',
        title: 'Criptografia de Dados',
        description: 'Proteger informações com criptografia',
        language: 'markdown',
        code: '- Habilite a criptografia no dispositivo, especialmente em dispositivos móveis.\n- Use protocolos seguros, como HTTPS e TLS, para comunicações online.\n- Proteja arquivos confidenciais com ferramentas de criptografia como VeraCrypt.\n- Certifique-se de que as senhas de criptografia sejam complexas e armazenadas com segurança.',
      },
      {
        id: 'security-16',
        title: 'Monitoramento de Rede',
        description: 'Monitorar atividades de rede para detectar ameaças',
        language: 'markdown',
        code: '- Utilize ferramentas de monitoramento como Wireshark ou Nmap para analisar tráfego.\n- Configure alertas para atividades incomuns, como acessos fora do horário normal.\n- Monitore logs de firewall e pontos de acesso para detecção de comportamentos anômalos.\n- Segmente a rede para limitar o impacto de um possível ataque.',
      },
      {
        id: 'security-17',
        title: 'Proteção Contra Keyloggers',
        description: 'Prevenir coleta de dados por keyloggers',
        language: 'markdown',
        code: '- Use teclados virtuais para inserir informações sensíveis, como senhas.\n- Instale software antimalware para detectar e remover keyloggers.\n- Evite baixar arquivos ou software de fontes não confiáveis.\n- Revise permissões de aplicativos que acessam dados do teclado.',
      },
      {
        id: 'security-18',
        title: 'Testes de Penetração',
        description: 'Identificar vulnerabilidades antes que sejam exploradas',
        language: 'markdown',
        code: '- Contrate especialistas em segurança para realizar testes de penetração regulares.\n- Utilize ferramentas como Metasploit ou OWASP ZAP para simular ataques.\n- Corrija vulnerabilidades identificadas imediatamente.\n- Documente as ações corretivas e implemente políticas de segurança para evitar recorrências.',
      },
      {
        id: 'security-19',
        title: 'Gerenciamento de Acessos',
        description: 'Controlar acessos a sistemas e informações',
        language: 'markdown',
        code: '- Implemente o princípio do menor privilégio, dando aos usuários apenas o acesso necessário.\n- Use logs de auditoria para monitorar acessos e identificar atividades suspeitas.\n- Revise regularmente permissões de acesso e remova contas inativas.\n- Utilize autenticação baseada em papéis para acesso granular.',
      },
      {
        id: 'security-20',
        title: 'Proteção de E-mail',
        description: 'Garantir a segurança das comunicações por e-mail',
        language: 'markdown',
        code: '- Habilite filtros de spam avançados para bloquear mensagens maliciosas.\n- Configure SPF, DKIM e DMARC para proteger domínios contra spoofing.\n- Treine os usuários para identificar e evitar ataques de phishing.\n- Evite enviar informações confidenciais sem criptografia.',
      },
    ],
  },
  {
    id: 'windows-tips',
    name: 'Windows Atalhos e Dicas',
    icon: <AppWindow size={24} className="text-blue-500" />,
    description:
      'Descubra atalhos úteis e dicas para melhorar sua experiência no Windows',
    documentation: 'https://support.microsoft.com/en-us/windows',
    tutorials: [
      {
        title: 'Atalhos de teclado do Windows',
        url: 'https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows',
      },
      {
        title: 'Personalizando o Windows',
        url: 'https://support.microsoft.com/en-us/help/12445/windows-keyboard-shortcuts',
      },
    ],
    snippets: [
      {
        id: 'windows-1',
        title: 'Atalhos Essenciais',
        description: 'Atalhos rápidos para navegação eficiente',
        language: 'markdown',
        code: '## Atalhos Úteis\n- **Win + D**: Mostrar ou ocultar a área de trabalho.\n- **Win + L**: Bloquear a tela instantaneamente.\n- **Ctrl + Shift + Esc**: Abrir o Gerenciador de Tarefas rapidamente.\n- **Win + Tab**: Abrir o Visão de Tarefas para alternar entre desktops virtuais.\n- **Alt + Enter**: Abrir as propriedades do item selecionado no Explorer.',
      },
      {
        id: 'windows-2',
        title: 'Dicas para Melhorar o Desempenho',
        description: 'Dicas rápidas para otimizar seu computador',
        language: 'markdown',
        code: '1. Desative programas desnecessários na inicialização (Gerenciador de Tarefas > Inicializar).\n2. Ative o Modo de Economia de Energia para laptops (Configurações > Sistema > Energia).\n3. Limpe arquivos temporários usando o **Limpeza de Disco**.\n4. Atualize drivers regularmente, especialmente para a GPU.\n5. Configure a opção de **Desempenho Máximo** no Gerenciador de Energia.',
      },
      {
        id: 'windows-3',
        title: 'Explorador de Arquivos',
        description: 'Atalhos para o Explorador de Arquivos',
        language: 'markdown',
        code: '- **Ctrl + N**: Abrir uma nova janela do Explorador.\n- **Alt + Up Arrow**: Subir um nível na hierarquia de pastas.\n- **Ctrl + Shift + N**: Criar uma nova pasta rapidamente.\n- **Ctrl + W**: Fechar a janela atual do Explorador.',
      },
      {
        id: 'windows-4',
        title: 'Segurança no Windows',
        description: 'Configurações de segurança essenciais',
        language: 'markdown',
        code: '- Ative o Windows Defender para proteção em tempo real.\n- Use o Windows Update para aplicar as atualizações de segurança mais recentes.\n- Configure um PIN ou autenticação biométrica no Windows Hello.\n- Monitore permissões de aplicativos nas Configurações > Privacidade.',
      },
      {
        id: 'windows-5',
        title: 'Personalização do Windows',
        description: 'Dicas para personalizar o ambiente de trabalho',
        language: 'markdown',
        code: '- Altere o tema ou cor em Configurações > Personalização > Cores.\n- Organize ícones da área de trabalho pressionando **Ctrl** enquanto arrasta.\n- Use a barra de busca do Windows para localizar aplicativos rapidamente.\n- Habilite **Slideshow** para alterar automaticamente o papel de parede em intervalos definidos.',
      },
      {
        id: 'windows-6',
        title: 'Alternar Janelas',
        description:
          'Use Alt + Tab para alternar entre janelas abertas rapidamente',
        language: 'markdown',
        code: '- **Alt + Tab**: Navegue entre janelas abertas.\n- **Alt + Shift + Tab**: Alterne entre janelas na ordem inversa.',
      },
      {
        id: 'windows-7',
        title: 'Fixar Apps na Barra de Tarefas',
        description: 'Fixe aplicativos na barra de tarefas para acesso rápido',
        language: 'markdown',
        code: '- Clique com o botão direito no ícone do aplicativo aberto.\n- Selecione **Fixar na Barra de Tarefas**.',
      },
      {
        id: 'windows-8',
        title: 'Organização Automática de Janelas',
        description: 'Organize janelas na tela com atalhos de teclado',
        language: 'markdown',
        code: '- **Win + Setas**: Redimensione e posicione janelas.\n- **Win + Left/Right**: Alinhe janelas à esquerda ou direita.',
      },
      {
        id: 'windows-9',
        title: 'Gravação de Tela',
        description: 'Use a barra de jogos para gravar a tela',
        language: 'markdown',
        code: '- Abra o **Game Bar** pressionando **Win + G**.\n- Clique no botão de gravação ou pressione **Win + Alt + R**.',
      },
      {
        id: 'windows-10',
        title: 'Modo Tablet',
        description:
          'Habilite o Modo Tablet para uma experiência de toque otimizada',
        language: 'markdown',
        code: '- No **Centro de Ações** (Win + A), clique em **Modo Tablet**.',
      },
      {
        id: 'windows-11',
        title: 'Modo de Jogo',
        description: 'Melhore o desempenho em jogos ativando o Modo de Jogo',
        language: 'markdown',
        code: '- Vá para **Configurações > Jogos > Modo de Jogo**.\n- Ative a opção para priorizar recursos.',
      },
      {
        id: 'windows-12',
        title: 'Alternar Entre Monitores',
        description: 'Configure rapidamente o uso de múltiplos monitores',
        language: 'markdown',
        code: '- Use **Win + P** para alternar entre duplicar, estender ou exibir em apenas um monitor.',
      },
      {
        id: 'windows-13',
        title: 'Zoom de Tela',
        description: 'Amplie ou reduza áreas específicas da tela',
        language: 'markdown',
        code: '- Pressione **Win + +** para aumentar o zoom.\n- Use **Win + -** para reduzir o zoom.',
      },
      {
        id: 'windows-14',
        title: 'Busca Avançada',
        description: 'Encontre arquivos rapidamente com filtros no Explorador',
        language: 'markdown',
        code: '- Use **ext:.pdf** para encontrar arquivos PDF.\n- Experimente **data:ontem** para listar arquivos alterados ontem.',
      },
      {
        id: 'windows-15',
        title: 'Desktop Virtual',
        description: 'Crie e gerencie desktops virtuais',
        language: 'markdown',
        code: '- Pressione **Win + Ctrl + D** para criar um novo desktop virtual.\n- Use **Win + Ctrl + Left/Right** para navegar entre desktops.',
      },
      {
        id: 'windows-16',
        title: 'Restaurar Sistema',
        description:
          'Configure pontos de restauração para reverter alterações no sistema',
        language: 'markdown',
        code: '- Vá para **Configurações > Sistema > Informações do Sistema**.\n- Configure e habilite **Restauração do Sistema**.',
      },
      {
        id: 'windows-17',
        title: 'Modo Offline no OneDrive',
        description: 'Acesse arquivos do OneDrive sem conexão com a internet',
        language: 'markdown',
        code: '- Clique com o botão direito no arquivo/pasta do OneDrive.\n- Selecione **Sempre manter neste dispositivo**.',
      },
      {
        id: 'windows-18',
        title: 'Gerenciamento de Disco',
        description: 'Otimize o armazenamento usando o Gerenciamento de Disco',
        language: 'markdown',
        code: '- Acesse **Win + X > Gerenciamento de Disco**.\n- Crie, exclua ou formate partições para otimizar o armazenamento.',
      },
      {
        id: 'windows-19',
        title: 'Recorte Avançado de Tela',
        description: 'Capture áreas específicas com o atalho de recorte',
        language: 'markdown',
        code: '- Pressione **Win + Shift + S** para abrir a ferramenta de recorte.\n- Selecione a área desejada para capturar.',
      },
      {
        id: 'windows-20',
        title: 'Configuração de Energia',
        description:
          'Configure o plano de energia para equilibrar desempenho e economia',
        language: 'markdown',
        code: '- Acesse **Configurações > Sistema > Energia e suspensão**.\n- Ajuste o plano para **Desempenho Máximo** ou **Economia de Energia**.',
      },
    ],
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: <Terminal size={24} className="text-green-500" />,
    description:
      'Sistema operacional de código aberto para desenvolvimento e servidores',
    documentation: 'https://www.kernel.org/',
    tutorials: [
      {
        title: 'Linux Documentation',
        url: 'https://www.kernel.org/doc/html/latest/',
      },
      { title: 'Linux Tutorial', url: 'https://linuxjourney.com/' },
    ],
    snippets: [
      {
        id: 'linux-1',
        title: 'Instalar Ubuntu',
        description: 'Passo a passo para instalar o Ubuntu',
        language: 'markdown',
        code: '1. Baixe a ISO do Ubuntu: https://ubuntu.com/download.\n2. Crie um pendrive bootável com o Rufus (Windows) ou Etcher (Linux/macOS).\n3. Inicie o computador pelo pendrive.\n4. Siga as instruções do instalador para particionar o disco e instalar o Ubuntu.\n5. Reinicie o computador e remova o pendrive.',
      },
      {
        id: 'linux-2',
        title: 'Instalar Fedora',
        description: 'Passo a passo para instalar o Fedora',
        language: 'markdown',
        code: '1. Baixe a ISO do Fedora: https://getfedora.org/.\n2. Crie um pendrive bootável com o Rufus (Windows) ou Etcher (Linux/macOS).\n3. Inicie o computador pelo pendrive.\n4. Siga as instruções do instalador para particionar o disco e instalar o Fedora.\n5. Reinicie o computador e remova o pendrive.',
      },
      {
        id: 'linux-3',
        title: 'Atualizar o Sistema',
        description: 'Atualizar pacotes no Ubuntu/Debian',
        language: 'bash',
        code: '# Atualizar lista de pacotes\nsudo apt update\n\n# Atualizar pacotes instalados\nsudo apt upgrade\n\n# Atualizar o sistema (incluindo pacotes essenciais)\nsudo apt full-upgrade',
      },
      {
        id: 'linux-4',
        title: 'Instalar Pacotes',
        description: 'Instalar pacotes no Ubuntu/Debian',
        language: 'bash',
        code: '# Instalar um pacote\nsudo apt install nome-do-pacote\n\n# Instalar múltiplos pacotes\nsudo apt install pacote1 pacote2 pacote3',
      },
      {
        id: 'linux-5',
        title: 'Remover Pacotes',
        description: 'Remover pacotes no Ubuntu/Debian',
        language: 'bash',
        code: '# Remover um pacote\nsudo apt remove nome-do-pacote\n\n# Remover pacote e arquivos de configuração\nsudo apt purge nome-do-pacote\n\n# Remover pacotes não utilizados\nsudo apt autoremove',
      },
      {
        id: 'linux-6',
        title: 'Gerenciar Serviços',
        description: 'Iniciar, parar e reiniciar serviços',
        language: 'bash',
        code: '# Verificar status de um serviço\nsudo systemctl status nome-do-serviço\n\n# Iniciar um serviço\nsudo systemctl start nome-do-serviço\n\n# Parar um serviço\nsudo systemctl stop nome-do-serviço\n\n# Reiniciar um serviço\nsudo systemctl restart nome-do-serviço',
      },
      {
        id: 'linux-7',
        title: 'Verificar Espaço em Disco',
        description: 'Verificar uso de espaço em disco',
        language: 'bash',
        code: '# Verificar espaço em disco\ndf -h\n\n# Verificar uso de espaço por pasta\ndu -sh /caminho/da/pasta',
      },
      {
        id: 'linux-8',
        title: 'Criar um Usuário',
        description: 'Criar um novo usuário no Linux',
        language: 'bash',
        code: '# Criar um usuário\nsudo adduser nome-do-usuario\n\n# Adicionar usuário ao grupo sudo\nsudo usermod -aG sudo nome-do-usuario',
      },
      {
        id: 'linux-9',
        title: 'Alterar Permissões de Arquivos',
        description: 'Alterar permissões de arquivos e pastas',
        language: 'bash',
        code: '# Dar permissão de execução\nchmod +x arquivo.sh\n\n# Alterar permissões (leitura, escrita, execução)\nchmod 755 arquivo.sh\n\n# Alterar dono de um arquivo\nsudo chown usuario:grupo arquivo.txt',
      },
      {
        id: 'linux-10',
        title: 'Criar um Script Bash',
        description: 'Exemplo de um script Bash simples',
        language: 'bash',
        code: '#!/bin/bash\n# Meu primeiro script\necho "Olá, Mundo!"\n\n# Tornar o script executável\nchmod +x script.sh\n\n# Executar o script\n./script.sh',
      },
      {
        id: 'linux-11',
        title: 'Verificar Processos em Execução',
        description: 'Listar e gerenciar processos',
        language: 'bash',
        code: '# Listar todos os processos\nps aux\n\n# Matar um processo\nkill PID\n\n# Matar um processo pelo nome\npkill nome-do-processo',
      },
      {
        id: 'linux-12',
        title: 'Configurar SSH',
        description: 'Configurar e conectar via SSH',
        language: 'bash',
        code: '# Instalar o servidor SSH\nsudo apt install openssh-server\n\n# Conectar a um servidor remoto\nssh usuario@ip-do-servidor\n\n# Gerar chaves SSH\nssh-keygen -t rsa -b 4096',
      },
      {
        id: 'linux-13',
        title: 'Monitorar Uso de Memória',
        description: 'Verificar uso de memória e CPU',
        language: 'bash',
        code: '# Verificar uso de memória\nfree -h\n\n# Monitorar processos em tempo real\ntop\n\n# Alternativa ao top\nhtop',
      },
      {
        id: 'linux-14',
        title: 'Compactar e Descompactar Arquivos',
        description: 'Comandos para compactar e descompactar',
        language: 'bash',
        code: '# Compactar arquivos\ntar -czvf arquivo.tar.gz pasta/\n\n# Descompactar arquivos\ntar -xzvf arquivo.tar.gz\n\n# Compactar com zip\nzip -r arquivo.zip pasta/\n\n# Descompactar zip\nunzip arquivo.zip',
      },
      {
        id: 'linux-15',
        title: 'Configurar um Firewall',
        description: 'Usar o UFW para gerenciar o firewall',
        language: 'bash',
        code: '# Instalar o UFW\nsudo apt install ufw\n\n# Habilitar o firewall\nsudo ufw enable\n\n# Permitir uma porta\nsudo ufw allow 22\n\n# Verificar status\nsudo ufw status',
      },
      {
        id: 'linux-16',
        title: 'Criar um Alias',
        description: 'Criar atalhos para comandos',
        language: 'bash',
        code: '# Adicionar um alias ao .bashrc\necho "alias ll=\'ls -la\'" >> ~/.bashrc\n\n# Recarregar o .bashrc\nsource ~/.bashrc',
      },
      {
        id: 'linux-17',
        title: 'Verificar Logs do Sistema',
        description: 'Acessar logs do sistema',
        language: 'bash',
        code: '# Ver logs do sistema\nsudo journalctl\n\n# Ver logs em tempo real\nsudo journalctl -f\n\n# Ver logs de um serviço específico\nsudo journalctl -u nome-do-serviço',
      },
      {
        id: 'linux-18',
        title: 'Configurar Variáveis de Ambiente',
        description: 'Adicionar variáveis de ambiente',
        language: 'bash',
        code: '# Adicionar variável ao .bashrc\necho "export MINHA_VARIAVEL=valor" >> ~/.bashrc\n\n# Recarregar o .bashrc\nsource ~/.bashrc\n\n# Verificar variável\necho $MINHA_VARIAVEL',
      },
      {
        id: 'linux-19',
        title: 'Criar um Servidor Web Simples',
        description: 'Servir uma pasta com Python',
        language: 'bash',
        code: '# Navegar até a pasta\ncd /caminho/da/pasta\n\n# Iniciar servidor web\npython3 -m http.server 8000\n\n# Acessar no navegador: http://localhost:8000',
      },
      {
        id: 'linux-20',
        title: 'Cron Jobs',
        description: 'Agendar tarefas com cron',
        language: 'bash',
        code: '# Abrir o crontab para edição\ncrontab -e\n\n# Exemplo: Executar um script todos os dias às 6h\n0 6 * * * /caminho/do/script.sh\n\n# Listar cron jobs\ncrontab -l',
      },
    ],
  },
  {
    id: 'vscode-extensions',
    name: 'Extensões do VS Code',
    icon: <FileCode size={24} className="text-blue-500" />,
    description:
      'Extensões essenciais para aumentar a produtividade no Visual Studio Code',
    documentation:
      'https://code.visualstudio.com/docs/editor/extension-marketplace',
    tutorials: [
      {
        title: 'VS Code Extensions Guide',
        url: 'https://code.visualstudio.com/docs/editor/extension-marketplace',
      },
      {
        title: 'Top VS Code Extensions',
        url: 'https://www.sitepoint.com/vs-code-extensions/',
      },
    ],
    snippets: [
      {
        id: 'vscode-1',
        title: 'Instalar Extensões',
        description: 'Como instalar extensões no VS Code',
        language: 'markdown',
        code: '1. Abra o VS Code.\n2. Clique no ícone de Extensões na barra lateral (ou pressione `Ctrl+Shift+X`).\n3. Digite o nome da extensão na barra de pesquisa.\n4. Clique em "Instalar" ao lado da extensão desejada.',
      },
      {
        id: 'vscode-2',
        title: 'Prettier - Formatador de Código',
        description: 'Formatar código automaticamente com Prettier',
        language: 'markdown',
        code: '1. Instale a extensão "Prettier - Code formatter".\n2. Abra as configurações do VS Code (`Ctrl+,`).\n3. Pesquise por "Format On Save" e marque a opção.\n4. No seu projeto, crie um arquivo `.prettierrc` para configurar regras de formatação.\n5. Salve o arquivo e veja o código ser formatado automaticamente.',
      },
      {
        id: 'vscode-3',
        title: 'ESLint - Linter para JavaScript',
        description: 'Identificar e corrigir problemas no código JavaScript',
        language: 'markdown',
        code: '1. Instale a extensão "ESLint".\n2. No terminal, instale o ESLint no seu projeto: `npm install eslint --save-dev`.\n3. Inicialize o ESLint: `npx eslint --init`.\n4. Siga as instruções para configurar o ESLint.\n5. O VS Code destacará erros e oferecerá correções automáticas.',
      },
      {
        id: 'vscode-4',
        title: 'Live Server',
        description: 'Servidor local com recarregamento automático',
        language: 'markdown',
        code: '1. Instale a extensão "Live Server".\n2. Clique com o botão direito em um arquivo HTML e selecione "Open with Live Server".\n3. Uma nova aba do navegador abrirá com o projeto rodando.\n4. Qualquer alteração no código será refletida automaticamente no navegador.',
      },
      {
        id: 'vscode-5',
        title: 'GitLens',
        description: 'Integração avançada com Git',
        language: 'markdown',
        code: '1. Instale a extensão "GitLens".\n2. Abra um projeto com Git inicializado.\n3. No canto inferior esquerdo, clique no ícone do GitLens para ver commits, branches e histórico.\n4. Passe o mouse sobre uma linha de código para ver quem a modificou e quando.',
      },
      {
        id: 'vscode-6',
        title: 'Bracket Pair Colorizer',
        description: 'Colorir pares de colchetes para melhorar a legibilidade',
        language: 'markdown',
        code: '1. Instale a extensão "Bracket Pair Colorizer".\n2. Abra um arquivo de código.\n3. Pares de colchetes, chaves e parênteses serão coloridos para facilitar a identificação.\n4. Personalize as cores nas configurações da extensão.',
      },
      {
        id: 'vscode-7',
        title: 'Auto Rename Tag',
        description: 'Renomear automaticamente tags HTML/XML',
        language: 'markdown',
        code: '1. Instale a extensão "Auto Rename Tag".\n2. Ao renomear uma tag HTML/XML, a tag de fechamento será renomeada automaticamente.\n3. Experimente renomear uma tag em um arquivo HTML para ver a funcionalidade em ação.',
      },
      {
        id: 'vscode-8',
        title: 'Material Icon Theme',
        description: 'Ícones temáticos para melhorar a organização de arquivos',
        language: 'markdown',
        code: '1. Instale a extensão "Material Icon Theme".\n2. Abra as configurações do VS Code (`Ctrl+,`).\n3. Pesquise por "File Icon Theme" e selecione "Material Icon Theme".\n4. Os ícones dos arquivos e pastas serão atualizados com um visual moderno.',
      },
      {
        id: 'vscode-9',
        title: 'Tailwind CSS IntelliSense',
        description: 'Sugestões e autocompletar para classes Tailwind CSS',
        language: 'markdown',
        code: '1. Instale a extensão "Tailwind CSS IntelliSense".\n2. Abra um arquivo HTML ou JavaScript com classes Tailwind.\n3. Veja as sugestões automáticas de classes enquanto digita.\n4. Hover sobre uma classe para visualizar seu estilo correspondente.',
      },
      {
        id: 'vscode-10',
        title: 'Settings Sync',
        description:
          'Sincronize suas configurações, atalhos e extensões em múltiplos dispositivos',
        language: 'markdown',
        code: '1. Instale a extensão "Settings Sync".\n2. Pressione `Ctrl+Shift+P` e procure por "Sync: Turn On".\n3. Faça login com sua conta GitHub ou Microsoft.\n4. Escolha as configurações a sincronizar, como extensões e temas.',
      },
      {
        id: 'vscode-11',
        title: 'Path Intellisense',
        description: 'Completa automaticamente caminhos de arquivos no código',
        language: 'markdown',
        code: '1. Instale a extensão "Path Intellisense".\n2. Comece a digitar um caminho de arquivo em seu código.\n3. Veja as sugestões automáticas de arquivos e pastas.',
      },
      {
        id: 'vscode-12',
        title: 'IntelliCode',
        description: 'Sugestões de código baseadas em inteligência artificial',
        language: 'markdown',
        code: '1. Instale a extensão "Visual Studio IntelliCode".\n2. Abra um projeto e digite código normalmente.\n3. Veja as sugestões de código inteligentes baseadas em padrões populares.',
      },
      {
        id: 'vscode-13',
        title: 'Code Spell Checker',
        description: 'Identifica erros ortográficos no código e comentários',
        language: 'markdown',
        code: '1. Instale a extensão "Code Spell Checker".\n2. Erros de digitação em palavras serão sublinhados.\n3. Clique com o botão direito para sugerir correções.',
      },
      {
        id: 'vscode-14',
        title: 'REST Client',
        description: 'Teste APIs diretamente no VS Code',
        language: 'markdown',
        code: '1. Instale a extensão "REST Client".\n2. Crie um arquivo com extensão `.http` ou `.rest`.\n3. Escreva sua requisição HTTP (ex.: `GET https://api.example.com`).\n4. Clique no botão "Send Request" para ver a resposta.',
      },
      {
        id: 'vscode-15',
        title: 'Docker',
        description: 'Gerencie contêineres Docker diretamente no VS Code',
        language: 'markdown',
        code: '1. Instale a extensão "Docker".\n2. Clique no ícone do Docker na barra lateral.\n3. Gerencie contêineres, imagens e volumes facilmente.',
      },
      {
        id: 'vscode-16',
        title: 'Tabnine',
        description: 'Autocomplete de código com IA',
        language: 'markdown',
        code: '1. Instale a extensão "Tabnine".\n2. Digite normalmente em qualquer linguagem.\n3. Veja sugestões avançadas de código baseadas em IA.',
      },
      {
        id: 'vscode-17',
        title: 'HTML CSS Support',
        description: 'Habilita suporte avançado para arquivos HTML e CSS',
        language: 'markdown',
        code: '1. Instale a extensão "HTML CSS Support".\n2. Em um arquivo HTML, digite classes ou IDs usados no CSS e veja as sugestões.\n3. Navegue facilmente entre HTML e CSS.',
      },
      {
        id: 'vscode-18',
        title: 'Vim',
        description: 'Permite usar comandos do Vim no VS Code',
        language: 'markdown',
        code: '1. Instale a extensão "Vim".\n2. Use o modo de edição do Vim (`i`) e de navegação (`Esc`).\n3. Personalize os comandos nas configurações da extensão.',
      },
      {
        id: 'vscode-19',
        title: 'Peacock',
        description: 'Altere a cor do editor para diferenciar projetos',
        language: 'markdown',
        code: '1. Instale a extensão "Peacock".\n2. Pressione `Ctrl+Shift+P` e procure por "Peacock: Change to a Favorite Color".\n3. Escolha uma cor para o editor.',
      },
      {
        id: 'vscode-20',
        title: 'Todo Tree',
        description: 'Organize e visualize tarefas pendentes no código',
        language: 'markdown',
        code: '1. Instale a extensão "Todo Tree".\n2. Adicione comentários como `// TODO` ou `// FIXME` no código.\n3. Visualize as tarefas pendentes no painel lateral.',
      },
    ],
  },
  {
    id: 'ux-ui',
    name: 'UX/UI',
    icon: <Palette size={24} className="text-purple-500" />,
    description:
      'Design de experiência do usuário (UX) e interface do usuário (UI) para criar produtos digitais eficientes e agradáveis',
    documentation: 'https://www.nngroup.com/articles/',
    tutorials: [
      {
        title: 'UX Design Principles',
        url: 'https://www.nngroup.com/articles/ux-design-principles/',
      },
      {
        title: 'UI Design Basics',
        url: 'https://www.interaction-design.org/literature/topics/ui-design',
      },
    ],
    snippets: [
      {
        id: 'uxui-1',
        title: 'Princípios de UX',
        description: 'Princípios básicos de UX para design centrado no usuário',
        language: 'markdown',
        code: '1. **Usabilidade**: Facilite a interação do usuário.\n2. **Acessibilidade**: Garanta que todos possam usar o produto.\n3. **Consistência**: Mantenha padrões em todo o design.\n4. **Feedback**: Forneça respostas claras às ações do usuário.\n5. **Eficiência**: Minimize o esforço do usuário para atingir objetivos.',
      },
      {
        id: 'uxui-2',
        title: 'Hierarquia Visual',
        description: 'Organize elementos para guiar o olhar do usuário',
        language: 'markdown',
        code: '- Use tamanho, cor e contraste para destacar elementos importantes.\n- Agrupe informações relacionadas.\n- Utilize espaçamento para criar clareza e organização.',
      },
      {
        id: 'uxui-3',
        title: 'Cores e Tipografia',
        description: 'Escolha de cores e fontes para uma interface eficaz',
        language: 'markdown',
        code: '- **Cores**: Use uma paleta limitada (3-5 cores principais).\n- **Contraste**: Garanta que o texto seja legível sobre o fundo.\n- **Tipografia**: Escolha fontes simples e legíveis. Use no máximo 2-3 fontes diferentes.',
      },
      {
        id: 'uxui-4',
        title: 'Design Responsivo',
        description:
          'Dicas para criar designs que funcionam em qualquer dispositivo',
        language: 'markdown',
        code: '- Use grids flexíveis.\n- Priorize o conteúdo essencial em dispositivos móveis.\n- Teste o design em diferentes tamanhos de tela.',
      },
      {
        id: 'uxui-5',
        title: 'Wireframes',
        description: 'Crie wireframes para planejar a estrutura da interface',
        language: 'markdown',
        code: '- Use ferramentas como Figma, Adobe XD ou Sketch.\n- Foque na funcionalidade, não no visual.\n- Inclua elementos como cabeçalhos, menus e áreas de conteúdo.',
      },
      {
        id: 'uxui-6',
        title: 'Prototipagem',
        description: 'Crie protótipos interativos para testar ideias',
        language: 'markdown',
        code: '- Use ferramentas como Figma, InVision ou Marvel.\n- Adicione interações como cliques e transições.\n- Teste com usuários reais para obter feedback.',
      },
      {
        id: 'uxui-7',
        title: 'Testes de Usabilidade',
        description: 'Como realizar testes de usabilidade',
        language: 'markdown',
        code: '1. Defina os objetivos do teste.\n2. Recrute participantes representativos do público-alvo.\n3. Crie tarefas para os usuários realizarem.\n4. Observe e anote problemas e feedback.\n5. Itere no design com base nos resultados.',
      },
      {
        id: 'uxui-8',
        title: 'Design de Formulários',
        description: 'Dicas para criar formulários eficientes',
        language: 'markdown',
        code: '- Mantenha os formulários curtos e diretos.\n- Use labels claros e placeholders quando necessário.\n- Agrupe campos relacionados.\n- Forneça feedback imediato para erros.',
      },
      {
        id: 'uxui-9',
        title: 'Microinterações',
        description: 'Adicione microinterações para melhorar a experiência',
        language: 'markdown',
        code: '- Use animações sutis para feedback (ex: botão clicado).\n- Mantenha as interações rápidas e intuitivas.\n- Evite excessos que possam distrair o usuário.',
      },
      {
        id: 'uxui-10',
        title: 'Design de Navegação',
        description: 'Crie sistemas de navegação intuitivos',
        language: 'markdown',
        code: '- Use menus claros e consistentes.\n- Inclua breadcrumbs para ajudar na orientação.\n- Garanta que os links sejam facilmente identificáveis.',
      },
      {
        id: 'uxui-11',
        title: 'Acessibilidade',
        description: 'Dicas para designs acessíveis',
        language: 'markdown',
        code: '- Use contraste suficiente entre texto e fundo.\n- Adicione textos alternativos a imagens.\n- Garanta que o site seja navegável apenas com teclado.\n- Teste com ferramentas como Lighthouse ou Axe.',
      },
      {
        id: 'uxui-12',
        title: 'Design de Botões',
        description: 'Melhores práticas para botões',
        language: 'markdown',
        code: '- Use tamanhos adequados (mínimo 44x44 pixels para touch).\n- Destaque botões primários com cores contrastantes.\n- Forneça feedback visual ao interagir (hover, clique).',
      },
      {
        id: 'uxui-13',
        title: 'Design de Cards',
        description: 'Crie cards para organizar informações',
        language: 'markdown',
        code: '- Use espaçamento adequado entre elementos.\n- Inclua imagens, títulos e descrições curtas.\n- Mantenha um layout consistente em todos os cards.',
      },
      {
        id: 'uxui-14',
        title: 'Design de Landing Pages',
        description: 'Dicas para criar landing pages eficazes',
        language: 'markdown',
        code: '- Tenha um call-to-action (CTA) claro e destacado.\n- Use headlines persuasivas e concisas.\n- Inclua elementos visuais atraentes, como imagens ou vídeos.\n- Mantenha o formulário de contato simples.',
      },
      {
        id: 'uxui-15',
        title: 'Ferramentas de Design',
        description: 'Ferramentas populares para UX/UI',
        language: 'markdown',
        code: '- **Figma**: Design colaborativo em tempo real.\n- **Adobe XD**: Prototipagem e design de interfaces.\n- **Sketch**: Design vetorial para interfaces.\n- **InVision**: Prototipagem e colaboração.',
      },
      {
        id: 'uxui-16',
        title: 'Design de Ícones',
        description: 'Dicas para criar ícones eficazes',
        language: 'markdown',
        code: '- Mantenha os ícones simples e reconhecíveis.\n- Use um estilo consistente em todo o projeto.\n- Garanta que os ícones sejam claros em diferentes tamanhos.',
      },
      {
        id: 'uxui-17',
        title: 'Design de Animação',
        description: 'Use animações para melhorar a experiência',
        language: 'markdown',
        code: '- Use animações sutis para transições e feedback.\n- Evite animações excessivas que possam distrair.\n- Teste a performance para garantir que não afete a usabilidade.',
      },
      {
        id: 'uxui-18',
        title: 'Design de Dark Mode',
        description: 'Dicas para criar um dark mode eficaz',
        language: 'markdown',
        code: '- Use cores escuras, mas não totalmente pretas.\n- Ajuste o contraste para garantir legibilidade.\n- Teste o design em diferentes dispositivos e ambientes.',
      },
      {
        id: 'uxui-19',
        title: 'Design de Onboarding',
        description: 'Crie uma experiência de onboarding eficiente',
        language: 'markdown',
        code: '- Explique os principais recursos do produto.\n- Use telas simples com ilustrações ou ícones.\n- Permita que o usuário pule o onboarding se desejar.',
      },
      {
        id: 'uxui-20',
        title: 'Métricas de UX',
        description: 'Métricas para avaliar a experiência do usuário',
        language: 'markdown',
        code: '- **Taxa de conversão**: Porcentagem de usuários que realizam uma ação desejada.\n- **Tempo de tarefa**: Tempo que os usuários levam para completar uma tarefa.\n- **Satisfação do usuário**: Avaliação subjetiva da experiência (ex: NPS).\n- **Taxa de retenção**: Porcentagem de usuários que retornam ao produto.',
      },
    ],
  },
];

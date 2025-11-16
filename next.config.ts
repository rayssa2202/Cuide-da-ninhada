/** @type {import('next').NextConfig} */
const nextConfig = {
  // faz o Next gerar HTML estático em ./out
  output: 'export',

  // repositório do GitHub Pages: rayssa2202/Cuide-da-ninhada
  // isso garante que os assets e rotas vão funcionar em
  // https://rayssa2202.github.io/Cuide-da-ninhada/
  basePath: '/Cuide-da-ninhada',
  assetPrefix: '/Cuide-da-ninhada/',

  // opcional, mas costuma ajudar em hosts estáticos
  // (gera /about/index.html em vez de /about.html)
  trailingSlash: true,
};

module.exports = nextConfig;

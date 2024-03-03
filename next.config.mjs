import withAntdLess from 'next-plugin-antd-less';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suas outras configurações do Next.js aqui
  
  // Exemplo: Habilitar imagens de domínios externos
  images: {
    domains: ['example.com'],
  },
  
  // Configurações específicas do webpack, caso necessário
  webpack(config) {
    return config;
  },
};

export default withAntdLess({
  lessVarsFilePath: './src/styles/variables.less', // Caminho para suas variáveis Less
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  
  // Outras configurações do plugin aqui
  
  // Espalha as configurações do Next.js dentro do objeto de configuração do plugin
  ...nextConfig,
});

function setupProxy({ tls }) {
  const serverResources = ['/api', '/management', '/v3/api-docs', '/h2-console', '/health'];
  const conf = [
    {
      context: serverResources,
      target: `http${tls ? 's' : ''}://localhost:${tls ? 6060 : 7070}`,
      secure: false,
      changeOrigin: tls,
    },
  ];
  return conf;
}

module.exports = setupProxy;

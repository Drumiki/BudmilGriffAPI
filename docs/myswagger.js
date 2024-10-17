window.onload = function() {
    // Begin Swagger UI call region
    const ui = SwaggerUIBundle({
      url: "./swagger.yaml",  // Hivatkozás a saját swagger fájlra
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    })
    // End Swagger UI call region
    window.ui = ui
  }

module.exports = function(app) {
  // Роуты для разных страниц
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
  });

  app.get("/shop", (req, res) => {
    res.sendFile(__dirname + "/templates/shop.html");
  });

  app.get("/stories", (req, res) => {
    res.sendFile(__dirname + "/templates/stories.html");
  });

  app.get("/crypto", (req, res) => {
    res.sendFile(__dirname + "/templates/crypto.html");
  });
};

module.exports = app => {
    const approval_akses = require("../controllers/appakses.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", approval_akses.create);
  
    // Retrieve all Tutorials
    router.get("/", approval_akses.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", approval_akses.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", approval_akses.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", approval_akses.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", approval_akses.delete);
  
    // Create a new Tutorial
    router.delete("/", approval_akses.deleteAll);
  
    app.use('/api/approval_akses', router);
  };
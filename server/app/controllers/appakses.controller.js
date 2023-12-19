const db = require("../models");
const Approval = db.approval_akses; //nama database disini
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const url = req.query.url;
    var condition = url ? { url: { [Op.iLike]: `%${url}%` } } : null;
  
    Approval.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving appakses."
        });
      });
  };

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const ket = req.params.ket;
  
    Approval.findByPk(ket)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with ket=${ket}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with ket=" + ket
        });
      });
  };

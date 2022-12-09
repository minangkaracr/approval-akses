module.exports = (sequelize, Sequelize) => {
    const Approval = sequelize.define("approval_akses", { //nama databse juga disini
      id_akses: {
        type: Sequelize.STRING //ini isi databasenya
      },
      url: {
        type: Sequelize.STRING
      },
      ket: {
        type: Sequelize.STRING
      },
      nama_gambar: {
        type: Sequelize.STRING
      }
    });
  
    return Approval;
  };
"use strict";

var response = require("../rest");
var connection = require("../connection/conec");

exports.users = function (req, res) {
  connection.query("SELECT * FROM barang", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.index = function (req, res) {
  response.ok("Hello from the Node JS RESTful side!", res);
};

exports.findUsers = function (req, res) {
  var cust_id = req.params.cust_id;
  connection.query(
    "SELECT * FROM barang where id_barang = ?",
    [cust_id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.createUsers = function (req, res) {
  var kodeBarang = req.body.kodeBarang;
  var namaBarang = req.body.namaBarang;
  var hargaBarang = req.body.hargaBarang;
  var stockBarang = req.body.stockBarang;

  connection.query(
    "INSERT INTO barang (kode_barang, nama_barang, harga_barang, stock_barang) values (?,?,?,?)",
    [kodeBarang, namaBarang, hargaBarang, stockBarang],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan Barang!", res);
      }
    }
  );
};

exports.updateUsers = function (req, res) {
  var cust_id = req.body.cust_id;
  var kodeBarang = req.body.kodeBarang;
  var namaBarang = req.body.namaBarang;
  var hargaBarang = req.body.hargaBarang;
  var stockBarang = req.body.stockBarang;

  connection.query(
    "UPDATE barang SET kode_barang = ?, nama_barang = ?, harga_barang =?,stock_barang =? WHERE id_barang = ?",
    [kodeBarang, namaBarang, hargaBarang, stockBarang, cust_id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil merubah user!", res);
      }
    }
  );
};

exports.deleteUsers = function (req, res) {
  var cust_id = req.body.cust_id;

  connection.query(
    "DELETE FROM barang WHERE id_barang = ?",
    [cust_id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menghapus barang!", res);
      }
    }
  );
};

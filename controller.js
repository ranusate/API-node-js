"use strict";

var response = require("./rest");
var connection = require("./conec");

exports.users = function (req, res) {
  connection.query("SELECT * FROM customer", function (error, rows, fields) {
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

  connection.query("SELECT * FROM customer where id = ?", [cust_id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.createUsers = function (req, res) {
  var nama = req.body.first_name;
  var jk = req.body.jk;
  var no_tlpn = req.body.no_tlpn;
  var alamat = req.body.alamat;

  connection.query(
    "INSERT INTO customer (nama, jk,no_tlpn, alamat) values (?,?,?,?)",
    [nama, jk, no_tlpn, alamat],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan customer!", res);
      }
    }
  );
};

exports.updateUsers = function (req, res) {
  var cust_id = req.body.cust_id;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;

  connection.query(
    "UPDATE customer SET first_name = ?, last_name = ? WHERE id = ?",
    [first_name, last_name, cust_id],
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

  connection.query("DELETE FROM customer WHERE id = ?", [cust_id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil menghapus user!", res);
    }
  });
};

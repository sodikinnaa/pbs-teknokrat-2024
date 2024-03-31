const express = require("express");
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  response(200, "welcome to api", "Selamat datang di api service", res);
});

app.get("/beasiswa", (req, res) => {
  const sql = "Select * from daftar_beasiswa";
  db.query(sql, (err, result) => {
    if (err) throw err;
    response(200, result, "get all data", res);
  });
});

app.get("/beasiswa/:url", (req, res) => {
  url_data = req.params.url;
  const sql = `Select * from daftar_beasiswa where url='${url_data}'`;
  db.query(sql, (error, result) => {
    if (err) throw err;
    response(200, result, "get all data", res);
  });
});

app.post("/beasiswa", (req, res) => {
  const { nama, url, kategori } = req.body;

  const sql = `insert into daftar_beasiswa (nama,url,kategori) values ('${nama}','${url}','${kategori}');`;

  db.query(sql, (err, fields) => {
    if (err) response(500, "invalid", `${url} sudah di tambahkan`, res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.insertId,
      };
      response(200, data, "Data Berhasil Ditambahkan", res);
    }
  });
});

app.put("/beasiswa", (req, res) => {
  const { url, nama, kategori } = req.body;
  const sql = `UPDATE daftar_beasiswa SET nama='${nama}', url='${url}', kategori='${kategori}' WHERE url='${url}'`;

  db.query(sql, (err, fields) => {
    if (err) response(500, "invalid", `error`, res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
      };

      response(200, data, "Data Berhasil Diupdate", res);
    } else {
      response(404, "not found", "error", res);
    }
  });
});

app.delete("/beasiswa", (req, res) => {
  const { url } = req.body;
  const sql = `DELETE FROM daftar_beasiswa where url ='${url}'`;
  db.query(sql, (err, fields) => {
    if (err) response(500, "invalid", "error", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
      };

      response(200, data, "data Berhasil dihapus", res);
    } else {
      response(404, "not found", "error", res);
    }
  });
});

app.listen(port, () => {
  console.log(`Runing in port ${port}`);
});

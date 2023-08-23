class Table {
  constructor(init) {
    this.init = init;
  }
  createHeader(data) {
    let open = "<thead class='bg-primary text-white'></tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });
    return open + close;
  }
  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";
    data.forEach((item) => {
      open += `
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td>${item.address.street}, ${item.address.suite}, ${item.address.city}</td>
        <td>${item.company.name}</td>
      </tr>
    `;
    });
    return open + close;
  }
  render(element) {
    let table = "<table class='table table-hover border'>" + this.createHeader(this.init.coloumns) + this.createBody(this.init.data) + "<table>";
    element.innerHTML = table;
  }
}

// Request data
function getData(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}

const app = document.getElementById("app");
const url = "https://jsonplaceholder.typicode.com/users";

// Mengambil data JSON
const data = getData(url, function (data) {
  const table = new Table({
    coloumns: ["ID", "Nama", "Username", "Email", "Address", "Company"],
    data: data,
  });
  table.render(app);
});

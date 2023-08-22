// membuat mini library
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
    data.forEach((d) => {
      open += `
  	<tr>
    <td>${d[0]}</td>
    <td>${d[1]}</td>
    </tr>
  `;
    });
    return open + close;
  }
  render(element) {
    let table = "<table class='table table-hover'>" + this.createHeader(this.init.coloumns) + this.createBody(this.init.data) + "<table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  coloumns: ["Nama", "Email"],
  data: [
    ["Ifran", "ifran@gmail.com"],
    ["Tito", "tito@gmail.com"],
    ["Eko", "eko@gmail.com"],
  ],
});
const app = document.getElementById("app");
table.render(app);

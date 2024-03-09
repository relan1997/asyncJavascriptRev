const table=document.querySelector("#Table");
//.key gives the name of the key
//.keyCode gives the ascii code
window.addEventListener('keydown',(e)=>{
    table.innerHTML=
        `
        <table>
        <tr>
    <th>KeyName</th>
    <th>AsciiCode</th>
    <th>Code</th>
        </tr>
        <tr>
    <td>${e.key===' '?'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
        </tr>
        </table>
        `;
})
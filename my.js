function testGS(){
    const url ="https://script.google.com/macros/s/AKfycbyK0Sx9vU1q7Jb6HVuidp8yFL6gszN6feG5OfvE6-y5iYZoYstMhhFwxw/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

document.getElementById("btn").addEventListener("click", testGS);
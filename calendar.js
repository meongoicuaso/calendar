var month_array = [
    "tháng 1", "tháng 2", "tháng 3", "tháng 4",
    "tháng 5", "tháng 6", "tháng 7", "tháng 8",
    "tháng 9", "tháng 10", "tháng 11", "tháng 12"
]
var current = new Date()
function showdate() {
    var month_31 = new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate()
    var day_1 = new Date(current.getFullYear(), current.getMonth(), 0).getDay()


    var A = "";
    for (var z = day_1; z > 0; z--) {
        A += `<td></td>`;
        document.getElementById("foot").innerHTML = A
    }
    for (var x = 1; x <= month_31; x++) {
        if (x === current.getDate() && current.getMonth() === new Date().getMonth()) {
            A += `<td style="background-color: lightblue">${x}</td>`
            document.getElementById("foot").innerHTML = A
        } else {
            A += `<td>${x}</td>`
            document.getElementById("foot").innerHTML = A
        }
    }
}

showdate()
document.getElementById("month").innerHTML = month_array[current.getMonth()]

document.getElementById("pre").onclick = () => {
    if (current.getMonth() > 0) {
        current.setMonth(current.getMonth() - 1)
        document.getElementById("month").innerHTML = month_array[current.getMonth()]
    }
    if (current.getFullYear() === 2022) {
        showdate()
    } else {
        return
    }
}
document.getElementById("next").onclick = () => {
    if (current.getMonth() < 11) {
        current.setMonth(current.getMonth() + 1)
        document.getElementById("month").innerHTML = month_array[current.getMonth()]
    }
    if (current.getFullYear() === 2022) {
        showdate()
    } else {
        return
    }

}

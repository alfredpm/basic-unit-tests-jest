const computeAge = require("../src/computeAge")

test ('Né dans un autre mois', () => {
    let birthday = new Date(2000, 0);
    let currentday = new Date(2022, 1);
    expect(computeAge(birthday,currentday)).toBe(22);
})


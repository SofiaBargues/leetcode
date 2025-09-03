

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let [year, month, day] = date.split("-").map((x) => Number(x))
    console.log(year, month, day)
    let days = day

    let daysPerMoth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    const leapYears = new Set([
        1904, 1908, 1912, 1916,
        1920, 1924, 1928,
        1932, 1936,
        1940, 1944, 1948,
        1952, 1956,
        1960, 1964, 1968,
        1972, 1976,
        1980, 1984, 1988,
        1992, 1996,
        2000,
        2004, 2008, 2012, 2016
    ])

    let i = 0
    for (let i =1;i<month;i++) {
        if (i === 2) {
            if (leapYears.has(year)) days += 29
            else days += 28
        } else {
            days += daysPerMoth[i]
        }
       
    }


    console.log(days)
    return days


};
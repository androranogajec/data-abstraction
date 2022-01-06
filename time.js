debugger;

function makeTime(hr, min, cat) {
    return new Array(hr, min, cat)
}

function minute(time) {
    if (Array.isArray(time)) {
        return time.slice(1, 2)
    } else {
        return time = time % 100
    }

}

function hour(time) {
    if (Array.isArray(time)) {
        return time.slice(0, 1)
    } else if (time >= 1200) {
        return time = Math.round((time / 100)) - 12
    } else {
        return time = Math.round(time / 100)
    }
}

function category(time) {
    if (Array.isArray(time)) {
        return time.slice(2, 3)
    } else if (time >= 1200) {
        return 'pm'
    } else {
        return 'am'
    }

}

function twoDigit(minute) {
    let s = ""
    let isAddZero = minute.toString().charAt(0) === "0" && minute.length === 2
    if (isAddZero) {
        return minute.toString()
    }
    return (minute < 10 ? s = `${0}${minute}` : minute)
}

function isNull(arg) {
    return (arg[0] === null ? true : false)
}

function to24Hour(time) {
    let transformHourTo24 = parseInt(hour(time)) + 12
    return (
        category(time).toString() === 'pm' ?
        printTime(makeTime(transformHourTo24, minute(time), null)) :
        printTime(makeTime((hour(time)), minute(time), null))
    )
}

function printTime(time) {
    return (
        isNull(category(time)) ?
        console.log(hour(time).toString(), ':', twoDigit(minute(time)).toString()) :
        console.log(hour(time).toString(), ':', twoDigit(minute(time).toString()), category(time).toString())
    )
}

printTime(makeTime(2, 55, 'pm'))
printTime(makeTime(1, 3, 'am'))
to24Hour(makeTime(1, 3, 'pm'))
to24Hour(makeTime(1, 3, 'am'))
printTime(1200)
printTime(1355)
printTime(1033)
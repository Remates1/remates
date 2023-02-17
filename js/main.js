


/* function timeH(month, day) {
    month -= 1
    const nextYear = (new Date()).getFullYear() + 0
    const nextYearDate = new Date(nextYear, month, day)

    const time = setInterval(() => {
        const todayDate = new Date()
        const secDiff = Math.floor((nextYearDate.getTime() - todayDate.getTime()) / 1000)
        const days = Math.floor((secDiff / (60 * 60)) / 24) // 0
        const hours = Math.floor(secDiff / (60 * 60)) % 24 // 0
        const minutes = Math.floor(secDiff / 60) % 60 // 0
        const seconds = Math.floor(secDiff) % 60 // 0

        const daysDigits = days.toString().length
        const hoursDigits = hours.toString().length
        const minutesDigits = minutes.toString().length
        const secondsDigits = seconds.toString().length

        if (daysDigits == 1) {
            dayElement.innerText = `0${days}`
        } else {
            dayElement.innerText = days
        }

        if (hoursDigits == 1) {
            hourElement.innerText = `0${hours}`
        } else {
            hourElement.innerText = hours
        }

        if (minutesDigits == 1) {
            minElement.innerText = `0${minutes}`
        } else {
            minElement.innerText = minutes
        }

        if (secondsDigits == 1) {
            secElement.innerText = `0${seconds}`
        } else {
            secElement.innerText = seconds
        }

        if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            const timeOut = document.querySelector('#timeOut')
            timeOut.innerHTML = "El timepo se termino"
            clearInterval(time)
        }
    })
}
timeH(2, 12) */



// should take in one argument, a number of seconds, in the following format - ns for n seconds

if (process.argv[2].includes('s')){
    seconds = parseInt(process.argv[2].split('s')[0])
}

if (process.argv[2].includes('min')){
    seconds = parseInt(process.argv[2].split('min')[0]) * 60
}

setInterval(() => {
    seconds--
    console.log(`Left: ${seconds}s`)
    if (seconds == 0) {
        clearInterval()
        process.exit(0)
    }
}, 1000)




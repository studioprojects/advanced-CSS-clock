function clock() {
    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

const interval = setInterval(clock, 1000)
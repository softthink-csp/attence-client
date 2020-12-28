export function preZero(str, n, m) {
    let zeroStr = "";
    for (let i = 0; i < n; i++) {
        zeroStr = zeroStr + '0';
    }
    return (zeroStr + str).slice(m)
}

export function getWeekDate() {
        var now = new Date();
        var day = now.getDay();
        var weeks = new Array("日", "一", "二", "三", "四", "五", "六");
        var week = weeks[day];
        return week;
}
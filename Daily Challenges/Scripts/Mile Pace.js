export default function milePace(miles, duration) {
    duration = duration.split(":");
    let minutes = Number(duration[0]);
    let seconds = Number(duration[1]);

    let totalSeconds = minutes * 60 + seconds;
    let pace = totalSeconds / miles / 60;
    minutes = String(Math.floor(pace)).padStart(2, "0");
    seconds = String(Math.floor((pace % minutes) * 60)).padStart(2, "0");

    return minutes + ":" + seconds;
}

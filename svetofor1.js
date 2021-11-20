const popup = prompt('Choose ur color: ')
switch (popup) {
    case "green":
        console.log("Go!");
        break;
    case "yellow":
        console.log("Warning");
        break;
    case "red":
        console.log("Stop!");
        break;
    default:
        console.log("No choose color!");
        break;
}
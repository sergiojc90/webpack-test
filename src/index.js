import _ from "lodash";
import myName from "./myName";

function component(){
    const element = document.createElement("div");
    const element2 = document.createElement("div");

    // Lodash, now imported by this script
    element.innerHTML = _.join(["Hello","webpack"], " ");
    
    // myName, now imported by this script
    element2.innerHTML = myName("Sergio");

    return element;
}

document.body.appendChild(component());
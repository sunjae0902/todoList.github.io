export function createButton(text, onClick){
    const button = document.createElement("button");
    button.id=text;
    button.classList.add("hidden");
    button.innerText = text;
    button.style.marginLeft = "10px";
    button.style.width = "50px";
    button.style.height ="20px";
    button.style.textAlign="center";

    button.addEventListener("click", onClick);

    return button;

}
//your code here
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");

    let draggedItem = null;

    images.forEach(image => {
        image.addEventListener("dragstart", (e) => {
            draggedItem = e.target;
            e.target.classList.add("selected");
        });

        image.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        image.addEventListener("drop", (e) => {
            e.preventDefault();
            if (draggedItem !== e.target) {
                let temp = draggedItem.style.backgroundImage;
                draggedItem.style.backgroundImage = e.target.style.backgroundImage;
                e.target.style.backgroundImage = temp;
            }
            draggedItem.classList.remove("selected");
            draggedItem = null;
        });

        image.addEventListener("dragend", () => {
            if (draggedItem) {
                draggedItem.classList.remove("selected");
                draggedItem = null;
            }
        });
    });
});

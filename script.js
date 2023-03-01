// MuhammadYusuf Akbarov Toast notifications JavaScript code

const notifications = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".buttons .btn");

 const toastDetails = {
    timer: 5000,
    success: {
        icon: "fa-circle-check",
        text: "Success: This is a success toast."
    },
    error: {
        icon: "fa-circle-xmark",
        text: "Error: This is a error toast."
    },
    warning: {
        icon: "fa-triangle-exclamation",
        text: "Warning: This is a warning toast."
    },
    info: {
        icon: "fa-circle-info",
        text: "Info: This is a Info toast."
    }
 }

 const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId) // clearing time out for the toast
    setTimeout(() => toast.remove(), 1000); //removing toast after 5 sikund
 }

const createToast = (id) => {
    const {icon, text} = toastDetails[[id]];
    const toast = document.createElement("li"); // creating new li element for toast
    toast.className = `toast ${id}`; //setting the classes for the toast
    toast.innerHTML = `<div class="column">
                              <i class= "fa-solid ${icon}"></i>
                              <span>${text}</span>
                        </div>
                              <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Append the toast to the notifications ul

    //setting time out toremove toast
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}
/// Adding a click event listener to each button to create a toast when clicked
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});
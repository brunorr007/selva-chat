document.addEventListener("DOMContentLoaded", function() {
    let username = "";
    
    window.enterChat = function() {
        const usernameInput = document.getElementById("username");
        if (usernameInput.value.trim() === "") {
            alert("Por favor, digite um nome de usuário!");
            return;
        }
        
        username = usernameInput.value.trim();
        document.getElementById("username-container").classList.add("hidden");
        document.getElementById("chat-box").classList.remove("hidden");
    };
    
    window.sendMessage = function() {
        const messageInput = document.getElementById("message-input");
        const message = messageInput.value.trim();
        
        if (message === "") return;

        const messageContainer = document.getElementById("messages");
        const messageElement = document.createElement("p");
        messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
        
        messageContainer.appendChild(messageElement);
        messageContainer.scrollTop = messageContainer.scrollHeight;

        messageInput.value = "";
    };
});

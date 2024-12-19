// Select the menu button and the menu
const menuButton = document.getElementById('menuBtn');
const menuNav = document.getElementById('menuNav');

// Toggle the menu visibility
menuButton.addEventListener('click', function() {
    menuNav.classList.toggle('show');
});

document.querySelector(".btn").addEventListener("click", function() {
    localStorage.removeItem("userData");
    window.location.href = "Sing-In.html"; // გაიყვანოს ლოგინში
});
document.querySelector(".btn").addEventListener("click", function() {
    localStorage.removeItem("userData");
    window.location.href = "Sing-In.html"; // გადაგიყვანს ლოგინში
});
window.onload = function() {
    // შევამოწმოთ, თუ მომხმარებელი უკვე შიგნით არის
    let user = JSON.parse(localStorage.getItem("userData"));
    
    if (user) {
        // გამოიყენება მომხმარებლის მონაცემები
        document.getElementById("account-box").style.display = "block"; // ჩარჩოს ხილვადობა
        document.getElementById("username-display").innerText = "Hello, " + user.username; // მომხმარებლის სახელი ჩადება
    } else {
        document.getElementById("account-box").style.display = "none"; // თუ მომხმარებელი არ არის შესული, ჩარჩო არ ჩანს
    }
};

// ლოგ-აუთის ფუნქცია
document.querySelector(".btn").addEventListener("click", function() {
    // მომხმარებლის მონაცემების წაშლა
    localStorage.removeItem("userData");

    // გადაგიყვანს ლოგინ გვერდზე
    window.location.href = "Sing-In.html"; 
});

var loader = document.getElementById("preloader");

window.addEventListener("load",function() {
    loader.style.display = "none";
})


// "Play Game" ბმულზე გადასვლა
document.querySelector(".play-game-btn a").addEventListener("click", function(event) {
    // შემოწმება, თუ მომხმარებელი არის ლოგინში
    let user = JSON.parse(localStorage.getItem("userData"));
    
    if (!user) {
        // თუ მომხმარებელი არ არის ლოგინში, გამორთავს ბმულს და აჩვენებს შეტყობინებას
        event.preventDefault(); // თავიდან აგვაცილებს გვერდზე გადასვლას
        alert("თქვენ უნდა დარეგისტრირდეთ ან შესული იყოთ სისტემაში, რომ ითამაშოთ თამაში.");
        window.location.href = "Sing-In.html"; // გადაგიყვანს ლოგინ გვერდზე
    }
});

 
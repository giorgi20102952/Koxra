// როდესაც ფორმა იწერება და გამოგზავნდება
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ფორმის ნორმალური გამოგზავნა თავიდან ავიცილოთ
    
    // მომხმარებლის შესავალი
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const avatar = document.getElementById('avatar').files[0]; // ფოტო

    // მონაცემების ვალიდაცია
    if (username === '' || email === '' || password === '') {
        document.getElementById('message').innerText = 'გთხოვთ შეავსოთ ყველა ველი!';
        return;
    }

    // ფოტო აუცილებლად უნდა იყოს ატვირთული
    if (!avatar) {
        document.getElementById('message').innerText = 'გთხოვთ ატვირთოთ ფოტო!';
        return;
    }

    // მონაცემები გადავიტანოთ ობიექტში
    const user = {
        username: username,
        email: email,
        password: password,
        avatar: URL.createObjectURL(avatar) // URL-ად ვაქცევთ ფოტოს
    };

    // მომხმარებლის მონაცემები შევინახოთ ადგილობრივ სატარეში (LocalStorage)
    localStorage.setItem('user', JSON.stringify(user));

    // რეგისტრაციის წარმატება
    document.getElementById('message').innerText = 'რეგისტრაცია წარმატებით განხორციელდა!';

    // ფორმა დავმალოთ და ანგარიშის ჩარჩო გამოვაჩინოთ
    document.getElementById('signupContainer').style.display = 'none';
    displayUserAccount();
});

// მომხმარებლის ანგარიშის საჩვენებლად ფუნქცია
function displayUserAccount() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // სახელის და ელ. ფოსტის ჩვენება
        document.getElementById('accountUsername').innerText = `მომხმარებლის სახელი: ${user.username}`;
        document.getElementById('accountEmail').innerText = `ელ. ფოსტა: ${user.email}`;

        // ფოტოს URL-ს დაამატე
        const accountAvatar = document.getElementById('accountAvatar');
        accountAvatar.src = user.avatar;

        // ფოტოს ჩატვირთვა (თუ შეცდომაა URL-ში, არ გამოჩნდება)
        if (user.avatar) {
            accountAvatar.style.display = 'block';  // თუ ფოტო არის, დავაჩვენოთ
        } else {
            accountAvatar.style.display = 'none';   // თუ არა, დავმალოთ
        }

        // ანგარიშის ბოქსი გამოჩნდება
        document.getElementById('accountContainer').style.display = 'block';
    }
}
// გამოსვლის ბუტონისთვის ფუნქცია
document.getElementById('logoutButton').addEventListener('click', function() {
    // ადგილობრივ სატარეში მონაცემების წაშლა
    localStorage.removeItem('user');
    
    // ჩარჩოს დამალვა და რეგისტრაციის ფორმის გამოჩენა
    document.getElementById('accountContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
    document.getElementById('message').innerText = '';
});

// თუ მომხმარებელი უკვე ავტორიზებულია, მაშინ ავტომატურად აჩვენე მისი ანგარიში
if (localStorage.getItem('user')) {
    displayUserAccount();
}
const Load = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    let phones = data.data;
    displayPhones(phones);
}


function searchClick(){
    const searchbtn = document.getElementById('text-input');
    const searchText = searchbtn.value;
    Load(searchText);
}
const displayPhones = phones => {

    const phoneContainer = document.getElementById('phone-container');

    phoneContainer.textContent = '';


    phones.forEach((phone) =>{
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `mx-auto border-2	w-96 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10 ">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl mx-auto" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
}
Load();
const loadPhone = async (searchText) => {
    const res = await fetch(`
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `)

    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';
    //display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if (phones.length > 12) {
       
        showAllContainer.classList.remove('hidden')
    }
    else {
        showAllContainer.classList.add('hidden')
    }
    //display only first 10 phones
    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        console.log(phone);
        //2 Creat a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        //3. set inner html
        phoneCard.innerHTML = `
                <figure><img src="${phone.image}"
                                    alt="Shoes" /></figure>
                    <div class="card-body">
                                    <h2 class="card-title">${phone.phone_name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-end">
                                        <button class="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>          
        `;
        //4 append child
        phoneContainer.appendChild(phoneCard)
    })

    //hide loading spinner
    toggleLoadingSpinner(false)
}

//Handle search button
const handleSearch = () => {
    // console.log('search handle');
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}


const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
   if (isLoading) {
    loadingSpinner.classList.remove('hidden');
   }
   else{
    loadingSpinner.classList.add('hidden')
   }
}
// loadPhone();
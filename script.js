const names1 = [];
const nameInput1 = document.getElementById('name-input1');
const addButton1 = document.getElementById('add-button1');
const question1 = document.getElementById('question1');
const namesList1 = document.getElementById('names-list1');

addButton1.addEventListener('click', () => {
    const name = nameInput1.value.trim();
    if (name !== '') {
        names1.push(name);
        nameInput1.value = '';

        if (names1.length < 10) {
            question1.textContent = `Anna kaverin nimi (${names1.length}/10):`;
        } else {
            question1.textContent = 'Anna kaverin nimi 10/10';
            nameInput1.style.display = 'none';
            addButton1.style.display = 'none';
            displayNames1();
        }
    }
});

function displayNames1() {
    namesList1.innerHTML = '';
    names1.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        namesList1.appendChild(li);
    });
}


const names2 = [];
const nameInput2 = document.getElementById('name-input2');
const addButton2 = document.getElementById('add-button2');
const namesList2 = document.getElementById('names-list2');
const sortAscButton = document.getElementById('sort-asc');

addButton2.addEventListener('click', () => {
    const name = nameInput2.value.trim();
    if (name !== '') {
        names2.push(name);
        updateNamesList2();
        nameInput2.value = '';
    }
});

function updateNamesList2() {
    namesList2.innerHTML = '';
    names2.forEach((name, index) => {
        const li = document.createElement('li');
        li.textContent = name;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Poista';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            names2.splice(index, 1);
            updateNamesList2();
        });

        li.appendChild(deleteButton);
        namesList2.appendChild(li);
    });
}

sortAscButton.addEventListener('click', () => {
    names2.sort();
    updateNamesList2();
});



const showVersion1Button = document.getElementById('show-version1');
const showVersion2Button = document.getElementById('show-version2');
const version1Div = document.getElementById('version1');
const version2Div = document.getElementById('version2');

showVersion1Button.addEventListener('click', () => {
    version1Div.classList.add('active');
    version2Div.classList.remove('active');
    showVersion1Button.classList.add('active');
    showVersion2Button.classList.remove('active');
});

showVersion2Button.addEventListener('click', () => {
    version1Div.classList.remove('active');
    version2Div.classList.add('active');
    showVersion2Button.classList.add('active');
    showVersion1Button.classList.remove('active');
});
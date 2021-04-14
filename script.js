const button_back = document.getElementById("left-button");
const button_right = document.getElementById("right-button");
const button_rand = document.getElementById("rand-button");

const img = document.getElementById("persons-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


var employees = [

    {id: 1,
    image: 'images/img3.jpg',
    author: 'Bridge Jones',
    job: 'UX Designer',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?'
    },
    {id: 2,
    image: 'images/img1.jpg',
    author: 'Amanda Bella',
    job: 'Human Resources',
    info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {id: 3,
    image: 'images/img2.jpg',
    author: 'Samanta schweblin',
    job: 'Marketing Manager',
    info: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },
    {id: 4,
    image: 'images/img4.jpg',
    author: 'Anna Ivanenko',
    job: 'Front End Developer',
    info: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '
    },
    {id: 5,
    image: 'images/img5.jpg',
    author: 'Tom Florint',
    job: 'Software Developer',
    info: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
    },

];

let current_item = 0;

//loading the initial items
// window.addEventListener("DOMContentLoader", function () {
//     const item = employees[current_item];
//     img.textContent = item.image;
//     author.textContent = item.author;
//     job.textContent = item.job;
//     info.textContent = item.info;

// });

//show persons image 

function showPerson(person) {
    const item = employees[person];
    img.src = item.image;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

//forward button click
button_right.onclick = function() {
    console.log("Right pressed");
    current_item++;
    if (current_item > employees.length - 1) {
        current_item = 0
    }
    showPerson(current_item);
};
//backwards button click
button_back.onclick = function() {
    console.log("Back pressed");
    current_item--;

    if (current_item < 0) {
        current_item = employees.length -1;
    }
    showPerson(current_item);
};

//random button click
button_rand.onclick = function() {

    current_item = Math.floor(Math.random() * employees.length);
    showPerson(current_item);
};
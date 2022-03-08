fetch("./word_list.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => console.log(jsondata[1]['word']));
'use strict';

fetch('http://www.omdbapi.com/?i=tt1905041&apikey=7e6decf1')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status == "success") {
        return;
      }

    
     
      console.log(data.title);
    });
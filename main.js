        var characters = [
        {name:"Albus Dumbledore", role:"staff", house:"Gryffindor",gender:"m",alignment:"good"},    
        {name:"Nymphadora Tonks", role:"", house:"Hufflepuff",gender:"f",alignment:"good"},    
        {name:"Ron Weasley", role:"student", house:"Gryffindor",gender:"m",alignment:"good"},    
        {name:"Ginny Weasley", role:"student", house:"Gryffindor",gender:"f",alignment:"good"},    
        {name:"Hermione Granger", role:"student", house:"Gryffindor",gender:"f",alignment:"good"},    
        {name:"Mad-eye Moody", role:"staff", house:"",gender:"m",alignment:"good"},    
        {name:"Prof McGonagall", role:"staff", house:"Gryffindor",gender:"f",alignment:"good"},    
        {name:"Harry Potter", role:"student", house:"Gryffindor",gender:"m",alignment:"good"},    
        {name:"Draco Malfoy", role:"student", house:"Slytherin",gender:"m",alignment:"evil"},    
        {name:"Hagrid", role:"staff", house:"Gryffindor",gender:"m",alignment:"good"},    
        {name:"Luna Lovegood", role:"student", house:"Ravenclaw",gender:"f",alignment:"good"},    
        {name:"Voldemort", role:"", house:"Slytherin",gender:"m",alignment:"evil"},    
        {name:"Bellatrix Lestrange", role:"", house:"Slytherin",gender:"f",alignment:"evil"},           
        {name:"Severus Snape", role:"staff", house:"Slytherin",gender:"m",alignment:"?"}
        ];

  $(document).ready(function(){
      var houses = {};

    for(let i =0; i < characters.length; i++){
       if (characters[i].house) {
          houses[characters[i].house] = true;
      }
    }
      var buttonsContainer = $('#buttons');
 
      for (var house in houses) {
        if (houses.hasOwnProperty(house)) {
          buttonsContainer.append('<button class="house-btn">' + house + '</button>');
        }
     $('.house-btn').addClass('header');
      }

    function populateTable(house) {
        $('table tr:not(:first)').remove();
        characters.forEach(function(character) {
          if (character.house === house) {
            $('table').append(
              '<tr>' +
              '<td>' + character.name + '</td>' +
              '<td>' + character.role + '</td>' +
              '<td>' + character.house + '</td>' +
              '<td>' + character.gender + '</td>' +
              '<td>' + character.alignment + '</td>' +
              '</tr>'
            );
            
          }
        });
      $('table').addClass('selected');
              
      }
    

    $('.house-btn').click(function() {
        var house = $(this).text();
        populateTable(house);
      });
    $('#resetBtn').click(function() {
        $('table tr:not(:first)').remove(); 
      });
    
    });

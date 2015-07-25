// Parse JSON and show info
$(document).ready(function() {
  $.ajax({
    //url: "http://localhost:8888/thes/custom/json/appart-thes.json",
    url: "custom/json/appart-thes.json",
    dataType: "text",
    success: function(appartthes) {
      var json = $.parseJSON(appartthes);
      $.each(json, function() {
        if(this.Enseigne == "Pairi Daiza"){
          var whoDesc = "de Pairi Daiza";
        }else if(this.Enseigne == "Palais des Thés"){
          var whoDesc = "du Palais des Thés";
        }else{
          var whoDesc = "de la Septième Tasse"; 
        }
        if(this.jourNuit == "Jour"){
          var jourNuitImg = "jour.png";
        }else if (this.jourNuit == "Nuit"){
          var jourNuitImg = "nuit.png";
        }else{
          var jourNuitImg = "jourNuit.png";
        }
        $("#accordion").append('<div id="'+this.ID+'" class="panel panel-default '+this.varieteID+'" title="'+this.varieteID+'"><div class="panel-heading" role="tab" id="heading'+this.ID+'"><h4 class="panel-title"><a class="nom" data-toggle="collapse" data-parent="#accordion" href="#collapse'+this.ID+'" aria-expanded="true" aria-controls="collapse'+this.ID+'">' + this.Nom + '<span class="iconAccordion"></span></a></h4></div><div id="collapse'+this.ID+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+this.ID+'"><div class="panel-body"><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 leftSide"><strong>Variété : </strong> '+this.Variété+'<br /><strong>Origine :</strong> '+this.Origine+'</div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 rightSide"><div class="itemIcons"><img class="icons" src="custom/img/temp.png" alt="Température d\'infusion" /> '+this.Temp+'</div><div class="itemIcons"><img class="icons" src="custom/img/duree.png" alt="Durée d\'infusion" />'+this.Durée+'</div><div class="itemIcons"><img class="icons" src="custom/img/quantite.png" alt="Quantité" /> '+this.Quantité+'</div><div class="itemIcons"><img class="icons" src="custom/img/'+jourNuitImg+'" alt="'+this.jourNuit+'" /></div></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><strong>Description '+whoDesc+' :</strong> '+this.Description+'</div></div>');
      });
    }
  });
});

/* Filters by "type de thé" */
$(document).ready(function() {
    $('#filter-type li a').click(function(e) {
      $('.panel').show();
      for (i=0; i<100; i++){
        var menuID = $(this).attr('id');
        var panelTitle = $("#"+i).attr("title");
        if(menuID != panelTitle){
//          $($("#"+i).hasClass(panelTitle)).show();
          $('#'+i).hide();
        }
      }
    });
});
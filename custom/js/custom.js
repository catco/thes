// Parse JSON and show info
$(document).ready(function() {
  $.ajax({
    url: "http://localhost:8888/thes/custom/json/appart-thes.json",
    //url: "custom/json/appart-thes.json",
    dataType: "text",
    success: function(appartthes) {
      var json = $.parseJSON(appartthes);
      $.each(json, function() {
        if (this.Enseigne == "Pairi Daiza"){
          var whoDesc = "de Pairi Daiza";
        }else if(this.Enseigne == "Palais des Thés"){
          var whoDesc = "du Palais des Thés";
        }else{
          var whoDesc = "de la Septième Tasse"; 
        }
        $("#accordion").append('<div id="'+this.ID+'" class="panel panel-default '+this.varieteID+'" title="'+this.varieteID+'"><div class="panel-heading" role="tab" id="heading'+this.ID+'"><h4 class="panel-title"><a class="nom" data-toggle="collapse" data-parent="#accordion" href="#collapse'+this.ID+'" aria-expanded="true" aria-controls="collapse'+this.ID+'">' + this.Nom + '<span class="iconAccordion"></span></a></h4></div><div id="collapse'+this.ID+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+this.ID+'"><div class="panel-body"><strong>Variété : </strong> '+this.Variété+'<br /><strong>Origine :</strong> '+this.Origine+'<br /><strong>Température d\'infusion</strong> : '+this.Temp+'<br /><strong>Durée d\'infusion</strong> : '+this.Durée+'<br /><strong>Quantité par tasse :</strong> '+this.Quantité+'<br /><strong>Jour/Nuit ?</strong> '+this.jourNuit+'<br /><strong>Description '+whoDesc+' :</strong> '+this.Description+'<br /></div>');
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
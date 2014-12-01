// Parse JSON and show info
$(document).ready(function() {
  $.ajax({
    url: "custom/json/appart-thes.json",
    dataType: "text",
    success: function(appartthes) {
      var json = $.parseJSON(appartthes);
      $.each(json, function() {
        $("#accordion").append('<div class="panel panel-default"><div class="panel-heading" role="tab" id="heading'+this.ID+'"><h4 class="panel-title"><a class="nom" data-toggle="collapse" data-parent="#accordion" href="#collapse'+this.ID+'" aria-expanded="true" aria-controls="collapse'+this.ID+'">' + this.Nom + '<span class="iconAccordion"></span></a></h4></div><div id="collapse'+this.ID+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+this.ID+'"><div class="panel-body"><strong>Variété : </strong> '+this.Variété+'<br /><strong>Origine :</strong> '+this.Origine+'<br /><strong>Température d\'infusion</strong> : '+this.Temp+'<br /><strong>Durée d\'infusion</strong> : '+this.Durée+'<br /><strong>Quantité par tasse :</strong> '+this.Quantité+'<br /><strong>Jour/Nuit ?</strong> '+this.jourNuit+'<br /><strong>Appréciation Cyrille :</strong> '+this.AppCyrille+'<br /><strong>Appréciation Catherine :</strong> '+this.AppCat+'<br /><strong>Description du Palais des Thés :</strong> '+this.Description+'<br /></div>');
      });
    }
  });
});
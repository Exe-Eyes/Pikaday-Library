// (Uncomment this on your webflow project) <script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"></script> 

$('.date-picker').each(function() {
    $(this).data('pikaday', new Pikaday({ 
      field: $(this)[0],
      toString: function(date) {
        var parts = [('0'+(date.getMonth()+1)).slice(-2), ('0'+date.getDate()).slice(-2), date.getFullYear()];
        return parts.join("/");
    	},
      disableWeekends: false,
      firstDay: 0,
      minDate: new Date(),
    }));
});

picker.gotoToday()
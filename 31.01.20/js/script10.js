


var x = new Date(),
 month = x.getMonth();

 ((month<=1)&&(month=11))>0 ?  alert('It\'s winter'): 
((month>1) && (month<=4))>0 ? alert('It\'s spring'): 
((month>4) && (month<= 7))>0? alert('It\'s sammertime'):
((month>7) && (month<=10))>0 ?  alert('It\'s autumn'): alert('It\'sxz') ;


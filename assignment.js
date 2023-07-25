//https://github.com/ahad77/assignment3

//Problem: 1
function kilometerToMeter(km){
    var meter =0;
    meter =  km*1000;
    return meter;
}
var count = kilometerToMeter(5);
console.log(count);


//Problem: 2
function budgetCalculator(w,p,l){
    var cost = 0;
    var watch = 50*w;
    var phone = 100*p;
    var laptop = 500*l;
    cost = watch+phone+laptop;
    return cost;
}
var totalcost = budgetCalculator(1,3,5);
console.log(totalcost);


//Problem: 3
function hotelCost(night){
    var cost =0;
    if(night<=10){
        cost = night*100;
    }
    else if(night<=20){
        var firstphase =10*100;
        var remainingnight= night-10;
        var secondphase = remainingnight*80;
        cost = firstphase + secondphase;
    }
    else{
        var firstphase =10*100;
        var secondphase = 10*80;
        var remainingnight= night-20;
        var thirdphase = remainingnight*50;
        cost = firstphase + secondphase + thirdphase;
    }
    return cost;
}
var totalcost = hotelCost(11);
console.log(totalcost);


//Problem: 4
function megaFriend(arra)
{
  var max_name = arra[0].length;
  var result = arra[0];
  for (var i = 1; i < arra.length; i++) {
      var maxi = arra[i].length;
      if (maxi > max_name) {
          result = arra[i];
          max_name = maxi;
      }
  }
  return result;
}
var lname = megaFriend(['ahad', 'lisan', 'jawad','Miftah','kaif']);
console.log(lname);
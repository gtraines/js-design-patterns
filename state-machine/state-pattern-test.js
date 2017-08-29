describe('game-loop', function(){
  it('loops through the correct functions', function(){
    var testPassenger = {
      firstName: 'Pete',
      lastName: 'Mitchell'
    };
    
    var testFlight = {
      number: '3443',
      carrier: 'AceAir',
      destination: 'Miramar, CA'
    }; 
    
    var reservation = createReservation(testPassenger, testFlight);
    expect(reservation.passengerInfo).toBe(testPassenger);
  });
});

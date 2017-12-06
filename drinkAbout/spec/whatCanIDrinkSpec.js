describe("whatCanIDrink", function() {

    describe("whatCanIDrink", function() {
        it("should check the age and give a drink appropriate to the age", function() {
            whatCanIDrink.age(0);
            expect(return).toBe("I doubt that. Too young to have entered data!");
        });
 
        it("should not recognize text", function() {
            whatCanIDrink.age("one");
            expect(return).toBe("Sorry. Please enter your age as a numerical value.");
        });

        it("should return a reasonable answer for a reasonable age", function() {
            whatCanIDrink.age(18);
            expect(return).toBe("Drink Coke");
        });

});
function expect(value1) {
   return {
      to: {
         equal: value2 => {
            return value1 === value2;
         }
      }
   }
}



expect(4).to.equal(2+2) // return True
expect(5).to.equal(2+2) // return False

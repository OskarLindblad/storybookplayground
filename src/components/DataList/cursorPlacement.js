export const cursorPlacement = (before, after) => {
  before = before.split("");
  after = after.split("");

  if (before.length < after.length) {
    //remove letters
    for (let i = 0; i < after.length; i++) {
      if (after[i] !== before[i]) {
        return i;
        //If (space ) {skip}
      }
    }
  }
  if (before.length > after.length) {
    //console.log("lägger till");
  }
};

/*


https://www.w3schools.com/jsref/prop_select_selectedindex.asp

  const test = () => {
    document.getElementById(id).focus();
    document.getElementById(id).setSelectionRange(1, 1); 
  };


*/

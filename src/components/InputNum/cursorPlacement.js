export const cursorPlacement = (before, after, currentIndex) => {
  before = before.split('')
  after = after.split('')
  console.log(currentIndex + ' i func')
  // If more than 2 characters are added/removed jump to end
  // (Nr is probably copy pasted or edited)
  if (after.length > before.length + 2 || before.length > after.length + 2) {
    return after.length
  }

  if (before.length > after.length) {
    //remove letters
    console.log('removing numbers')
    var spaces = 0

    for (let i = 0; i < currentIndex - 1; i++) {
      if (before[i] === ' ') {
        spaces--
      }
    }
    for (let i = 0; i < currentIndex - 1; i++) {
      if (after[i] === ' ') {
        spaces++
      }
    }

    if (after[currentIndex - 2 + spaces] === ' ') {
      spaces--
    }
    console.log('spaces', spaces)
    return currentIndex - 1 + spaces
  }

  if (before.length < after.length) {
    console.log('adding numbers')

    spaces = 0

    for (let i = 0; i < currentIndex; i++) {
      if (before[i] === ' ') {
        spaces--
      }
    }
    for (let i = 0; i < currentIndex; i++) {
      if (after[i] === ' ') {
        spaces++
      }
    }
    console.log('spaces', spaces)
    return currentIndex + 1 + spaces
  }

  if (before.length === after.length) {
    // for-loop
    return after.length
  }
}

/*


https://www.w3schools.com/jsref/prop_select_selectedindex.asp

  const test = () => {
    document.getElementById(id).focus();
    document.getElementById(id).setSelectionRange(1, 1); 
  };



*Checklist 
  const [indexTracker, setInputIndex] = useState(0)

add to inPut
  onKeyDown={(blockInvalidChar, moveCursor)}
  onClick={() =>setIndexTracker(document.getElementById(id).selectionStart)}


*/

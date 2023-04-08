const merge = (collection_1: number[], collection_2: number[]): number[] => {
  const collection: number[] = [...collection_1, ...collection_2]
  const collection_length: number = collection.length
  let swapped: boolean = true

  for (let i: number = 0; i < collection_length - 1; i += 1) {
    swapped = false
    for (let j: number = 0; j < collection_length - i; j += 1) {
      if (collection[j] > collection[j + 1]) {
        let temp: number = collection[j]
        collection[j] = collection[j + 1]
        collection[j + 1] = temp
        swapped = true
      }
    }
    if (swapped === false) {
      break
    }
  }
  return collection
}

export default merge

export const paginationRange = (numberForNumberOfPages: number): Array<number> => {
    let array: Array<number> = []
    for (let i = 1; i <= numberForNumberOfPages; i++) {
         array.push(i)
    }
    return array
}

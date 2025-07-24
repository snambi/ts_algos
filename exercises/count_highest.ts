
export class HCounter {
    count(input: number[]) : number {
        
        let count=0;
        let highest=0;

        for (let x of input) {
        
            if (x > highest) {
                highest = x;
                count++;
            }
        }
        return count;
    }
}
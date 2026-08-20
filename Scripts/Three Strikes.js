export default function squaresWithThree(n) {
    let count = 0;

    for (let i = 1; i < n + 1; i++) {
        let num = Math.pow(i, 2);
        const three = String(num)
            .split("")
            .filter((number) => number == "3").length;

        if (three > 0) count += 1;
    }

    return count;
}

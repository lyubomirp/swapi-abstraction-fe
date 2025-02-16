export const isNumeric = (value: string) => {
    if (value.includes('-')) {
        // We have a range of values, we set the MAX
        value = value.split('-')[1];
    }

    return /^[0-9.,]+$/.test(value);
}
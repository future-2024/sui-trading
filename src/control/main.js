export const ExportAddress = (address) => {
    const value = address.slice(0, 5) + '...' + address.slice(address.length - 6, address.length);
    return value
}
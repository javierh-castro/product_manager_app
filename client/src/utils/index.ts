export function formatlurrency (amount: number) {
    return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}
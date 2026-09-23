// AFTER — improved code quality and security

const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
    if (price < 0 || quantity < 0) {
        throw new Error("price and quantity must be >= 0");
    }

    const subtotal = price * quantity;

    return customerType === "vip"
        ? subtotal * (1 - VIP_DISCOUNT)
        : subtotal;
}

// API keys should come from environment variables,
// never be hard-coded in source code.
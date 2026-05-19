export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

export function isValidName(name) {
    const nameRegex = /^[a-zA-Z\s'-]{2,}$/;
    return nameRegex.test(name.trim());
}

export function isValidStreet(street) {
    return street.trim().length >= 3;
}

export function isValidPostalCode(postalCode) {
    const postalCodeRegex = /^[\d\s\-]{3,}$/;
    return postalCodeRegex.test(postalCode.trim());
}

export function isValidCity(city) {
    const cityRegex = /^[a-zA-Z\s'-]{2,}$/;
    return cityRegex.test(city.trim());
}

export function isNotEmpty(value) {
    return value.trim().length > 0;
}


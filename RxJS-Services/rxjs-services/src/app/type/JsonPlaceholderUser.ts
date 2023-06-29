interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geolocation;
}

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string;
    company: Company;
}
export interface UsersResponse {
    id:             string;
    documentNumber: string;
    fullName:       string;
    isActive:       boolean;
    role:           Role[];
}

export enum Role {
    User = "user",
}

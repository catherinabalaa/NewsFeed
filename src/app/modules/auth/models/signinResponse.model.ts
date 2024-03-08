export interface SigninResponse {
    Result:   boolean;
    Token:    string;
    RefreshToken: string;
    Username: string;
    Password: string;
}
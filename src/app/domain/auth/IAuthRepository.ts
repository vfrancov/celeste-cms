export interface IAuthRepository {
    authentication(body: any): any
    recovery(user: any): any
}
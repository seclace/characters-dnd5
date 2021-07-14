export class ApiService {
  private static readonly baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000/api';
  private static token: string;

  static setToken(t: string): void {
    ApiService.token = t;
  }

  static async getClasses(): Promise<any[]> {
    return fetch(`${ApiService.baseUrl}/class`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${ApiService.token}`,
      }),
    })
      .then(res => res.json());
  }
}

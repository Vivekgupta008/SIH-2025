// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// export interface Tourist {
//   id: number;
//   name: string;
//   email: string;
//   phone?: string;
//   latitude: number;
//   longitude: number;
//   status: string;
//   last_location_update: string;
//   emergency_contact?: string;
//   created_at: string;
// }

// export interface Alert {
//   id: number;
//   tourist_id: number;
//   alert_type: string;
//   message: string;
//   severity: string;
//   created_at: string;
//   is_resolved: string;
// }

// export interface Stats {
//   total_tourists: number;
//   active_tourists: number;
//   total_alerts: number;
//   unresolved_alerts: number;
//   risk_zones: number;
// }

// export interface RiskZone {
//   id: number;
//   name: string;
//   description: string;
//   latitude: number;
//   longitude: number;
//   radius: number;
//   created_at: string;
// }

// export interface CreateTouristData {
//   name: string;
//   email: string;
//   phone?: string;
//   latitude: number;
//   longitude: number;
//   emergency_contact?: string;
// }

// export interface UpdateTouristData extends Partial<CreateTouristData> {
//   status?: string;
// }

// export interface CreateRiskZoneData {
//   name: string;
//   description: string;
//   latitude: number;
//   longitude: number;
//   radius: number;
// }

// class ApiClient {
//   private baseUrl: string;

//   constructor(baseUrl: string) {
//     this.baseUrl = baseUrl;
//   }

//   private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
//     const url = `${this.baseUrl}${endpoint}`;
//     const config: RequestInit = {
//       headers: {
//         'Content-Type': 'application/json',
//         ...options.headers,
//       },
//       ...options,
//     };

//     try {
//       const response = await fetch(url, config);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       return await response.json();
//     } catch (error) {
//       console.error('API request failed:', error);
//       throw error;
//     }
//   }

//   // Tourists API
//   async getTourists(): Promise<Tourist[]> {
//     return this.request<Tourist[]>('/api/tourists/');
//   }

//   async getTourist(id: number): Promise<Tourist> {
//     return this.request<Tourist>(`/api/tourists/${id}`);
//   }

//   async createTourist(tourist: CreateTouristData): Promise<Tourist> {
//     return this.request<Tourist>('/api/tourists/', {
//       method: 'POST',
//       body: JSON.stringify(tourist),
//     });
//   }

//   async updateTourist(id: number, tourist: UpdateTouristData): Promise<Tourist> {
//     return this.request<Tourist>(`/api/tourists/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(tourist),
//     });
//   }

//   async deleteTourist(id: number): Promise<void> {
//     return this.request<void>(`/api/tourists/${id}`, {
//       method: 'DELETE',
//     });
//   }

//   // Alerts API
//   async getAlerts(): Promise<Alert[]> {
//     return this.request<Alert[]>('/api/alerts/');
//   }

//   async createAlert(alert: Omit<Alert, 'id' | 'created_at'>): Promise<Alert> {
//     return this.request<Alert>('/api/alerts/', {
//       method: 'POST',
//       body: JSON.stringify(alert),
//     });
//   }

//   // Stats API
//   async getStats(): Promise<Stats> {
//     return this.request<Stats>('/api/stats/');
//   }

//   // Risk Zones API
//   async getRiskZones(): Promise<RiskZone[]> {
//     return this.request<RiskZone[]>('/api/risk-zones/');
//   }

//   async createRiskZone(riskZone: CreateRiskZoneData): Promise<RiskZone> {
//     return this.request<RiskZone>('/api/risk-zones/', {
//       method: 'POST',
//       body: JSON.stringify(riskZone),
//     });
//   }

//   async updateRiskZone(id: number, riskZone: Partial<CreateRiskZoneData>): Promise<RiskZone> {
//     return this.request<RiskZone>(`/api/risk-zones/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(riskZone),
//     });
//   }

//   async deleteRiskZone(id: number): Promise<void> {
//     return this.request<void>(`/api/risk-zones/${id}`, {
//       method: 'DELETE',
//     });
//   }
// }

// export const apiClient = new ApiClient(API_BASE_URL);



// utils/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Tourist {
  id: number;
  name: string;
  email: string;
  phone?: string;
  latitude: number;
  longitude: number;
  status: string;
  last_location_update: string;
  emergency_contact?: string;
  created_at: string;
}

export interface Alert {
  id: number;
  tourist_id: number;
  alert_type: string;
  message: string;
  severity: string;
  created_at: string;
  is_resolved: string;
}

export interface Stats {
  total_tourists: number;
  active_tourists: number;
  total_alerts: number;
  unresolved_alerts: number;
  risk_zones: number;
}

export interface RiskZone {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  radius: number;
  created_at: string;
}

export interface CreateTouristData {
  name: string;
  email: string;
  phone?: string;
  latitude: number;
  longitude: number;
  emergency_contact?: string;
}

export interface UpdateTouristData extends Partial<CreateTouristData> {
  status?: string;
}

export interface CreateRiskZoneData {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  radius: number;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // -----------------------
    // Server/build guard:
    // If running on server (including during next build/prerender),
    // return quick default-shaped values so the build does not hang.
    // -----------------------
    if (typeof window === 'undefined') {
      if (endpoint.startsWith('/api/tourists')) {
        return Promise.resolve([] as unknown as T);
      }
      if (endpoint.startsWith('/api/alerts')) {
        return Promise.resolve([] as unknown as T);
      }
      if (endpoint.startsWith('/api/stats')) {
        return Promise.resolve({
          total_tourists: 0,
          active_tourists: 0,
          total_alerts: 0,
          unresolved_alerts: 0,
          risk_zones: 0,
        } as unknown as T);
      }
      if (endpoint.startsWith('/api/risk-zones')) {
        return Promise.resolve([] as unknown as T);
      }
      // fallback safe empty object
      return Promise.resolve({} as unknown as T);
    }

    // -----------------------
    // Client-side (browser) — perform real network call
    // -----------------------
    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Tourists API
  async getTourists(): Promise<Tourist[]> {
    return this.request<Tourist[]>('/api/tourists/');
  }

  async getTourist(id: number): Promise<Tourist> {
    return this.request<Tourist>(`/api/tourists/${id}`);
  }

  async createTourist(tourist: CreateTouristData): Promise<Tourist> {
    return this.request<Tourist>('/api/tourists/', {
      method: 'POST',
      body: JSON.stringify(tourist),
    });
  }

  async updateTourist(id: number, tourist: UpdateTouristData): Promise<Tourist> {
    return this.request<Tourist>(`/api/tourists/${id}`, {
      method: 'PUT',
      body: JSON.stringify(tourist),
    });
  }

  async deleteTourist(id: number): Promise<void> {
    return this.request<void>(`/api/tourists/${id}`, {
      method: 'DELETE',
    });
  }

  // Alerts API
  async getAlerts(): Promise<Alert[]> {
    return this.request<Alert[]>('/api/alerts/');
  }

  async createAlert(alert: Omit<Alert, 'id' | 'created_at'>): Promise<Alert> {
    return this.request<Alert>('/api/alerts/', {
      method: 'POST',
      body: JSON.stringify(alert),
    });
  }

  // Stats API
  async getStats(): Promise<Stats> {
    return this.request<Stats>('/api/stats/');
  }

  // Risk Zones API
  async getRiskZones(): Promise<RiskZone[]> {
    return this.request<RiskZone[]>('/api/risk-zones/');
  }

  async createRiskZone(riskZone: CreateRiskZoneData): Promise<RiskZone> {
    return this.request<RiskZone>('/api/risk-zones/', {
      method: 'POST',
      body: JSON.stringify(riskZone),
    });
  }

  async updateRiskZone(id: number, riskZone: Partial<CreateRiskZoneData>): Promise<RiskZone> {
    return this.request<RiskZone>(`/api/risk-zones/${id}`, {
      method: 'PUT',
      body: JSON.stringify(riskZone),
    });
  }

  async deleteRiskZone(id: number): Promise<void> {
    return this.request<void>(`/api/risk-zones/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

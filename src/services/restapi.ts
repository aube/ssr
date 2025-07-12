import { ref } from "vue";
import { useGeneralStore } from "@/stores/general";
import { useNotificationStore } from '@/stores/notification'

const store = useNotificationStore()
const { danger : dangerNotify } = store

const generalStore = useGeneralStore()

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export function useRestApi(baseURL = generalStore.apiBaseURL) {
  const loading = ref(false);

  async function request<T>(
    endpoint: string,
    method: HttpMethod = "GET",
    body?: unknown,
  ): Promise<ApiResponse<T>> {
    console.log("endpoint ==> ", endpoint);
    loading.value = true;
    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          // Add auth headers if needed
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = (await response.json()) as T;
      return { data, error: null, loading: false };
    } catch (err) {
      const error = err instanceof Error ? err.message : "Unknown error"
      dangerNotify(error, 5000);
      return {
        data: null,
        error,
        loading: false,
      };
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    request,
    get: <T>(endpoint: string) => request<T>(endpoint),
    post: <T>(endpoint: string, body: unknown) =>
      request<T>(endpoint, "POST", body),
    put: <T>(endpoint: string, body: unknown) =>
      request<T>(endpoint, "PUT", body),
    patch: <T>(endpoint: string, body: unknown) =>
      request<T>(endpoint, "PATCH", body),
    delete: <T>(endpoint: string) => request<T>(endpoint, "DELETE"),
  };
}
